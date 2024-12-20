"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[8842],{98842:(e,t,l)=>{l.r(t),l.d(t,{default:()=>X});var a=l(61758),s=l(58790);const o={class:"container no-padding back highlighted-back"},n={class:"secondary-c-text text-h6 q-pt-md q-pb-md"},c=(0,a.Lk)("img",{width:"24",src:"images/back_new.svg"},null,-1),i={style:{"vertical-align":"middle","margin-left":"10px","font-size":"20px",cursor:"pointer"}},d={class:"container text-color-grey"},r={class:"full-width"},u=(0,a.Lk)("img",{src:"images/fields.svg",class:"q-pr-sm q-pl-sm",width:"40"},null,-1),m={class:"row"},p=(0,a.Lk)("img",{class:"img-fluid mb-14",width:"28",height:"28",src:"images/trash-bin-default.svg",alt:""},null,-1),_={class:"q-ml-sm"};function g(e,t,l,g,b,f){const h=(0,a.g2)("SubHeader"),k=(0,a.g2)("q-icon"),y=(0,a.g2)("q-btn"),v=(0,a.g2)("q-item-section"),w=(0,a.g2)("EditOrCreateBtn"),F=(0,a.g2)("q-item"),A=(0,a.g2)("q-list"),L=(0,a.g2)("q-avatar"),q=(0,a.g2)("q-card-section"),C=(0,a.g2)("q-card-actions"),x=(0,a.g2)("q-card"),I=(0,a.g2)("q-dialog"),Q=(0,a.g2)("Loader"),R=(0,a.gN)("close-popup");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(h,{name:"layout_builder",label:"All Templates"}),(0,a.Lk)("div",o,[(0,a.Lk)("div",n,[(0,a.bF)(y,{flat:"",rounded:"",color:"primary",to:"/settings/document"},{default:(0,a.k6)((()=>[(0,a.bF)(k,{class:"text-red-13",size:"sm"},{default:(0,a.k6)((()=>[c])),_:1}),(0,a.Lk)("label",i,(0,s.v_)(e.$t("back_to_list")),1)])),_:1})])]),(0,a.Lk)("div",d,[(0,a.Lk)("div",r,[(0,a.bF)(A,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.document_type_templates,((t,l)=>((0,a.uX)(),(0,a.Wv)(F,{key:l,class:"q-mb-md q-pa-md bg-white grey-border"},{default:(0,a.k6)((()=>[(0,a.bF)(v,{avatar:""},{default:(0,a.k6)((()=>[u])),_:1}),(0,a.bF)(v,{class:"text-weight-bold"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",null,(0,s.v_)(t.title)+" "+(0,s.v_)(t.doc_type_key)+" "+(0,s.v_)(t.sub_doc_type_key),1)])),_:2},1024),(0,a.bF)(v,{avatar:""},{default:(0,a.k6)((()=>[(0,a.Lk)("div",m,[(0,a.bF)(w,{doc_type_key:t.doc_type_key,sub_doc_type_key:t.sub_doc_type_key},null,8,["doc_type_key","sub_doc_type_key"])])])),_:2},1024),(0,a.bF)(v,{avatar:""},{default:(0,a.k6)((()=>[(0,a.bF)(y,{flat:"",color:"primary",class:"no-padding-left-right",onClick:a=>{e.deleteConfirm=!0,e.selectedRowId=t.id,e.selectedRowIndex=l}},{default:(0,a.k6)((()=>[p])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])]),(0,a.bF)(I,{modelValue:e.deleteConfirm,"onUpdate:modelValue":t[1]||(t[1]=t=>e.deleteConfirm=t),persistent:""},{default:(0,a.k6)((()=>[(0,a.bF)(x,null,{default:(0,a.k6)((()=>[(0,a.bF)(q,{class:"row",style:{"justify-content":"center",display:"flex"}},{default:(0,a.k6)((()=>[(0,a.bF)(L,{icon:"warning",color:"primary","text-color":"white"})])),_:1}),(0,a.bF)(q,{class:"row items-center"},{default:(0,a.k6)((()=>[(0,a.Lk)("span",_,(0,s.v_)(e.$t("sure")),1)])),_:1}),(0,a.bF)(C,{align:"right"},{default:(0,a.k6)((()=>[(0,a.bo)((0,a.bF)(y,{flat:"",label:e.$t("cancel"),"data-cy":"cancel",color:"primary"},null,8,["label"]),[[R]]),(0,a.bo)((0,a.bF)(y,{flat:"",label:e.$t("delete"),"data-cy":"delete-popup",color:"primary",onClick:t[0]||(t[0]=t=>e.deleteLayout())},null,8,["label"]),[[R]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.bF)(Q)],64)}var b=l(24622),f=l(38734),h=l(89156),k=l(18505),y=l(11470),v=l(77362),w=l(83319),F=l(1659),A=l(47414),L=function(e,t,l,a){function s(e){return e instanceof l?e:new l((function(t){t(e)}))}return new(l||(l=Promise))((function(l,o){function n(e){try{i(a.next(e))}catch(t){o(t)}}function c(e){try{i(a["throw"](e))}catch(t){o(t)}}function i(e){e.done?l(e.value):s(e.value).then(n,c)}i((a=a.apply(e,t||[])).next())}))};const q=(0,a.pM)({el:"#app",mixins:[k.A,b.A],components:{Loader:h.A,SubHeader:v.A,EditOrCreateBtn:A.A},data(){return{selectedRowId:(0,f.KR)(""),deleteConfirm:(0,f.KR)(!1),selectedRowIndex:(0,f.KR)(0)}},mounted(){this.getTemplatesForDocuments()},methods:{deleteLayout(){return L(this,void 0,void 0,(function*(){try{this.showLoading();const e=yield y.H7.deleteDocumentLayoutTemplate(this.selectedRowId);if(!1===e.success)throw this.showErrorToast(e.message),{message:e.message};this.showSuccessToast(this.$t("pages.messages.operation_sucessfull")),this.document_type_templates.splice(this.selectedRowIndex,1),this.selectedRowId=""}catch(e){this.showErrorToast(this.$t("pages.messages.error_internal_occur")),logError(e)}finally{this.hideLoading()}}))}},setup(){const e=(0,w.uL)(),{loading_templates:t,document_type_templates:l}=(0,F.bP)(e),{getTemplatesForDocuments:a}=e;return{loading_templates:t,document_type_templates:l,getTemplatesForDocuments:a}}});var C=l(12807),x=l(56384),I=l(50492),Q=l(53999),R=l(90124),T=l(25173),E=l(82156),$=l(23316),D=l(44189),K=l(3952),S=l(62669),B=l(88672),H=l(98582),P=l.n(H);const V=(0,C.A)(q,[["render",g]]),X=V;P()(q,"components",{QBtn:x.A,QIcon:I.A,QList:Q.A,QItem:R.A,QItemSection:T.A,QDialog:E.A,QCard:$.A,QCardSection:D.A,QAvatar:K.A,QCardActions:S.A}),P()(q,"directives",{ClosePopup:B.A})}}]);