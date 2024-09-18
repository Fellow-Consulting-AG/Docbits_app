"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[7228],{57228:(t,e,a)=>{a.r(e),a.d(e,{default:()=>I});var n=a(61758),s=a(58790);const o=t=>((0,n.Qi)("data-v-1197eadf"),t=t(),(0,n.jt)(),t),r={class:"table-container"},i=o((()=>(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th",null,"Data Type"),(0,n.Lk)("th",null,"Last Synchronization Time")])],-1))),c={key:0},l=o((()=>(0,n.Lk)("td",{colspan:"2",class:"no-data"},"No data to be shown",-1))),d=[l];function u(t,e,a,o,l,u){const h=(0,n.g2)("NoDataWarningBanner"),m=(0,n.g2)("SubHeader"),D=(0,n.g2)("BackToSettings"),f=(0,n.g2)("q-markup-table");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.bF)(h,{showBanner:t.showBanner,onDismiss:t.handleDismissBanner},null,8,["showBanner","onDismiss"]),(0,n.bF)(m,{name:"data_sync_settings",label:"Data Synchronization",onSearch:!1}),(0,n.bF)(D),(0,n.Lk)("div",r,[(0,n.bF)(f,{flat:"",bordered:""},{default:(0,n.k6)((()=>[i,(0,n.Lk)("tbody",null,[0===t.syncData.length?((0,n.uX)(),(0,n.CE)("tr",c,d)):((0,n.uX)(!0),(0,n.CE)(n.FK,{key:1},(0,n.pI)(t.syncData,((e,a)=>((0,n.uX)(),(0,n.CE)("tr",{key:a},[(0,n.Lk)("td",null,(0,s.v_)(t.formateName(e.table_name)),1),(0,n.Lk)("td",null,(0,s.v_)(t.formateDateTime(e.created_on)),1)])))),128))])])),_:1})])])}var h=a(38734),m=a(95488),D=a(60894),f=a(21279),k=a(36246),p=a(96056),g=a(11470);const b=t=>((0,n.Qi)("data-v-4e98be96"),t=t(),(0,n.jt)(),t),v={key:0,class:"q-dialog fullscreen no-pointer-events q-dialog--modal banner-parent"},_=b((()=>(0,n.Lk)("div",{class:"q-dialog__backdrop fixed-full","aria-hidden":"true"},null,-1))),y={class:"lock-banner row q-dialog__inner all-pointer-events"},w={class:"left-side"},L={class:"message"},B={class:"right-side"};function T(t,e,a,o,r,i){const c=(0,n.g2)("q-btn");return t.showBanner?((0,n.uX)(),(0,n.CE)("div",v,[_,(0,n.Lk)("div",y,[(0,n.Lk)("span",w,[(0,n.bF)(c,{class:"text-weight-bold",onClick:t.dismissBanner},{default:(0,n.k6)((()=>[(0,n.eW)(" Dismiss ")])),_:1},8,["onClick"])]),(0,n.Lk)("span",L,(0,s.v_)(t.message),1),(0,n.Lk)("span",B,[(0,n.bF)(c,{class:"text-weight-bold",to:"/settings/data-validation"},{default:(0,n.k6)((()=>[(0,n.eW)(" Go To Master Data Lookup ")])),_:1})])])])):(0,n.Q3)("",!0)}const A=(0,n.pM)({props:{showBanner:{type:Boolean,default:!1},message:{type:String,default:"THERE IS NO NEW DATA FOUND FOR THE LAST 2 WEEKS"}},emits:["dismiss"],methods:{dismissBanner(){this.$emit("dismiss")}}});var F=a(12807),S=a(82156),C=a(56384),E=a(98582),N=a.n(E);const x=(0,F.A)(A,[["render",T],["__scopeId","data-v-4e98be96"]]),q=x;N()(A,"components",{QDialog:S.A,QBtn:C.A});var H=function(t,e,a,n){function s(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,o){function r(t){try{c(n.next(t))}catch(e){o(e)}}function i(t){try{c(n["throw"](t))}catch(e){o(e)}}function c(t){t.done?a(t.value):s(t.value).then(r,i)}c((n=n.apply(t,e||[])).next())}))};const Q=(0,n.pM)({components:{NoDataWarningBanner:q,SubHeader:m.A,BackToSettings:D.A},mixins:[p.A],data(){return{syncData:[],showBanner:(0,h.KR)(!1)}},methods:{fetchData(){return H(this,void 0,void 0,(function*(){try{let t="Placeholder for org_id";const e=yield g.D.fetchTableData(t);this.syncData=JSON.parse(e),this.syncData.sort(((t,e)=>new Date(e.created_on).getTime()-new Date(t.created_on).getTime())),0===this.syncData.length||this.checkLatestUpdate()?this.showBanner=!0:this.showBanner=!1}catch(t){}}))},formateDateTime(t){const e=/^(\d{2})[./](\d{2})[./](\d{4})$/;e.exec(t);if(!this.isDate(t))return t;if(!t)return"-";const a=f.v.getFormat(this.getDocDateFormat())+" HH:mm:ss";return this.formateDate(t,a)},formateDate(t,e=""){let a="";return this.isDate(t)?(a=e||f.v.getFormat(this.getDocDateFormat()),k.Ay.formatDate(t,`${a}`)):t},formateName(t){return t.split("_").map((t=>t.charAt(0).toUpperCase()+t.slice(1).toLowerCase())).join(" ")},checkLatestUpdate(){const t=new Date;return t.setDate(t.getDate()-14),this.syncData.every((e=>new Date(e.created_on)<t))},handleDismissBanner(){this.showBanner=!1}},mounted(){this.fetchData()}});var W=a(857);const X=(0,F.A)(Q,[["render",u],["__scopeId","data-v-1197eadf"]]),I=X;N()(Q,"components",{QMarkupTable:W.A})}}]);