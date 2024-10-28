/*! For license information please see 661.85b2325d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkukraine_sample=self.webpackChunkukraine_sample||[]).push([[661],{40661:(e,t,a)=>{a.r(t),a.d(t,{CalciteFlowItem:()=>M,defineCustomElement:()=>_});var o=a(95146),s=a(39879),c=a(65079),l=a(76527),i=a(62785),n=a(76988),d=a(46269),r=a(48897),h=a(9185),b=a(67294),f=a(26964),m=a(53794),g=a(43901);const u="back-button",p="chevron-left",k="chevron-right",v="action-bar",w="alerts",y="content-top",C="content-bottom",B="header-actions-start",E="header-actions-end",S="header-menu-actions",I="header-content",F="fab",P="footer",L="footer-actions",x="footer-end",T="footer-start",O=(0,o.w$)(class extends o.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=(0,o.lh)(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=(0,o.lh)(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=(0,o.lh)(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=(0,o.lh)(this,"calciteFlowItemToggle",6),this.handleInternalPanelScroll=e=>{e.target===this.containerEl&&(e.stopPropagation(),this.calciteFlowItemScroll.emit())},this.handleInternalPanelClose=e=>{e.target===this.containerEl&&(e.stopPropagation(),this.closed=!0,this.calciteFlowItemClose.emit())},this.handleInternalPanelToggle=e=>{e.target===this.containerEl&&(e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit())},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.beforeClose=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.scale="m",this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){(0,i.c)(this),(0,n.c)(this)}async componentWillLoad(){await(0,n.s)(this),(0,l.s)(this)}componentDidRender(){(0,c.u)(this)}disconnectedCallback(){(0,i.d)(this),(0,n.d)(this)}componentDidLoad(){(0,l.a)(this)}effectiveLocaleChange(){(0,n.u)(this,this.effectiveLocale)}async setFocus(){await(0,l.c)(this);const{backButtonEl:e,containerEl:t}=this;return e?e.setFocus():t?t.setFocus():void 0}async scrollContentTo(e){await(this.containerEl?.scrollContentTo(e))}renderBackButton(){const{el:e}=this,t="rtl"===(0,s.a)(e),{showBackButton:a,backButtonClick:c,messages:l}=this,i=l.back,n=t?k:p;return a?(0,o.h)("calcite-action",{"aria-label":i,class:u,icon:n,key:"flow-back-button",onClick:c,ref:this.setBackRef,scale:"s",slot:"header-actions-start",text:i,title:i}):null}render(){const{collapsed:e,collapseDirection:t,collapsible:a,closable:s,closed:l,description:i,disabled:n,heading:r,headingLevel:h,loading:b,menuOpen:f,messages:m,overlayPositioning:g,beforeClose:u}=this;return(0,o.h)(o.xr,{key:"2e7872bb2687db0b67ddbf375f8ec0beaabbda36"},(0,o.h)(c.I,{key:"a9418954405a2cec2092bae3be5d77f02306e3c9",disabled:n},(0,o.h)("calcite-panel",{key:"d563c751421bf2d66c03286deaa613e09f585546",beforeClose:u,closable:s,closed:l,collapseDirection:t,collapsed:e,collapsible:a,description:i,disabled:n,heading:r,headingLevel:h,loading:b,menuOpen:f,messageOverrides:m,onCalcitePanelClose:this.handleInternalPanelClose,onCalcitePanelScroll:this.handleInternalPanelScroll,onCalcitePanelToggle:this.handleInternalPanelToggle,overlayPositioning:g,ref:this.setContainerRef,scale:this.scale},this.renderBackButton(),(0,o.h)("slot",{key:"c506ec8bb4debbd6a9da6c7941878de49776f614",name:v,slot:d.S.actionBar}),(0,o.h)("slot",{key:"e76e55e654ff878acff734bdf387402a9e262159",name:w,slot:d.S.alerts}),(0,o.h)("slot",{key:"f7ab8839d7b101e31087130ebf3e36af1ec7da24",name:B,slot:d.S.headerActionsStart}),(0,o.h)("slot",{key:"2932c4c15b168732356b8e55fcc3064f5b3f4cf5",name:E,slot:d.S.headerActionsEnd}),(0,o.h)("slot",{key:"1ef8a9050683022733695445092f8c626487d87b",name:I,slot:d.S.headerContent}),(0,o.h)("slot",{key:"24c0ab570a601a6c0edfb0c820e580fd24b158ce",name:S,slot:d.S.headerMenuActions}),(0,o.h)("slot",{key:"ec55bbe7ba939a6efb35225850c37a1aadb97275",name:F,slot:d.S.fab}),(0,o.h)("slot",{key:"aa0bfec47656ef9f7f575cd933897a7909e5badc",name:y,slot:d.S.contentTop}),(0,o.h)("slot",{key:"e23532d080e2df529c2aeb6af043c6efe7a0ab6d",name:C,slot:d.S.contentBottom}),(0,o.h)("slot",{key:"db6ffc0d9300c77067a4c88ab277de685c7713af",name:T,slot:d.S.footerStart}),(0,o.h)("slot",{key:"5f249356da9292f34c4036d0d0741f048fe999e9",name:P,slot:d.S.footer}),(0,o.h)("slot",{key:"7476137bacc0f3be5c97682c5027f74d73254765",name:x,slot:d.S.footerEnd}),(0,o.h)("slot",{key:"58f60a46c42a05abe9b100a57d478d991e4f25bc",name:L,slot:d.S.footerActions}),(0,o.h)("slot",{key:"926a8d94b76b6fcdef6dfd219ba8180c44f81c35"}))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],beforeClose:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],scale:[513],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function D(){if("undefined"===typeof customElements)return;["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-flow-item":customElements.get(e)||customElements.define(e,O);break;case"calcite-action":customElements.get(e)||(0,r.d)();break;case"calcite-action-menu":customElements.get(e)||(0,h.d)();break;case"calcite-icon":customElements.get(e)||(0,b.d)();break;case"calcite-loader":customElements.get(e)||(0,f.d)();break;case"calcite-panel":customElements.get(e)||(0,d.d)();break;case"calcite-popover":customElements.get(e)||(0,m.d)();break;case"calcite-scrim":customElements.get(e)||(0,g.d)()}}))}D();const M=O,_=D}}]);
//# sourceMappingURL=661.85b2325d.chunk.js.map