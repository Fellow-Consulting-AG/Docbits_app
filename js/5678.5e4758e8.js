"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[5678],{45678:(t,e,a)=>{a.r(e),a.d(e,{default:()=>nt});var i=a(59835),s=a(86970);const l=t=>((0,i.dD)("data-v-78937dfa"),t=t(),(0,i.Cn)(),t),o={class:"row bg-grey-2 q-pl-xl q-pr-md"},n={class:"secondary-c-text text-h6"},d=l((()=>(0,i._)("img",{width:"24",src:"back-primary.svg"},null,-1))),r={style:{"vertical-align":"middle","margin-left":"10px","font-size":"20px",cursor:"pointer"}},c={class:"row bg-grey-2 q-pl-xl q-pr-md q-pb-md"},h={class:"max-width-100",id:"left_section",ref:"left_section"},g={class:"full-width bg-white q-ma-sm scroll-area-height"},p={class:"row justify-center q-pl-md q-pr-md q-pt-md"},m={class:"secondary-c-text text-h6 text-weight-bold"},u={class:"full-width left-scroll-area-height scrolle-y q-pa-sm"},f=["data-id","src"],_={class:"right_section q-pl-sm",id:"right_section",ref:"right_section"},v={class:"row"},w={class:"col-xs-12 col-sm-5 col-md-5 col-lg-5 q-px-sm scroll-area-height"},y={class:"bg-white mb-4 image_control_panel"},b={class:"row"},D={class:"panel-left col-sm-6 col-md-6 col-lg-6"},k={class:"row"},x={class:"panel-middle col-sm-1 col-md-1 col-lg-1 mt-8"},I={class:"page-numbers"},L={class:"panel-right col-sm-5 col-md-5 col-lg-5"},P=l((()=>(0,i._)("img",{width:"24",height:"24",src:"ocr_icon.svg"},null,-1))),C=l((()=>(0,i._)("img",{width:"24",height:"24",src:"loupe.svg"},null,-1))),q={class:"full-width bg-white",id:"image_container",style:{height:"90%"}},z={class:"full-width full-height q-pa-sm scrolle-y",id:"image_scrolle",style:{position:"relative"}},M=["src","width"],Z={class:"col-xs-12 col-sm-7 col-md-7 col-lg-7"};function E(t,e,a,l,E,R){const W=(0,i.up)("q-icon"),O=(0,i.up)("q-btn"),T=(0,i.up)("q-tooltip"),U=(0,i.up)("MediFieldsView"),B=(0,i.up)("Loader");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",o,[(0,i._)("div",n,[t.doc2AppMode?((0,i.wg)(),(0,i.j4)(O,{key:0,flat:"",rounded:"","data-cy":"dashboard",color:"primary",to:"/dashboard"},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{class:"text-red-13",size:"sm"},{default:(0,i.w5)((()=>[d])),_:1}),(0,i._)("label",r,(0,s.zw)(t.$t("pages.screen2a.dashboard")),1)])),_:1})):(0,i.kq)("",!0)])]),(0,i._)("div",c,[(0,i._)("div",h,[(0,i._)("div",g,[(0,i._)("div",p,[(0,i._)("span",m,(0,s.zw)(t.$t("pages.screen2a.pages")),1)]),(0,i._)("div",u,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.images,((a,l)=>((0,i.wg)(),(0,i.iD)("img",{"data-id":l,key:l,src:t.baseUrl+"/"+a.path+"?"+t.tokenQueryParam,class:(0,s.C_)(["q-pa-xs shadow-5 full-width q-ma-sm cursor-pointer",l===this.page-1?"active":""]),style:{height:"auto"},onClick:e[0]||(e[0]=(...e)=>t.imageclicked&&t.imageclicked(...e))},null,10,f)))),128))])])],512),(0,i._)("div",_,[(0,i._)("div",v,[(0,i._)("div",w,[(0,i._)("div",y,[(0,i._)("div",b,[(0,i._)("div",D,[(0,i._)("div",k,[(0,i.Wm)(O,{id:"menu_btn",round:"",icon:"chevron_right",size:"xs",class:"text-grey-6 toggler-right p-t-40",onClick:e[1]||(e[1]=e=>t.toggleMenu())}),(0,i.Uk)(" "+(0,s.zw)(t.apiData.filename),1)])]),(0,i._)("div",x,[(0,i._)("span",I,(0,s.zw)(t.currentPage())+"/"+(0,s.zw)(t.images.length),1)]),(0,i._)("div",L,[(0,i.Wm)(O,{flat:"",class:"float-right pr-6 pl-6",onClick:t.viewOCRDocument},{default:(0,i.w5)((()=>[P,(0,i.Wm)(T,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(t.$t("ocr_view")),1)])),_:1})])),_:1},8,["onClick"]),(0,i.Wm)(O,{flat:"",id:"glassBtn",class:"float-right pr-6 pl-6",onClick:t.startMagnifyGlass},{default:(0,i.w5)((()=>[C,(0,i.Wm)(T,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(t.$t("pages.screen2a.magnify")),1)])),_:1})])),_:1},8,["onClick"])])])]),(0,i._)("div",q,[(0,i._)("div",z,[(0,i._)("div",{id:"zoom",style:(0,s.j5)('background-image: url("'+t.image+' "); top: 51px;left: 506px; background-position: 268.297px 82.6934px;')},null,4),(0,i._)("img",{class:"screenshot",src:t.image+"?"+t.tokenQueryParam,width:t.imageWidth,id:"screenshot",ref:"screenshot",draggable:"false",onLoad:e[2]||(e[2]=(...e)=>t.getImageDetails&&t.getImageDetails(...e))},null,40,M)])])]),(0,i._)("div",Z,[t.hasApiData()?((0,i.wg)(),(0,i.j4)(U,{key:0,data:t.apiData,renderOpenWindoIcon:!0},null,8,["data"])):(0,i.kq)("",!0)])])],512)]),(0,i.Wm)(B)],64)}var R=a(7363),W=a(49990),O=a(60499),T=a(31921),U=a(70501),B=a(19302),G=a(96427),H=a(49341),$=a(65528),A=a(33725),Q=a(96430),S=a(46624),V=function(t,e,a,i){function s(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,l){function o(t){try{d(i.next(t))}catch(e){l(e)}}function n(t){try{d(i["throw"](t))}catch(e){l(e)}}function d(t){t.done?a(t.value):s(t.value).then(o,n)}d((i=i.apply(t,e||[])).next())}))};const N=document.querySelector.bind(document);let j;const F=(0,i.aZ)({el:"#app",mixins:[U.Z,W.Z],components:{Loader:T.Z,MediFieldsView:Q["default"]},watch:{},data(){return{page:1,docId:"",imageHeight:0,imageWidth:0,showArticlePage:!1,loading:!1,enableExportButton:!1,magnifyGlass:{},allowedDoctypes:A.rf,account_block:""}},beforeRouteLeave:function(t,e,a){this.removeMagnifier(),a()},mounted:function(){window.addEventListener("resize",this.windowResize),document.body.addEventListener("click",this.mouseClicked,!0),N("#image_scrolle").addEventListener("scroll",this.handleScroll),window.aa=this,this.init()},unmounted:function(){window.removeEventListener("resize",this.windowResize)},methods:{init(){return V(this,void 0,void 0,(function*(){const t=(!0).toString();"true"===t.toLowerCase()&&(this.$route.params.id||this.$router.push("/dashboard"),this.doc2AppMode=!0),this.docId=this.$route.params.id,yield this.getInvoiceDataByDocId(this.docId),A.at.includes(this.apiData.status)&&(this.isReadOnly=!0),this.initPage()}))},getInvoiceDataByDocId(t){return V(this,void 0,void 0,(function*(){try{this.showLoading();const e={doc_id:t},a=yield H.U0.getById(e);a.doc_id?this.apiData=a:this.showErrorToast(this.$t("pages.messages.INVALID_DOCUMENT"))}catch(e){this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR"))}finally{this.hideLoading()}}))},goHelp(){window.open("https://docs.cloudintegration.eu/")},initPage(){this.handleImageBaseURL(),this.image=this.baseUrl+"/"+(0,$.Rl)(this.apiData.images[0].path),this.images=(0,$.PN)(this.apiData.images),this.handleLineItemsVisibilty();let t=N("#image_container");this.imageWidth=t.offsetWidth,this.imageHeight=t.offsetHeight},handleLineItemsVisibilty(){const t=(!0).toString();"true"===t.toLowerCase()&&this.allowedDoctypes.indexOf(this.apiData.doc_type),this.account_block="",(this.apiData.hasOwnProperty("table_blocked")&&1==this.apiData.table_blocked||"true"==this.apiData.table_blocked)&&(this.account_block="table_blocked",this.showArticlePage=!1),(this.apiData.hasOwnProperty("table_extraction_disabled")&&1==this.apiData.table_extraction_disabled||"true"==this.apiData.table_extraction_disabled)&&(this.account_block="table_extraction_disabled",this.showArticlePage=!1),(this.apiData.hasOwnProperty("table_not_supported")&&1==this.apiData.table_not_supported||"true"==this.apiData.table_not_supported)&&(this.account_block="table_not_supported",this.showArticlePage=!1)},imageclicked(t){this.image=this.baseUrl+"/"+(0,$.Rl)(this.apiData.images[t.target.dataset.id].path),this.page=parseInt(t.target.dataset.id)+1},updateImportJson(t,e,a,i){let s=!1;this.apiData.fields.forEach(((i,l)=>{if(i.name===t){s=!0,i.hasOwnProperty("original")||(i["original"]=Object.assign({},i)),e&&(i.coords=e),a&&(i.page=a),i.is_valid=!0,i.is_validated=!0;let l=this.fields[t];return i.formatted_value=l.formatted_value,i.value=l.value,i.content=l.content,l.hasOwnProperty("api_save")&&l.api_save||(i.value=l.formatted_value),void(i.color="success-border-left")}})),s||(this.apiData.fields.push({}),this.apiData.fields[this.apiData.fields.length-1].name=t,this.apiData.fields[this.apiData.fields.length-1].content=this.fields[t].content,this.apiData.fields[this.apiData.fields.length-1].formatted_value=this.fields[t].formatted_value,this.apiData.fields[this.apiData.fields.length-1].value=this.fields[t].value,this.apiData.fields[this.apiData.fields.length-1].validation_code="",this.apiData.fields[this.apiData.fields.length-1].extraction_method=i,this.apiData.fields[this.apiData.fields.length-1].is_validated=!0,this.apiData.fields[this.apiData.fields.length-1].is_valid=!0,this.apiData.fields[this.apiData.fields.length-1].color="success-border-left",e&&(this.apiData.fields[this.apiData.fields.length-1].coords=e),a&&(this.apiData.fields[this.apiData.fields.length-1].page=a))},convertToUSValue(t){return t.replace(/,/g,".")},convertToDeValue(t){return t.toString().replace(/\./g,",")},setApiData(t){this.apiData=t,this.$forceUpdate()},windowResize(){let t=N("#image_container");this.imageWidth=t.offsetWidth,this.imageHeight=t.offsetHeight,this.$forceUpdate(),setTimeout((()=>{this.getImageDetails(),this.removeMagnifier()}),20)},handleScroll(){},getImageDetails(){j=N("#screenshot"),j&&(this.imageWidth=j.offsetWidth,this.imageHeight=j.offsetHeight),this.toggleMenu()},startMagnifyGlass(t){let e=document.getElementById("zoom");if(e.classList.contains("enable-glass"))return;let a=N(".screenshot");const i=N("#glassBtn");i.classList.add("glass-active"),e.classList.add("enable-glass"),e.style.backgroundImage="url("+a.src+")",this.magnifyGlass={Ix:a.offsetLeft,Iy:a.offsetTop,Zw:e.offsetWidth,Zh:e.offsetHeight,ratio:a.naturalWidth/a.width},a.addEventListener("pointermove",this.updateMagnifier),e.addEventListener("pointermove",this.updateMagnifier)},updateMagnifier(t){let e=document.getElementById("zoom");if(!e.classList.contains("enable-glass"))return;var a,i,s;t.preventDefault(),a=this.getCursorPos(t),i=a.x,s=a.y,document.body.classList.add("active");let l=50,o=20,n=o,d=l+30;e.style.top=a.y-this.magnifyGlass.Zh/2+l+"px",e.style.left=a.x-this.magnifyGlass.Zw/2+o+"px";let r=(this.magnifyGlass.Ix-i)*this.magnifyGlass.ratio+this.magnifyGlass.Zw/2-n,c=(this.magnifyGlass.Iy-s)*this.magnifyGlass.ratio+this.magnifyGlass.Zh/2-d,h=r+"px "+c+"px";e.style.backgroundPosition=h},getCursorPos(t){var e,a=0,i=0;t=t||window.event;let s=N(".screenshot");return e=s.getBoundingClientRect(),a=t.pageX-e.left,i=t.pageY-e.top,a-=window.pageXOffset,i-=window.pageYOffset,{x:a,y:i}},removeMagnifier(){const t=N("#glassBtn");t&&t.classList.remove("glass-active");const e=document.getElementById("zoom");e&&(e.classList.remove("enable-glass"),e.removeEventListener("pointermove",this.updateMagnifier,!1));let a=N(".screenshot");a&&a.removeEventListener("pointermove",this.updateMagnifier,!1),document.body.classList.remove("active"),this.magnifyGlass=null},mouseClicked(t){this.removeMagnifier()},currentPage(){return this.page},handleImageBaseURL(){this.apiData.images[0]&&this.apiData.images[0].path.match(/doc2/g)&&(this.baseUrl="https://dev.fellowkv2.cloudintegration.eu")},hasApiData(){return 0!==(0,G.v7)(this.apiData)},viewOCRDocument(){let t=this.$router.resolve({path:"/ocr-document/"+this.docId+"/"+this.page});window.open(t.href,"_blank","location=yes,toolbar=yes,scrollbars=yes,resizable=yes,left=500,width=1500,height=1000")},toFlowScreen(t){this.$router.push("/doc_flow/"+t)}},setup(){const t=(0,B.Z)();let e={},a=[];const i=(0,S.wX)(),{tokenQueryParam:s}=(0,R.Jk)(i);return i.getTokenQueryParam(),{tokenQueryParam:s,apiData:(0,O.iH)(a),fields:e,image:"",images:a,baseUrl:"https://dev.api.docbits.com",isReadOnly:!1,doc2AppMode:(0,O.iH)(!1),showNotification(e){t.notify({message:e,color:"primary",position:"top"})}}}});var Y=a(7683),X=a(51663),J=a(68879),K=a(81973),tt=a(22857),et=a(46858),at=a(18149),it=a(61450),st=a(69984),lt=a.n(st);const ot=(0,Y.Z)(F,[["render",E],["__scopeId","data-v-78937dfa"]]),nt=ot;lt()(F,"components",{QToolbar:X.Z,QBtn:J.Z,QToolbarTitle:K.Z,QIcon:tt.Z,QTooltip:et.Z,QField:at.Z,QTable:it.Z})}}]);