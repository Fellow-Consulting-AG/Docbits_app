"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[4684],{44684:(e,i,t)=>{t.r(i),t.d(i,{default:()=>U});var a=t(61758),s=t(58790);const n=e=>((0,a.Qi)("data-v-56946ff5"),e=e(),(0,a.jt)(),e),o={class:"row"},r={class:"right_section_pdf_view scrolle-y height-100-140px",id:"image_container"},l={class:"full-width img-magnifier-container",id:"image_scrolle",style:{position:"relative"}},d=n((()=>(0,a.Lk)("div",{class:"img-magnifier-glass"},null,-1))),g=["src","width"],h=["width","height","viewBox"],c={id:"marquee",ref:"marquee",x:"450",y:"420",width:"150",height:"150"},m={id:"boxes",ref:"boxes"},u={class:"max-width-120 scrolle-y",id:"left_section",ref:"left_section"},p={class:"full-width"},w={class:"column"},f=n((()=>(0,a.Lk)("img",{width:"24",height:"24",src:"images/zoom_in.svg"},null,-1))),v=n((()=>(0,a.Lk)("img",{width:"24",height:"24",src:"images/zoom_out.svg"},null,-1))),V={class:"row justify-center q-pl-md q-pr-md q-pt-md"},F={class:"secondary-c-text text-h6 text-weight-bold"},y={class:"row"},k={class:"page-numbers center-inner"},x={class:"full-width"},b=["data-id","src"];function _(e,i,t,n,_,R){const C=(0,a.g2)("q-tooltip"),L=(0,a.g2)("q-btn"),T=(0,a.g2)("q-separator");return(0,a.uX)(),(0,a.CE)("div",o,[(0,a.Lk)("div",r,[(0,a.Lk)("div",l,[d,(0,a.Lk)("img",{class:"screenshot",src:e.image+"?"+e.tokenQueryParam,width:e.imageWidth,id:"screenshot",ref:"screenshot",draggable:"false",style:(0,s.Tr)("margin-left:"+e.imageMarginLeft+"px"),onLoad:i[0]||(i[0]=i=>{e.imageLoaded=!0,e.getImageDetails(!0)})},null,44,g),((0,a.uX)(),(0,a.CE)("svg",{style:(0,s.Tr)(["margin-left:"+e.imageMarginLeft+"px",{height:"auto","border-bottom":"5px dotted"}]),width:e.imageWidth,height:e.imageHeight,viewBox:e.viewBox,id:"draw",ref:"draw",xmlns:"http://www.w3.org/2000/svg"},[(0,a.Lk)("rect",c,null,512),(0,a.Lk)("g",m,null,512)],12,h))])]),(0,a.Lk)("div",u,[(0,a.Lk)("div",p,[(0,a.Lk)("div",w,[(0,a.bF)(L,{flat:"",class:"pr-6 pl-6",onClick:e.zoomIn},{default:(0,a.k6)((()=>[f,(0,a.bF)(C,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,s.v_)(e.$t("zoom_in")),1)])),_:1})])),_:1},8,["onClick"]),(0,a.bF)(L,{flat:"",class:"pr-6 pl-6",onClick:e.zoomOut},{default:(0,a.k6)((()=>[v,(0,a.bF)(C,null,{default:(0,a.k6)((()=>[(0,a.eW)("Zoom Out")])),_:1})])),_:1},8,["onClick"])]),(0,a.bF)(T),(0,a.Lk)("div",V,[(0,a.Lk)("span",F,(0,s.v_)(e.$t("pages.screen2a.pages")),1)]),(0,a.Lk)("div",y,[(0,a.Lk)("div",k,(0,s.v_)(e.currentPage())+"/"+(0,s.v_)(e.images.length),1)]),(0,a.Lk)("div",x,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.images,((t,n)=>((0,a.uX)(),(0,a.CE)("img",{"data-id":n,key:n,src:e.baseUrl+"/"+t.path+"?"+e.tokenQueryParam,class:(0,s.C4)(["q-pa-xs shadow-5 full-width q-ma-sm cursor-pointer",n===e.page-1?"active":""]),style:{height:"auto"},onClick:i[1]||(i[1]=(...i)=>e.imageclicked&&e.imageclicked(...i))},null,10,b)))),128))])])],512)])}var R=t(1659),C=t(38734),L=t(46162),T=t(96056),I=t(64233),W=t(76956),B=t(42300),q=t(96075),D=t(4924),O=t(94124),A=function(e,i,t,a){function s(e){return e instanceof t?e:new t((function(i){i(e)}))}return new(t||(t=Promise))((function(t,n){function o(e){try{l(a.next(e))}catch(i){n(i)}}function r(e){try{l(a["throw"](e))}catch(i){n(i)}}function l(e){e.done?t(e.value):s(e.value).then(o,r)}l((a=a.apply(e,i||[])).next())}))};const H=document.querySelector.bind(document),P=(0,a.pM)({name:"PdfView",mixins:[T.A,I.A,D.A,B.A],data(){return{isReadOnly:(0,C.KR)(0),pdf_in_window:!1,pdf_data:(0,C.KR)({})}},mounted(){this.addEvents(),this.init(),window.PdfView=this},unmounted(){this.removeEvents()},methods:{init(){this.initImageArea(),this.setRecordFromCache(),this.images=(0,q.m)(this.record.images),this.page=opener.FieldsView.page,this.image=this.baseUrl+"/"+this.images[this.page-1].path+this.tokenQueryParam,this.isReadOnly=opener.FieldsView.isReadOnly},getDataFromParent(e){this[e.key]&&(this[e.key]=e.value),e.redraw&&(this.page=opener.FieldValidationView.page,this.restrictDrawing(),this.getImageDetails())},getImageDetails(e){this.imageWidth=e?.65*document.documentElement.clientHeight:this.screenshot.offsetWidth,this.centerAligneImage(),this.$nextTick((()=>{this.imageHeight=this.screenshot.offsetHeight,this.viewBox="0 0 "+String(this.imageWidth)+" "+String(this.imageHeight),this.removeMagnifier(),this.prepareRectangles()}))},centerAligneImage(){let e=H("#image_container"),i=e.offsetWidth;i>this.imageWidth&&(this.imageMarginLeft=Math.round((i-this.imageWidth)/2))},imageclicked(e){this.image=this.baseUrl+"/"+(0,q.v)(this.record.images[e.target.dataset.id].path),this.page=parseInt(e.target.dataset.id)+1,opener.FieldValidationView.page=this.page,opener.FieldValidationView.image=this.image},getOverlayHeadings(){return opener.FieldValidationView.getOverlayHeadings()},getComponentType(){this.componentType=opener.FieldValidationView.componentType},getTextByCoordinates(e){return A(this,void 0,void 0,(function*(){this.cleanRectangles(),opener.FieldValidationView.viewBox=this.viewBox,opener.FieldValidationView.imageWidth=this.imageWidth,opener.FieldValidationView.imageHeight=this.imageHeight,yield opener.FieldValidationView.getTextByCoordinates(e)}))},saveOverlayResult(){this.cleanRectangles(),opener.FieldValidationView.viewBox=this.viewBox,opener.FieldValidationView.imageWidth=this.imageWidth,opener.FieldValidationView.imageHeight=this.imageHeight,opener.FieldValidationView.saveResultWrapper(this.marqueeRect,this.rectCordinate)},selectNextField(e){opener.FieldValidationView.selectNextField(e)},initTempFieldDelete(){opener.FieldValidationView.initTempFieldDelete()},getFieldByIndex(e){return opener.FieldValidationView.getFieldByIndex(e)},enableOrDisableExportButton(){opener.FieldValidationView.enableOrDisableExportButton()},refreshCanvas(){this.removeBordersFromRectangles(),this.removeExistingConfirmationOverlays(),this.getImageDetails()},showConnectionFromRect(e){this.removeBordersFromRectangles(),this.removeExistingConfirmationOverlays(),this.restrictDrawing();const i=e.target.getAttribute("connectionId"),t=e.target;this.scrollInToViewCenter(t),i.startsWith(W.Al)||this.drawOverlay(i,t),t.classList.add("border"),opener.FieldValidationView.dsiplayFieldInToView(i)},proceedForReactFinding(e,i,t){let a=H("#"+e+"_rect");a&&this.scrollInToViewCenter(a),setTimeout((()=>{t?this.highlightRow(a):a?(this.drawOverlay(e,a),a.classList.add("border")):opener.FieldValidationView.proceedIfReactNotFound(i)}),50)},getHTMLField(e){return opener.FieldValidationView.getHTMLField(e)},zoomOut(){this.imageWidth>200&&(this.imageWidth=this.imageWidth-100,setTimeout((()=>{this.getImageDetails()}),10))},zoomIn(){this.imageWidth=this.imageWidth+100,setTimeout((()=>{this.getImageDetails()}),10)}},setup(){const e=(0,O.q3)(),{record:i,has_ai_table:t}=(0,R.bP)(e),{setRecordFromCache:a}=e,s=(0,O.XB)(),{isConfirmationBoxDisable:n}=(0,R.bP)(s),o=(0,O._6)(),{tokenQueryParam:r}=(0,R.bP)(o);o.getTokenQueryParam();let l=[],d={startX:0,startY:0,endX:0,endY:0};const g={x:0,y:0,width:0,height:0,connectionId:""};let h=0,c=0,m=H(".screenshot"),u=H("#marquee"),p=H("#boxes");return{tokenQueryParam:r,image:(0,C.KR)(""),imageWidth:(0,C.KR)(460),imageHeight:(0,C.KR)(0),imageLoaded:(0,C.KR)(!1),imageMarginLeft:(0,C.KR)(0),viewBox:(0,C.KR)("0 0 0 0"),magnifyGlass:{},isConfirmationBoxDisable:n,images:[],page:(0,C.KR)(1),record:i,has_ai_table:t,rectCordinate:d,marqueeRect:g,screenshot:m,rectangles:l,marquee:u,startX:h,startY:c,boxes:p,componentType:"input",baseUrl:L.VA,field_view_mode:(0,C.KR)("validate"),setRecordFromCache:a}}});var E=t(12807),K=t(56384),Q=t(97410),M=t(10386),X=t(98582),z=t.n(X);const S=(0,E.A)(P,[["render",_],["__scopeId","data-v-56946ff5"]]),U=S;z()(P,"components",{QBtn:K.A,QTooltip:Q.A,QSeparator:M.A})}}]);