"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[2123],{52123:(e,l,t)=>{t.r(l),t.d(l,{default:()=>C});var n=t(61758),i=t(58790);const o={class:"col-12 q-pl-sm q-mt-md"},a={class:"row full-width justify-center"},c=["src"],u={key:1,class:"q-mt-lg"},r=(0,n.Lk)("img",{class:"loading-image",src:"images/loader.gif",alt:"Loading..."},null,-1);function s(e,l,t,s,d,p){const f=(0,n.g2)("SubHeader"),g=(0,n.g2)("f-btn"),h=(0,n.g2)("BackToSettings"),m=(0,n.g2)("q-inner-loading");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(f,{name:"supplier_policy_and_privacy",label:e.$t("policy_privacy_statement")},null,8,["label"]),(0,n.bF)(h,null,{default:(0,n.k6)((()=>[(0,n.Lk)("input",{type:"file",ref:"fileInput",accept:"application/pdf",onChange:l[0]||(l[0]=(...l)=>e.handleFileUpload&&e.handleFileUpload(...l)),hidden:""},null,544),(0,n.bF)(g,{label:e.$t("upload_document"),class:"float-right",onClick:e.triggerFileUpload},null,8,["label","onClick"])])),_:1}),(0,n.Lk)("div",o,[(0,n.Lk)("div",a,[e.url?((0,n.uX)(),(0,n.CE)("iframe",{key:0,src:e.url,title:"pdf Document",width:"90%",height:"900px"},null,8,c)):((0,n.uX)(),(0,n.CE)("div",u,(0,i.v_)(e.$t("no_policy_statement_status")),1))])]),(0,n.bF)(m,{showing:e.loading},{default:(0,n.k6)((()=>[r])),_:1},8,["showing"])],64)}var d=t(38734),p=t(18505),f=t(24622),g=t(66693),h=t(25773),m=t(42102),b=t(1659),k=function(e,l,t,n){function i(e){return e instanceof t?e:new t((function(l){l(e)}))}return new(t||(t=Promise))((function(t,o){function a(e){try{u(n.next(e))}catch(l){o(l)}}function c(e){try{u(n["throw"](e))}catch(l){o(l)}}function u(e){e.done?t(e.value):i(e.value).then(a,c)}u((n=n.apply(e,l||[])).next())}))};const v=(0,n.pM)({el:"#app",mixins:[p.A,f.A],components:{SubHeader:g.A,BackToSettings:h.A},mounted(){return k(this,void 0,void 0,(function*(){yield this.getFile()}))},methods:{triggerFileUpload(){this.$refs.fileInput.click()},handleFileUpload(e){return k(this,void 0,void 0,(function*(){const l=e.target.files[0];try{yield this.uploadTerm(l),this.showSuccessToast(this.$t("upload_success"))}catch(t){logInfo(t,"error")}}))},fileUrl(e){if(e)return URL.createObjectURL(e)}},setup(){const e=(0,m.y)(),{uploadTerm:l,getFile:t}=e,{loading:n,url:i}=(0,b.bP)(e);return{uploadTerm:l,loading:n,url:i,getFile:t,pdfFileUpload:(0,d.KR)(null)}}});var _=t(12807),y=t(39035),F=t(98582),w=t.n(F);const U=(0,_.A)(v,[["render",s]]),C=U;w()(v,"components",{QInnerLoading:y.A})}}]);