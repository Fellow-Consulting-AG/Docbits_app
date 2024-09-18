"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[8635],{98635:(t,e,a)=>{a.r(e),a.d(e,{default:()=>rt});var i=a(61758),s=a(58790);const l=t=>((0,i.Qi)("data-v-06be9b93"),t=t(),(0,i.jt)(),t),o={class:"row bg-grey-2 q-pl-xl q-pr-md"},n={class:"secondary-c-text text-h6"},r=l((()=>(0,i.Lk)("img",{width:"24",src:"images/back-primary.svg"},null,-1))),d={style:{"vertical-align":"middle","margin-left":"10px","font-size":"20px",cursor:"pointer"}},c={class:"row bg-grey-2 q-pl-xl q-pr-md q-pb-md"},h={class:"max-width-100",id:"left_section",ref:"left_section"},g={class:"full-width bg-white q-ma-sm scroll-area-height"},p={class:"row justify-center q-pl-md q-pr-md q-pt-md"},m={class:"secondary-c-text text-h6 text-weight-bold"},u={class:"full-width left-scroll-area-height scrolle-y q-pa-sm"},f=["data-id","src"],v={class:"right_section q-pl-sm",id:"right_section",ref:"right_section"},b={class:"row"},_={class:"col-xs-12 col-sm-5 col-md-5 col-lg-5 q-px-sm scroll-area-height"},y={class:"bg-white mb-4 image_control_panel"},w={class:"row"},k={class:"panel-left col-sm-6 col-md-6 col-lg-6"},D={class:"row"},L={class:"panel-middle col-sm-1 col-md-1 col-lg-1 mt-8"},x={class:"page-numbers"},I={class:"panel-right col-sm-5 col-md-5 col-lg-5"},P=l((()=>(0,i.Lk)("img",{width:"24",height:"24",src:"images/ocr_icon.svg"},null,-1))),A=l((()=>(0,i.Lk)("img",{width:"24",height:"24",src:"images/loupe.svg"},null,-1))),C={class:"full-width bg-white",id:"image_container",style:{height:"90%"}},q={class:"full-width full-height q-pa-sm scrolle-y",id:"image_scrolle",style:{position:"relative"}},E=["src","width"],M={class:"col-xs-12 col-sm-7 col-md-7 col-lg-7"};function T(t,e,a,l,T,B){const O=(0,i.g2)("q-icon"),W=(0,i.g2)("q-btn"),F=(0,i.g2)("q-tooltip"),G=(0,i.g2)("MediFieldsView"),Q=(0,i.g2)("Loader");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",o,[(0,i.Lk)("div",n,[(0,i.bF)(W,{flat:"",rounded:"","data-cy":"dashboard",color:"primary",to:"/dashboard"},{default:(0,i.k6)((()=>[(0,i.bF)(O,{class:"text-red-13",size:"sm"},{default:(0,i.k6)((()=>[r])),_:1}),(0,i.Lk)("label",d,(0,s.v_)(t.$t("pages.screen2a.dashboard")),1)])),_:1})])]),(0,i.Lk)("div",c,[(0,i.Lk)("div",h,[(0,i.Lk)("div",g,[(0,i.Lk)("div",p,[(0,i.Lk)("span",m,(0,s.v_)(t.$t("pages.screen2a.pages")),1)]),(0,i.Lk)("div",u,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.images,((a,l)=>((0,i.uX)(),(0,i.CE)("img",{"data-id":l,key:l,src:t.baseUrl+"/"+a.path+"?"+t.tokenQueryParam,class:(0,s.C4)(["q-pa-xs shadow-5 full-width q-ma-sm cursor-pointer",l===this.page-1?"active":""]),style:{height:"auto"},onClick:e[0]||(e[0]=(...e)=>t.imageclicked&&t.imageclicked(...e))},null,10,f)))),128))])])],512),(0,i.Lk)("div",v,[(0,i.Lk)("div",b,[(0,i.Lk)("div",_,[(0,i.Lk)("div",y,[(0,i.Lk)("div",w,[(0,i.Lk)("div",k,[(0,i.Lk)("div",D,[(0,i.bF)(W,{id:"menu_btn",round:"",icon:"chevron_right",size:"xs",class:"text-grey-6 toggler-right p-t-40",onClick:e[1]||(e[1]=e=>t.toggleMenu())}),(0,i.eW)(" "+(0,s.v_)(t.apiData.filename),1)])]),(0,i.Lk)("div",L,[(0,i.Lk)("span",x,(0,s.v_)(t.currentPage())+"/"+(0,s.v_)(t.images.length),1)]),(0,i.Lk)("div",I,[(0,i.bF)(W,{flat:"",class:"float-right pr-6 pl-6",onClick:t.viewOCRDocument},{default:(0,i.k6)((()=>[P,(0,i.bF)(F,null,{default:(0,i.k6)((()=>[(0,i.eW)((0,s.v_)(t.$t("ocr_view")),1)])),_:1})])),_:1},8,["onClick"]),(0,i.bF)(W,{flat:"",id:"glassBtn",class:"float-right pr-6 pl-6",onClick:t.startMagnifyGlass},{default:(0,i.k6)((()=>[A,(0,i.bF)(F,null,{default:(0,i.k6)((()=>[(0,i.eW)((0,s.v_)(t.$t("pages.screen2a.magnify")),1)])),_:1})])),_:1},8,["onClick"])])])]),(0,i.Lk)("div",C,[(0,i.Lk)("div",q,[(0,i.Lk)("div",{id:"zoom",style:(0,s.Tr)('background-image: url("'+t.image+' "); top: 51px;left: 506px; background-position: 268.297px 82.6934px;')},null,4),(0,i.Lk)("img",{class:"screenshot",src:t.image+"?"+t.tokenQueryParam,width:t.imageWidth,id:"screenshot",ref:"screenshot",draggable:"false",onLoad:e[2]||(e[2]=(...e)=>t.getImageDetails&&t.getImageDetails(...e))},null,40,E)])])]),(0,i.Lk)("div",M,[t.hasApiData()?((0,i.uX)(),(0,i.Wv)(G,{key:0,data:t.apiData,renderOpenWindoIcon:!0},null,8,["data"])):(0,i.Q3)("",!0)])])],512)]),(0,i.bF)(Q)],64)}var B=a(1659),O=a(24622),W=a(38734),F=a(8420),G=a(46162),Q=a(18505),z=a(14907),$=a(68450),R=a(11470),U=a(96075),H=a(76956),V=a(38909),S=a(94124),X=function(t,e,a,i){function s(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,l){function o(t){try{r(i.next(t))}catch(e){l(e)}}function n(t){try{r(i["throw"](t))}catch(e){l(e)}}function r(t){t.done?a(t.value):s(t.value).then(o,n)}r((i=i.apply(t,e||[])).next())}))};const Z=document.querySelector.bind(document);let N;const j=(0,i.pM)({el:"#app",mixins:[Q.A,O.A],components:{Loader:F.A,MediFieldsView:V["default"]},watch:{},data(){return{page:1,docId:"",imageHeight:0,imageWidth:0,showArticlePage:!1,loading:!1,enableExportButton:!1,magnifyGlass:{},allowedDoctypes:H.Gk,account_block:""}},beforeRouteLeave:function(t,e,a){this.removeMagnifier(),a()},mounted:function(){window.addEventListener("resize",this.windowResize),document.body.addEventListener("click",this.mouseClicked,!0),Z("#image_scrolle").addEventListener("scroll",this.handleScroll),this.init()},unmounted:function(){window.removeEventListener("resize",this.windowResize)},methods:{init(){return X(this,void 0,void 0,(function*(){this.$route.params.id||this.$router.push("/dashboard"),this.docId=this.$route.params.id,yield this.getInvoiceDataByDocId(this.docId),H.B2.includes(this.apiData.status)&&(this.isReadOnly=!0),this.initPage()}))},getInvoiceDataByDocId(t){return X(this,void 0,void 0,(function*(){try{this.showLoading();const e={doc_id:t},a=yield R.M8.getById(e);a.doc_id?this.apiData=a:this.showErrorToast(this.$t("pages.messages.INVALID_DOCUMENT"))}catch(e){this.showErrorToast(this.$t("pages.messages.error_internal_occur"))}finally{this.hideLoading()}}))},goHelp(){window.open("https://docs.cloudintegration.eu/")},initPage(){this.handleImageBaseURL(),this.image=this.baseUrl+"/"+(0,U.v)(this.apiData.images[0].path),this.images=(0,U.m)(this.apiData.images),this.handleLineItemsVisibilty();let t=Z("#image_container");this.imageWidth=t.offsetWidth,this.imageHeight=t.offsetHeight},handleLineItemsVisibilty(){const t=(!0).toString();"true"===t.toLowerCase()&&this.allowedDoctypes.indexOf(this.apiData.doc_type),this.account_block="",(this.apiData.hasOwnProperty("table_blocked")&&1==this.apiData.table_blocked||"true"==this.apiData.table_blocked)&&(this.account_block="table_blocked",this.showArticlePage=!1),(this.apiData.hasOwnProperty("table_extraction_disabled")&&1==this.apiData.table_extraction_disabled||"true"==this.apiData.table_extraction_disabled)&&(this.account_block="table_extraction_disabled",this.showArticlePage=!1),(this.apiData.hasOwnProperty("table_not_supported")&&1==this.apiData.table_not_supported||"true"==this.apiData.table_not_supported)&&(this.account_block="table_not_supported",this.showArticlePage=!1)},imageclicked(t){this.image=this.baseUrl+"/"+(0,U.v)(this.apiData.images[t.target.dataset.id].path),this.page=parseInt(t.target.dataset.id)+1},updateImportJson(t,e,a,i){let s=!1;this.apiData.fields.forEach(((i,l)=>{if(i.name===t){s=!0,i.hasOwnProperty("original")||(i["original"]=Object.assign({},i)),e&&(i.coords=e),a&&(i.page=a),i.is_valid=!0,i.is_validated=!0;let l=this.fields[t];return i.formatted_value=l.formatted_value,i.value=l.value,i.content=l.content,l.hasOwnProperty("api_save")&&l.api_save||(i.value=l.formatted_value),void(i.color="success-border-left")}})),s||(this.apiData.fields.push({}),this.apiData.fields[this.apiData.fields.length-1].name=t,this.apiData.fields[this.apiData.fields.length-1].content=this.fields[t].content,this.apiData.fields[this.apiData.fields.length-1].formatted_value=this.fields[t].formatted_value,this.apiData.fields[this.apiData.fields.length-1].value=this.fields[t].value,this.apiData.fields[this.apiData.fields.length-1].validation_code="",this.apiData.fields[this.apiData.fields.length-1].extraction_method=i,this.apiData.fields[this.apiData.fields.length-1].is_validated=!0,this.apiData.fields[this.apiData.fields.length-1].is_valid=!0,this.apiData.fields[this.apiData.fields.length-1].color="success-border-left",e&&(this.apiData.fields[this.apiData.fields.length-1].coords=e),a&&(this.apiData.fields[this.apiData.fields.length-1].page=a))},convertToUSValue(t){return t.replace(/,/g,".")},convertToDeValue(t){return t.toString().replace(/\./g,",")},setApiData(t){this.apiData=t,this.$forceUpdate()},windowResize(){let t=Z("#image_container");this.imageWidth=t.offsetWidth,this.imageHeight=t.offsetHeight,this.$forceUpdate(),setTimeout((()=>{this.getImageDetails(),this.removeMagnifier()}),20)},handleScroll(){},getImageDetails(){N=Z("#screenshot"),N&&(this.imageWidth=N.offsetWidth,this.imageHeight=N.offsetHeight),this.toggleMenu()},startMagnifyGlass(t){let e=document.getElementById("zoom");if(e.classList.contains("enable-glass"))return;let a=Z(".screenshot");const i=Z("#glassBtn");i.classList.add("glass-active"),e.classList.add("enable-glass"),e.style.backgroundImage="url("+a.src+")",this.magnifyGlass={Ix:a.offsetLeft,Iy:a.offsetTop,Zw:e.offsetWidth,Zh:e.offsetHeight,ratio:a.naturalWidth/a.width},a.addEventListener("pointermove",this.updateMagnifier),e.addEventListener("pointermove",this.updateMagnifier)},updateMagnifier(t){let e=document.getElementById("zoom");if(!e.classList.contains("enable-glass"))return;var a,i,s;t.preventDefault(),a=this.getCursorPos(t),i=a.x,s=a.y,document.body.classList.add("active");let l=50,o=20,n=o,r=l+30;e.style.top=a.y-this.magnifyGlass.Zh/2+l+"px",e.style.left=a.x-this.magnifyGlass.Zw/2+o+"px";let d=(this.magnifyGlass.Ix-i)*this.magnifyGlass.ratio+this.magnifyGlass.Zw/2-n,c=(this.magnifyGlass.Iy-s)*this.magnifyGlass.ratio+this.magnifyGlass.Zh/2-r,h=d+"px "+c+"px";e.style.backgroundPosition=h},getCursorPos(t){var e,a=0,i=0;t=t||window.event;let s=Z(".screenshot");return e=s.getBoundingClientRect(),a=t.pageX-e.left,i=t.pageY-e.top,a-=window.pageXOffset,i-=window.pageYOffset,{x:a,y:i}},removeMagnifier(){const t=Z("#glassBtn");t&&t.classList.remove("glass-active");const e=document.getElementById("zoom");e&&(e.classList.remove("enable-glass"),e.removeEventListener("pointermove",this.updateMagnifier,!1));let a=Z(".screenshot");a&&a.removeEventListener("pointermove",this.updateMagnifier,!1),document.body.classList.remove("active"),this.magnifyGlass=null},mouseClicked(t){this.removeMagnifier()},currentPage(){return this.page},handleImageBaseURL(){this.apiData.images[0]&&this.apiData.images[0].path.match(/doc2/g)&&(this.baseUrl=G.VA)},hasApiData(){return 0!==(0,$.Ns)(this.apiData)},viewOCRDocument(){let t=this.$router.resolve({path:"/ocr-document/"+this.docId+"/"+this.page});window.open(t.href,"_blank","location=yes,toolbar=yes,scrollbars=yes,resizable=yes,left=500,width=1500,height=1000")},toFlowScreen(t){this.$router.push("/doc_flow/"+t)}},setup(){const t=(0,z.A)();let e={},a=[];const i=(0,S._6)(),{tokenQueryParam:s}=(0,B.bP)(i);return i.getTokenQueryParam(),{tokenQueryParam:s,apiData:(0,W.KR)(a),fields:e,image:"",images:a,baseUrl:G.VA,isReadOnly:!1,showNotification(e){t.notify({message:e,color:"primary",position:"top"})}}}});var K=a(12807),Y=a(36914),J=a(56384),tt=a(39150),et=a(50492),at=a(97410),it=a(67156),st=a(42315),lt=a(98582),ot=a.n(lt);const nt=(0,K.A)(j,[["render",T],["__scopeId","data-v-06be9b93"]]),rt=nt;ot()(j,"components",{QToolbar:Y.A,QBtn:J.A,QToolbarTitle:tt.A,QIcon:et.A,QTooltip:at.A,QField:it.A,QTable:st.A})}}]);