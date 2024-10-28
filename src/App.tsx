import { useRef, useEffect, useState } from 'react';

import { map, view, layerList, basemaps } from './Scene';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-panel';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-label';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/components/calcite-tabs';
import '@esri/calcite-components/dist/components/calcite-tab';
import '@esri/calcite-components/dist/components/calcite-tab-nav';
import '@esri/calcite-components/dist/components/calcite-button';
import '@esri/calcite-components/dist/components/calcite-tab-title';
import '@esri/calcite-components/dist/components/calcite-notice';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalciteTab,
  CalciteTabs,
  CalciteTabNav,
  CalciteTabTitle,
  CalcitePanel,
  CalciteNotice,
  CalciteList,
  CalciteListItem,
} from '@esri/calcite-components-react';
import HospitalChart from './components/Chart';
import RestorationCostList from './components/RestorationCostList';
import { primaryLabelColor, valueLabelColor } from './statusUniqueValues';

function App() {
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);

  //**** Set states */
  const mapDiv = useRef(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);

  // For Calcite Design
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);

  // Open LayerList widget when opening a web app
  useEffect(() => {
    setNextWidget('layers');
  }, []);

  useEffect(() => {
    if (activeWidget) {
      const actionActiveWidget = document.querySelector(
        `[data-panel-id=${activeWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionActiveWidget.hidden = true;
    }

    if (nextWidget !== activeWidget) {
      const actionNextWidget = document.querySelector(
        `[data-panel-id=${nextWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionNextWidget.hidden = false;
    }
  });

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize
       */

      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
      basemaps.container = calcitePanelBasemaps.current;
      layerList.container = layerListDiv.current;
    }
  }, []);

  return (
    <div>
      <CalciteShell>
        <CalciteTabs slot="panel-end" layout="center" scale="m" style={{ width: '42%' }}>
          <CalciteTabNav slot="title-group" id="thetabs">
            <CalciteTabTitle class="HospitalBridge">Damage Summary</CalciteTabTitle>
            <CalciteTabTitle class="CostList">Hospitals</CalciteTabTitle>
          </CalciteTabNav>
          {/* CalciteTab: Lot */}
          <CalciteTab>
            <HospitalChart />
          </CalciteTab>

          <CalciteTab>
            <CalciteNotice open icon="list">
              <div slot="title">List of Destoryed Hospitals</div>
              <div slot="message" style={{ color: primaryLabelColor }}>
                with Recovery Cost
                <img
                  src="https://EijiGorilla.github.io/Symbols/Recovery_cost.svg"
                  alt="DOTr Logo"
                  height={'25px'}
                  width={'25px'}
                  style={{ marginLeft: '10px', marginBottom: '-8px' }}
                />
              </div>
            </CalciteNotice>
            <RestorationCostList />
          </CalciteTab>
        </CalciteTabs>

        <CalciteShellPanel
          width-scale="1"
          slot="panel-start"
          position="start"
          id="left-shell-panel"
          displayMode="dock"
        >
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="layers"
              id="layers"
              //textEnabled={true}
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="basemaps"
              icon="basemap"
              text="basemaps"
              id="basemaps"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="charts"
              icon="graph-time-series"
              text="Progress Chart"
              id="charts"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="information"
              icon="information"
              text="Information"
              id="information"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>
          </CalciteActionBar>

          <CalcitePanel
            heading="Layers"
            height-scale="l"
            width-scale="l"
            data-panel-id="layers"
            style={{ width: '18vw' }}
            hidden
          >
            <div id="layers-container" ref={layerListDiv}></div>
          </CalcitePanel>

          <CalcitePanel
            heading="Basemaps"
            height-scale="l"
            data-panel-id="basemaps"
            style={{ width: '18vw' }}
            hidden
          >
            <div id="basemap-container" ref={calcitePanelBasemaps}></div>
          </CalcitePanel>

          <CalcitePanel
            class="timeSeries-panel"
            height-scale="l"
            data-panel-id="charts"
            hidden
          ></CalcitePanel>

          <CalcitePanel heading="Description" data-panel-id="information" hidden>
            {nextWidget === 'information' ? (
              <div className="informationDiv">
                <ul>
                  <li>
                    You can <b>filter the data</b> by City and Barangy using dropdown lists.
                  </li>
                  <li>
                    <b>Click a tab</b> below the dropdown lists to view progress on land, structure,
                    or NLO in charts.
                  </li>
                  <li>
                    <b>Click series in pie charts</b> to view progress on the corresponding
                    lots/structures/NLO on the map.
                  </li>
                  <li>
                    <b>Lots under expropriation</b> are available in the 'Expro List' tab.
                  </li>
                  <li>
                    <b>Lots with issues</b> are available in the 'IssueList' tab.
                  </li>
                  <br></br>
                  <br></br>
                  <b style={{ color: 'white' }}>---:Defintion of Terms:---</b>
                  <li>
                    <b>ROWUA</b> : Right of Way Usage Agreement
                  </li>
                  <li>
                    <b>NVS</b> : Negotiated Voluntary Sale
                  </li>
                </ul>
              </div>
            ) : (
              <div className="informationDiv" hidden></div>
            )}
          </CalcitePanel>
        </CalciteShellPanel>
        <div className="mapDiv" ref={mapDiv}></div>
      </CalciteShell>
    </div>
  );
}

export default App;
