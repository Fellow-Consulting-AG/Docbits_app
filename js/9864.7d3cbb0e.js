"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[9864],{39864:(e,t,r)=>{r.r(t),r.d(t,{default:()=>V});var s=r(61758),o=r(58790);const i=e=>((0,s.Qi)("data-v-e31a8f80"),e=e(),(0,s.jt)(),e),a={class:"row full-width padding-left-35 container-wrapper"},n={class:"col-9"},l={class:"full-width"},c=["src"],d={class:"col-3"},h={class:"images-list",style:{"margin-left":"33px","margin-right":"33px"}},u={class:"row q-pl-md q-mt-sm"},g={class:"secondary-c-text text-h6 q-ml-auto"},p={class:"full-width q-ma-sm scroll-area-height"},m=i((()=>(0,s.Lk)("div",{class:"row justify-center q-pl-md q-pr-md q-pt-md"},[(0,s.Lk)("span",{class:"text-red-13 text-h6 text-weight-bold"}," ERROR ")],-1))),f={class:"q-pl-md q-pr-md full-width left-scroll-area-height scrolle-y"},_={class:"text-weight-bold"},k={class:"tab1 highlighted-back q-pa-sm rounded-lg"},v=i((()=>(0,s.Lk)("div",{class:"text-weight-bold"},"Exception: ",-1))),b={class:"tab1 highlighted-back q-pa-sm rounded-lg"},y=i((()=>(0,s.Lk)("img",{class:"loading-image",src:"images/loader.gif",alt:"Loading..."},null,-1)));function x(e,t,r,i,x,w){const L=(0,s.g2)("MessageBanner"),I=(0,s.g2)("SubHeader"),E=(0,s.g2)("BackToSettings"),q=(0,s.g2)("q-btn"),A=(0,s.g2)("q-inner-loading");return(0,s.uX)(),(0,s.CE)(s.FK,null,[e.is_status_not_error?((0,s.uX)(),(0,s.Wv)(L,{key:0,message:e.$t("status_updated_from_error"),messageCategoryClass:"error-banner"},null,8,["message"])):(0,s.Q3)("",!0),(0,s.bF)(I,{name:"error",onSearch:!1,label:e.$t("error"),show_expiry_alert:!0},null,8,["label"]),(0,s.bF)(E,{back_to_rotue:"/dashboard",label:e.$t("pages.screen2a.dashboard")},null,8,["label"]),(0,s.Lk)("div",a,[(0,s.Lk)("div",n,[(0,s.Lk)("div",l,[(0,s.Lk)("iframe",{src:e.path,title:"Main menu",width:"100%",class:"i-frame-height"},null,8,c)])]),(0,s.Lk)("div",d,[(0,s.Lk)("div",h,[(0,s.Lk)("div",u,[(0,s.Lk)("div",g,[e.is_export_error?((0,s.uX)(),(0,s.Wv)(q,{key:0,unelevated:"",class:"bg-primary text-white",tabindex:"1",onClick:e.goToFieldValidation,label:e.$t("fields_validation")},null,8,["onClick","label"])):(0,s.Q3)("",!0)])]),(0,s.Lk)("div",p,[m,(0,s.Lk)("div",f,[(0,s.Lk)("div",_,(0,o.v_)(e.$t("message"))+": ",1),(0,s.Lk)("pre",k," "+(0,o.v_)(e.message),1),v,(0,s.Lk)("pre",b," "+(0,o.v_)(e.exception),1)])])])])]),(0,s.bF)(A,{showing:e.processing},{default:(0,s.k6)((()=>[y])),_:1},8,["showing"])],64)}var w=r(1659),L=r(24622),I=r(38734),E=r(46162),q=r(11470),A=r(93970),Q=r(1595),T=r(25773),S=r(68180),D=function(e,t,r,s){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function a(e){try{l(s.next(e))}catch(t){i(t)}}function n(e){try{l(s["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):o(e.value).then(a,n)}l((s=s.apply(e,t||[])).next())}))};const P=(0,s.pM)({el:"#app",mixins:[L.A],components:{MessageBanner:A.A,SubHeader:S.A,BackToSettings:T.A},mounted(){this.init()},beforeRouteLeave:function(e,t,r){this.resetAllStoreData(),r()},unmounted:function(){},data(){return{docId:"",filename:""}},methods:{init(){return D(this,void 0,void 0,(function*(){try{yield this.getTokenQueryParam(),this.processing=!0,this.docId=this.$route.params.id,this.path=E.VA+"/resource/document/"+this.docId+"/"+this.docId+".pdf?download=false&"+this.tokenQueryParam,this.path||logInfo("pdf not found"),this.getErrorInfos(),yield this.getDocumentById(this.docId),this.checkExportError()}catch(e){logError(e)}finally{this.processing=!1}}))},getErrorInfos(){return D(this,void 0,void 0,(function*(){const e=yield q.M8.getDocumentError(this.docId);null!==e.message?(this.message=String(e.message),this.exception=e.exception||"",this.exception=String(this.exception)):this.is_status_not_error=!0}))},checkExportError(){logInfo("checkExportError",this.record.status),"export_error"===this.record.status&&(this.is_export_error=!0)},goToFieldValidation(){return D(this,void 0,void 0,(function*(){if(!this.record||0===Object.keys(this.record).length||!1===this.record.success||!1===this.is_export_error)return;const e=yield q.M8.setDocToReadyForValidation(this.docId);if(!1===e.success)return this.showErrorToast(this.$t("pages.messages.error_internal_occur")),void this.showErrorToast(e.message);this.record.hasOwnProperty("has_layout")&&"true"===String(this.record.has_layout)&&this.$router.push("/field_validation_v1/"+this.docId)}))}},setup(){const e=(0,Q.q3)(),{record:t,doc_loaded:r,processing:s}=(0,w.bP)(e),{getDocumentById:o,saveDocument:i,resetAllStoreData:a}=e,n=(0,Q._6)(),{tokenQueryParam:l}=(0,w.bP)(n),{getTokenQueryParam:c}=n;return{record:t,doc_loaded:r,processing:s,saveDocument:i,getDocumentById:o,resetAllStoreData:a,path:(0,I.KR)(""),message:(0,I.KR)(""),exception:(0,I.KR)(""),is_status_not_error:(0,I.KR)(!1),is_export_error:(0,I.KR)(!1),tokenQueryParam:l,getTokenQueryParam:c}}});var R=r(12807),B=r(56384),$=r(50492),C=r(39035),F=r(98582),K=r.n(F);const M=(0,R.A)(P,[["render",x],["__scopeId","data-v-e31a8f80"]]),V=M;K()(P,"components",{QBtn:B.A,QIcon:$.A,QInnerLoading:C.A})}}]);