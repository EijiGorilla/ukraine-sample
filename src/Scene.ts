import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Expand from '@arcgis/core/widgets/Expand';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import Locate from '@arcgis/core/widgets/Locate.js';
import Compass from '@arcgis/core/widgets/Compass';
import {
  admin_boundary_line,
  admin_boundary_pop,
  admin_state_boundary,
  bridge_layer,
  country_border_layer,
  front_line_layer,
  hospital_layer_cost,
  hospital_layer_damage,
  road_layer,
} from './layers';
import ColorVariable from '@arcgis/core/renderers/visualVariables/ColorVariable';
import * as sizeRendererCreator from '@arcgis/core/smartMapping/renderers/size';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import { SimpleMarkerSymbol } from '@arcgis/core/symbols';
import Legend from '@arcgis/core/widgets/Legend';

export const map = new Map({
  basemap: 'dark-gray-vector', // "streets-night-vector", basemap
  ground: 'world-elevation',
});

const admingBoundaryLayers = new GroupLayer({
  title: 'Administrative Boundary',
  visible: true,
  visibilityMode: 'independent',
  layers: [admin_boundary_line, admin_state_boundary, country_border_layer],
});

const assessementLayers = new GroupLayer({
  title: 'Monitoring Layers',
  visible: true,
  visibilityMode: 'exclusive',
  // listMode: 'show',
  layers: [bridge_layer, hospital_layer_cost, hospital_layer_damage],
});

map.add(road_layer);
map.add(admin_boundary_pop);
map.add(admingBoundaryLayers);
map.add(assessementLayers);
map.add(front_line_layer);

export const view = new SceneView({
  container: undefined,
  map,
  center: [32.1021672, 48.794417],
  zoom: 5,
  viewingMode: 'local',
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

// highlight super urgent
export const layerList = new LayerList({
  view: view,
  selectionMode: 'multiple',
  visibilityAppearance: 'checkbox',
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true,
      };
    }

    item.title === 'Population' ||
    item.title === 'Main Road' ||
    item.title === 'Bridge' ||
    item.title === 'State Boundary'
      ? (item.visible = false)
      : (item.visible = true);
    //   item.title === 'Existing Structure' ||
    //   item.title === 'Demolished Structure' ||
    //   item.title === 'ISF (Informal Settlers Families)' ||
    //   item.title === 'Senate-DepEd Boundary' ||
    //   item.title === 'PTE Subterranean Lots' ||
    //   item.title === 'Handed-Over Lots' ||
    //   item.title === 'Structures'
    //     ? (item.visible = false)
    //     : (item.visible = true);
  },
});
