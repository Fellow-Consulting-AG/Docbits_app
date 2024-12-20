"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[1368],{91368:(t,e,a)=>{a.r(e),a.d(e,{default:()=>Ct});var i=a(61758),s=a(58790);const l=t=>((0,i.Qi)("data-v-50e1512e"),t=t(),(0,i.jt)(),t),o=l((()=>(0,i.Lk)("div",{class:"row bg-grey-2 q-pl-xl q-pr-md"},[(0,i.Lk)("div",{class:"secondary-c-text text-h6"})],-1))),n={key:0,class:"row bg-grey-2 q-pl-xl q-pr-md q-pb-md"},r={class:"width-120",id:"left_section",ref:"left_section"},d={class:"full-width bg-white q-ma-sm scroll-area-height"},h={class:"row justify-center q-pl-md q-pr-md q-pt-md"},g={class:"secondary-c-text text-h6 text-weight-bold"},c={class:"row ml-92 q-pl-md q-pr-md"},u={class:"q-pl-md q-pr-md full-width left-scroll-area-height scrolle-y"},p=["data-id","src"],m={class:"right_section q-pl-sm",id:"right_section",ref:"right_section"},b={class:"row"},f={class:"full-width bg-white"},_={class:"image_control_panel"},v={class:"row"},k={class:"panel-left col-sm-6 col-md-6 col-lg-6"},w={class:"row"},y={class:"panel-middle col-sm-1 col-md-1 col-lg-1 mt-8"},D={class:"page-numbers"},C={class:"panel-right col-sm-5 col-md-5 col-lg-5"},S=l((()=>(0,i.Lk)("img",{src:"images/edit.svg",width:"20"},null,-1))),L=l((()=>(0,i.Lk)("img",{src:"images/cancel.svg",width:"20"},null,-1))),E=l((()=>(0,i.Lk)("img",{src:"images/floppy-disk.svg",width:"20"},null,-1))),A=l((()=>(0,i.Lk)("img",{src:"images/column.svg",width:"20"},null,-1))),x=l((()=>(0,i.Lk)("img",{src:"images/all-columns.svg",width:"20"},null,-1))),F=l((()=>(0,i.Lk)("img",{src:"images/trash-bin-default.svg",width:"20"},null,-1))),I=l((()=>(0,i.Lk)("img",{src:"images/magic_wand.svg",width:"25"},null,-1))),T={class:"full-width bg-white"},O={class:"bg-white image_control_panel"},R={class:"row"},P=l((()=>(0,i.Lk)("div",{class:"col-sm-4 col-md-4 col-lg-4"},null,-1))),W={class:"col-sm-8 col-md-8 col-lg-8"},q=l((()=>(0,i.Lk)("img",{src:"images/trash-bin-default.svg",width:"20"},null,-1))),z=l((()=>(0,i.Lk)("img",{src:"images/spalt.svg",width:"20"},null,-1))),$=l((()=>(0,i.Lk)("i",{style:{display:"inline-block"},class:"fa fa-undo"},null,-1))),U={class:"row"},N={class:"full-width full-height bg-white table-extraction-view",id:"image_container"},X={class:"full-width bg-white",id:"table"},B={key:0,class:"row q-pt-xl full-width",style:{display:"flex"}},M={style:{width:"100%"}},H={key:1,class:"text-center text-h3 q-pl-xl q-pr-md"},Q={style:{"padding-left":"5px"}};function J(t,e,a,l,J,K){const V=(0,i.g2)("q-btn"),Y=(0,i.g2)("q-tooltip"),j=(0,i.g2)("q-splitter"),G=(0,i.g2)("multi-select-areas-image"),Z=(0,i.g2)("LineItems"),tt=(0,i.g2)("f-btn"),et=(0,i.g2)("q-icon"),at=(0,i.g2)("Loader");return(0,i.uX)(),(0,i.CE)(i.FK,null,[o,t.account_block?((0,i.uX)(),(0,i.CE)("div",H,[(0,i.bF)(et,{class:"text-red",style:{"font-size":"32px"},name:"warning"}),(0,i.Lk)("span",Q,(0,s.v_)(t.$t("block_supplier_warning")),1)])):((0,i.uX)(),(0,i.CE)("div",n,[(0,i.Lk)("div",r,[(0,i.Lk)("div",d,[(0,i.Lk)("div",h,[(0,i.Lk)("span",g,(0,s.v_)(t.$t("pages.screen2b.pages")),1)]),(0,i.Lk)("div",c,[(0,i.bF)(V,{round:"",icon:"chevron_left",size:"xs",class:"text-grey-6 bg-white",onClick:e[0]||(e[0]=e=>t.toggler())})]),(0,i.Lk)("div",u,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.images,((a,s)=>((0,i.uX)(),(0,i.CE)("img",{"data-id":s,key:s,src:t.baseUrl+"/"+a.path+"?"+t.tokenQueryParam,class:"q-pa-sm shadow-5 full-width q-ma-sm cursor-pointer",style:{height:"auto"},onClick:e[1]||(e[1]=(...e)=>t.imageClicked&&t.imageClicked(...e))},null,8,p)))),128))])])],512),(0,i.Lk)("div",m,[(0,i.Lk)("div",b,[(0,i.bF)(j,{modelValue:t.splitterModel,"onUpdate:modelValue":[e[10]||(e[10]=e=>t.splitterModel=e),e[11]||(e[11]=e=>t.windowResize())],disable:"",limits:[30,100],class:"full-width q-pl-sm q-pt-sm overflow-none"},{before:(0,i.k6)((()=>[(0,i.Lk)("div",f,[(0,i.Lk)("div",_,[(0,i.Lk)("div",v,[(0,i.Lk)("div",k,[(0,i.Lk)("div",w,(0,s.v_)(t.apiData.filename),1)]),(0,i.Lk)("div",y,[(0,i.Lk)("span",D,(0,s.v_)(t.currentPage())+"/"+(0,s.v_)(t.images.length),1)]),(0,i.Lk)("div",C,[(0,i.bF)(V,{flat:"",class:"p-4 float-right",onClick:e[2]||(e[2]=e=>{e.stopPropagation(),t.enableDrawing(!1)})},{default:(0,i.k6)((()=>[S,(0,i.bF)(Y,null,{default:(0,i.k6)((()=>[(0,i.eW)((0,s.v_)(t.$t("edit")),1)])),_:1})])),_:1}),t.enableEditing?((0,i.uX)(),(0,i.Wv)(V,{key:0,flat:"",class:"p-4 float-right",onClick:e[3]||(e[3]=e=>{e.stopPropagation(),t.restrictDrawing()})},{default:(0,i.k6)((()=>[L,(0,i.bF)(Y,null,{default:(0,i.k6)((()=>[(0,i.eW)("Cancel Edit")])),_:1})])),_:1})):(0,i.Q3)("",!0),t.enableEditing||t.enableColumnEditing?((0,i.uX)(),(0,i.Wv)(V,{key:1,flat:"",class:"p-4 float-right",onClick:e[4]||(e[4]=e=>{e.stopPropagation(),t.saveTableCoordinates()})},{default:(0,i.k6)((()=>[E,(0,i.bF)(Y,null,{default:(0,i.k6)((()=>[(0,i.eW)("Save Changes")])),_:1})])),_:1})):(0,i.Q3)("",!0),(0,i.bF)(V,{flat:"",class:"p-4 float-right",onClick:t.addColumn},{default:(0,i.k6)((()=>[A,(0,i.bF)(Y,null,{default:(0,i.k6)((()=>[(0,i.eW)((0,s.v_)(t.$t("add_column")),1)])),_:1})])),_:1},8,["onClick"]),t.enableColumnEditing?((0,i.uX)(),(0,i.Wv)(V,{key:2,flat:"",class:"p-4 float-right",onClick:t.addColumnForAll},{default:(0,i.k6)((()=>[x,(0,i.bF)(Y,null,{default:(0,i.k6)((()=>[(0,i.eW)("Use Same Column For all")])),_:1})])),_:1},8,["onClick"])):(0,i.Q3)("",!0),t.isColumnSelectedForDelete()?((0,i.uX)(),(0,i.Wv)(V,{key:3,flat:"",class:"p-4 float-right",onClick:t.removeSelectedColumn,icon:"delete_forever"},{default:(0,i.k6)((()=>[(0,i.bF)(Y,null,{default:(0,i.k6)((()=>[(0,i.eW)("Delete Selected Column")])),_:1})])),_:1},8,["onClick"])):(0,i.Q3)("",!0),t.enableColumnEditing?((0,i.uX)(),(0,i.Wv)(V,{key:4,flat:"",class:"p-4 float-right",onClick:e[5]||(e[5]=e=>{e.stopPropagation(),t.removeAllColumns()})},{default:(0,i.k6)((()=>[F,(0,i.bF)(Y,null,{default:(0,i.k6)((()=>[(0,i.eW)("Remove All Columns")])),_:1})])),_:1})):(0,i.Q3)("",!0),(0,i.bF)(V,{flat:"",class:"p-4 float-right",onClick:t.autoDetectTables},{default:(0,i.k6)((()=>[I,(0,i.bF)(Y,null,{default:(0,i.k6)((()=>[(0,i.eW)("Autodetect Tables")])),_:1})])),_:1},8,["onClick"]),(0,i.bF)(V,{flat:"",class:"p-4 float-right",onClick:t.zoomOut,icon:"zoom_out"},{default:(0,i.k6)((()=>[(0,i.bF)(Y,null,{default:(0,i.k6)((()=>[(0,i.eW)("Zoom out")])),_:1})])),_:1},8,["onClick"]),(0,i.bF)(V,{flat:"",class:"p-4 float-right",onClick:t.zoomIn,icon:"images/zoom_in"},{default:(0,i.k6)((()=>[(0,i.bF)(Y,null,{default:(0,i.k6)((()=>[(0,i.eW)("Zoom in")])),_:1})])),_:1},8,["onClick"])])])])])])),after:(0,i.k6)((()=>[(0,i.Lk)("div",T,[(0,i.Lk)("div",O,[(0,i.Lk)("div",R,[P,(0,i.Lk)("div",W,[(0,i.bF)(V,{flat:"",class:"p-4 float-right",color:"primary",onClick:e[6]||(e[6]=e=>{e.stopPropagation(),t.deleteAllExtractedData()})},{default:(0,i.k6)((()=>[q,(0,i.bF)(Y,null,{default:(0,i.k6)((()=>[(0,i.eW)("Delete All Extracted Data")])),_:1})])),_:1}),(0,i.bF)(V,{flat:"",class:"p-4 float-right",color:"primary",onClick:e[7]||(e[7]=e=>{e.stopPropagation(),t.addLine()})},{default:(0,i.k6)((()=>[z,(0,i.bF)(Y,null,{default:(0,i.k6)((()=>[(0,i.eW)("Add New Line")])),_:1})])),_:1}),(0,i.bF)(V,{flat:"",class:"p-4 float-right",color:"grey-8",icon:"settings",onClick:e[8]||(e[8]=e=>{e.stopPropagation(),t.openLineItemAdvanceSettings()})},{default:(0,i.k6)((()=>[(0,i.bF)(Y,null,{default:(0,i.k6)((()=>[(0,i.eW)("Advance Settings")])),_:1})])),_:1}),(0,i.bF)(V,{flat:"",class:"p-4 float-right",color:"grey-8",onClick:e[9]||(e[9]=e=>{e.stopPropagation(),t.revertChanges()})},{default:(0,i.k6)((()=>[$,(0,i.bF)(Y,null,{default:(0,i.k6)((()=>[(0,i.eW)("Revert Changes")])),_:1})])),_:1})])])])])])),_:1},8,["modelValue"])]),(0,i.Lk)("div",U,[(0,i.bF)(j,{modelValue:t.splitterModel,"onUpdate:modelValue":[e[14]||(e[14]=e=>t.splitterModel=e),e[15]||(e[15]=e=>t.windowResize())],limits:[30,100],class:"scroll-area-height-table full-width q-pl-sm"},{before:(0,i.k6)((()=>[(0,i.Lk)("div",N,[(0,i.bF)(V,{id:"menu_btn",round:"",icon:"chevron_right",size:"xs",class:"text-grey-6 hidden toggler-right m-t-5",onClick:e[12]||(e[12]=e=>t.toggler())}),(0,i.bF)(G,{"pos-correction":!1,width:t.imageWidth,cropUrl:t.image+"?"+this.tokenQueryParam,tableAreas:t.tableAreasStr},null,8,["width","cropUrl","tableAreas"])])])),after:(0,i.k6)((()=>[(0,i.Lk)("div",X,[(0,i.bF)(Z,{ref:"lineItemsRef",apiData:t.apiData,onUpdateExtractionDataForSave:t.updateExtractionDataForSave,onUpdateTableDataForSave:t.updateTableDataForSave,onUpdateReadOnlyFlag:t.updateReadOnlyFlag,onUpdateTableForSave:t.updateTableForSave},null,8,["apiData","onUpdateExtractionDataForSave","onUpdateTableDataForSave","onUpdateReadOnlyFlag","onUpdateTableForSave"]),t.isReadOnly?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",B,[(0,i.Lk)("div",M,[(0,i.bF)(tt,{label:t.$t("pages.screen2a.save"),class:"full-width",onClick:e[13]||(e[13]=e=>t.saveData())},null,8,["label"])])]))])])),_:1},8,["modelValue"])])],512)])),(0,i.bF)(at)],64)}var K=a(82303),V=a(46162),Y=a(1659),j=a(24622),G=a(38734),Z=a(89156),tt=a(76956),et=a(18505),at=a(83319),it=a(11839),st=a(14907),lt=a(41903),ot=a(96075),nt=a(43354),rt=a(85487),dt=function(t,e,a,i){function s(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,l){function o(t){try{r(i.next(t))}catch(e){l(e)}}function n(t){try{r(i["throw"](t))}catch(e){l(e)}}function r(t){t.done?a(t.value):s(t.value).then(o,n)}r((i=i.apply(t,e||[])).next())}))};let ht=new Map,gt={columns:[],table_areas:[]},ct={startX:0,startY:0,endX:0,endY:0};const ut=document.querySelector.bind(document);let pt;const mt=(0,i.pM)({el:"#app",mixins:[et.A,j.A],components:{Loader:Z.A,LineItems:it.A,MultiSelectAreasImage:nt.A},data(){return{draggingColumnEl:{},deleteColumnInfo:{},enableEditing:!1,enableColumnEditing:!1,imageHeight:0,imageWidth:0,viewBox:"0 0 0 0",enableExportButton:!1,purchaseOrderColumns:[],purchaseOrderData:[],closeEnough:6,dragTL:!1,dragBL:!1,dragTR:!1,dragBR:!1,rect:{},current_zoom:1,account_block:"",allowedDoctypes:tt.Gk}},mounted(){this.$route.query.id&&this.$route.query.token||this.$router.push("/not_found"),this.record_id=String(this.$route.query.id),this.token=String(this.$route.query.token),this.init()},unmounted:function(){window.removeEventListener("resize",this.windowResize)},methods:{init(){return dt(this,void 0,void 0,(function*(){yield this.getInvoiceDataByDocId(this.record_id),this.handleBlockedSupplier(),this.account_block||(window.addEventListener("resize",this.windowResize),"finished"!==this.apiData.status&&"workflow"!==this.apiData.status||(this.isReadOnly=!0),this.imageWidth=ut("#image_container").offsetWidth-15,this.initPage())}))},getInvoiceDataByDocId(t){return dt(this,void 0,void 0,(function*(){let e;this.showLoading();try{e=yield K.A.get((0,rt.MV)(V.FH.get_table_train_data+t),{headers:{Authorization:"Bearer "+this.token}})}catch(a){return this.showErrorToast(this.$t("pages.messages.error_internal_occur")),logError(a),void this.hideLoading()}if(!e.data.data.doc_id)return this.showErrorToast(this.$t("pages.messages.INVALID_DOCUMENT")),void this.hideLoading();e.data.data.token=this.token,e.data.data.is_table_training_doc=!0,this.apiData=e.data.data,this.apiData.tables&&this.apiData.tables[0]&&!this.apiData.tables[0].hasOwnProperty("original_extraction_info")&&this.apiData.tables[0].extraction_info&&(this.apiData.tables[0]["original_extraction_info"]=this.apiData.tables[0].extraction_info),this.apiData.hasOwnProperty("table_data_copy")||(this.apiData["table_data_copy"]=this.apiData.tables),this.hideLoading()}))},initPage(){this.handleImageBaseURL(),this.image=this.baseUrl+"/"+(0,ot.v)(this.apiData.images[0].path),this.images=(0,ot.m)(this.apiData.images),this.apiData.tables&&this.apiData.tables[0]&&this.apiData.tables[0].extraction_info&&this.prepareTableMap(this.apiData.tables[0].extraction_info),window.addEventListener("keydown",(t=>{27===t.keyCode&&this.restrictDrawing()})),lt.A.has("enableExportButton")?this.enableExportButton=lt.A.getItem("enableExportButton"):this.enableExportButton=!1,this.$forceUpdate()},handleBlockedSupplier(){this.account_block="",!this.apiData.hasOwnProperty("table_blocked")||1!=this.apiData.table_blocked&&"true"!=this.apiData.table_blocked||(this.account_block="table_blocked"),!this.apiData.hasOwnProperty("table_extraction_disabled")||1!=this.apiData.table_extraction_disabled&&"true"!=this.apiData.table_extraction_disabled||(this.account_block="table_extraction_disabled"),!this.apiData.hasOwnProperty("table_not_supported")||1!=this.apiData.table_not_supported&&"true"!=this.apiData.table_not_supported||(this.account_block="table_not_supported")},toggler(){this.toggleMenu(),this.windowResize()},addLine(){this.enableDrawing(!1),this.$refs["lineItemsRef"].addLine(),this.$forceUpdate()},imageClicked(t){this.persistTableAreas(),this.image=this.baseUrl+"/"+(0,ot.v)(this.apiData.images[t.target.dataset.id].path)+"?"+this.tokenQueryParam,this.page=parseInt(t.target.dataset.id)+1,this.loadNewPageTableAreas(),this.resizeSelectableColumns(),this.$forceUpdate()},persistTableAreas(){if(lt.A.has("table_data")&&null!=lt.A.getItem("table_data")&&""!=lt.A.getItem("table_data")){let t=lt.A.getItem("table_data");gt=JSON.parse(t),gt&&gt.table_areas&&gt.table_areas.length?ht.set(this.page.toString(),JSON.stringify(gt)):ht.delete(this.page.toString())}else ht.delete(this.page.toString())},loadNewPageTableAreas(){gt=ht.has(this.page.toString())?JSON.parse(ht.get(this.page.toString())):{columns:[],table_areas:[]},this.tableAreasStr=JSON.stringify(gt),lt.A.set("table_data",this.tableAreasStr)},prepareTableMap(t){t&&(ht=new Map,Array.from(t).forEach((t=>{t&&(t.table_areas||t.columns)&&ht.set(t.page.toString(),JSON.stringify(t))})),this.loadNewPageTableAreas())},enableDrawing(t){this.enableEditing=!0;const e=ut("#draw");null===e||void 0===e||e.classList.add("cursor-crosshair"),null===e||void 0===e||e.classList.remove("pointer-events-none"),this.disableColumnEditing()},restrictDrawing(){this.enableEditing=!1;const t=ut("#draw");null===t||void 0===t||t.classList.add("pointer-events-none"),null===t||void 0===t||t.classList.remove("cursor-crosshair")},saveOverlayResult(){this.saveCoordinates(ct)},saveCoordinates(t){return dt(this,void 0,void 0,(function*(){let e,a=new FormData,i=t.startX/this.imageWidth,s=t.startY/this.imageHeight,l=t.endX/this.imageWidth,o=t.endY/this.imageHeight;a.append("x1",i.toString()),a.append("y1",s.toString()),a.append("x2",l.toString()),a.append("y2",o.toString()),a.append("page",this.page.toString()),a.append("doc_id",this.apiData.doc_id),a.append("pages",JSON.stringify(gt)),a.append("is_table_training_doc",(!0).toString()),a.append("org_id",(0,rt.I)()),this.showLoading();try{e=yield K.A.post(V.FH.get_table_data,a,{headers:{Authorization:"Bearer "+this.token}})}catch(n){return this.enableDrawing(!0),this.showErrorToast(this.$t("pages.messages.error_internal_occur")),logError(n),void this.hideLoading()}e.data.tables&&e.data.synonyms?(this.apiData.tables=e.data.tables,this.apiData.synonyms=e.data.synonyms,this.apiData.table_coord={x1:i.toString(),x2:l.toString(),y1:s.toString(),y2:o.toString(),page:this.page.toString()},this.restrictDrawing(),this.$refs["lineItemsRef"].resetlintItems()):this.showErrorToast(this.$t("pages.messages.error_internal_occur")),this.$forceUpdate(),this.hideLoading()}))},windowResize(){this.persistTableAreas();let t=ut("#image_container");this.imageWidth=t.offsetWidth,setTimeout((()=>{pt=ut("#screenshot"),pt&&(this.imageHeight=pt.offsetHeight),this.$forceUpdate(),this.resizeSelectableColumns()}),10)},resizeSelectableColumns(){let t=document.querySelectorAll(".draggable-column");for(var e=0;e<t.length;e++){let a=t[e],i=a.dataset.normalized_value,s=+i*this.imageWidth;this.page==Number(a.dataset.page_no)||"all"==a.dataset.page_no?(a.style.display="block",a.style.left=s.toString()+"px",a.style.height=String(this.imageHeight)+"px"):a.style.display="none"}},addColumnForAll(t){t.stopPropagation();const e=document.querySelectorAll(".draggable-column");if(0!=e.length)for(var a=0;a<e.length;a++){let t=e[a],i=t.dataset.normalized_value,s=+i*this.imageWidth;t.style.left=s.toString()+"px",t.dataset.page_no="all",t.style.display="block"}else this.showErrorToast("No column detected")},disableColumnEditing(){this.enableColumnEditing=!1,this.draggingColumnEl=null,this.deleteColumnInfo=null,document.removeEventListener("pointermove",this.repositionColumn),document.removeEventListener("pointerup",this.columnStopDrag)},addColumn(t){this.enableColumnEditing=!0,this.deleteColumnInfo=null,this.restrictDrawing(),t.stopPropagation();let e=ut("#screenshot_container");pt=ut("#screenshot"),this.imageWidth=pt.offsetWidth,this.imageHeight=pt.offsetHeight;let a=this.getNewColPosOffset(this.page);var i=document.createElement("div");i.className="draggable-column",i.style.height=String(this.imageHeight)+"px",i.style.left=a.toString()+"px",i.dataset.parent_class="screenshot",i.dataset.page_no=void 0!==t.page?t.page:this.page.toString(),i.dataset.normalized_value=(a/this.imageWidth).toString(),e.appendChild(i),i.addEventListener("pointerdown",this.pointerDownDraggableColumn,!1)},getNewColPosOffset(t){let e=0,a=0;const i=ut("#screenshot"),s=document.querySelectorAll(".draggable-column"),l=i.offsetWidth-i.offsetLeft;if(s.length){let a=null;for(var o=0;o<s.length;o++){let e=s[o];t!=Number(e.dataset.page_no)&&"all"!=e.dataset.page_no||(a=e)}a&&(e=parseInt(a.style.left))}return e+25>l&&(e=0),a=e+25,a},removeDraggableColumn(t){this.draggingColumnEl=null,this.deleteColumnInfo=null,t.target.remove()},pointerDownDraggableColumn(t){if(t.preventDefault(),t.target.clicks++,setTimeout((function(){t.target.clicks=0}),400),2===t.target.clicks)return this.removeDraggableColumn(t),void(t.target.clicks=0);this.columnDragStart(t)},columnDragStart(t){let e=t.target.offsetLeft,a=t.target.offsetTop,i=t.clientX,s=t.clientY;this.draggingColumnEl={el:t.target,initX:e,initY:a,mousePressX:i,mousePressY:s},this.deleteColumnInfo={event:t},document.addEventListener("pointermove",this.repositionColumn,!1),document.addEventListener("pointerup",this.columnStopDrag,!1)},columnStopDrag(t){this.draggingColumnEl=null;let e=ut("#image_container"),a=e.querySelectorAll(".draggable-column");for(var i=0;i<a.length;i++){a[i].removeEventListener("pointermove",this.repositionColumn,!1);let t=a[i].style.left.replace("px","");a[i].dataset.normalized_value=(+t/this.imageWidth).toString()}},repositionColumn(t){if(!(this.draggingColumnEl&&this.draggingColumnEl.initX&&this.draggingColumnEl.mousePressX))return;let e=this.draggingColumnEl.el.dataset.parent_class,a=ut("#"+e);if(a){this.deleteColumnInfo=null;var i=a.getBoundingClientRect();t.clientX>=i.left?this.draggingColumnEl.el.style.left=this.draggingColumnEl.initX+t.clientX-this.draggingColumnEl.mousePressX+"px":this.draggingColumnEl.el.style.left=Math.floor(5*a.offsetWidth/100)+"px"}else logInfo("column parent id is missing")},removeAllColumns(){this.deleteColumnInfo=null,this.draggingColumnEl=null;const t=document.querySelectorAll(".draggable-column");if(0!=t.length)for(var e=0;e<t.length;e++)t[e].remove()},isColumnSelectedForDelete(){return!(!this.deleteColumnInfo||0===Object.keys(this.deleteColumnInfo).length||!this.deleteColumnInfo.event)},removeSelectedColumn(t){this.deleteColumnInfo&&0!==Object.keys(this.deleteColumnInfo).length&&this.deleteColumnInfo.event?(this.removeDraggableColumn(this.deleteColumnInfo.event),this.deleteColumnInfo=null):this.deleteColumnInfo=null},saveTableCoordinates(){return dt(this,void 0,void 0,(function*(){this.persistTableAreas(),this.setRulesForSelectableColumns();let t=[];ht.forEach(((e,a)=>{e&&a&&(gt=JSON.parse(e),t.push(Object.assign({},{page:a,table_areas:gt.table_areas,columns:gt.columns})))}));let e,a=new FormData;a.append("doc_id",this.apiData.doc_id),a.append("table_extraction_data",JSON.stringify(t)),a.append("is_table_training_doc",(!0).toString()),a.append("org_id",(0,rt.I)()),this.showLoading();try{e=yield K.A.post(V.FH.get_table_default,a,{headers:{Authorization:"Bearer "+this.token}})}catch(i){return this.showErrorToast(this.$t("pages.messages.error_internal_occur")),logError(i),void this.hideLoading()}if(!1===e.data.success)return this.showErrorToast(e.data.message),void this.hideLoading();this.setApiResponse(e),this.hideLoading()}))},setApiResponse(t){t.data.tables&&t.data.tables[0].extraction_info&&(this.apiData.tables=t.data.tables,this.apiData["table_data_copy"]=this.apiData.tables,this.prepareTableMap(t.data.tables[0].extraction_info),this.restrictDrawing(),this.$refs["lineItemsRef"].resetlintItems())},setRulesForSelectableColumns(){let t=document.querySelectorAll(".draggable-column");if(!t)return;let e=ut("#screenshot");if(!e)return;let a=e.offsetWidth;for(var i=0;i<this.images.length;i++){let e=(i+1).toString(),l=[];for(var s=0;s<t.length;s++){let i=t[s];if(e==i.dataset.page_no||"all"==i.dataset.page_no){let t=i.style.left.replace("px","");l.push(+t/a)}}l.length>0&&(l=this.sortColumns(l),this.addColumnsToTableMap(l,e))}},sortColumns(t){return t.sort((function(t,e){return t-e})),t},addColumnsToTableMap(t,e){let a={table_areas:[]};ht.has(e)&&(a=JSON.parse(ht.get(e))),a.columns=[t.toString()],ht.set(e,JSON.stringify(a)),lt.A.set("table_data",JSON.stringify(a))},autoDetectTables(){return dt(this,void 0,void 0,(function*(){this.showLoading();let t,e=new FormData;e.append("doc_id",this.apiData.doc_id),e.append("is_table_training_doc",(!0).toString()),e.append("org_id",(0,rt.I)());try{t=yield K.A.post(V.FH.get_auto_table_v3,e,{headers:{Authorization:"Bearer "+this.token}})}catch(a){return this.showErrorToast(this.$t("pages.messages.error_internal_occur")),logError(a),void this.hideLoading()}if(!1===t.data.success)return this.showErrorToast(t.data.message),void this.hideLoading();this.setApiResponse(t),this.hideLoading()}))},handleScroll(){logInfo("this.handleScroll")},deleteAllExtractedData(){ht=new Map,gt={columns:[],table_areas:[]},this.apiData.tables&&!this.apiData.tables[0].hasOwnProperty("original_extraction_info")&&this.apiData.tables[0].extraction_info&&(this.apiData.tables[0]["original_extraction_info"]=this.apiData.tables[0].extraction_info),this.apiData.hasOwnProperty("table_data_copy")||(this.apiData["table_data_copy"]=this.apiData.tables),this.apiData.tables=null,this.restrictDrawing(),this.removeAllColumns(),this.$forceUpdate(),gt={columns:[],table_areas:[]},this.tableAreasStr=JSON.stringify(gt),lt.A.set("table_data",this.tableAreasStr),this.$refs["lineItemsRef"].resetlintItems()},currentPage(){return this.page},updateExtractionDataForSave(t,e){if(this.apiData&&this.apiData.tables&&this.apiData.tables[0]&&this.apiData.tables[0].hasOwnProperty("extraction_info"))for(let[a,i]of Object.entries(this.apiData.tables[0].extraction_info))this.apiData.tables[0].extraction_info[a][t]=e},updateTableDataForSave(t){this.apiData&&this.apiData.tables&&this.apiData.tables[0]&&t&&(this.apiData.tables[0].data=t)},updateTableForSave(t){this.apiData&&t&&(this.apiData.tables=t,this.$refs["lineItemsRef"].resetlintItems())},updateReadOnlyFlag(t){this.isReadOnly=t},openLineItemAdvanceSettings(){this.enableDrawing(!1),this.$refs["lineItemsRef"].openAdvanceSettings()},setApiData(t){this.apiData=t,this.$forceUpdate()},revertChanges(){const t=new CustomEvent("revert_changes",{});document.dispatchEvent(t)},handleImageBaseURL(){this.apiData.images[0]&&this.apiData.images[0].path.match(/doc2/g)&&(this.baseUrl=V.VA)},zoomOut(){this.imageWidth>200&&(this.imageWidth=this.imageWidth-100,pt=ut("#screenshot"),setTimeout((()=>{this.imageHeight=pt.offsetHeight,this.resizeSelectableColumns()}),10))},zoomIn(){this.imageWidth=this.imageWidth+100,pt=ut("#screenshot"),setTimeout((()=>{this.imageHeight=pt.offsetHeight,this.resizeSelectableColumns()}),10)},cleanupDataforApi(t){t&&t.hasOwnProperty("doc_type")&&-1===this.allowedDoctypes.indexOf(t.doc_type)&&t.hasOwnProperty("tables")},saveData(){return dt(this,void 0,void 0,(function*(){let t=this.apiData;this.showLoading(),this.cleanupDataforApi(t),t.hasOwnProperty("table_data_copy")&&delete t["table_data_copy"];let e,a=new FormData;a.append("data",JSON.stringify(t)),a.append("org_id",(0,rt.I)());try{e=yield K.A.post(V.FH.save_table_train_data+this.apiData.doc_id,a,{headers:{Authorization:"Bearer "+this.token}})}catch(i){return this.hideLoading(),this.showErrorToast(this.$t("pages.messages.error_internal_occur")),void logError(i)}this.hideLoading(),!1===e.data.success?(this.showErrorToast(this.$t("pages.messages.error_internal_occur")),this.showErrorToast(e.data.message)):this.showSuccessToast(this.$t("pages.messages.MSG_SAVE"))}))}},beforeRouteLeave:function(t,e,a){a()},setup(){(0,st.A)();let t=[];const e=(0,at._6)(),{tokenQueryParam:a}=(0,Y.bP)(e);return e.getTokenQueryParam(),{apiData:(0,G.KR)(t),image:(0,G.KR)(""),images:(0,G.KR)(t),baseUrl:V.VA,splitterModel:(0,G.KR)(60),isReadOnly:(0,G.KR)(!1),page:(0,G.KR)(1),tableAreasStr:(0,G.KR)(""),record_id:(0,G.KR)(""),token:(0,G.KR)(""),tokenQueryParam:a}}});var bt=a(12807),ft=a(56384),_t=a(98072),vt=a(97410),kt=a(50492),wt=a(98582),yt=a.n(wt);const Dt=(0,bt.A)(mt,[["render",J],["__scopeId","data-v-50e1512e"]]),Ct=Dt;yt()(mt,"components",{QBtn:ft.A,QSplitter:_t.A,QTooltip:vt.A,QIcon:kt.A})}}]);