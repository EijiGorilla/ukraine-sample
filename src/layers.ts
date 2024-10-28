import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import * as sizeRendererCreator from '@arcgis/core/smartMapping/renderers/size';
import {
  TextSymbol3DLayer,
  LabelSymbol3D,
  SimpleLineSymbol,
  PolygonSymbol3D,
  ExtrudeSymbol3DLayer,
  PointSymbol3D,
  IconSymbol3DLayer,
  SimpleMarkerSymbol,
  LineSymbol3D,
  PathSymbol3DLayer,
  LineSymbol3DLayer,
  ObjectSymbol3DLayer,
  WebStyleSymbol,
} from '@arcgis/core/symbols';
import SolidEdges3D from '@arcgis/core/symbols/edges/SolidEdges3D';
import CustomContent from '@arcgis/core/popup/content/CustomContent';
import PopupTemplate from '@arcgis/core/PopupTemplate';
import ColorVariable from '@arcgis/core/renderers/visualVariables/ColorVariable';
import SizeVariable from '@arcgis/core/renderers/visualVariables/SizeVariable';
import OpacityVariable from '@arcgis/core/renderers/visualVariables/OpacityVariable';
import Legend from '@arcgis/core/widgets/Legend';
import { cloneElement } from 'react';
import { hospitalColorRestoration, statusHospitalColorHex } from './statusUniqueValues';
import LineCallout3D from '@arcgis/core/symbols/callouts/LineCallout3D';

// country boundary
const country_boundary_renderer = new SimpleRenderer({
  symbol: new SimpleFillSymbol({
    color: [0, 0, 0, 0],
    outline: new SimpleLineSymbol({
      color: '#828282',
      width: 1.5,
    }),
  }),
});

export const country_border_layer = new FeatureLayer({
  portalItem: {
    id: '611518ac12b341418d42a670ab827ccd',
  },
  layerId: 7,
  title: 'Ukraine border',
  renderer: country_boundary_renderer,
  popupEnabled: false,
  labelsVisible: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});
// country_border_layer.listMode = 'hide';

// admin boundary - raioni with population
// Esri color ramps - Blue 22
// #1d3befff,#5b6da6ff,#b0c4d8ff
const colors = ['#1d3befff', '#5b6da6ff', '#b0c4d8ff'];

const boundary_pop_renderer = new SimpleRenderer({
  symbol: new SimpleFillSymbol({
    color: [0, 0, 0, 0],
    outline: new SimpleLineSymbol({
      color: [128, 128, 128, 0.8],
      width: '0.5px',
    }),
  }),
  label: 'Population',
  visualVariables: [
    new ColorVariable({
      field: 'TOTPOP_CY',
      stops: [
        { value: 2933429, color: colors[0], label: '> 290K' }, //'#002624ff'
        { value: 175000, color: colors[1], label: '175K' }, //'#6b9dc0ff'
        { value: 0, color: colors[2], label: '0' }, //'#FFFCD4'
      ],
    }),
  ],
});

export const admin_boundary_pop = new FeatureLayer({
  portalItem: {
    id: '611518ac12b341418d42a670ab827ccd',
  },
  layerId: 6,
  title: 'Population',
  renderer: boundary_pop_renderer,
  popupEnabled: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

// default boundary line
const default_boundary_renderer = new SimpleRenderer({
  symbol: new SimpleFillSymbol({
    color: [0, 0, 0, 0],
    outline: new SimpleLineSymbol({
      color: [128, 128, 128, 0.6],
      width: '0.7px',
    }),
  }),
});

export const admin_boundary_line = new FeatureLayer({
  portalItem: {
    id: '611518ac12b341418d42a670ab827ccd',
  },
  layerId: 6,
  title: 'Raioni',
  renderer: default_boundary_renderer,
  popupEnabled: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});
// admin_boundary_line.listMode = 'hide';

// State boundary layer
const state_bdry_label = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: 'white',
        },
        size: 10,
        halo: {
          color: 'black',
          size: 1,
        },
        font: {
          family: 'Ubuntu Mono',
        },
      }),
    ],
    verticalOffset: {
      screenLength: 10000,
      maxWorldLength: 70000,
      minWorldLength: 20000,
    },
    callout: {
      type: 'line', // autocasts as new LineCallout3D()
      color: 'white',
      size: 0.7,
      border: {
        color: 'grey',
      },
    },
  }),
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: '$feature.admin1Name_en',
    //value: "{TEXTSTRING}"
  },
});

const state_boundary_renderer = new SimpleRenderer({
  symbol: new SimpleFillSymbol({
    color: [0, 0, 0, 0],
    outline: new SimpleLineSymbol({
      color: [128, 128, 128, 0.6],
      width: '0.7px',
    }),
  }),
});

export const admin_state_boundary = new FeatureLayer({
  portalItem: {
    id: '611518ac12b341418d42a670ab827ccd',
  },
  layerId: 8,
  title: 'State Boundary',
  renderer: state_boundary_renderer,
  labelingInfo: [state_bdry_label],
  popupEnabled: false,
  // elevationInfo: {
  //   mode: 'on-the-ground',
  // },
});

// front line
export const front_line_renderer = new SimpleRenderer({
  symbol: new SimpleLineSymbol({
    style: 'long-dash-dot',
    color: '#FF0000',
    width: 1.5,
  }),
});

export const front_line_layer = new FeatureLayer({
  portalItem: {
    id: '611518ac12b341418d42a670ab827ccd',
  },
  layerId: 2,
  title: 'Front Line',
  renderer: front_line_renderer,
  popupEnabled: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

// roads
const road_renderer = new SimpleRenderer({
  symbol: new SimpleLineSymbol({
    color: [178, 178, 178, 0.7], //'#B2B2B2'
    width: 0.9,
  }),
});

export const road_layer = new FeatureLayer({
  portalItem: {
    id: '611518ac12b341418d42a670ab827ccd',
  },
  layerId: 3,
  title: 'Main Road',
  renderer: road_renderer,
  popupEnabled: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

const hospitalCostRenderer = new SimpleRenderer({
  symbol: new PointSymbol3D({
    symbolLayers: [
      new ObjectSymbol3DLayer({
        // width: 10,
        // height: 20,
        resource: { primitive: 'cylinder' },
        height: 100000,
        width: 9000,
      }),
    ],
  }),
  label: 'Restoration Cost',
  visualVariables: [
    new ColorVariable({
      field: 'Cost',
      stops: [
        { value: 54, color: hospitalColorRestoration[2], label: '< 54' },
        { value: 250000, color: hospitalColorRestoration[1], label: '250000' },
        { value: 500000, color: hospitalColorRestoration[0], label: '> 500,000' },
      ],
    }),
    new OpacityVariable({
      field: 'Cost',
      // valueExpression: "( $feature.TOT_VOTES / $feature.REG_VOTERS ) * 100",
      stops: [
        { value: 54, opacity: 0.05 },
        { value: 250000, opacity: 0.5 },
        { value: 500000, opacity: 1 },
      ],
    }),
  ],
});

export const hospital_layer_cost = new FeatureLayer({
  portalItem: {
    id: '611518ac12b341418d42a670ab827ccd',
  },
  layerId: 4,
  title: 'Hospital (restoration)',
  renderer: hospitalCostRenderer,
  popupEnabled: false,
  elevationInfo: {
    mode: 'relative-to-ground',
  },
});

// Hopistal layer - damage
// const hospitalDamageRenderer = new SimpleRenderer({
//   symbol: new PointSymbol3D({
//     symbolLayers: [
//       new ObjectSymbol3DLayer({
//         // width: 10,
//         // height: 20,
//         resource: { primitive: 'cylinder' },
//         height: 100000,
//         width: 9000,
//       }),
//     ],
//   }),
//   label: 'Damage Rating',
//   visualVariables: [
//     new ColorVariable({
//       field: 'Damage',
//       stops: [
//         { value: 1, color: statusHospitalColorHex[0], label: 'Total Destruction' },
//         { value: 2, color: statusHospitalColorHex[1], label: 'Damaged beyond repair' },
//         { value: 3, color: statusHospitalColorHex[2], label: 'Serious damage - Non Repairable' },
//         { value: 4, color: statusHospitalColorHex[3], label: 'Serious damage - Repairable' },
//         { value: 5, color: statusHospitalColorHex[4], label: 'No damage' },
//       ],
//     }),
//     new OpacityVariable({
//       field: 'Damage',
//       // valueExpression: "( $feature.TOT_VOTES / $feature.REG_VOTERS ) * 100",
//       stops: [
//         { value: 1, opacity: 1 },
//         { value: 2, opacity: 0.9 },
//         { value: 3, opacity: 0.8 },
//         { value: 4, opacity: 0.7 },
//         { value: 5, opacity: 0.05 },
//       ],
//     }),
//   ],
// });

const verticalOffsetRelocation = {
  screenLength: 200,
  maxWorldLength: 5000,
  minWorldLength: 50,
};

function getUniqueValueSymbol(name: string, color: any, sizeS: number) {
  return new PointSymbol3D({
    symbolLayers: [
      new IconSymbol3DLayer({
        resource: {
          href: name,
        },
        size: sizeS,
        outline: {
          color: color,
          size: 2,
        },
      }),
    ],

    verticalOffset: verticalOffsetRelocation,

    callout: new LineCallout3D({
      color: [128, 128, 128, 0.3],
      size: 0.2,
      border: {
        color: 'grey',
      },
    }),
  });
}
const iconSize = 25;
const iconOutlineColor = '#D13470';

const hospitalDamageStatusRenderer = new UniqueValueRenderer({
  field: 'Damage',
  uniqueValueInfos: [
    {
      value: 1,
      label: 'Total destruction',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Ukraine/hospital_damage_status1.svg',
        iconOutlineColor,
        iconSize,
      ),
    },
    {
      value: 2,
      label: 'Damage beyond repair',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Ukraine/hospital_damage_status2.svg',
        iconOutlineColor,
        iconSize,
      ),
    },
    {
      value: 3,
      label: 'Serious damage - non-repairable',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Ukraine/hospital_damage_status3.svg',
        iconOutlineColor,
        iconSize,
      ),
    },
    {
      value: 4,
      label: 'Serious damage - repairable',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Ukraine/hospital_damage_status4.svg',
        iconOutlineColor,
        iconSize,
      ),
    },
    {
      value: 5,
      label: 'No damage',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Ukraine/hospital_damage_status5.svg',
        iconOutlineColor,
        10,
      ),
    },
  ],
});

export const hospital_layer_damage = new FeatureLayer({
  portalItem: {
    id: '611518ac12b341418d42a670ab827ccd',
  },
  layerId: 4,
  title: 'Hospital (Damage)',
  renderer: hospitalDamageStatusRenderer,
  popupEnabled: false,
  elevationInfo: {
    mode: 'relative-to-ground',
    unit: 'meters',
  },
});

// bridge
// const bridgeDamageRenderer = new SimpleRenderer({
//   symbol: new PointSymbol3D({
//     symbolLayers: [
//       new ObjectSymbol3DLayer({
//         resource: { primitive: 'cylinder' },
//         height: 100000,
//         width: 9000,
//       }),
//     ],
//   }),
//   label: 'Damage Rating',
//   visualVariables: [
//     new ColorVariable({
//       field: 'Damage',
//       stops: [
//         { value: 1, color: statusHospitalColorHex[0], label: 'Total Destruction' },
//         { value: 2, color: statusHospitalColorHex[1], label: 'Damaged beyond repair' },
//         { value: 3, color: statusHospitalColorHex[2], label: 'Serious damage - Non Repairable' },
//         { value: 4, color: statusHospitalColorHex[3], label: 'Serious damage - Repairable' },
//         { value: 5, color: statusHospitalColorHex[4], label: 'No damage' },
//       ],
//     }),
//     new OpacityVariable({
//       field: 'Damage',
//       // valueExpression: "( $feature.TOT_VOTES / $feature.REG_VOTERS ) * 100",
//       stops: [
//         { value: 1, opacity: 1 },
//         { value: 2, opacity: 0.9 },
//         { value: 3, opacity: 0.8 },
//         { value: 4, opacity: 0.7 },
//         { value: 5, opacity: 0.05 },
//       ],
//     }),
//   ],
// });

const bridgeDamageStatusRenderer = new UniqueValueRenderer({
  field: 'Damage',
  uniqueValueInfos: [
    {
      value: 1,
      label: 'Total destruction',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Ukraine/bridge_damage_status1.svg',
        iconOutlineColor,
        iconSize,
      ),
    },
    {
      value: 2,
      label: 'Damage beyond repair',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Ukraine/bridge_damage_status2.svg',
        iconOutlineColor,
        iconSize,
      ),
    },
    {
      value: 3,
      label: 'Serious damage - non-repairable',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Ukraine/bridge_damage_status3.svg',
        iconOutlineColor,
        iconSize,
      ),
    },
    {
      value: 4,
      label: 'Serious damage - repairable',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Ukraine/bridge_damage_status4.svg',
        iconOutlineColor,
        iconSize,
      ),
    },
    {
      value: 5,
      label: 'No damage',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Ukraine/bridge_damage_status5.svg',
        iconOutlineColor,
        10,
      ),
    },
  ],
});

export const bridge_layer = new FeatureLayer({
  portalItem: {
    id: '611518ac12b341418d42a670ab827ccd',
  },
  layerId: 5,
  title: 'Bridge',
  renderer: bridgeDamageStatusRenderer,
  popupEnabled: false,
});
