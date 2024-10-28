import { useEffect, useState } from 'react';
import { hospital_layer_damage } from '../layers';
import Query from '@arcgis/core/rest/support/Query';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-chip';
import '@esri/calcite-components/dist/components/calcite-avatar';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteList,
  CalciteListItem,
  CalciteChip,
  CalciteAvatar,
} from '@esri/calcite-components-react';
import { view } from '../Scene';
import { statusHospitalLabel } from '../statusUniqueValues';
import { thousands_separators } from '../Query';

// Zoom in to selected lot from expropriation list
let highlightSelect: any;
function resultClickHandler(event: any) {
  var queryExtent = new Query({
    objectIds: [event.target.value],
  });
  hospital_layer_damage.queryExtent(queryExtent).then((result: any) => {
    result.extent &&
      view.goTo({
        target: result.extent,
        speedFactor: 2,
        zoom: 17,
      });
  });

  view.whenLayerView(hospital_layer_damage).then((layerView: any) => {
    highlightSelect && highlightSelect.remove();
    highlightSelect = layerView.highlight([event.target.value]);

    view.on('click', () => {
      layerView.filter = null;
      highlightSelect.remove();
    });
  });
}

const RestorationCostList = () => {
  const [exproItem, setExproItem] = useState<undefined | any>([]);

  useEffect(() => {
    setExproItem([]);
    var query = hospital_layer_damage.createQuery();
    query.outFields = ['*'];
    query.where = 'Damage = 1';
    query.orderByFields = ['Damage'];

    query.returnGeometry = true;
    hospital_layer_damage.queryFeatures(query).then((result: any) => {
      // eslint-disable-next-line array-callback-return
      result.features.map((feature: any, index: any) => {
        const attributes = feature.attributes;
        const damage_id = attributes['Damage'];
        const damage_name = statusHospitalLabel[damage_id - 1];
        const damage_cost = attributes['Cost'];
        const damage_label = '$ ' + String(thousands_separators(damage_cost));
        const state_name = attributes['state'];
        const objectid = attributes.OBJECTID;
        const id = index;

        setExproItem((prev: any) => [
          ...prev,
          {
            id: id,
            statename: state_name,
            damagename: damage_name,
            damagecost: damage_label,
            objectid: objectid,
          },
        ]);
      });
    });
  }, []);

  return (
    <>
      <CalciteList id="result-list" label="exproListLabel">
        {exproItem && // Extract unique objects from the array
          exproItem
            .filter(
              (ele: any, ind: any) =>
                ind === exproItem.findIndex((elem: any) => elem.objectid === ele.objectid),
            )
            .map((result: any, index: any) => {
              return (
                // need 'key' to upper div and inside CalciteListItem
                <div key={index}>
                  <CalciteListItem
                    key={result.id}
                    label={result.damagename}
                    description={result.damagecost}
                    value={result.objectid}
                    selected={undefined}
                    onCalciteListItemSelect={(event: any) => resultClickHandler(event)}
                  >
                    <CalciteChip
                      value={result.damagename}
                      slot="content-end"
                      scale="s"
                      id="exproListChip"
                    >
                      {/* <CalciteAvatar full-name={result.statename} scale="s"></CalciteAvatar> */}
                      <img
                        src="https://EijiGorilla.github.io/Symbols/Recovery_cost.svg"
                        alt="DOTr Logo"
                        height={'22px'}
                        width={'22px'}
                        style={{ marginRight: '10px', marginBottom: '-5px' }}
                      />
                      {result.statename}
                    </CalciteChip>
                  </CalciteListItem>
                </div>
              );
            })}
      </CalciteList>
    </>
  );
};

export default RestorationCostList;
