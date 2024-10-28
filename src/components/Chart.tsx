import { useEffect, useRef, useState } from 'react';
import { hospital_layer_cost, bridge_layer, hospital_layer_damage } from '../layers';
import { view } from '../Scene';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import Query from '@arcgis/core/rest/support/Query';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';

import '../App.css';
import { CalciteLabel } from '@esri/calcite-components-react';
import {
  generateChartBridge,
  generateChartHospital,
  thousands_separators,
  totalNumberBridge,
  totalNumberHopital,
} from '../Query';
import {
  primaryLabelColor,
  statusHospitalColor,
  statusHospitalLabel,
  statusHospitalQuery,
  valueLabelColor,
} from '../statusUniqueValues';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

// Dispose function
function maybeDisposeRoot(divId: any) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id === divId) {
      root.dispose();
    }
  });
}

///*** Others */
/// Draw chart
const HospitalChart = () => {
  // 1. Hospital
  const pieSeriesRef = useRef<unknown | any | undefined>({});
  const legendRef = useRef<unknown | any | undefined>({});
  const chartRef = useRef<unknown | any | undefined>({});
  const [hopistalData, setHospitalData] = useState([
    {
      category: String,
      value: Number,
      sliceSettings: {
        fill: am5.color('#00c5ff'),
      },
    },
  ]);

  const chartID = 'pie-two';
  const [hospitalNumber, setHospitalNumber] = useState([]);

  // 2. Bridge
  const pieSeriesRef2 = useRef<unknown | any | undefined>({});
  const legendRef2 = useRef<unknown | any | undefined>({});
  const chartRef2 = useRef<unknown | any | undefined>({});
  const [bridgeData, setBridgeData] = useState([
    {
      category: String,
      value: Number,
      sliceSettings: {
        fill: am5.color('#00c5ff'),
      },
    },
  ]);

  const chartID_bridge = 'pie-three';
  const [bridgeNumber, setBridgeNumber] = useState([]);

  useEffect(() => {
    generateChartHospital().then((result: any) => {
      setHospitalData(result);
    });

    totalNumberHopital().then((result: any) => {
      setHospitalNumber(result);
    });

    generateChartBridge().then((result: any) => {
      setBridgeData(result);
    });

    totalNumberBridge().then((result: any) => {
      setBridgeNumber(result);
    });
  }, []);

  // useLayoutEffect runs synchronously. If this is used with React.lazy,
  // Every time calcite action is fired, the chart is fired, too.
  // To avoid, use useEffect instead of useLayoutEffect

  // 1. Pie Chart for Land Acquisition
  useEffect(() => {
    // Dispose previously created root element
    maybeDisposeRoot(chartID);

    var root = am5.Root.new(chartID);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      }),
    );
    chartRef.current = chart;

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var pieSeries = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: 'Series',
        categoryField: 'category',
        valueField: 'value',
        //legendLabelText: "[{fill}]{category}[/]",
        legendValueText: "{valuePercentTotal.formatNumber('#.')}% ({value})",
        radius: am5.percent(45), // outer radius
        innerRadius: am5.percent(28),
        scale: 2.1,
      }),
    );
    pieSeriesRef.current = pieSeries;
    chart.series.push(pieSeries);

    // values inside a donut
    let inner_label = pieSeries.children.push(
      am5.Label.new(root, {
        text: '[#ffffff]{valueSum}[/]\n[fontSize: 7px; #d3d3d3; verticalAlign: super]HOSPITALS[/]',
        fontSize: 15,
        centerX: am5.percent(50),
        centerY: am5.percent(40),
        populateText: true,
        oversizedBehavior: 'fit',
        textAlign: 'center',
      }),
    );

    pieSeries.onPrivate('width', (width: any) => {
      inner_label.set('maxWidth', width * 0.7);
    });

    // Set slice opacity and stroke color
    pieSeries.slices.template.setAll({
      toggleKey: 'none',
      fillOpacity: 0.9,
      stroke: am5.color('#ffffff'),
      strokeWidth: 0.5,
      strokeOpacity: 1,
      templateField: 'sliceSettings',
    });

    // Disabling labels and ticksll
    pieSeries.labels.template.set('visible', false);
    pieSeries.ticks.template.set('visible', false);

    // EventDispatcher is disposed at SpriteEventDispatcher...
    // It looks like this error results from clicking events
    pieSeries.slices.template.events.on('click', (ev) => {
      const selected: any = ev.target.dataItem?.dataContext;
      const categorySelected: string = selected.category;
      const find = statusHospitalQuery.find((emp: any) => emp.category === categorySelected);
      const statusSelect = find?.value;

      var highlightSelect: any;

      var query = hospital_layer_damage.createQuery();

      view.when(function () {
        view.whenLayerView(hospital_layer_damage).then((layerView): any => {
          //chartLayerView = layerView;

          hospital_layer_damage.queryFeatures(query).then((results: any) => {
            const RESULT_LENGTH = results.features;
            const ROW_N = RESULT_LENGTH.length;

            let objID = [];
            for (var i = 0; i < ROW_N; i++) {
              var obj = results.features[i].attributes.OBJECTID;
              objID.push(obj);
            }

            var queryExt = new Query({
              objectIds: objID,
            });

            hospital_layer_damage.queryExtent(queryExt).then((result: any) => {
              if (result.extent) {
                view.goTo(result.extent);
              }
            });

            if (highlightSelect) {
              highlightSelect.remove();
            }
            highlightSelect = layerView.highlight(objID);

            view.on('click', function () {
              layerView.filter = new FeatureFilter({
                where: undefined,
              });
              highlightSelect.remove();
            });
          }); // End of queryFeatures

          layerView.filter = new FeatureFilter({
            where: 'Damage = ' + statusSelect,
          });

          // For initial state, we need to add this
          view.on('click', () => {
            layerView.filter = new FeatureFilter({
              where: undefined,
            });
            highlightSelect !== undefined ? highlightSelect.remove() : console.log('');
          });
        }); // End of view.whenLayerView
      }); // End of view.whenv
    });

    pieSeries.data.setAll(hopistalData);

    // Legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
      }),
    );
    legendRef.current = legend;
    legend.data.setAll(pieSeries.dataItems);

    // Change the size of legend markers
    legend.markers.template.setAll({
      width: 18,
      height: 18,
    });

    // Change the marker shape
    legend.markerRectangles.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10,
    });

    // Responsive legend
    // https://www.amcharts.com/docs/v5/tutorials/pie-chart-with-a-legend-with-dynamically-sized-labels/
    // This aligns Legend to Left
    chart.onPrivate('width', function (width: any) {
      const boxWidth = 220; //props.style.width;
      var availableSpace = Math.max(width - chart.height() - boxWidth, boxWidth);
      //var availableSpace = (boxWidth - valueLabelsWidth) * 0.7
      legend.labels.template.setAll({
        width: availableSpace,
        maxWidth: availableSpace,
      });
    });
    //
    // To align legend items: valueLabels right, labels to left
    // 1. fix width of valueLabels
    // 2. dynamically change width of labels by screen size

    // Change legend labelling properties
    // To have responsive font size, do not set font size
    legend.labels.template.setAll({
      oversizedBehavior: 'truncate',
      fill: am5.color('#ffffff'),
      //textDecoration: "underline"
      //width: am5.percent(200)
      //fontWeight: "300"
    });

    legend.valueLabels.template.setAll({
      textAlign: 'right',
      //width: valueLabelsWidth,
      fill: am5.color('#ffffff'),
      //fontSize: LEGEND_FONT_SIZE,
    });

    legend.itemContainers.template.setAll({
      // set space between legend items
      paddingTop: 3,
      paddingBottom: 1,
    });

    pieSeries.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartID, hopistalData]);

  useEffect(() => {
    pieSeriesRef.current?.data.setAll(hopistalData);
    legendRef.current?.data.setAll(pieSeriesRef.current.dataItems);
  });

  // 2. Bridge
  useEffect(() => {
    // Dispose previously created root2 element
    maybeDisposeRoot(chartID_bridge);

    var root2 = am5.Root.new(chartID_bridge);
    root2.container.children.clear();
    root2._logo?.dispose();

    // Set themesf
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root2.setThemes([am5themes_Animated.new(root2), am5themes_Responsive.new(root2)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root2.container.children.push(
      am5percent.PieChart.new(root2, {
        layout: root2.verticalLayout,
      }),
    );
    chartRef2.current = chart;

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var pieSeries = chart.series.push(
      am5percent.PieSeries.new(root2, {
        name: 'Series',
        categoryField: 'category',
        valueField: 'value',
        //legendLabelText: "[{fill}]{category}[/]",
        legendValueText: "{valuePercentTotal.formatNumber('#.')}% ({value})",
        radius: am5.percent(45), // outer radius
        innerRadius: am5.percent(28),
        scale: 2.1,
      }),
    );
    pieSeriesRef2.current = pieSeries;
    chart.series.push(pieSeries);

    // values inside a donut
    let inner_label = pieSeries.children.push(
      am5.Label.new(root2, {
        text: '[#ffffff]{valueSum}[/]\n[fontSize: 7px; #d3d3d3; verticalAlign: super]BRIDGES[/]',
        fontSize: 15,
        centerX: am5.percent(50),
        centerY: am5.percent(40),
        populateText: true,
        oversizedBehavior: 'fit',
        textAlign: 'center',
      }),
    );

    pieSeries.onPrivate('width', (width: any) => {
      inner_label.set('maxWidth', width * 0.7);
    });

    // Set slice opacity and stroke color
    pieSeries.slices.template.setAll({
      toggleKey: 'none',
      fillOpacity: 0.9,
      stroke: am5.color('#ffffff'),
      strokeWidth: 0.5,
      strokeOpacity: 1,
      templateField: 'sliceSettings',
    });

    // Disabling labels and ticksll
    pieSeries.labels.template.set('visible', false);
    pieSeries.ticks.template.set('visible', false);

    // EventDispatcher is disposed at SpriteEventDispatcher...
    // It looks like this error results from clicking events
    pieSeries.slices.template.events.on('click', (ev) => {
      const selected: any = ev.target.dataItem?.dataContext;
      const categorySelected: string = selected.category;
      const find = statusHospitalQuery.find((emp: any) => emp.category === categorySelected);
      const statusSelect = find?.value;

      var highlightSelect: any;

      var query = bridge_layer.createQuery();

      view.when(function () {
        view.whenLayerView(bridge_layer).then((layerView): any => {
          //chartLayerView = layerView;

          bridge_layer.queryFeatures(query).then((results: any) => {
            const RESULT_LENGTH = results.features;
            const ROW_N = RESULT_LENGTH.length;

            let objID = [];
            for (var i = 0; i < ROW_N; i++) {
              var obj = results.features[i].attributes.OBJECTID;
              objID.push(obj);
            }

            var queryExt = new Query({
              objectIds: objID,
            });

            bridge_layer.queryExtent(queryExt).then((result: any) => {
              if (result.extent) {
                view.goTo(result.extent);
              }
            });

            if (highlightSelect) {
              highlightSelect.remove();
            }
            highlightSelect = layerView.highlight(objID);

            view.on('click', function () {
              layerView.filter = new FeatureFilter({
                where: undefined,
              });
              highlightSelect.remove();
            });
          }); // End of queryFeatures

          layerView.filter = new FeatureFilter({
            where: 'Damage = ' + statusSelect,
          });

          // For initial state, we need to add this
          view.on('click', () => {
            layerView.filter = new FeatureFilter({
              where: undefined,
            });
            highlightSelect !== undefined ? highlightSelect.remove() : console.log('');
          });
        }); // End of view.whenLayerView
      }); // End of view.whenv
    });

    pieSeries.data.setAll(bridgeData);

    // Legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = chart.children.push(
      am5.Legend.new(root2, {
        centerX: am5.percent(50),
        x: am5.percent(50),
      }),
    );
    legendRef2.current = legend;
    legend.data.setAll(pieSeries.dataItems);

    // Change the size of legend markers
    legend.markers.template.setAll({
      width: 18,
      height: 18,
    });

    // Change the marker shape
    legend.markerRectangles.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10,
    });

    // Responsive legend
    // https://www.amcharts.com/docs/v5/tutorials/pie-chart-with-a-legend-with-dynamically-sized-labels/
    // This aligns Legend to Left
    chart.onPrivate('width', function (width: any) {
      const boxWidth = 220; //props.style.width;
      var availableSpace = Math.max(width - chart.height() - boxWidth, boxWidth);
      //var availableSpace = (boxWidth - valueLabelsWidth) * 0.7
      legend.labels.template.setAll({
        width: availableSpace,
        maxWidth: availableSpace,
      });
    });
    //
    // To align legend items: valueLabels right, labels to left
    // 1. fix width of valueLabels
    // 2. dynamically change width of labels by screen size

    // Change legend labelling properties
    // To have responsive font size, do not set font size
    legend.labels.template.setAll({
      oversizedBehavior: 'truncate',
      fill: am5.color('#ffffff'),
      //textDecoration: "underline"
      //width: am5.percent(200)
      //fontWeight: "300"
    });

    legend.valueLabels.template.setAll({
      textAlign: 'right',
      //width: valueLabelsWidth,
      fill: am5.color('#ffffff'),
      //fontSize: LEGEND_FONT_SIZE,
    });

    legend.itemContainers.template.setAll({
      // set space between legend items
      paddingTop: 3,
      paddingBottom: 1,
    });

    pieSeries.appear(1000, 100);

    return () => {
      root2.dispose();
    };
  }, [chartID_bridge, bridgeData]);

  useEffect(() => {
    pieSeriesRef2.current?.data.setAll(bridgeData);
    legendRef2.current?.data.setAll(pieSeriesRef2.current.dataItems);
  });

  return (
    <div>
      <div
        style={{
          color: primaryLabelColor,
          fontSize: '1.3rem',
          marginLeft: '13px',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      >
        Total Hospitals
      </div>
      <CalciteLabel layout="inline">
        <b className="totalLotsNumber">
          {thousands_separators(hospitalNumber[0])}
          {/*thousands_separators(hospitalNumber[1])*/}
          <img
            src="https://EijiGorilla.github.io/Symbols/hospital.svg"
            alt="Land Logo"
            height={'55px'}
            width={'55px'}
            style={{ marginLeft: '250px', display: 'flex', marginTop: '-30px' }}
          />
          {/* <div className="totalLotsNumber2">({thousands_separators(hospitalNumber[0])})</div> */}
        </b>
      </CalciteLabel>

      {/* Hospital */}
      <div
        id={chartID}
        style={{
          height: '35vh',
          width: '350px',
          backgroundColor: 'rgb(0,0,0,0)',
          color: 'white',
          marginBottom: '20px',
        }}
      ></div>

      <div
        style={{
          color: primaryLabelColor,
          fontSize: '1.3rem',
          marginLeft: '13px',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      >
        Total Bridges
      </div>
      <CalciteLabel layout="inline">
        <b className="totalLotsNumber">
          {thousands_separators(bridgeNumber[0])}
          {/*thousands_separators(hospitalNumber[1])*/}
          <img
            src="https://EijiGorilla.github.io/Symbols/bridge.svg"
            alt="Land Logo"
            height={'55px'}
            width={'55px'}
            style={{ marginLeft: '250px', display: 'flex', marginTop: '-30px' }}
          />
          {/* <div className="totalLotsNumber2">({thousands_separators(hospitalNumber[0])})</div> */}
        </b>
      </CalciteLabel>

      {/* Hospital */}
      <div
        id={chartID_bridge}
        style={{
          height: '35vh',
          width: '350px',
          backgroundColor: 'rgb(0,0,0,0)',
          color: 'white',
          //   marginBottom: '5%',
        }}
      ></div>
    </div>
  );
}; // End of lotChartgs

export default HospitalChart;
