"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[6504],{36504:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ae});var s=a(61758),o=a(58790);const i={class:"row"},l={class:"col-sm-12 col-md-5 col-lg-5"},r={class:"col-sm-12 col-md-7 col-lg-7"},n={class:"col-auto q-pt-sm"},d={key:0,class:"row highlighted-back q-pl-md q-pr-md q-pb-md"},c={key:1,class:"row approval-conatiner"},u={class:"q-pl-md full-width"},h={class:"back-white q-pa-sm",style:{"border-radius":"5px"}},p={key:0,class:"full-width"},m={key:1,class:"full-width white-inputs full-height"},g={key:0,class:"row"},b={class:"col-sm-12 col-md-12 col-lg-12 secondary-c-text text-h6 q-pt-sm q-pb-sm text-weight-bold"},_={class:"full-width"},v={class:"full-width q-pl-sm q-pr-sm"},f={class:"invisible absolute position-absolute"},y={class:"row"},w={class:"q-mr-auto"},k={class:"page-numbers"},L={class:"panel-middle mobile-hide"},F={class:"panel-right mobile-hide"},x={class:"doc-name"},A={class:"full-width full-height",id:"image_container",style:{position:"relative"}},C={class:"footer-filename"},E={class:"footer-status-message"},I={class:"cursor-pointer"},T={class:"footer-status-message q-px-sm"};function q(e,t,a,q,R,D){const S=(0,s.g2)("BackToSettings"),V=(0,s.g2)("q-btn"),$=(0,s.g2)("ErrorDocumentView"),K=(0,s.g2)("JsonViewer"),Q=(0,s.g2)("q-input"),P=(0,s.g2)("q-separator"),z=(0,s.g2)("q-tab"),B=(0,s.g2)("q-tabs"),U=(0,s.g2)("GenericReadOnlyTable"),X=(0,s.g2)("q-tab-panel"),J=(0,s.g2)("q-tab-panels"),W=(0,s.g2)("q-tooltip"),M=(0,s.g2)("q-icon"),O=(0,s.g2)("AnnotationView"),j=(0,s.g2)("q-splitter"),H=(0,s.g2)("Loader"),N=(0,s.g2)("q-space"),G=(0,s.g2)("q-toolbar"),Y=(0,s.g2)("q-footer");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",i,[(0,s.Lk)("div",l,[(0,s.bF)(S,{back_to_rotue:"/ready_for_approval_v3/"+e.docId,label:"back"},null,8,["back_to_rotue"])]),(0,s.Lk)("div",r,[(0,s.Lk)("div",n,[(0,s.bF)(V,{outline:"",color:"primary",label:e.viewExportJson?e.$t("view_summery"):e.$t("view_export_json"),class:"q-mr-lg float-right",onClick:t[0]||(t[0]=t=>e.viewExportJson=!e.viewExportJson)},null,8,["label"])])])]),e.error?((0,s.uX)(),(0,s.CE)("div",d,[(0,s.bF)($)])):((0,s.uX)(),(0,s.CE)("div",c,[(0,s.Lk)("div",u,[(0,s.bF)(j,{modelValue:e.splitterModel,"onUpdate:modelValue":[t[4]||(t[4]=t=>e.splitterModel=t),t[5]||(t[5]=t=>e.windowResize())],class:"approval-content-area"},{before:(0,s.k6)((()=>[(0,s.Lk)("div",h,[e.viewExportJson?((0,s.uX)(),(0,s.CE)("div",p,[(0,s.bF)(K,{jsonData:e.exportJson},null,8,["jsonData"])])):((0,s.uX)(),(0,s.CE)("div",m,[e.layoutSettings&&Object.keys(e.layoutSettings).length>0?((0,s.uX)(),(0,s.CE)("div",g,[(0,s.Lk)("div",b,(0,o.v_)(e.$t("summary")),1),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.summeryLayout,(t=>((0,s.uX)(),(0,s.CE)("div",{key:t["name"],class:"col-sm-6 col-md-6 col-lg-6 q-pa-sm input-text-28px"},[(0,s.eW)((0,o.v_)(e.getLabelForFormBuilder(e.layoutSettings[t.name],"form_builder."))+" ",1),(0,s.bF)(Q,{outlined:"",disable:!0,dense:"",modelValue:t.formatted_value,"onUpdate:modelValue":e=>t.formatted_value=e},null,8,["modelValue","onUpdate:modelValue"])])))),128))])):(0,s.Q3)("",!0),(0,s.bF)(P,{class:"q-mt-lg q-mb-sm"}),(0,s.Lk)("div",_,[(0,s.bF)(B,{modelValue:e.tableTabs,"onUpdate:modelValue":t[1]||(t[1]=t=>e.tableTabs=t),class:"text-weight-bold align-tabs-left"},{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.tablesLayout,((t,a)=>((0,s.uX)(),(0,s.Wv)(z,{draggable:"false",class:"text-left po-tab",key:a,name:a,"data-name":a,label:e.$t(a),tabindex:"0"},null,8,["name","data-name","label"])))),128))])),_:1},8,["modelValue"]),(0,s.bF)(P),(0,s.bF)(J,{modelValue:e.tableTabs,"onUpdate:modelValue":t[2]||(t[2]=t=>e.tableTabs=t),animated:""},{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.tablesLayout,((e,t)=>((0,s.uX)(),(0,s.Wv)(X,{key:t,name:t},{default:(0,s.k6)((()=>[(0,s.bF)(U,{tableData:e},null,8,["tableData"])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])]))])])),after:(0,s.k6)((()=>[(0,s.Lk)("div",v,[(0,s.Lk)("div",f,[(0,s.Lk)("div",y,[(0,s.Lk)("div",w,[(0,s.bF)(M,{class:"up-arrow cursor-pointer",onClick:e.prevImage,name:"expand_less",size:"sm"},{default:(0,s.k6)((()=>[(0,s.bF)(W,null,{default:(0,s.k6)((()=>[(0,s.eW)((0,o.v_)(e.$t("previous")),1)])),_:1})])),_:1},8,["onClick"]),(0,s.bF)(M,{class:"down-arrow cursor-pointer",onClick:e.nextImage,name:"expand_more",size:"sm"},{default:(0,s.k6)((()=>[(0,s.bF)(W,null,{default:(0,s.k6)((()=>[(0,s.eW)((0,o.v_)(e.$t("next")),1)])),_:1})])),_:1},8,["onClick"]),(0,s.Lk)("span",k,(0,o.v_)(e.currentPage())+"/"+(0,o.v_)(e.images.length)+" "+(0,o.v_)(e.$t("page_number_text")),1)]),(0,s.Lk)("div",L,(0,o.v_)(e.$t("summary")),1),(0,s.Lk)("div",F,[(0,s.Lk)("span",{class:"cursor-pointer q-mr-md text-uppercase",onClick:t[3]||(t[3]=(...t)=>e.downloadFile&&e.downloadFile(...t))},(0,o.v_)(e.$t("download")),1),(0,s.Lk)("span",x,(0,o.v_)(e.record.filename),1)])])]),((0,s.uX)(),(0,s.CE)("div",{class:"full-width",key:e.refreshAnnotationView},[(0,s.Lk)("div",A,[(0,s.bF)(O,{ref:"child_comp",enableEditing:e.enable_editing,cropUrl:e.image+"?"+e.tokenQueryParam,width:e.imageWidth,screenmode:e.screenmode,selectFont:e.selectFont,selectFontSize:e.selectFontSize,selectColor:e.selectColor},null,8,["enableEditing","cropUrl","width","screenmode","selectFont","selectFontSize","selectColor"])])]))])])),_:1},8,["modelValue"])])])),(0,s.bF)(H),(0,s.bF)(Y,{class:"validation-status-bar back-white"},{default:(0,s.k6)((()=>[(0,s.bF)(G,{class:"row justify-start opened-right-padding"},{default:(0,s.k6)((()=>[(0,s.Lk)("span",C,(0,o.v_)(e.record.filename),1),(0,s.bF)(V,{size:"md",flat:"",dense:"",class:"q-ml-xs",onClick:e.downloadFile},{default:(0,s.k6)((()=>[(0,s.bF)(M,{name:"download",style:{color:"#8a8a8a"}})])),_:1},8,["onClick"]),(0,s.bF)(P,{vertical:"",class:"q-mx-md"}),(0,s.Lk)("span",E,(0,o.v_)(e.$t("summary")),1),(0,s.bF)(P,{vertical:"",class:"q-mx-md"}),(0,s.Lk)("span",I,(0,o.v_)(e.pending_approval_doc_count)+" "+(0,o.v_)(e.$t("invoices_for_release")),1),(0,s.bF)(P,{vertical:"",class:"q-mx-md"}),(0,s.bF)(N),(0,s.bF)(P,{vertical:"",class:"q-mx-xs"}),(0,s.bF)(V,{disable:1==e.page,icon:"keyboard_arrow_up",flat:"",class:"validation-view-page-button icon-grey",onClick:e.prevImage},null,8,["disable","onClick"]),(0,s.Lk)("span",T,(0,o.v_)(e.currentPage())+"/"+(0,o.v_)(e.images.length),1),(0,s.bF)(V,{disable:e.page==e.images.length,icon:"keyboard_arrow_down",flat:"",class:"validation-view-page-button icon-grey",onClick:e.nextImage},null,8,["disable","onClick"])])),_:1})])),_:1})],64)}var R=a(82303),D=a(14907),S=a(1659),V=a(24622),$=a(38734),K=a(46162),Q=a(96056),P=a(89156),z=a(18505),B=a(76956),U=a(23018),X=a(11470),J=a(25891),W=a(12566),M=a(96075),O=a(85487);const j={class:"back-white"};function H(e,t,a,i,l,r){const n=(0,s.g2)("q-markup-table"),d=(0,s.g2)("q-table");return e.tableData&&0!=e.tableData.length?((0,s.uX)(),(0,s.Wv)(d,{key:1,rows:e.tableRows,columns:e.tableColumns,"hide-bottom":"","rows-per-page-options":[0],style:{overflow:"auto",height:"auto","max-height":"500px"},class:"text-uppercase sticky-header transparent-header"},null,8,["rows","columns"])):((0,s.uX)(),(0,s.Wv)(n,{key:0,class:"full-width"},{default:(0,s.k6)((()=>[(0,s.Lk)("thead",null,[(0,s.Lk)("tr",j,[(0,s.Lk)("th",null,(0,o.v_)(e.$t("no_data_found")),1)])])])),_:1}))}const N=(0,s.pM)({el:"#app",mixins:[],props:{tableData:{type:{},default:[]}},components:{},data(){return{tableColumns:(0,$.KR)([]),tableRows:(0,$.KR)([])}},mounted:function(){this.prepareTableData()},methods:{prepareTableData(){this.tableData&&0!=this.tableData.length&&(this.prepareTableColumns(),this.prepareTableRows())},prepareTableColumns(){const e=this.tableData[0];for(let t of Object.keys(e))t.startsWith("_")||this.tableColumns.push({name:t,label:this.$t(t),field:t,align:"left",sortable:!1})},prepareTableRows(){for(let e of this.tableData)this.tableRows.push(e)}},setup(){return{}}});var G=a(12807),Y=a(857),Z=a(42315),ee=a(98582),te=a.n(ee);const ae=(0,G.A)(N,[["render",H]]),se=ae;te()(N,"components",{QMarkupTable:Y.A,QTable:Z.A});var oe=a(25773),ie=a(8903),le=a(96756),re=a(83319),ne=function(e,t,a,s){function o(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,i){function l(e){try{n(s.next(e))}catch(t){i(t)}}function r(e){try{n(s["throw"](e))}catch(t){i(t)}}function n(e){e.done?a(e.value):o(e.value).then(l,r)}n((s=s.apply(e,t||[])).next())}))};const de=document.querySelector.bind(document),ce=(0,s.pM)({el:"#app",mixins:[z.A,V.A,Q.A,J.A],components:{Loader:P.A,JsonViewer:U.A,AnnotationView:le.A,BackToSettings:oe.A,ErrorDocumentView:W.A,GenericReadOnlyTable:se},data(){return{tableTabs:(0,$.KR)(""),summeryLayout:(0,$.KR)({}),tablesLayout:(0,$.KR)({}),layout:(0,$.KR)({}),docId:"",default_stamp:ie.EO,imageWidth:0,imageHeight:0,splitterModel:(0,$.KR)(50),enable_editing:(0,$.KR)(!1),viewExportJson:(0,$.KR)(!1),refreshAnnotationView:(0,$.KR)(0),exportJson:(0,$.KR)([]),layoutSettings:(0,$.KR)({})}},beforeRouteLeave:function(e,t,a){this.restoreBeforeLeave(),a()},mounted:function(){return ne(this,void 0,void 0,(function*(){let e=this.$route.params.id;this.selectedStamp=this.default_stamp,this.getDocAnnotations(e),yield this.getDocTypeSettings(),window.addEventListener("resize",this.windowResize),document.body.addEventListener("click",this.mouseClicked,!0),window.suc=this,this.init();for(let t=1;t<=80;t++)this.fontSizes.push(t.toString()+"pt")}))},unmounted:function(){window.removeEventListener("resize",this.windowResize)},methods:{init(){return ne(this,void 0,void 0,(function*(){this.$route.params.id||this.$router.push("/dashboard"),this.docId=this.$route.params.id,yield this.getInvoiceDataByDocId(this.docId),this.getUpdatedFieldSettings(),this.renderPendingRecordsCountView(),this.renderNextPrevLinkBtns(),yield this.getSummeryData(),B.B2.includes(this.record.status)&&(this.isReadOnly=!0),this.handleImageBaseURL(),this.image=this.baseUrl+"/"+(0,M.v)(this.record.images[0].path),this.images=(0,M.m)(this.record.images),this.windowResize(),this.loadExportJson()}))},getInvoiceDataByDocId(e){return ne(this,void 0,void 0,(function*(){try{if(this.showLoading(),yield this.getDocumentById(e),!this.record.doc_id)return void this.showErrorToast(this.$t("pages.messages.INVALID_DOCUMENT"))}catch(t){return this.showErrorToast(this.$t("pages.messages.error_internal_occur")),void logError(t)}finally{this.hideLoading()}}))},getUpdatedFieldSettings(){this.layoutSettings={};let e=this.record.layout.groups;e.forEach(((e,t)=>{e.rows.forEach(((e,t)=>{e.forEach(((e,t)=>{let a=e.field_name;this.layoutSettings[a]=e}))}))}))},goHelp(){window.open("https://docs.cloudintegration.eu/")},windowResize(){setTimeout((()=>{let e=de("#image_container");this.imageWidth=e.offsetWidth,this.imageHeight=e.offsetHeight,this.refreshAnnotationView++}),20)},currentPage(){return this.page},prevImage(){let e=this.page-1,t=this.getImagePath(e);this.updateImage(e,t)},nextImage(){let e=this.page+1,t=this.getImagePath(e);this.updateImage(e,t)},getImagePath(e){let t="";for(const[a,s]of Object.entries(this.images)){let a=s;a.pageNumber===e&&(t=a.path)}return t},updateImage(e,t){t&&""!==t&&(this.image=this.baseUrl+"/"+(0,M.v)(t),this.page=e)},handleImageBaseURL(){this.record.images[0]&&this.record.images[0].path.match(/doc2/g)&&(this.baseUrl=K.VA)},downloadFile(){let e=K.VA+"/resource/document/"+this.docId+"/"+this.docId+".pdf?"+this.tokenQueryParam;if(e){var t=document.createElement("a");t.download=this.record.filename,t.href=e,document.body.appendChild(t),t.click(),document.body.removeChild(t)}},routeToListPendingApproval(){this.removeDashboardFilters(),this.$router.push("/dashboard")},renderPendingRecordsCountView(){return ne(this,void 0,void 0,(function*(){try{let e,t="?filter=current-year&skip=0&limit=100&status="+this.filter_status,a=yield(0,K.L3)();if(e=yield R.A.get((0,O.MV)(K.FH.get_dashboard_data+t),{headers:{Authorization:a}}),!e.data.documents)throw{message:"no pending documents from server"};this.pending_approval_doc_count=e.data.documents.length,this.pending_approval_doc_count<0&&(this.pending_approval_doc_count=0)}catch(e){logInfo("something went wrong while loading document logs"),logError(e)}finally{this.hideLoading()}}))},renderNextPrevLinkBtns(){return ne(this,void 0,void 0,(function*(){try{let e,t=yield(0,K.L3)();if(e=yield R.A.get((0,O.MV)(K.FH.get_next_document+this.docId+"?doc_type="+this.record.doc_type+"&status="+this.filter_status+"&sort_attr=created_on"),{headers:{Authorization:t}}),!1===e.data.success)throw{message:"cannot get response related to next or prev record"};e.data.has_next&&e.data.next_id&&(this.next_record=e.data.next_id),e.data.has_previous&&e.data.previous_id&&(this.prev_record=e.data.previous_id)}catch(e){logInfo("something went wrong while loading document logs"),logError(e)}finally{this.hideLoading()}}))},routeTo(e){let t="ready-for-approval";this.second_approval&&(t="ready-for-second-approval"),"prev"===e&&this.prev_record&&this.$router.push({path:"/"+t+"/"+this.prev_record,replace:!0}),"next"===e&&this.next_record&&this.$router.push("/"+t+"/"+this.next_record)},updateValue(e,t){"font"==e?this.selectFont=t:"color"==e?this.selectColor=t:"size"==e&&(this.selectFontSize=t)},stampAddClicked(){this.$refs.child_comp.addTemplateAnnotation(this.selectedStamp)},getSummeryData(){return ne(this,void 0,void 0,(function*(){let e;try{if(this.showLoading(),e=yield X.M8.documentDetailApiService(this.docId),!e.success)throw{message:e.message};this.layout=e.data,e.data.invoice_data&&(this.summeryLayout=this.layout.fields,this.layout.invoice_data["receipt_lines"]&&this.layout.invoice_data["receipt_lines"].length>0&&(this.tablesLayout["receipt_lines"]=this.layout.invoice_data["receipt_lines"]),this.layout.invoice_data["line_charges"]&&this.layout.invoice_data["line_charges"].length>0&&(this.tablesLayout["line_charges"]=this.layout.invoice_data["line_charges"])),this.layout.debit_note_data&&(this.layout.debit_note_data["receipt_lines"]&&this.layout.debit_note_data["receipt_lines"].length>0&&(this.tablesLayout["debit_receipt_lines"]=this.layout.debit_note_data["receipt_lines"]),this.layout.debit_note_data["cost_lines"]&&this.layout.debit_note_data["cost_lines"].length>0&&(this.tablesLayout["cost_lines"]=this.layout.debit_note_data["cost_lines"])),Object.keys(this.tablesLayout).length>0&&(this.tableTabs=Object.keys(this.tablesLayout)[0])}catch(t){return this.showErrorToast(this.$t("pages.messages.error_internal_occur")),void logError(t)}finally{this.hideLoading()}}))},restoreBeforeLeave(){this.record={},this.error=!1,this.error_message="",this.doc_status="",this.page=1},loadExportJson(){return ne(this,void 0,void 0,(function*(){try{let e=yield X.M8.getInforExportApiJson(this.docId);if(!e||!e.success)throw{message:e.message};this.exportJson=e.data}catch(e){return this.showErrorToast(this.$t("pages.messages.error_internal_occur")),void logError(e)}}))}},setup(){(0,D.A)();let e=[];const t=(0,re.q3)(),{getDocumentById:a,getDocAnnotations:s,saveDocument:o}=t,{record:i,doc_status:l,error:r,error_message:n,page:d}=(0,S.bP)(t),c=(0,re.fX)(),{removeSavedFilters:u}=c,h=(0,re._6)(),{tokenQueryParam:p}=(0,S.bP)(h);h.getTokenQueryParam();const m=(0,re.wt)(),{getDocTypeSettings:g}=m;return{getDocumentById:a,getDocAnnotations:s,getDocTypeSettings:g,removeDashboardFilters:u,tokenQueryParam:p,doc_status:l,page:d,error:r,error_message:n,record:i,image:"",images:e,baseUrl:K.VA,isReadOnly:!1,pending_approval_doc_count:(0,$.KR)(0),next_record:(0,$.KR)(""),prev_record:(0,$.KR)(""),selectColor:(0,$.KR)("#000000"),selectFont:(0,$.KR)("Helvetica"),selectFontSize:(0,$.KR)(20),fontSizes:[],selectedStamp:(0,$.KR)(""),screenmode:(0,$.KR)("annotate")}}});var ue=a(56384),he=a(98072),pe=a(67837),me=a(10386),ge=a(42980),be=a(10327),_e=a(39041),ve=a(71746),fe=a(50492),ye=a(97410),we=a(57092),ke=a(36914),Le=a(93676),Fe=a(67156);const xe=(0,G.A)(ce,[["render",q],["__scopeId","data-v-c5db4ba0"]]),Ae=xe;te()(ce,"components",{QBtn:ue.A,QSplitter:he.A,QInput:pe.A,QSeparator:me.A,QTabs:ge.A,QTab:be.A,QTabPanels:_e.A,QTabPanel:ve.A,QIcon:fe.A,QTooltip:ye.A,QFooter:we.A,QToolbar:ke.A,QSpace:Le.A,QField:Fe.A,QTable:Z.A})}}]);