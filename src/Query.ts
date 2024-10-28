import StatisticDefinition from '@arcgis/core/rest/support/StatisticDefinition';
import * as am5 from '@amcharts/amcharts5';
import { view } from './Scene';
import { bridge_layer, hospital_layer_cost } from './layers';
import {
  statusHospitalColor,
  statusHospitalColorHex,
  statusHospitalLabel,
} from './statusUniqueValues';

export async function generateChartHospital() {
  var total_count = new StatisticDefinition({
    onStatisticField: 'Damage',
    outStatisticFieldName: 'total_count',
    statisticType: 'count',
  });

  var query = hospital_layer_cost.createQuery();
  query.outFields = ['Damage'];
  query.outStatistics = [total_count];
  query.orderByFields = ['Damage'];
  query.groupByFieldsForStatistics = ['Damage'];

  return hospital_layer_cost.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const count = attributes.total_count;
      return Object.assign({
        category: statusHospitalLabel[index],
        value: count,
        sliceSettings: {
          fill: am5.color(statusHospitalColorHex[index]),
        },
      });
    });

    return data;
  });
}

export async function totalNumberHopital() {
  var total_count = new StatisticDefinition({
    onStatisticField: 'OBJECTID',
    outStatisticFieldName: 'total_count',
    statisticType: 'count',
  });

  var total_count_damage = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Damage >= 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_count_damage',
    statisticType: 'sum',
  });

  var query = hospital_layer_cost.createQuery();
  query.outStatistics = [total_count, total_count_damage];

  return hospital_layer_cost.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_count;
    const total_number_damage = stats.total_count;
    return [total_number, total_number_damage];
  });
}

// bridgge
export async function generateChartBridge() {
  var total_count = new StatisticDefinition({
    onStatisticField: 'Damage',
    outStatisticFieldName: 'total_count',
    statisticType: 'count',
  });

  var query = bridge_layer.createQuery();
  query.outFields = ['Damage'];
  query.outStatistics = [total_count];
  query.orderByFields = ['Damage'];
  query.groupByFieldsForStatistics = ['Damage'];

  const data0: any = [];
  return bridge_layer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const status_number = result.attributes['Damage'];
      const attributes = result.attributes;
      const count = attributes.total_count;
      return Object.assign({
        category: statusHospitalLabel[status_number - 1],
        value: count,
        // sliceSettings: {
        //   fill: am5.color(statusHospitalColorHex[index]),
        // },
      });
    });

    const data1: any = [];
    statusHospitalLabel.map((status: any, index: any) => {
      const find = data.find((emp: any) => emp.category === status);
      const value = find === undefined ? 0 : find?.value;
      const object = {
        category: status,
        value: value,
        sliceSettings: {
          fill: am5.color(statusHospitalColorHex[index]),
        },
      };
      data1.push(object);
    });
    return data1;
  });
}

export async function totalNumberBridge() {
  var total_count = new StatisticDefinition({
    onStatisticField: 'OBJECTID',
    outStatisticFieldName: 'total_count',
    statisticType: 'count',
  });

  var total_count_damage = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Damage >= 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_count_damage',
    statisticType: 'sum',
  });

  var query = bridge_layer.createQuery();
  query.outStatistics = [total_count, total_count_damage];

  return bridge_layer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_count;
    const total_number_damage = stats.total_count;
    return [total_number, total_number_damage];
  });
}

// Thousand separators function
export function thousands_separators(num: any) {
  if (num) {
    var num_parts = num.toString().split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return num_parts.join('.');
  }
}

// export function zoomToLayer(layer: any) {
//   return layer.queryExtent().then((response: any) => {
//     view
//       .goTo(response.extent, {
//         //response.extent
//         //speedFactor: 2,
//       })
//       .catch(function (error) {
//         if (error.name !== 'AbortError') {
//           console.error(error);
//         }
//       });
//   });
// }
