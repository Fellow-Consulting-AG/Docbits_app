"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[4038],{54038:(e,i,t)=>{t.r(i),t.d(i,{default:()=>S});var a=t(83673),s=t(62323);const n=e=>((0,a.dD)("data-v-70b69be6"),e=e(),(0,a.Cn)(),e),o={class:"row"},r={class:"right_section_2a q-pr-sm scrolle-y height-100-85px",id:"image_container"},l={class:"full-width img-magnifier-container",id:"image_scrolle",style:{position:"relative"}},d=n((()=>(0,a._)("div",{class:"img-magnifier-glass"},null,-1))),g=["src","width"],h=["width","height","viewBox"],c={id:"marquee",ref:"marquee",x:"450",y:"420",width:"150",height:"150"},m={id:"boxes",ref:"boxes"},p={class:"max-width-120 q-mt-sm back-white scrolle-y height-100-85px",id:"left_section",ref:"left_section"},w={class:"full-width"},u={class:"row"},f=n((()=>(0,a._)("img",{width:"24",height:"24",src:"zoom_in.svg"},null,-1))),v=n((()=>(0,a._)("img",{width:"24",height:"24",src:"zoom_out.svg"},null,-1))),V=(0,a.Uk)("Zoom Out"),_={class:"row justify-center q-pl-md q-pr-md q-pt-md"},x={class:"secondary-c-text text-h6 text-weight-bold"},F={class:"row"},y={class:"page-numbers center-inner"},b={class:"full-width pages-section-padding"},C=["data-id","src"];function W(e,i,t,n,W,H){const k=(0,a.up)("q-tooltip"),I=(0,a.up)("q-btn"),B=(0,a.up)("q-separator");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",r,[(0,a._)("div",l,[d,(0,a._)("img",{class:"screenshot",src:e.image,width:e.imageWidth,id:"screenshot",ref:"screenshot",draggable:"false",style:(0,s.j5)("margin-left:"+e.imageMarginLeft+"px"),onLoad:i[0]||(i[0]=i=>{e.imageLoaded=!0,e.getImageDetails(!0)})},null,44,g),((0,a.wg)(),(0,a.iD)("svg",{style:(0,s.j5)(["margin-left:"+e.imageMarginLeft+"px",{height:"auto","border-bottom":"5px dotted"}]),width:e.imageWidth,height:e.imageHeight,viewBox:e.viewBox,id:"draw",ref:"draw",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("rect",c,null,512),(0,a._)("g",m,null,512)],12,h))])]),(0,a._)("div",p,[(0,a._)("div",w,[(0,a._)("div",u,[(0,a.Wm)(I,{flat:"",class:"pr-6 pl-6",onClick:e.zoomIn},{default:(0,a.w5)((()=>[f,(0,a.Wm)(k,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.$t("zoom_in")),1)])),_:1})])),_:1},8,["onClick"]),(0,a.Wm)(I,{flat:"",class:"pr-6 pl-6",onClick:e.zoomOut},{default:(0,a.w5)((()=>[v,(0,a.Wm)(k,null,{default:(0,a.w5)((()=>[V])),_:1})])),_:1},8,["onClick"])]),(0,a.Wm)(B),(0,a._)("div",_,[(0,a._)("span",x,(0,s.zw)(e.$t("pages.screen2a.pages")),1)]),(0,a._)("div",F,[(0,a._)("div",y,(0,s.zw)(e.currentPage())+"/"+(0,s.zw)(e.images.length),1)]),(0,a._)("div",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.images,((t,n)=>((0,a.wg)(),(0,a.iD)("img",{"data-id":n,key:n,src:e.baseUrl+"/"+t.path,class:(0,s.C_)(["q-pa-xs shadow-5 full-width q-ma-sm cursor-pointer",n===e.page-1?"active":""]),style:{height:"auto"},onClick:i[1]||(i[1]=(...i)=>e.imageclicked&&e.imageclicked(...i))},null,10,C)))),128))])])],512)])}var H=t(10321),k=t(61959),I=t(78564),B=t(85985),D=t(41891),R=t(55276),T=t(49566),q=t(60727),O=t(61982),z=function(e,i,t,a){function s(e){return e instanceof t?e:new t((function(i){i(e)}))}return new(t||(t=Promise))((function(t,n){function o(e){try{l(a.next(e))}catch(i){n(i)}}function r(e){try{l(a["throw"](e))}catch(i){n(i)}}function l(e){e.done?t(e.value):s(e.value).then(o,r)}l((a=a.apply(e,i||[])).next())}))};const L=document.querySelector.bind(document),Z=(0,a.aZ)({name:"PdfView",mixins:[I.Z,B.Z,O.Z,R.Z],data(){return{isReadOnly:(0,k.iH)(0),pdf_in_window:!1}},mounted(){this.addEvents(),this.init(),window.PdfView=this},unmounted(){this.removeEvents()},methods:{init(){this.initImageArea(),this.setRecordFromCache(),this.images=(0,T.PN)(this.record.images),this.page=opener.FieldValidationView.page,this.image=opener.FieldValidationView.image,this.isReadOnly=opener.FieldValidationView.isReadOnly},getDataFromParent(e){this[e.key]&&(this[e.key]=e.value),e.redraw&&(this.page=opener.FieldValidationView.page,this.restrictDrawing(),this.getImageDetails())},getImageDetails(e){this.imageWidth=e?460:this.screenshot.offsetWidth,this.centerAligneImage(),this.$nextTick((()=>{this.imageHeight=this.screenshot.offsetHeight,this.viewBox="0 0 "+String(this.imageWidth)+" "+String(this.imageHeight),this.removeMagnifier(),this.prepareRectangles()}))},centerAligneImage(){let e=L("#image_container"),i=e.offsetWidth;i>this.imageWidth&&(this.imageMarginLeft=Math.round((i-this.imageWidth)/2))},imageclicked(e){this.image=this.baseUrl+"/"+(0,T.Rl)(this.record.images[e.target.dataset.id].path),this.page=parseInt(e.target.dataset.id)+1,opener.FieldValidationView.page=this.page,opener.FieldValidationView.image=this.image},getOverlayHeadings(){return opener.FieldValidationView.getOverlayHeadings()},getComponentType(){this.componentType=opener.FieldValidationView.componentType},getTextByCoordinates(e){return z(this,void 0,void 0,(function*(){this.cleanRectangles(),opener.FieldValidationView.viewBox=this.viewBox,opener.FieldValidationView.imageWidth=this.imageWidth,opener.FieldValidationView.imageHeight=this.imageHeight,yield opener.FieldValidationView.getTextByCoordinates(e)}))},saveOverlayResult(){this.cleanRectangles(),opener.FieldValidationView.viewBox=this.viewBox,opener.FieldValidationView.imageWidth=this.imageWidth,opener.FieldValidationView.imageHeight=this.imageHeight,opener.FieldValidationView.saveResultWrapper(this.marqueeRect,this.rectCordinate)},selectNextField(e){opener.FieldValidationView.selectNextField(e)},initTempFieldDelete(){opener.FieldValidationView.initTempFieldDelete()},getFieldByIndex(e){return opener.FieldValidationView.getFieldByIndex(e)},enableOrDisableExportButton(){opener.FieldValidationView.enableOrDisableExportButton()},refreshCanvas(){this.removeBordersFromRectangles(),this.removeExistingConfirmationOverlays(),this.getImageDetails()},showConnectionFromRect(e){this.removeBordersFromRectangles(),this.removeExistingConfirmationOverlays(),this.restrictDrawing();const i=e.target.getAttribute("connectionId"),t=e.target;this.scrollInToViewCenter(t),i.startsWith(D.QU)||this.drawOverlay(i,t),t.classList.add("border"),opener.FieldValidationView.dsiplayFieldInToView(i)},proceedForReactFinding(e,i,t){let a=L("#"+e+"_rect");a&&this.scrollInToViewCenter(a),setTimeout((()=>{t?this.highlightRow(a):a?(this.drawOverlay(e,a),a.classList.add("border")):opener.FieldValidationView.proceedIfReactNotFound(i)}),50)},getHTMLField(e){return opener.FieldValidationView.getHTMLField(e)},zoomOut(){this.imageWidth>200&&(this.imageWidth=this.imageWidth-100,setTimeout((()=>{this.getImageDetails()}),10))},zoomIn(){this.imageWidth=this.imageWidth+100,setTimeout((()=>{this.getImageDetails()}),10)}},setup(){const e=(0,q.H_)(),{record:i,has_ai_table:t}=(0,H.Jk)(e),{setRecordFromCache:a}=e,s=(0,q.e0)(),{isConfirmationBoxDisable:n}=(0,H.Jk)(s);let o=[],r={startX:0,startY:0,endX:0,endY:0};const l={x:0,y:0,width:0,height:0,connectionId:""};let d=0,g=0,h=L(".screenshot"),c=L("#marquee"),m=L("#boxes");return{image:(0,k.iH)(""),imageWidth:(0,k.iH)(460),imageHeight:(0,k.iH)(0),imageLoaded:(0,k.iH)(!1),imageMarginLeft:(0,k.iH)(0),viewBox:(0,k.iH)("0 0 0 0"),magnifyGlass:{},isConfirmationBoxDisable:n,images:[],page:(0,k.iH)(1),record:i,has_ai_table:t,rectCordinate:r,marqueeRect:l,screenshot:h,rectangles:o,marquee:c,startX:d,startY:g,boxes:m,componentType:"input",baseUrl:"https://api.docbits.com",setRecordFromCache:a}}});var M=t(74260),E=t(2165),P=t(5363),U=t(65869),A=t(7518),N=t.n(A);const Q=(0,M.Z)(Z,[["render",W],["__scopeId","data-v-70b69be6"]]),S=Q;N()(Z,"components",{QBtn:E.Z,QTooltip:P.Z,QSeparator:U.Z})}}]);