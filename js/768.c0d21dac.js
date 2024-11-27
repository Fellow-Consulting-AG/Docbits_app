"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[768],{70768:(e,t,l)=>{l.r(t),l.d(t,{default:()=>ie});var o=l(61758),a=l(58790),i=l(29104);const s=e=>((0,o.Qi)("data-v-9174b6a8"),e=e(),(0,o.jt)(),e),n={class:"main-buttons"},d={class:"col-12 q-pb-md workflow-height-limit"},r={class:"table-header-text"},c={class:"text-fields header-row"},u={class:"text-fields header-row"},h={class:"text-fields header-row",style:{"text-align":"right"}},p=["onClick"],m={class:"text-fields"},b={class:"text-fields"},g={class:"text-fields",style:{"text-align":"right"}},f={class:"text-red"},k={class:"text-weight-bold",style:{"text-align":"center","font-size":"large"}},y={class:"text-weight-bold"},_={class:"input-fields",style:{"margin-bottom":"10px"}},w=s((()=>(0,o.Lk)("img",{src:"settings/export.svg",width:"100","aria-hidden":"true"},null,-1))),T={style:{"margin-top":"10px"}},D={class:"text-white"};function v(e,t,l,s,v,F){const L=(0,o.g2)("SubHeader"),E=(0,o.g2)("q-icon"),x=(0,o.g2)("q-input"),A=(0,o.g2)("f-btn"),C=(0,o.g2)("BackToSettings"),K=(0,o.g2)("Loader"),q=(0,o.g2)("q-item-section"),Q=(0,o.g2)("q-item"),V=(0,o.g2)("q-separator"),$=(0,o.g2)("q-list"),R=(0,o.g2)("q-menu"),N=(0,o.g2)("q-btn"),S=(0,o.g2)("q-markup-table"),I=(0,o.g2)("q-toolbar-title"),M=(0,o.g2)("q-toolbar"),B=(0,o.g2)("q-select"),U=(0,o.g2)("q-card-section"),P=(0,o.g2)("q-card-actions"),j=(0,o.g2)("q-card"),z=(0,o.g2)("q-dialog"),H=(0,o.g2)("q-tooltip"),O=(0,o.g2)("q-file"),Z=(0,o.gN)("close-popup");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(L,{name:"settings_decision_trees",label:e.$t("decision_trees"),show_expiry_alert:!0,display_help_link:!0,onSearch:!1},null,8,["label"]),(0,o.bF)(C,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",n,[(0,o.bF)(x,{modelValue:e.searchBy,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.searchBy=t),e.filterTableData],dense:"",class:(0,a.C4)(0===e.searchBy.length?"search-in-active":"search-active"),autofocus:"",placeholder:e.$t("search_decision_tree"),outlined:""},{append:(0,o.k6)((()=>[(0,o.bF)(E,{flat:"",dense:"",name:"search",size:"24px",color:"primary"})])),_:1},8,["modelValue","class","placeholder","onUpdate:modelValue"]),(0,o.bF)(A,{icon:"add",label:e.$t("add_decision_tree"),class:"main-button",onClick:t[1]||(t[1]=t=>e.dialog=!0)},null,8,["label"]),(0,o.bF)(A,{icon:"file_upload",label:e.$t("import_decision_tree"),class:"main-button",onClick:t[2]||(t[2]=t=>e.uploadDialog=!0)},null,8,["label"])])])),_:1}),(0,o.bF)(K),(0,o.Lk)("div",d,[(0,o.bF)(S,{flat:"",class:"workflow-table-style",style:{margin:"20px","margin-top":"10px"}},{default:(0,o.k6)((()=>[(0,o.Lk)("thead",null,[(0,o.Lk)("tr",r,[(0,o.Lk)("th",c,(0,a.v_)(e.$t("name")),1),(0,o.Lk)("th",u,(0,a.v_)(e.$t("document_type")),1),(0,o.Lk)("th",h,(0,a.v_)(e.$t("actions")),1)])]),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.filteredData,((l,s)=>((0,o.uX)(),(0,o.CE)("tr",{class:"cursor-pointer workflow-name",key:s,onClick:t=>e.openTreeDesigner(l)},[(0,o.Lk)("td",m,[(0,o.Lk)("span",{style:{"font-size":"16px"},class:(0,a.C4)(1==l.enabled?"disabled-name":"enabled-name")},(0,a.v_)(l.name),3)]),(0,o.Lk)("td",b,[(0,o.Lk)("span",{style:{"font-size":"16px"},class:(0,a.C4)(1==l.enabled?"disabled-name":"enabled-name")},(0,a.v_)(l.doc_type),3)]),(0,o.Lk)("td",g,[(0,o.bF)(N,{flat:"",dense:"",round:"",onClick:t[3]||(t[3]=(0,i.D$)((()=>{}),["stop","prevent"])),icon:"more_horiz"},{default:(0,o.k6)((()=>[(0,o.bF)(R,{"auto-close":"","transition-show":"jump-down","transition-hide":"jump-up",anchor:"bottom middle",self:"top middle"},{default:(0,o.k6)((()=>[(0,o.bF)($,{dense:"",style:{"min-width":"100px"}},{default:(0,o.k6)((()=>[(0,o.bF)(Q,{clickable:""},{default:(0,o.k6)((()=>[(0,o.bF)(q,{onClick:t=>e.openEditTreeDialog(l)},{default:(0,o.k6)((()=>[(0,o.Lk)("span",null,(0,a.v_)(e.$t("edit")),1)])),_:2},1032,["onClick"])])),_:2},1024),(0,o.bF)(V,{inset:""}),(0,o.bF)(Q,{clickable:""},{default:(0,o.k6)((()=>[(0,o.bF)(q,{onClick:t=>{e.confirmDelete=!0,e.selectedRecordIndex=s,e.deleteTable(l.id)}},{default:(0,o.k6)((()=>[(0,o.Lk)("span",f,(0,a.v_)(e.$t("delete")),1)])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])],8,p)))),128))])])),_:1}),(0,o.bF)(z,{modelValue:e.dialog,"onUpdate:modelValue":t[6]||(t[6]=t=>e.dialog=t),onHide:e.resetFields,onEscapeKey:e.closeDialog},{default:(0,o.k6)((()=>[(0,o.bF)(j,{class:"card"},{default:(0,o.k6)((()=>[(0,o.bF)(M,{class:"bg-primary"},{default:(0,o.k6)((()=>[(0,o.bF)(I,{class:"text-white"},{default:(0,o.k6)((()=>[(0,o.Lk)("span",k,(0,a.v_)(e.isEditMode?e.$t("edit_tree"):e.$t("create_new_tree")),1)])),_:1}),(0,o.bo)((0,o.bF)(A,{icon:"close",onClick:e.closeDialog},null,8,["onClick"]),[[Z]])])),_:1}),(0,o.bF)(U,{class:"row"},{default:(0,o.k6)((()=>[(0,o.bF)(x,{modelValue:e.decisionTableName,"onUpdate:modelValue":t[4]||(t[4]=t=>e.decisionTableName=t),placeholder:"Decision Tree Name",dense:"",outlined:"",error:e.decisionTableNameError,"error-message":e.$t("field_required"),class:"col-12 card-padding"},null,8,["modelValue","error","error-message"]),(0,o.bF)(B,{modelValue:e.selectedDocumentKey,"onUpdate:modelValue":t[5]||(t[5]=t=>e.selectedDocumentKey=t),options:e.docTypes,"option-label":"title","option-value":"key",label:"Document Type",dense:"",outlined:"",class:"col-12 card-padding",error:e.documentKeyError,"error-message":e.$t("field_required"),"menu-anchor":"bottom left","menu-self":"top left","transition-show":"jump-down","transition-hide":"jump-up"},null,8,["modelValue","options","error","error-message"])])),_:1}),(0,o.bF)(P,{align:"right"},{default:(0,o.k6)((()=>[(0,o.bF)(A,{flat:"",label:e.$t("cancel"),onClick:e.closeDialog,appearance:"cancel"},null,8,["label","onClick"]),(0,o.bF)(A,{flat:"",label:e.$t("save"),onClick:e.validateAndSubmit,class:"q-mr-sm"},null,8,["label","onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onHide","onEscapeKey"]),(0,o.bF)(z,{modelValue:e.uploadDialog,"onUpdate:modelValue":t[8]||(t[8]=t=>e.uploadDialog=t)},{default:(0,o.k6)((()=>[(0,o.bF)(j,{style:{width:"20vw",height:"30vh"}},{default:(0,o.k6)((()=>[(0,o.bF)(M,{class:"text-white secondary-toolbar"},{default:(0,o.k6)((()=>[(0,o.bF)(I,null,{default:(0,o.k6)((()=>[(0,o.Lk)("span",y,(0,a.v_)(e.$t("import_decision_tree")),1)])),_:1}),(0,o.bo)((0,o.bF)(N,{flat:"",round:"",dense:"",icon:"close"},null,512),[[Z]])])),_:1}),(0,o.bF)(U,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",_,[w,(0,o.Lk)("div",T,(0,a.v_)(e.$t("import_field_decision_tree")),1)]),(0,o.bF)(O,{color:"white","data-cy":"upload-multiple-docs","label-color":"white",outlined:"","onUpdate:modelValue":[e.uploadFile,t[7]||(t[7]=t=>e.uploadedFile=t)],modelValue:e.uploadedFile,label:e.$t("import_decision_tree"),flat:"",dense:"",round:""},{prepend:(0,o.k6)((()=>[(0,o.bF)(E,{name:"attachment"})])),file:(0,o.k6)((({index:e,file:t})=>[(0,o.Lk)("div",D,(0,a.v_)(t.name),1),(0,o.bF)(H,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(t.name),1)])),_:2},1024),(0,o.Q3)("",!0)])),_:1},8,["onUpdate:modelValue","modelValue","label"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])}var F=l(38734),L=l(11470),E=l(24622),x=l(18505),A=l(64775),C=l(68180),K=l(89156),q=l(25773),Q=function(e,t,l,o){function a(e){return e instanceof l?e:new l((function(t){t(e)}))}return new(l||(l=Promise))((function(l,i){function s(e){try{d(o.next(e))}catch(t){i(t)}}function n(e){try{d(o["throw"](e))}catch(t){i(t)}}function d(e){e.done?l(e.value):a(e.value).then(s,n)}d((o=o.apply(e,t||[])).next())}))};const V=(0,o.pM)({name:"decisionTree",components:{SubHeader:C.A,Loader:K.A,BackToSettings:q.A},mixins:[E.A,x.A],data(){return{workflowId:(0,F.KR)(""),searchBy:(0,F.KR)(""),tableData:(0,F.KR)({}),filteredData:(0,F.KR)({}),confirmDelete:(0,F.KR)(!1),selectedRecordIndex:(0,F.KR)(),version:(0,F.KR)(""),dialog:(0,F.KR)(!1),decisionTableNameError:!1,documentKeyError:!1,docTypes:[]}},methods:{filterTableData(){this.searchBy?this.filteredData=this.tableData.filter((e=>e.name.toLowerCase().includes(this.searchBy.toLowerCase()))):this.filteredData=this.tableData},addDecisionTable(){return Q(this,void 0,void 0,(function*(){try{let e=new FormData;e.append("name",this.decisionTableName),e.append("doc_type",this.selectedDocumentKey["key"]),e.append("data",this.treeData),e.append("tree_id",this.selectedTreeId),this.showLoading();const t=yield L.oZ.saveDecisionTreeRecord(e);if(t.hasOwnProperty("success")&&!1===t.success)throw t;this.init(),this.showSuccessToast(t.message)}catch(e){const t=A.t.getErrorMessage(e);this.showErrorToast(t),logError(e)}finally{this.hideLoading()}}))},uploadFile(e){return Q(this,void 0,void 0,(function*(){try{this.showLoading(),this.uploadDialog=!1;let t=new FormData;t.append("file",e);const l=yield L.oZ.importDecisionTree(t);if(l.hasOwnProperty("success")&&!1===l.success)throw l;this.showSuccessToast(l.message),this.init()}catch(t){const e=A.t.getErrorMessage(t);this.showErrorToast(e),logError(t)}finally{this.hideLoading()}}))},deleteTable(e){return Q(this,void 0,void 0,(function*(){try{this.showLoading();const t=yield L.oZ.deleteTable(e);if(t.hasOwnProperty("success")&&!1===t.success)throw t;this.showSuccessToast(t.message),this.init()}catch(t){const e=A.t.getErrorMessage(t);this.showErrorToast(e),logError(t)}finally{this.hideLoading()}}))},init(e=!1){return Q(this,void 0,void 0,(function*(){try{this.showLoading();const t=yield L.oZ.getAllDecisionTrees(e);if(!t.hasOwnProperty("success")||!1===t.success)throw t;this.tableData=t.data,this.filteredData=this.tableData}catch(t){const e=A.t.getErrorMessage(t);this.showErrorToast(e),logError(t)}finally{this.hideLoading()}}))},openTreeDesigner(e){this.$router.push("/settings/decisionTree_designer/"+e.id)},loadDocTypes(){return Q(this,void 0,void 0,(function*(){try{this.showLoading();const e=yield L.p5.fetchDocTypes();this.docTypes=e.data.map((e=>({title:e.title,key:e.document_key})))}catch(e){const t=A.t.getErrorMessage(e);this.showErrorToast(t),logError(e)}finally{this.hideLoading()}}))},validateAndSubmit(){this.decisionTableNameError=!this.decisionTableName,this.documentKeyError=!this.selectedDocumentKey,this.decisionTableNameError||this.documentKeyError||(this.addDecisionTable(),this.closeDialog())},resetFields(){this.decisionTableName="",this.selectedDocumentKey="",this.decisionTableNameError=!1,this.documentKeyError=!1,this.isEditMode=!1,this.selectedTreeId=""},openEditTreeDialog(e){this.isEditMode=!0,this.selectedTreeId=e.id,this.decisionTableName=e.name,this.selectedDocumentKey=e.doc_type,this.dialog=!0},closeDialog(){this.dialog=!1,this.resetFields()}},mounted(){this.init(!0),this.loadDocTypes(),this.filterTableData()},setup(){const e=(0,F.KR)("");return{decisionTableName:e,documentList:[],selectedDocumentKey:(0,F.KR)(""),selectedDocumentTypeFields:{},uploadedFile:(0,F.KR)(),uploadDialog:(0,F.KR)(!1),isEditMode:(0,F.KR)(!1),selectedTreeId:(0,F.KR)("")}}});var $=l(12807),R=l(67837),N=l(50492),S=l(857),I=l(56384),M=l(84436),B=l(53999),U=l(90124),P=l(25173),j=l(10386),z=l(82156),H=l(23316),O=l(36914),Z=l(39150),X=l(44189),W=l(94940),G=l(62669),J=l(99980),Y=l(97410),ee=l(67156),te=l(88672),le=l(98582),oe=l.n(le);const ae=(0,$.A)(V,[["render",v],["__scopeId","data-v-9174b6a8"]]),ie=ae;oe()(V,"components",{QInput:R.A,QIcon:N.A,QMarkupTable:S.A,QBtn:I.A,QMenu:M.A,QList:B.A,QItem:U.A,QItemSection:P.A,QSeparator:j.A,QDialog:z.A,QCard:H.A,QToolbar:O.A,QToolbarTitle:Z.A,QCardSection:X.A,QSelect:W.A,QCardActions:G.A,QFile:J.A,QTooltip:Y.A,QField:ee.A}),oe()(V,"directives",{ClosePopup:te.A})}}]);