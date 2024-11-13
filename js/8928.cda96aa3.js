"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[8928],{88928:(e,t,o)=>{o.r(t),o.d(t,{default:()=>ie});var a=o(61758),l=o(58790),i=o(29104);const s=e=>((0,a.Qi)("data-v-528a9ad7"),e=e(),(0,a.jt)(),e),n={class:"main-buttons"},d={class:"col-12 q-pb-md workflow-height-limit"},r={class:"table-header-text"},c={class:"text-fields header-row"},u={class:"text-fields header-row"},h={class:"text-fields header-row",style:{"text-align":"right"}},m=["onClick"],p={class:"text-fields"},b={class:"text-fields"},g={class:"text-fields",style:{"text-align":"right"}},f={class:"text-red"},y={class:"text-weight-bold",style:{"text-align":"center","font-size":"large"}},k={class:"text-weight-bold"},_={class:"input-fields",style:{"margin-bottom":"10px"}},w=s((()=>(0,a.Lk)("img",{src:"settings/export.svg",width:"100","aria-hidden":"true"},null,-1))),T={style:{"margin-top":"10px"}},D={class:"text-white"};function F(e,t,o,s,F,v){const L=(0,a.g2)("SubHeader"),E=(0,a.g2)("q-icon"),x=(0,a.g2)("q-input"),A=(0,a.g2)("f-btn"),K=(0,a.g2)("BackToSettings"),C=(0,a.g2)("Loader"),q=(0,a.g2)("q-item-section"),Q=(0,a.g2)("q-item"),V=(0,a.g2)("q-separator"),$=(0,a.g2)("q-list"),R=(0,a.g2)("q-menu"),N=(0,a.g2)("q-btn"),S=(0,a.g2)("q-markup-table"),I=(0,a.g2)("q-toolbar-title"),M=(0,a.g2)("q-toolbar"),B=(0,a.g2)("q-select"),U=(0,a.g2)("q-card-section"),P=(0,a.g2)("q-card-actions"),j=(0,a.g2)("q-card"),z=(0,a.g2)("q-dialog"),H=(0,a.g2)("q-tooltip"),O=(0,a.g2)("q-file"),Z=(0,a.gN)("close-popup");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(L,{name:"settings_decision_trees",label:e.$t("decision_trees"),show_expiry_alert:!0,display_help_link:!0,onSearch:!1},null,8,["label"]),(0,a.bF)(K,null,{default:(0,a.k6)((()=>[(0,a.Lk)("div",n,[(0,a.bF)(x,{modelValue:e.searchBy,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.searchBy=t),e.filterTableData],dense:"",class:(0,l.C4)(0===e.searchBy.length?"search-in-active":"search-active"),autofocus:"",placeholder:e.$t("search_decision_tree"),outlined:""},{append:(0,a.k6)((()=>[(0,a.bF)(E,{flat:"",dense:"",name:"search",size:"24px",color:"primary"})])),_:1},8,["modelValue","class","placeholder","onUpdate:modelValue"]),(0,a.bF)(A,{icon:"add",label:e.$t("add_decision_tree"),class:"main-button",onClick:t[1]||(t[1]=t=>e.dialog=!0)},null,8,["label"]),(0,a.bF)(A,{icon:"file_upload",label:e.$t("import_decision_tree"),class:"main-button",onClick:t[2]||(t[2]=t=>e.uploadDialog=!0)},null,8,["label"])])])),_:1}),(0,a.bF)(C),(0,a.Lk)("div",d,[(0,a.bF)(S,{flat:"",class:"workflow-table-style",style:{margin:"20px","margin-top":"10px"}},{default:(0,a.k6)((()=>[(0,a.Lk)("thead",null,[(0,a.Lk)("tr",r,[(0,a.Lk)("th",c,(0,l.v_)(e.$t("name")),1),(0,a.Lk)("th",u,(0,l.v_)(e.$t("document_type")),1),(0,a.Lk)("th",h,(0,l.v_)(e.$t("actions")),1)])]),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.filteredData,((o,s)=>((0,a.uX)(),(0,a.CE)("tr",{class:"cursor-pointer workflow-name",key:s,onClick:t=>e.openTreeDesigner(o)},[(0,a.Lk)("td",p,[(0,a.Lk)("span",{style:{"font-size":"16px"},class:(0,l.C4)(1==o.enabled?"disabled-name":"enabled-name")},(0,l.v_)(o.name),3)]),(0,a.Lk)("td",b,[(0,a.Lk)("span",{style:{"font-size":"16px"},class:(0,l.C4)(1==o.enabled?"disabled-name":"enabled-name")},(0,l.v_)(o.doc_type),3)]),(0,a.Lk)("td",g,[(0,a.bF)(N,{flat:"",dense:"",round:"",onClick:t[3]||(t[3]=(0,i.D$)((()=>{}),["stop","prevent"])),icon:"more_horiz"},{default:(0,a.k6)((()=>[(0,a.bF)(R,{"auto-close":"","transition-show":"jump-down","transition-hide":"jump-up",anchor:"bottom middle",self:"top middle"},{default:(0,a.k6)((()=>[(0,a.bF)($,{dense:"",style:{"min-width":"100px"}},{default:(0,a.k6)((()=>[(0,a.bF)(Q,{clickable:""},{default:(0,a.k6)((()=>[(0,a.bF)(q,{onClick:t=>e.openEditTreeDialog(o)},{default:(0,a.k6)((()=>[(0,a.Lk)("span",null,(0,l.v_)(e.$t("edit")),1)])),_:2},1032,["onClick"])])),_:2},1024),(0,a.bF)(V,{inset:""}),(0,a.bF)(Q,{clickable:""},{default:(0,a.k6)((()=>[(0,a.bF)(q,{onClick:t=>{e.confirmDelete=!0,e.selectedRecordIndex=s,e.deleteTable(o.id)}},{default:(0,a.k6)((()=>[(0,a.Lk)("span",f,(0,l.v_)(e.$t("delete")),1)])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])],8,m)))),128))])])),_:1}),(0,a.bF)(z,{modelValue:e.dialog,"onUpdate:modelValue":t[6]||(t[6]=t=>e.dialog=t),onHide:e.resetFields,onEscapeKey:e.closeDialog},{default:(0,a.k6)((()=>[(0,a.bF)(j,{class:"card"},{default:(0,a.k6)((()=>[(0,a.bF)(M,{class:"bg-primary"},{default:(0,a.k6)((()=>[(0,a.bF)(I,{class:"text-white"},{default:(0,a.k6)((()=>[(0,a.Lk)("span",y,(0,l.v_)(e.isEditMode?e.$t("edit_tree"):e.$t("create_new_tree")),1)])),_:1}),(0,a.bo)((0,a.bF)(A,{icon:"close",onClick:e.closeDialog},null,8,["onClick"]),[[Z]])])),_:1}),(0,a.bF)(U,{class:"row"},{default:(0,a.k6)((()=>[(0,a.bF)(x,{modelValue:e.decisionTableName,"onUpdate:modelValue":t[4]||(t[4]=t=>e.decisionTableName=t),placeholder:"Decision Tree Name",dense:"",outlined:"",error:e.decisionTableNameError,"error-message":e.$t("field_required"),class:"col-12 card-padding"},null,8,["modelValue","error","error-message"]),(0,a.bF)(B,{modelValue:e.selectedDocumentKey,"onUpdate:modelValue":t[5]||(t[5]=t=>e.selectedDocumentKey=t),options:e.documentList,label:"Document Type",dense:"",outlined:"",class:"col-12 card-padding",error:e.documentKeyError,"error-message":e.$t("field_required"),"menu-anchor":"bottom left","menu-self":"top left","transition-show":"jump-down","transition-hide":"jump-up"},null,8,["modelValue","options","error","error-message"])])),_:1}),(0,a.bF)(P,{align:"right"},{default:(0,a.k6)((()=>[(0,a.bF)(A,{flat:"",label:e.$t("cancel"),onClick:e.closeDialog,appearance:"cancel"},null,8,["label","onClick"]),(0,a.bF)(A,{flat:"",label:e.$t("save"),onClick:e.validateAndSubmit,class:"q-mr-sm"},null,8,["label","onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onHide","onEscapeKey"]),(0,a.bF)(z,{modelValue:e.uploadDialog,"onUpdate:modelValue":t[8]||(t[8]=t=>e.uploadDialog=t)},{default:(0,a.k6)((()=>[(0,a.bF)(j,{style:{width:"20vw",height:"30vh"}},{default:(0,a.k6)((()=>[(0,a.bF)(M,{class:"text-white secondary-toolbar"},{default:(0,a.k6)((()=>[(0,a.bF)(I,null,{default:(0,a.k6)((()=>[(0,a.Lk)("span",k,(0,l.v_)(e.$t("import_decision_tree")),1)])),_:1}),(0,a.bo)((0,a.bF)(N,{flat:"",round:"",dense:"",icon:"close"},null,512),[[Z]])])),_:1}),(0,a.bF)(U,null,{default:(0,a.k6)((()=>[(0,a.Lk)("div",_,[w,(0,a.Lk)("div",T,(0,l.v_)(e.$t("import_field_decision_tree")),1)]),(0,a.bF)(O,{color:"white","data-cy":"upload-multiple-docs","label-color":"white",outlined:"","onUpdate:modelValue":[e.uploadFile,t[7]||(t[7]=t=>e.uploadedFile=t)],modelValue:e.uploadedFile,label:e.$t("import_decision_tree"),flat:"",dense:"",round:""},{prepend:(0,a.k6)((()=>[(0,a.bF)(E,{name:"attachment"})])),file:(0,a.k6)((({index:e,file:t})=>[(0,a.Lk)("div",D,(0,l.v_)(t.name),1),(0,a.bF)(H,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,l.v_)(t.name),1)])),_:2},1024),(0,a.Q3)("",!0)])),_:1},8,["onUpdate:modelValue","modelValue","label"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])}var v=o(38734),L=o(11470),E=o(24622),x=o(18505),A=o(64775),K=o(66693),C=o(8420),q=o(25773),Q=function(e,t,o,a){function l(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function s(e){try{d(a.next(e))}catch(t){i(t)}}function n(e){try{d(a["throw"](e))}catch(t){i(t)}}function d(e){e.done?o(e.value):l(e.value).then(s,n)}d((a=a.apply(e,t||[])).next())}))};const V=(0,a.pM)({name:"decisionTree",components:{SubHeader:K.A,Loader:C.A,BackToSettings:q.A},mixins:[E.A,x.A],data(){return{workflowId:(0,v.KR)(""),searchBy:(0,v.KR)(""),tableData:(0,v.KR)({}),filteredData:(0,v.KR)({}),confirmDelete:(0,v.KR)(!1),selectedRecordIndex:(0,v.KR)(),version:(0,v.KR)(""),dialog:(0,v.KR)(!1),decisionTableNameError:!1,documentKeyError:!1}},methods:{filterTableData(){this.searchBy?this.filteredData=this.tableData.filter((e=>e.name.toLowerCase().includes(this.searchBy.toLowerCase()))):this.filteredData=this.tableData},addDecisionTable(){return Q(this,void 0,void 0,(function*(){try{let e=new FormData;e.append("name",this.decisionTableName),e.append("doc_type",this.selectedDocumentKey),e.append("data",this.treeData),e.append("tree_id",this.selectedTreeId),this.showLoading();const t=yield L.oZ.saveDecisionTreeRecord(e);if(t.hasOwnProperty("success")&&!1===t.success)throw t;this.init(),this.showSuccessToast(t.message)}catch(e){const t=A.t.getErrorMessage(e);this.showErrorToast(t),logError(e)}finally{this.hideLoading()}}))},uploadFile(e){return Q(this,void 0,void 0,(function*(){try{this.showLoading(),this.uploadDialog=!1;let t=new FormData;t.append("file",e);const o=yield L.oZ.importDecisionTree(t);if(o.hasOwnProperty("success")&&!1===o.success)throw o;this.showSuccessToast(o.message),this.init()}catch(t){const e=A.t.getErrorMessage(t);this.showErrorToast(e),logError(t)}finally{this.hideLoading()}}))},deleteTable(e){return Q(this,void 0,void 0,(function*(){try{this.showLoading();const t=yield L.oZ.deleteTable(e);if(t.hasOwnProperty("success")&&!1===t.success)throw t;this.showSuccessToast(t.message),this.init()}catch(t){const e=A.t.getErrorMessage(t);this.showErrorToast(e),logError(t)}finally{this.hideLoading()}}))},init(e=!1){return Q(this,void 0,void 0,(function*(){try{this.showLoading();const t=yield L.oZ.getAllDecisionTrees(e);if(!t.hasOwnProperty("success")||!1===t.success)throw t;this.tableData=t.data,this.filteredData=this.tableData}catch(t){const e=A.t.getErrorMessage(t);this.showErrorToast(e),logError(t)}finally{this.hideLoading()}}))},openTreeDesigner(e){this.$router.push("/settings/decisionTree_designer/"+e.id)},loadDocTypes(){return Q(this,void 0,void 0,(function*(){try{this.showLoading();const e=yield L.p5.fetchDocTypes();if(this.documentTypes=e.data,!Array.isArray(this.documentTypes))throw new Error("documentTypes is not an array");let t=[];for(let o of this.documentTypes)o&&o.document_key&&t.push(o.document_key);this.documentList=t}catch(e){this.showErrorToast(e)}finally{this.hideLoading()}}))},selectDocument(e){this.selectedDocumentKey=e},validateAndSubmit(){this.decisionTableNameError=!this.decisionTableName,this.documentKeyError=!this.selectedDocumentKey,this.decisionTableNameError||this.documentKeyError||(this.addDecisionTable(),this.closeDialog())},resetFields(){this.decisionTableName="",this.selectedDocumentKey="",this.decisionTableNameError=!1,this.documentKeyError=!1,this.isEditMode=!1,this.selectedTreeId=""},openEditTreeDialog(e){this.isEditMode=!0,this.selectedTreeId=e.id,this.decisionTableName=e.name,this.selectedDocumentKey=e.doc_type,this.dialog=!0},closeDialog(){this.dialog=!1,this.resetFields()}},mounted(){this.init(!0),this.loadDocTypes(),this.filterTableData()},setup(){const e=(0,v.KR)(""),t=Promise;return{decisionTableName:e,documentTypes:t,documentList:[],selectedDocumentKey:(0,v.KR)(""),selectedDocumentTypeFields:{},uploadedFile:(0,v.KR)(),uploadDialog:(0,v.KR)(!1),isEditMode:(0,v.KR)(!1),selectedTreeId:(0,v.KR)("")}}});var $=o(12807),R=o(67837),N=o(50492),S=o(857),I=o(56384),M=o(84436),B=o(53999),U=o(90124),P=o(25173),j=o(10386),z=o(82156),H=o(23316),O=o(36914),Z=o(39150),X=o(44189),W=o(94940),G=o(62669),J=o(99980),Y=o(97410),ee=o(67156),te=o(88672),oe=o(98582),ae=o.n(oe);const le=(0,$.A)(V,[["render",F],["__scopeId","data-v-528a9ad7"]]),ie=le;ae()(V,"components",{QInput:R.A,QIcon:N.A,QMarkupTable:S.A,QBtn:I.A,QMenu:M.A,QList:B.A,QItem:U.A,QItemSection:P.A,QSeparator:j.A,QDialog:z.A,QCard:H.A,QToolbar:O.A,QToolbarTitle:Z.A,QCardSection:X.A,QSelect:W.A,QCardActions:G.A,QFile:J.A,QTooltip:Y.A,QField:ee.A}),ae()(V,"directives",{ClosePopup:te.A})}}]);