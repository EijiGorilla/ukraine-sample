"use strict";(self.webpackChunkukraine_sample=self.webpackChunkukraine_sample||[]).push([[4306],{54306:(e,t,i)=>{i.d(t,{default:()=>z});var s=i(35143),l=i(19276),n=i(63241),o=i(5632),a=i(76460),r=i(46053),d=(i(81806),i(47249),i(85842)),c=i(38623),h=i(25329),p=i(50912),u=i(77666),m=i(98108),_=(i(76099),i(63582)),b=i(12254),g=i(54761);const y="esri-table-list",v=`${y}__item`,I={base:y,actionMenu:`${y}__action-menu`,actionGroup:`${y}__action-group`,filterNoResults:`${y}__filter-no-results`,item:v,itemContent:`${v}-content`,itemContentBottom:`${v}-content-bottom`,itemMessage:`${v}-message`,itemActionIcon:`${v}-action-icon`,itemActionImage:`${v}-action-image`,itemTemporaryIcon:`${v}-temporary-icon`,publishing:`${y}__publishing`,statusIndicator:`${y}__status-indicator`};var f=i(91967),M=i(68134),w=i(21403),E=i(17879),A=i(50037),C=i(16700),Z=i(21905),F=i(76192),L=i(95752);let k=class extends((0,o.sA)(h.A)){constructor(e,t){super(e,t),this.className=null,this.content=null,this.flowEnabled=!1,this.image=null,this.listItem=null,this.open=!1,this.visible=!0}get disabled(){return!(this.content&&this.listItem)}set disabled(e){this._overrideIfSome("disabled",e)}get icon(){const{image:e}=this,t=this._getFirstWidget();return this._get("icon")??(!e&&t?t.icon:null)}set icon(e){this._overrideIfSome("icon",e)}get title(){return this._get("title")||(this._getFirstWidget()?.label??"")}set title(e){this._override("title",e)}render(){return(0,g.K)("div",{class:"esri-list-item-panel"},this._renderContents())}_renderContent(e){const{disabled:t,open:i}=this;return e&&!t&&i?"string"==typeof e?(0,g.K)("div",{innerHTML:e,key:e}):(0,L.p4)(e)?(0,g.K)("div",{key:"content-widget"},e.render()):e instanceof HTMLElement?(0,g.K)("div",{afterCreate:this._attachToNode,bind:e,key:"content-element"}):null:null}_renderContents(){const{content:e,open:t}=this;return t?Array.isArray(e)?e.map((e=>this._renderContent(e))):this._renderContent(e):null}_attachToNode(e){e.appendChild(this)}_getWidget(e){return(0,L.p4)(e)?e:null}_getFirstWidget(){const{content:e}=this;return Array.isArray(e)?e.map((e=>this._getWidget(e))).find((e=>e)):this._getWidget(e)}};(0,s._)([(0,r.MZ)()],k.prototype,"className",void 0),(0,s._)([(0,r.MZ)()],k.prototype,"content",void 0),(0,s._)([(0,r.MZ)()],k.prototype,"disabled",null),(0,s._)([(0,r.MZ)()],k.prototype,"flowEnabled",void 0),(0,s._)([(0,r.MZ)()],k.prototype,"icon",null),(0,s._)([(0,r.MZ)()],k.prototype,"image",void 0),(0,s._)([(0,r.MZ)()],k.prototype,"listItem",void 0),(0,s._)([(0,r.MZ)()],k.prototype,"open",void 0),(0,s._)([(0,r.MZ)()],k.prototype,"title",null),(0,s._)([(0,r.MZ)()],k.prototype,"visible",void 0),k=(0,s._)([(0,d.$)("esri.widgets.TableList.ListItemPanel")],k);const P=k;var S;const T=l.A.ofType({key:"type",defaultKeyValue:"button",base:A.A,typeMap:{button:C.A,toggle:F.A,slider:Z.A}}),D=l.A.ofType(T);let N=S=class extends((0,o.sA)(f.A)){constructor(e){super(e),this.actionsSections=new D,this.actionsOpen=!1,this.checkPublishStatusEnabled=!1,this.hidden=!1,this.layer=null,this.listItemCreatedFunction=null,this.panel=null,this.sortable=!0}initialize(){if(this.addHandles([(0,M.wB)((()=>this.panel),(e=>this._setListItemOnPanel(e)),M.Vh)]),"function"==typeof this.listItemCreatedFunction){const e={item:this};this.listItemCreatedFunction.call(null,e)}}destroy(){this.panel?.destroy()}get error(){return this.layer?.loadError}castPanel(e){return this.panel?.open&&!e.hasOwnProperty("open")&&(e.open=!0),e?new P(e):null}get publishing(){const{layer:e,checkPublishStatusEnabled:t}=this;return(t&&e&&"publishingInfo"in e&&"publishing"===e.publishingInfo?.status)??!1}get title(){const e=(0,E.Jt)(this,"layer.layer");return(!e||e&&(0,E.Jt)(this,"layer.layer.loaded")?this.layer?.title:null)??""}set title(e){this._overrideIfSome("title",e)}clone(){return new S({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,checkPublishStatusEnabled:this.checkPublishStatusEnabled,hidden:this.hidden,layer:this.layer,listItemCreatedFunction:this.listItemCreatedFunction,panel:this.panel,sortable:this.sortable,title:this.title})}_setListItemOnPanel(e){e&&(e.listItem=this)}};(0,s._)([(0,r.MZ)({type:D})],N.prototype,"actionsSections",void 0),(0,s._)([(0,r.MZ)()],N.prototype,"actionsOpen",void 0),(0,s._)([(0,r.MZ)()],N.prototype,"checkPublishStatusEnabled",void 0),(0,s._)([(0,r.MZ)({readOnly:!0})],N.prototype,"error",null),(0,s._)([(0,r.MZ)()],N.prototype,"hidden",void 0),(0,s._)([(0,r.MZ)()],N.prototype,"layer",void 0),(0,s._)([(0,r.MZ)()],N.prototype,"listItemCreatedFunction",void 0),(0,s._)([(0,r.MZ)({type:P})],N.prototype,"panel",void 0),(0,s._)([(0,w.w)("panel")],N.prototype,"castPanel",null),(0,s._)([(0,r.MZ)({readOnly:!0})],N.prototype,"publishing",null),(0,s._)([(0,r.MZ)()],N.prototype,"sortable",void 0),(0,s._)([(0,r.MZ)()],N.prototype,"title",null),N=S=(0,s._)([(0,d.$)("esri.widgets.TableList.ListItem")],N);const x=N;var K=i(54099);const O="map",B="layer-list-mode",$=l.A.ofType(x);let R=class extends K.A.EventedAccessor{constructor(e){super(e),this.checkPublishStatusEnabled=!1,this.listItemCreatedFunction=null,this.listModeDisabled=!1,this.tableItems=new $,this.map=null}initialize(){this.addHandles([(0,M.wB)((()=>[this.tables,this.map?.allTables.toArray()]),(()=>this._compileList()),M.Vh),(0,M.wB)((()=>[this.map?.loaded,this.listItemCreatedFunction,this.checkPublishStatusEnabled,this.listModeDisabled]),(()=>this._recompileList()))],O)}destroy(){this._removeAllItems(),this.map=null,this.tables=null}get tables(){return this.map?.allTables}set tables(e){this._overrideIfSome("tables",e)}get state(){const{map:e,tables:t}=this;if(!e)return t?"ready":"disabled";const i=e?.loadStatus;return"string"==typeof i?"loaded"===i?"ready":"loading"===i?"loading":"disabled":"ready"}get totalItems(){return this.tableItems.length}triggerAction(e,t){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:t})}_removeAllItems(){this.tableItems.destroyAll()}_getViewableTables(e){return e?this.listModeDisabled?e:e.filter((e=>"hide"!==(0,p.Qv)(e))):void 0}_watchTablesListMode(e){this.removeHandles(B),e&&!this.listModeDisabled&&this.addHandles((0,M.wB)((()=>e.filter((e=>"listMode"in e)).map((e=>e.listMode)).toArray()),(()=>this._compileList())),B)}_compileList(){const{tables:e}=this;this._watchTablesListMode(e);const t=this._getViewableTables(e);t?.length?(this._createNewItems(t),this._removeItems(t),this._sortItems(t)):this._removeAllItems()}_createNewItems(e){const{tableItems:t,listItemCreatedFunction:i,checkPublishStatusEnabled:s}=this;e.forEach((e=>{t.some((t=>t.layer===e))||t.add(new x({checkPublishStatusEnabled:s,layer:e,listItemCreatedFunction:i}))}))}_removeItems(e){const{tableItems:t}=this;t.forEach((i=>{if(!i)return;const s=e?.find((e=>i.layer===e));s||(t.remove(i),i.destroy())}))}_sortItems(e){const{tableItems:t}=this;t.sort(((t,i)=>{const s=e.indexOf(t.layer),l=e.indexOf(i.layer);return s>l?-1:s<l?1:0}))}_recompileList(){this._removeAllItems(),this._compileList()}};(0,s._)([(0,r.MZ)()],R.prototype,"checkPublishStatusEnabled",void 0),(0,s._)([(0,r.MZ)()],R.prototype,"listItemCreatedFunction",void 0),(0,s._)([(0,r.MZ)({nonNullable:!0})],R.prototype,"listModeDisabled",void 0),(0,s._)([(0,r.MZ)({type:$,readOnly:!0})],R.prototype,"tableItems",void 0),(0,s._)([(0,r.MZ)()],R.prototype,"tables",null),(0,s._)([(0,r.MZ)()],R.prototype,"map",void 0),(0,s._)([(0,r.MZ)({readOnly:!0})],R.prototype,"state",null),(0,s._)([(0,r.MZ)()],R.prototype,"totalItems",null),R=(0,s._)([(0,d.$)("esri.widgets.TableList.TableListViewModel")],R);const U=R;let G=class extends f.A{constructor(){super(...arguments),this.closeButton=!1,this.collapseButton=!1,this.errors=!1,this.filter=!1,this.flow=!0,this.heading=!1,this.statusIndicators=!0,this.temporaryTableIndicators=!1}};(0,s._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],G.prototype,"closeButton",void 0),(0,s._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],G.prototype,"collapseButton",void 0),(0,s._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],G.prototype,"errors",void 0),(0,s._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],G.prototype,"filter",void 0),(0,s._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],G.prototype,"flow",void 0),(0,s._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],G.prototype,"heading",void 0),(0,s._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],G.prototype,"statusIndicators",void 0),(0,s._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],G.prototype,"temporaryTableIndicators",void 0),G=(0,s._)([(0,d.$)("esri.widgets.TableList.TableListVisibleElements")],G);const H=G;function V(e){return e["data-item"]}const W=l.A.ofType(x);let q=class extends((0,o.sA)(h.A)){constructor(e,t){super(e,t),this._focusRootFlowItem=!1,this._focusPanelFlowItem=!1,this._lastDragDetail=null,this._selectedDragItemLayerUid=null,this._rootGroupUid=`table-${this.uid}`,this.collapsed=!1,this.dragEnabled=!1,this.filterPlaceholder="",this.filterText="",this.headingLevel=2,this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.messages=null,this.messagesCommon=null,this.minDragEnabledItems=p.ep,this.minFilterItems=p.dv,this.selectedItems=new W,this.selectionMode="none",this.viewModel=new U,this.visibleElements=new H,this._canMove=(e,t)=>{let{dragEl:i,fromEl:s,toEl:l}=e;const n="pull"===t?this.listItemCanGiveFunction:this.listItemCanReceiveFunction,o=V(i);if(!o?.sortable)return!1;const a=V(s),r=(0,p.MN)(s),d=V(l),c=(0,p.MN)(l),h=!!r&&!!c&&r===c,u={selected:o,from:a,to:d},m=s.group,_=l.group;return m&&_&&"function"==typeof n?n.call(null,u):h},this._onCalciteListOrderChange=e=>{const{_lastDragDetail:t}=this,{toEl:i,fromEl:s,dragEl:l,newIndex:n}=e;if(!s||!i||t?.newIndex===n&&t?.dragEl===l&&t?.toEl===i&&t?.fromEl===s)return;this._lastDragDetail=e;const o=Array.from(s.children).filter((e=>e?.matches("calcite-list-item"))).map((e=>e.value));!function(e,t){e?.sort(((e,i)=>{const s=t.indexOf(e.uid),l=t.indexOf(i.uid);return s>l?-1:s<l?1:0}))}(this.map?.tables,o)}}loadDependencies(){return(0,u.W)({action:()=>Promise.resolve().then(i.bind(i,92111)),"action-group":()=>i.e(7689).then(i.bind(i,67689)),"action-menu":()=>i.e(6279).then(i.bind(i,6279)),button:()=>Promise.resolve().then(i.bind(i,11309)),flow:()=>i.e(4961).then(i.bind(i,14961)),"flow-item":()=>i.e(661).then(i.bind(i,40661)),icon:()=>i.e(5012).then(i.bind(i,95012)),list:()=>Promise.resolve().then(i.bind(i,66289)),"list-item":()=>Promise.resolve().then(i.bind(i,75338)),notice:()=>Promise.resolve().then(i.bind(i,81985))})}get _dragEnabled(){return this.viewModel.totalItems>=this.minDragEnabledItems&&this.dragEnabled}get _filterEnabled(){return this.viewModel.totalItems>=this.minFilterItems&&this.visibleElements.filter}get icon(){return"table"}set icon(e){this._overrideIfSome("icon",e)}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get map(){return this.viewModel.map}set map(e){this.viewModel.map=e}get multipleSelectionEnabled(){return(0,n.Lx)(a.A.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),"multiple"===this.selectionMode}set multipleSelectionEnabled(e){(0,n.Lx)(a.A.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),this.selectionMode=e?"multiple":this.selectionEnabled?"single":"none"}get selectionEnabled(){return(0,n.Lx)(a.A.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),"none"!==this.selectionMode&&this.dragEnabled}set selectionEnabled(e){(0,n.Lx)(a.A.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),this.dragEnabled=e,this.selectionMode=e?this.multipleSelectionEnabled?"multiple":"single":"none"}get tableItems(){return this.viewModel.tableItems}get tables(){return this.viewModel.tables}set tables(e){this.viewModel.tables=e}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){const e=this.viewModel?.state,t={[m.D.hidden]:"loading"===e,[m.D.disabled]:"disabled"===e},i=this.tableItems?.filter((e=>!e.hidden&&(this.visibleElements.errors||!e.error)));return(0,g.K)("div",{class:this.classes(I.base,m.D.widget,m.D.panel,t)},i?.length?this._renderItems(i):this._renderNoItems())}_renderNoItemsMessage(){return(0,g.K)("div",{slot:"message"},this.messages.noItemsToDisplay)}_renderNoItems(){return(0,g.K)("div",{class:I.itemMessage,key:"esri-layer-list__no-items"},(0,g.K)("calcite-notice",{icon:"information",kind:"info",open:!0,width:"full"},this._renderNoItemsMessage()))}_renderPanelFlowItems(e){return e?.toArray().filter((e=>{let{panel:t}=e;return t?.open&&!t.disabled&&t.flowEnabled})).map((e=>{let{title:t,panel:i}=e;const s=()=>this._handlePanelFlowItemBack(i);return(0,g.K)("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:t,heading:i.title,headingLevel:this.headingLevel,key:`flow-panel-${i.uid}`,onCalciteFlowItemBack:e=>{e.preventDefault(),s()}},i.render(),(0,g.K)("calcite-button",{appearance:"transparent",onclick:s,slot:"footer-actions",width:"full"},this.messagesCommon.back))}))}_handlePanelFlowItemBack(e){e.open=!1,this._focusRootFlowItem=!0}_focusRootFlowItemNode(e){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,requestAnimationFrame((()=>e?.setFocus())))}_focusPanelFlowItemNode(e){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,requestAnimationFrame((()=>e?.setFocus())))}_renderItems(e){const{visible:t,collapsed:i,visibleElements:{closeButton:s,collapseButton:l,heading:n,flow:o},_dragEnabled:a,_filterEnabled:r,_rootGroupUid:d,selectionMode:c,messages:h,filterPlaceholder:p,filterText:u}=this,m=[(0,g.K)("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:s,closed:!t,collapsed:i,collapsible:l,heading:n?h.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>this.visible=!1},(0,g.K)("calcite-list",{canPull:e=>this._canMove(e,"pull"),canPut:e=>this._canMove(e,"put"),"data-layer-type":d,dragEnabled:a,filterEnabled:r,filterPlaceholder:p,filterText:r?u:"",group:d,key:"root-list",label:h.widgetLabel,selectionAppearance:"border",selectionMode:c,onCalciteListChange:e=>this._handleCalciteListChange(e),onCalciteListDragEnd:e=>this._handleCalciteListDragEnd(e.detail),onCalciteListFilter:e=>this.filterText=e.target?.filterText??"",onCalciteListOrderChange:e=>this._onCalciteListOrderChange(e.detail)},e?.toArray().map((e=>this._renderItem(e))),e?.length&&r?(0,g.K)("div",{class:I.filterNoResults,slot:"filter-no-results"},(0,g.K)("calcite-notice",{kind:"info",open:!0,width:"full"},this._renderNoItemsMessage())):null)),this._renderPanelFlowItems(e)];return t?o?(0,g.K)("calcite-flow",{key:"root-flow"},m):m:null}_handleCalciteListDragEnd(e){const{fromEl:t,dragEl:i,oldIndex:s}=e;t.insertBefore(i,t.children[s])}_renderItemMessage(e){return e.error?(0,g.K)("div",{class:I.itemMessage,key:"esri-layer-list__error",slot:"content-bottom"},(0,g.K)("calcite-notice",{icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",width:"full"},(0,g.K)("div",{slot:"message"},this.messages.tableError))):null}_renderItem(e){const{_selectedDragItemLayerUid:t,selectionMode:i,selectedItems:s,messages:l}=this,n=e.title||l.untitledTable,o=this._filterActions(e.actionsSections),a=this._countActions(o);return(0,g.K)("calcite-list-item",{afterCreate:t=>this._focusSelectedDragEl(t,e),afterUpdate:t=>this._focusSelectedDragEl(t,e),class:I.item,"data-item":e,"data-layer-id":e.layer.id,dragDisabled:!e.sortable,dragSelected:e.layer.uid===t,id:e.layer?.uid,key:`list-item-${e.layer.uid}`,label:n,metadata:{title:n},selected:"none"!==i&&s.includes(e),title:n,value:e.layer?.uid,onCalciteListItemDragHandleChange:t=>this._handleCalciteListItemDragHandleChange(t,e)},(0,g.K)("div",{class:I.itemContent,slot:"content"},n),this._renderItemStatus(e),this._renderItemTemporaryIcon(e),this._renderItemMessage(e),this._renderPanel(e.panel),this._renderPanelAction(e.panel),a>1?this._renderActionsSections(e,o):1===a?this._renderAction({item:e,action:this._getSingleAction(o),textEnabled:!1}):null)}_renderItemTemporaryIcon(e){return this.visibleElements.temporaryTableIndicators&&!e.layer.persistenceEnabled?(0,g.K)("calcite-icon",{class:I.itemTemporaryIcon,icon:"temporary",key:"temporary-icon",scale:"s",slot:"actions-start",title:this.messages.temporary}):null}_renderItemStatus(e){const{visibleElements:t}=this;if(!t.statusIndicators)return null;const{publishing:i}=e;return(0,g.K)("calcite-icon",{class:this.classes({[I.statusIndicator]:!0,[I.publishing]:i}),icon:"stop-square",key:"layer-item-status",scale:"s",slot:"actions-end"})}_renderPanel(e){return!e?.open||e.disabled||e.flowEnabled?null:(0,g.K)("div",{class:I.itemContentBottom,key:`content-panel-${e.uid}`,slot:"content-bottom"},e.render())}_renderPanelAction(e){if(!e?.visible)return null;const{open:t,title:i,disabled:s}=e;return(0,g.K)("calcite-action",{active:t,appearance:"transparent",disabled:s,icon:(0,c.Yb)(e),key:`action-${e.uid}`,onclick:()=>this._togglePanel(e),scale:"s",slot:"actions-end",text:i??"",title:i??void 0},this._renderFallbackIcon(e))}_renderActionsSections(e,t){const i=this.messagesCommon.options;return(0,g.K)("calcite-action-menu",{appearance:"transparent",class:I.actionMenu,key:"item-action-menu",label:this.messagesCommon.menu,open:e.actionsOpen,overlayPositioning:"fixed",placement:"bottom-end",scale:"s",slot:"actions-end",onCalciteActionMenuOpen:t=>e.actionsOpen=t.target.open},(0,g.K)("calcite-action",{appearance:"transparent",icon:"ellipsis",scale:"s",slot:"trigger",text:i,title:i}),t.toArray().map(((t,i)=>this._renderActionSection(e,t,i))))}_renderActionSection(e,t,i){return(0,g.K)("calcite-action-group",{class:I.actionGroup,key:`action-section-${i}`},t.toArray().map((t=>this._renderAction({item:e,action:t,textEnabled:!0}))))}_renderFallbackIcon(e){const{className:t,icon:i}=e;if(i)return null;const s="image"in e?e.image:void 0,l={[I.itemActionIcon]:!!t,[I.itemActionImage]:!!s};return t&&(l[t]=!0),s||t?(0,g.K)("span",{"aria-hidden":"true",class:this.classes(I.itemActionIcon,l),key:"icon",styles:(0,c.p5)(s)}):null}_renderAction(e){const{item:t,action:i,textEnabled:s}=e;if(!i)return null;const{active:l,disabled:n,title:o,type:a,indicator:r}=i;return(0,g.K)("calcite-action",{active:"toggle"===a&&i.value,appearance:"transparent",disabled:n,icon:(0,c.Yb)(i),indicator:r,key:`action-${i.uid}`,loading:l,onclick:()=>this._triggerAction(t,i),scale:"s",slot:s?void 0:"actions-end",text:o??"",textEnabled:s,title:o??void 0},this._renderFallbackIcon(i))}_filterActions(e){return e.map((e=>e.filter((e=>e.visible))))}_getSingleAction(e){return e.reduce((e=>e)).find((e=>e&&("button"===e.type||"toggle"===e.type)))}_countActions(e){return e.reduce(((e,t)=>e+t.length),0)}_focusSelectedDragEl(e,t){this._selectedDragItemLayerUid===t.layer.uid&&requestAnimationFrame((()=>e?.setFocus()))}_handleCalciteListItemDragHandleChange(e,t){e.stopPropagation();const i=e.target.dragSelected;this._selectedDragItemLayerUid=i?t.layer.uid:null}_handleCalciteListChange(e){const{selectionMode:t,selectedItems:i}=this;if("none"===t)return;const s=e.target.selectedItems.map((e=>V(e))).filter(Boolean);i.removeAll(),i.addMany(s)}_togglePanel(e){e.open=!e.open,e.open&&(this._focusPanelFlowItem=!0)}_triggerAction(e,t){t&&e&&("toggle"===t.type&&(t.value=!t.value),this.triggerAction(t,e))}};(0,s._)([(0,r.MZ)()],q.prototype,"_focusRootFlowItem",void 0),(0,s._)([(0,r.MZ)()],q.prototype,"_focusPanelFlowItem",void 0),(0,s._)([(0,r.MZ)()],q.prototype,"_dragEnabled",null),(0,s._)([(0,r.MZ)()],q.prototype,"_filterEnabled",null),(0,s._)([(0,r.MZ)()],q.prototype,"collapsed",void 0),(0,s._)([(0,r.MZ)()],q.prototype,"dragEnabled",void 0),(0,s._)([(0,r.MZ)()],q.prototype,"filterPlaceholder",void 0),(0,s._)([(0,r.MZ)()],q.prototype,"filterText",void 0),(0,s._)([(0,r.MZ)()],q.prototype,"headingLevel",void 0),(0,s._)([(0,r.MZ)()],q.prototype,"icon",null),(0,s._)([(0,r.MZ)()],q.prototype,"label",null),(0,s._)([(0,r.MZ)()],q.prototype,"listItemCanGiveFunction",void 0),(0,s._)([(0,r.MZ)()],q.prototype,"listItemCanReceiveFunction",void 0),(0,s._)([(0,r.MZ)()],q.prototype,"listItemCreatedFunction",null),(0,s._)([(0,r.MZ)()],q.prototype,"map",null),(0,s._)([(0,r.MZ)(),(0,_.G)("esri/widgets/TableList/t9n/TableList")],q.prototype,"messages",void 0),(0,s._)([(0,r.MZ)(),(0,_.G)("esri/t9n/common")],q.prototype,"messagesCommon",void 0),(0,s._)([(0,r.MZ)()],q.prototype,"minDragEnabledItems",void 0),(0,s._)([(0,r.MZ)()],q.prototype,"minFilterItems",void 0),(0,s._)([(0,r.MZ)()],q.prototype,"multipleSelectionEnabled",null),(0,s._)([(0,r.MZ)()],q.prototype,"selectionEnabled",null),(0,s._)([(0,r.MZ)()],q.prototype,"selectedItems",void 0),(0,s._)([(0,r.MZ)()],q.prototype,"selectionMode",void 0),(0,s._)([(0,r.MZ)({readOnly:!0})],q.prototype,"tableItems",null),(0,s._)([(0,r.MZ)()],q.prototype,"tables",null),(0,s._)([(0,b.U)("trigger-action"),(0,r.MZ)({type:U})],q.prototype,"viewModel",void 0),(0,s._)([(0,r.MZ)({type:H,nonNullable:!0})],q.prototype,"visibleElements",void 0),q=(0,s._)([(0,d.$)("esri.widgets.TableList")],q);const z=q}}]);
//# sourceMappingURL=4306.1c3b6981.chunk.js.map