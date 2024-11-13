"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[144],{50144:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var i=n(61758);const s={class:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},o={class:"container p-b-0 settings"},a={class:"q-mt-md"},r=(0,i.Lk)("img",{class:"loading-image",src:"images/loader.gif",alt:"Loading..."},null,-1);function c(e,t,n,c,l,d){const _=(0,i.g2)("SubHeader"),g=(0,i.g2)("BackToSettings"),u=(0,i.g2)("TrainingList"),p=(0,i.g2)("q-inner-loading");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(_,{name:"settings_model_training",label:e.$t("model_training")},null,8,["label"]),(0,i.Lk)("div",s,[(0,i.bF)(g,{back_to_rotue:"/settings/document",label:e.$t("pages.settings.document_types")},null,8,["label"])]),(0,i.Lk)("div",o,[(0,i.Lk)("div",a,[(0,i.bF)(u,{doc_type_key:e.doc_type_key,doc_type:e.doc_type,language_origin_list:e.language_origins,max_value:e.training_doc_limit,list_data:e.sample_files,total_exported:e.trained_docs_count.org_exported_documents,total_trained_by_org:e.trained_docs_count.org_trained_documents,total_trained:e.trained_docs_count.total_trained_documents},null,8,["doc_type_key","doc_type","language_origin_list","max_value","list_data","total_exported","total_trained_by_org","total_trained"])])]),(0,i.bF)(p,{showing:e.processing||e.language_origins_loading,class:"z-index-1"},{default:(0,i.k6)((()=>[r])),_:1},8,["showing"])],64)}var l=n(38734),d=n(1595),_=n(66693),g=n(78431),u=n(1659),p=n(68450),h=n(11470),m=n(64775),f=n(24622),y=n(25773),v=function(e,t,n,i){function s(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{c(i.next(e))}catch(t){o(t)}}function r(e){try{c(i["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):s(e.value).then(a,r)}c((i=i.apply(e,t||[])).next())}))};const b=(0,i.pM)({el:"#app",mixins:[f.A],components:{SubHeader:_.A,TrainingList:g.A,BackToSettings:y.A},mounted(){this.init(),document.addEventListener("refresh_sample_data",this.refreshSampleData),document.addEventListener("sample_file_delete",this.sampleFileDeleted)},unmounted:function(){document.removeEventListener("refresh_sample_data",this.refreshSampleData),document.removeEventListener("sample_file_delete",this.sampleFileDeleted)},methods:{init(){return v(this,void 0,void 0,(function*(){try{this.processing=!0,this.doc_type_key=String(this.$route.params.doc_key),this.doc_type=String(this.$route.params.doc_type),yield this.getLanguageIfEmpty(),yield this.fetchSamplesFiles(),yield this.fetchTrainedDocCount()}catch(e){}finally{this.processing=!1}}))},refreshSampleData(){this.fetchSamplesFiles(),this.fetchTrainedDocCount()},sampleFileDeleted(e){if(!e||!e.detail)return;let t=e.detail;for(let[n,i]of Object.entries(this.sample_files)){const e=i;e.id===t&&this.sample_files.splice(n,1)}this.fetchTrainedDocCount()},fetchSamplesFiles(){return v(this,void 0,void 0,(function*(){try{if((0,p.jw)(this.doc_type_key))return;const e={doc_type:this.doc_type_key},t=yield h.M8.getModelTrainingSamplesFiles(e);if(!t||t.hasOwnProperty("success")&&!1===t.success)throw t;let n=[];for(let[i,s]of Object.entries(t)){const e=s;let t=Object.assign({},e);n.push(t)}this.sample_files=n}catch(e){const t=m.t.getErrorMessage(e);this.showErrorToast(t),logError(e)}}))},fetchTrainedDocCount(){return v(this,void 0,void 0,(function*(){try{if((0,p.jw)(this.doc_type_key))return;const e={doc_type:this.doc_type_key},t=yield h.M8.getTrainedDocCount(e);if(!t||t.hasOwnProperty("success")&&!1===t.success)throw t;if(0==t.length)return;this.trained_docs_count=t[0]}catch(e){const t=m.t.getErrorMessage(e);this.showErrorToast(t),logError(e)}}))}},setup(){const e=(0,d.QJ)(),{getLanguageIfEmpty:t}=e,{language_origins:n,language_origins_loading:i}=(0,u.bP)(e);return{language_origins:n,language_origins_loading:i,getLanguageIfEmpty:t,doc_type_key:(0,l.KR)(""),doc_type:(0,l.KR)(""),training_doc_limit:0,sample_files:(0,l.KR)([]),processing:(0,l.KR)(!1),trained_docs_count:(0,l.KR)({org_exported_documents:0,org_sample_documents:0,org_trained_documents:0,total_trained_documents:0,doc_type:""})}}});var k=n(12807),w=n(39035),L=n(98582),E=n.n(L);const T=(0,k.A)(b,[["render",c]]),S=T;E()(b,"components",{QInnerLoading:w.A})}}]);