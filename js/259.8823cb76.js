"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[259],{80259:(t,e,a)=>{a.r(e),a.d(e,{default:()=>Wt});var i=a(83673),s=a(62323);const l=t=>((0,i.dD)("data-v-7373a9f2"),t=t(),(0,i.Cn)(),t),o=l((()=>(0,i._)("div",{class:"row bg-grey-2 q-pl-xl q-pr-md"},[(0,i._)("div",{class:"secondary-c-text text-h6"})],-1))),n={key:0,class:"row bg-grey-2 q-pl-xl q-pr-md q-pb-md"},r={class:"width-120",id:"left_section",ref:"left_section"},d={class:"full-width bg-white q-ma-sm scroll-area-height"},h={class:"row justify-center q-pl-md q-pr-md q-pt-md"},g={class:"secondary-c-text text-h6 text-weight-bold"},c={class:"row ml-92 q-pl-md q-pr-md"},p={class:"q-pl-md q-pr-md full-width left-scroll-area-height scrolle-y"},u=["data-id","src"],m={class:"right_section q-pl-sm",id:"right_section",ref:"right_section"},f={class:"row"},_={class:"full-width bg-white"},b={class:"image_control_panel"},w={class:"row"},v={class:"panel-left col-sm-6 col-md-6 col-lg-6"},D={class:"row"},C={class:"panel-middle col-sm-1 col-md-1 col-lg-1 mt-8"},y={class:"page-numbers"},S={class:"panel-right col-sm-5 col-md-5 col-lg-5"},k=l((()=>(0,i._)("img",{src:"edit.svg",width:"20"},null,-1))),E=l((()=>(0,i._)("img",{src:"cancel.svg",width:"20"},null,-1))),R=(0,i.Uk)("Cancel Edit"),x=l((()=>(0,i._)("img",{src:"floppy-disk.svg",width:"20"},null,-1))),O=(0,i.Uk)("Save Changes"),A=l((()=>(0,i._)("img",{src:"column.svg",width:"20"},null,-1))),T=l((()=>(0,i._)("img",{src:"all-columns.svg",width:"20"},null,-1))),I=(0,i.Uk)("Use Same Column For all"),L=(0,i.Uk)("Delete Selected Column"),W=l((()=>(0,i._)("img",{src:"trash-bin-default.svg",width:"20"},null,-1))),U=(0,i.Uk)("Remove All Columns"),q=l((()=>(0,i._)("img",{src:"auto-detection.svg",width:"25"},null,-1))),N=(0,i.Uk)("Autodetect Tables"),z=(0,i.Uk)("Zoom out"),P=(0,i.Uk)("Zoom in"),$={class:"full-width bg-white"},F={class:"bg-white image_control_panel"},H={class:"row"},Z=l((()=>(0,i._)("div",{class:"col-sm-4 col-md-4 col-lg-4"},null,-1))),B={class:"col-sm-8 col-md-8 col-lg-8"},M=l((()=>(0,i._)("img",{src:"trash-bin-default.svg",width:"20"},null,-1))),J=(0,i.Uk)("Delete All Extracted Data"),X=l((()=>(0,i._)("img",{src:"spalt.svg",width:"20"},null,-1))),j=(0,i.Uk)("Add New Line"),Y=(0,i.Uk)("Advance Settings"),V=l((()=>(0,i._)("i",{style:{display:"inline-block"},class:"fa fa-undo"},null,-1))),Q=(0,i.Uk)("Revert Changes"),G={class:"row"},K={class:"full-width full-height bg-white table-extraction-view",id:"image_container"},tt={class:"full-width bg-white",id:"table"},et={key:0,class:"row q-pt-xl full-width",style:{display:"flex"}},at={style:{width:"100%"}},it={key:1,class:"text-center text-h3 q-pl-xl q-pr-md"},st={style:{"padding-left":"5px"}};function lt(t,e,a,l,lt,ot){const nt=(0,i.up)("q-btn"),rt=(0,i.up)("q-tooltip"),dt=(0,i.up)("q-splitter"),ht=(0,i.up)("multi-select-areas-image"),gt=(0,i.up)("LineItems"),ct=(0,i.up)("q-icon"),pt=(0,i.up)("Loader");return(0,i.wg)(),(0,i.iD)(i.HY,null,[o,t.account_block?((0,i.wg)(),(0,i.iD)("div",it,[(0,i.Wm)(ct,{class:"text-red",style:{"font-size":"32px"},name:"warning"}),(0,i._)("span",st,(0,s.zw)(t.$t("block_supplier_warning")),1)])):((0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",r,[(0,i._)("div",d,[(0,i._)("div",h,[(0,i._)("span",g,(0,s.zw)(t.$t("pages.screen2b.pages")),1)]),(0,i._)("div",c,[(0,i.Wm)(nt,{round:"",icon:"chevron_left",size:"xs",class:"text-grey-6 bg-white",onClick:e[0]||(e[0]=e=>t.toggler())})]),(0,i._)("div",p,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.images,((a,s)=>((0,i.wg)(),(0,i.iD)("img",{"data-id":s,key:s,src:t.baseUrl+"/"+a.path,class:"q-pa-sm shadow-5 full-width q-ma-sm cursor-pointer",style:{height:"auto"},onClick:e[1]||(e[1]=(...e)=>t.imageClicked&&t.imageClicked(...e))},null,8,u)))),128))])])],512),(0,i._)("div",m,[(0,i._)("div",f,[(0,i.Wm)(dt,{modelValue:t.splitterModel,"onUpdate:modelValue":[e[10]||(e[10]=e=>t.splitterModel=e),e[11]||(e[11]=e=>t.windowResize())],disable:"",limits:[30,100],class:"full-width q-pl-sm q-pt-sm overflow-none"},{before:(0,i.w5)((()=>[(0,i._)("div",_,[(0,i._)("div",b,[(0,i._)("div",w,[(0,i._)("div",v,[(0,i._)("div",D,(0,s.zw)(t.apiData.filename),1)]),(0,i._)("div",C,[(0,i._)("span",y,(0,s.zw)(t.currentPage())+"/"+(0,s.zw)(t.images.length),1)]),(0,i._)("div",S,[(0,i.Wm)(nt,{flat:"",class:"p-4 float-right",onClick:e[2]||(e[2]=e=>{e.stopPropagation(),t.enableDrawing(!1)})},{default:(0,i.w5)((()=>[k,(0,i.Wm)(rt,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(t.$t("edit")),1)])),_:1})])),_:1}),t.enableEditing?((0,i.wg)(),(0,i.j4)(nt,{key:0,flat:"",class:"p-4 float-right",onClick:e[3]||(e[3]=e=>{e.stopPropagation(),t.restrictDrawing()})},{default:(0,i.w5)((()=>[E,(0,i.Wm)(rt,null,{default:(0,i.w5)((()=>[R])),_:1})])),_:1})):(0,i.kq)("",!0),t.enableEditing||t.enableColumnEditing?((0,i.wg)(),(0,i.j4)(nt,{key:1,flat:"",class:"p-4 float-right",onClick:e[4]||(e[4]=e=>{e.stopPropagation(),t.saveTableCoordinates()})},{default:(0,i.w5)((()=>[x,(0,i.Wm)(rt,null,{default:(0,i.w5)((()=>[O])),_:1})])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(nt,{flat:"",class:"p-4 float-right",onClick:t.addColumn},{default:(0,i.w5)((()=>[A,(0,i.Wm)(rt,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(t.$t("add_column")),1)])),_:1})])),_:1},8,["onClick"]),t.enableColumnEditing?((0,i.wg)(),(0,i.j4)(nt,{key:2,flat:"",class:"p-4 float-right",onClick:t.addColumnForAll},{default:(0,i.w5)((()=>[T,(0,i.Wm)(rt,null,{default:(0,i.w5)((()=>[I])),_:1})])),_:1},8,["onClick"])):(0,i.kq)("",!0),t.isColumnSelectedForDelete()?((0,i.wg)(),(0,i.j4)(nt,{key:3,flat:"",class:"p-4 float-right",onClick:t.removeSelectedColumn,icon:"delete_forever"},{default:(0,i.w5)((()=>[(0,i.Wm)(rt,null,{default:(0,i.w5)((()=>[L])),_:1})])),_:1},8,["onClick"])):(0,i.kq)("",!0),t.enableColumnEditing?((0,i.wg)(),(0,i.j4)(nt,{key:4,flat:"",class:"p-4 float-right",onClick:e[5]||(e[5]=e=>{e.stopPropagation(),t.removeAllColumns()})},{default:(0,i.w5)((()=>[W,(0,i.Wm)(rt,null,{default:(0,i.w5)((()=>[U])),_:1})])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(nt,{flat:"",class:"p-4 float-right",onClick:t.autoDetectTables},{default:(0,i.w5)((()=>[q,(0,i.Wm)(rt,null,{default:(0,i.w5)((()=>[N])),_:1})])),_:1},8,["onClick"]),(0,i.Wm)(nt,{flat:"",class:"p-4 float-right",onClick:t.zoomOut,icon:"zoom_out"},{default:(0,i.w5)((()=>[(0,i.Wm)(rt,null,{default:(0,i.w5)((()=>[z])),_:1})])),_:1},8,["onClick"]),(0,i.Wm)(nt,{flat:"",class:"p-4 float-right",onClick:t.zoomIn,icon:"zoom_in"},{default:(0,i.w5)((()=>[(0,i.Wm)(rt,null,{default:(0,i.w5)((()=>[P])),_:1})])),_:1},8,["onClick"])])])])])])),after:(0,i.w5)((()=>[(0,i._)("div",$,[(0,i._)("div",F,[(0,i._)("div",H,[Z,(0,i._)("div",B,[(0,i.Wm)(nt,{flat:"",class:"p-4 float-right",color:"primary",onClick:e[6]||(e[6]=e=>{e.stopPropagation(),t.deleteAllExtractedData()})},{default:(0,i.w5)((()=>[M,(0,i.Wm)(rt,null,{default:(0,i.w5)((()=>[J])),_:1})])),_:1}),(0,i.Wm)(nt,{flat:"",class:"p-4 float-right",color:"primary",onClick:e[7]||(e[7]=e=>{e.stopPropagation(),t.addLine()})},{default:(0,i.w5)((()=>[X,(0,i.Wm)(rt,null,{default:(0,i.w5)((()=>[j])),_:1})])),_:1}),(0,i.Wm)(nt,{flat:"",class:"p-4 float-right",color:"grey-8",icon:"settings",onClick:e[8]||(e[8]=e=>{e.stopPropagation(),t.openLineItemAdvanceSettings()})},{default:(0,i.w5)((()=>[(0,i.Wm)(rt,null,{default:(0,i.w5)((()=>[Y])),_:1})])),_:1}),(0,i.Wm)(nt,{flat:"",class:"p-4 float-right",color:"grey-8",onClick:e[9]||(e[9]=e=>{e.stopPropagation(),t.revertChanges()})},{default:(0,i.w5)((()=>[V,(0,i.Wm)(rt,null,{default:(0,i.w5)((()=>[Q])),_:1})])),_:1})])])])])])),_:1},8,["modelValue"])]),(0,i._)("div",G,[(0,i.Wm)(dt,{modelValue:t.splitterModel,"onUpdate:modelValue":[e[14]||(e[14]=e=>t.splitterModel=e),e[15]||(e[15]=e=>t.windowResize())],limits:[30,100],class:"scroll-area-height-table full-width q-pl-sm"},{before:(0,i.w5)((()=>[(0,i._)("div",K,[(0,i.Wm)(nt,{id:"menu_btn",round:"",icon:"chevron_right",size:"xs",class:"text-grey-6 hidden toggler-right m-t-5",onClick:e[12]||(e[12]=e=>t.toggler())}),(0,i.Wm)(ht,{"pos-correction":!1,width:t.imageWidth,cropUrl:t.image,tableAreas:t.tableAreasStr},null,8,["width","cropUrl","tableAreas"])])])),after:(0,i.w5)((()=>[(0,i._)("div",tt,[(0,i.Wm)(gt,{ref:"lineItemsRef",apiData:t.apiData,onUpdateExtractionDataForSave:t.updateExtractionDataForSave,onUpdateTableDataForSave:t.updateTableDataForSave,onUpdateReadOnlyFlag:t.updateReadOnlyFlag,onUpdateTableForSave:t.updateTableForSave},null,8,["apiData","onUpdateExtractionDataForSave","onUpdateTableDataForSave","onUpdateReadOnlyFlag","onUpdateTableForSave"]),t.isReadOnly?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",et,[(0,i._)("div",at,[(0,i.Wm)(nt,{color:"primary",label:t.$t("pages.screen2a.save"),class:"full-width",onClick:e[13]||(e[13]=e=>t.saveData())},null,8,["label"])])]))])])),_:1},8,["modelValue"])])],512)])),(0,i.Wm)(pt)],64)}var ot=a(30052),nt=a.n(ot),rt=a(77378),dt=a(61959),ht=a(72113),gt=a(45401),ct=a(48825),pt=a(7153),ut=a(49566),mt=a(57776),ft=a(54268),_t=a(70229),bt=a(41891),wt=function(t,e,a,i){function s(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,l){function o(t){try{r(i.next(t))}catch(e){l(e)}}function n(t){try{r(i["throw"](t))}catch(e){l(e)}}function r(t){t.done?a(t.value):s(t.value).then(o,n)}r((i=i.apply(t,e||[])).next())}))};let vt=new Map,Dt={columns:[],table_areas:[]},Ct={startX:0,startY:0,endX:0,endY:0};const yt=document.querySelector.bind(document);let St;const kt=(0,i.aZ)({el:"#app",mixins:[gt.Z,rt.Z],components:{Loader:ht.Z,LineItems:_t.Z,MultiSelectAreasImage:mt.Z},data(){return{draggingColumnEl:{},deleteColumnInfo:{},enableEditing:!1,enableColumnEditing:!1,imageHeight:0,imageWidth:0,viewBox:"0 0 0 0",enableExportButton:!1,purchaseOrderColumns:[],purchaseOrderData:[],closeEnough:6,dragTL:!1,dragBL:!1,dragTR:!1,dragBR:!1,rect:{},current_zoom:1,account_block:"",allowedDoctypes:bt.rf}},mounted(){this.$route.query.id&&this.$route.query.token||this.$router.push("/not_found"),this.record_id=String(this.$route.query.id),this.token=String(this.$route.query.token),this.init()},unmounted:function(){window.removeEventListener("resize",this.windowResize)},methods:{init(){return wt(this,void 0,void 0,(function*(){yield this.getInvoiceDataByDocId(this.record_id),this.handleBlockedSupplier(),this.account_block||(window.addEventListener("resize",this.windowResize),"finished"!==this.apiData.status&&"workflow"!==this.apiData.status||(this.isReadOnly=!0),this.imageWidth=yt("#image_container").offsetWidth-15,this.initPage())}))},getInvoiceDataByDocId(t){return wt(this,void 0,void 0,(function*(){let e;this.showLoading();try{e=yield nt().get(ft.hi.get_table_train_data+t,{headers:{Authorization:"Bearer "+this.token}})}catch(a){return this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR")),void this.hideLoading()}if(!e.data.data.doc_id)return this.showErrorToast(this.$t("pages.messages.INVALID_DOCUMENT")),void this.hideLoading();e.data.data.token=this.token,e.data.data.is_table_training_doc=!0,this.apiData=e.data.data,this.apiData.tables&&this.apiData.tables[0]&&!this.apiData.tables[0].hasOwnProperty("original_extraction_info")&&this.apiData.tables[0].extraction_info&&(this.apiData.tables[0]["original_extraction_info"]=this.apiData.tables[0].extraction_info),this.apiData.hasOwnProperty("table_data_copy")||(this.apiData["table_data_copy"]=this.apiData.tables),this.hideLoading()}))},initPage(){this.handleImageBaseURL(),this.image=this.baseUrl+"/"+(0,ut.Rl)(this.apiData.images[0].path),this.images=(0,ut.PN)(this.apiData.images),this.apiData.tables&&this.apiData.tables[0]&&this.apiData.tables[0].extraction_info&&this.prepareTableMap(this.apiData.tables[0].extraction_info),window.addEventListener("keydown",(t=>{27===t.keyCode&&this.restrictDrawing()})),pt.Z.has("enableExportButton")?this.enableExportButton=pt.Z.getItem("enableExportButton"):this.enableExportButton=!1,this.$forceUpdate()},handleBlockedSupplier(){this.account_block="",!this.apiData.hasOwnProperty("table_blocked")||1!=this.apiData.table_blocked&&"true"!=this.apiData.table_blocked||(this.account_block="table_blocked"),!this.apiData.hasOwnProperty("table_extraction_disabled")||1!=this.apiData.table_extraction_disabled&&"true"!=this.apiData.table_extraction_disabled||(this.account_block="table_extraction_disabled"),!this.apiData.hasOwnProperty("table_not_supported")||1!=this.apiData.table_not_supported&&"true"!=this.apiData.table_not_supported||(this.account_block="table_not_supported")},toggler(){this.toggleMenu(),this.windowResize()},addLine(){this.enableDrawing(!1),this.$refs["lineItemsRef"].addLine(),this.$forceUpdate()},imageClicked(t){this.persistTableAreas(),this.image=this.baseUrl+"/"+(0,ut.Rl)(this.apiData.images[t.target.dataset.id].path),this.page=parseInt(t.target.dataset.id)+1,this.loadNewPageTableAreas(),this.resizeSelectableColumns(),this.$forceUpdate()},persistTableAreas(){if(pt.Z.has("table_data")&&null!=pt.Z.getItem("table_data")&&""!=pt.Z.getItem("table_data")){let t=pt.Z.getItem("table_data");Dt=JSON.parse(t),Dt&&Dt.table_areas&&Dt.table_areas.length?vt.set(this.page.toString(),JSON.stringify(Dt)):vt.delete(this.page.toString())}else vt.delete(this.page.toString())},loadNewPageTableAreas(){Dt=vt.has(this.page.toString())?JSON.parse(vt.get(this.page.toString())):{columns:[],table_areas:[]},this.tableAreasStr=JSON.stringify(Dt),pt.Z.set("table_data",this.tableAreasStr)},prepareTableMap(t){t&&(vt=new Map,Array.from(t).forEach((t=>{t&&(t.table_areas||t.columns)&&vt.set(t.page.toString(),JSON.stringify(t))})),this.loadNewPageTableAreas())},enableDrawing(t){this.enableEditing=!0;const e=yt("#draw");null===e||void 0===e||e.classList.add("cursor-crosshair"),null===e||void 0===e||e.classList.remove("pointer-events-none"),this.disableColumnEditing()},restrictDrawing(){this.enableEditing=!1;const t=yt("#draw");null===t||void 0===t||t.classList.add("pointer-events-none"),null===t||void 0===t||t.classList.remove("cursor-crosshair")},saveOverlayResult(){this.saveCoordinates(Ct)},saveCoordinates(t){return wt(this,void 0,void 0,(function*(){let e,a=new FormData,i=t.startX/this.imageWidth,s=t.startY/this.imageHeight,l=t.endX/this.imageWidth,o=t.endY/this.imageHeight;a.append("x1",i.toString()),a.append("y1",s.toString()),a.append("x2",l.toString()),a.append("y2",o.toString()),a.append("page",this.page.toString()),a.append("doc_id",this.apiData.doc_id),a.append("pages",JSON.stringify(Dt)),a.append("is_table_training_doc",(!0).toString()),this.showLoading();try{e=yield nt().post(ft.hi.get_table_data,a,{headers:{Authorization:"Bearer "+this.token}})}catch(n){return this.enableDrawing(!0),this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR")),void this.hideLoading()}e.data.tables&&e.data.synonyms?(this.apiData.tables=e.data.tables,this.apiData.synonyms=e.data.synonyms,this.apiData.table_coord={x1:i.toString(),x2:l.toString(),y1:s.toString(),y2:o.toString(),page:this.page.toString()},this.restrictDrawing(),this.$refs["lineItemsRef"].resetlintItems()):this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR")),this.$forceUpdate(),this.hideLoading()}))},windowResize(){this.persistTableAreas();let t=yt("#image_container");this.imageWidth=t.offsetWidth,setTimeout((()=>{St=yt("#screenshot"),St&&(this.imageHeight=St.offsetHeight),this.$forceUpdate(),this.resizeSelectableColumns()}),10)},resizeSelectableColumns(){let t=document.querySelectorAll(".draggable-column");for(var e=0;e<t.length;e++){let a=t[e],i=a.dataset.normalized_value,s=+i*this.imageWidth;this.page==Number(a.dataset.page_no)||"all"==a.dataset.page_no?(a.style.display="block",a.style.left=s.toString()+"px",a.style.height=String(this.imageHeight)+"px"):a.style.display="none"}},addColumnForAll(t){t.stopPropagation();const e=document.querySelectorAll(".draggable-column");if(0!=e.length)for(var a=0;a<e.length;a++){let t=e[a],i=t.dataset.normalized_value,s=+i*this.imageWidth;t.style.left=s.toString()+"px",t.dataset.page_no="all",t.style.display="block"}else this.showErrorToast("No column detected")},disableColumnEditing(){this.enableColumnEditing=!1,this.draggingColumnEl=null,this.deleteColumnInfo=null,document.removeEventListener("pointermove",this.repositionColumn),document.removeEventListener("pointerup",this.columnStopDrag)},addColumn(t){this.enableColumnEditing=!0,this.deleteColumnInfo=null,this.restrictDrawing(),t.stopPropagation();let e=yt("#screenshot_container");St=yt("#screenshot"),this.imageWidth=St.offsetWidth,this.imageHeight=St.offsetHeight;let a=this.getNewColPosOffset(this.page);var i=document.createElement("div");i.className="draggable-column",i.style.height=String(this.imageHeight)+"px",i.style.left=a.toString()+"px",i.dataset.parent_class="screenshot",i.dataset.page_no=void 0!==t.page?t.page:this.page.toString(),i.dataset.normalized_value=(a/this.imageWidth).toString(),e.appendChild(i),i.addEventListener("pointerdown",this.pointerDownDraggableColumn,!1)},getNewColPosOffset(t){let e=0,a=0;const i=yt("#screenshot"),s=document.querySelectorAll(".draggable-column"),l=i.offsetWidth-i.offsetLeft;if(s.length){let a=null;for(var o=0;o<s.length;o++){let e=s[o];t!=Number(e.dataset.page_no)&&"all"!=e.dataset.page_no||(a=e)}a&&(e=parseInt(a.style.left))}return e+25>l&&(e=0),a=e+25,a},removeDraggableColumn(t){this.draggingColumnEl=null,this.deleteColumnInfo=null,t.target.remove()},pointerDownDraggableColumn(t){if(t.preventDefault(),t.target.clicks++,setTimeout((function(){t.target.clicks=0}),400),2===t.target.clicks)return this.removeDraggableColumn(t),void(t.target.clicks=0);this.columnDragStart(t)},columnDragStart(t){let e=t.target.offsetLeft,a=t.target.offsetTop,i=t.clientX,s=t.clientY;this.draggingColumnEl={el:t.target,initX:e,initY:a,mousePressX:i,mousePressY:s},this.deleteColumnInfo={event:t},document.addEventListener("pointermove",this.repositionColumn,!1),document.addEventListener("pointerup",this.columnStopDrag,!1)},columnStopDrag(t){this.draggingColumnEl=null;let e=yt("#image_container"),a=e.querySelectorAll(".draggable-column");for(var i=0;i<a.length;i++){a[i].removeEventListener("pointermove",this.repositionColumn,!1);let t=a[i].style.left.replace("px","");a[i].dataset.normalized_value=(+t/this.imageWidth).toString()}},repositionColumn(t){if(!(this.draggingColumnEl&&this.draggingColumnEl.initX&&this.draggingColumnEl.mousePressX))return;let e=this.draggingColumnEl.el.dataset.parent_class,a=yt("#"+e);if(a){this.deleteColumnInfo=null;var i=a.getBoundingClientRect();t.clientX>=i.left?this.draggingColumnEl.el.style.left=this.draggingColumnEl.initX+t.clientX-this.draggingColumnEl.mousePressX+"px":this.draggingColumnEl.el.style.left=Math.floor(5*a.offsetWidth/100)+"px"}},removeAllColumns(){this.deleteColumnInfo=null,this.draggingColumnEl=null;const t=document.querySelectorAll(".draggable-column");if(0!=t.length)for(var e=0;e<t.length;e++)t[e].remove()},isColumnSelectedForDelete(){return!(!this.deleteColumnInfo||0===Object.keys(this.deleteColumnInfo).length||!this.deleteColumnInfo.event)},removeSelectedColumn(t){this.deleteColumnInfo&&0!==Object.keys(this.deleteColumnInfo).length&&this.deleteColumnInfo.event?(this.removeDraggableColumn(this.deleteColumnInfo.event),this.deleteColumnInfo=null):this.deleteColumnInfo=null},saveTableCoordinates(){return wt(this,void 0,void 0,(function*(){this.persistTableAreas(),this.setRulesForSelectableColumns();let t=[];vt.forEach(((e,a)=>{e&&a&&(Dt=JSON.parse(e),t.push(Object.assign({},{page:a,table_areas:Dt.table_areas,columns:Dt.columns})))}));let e,a=new FormData;a.append("doc_id",this.apiData.doc_id),a.append("table_extraction_data",JSON.stringify(t)),a.append("header_rows_count","1"),a.append("is_table_training_doc",(!0).toString()),this.showLoading();try{e=yield nt().post(ft.hi.get_table_default,a,{headers:{Authorization:"Bearer "+this.token}})}catch(i){return this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR")),void this.hideLoading()}if(!1===e.data.success)return this.showErrorToast(e.data.message),void this.hideLoading();this.setApiResponse(e),this.hideLoading()}))},setApiResponse(t){t.data.tables&&t.data.tables[0].extraction_info&&(this.apiData.tables=t.data.tables,this.apiData["table_data_copy"]=this.apiData.tables,this.prepareTableMap(t.data.tables[0].extraction_info),this.restrictDrawing(),this.$refs["lineItemsRef"].resetlintItems())},setRulesForSelectableColumns(){let t=document.querySelectorAll(".draggable-column");if(!t)return;let e=yt("#screenshot");if(!e)return;let a=e.offsetWidth;for(var i=0;i<this.images.length;i++){let e=(i+1).toString(),l=[];for(var s=0;s<t.length;s++){let i=t[s];if(e==i.dataset.page_no||"all"==i.dataset.page_no){let t=i.style.left.replace("px","");l.push(+t/a)}}l.length>0&&(l=this.sortColumns(l),this.addColumnsToTableMap(l,e))}},sortColumns(t){return t.sort((function(t,e){return t-e})),t},addColumnsToTableMap(t,e){let a={table_areas:[]};vt.has(e)&&(a=JSON.parse(vt.get(e))),a.columns=[t.toString()],vt.set(e,JSON.stringify(a)),pt.Z.set("table_data",JSON.stringify(a))},autoDetectTables(){return wt(this,void 0,void 0,(function*(){this.showLoading();let t,e=new FormData;e.append("doc_id",this.apiData.doc_id),e.append("is_table_training_doc",(!0).toString());try{t=yield nt().post(ft.hi.get_auto_table,e,{headers:{Authorization:"Bearer "+this.token}})}catch(a){return this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR")),void this.hideLoading()}if(!1===t.data.success)return this.showErrorToast(t.data.message),void this.hideLoading();this.setApiResponse(t),this.hideLoading()}))},handleScroll(){},deleteAllExtractedData(){vt=new Map,Dt={columns:[],table_areas:[]},this.apiData.tables&&!this.apiData.tables[0].hasOwnProperty("original_extraction_info")&&this.apiData.tables[0].extraction_info&&(this.apiData.tables[0]["original_extraction_info"]=this.apiData.tables[0].extraction_info),this.apiData.hasOwnProperty("table_data_copy")||(this.apiData["table_data_copy"]=this.apiData.tables),this.apiData.tables=null,this.restrictDrawing(),this.removeAllColumns(),this.$forceUpdate(),Dt={columns:[],table_areas:[]},this.tableAreasStr=JSON.stringify(Dt),pt.Z.set("table_data",this.tableAreasStr),this.$refs["lineItemsRef"].resetlintItems()},currentPage(){return this.page},updateExtractionDataForSave(t,e){if(this.apiData&&this.apiData.tables&&this.apiData.tables[0]&&this.apiData.tables[0].hasOwnProperty("extraction_info"))for(let[a,i]of Object.entries(this.apiData.tables[0].extraction_info))this.apiData.tables[0].extraction_info[a][t]=e},updateTableDataForSave(t){this.apiData&&this.apiData.tables&&this.apiData.tables[0]&&t&&(this.apiData.tables[0].data=t)},updateTableForSave(t){this.apiData&&t&&(this.apiData.tables=t,this.$refs["lineItemsRef"].resetlintItems())},updateReadOnlyFlag(t){this.isReadOnly=t},openLineItemAdvanceSettings(){this.enableDrawing(!1),this.$refs["lineItemsRef"].openAdvanceSettings()},setApiData(t){this.apiData=t,this.$forceUpdate()},revertChanges(){const t=new CustomEvent("revert_changes",{});document.dispatchEvent(t)},handleImageBaseURL(){this.apiData.images[0]&&this.apiData.images[0].path.match(/doc2/g)&&(this.baseUrl="https://fellowkv2.cloudintegration.eu")},zoomOut(){this.imageWidth>200&&(this.imageWidth=this.imageWidth-100,St=yt("#screenshot"),setTimeout((()=>{this.imageHeight=St.offsetHeight,this.resizeSelectableColumns()}),10))},zoomIn(){this.imageWidth=this.imageWidth+100,St=yt("#screenshot"),setTimeout((()=>{this.imageHeight=St.offsetHeight,this.resizeSelectableColumns()}),10)},cleanupDataforApi(t){t&&t.hasOwnProperty("doc_type")&&-1===this.allowedDoctypes.indexOf(t.doc_type)&&t.hasOwnProperty("tables")},saveData(){return wt(this,void 0,void 0,(function*(){let t=this.apiData;this.showLoading(),this.cleanupDataforApi(t),t.hasOwnProperty("table_data_copy")&&delete t["table_data_copy"];let e,a=new FormData;a.append("data",JSON.stringify(t));try{e=yield nt().post(ft.hi.save_table_train_data+this.apiData.doc_id,a,{headers:{Authorization:"Bearer "+this.token}})}catch(i){return this.hideLoading(),void this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR"))}this.hideLoading(),!1===e.data.success?(this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR")),this.showErrorToast(e.data.message)):this.showSuccessToast(this.$t("pages.messages.MSG_SAVE"))}))}},beforeRouteLeave:function(t,e,a){a()},setup(){(0,ct.Z)();let t=[];return{apiData:(0,dt.iH)(t),image:(0,dt.iH)(""),images:(0,dt.iH)(t),baseUrl:"https://api.docbits.com",splitterModel:(0,dt.iH)(60),isReadOnly:(0,dt.iH)(!1),page:(0,dt.iH)(1),tableAreasStr:(0,dt.iH)(""),record_id:(0,dt.iH)(""),token:(0,dt.iH)("")}}});var Et=a(74260),Rt=a(2165),xt=a(80218),Ot=a(5363),At=a(24554),Tt=a(7518),It=a.n(Tt);const Lt=(0,Et.Z)(kt,[["render",lt],["__scopeId","data-v-7373a9f2"]]),Wt=Lt;It()(kt,"components",{QBtn:Rt.Z,QSplitter:xt.Z,QTooltip:Ot.Z,QIcon:At.Z})}}]);