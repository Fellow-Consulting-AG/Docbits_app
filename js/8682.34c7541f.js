"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[8682],{78682:(e,t,l)=>{l.r(t),l.d(t,{default:()=>Y});var a=l(61758),i=l(58790),o=l(29104);const n=e=>((0,a.Qi)("data-v-62cfa638"),e=e(),(0,a.jt)(),e),s={class:"grid-container"},u={class:"full-width"},d={class:"table-header-text"},c={style:{width:"120px"},align:"right"},r=["onClick"],p={align:"right"},m=n((()=>(0,a.Lk)("img",{class:"loading-image",src:"images/loader.gif",alt:"Loading..."},null,-1))),g={class:"col-sm-12 col-md-12 col-lg-12"},h={class:"row"},_={class:"col-sm-12 col-md-12 col-lg-12 q-pa-md"},b={class:"col-sm-12 col-md-12 col-lg-12 q-pa-md"},k={class:"float-right q-ml-auto q-pa-md q-mt-md"};function y(e,t,l,n,y,f){const v=(0,a.g2)("SubHeader"),L=(0,a.g2)("f-btn"),w=(0,a.g2)("q-btn"),A=(0,a.g2)("BackToSettings"),S=(0,a.g2)("q-item-section"),F=(0,a.g2)("q-item"),q=(0,a.g2)("q-list"),T=(0,a.g2)("q-menu"),$=(0,a.g2)("q-markup-table"),C=(0,a.g2)("q-inner-loading"),Q=(0,a.g2)("q-toolbar-title"),E=(0,a.g2)("q-toolbar"),x=(0,a.g2)("q-input"),R=(0,a.g2)("q-select"),P=(0,a.g2)("q-form"),U=(0,a.g2)("q-card-section"),I=(0,a.g2)("q-card"),V=(0,a.g2)("q-dialog"),D=(0,a.gN)("close-popup");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(v,{name:"email_templates",label:e.$t("supplier_layout")},null,8,["label"]),(0,a.bF)(A,null,{default:(0,a.k6)((()=>[(0,a.bF)(L,{class:"float-right",label:e.$t("new"),icon:"add",onClick:t[0]||(t[0]=()=>e.layoutDialog=!0)},null,8,["label"]),(0,a.bF)(w,{class:"float-right q-mr-sm",flat:"",to:"/settings/supplier/layouts_builder/default_fields",color:"primary",label:e.$t("supplier_fields")},null,8,["label"])])),_:1}),(0,a.Lk)("div",s,[(0,a.Lk)("div",u,[(0,a.bF)($,{flat:"",class:"dashboard-table-height back-white",style:{"z-index":"1"}},{default:(0,a.k6)((()=>[(0,a.Lk)("thead",null,[(0,a.Lk)("tr",d,[(0,a.Lk)("th",null,(0,i.v_)(e.$t("title")),1),(0,a.Lk)("th",null,(0,i.v_)(e.$t("document_name")),1),(0,a.Lk)("th",c,(0,i.v_)(e.$t("actions")),1)])]),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.document_types,(l=>((0,a.uX)(),(0,a.CE)("tr",{key:l.index,class:"cursor-pointer",onClick:t=>e.goSupplierLayoutDetails(null===l||void 0===l?void 0:l.document_name)},[(0,a.Lk)("td",null,(0,i.v_)(l.title),1),(0,a.Lk)("td",null,(0,i.v_)(e.$t(l.document_name)),1),(0,a.Lk)("td",p,[(0,a.bF)(w,{flat:"",dense:"",round:"",onClick:t[1]||(t[1]=(0,o.D$)((()=>{}),["stop","prevent"])),icon:"more_horiz"},{default:(0,a.k6)((()=>[(0,a.bF)(T,{"auto-close":"","transition-show":"jump-down","transition-hide":"jump-up",anchor:"bottom middle",self:"top middle"},{default:(0,a.k6)((()=>[(0,a.bF)(q,{dense:"",style:{"min-width":"100px"}},{default:(0,a.k6)((()=>[(0,a.bF)(F,{clickable:"",onClick:t=>e.editTemplate(null===l||void 0===l?void 0:l.document_name)},{default:(0,a.k6)((()=>[(0,a.bF)(S,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,i.v_)(e.$t("edit_layout")),1)])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])],8,r)))),128))])])),_:1})])]),(0,a.bF)(C,{showing:e.loading,style:{"z-index":"2"}},{default:(0,a.k6)((()=>[m])),_:1},8,["showing"]),(0,a.bF)(V,{modelValue:e.layoutDialog,"onUpdate:modelValue":t[4]||(t[4]=t=>e.layoutDialog=t)},{default:(0,a.k6)((()=>[(0,a.bF)(I,{style:{width:"600px","max-width":"60vw"}},{default:(0,a.k6)((()=>[(0,a.bF)(E,{class:"bg-primary"},{default:(0,a.k6)((()=>[(0,a.bF)(Q,{class:"text-white"},{default:(0,a.k6)((()=>[(0,a.Lk)("span",null,(0,i.v_)(e.$t("create_layout")),1)])),_:1}),(0,a.bo)((0,a.bF)(L,{icon:"close",onClick:e.reset},null,8,["onClick"]),[[D]])])),_:1}),(0,a.bF)(U,null,{default:(0,a.k6)((()=>[(0,a.Lk)("div",g,[(0,a.bF)(P,{onSubmit:e.createLayout,onReset:e.reset},{default:(0,a.k6)((()=>[(0,a.Lk)("div",h,[(0,a.Lk)("div",_,[(0,a.bF)(x,{dense:"",outlined:"",modelValue:e.title,"onUpdate:modelValue":t[2]||(t[2]=t=>e.title=t),required:"",label:e.$t("title")},null,8,["modelValue","label"])]),(0,a.Lk)("div",b,[(0,a.bF)(R,{outlined:"",dense:"",modelValue:e.doc_type_name,"onUpdate:modelValue":t[3]||(t[3]=t=>e.doc_type_name=t),options:e.docTypeOption,"emit-value":"","map-options":"",required:"",label:e.$t("document_name")},null,8,["modelValue","options","label"])]),(0,a.Lk)("div",k,[(0,a.bo)((0,a.bF)(L,{label:e.$t("pages.user.cancel"),appearance:"cancel",onClick:e.reset},null,8,["label","onClick"]),[[D]]),(0,a.bF)(L,{label:e.$t("pages.user.save"),class:"q-ml-sm",type:"submit"},null,8,["label"])])])])),_:1},8,["onSubmit","onReset"])])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var f=l(38734),v=l(91236),L=l(60894),w=l(94124),A=l(1659),S=l(53474),F=l(11470),q=l(24622),T=l(18505),$=function(e,t,l,a){function i(e){return e instanceof l?e:new l((function(t){t(e)}))}return new(l||(l=Promise))((function(l,o){function n(e){try{u(a.next(e))}catch(t){o(t)}}function s(e){try{u(a["throw"](e))}catch(t){o(t)}}function u(e){e.done?l(e.value):i(e.value).then(n,s)}u((a=a.apply(e,t||[])).next())}))};const C=(0,a.pM)({el:"#app",mixins:[T.A,q.A],components:{SubHeader:v.A,BackToSettings:L.A},mounted(){this.init()},data(){return{layoutDialog:(0,f.KR)(!1),doc_type_name:(0,f.KR)(""),title:(0,f.KR)(""),translate_key:(0,f.KR)(""),docTypeOption:[{label:this.$t(S.w.SUPPLIER_MANAGEMENT.toUpperCase()),value:S.w.SUPPLIER_MANAGEMENT},{label:this.$t(S.w.SUPPLIER_USER.toUpperCase()),value:S.w.SUPPLIER_USER}]}},setup(){const e=(0,w.M1)(),{document_types:t,loading:l}=(0,A.bP)(e),{getSupplierType:a}=e;return{getSupplierType:a,document_types:t,loading:l}},methods:{init(){return $(this,void 0,void 0,(function*(){try{this.loading=!0,yield this.getSupplierType()}catch(e){}finally{this.loading=!1}}))},addNew(){this.$router.push("/settings/supplier/add_email_templates")},editTemplate(e){this.$router.push(`/settings/supplier/layouts_builder/${e}`)},goSupplierLayoutDetails(e){this.$router.push(`/settings/supplier/layouts_builder/${e}`)},validation(){return!!this.doc_type_name||(this.showErrorToast(this.$t("please_select_document_type")),!1)},createLayout(){return $(this,void 0,void 0,(function*(){if(!this.validation())return;this.loading=!0;const e={doc_type_name:this.doc_type_name,title:this.title,translate_key:this.translate_key};try{const t=yield F.KT.createLayoutSupplier(e);yield this.getSupplierType(),!1===t.success?this.showErrorToast(t.message):this.showSuccessToast(this.$t("pages.messages.MSG_SAVE"))}catch(t){this.showSuccessToast(null===t||void 0===t?void 0:t.message)}finally{this.loading=!1,this.layoutDialog=!1,this.reset()}}))},reset(){this.doc_type_name="",this.title="",this.translate_key=""}}});var Q=l(12807),E=l(56384),x=l(857),R=l(84436),P=l(53999),U=l(90124),I=l(25173),V=l(39035),D=l(82156),M=l(23316),K=l(36914),N=l(39150),j=l(44189),z=l(49200),B=l(67837),G=l(94940),X=l(42315),H=l(88672),O=l(98582),W=l.n(O);const J=(0,Q.A)(C,[["render",y],["__scopeId","data-v-62cfa638"]]),Y=J;W()(C,"components",{QBtn:E.A,QMarkupTable:x.A,QMenu:R.A,QList:P.A,QItem:U.A,QItemSection:I.A,QInnerLoading:V.A,QDialog:D.A,QCard:M.A,QToolbar:K.A,QToolbarTitle:N.A,QCardSection:j.A,QForm:z.A,QInput:B.A,QSelect:G.A,QTable:X.A}),W()(C,"directives",{ClosePopup:H.A})}}]);