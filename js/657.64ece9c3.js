"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[657],{657:(e,a,l)=>{l.r(a),l.d(a,{default:()=>U});var t=l(61758),o=l(58790);const n=e=>((0,t.Qi)("data-v-0c11a68f"),e=e(),(0,t.jt)(),e),i={key:0},r={class:"container"},s={class:"underline"},d={class:"q-mt-md q-mr-sm"},c=n((()=>(0,t.Lk)("br",null,null,-1))),p={class:"q-mt-md q-mr-sm"},u={href:"https://cloudintegration.eu/agreement",target:"_blank"},g=n((()=>(0,t.Lk)("br",null,null,-1))),b={class:"text-center"},m=n((()=>(0,t.Lk)("img",{src:"images/up-arrow.svg",width:"100","aria-hidden":"true"},null,-1))),v={style:{padding:"20px"}},h={class:"text-white"},k={class:"q-mt-md q-mr-sm"},w={class:"row items-center no-wrap"},f={class:"row items-center no-wrap"},L={key:1};function _(e,a,l,n,_,T){const F=(0,t.g2)("q-toolbar-title"),y=(0,t.g2)("q-tab"),A=(0,t.g2)("q-tabs"),x=(0,t.g2)("q-toolbar"),q=(0,t.g2)("q-checkbox"),C=(0,t.g2)("q-icon"),$=(0,t.g2)("q-tooltip"),Q=(0,t.g2)("q-file"),V=(0,t.g2)("q-btn-toggle"),D=(0,t.g2)("desktop"),R=(0,t.g2)("mobile"),E=(0,t.g2)("Loader");return(0,t.uX)(),(0,t.CE)(t.FK,null,[e.isMobile()?((0,t.uX)(),(0,t.CE)("div",L,[(0,t.bF)(R)])):((0,t.uX)(),(0,t.CE)("div",i,[(0,t.bF)(D,null,{default:(0,t.k6)((()=>[(0,t.bF)(x,{class:"secondary-toolbar"},{default:(0,t.k6)((()=>[(0,t.bF)(F,{class:"container text-white"},{default:(0,t.k6)((()=>[(0,t.eW)((0,o.v_)(e.$t("pages.land.caption")),1)])),_:1}),(0,t.bF)(A,{modelValue:e.selectedTab,"onUpdate:modelValue":a[0]||(a[0]=a=>e.selectedTab=a),"inline-label":"",class:"secondary-toolbar text-white shadow-2"},{default:(0,t.k6)((()=>[(0,t.bF)(y,{name:"invoice",icon:"receipt",label:e.$t("pages.land.invoice_tab"),onClick:e.goToInvoice},null,8,["label","onClick"]),(0,t.bF)(y,{name:"receipt",icon:"receipt_long",label:e.$t("pages.land.receipt")},null,8,["label"])])),_:1},8,["modelValue"])])),_:1}),(0,t.Lk)("div",r,[(0,t.Lk)("div",null,[(0,t.Lk)("h4",s,(0,o.v_)(e.$t("pages.land.upload")),1)]),(0,t.Lk)("div",d,[(0,t.Lk)("p",null,[(0,t.eW)((0,o.v_)(e.$t("pages.land.upload2")),1),c])]),(0,t.Lk)("div",p,[(0,t.Lk)("p",null,[(0,t.eW)((0,o.v_)(e.$t("pages.land.msa"))+" ",1),(0,t.Lk)("a",u,(0,o.v_)(e.$t("pages.land.msa2")),1),(0,t.eW)((0,o.v_)(e.$t("pages.land.msa3")),1),g])]),(0,t.Lk)("div",b,[(0,t.bF)(q,{modelValue:e.val,"onUpdate:modelValue":a[1]||(a[1]=a=>e.val=a),onClick:a[2]||(a[2]=a=>e.isHidden=!e.isHidden),label:e.$t("pages.land.checkbox")},null,8,["modelValue","label"])]),e.isHidden?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("div",{key:0,class:"drag-area text-center",style:{width:"100%",padding:"20px"},id:"box-droppable",onDrop:a[4]||(a[4]=(...a)=>e.drop&&e.drop(...a)),onDragover:a[5]||(a[5]=(...a)=>e.allowDrop&&e.allowDrop(...a)),onDragleave:a[6]||(a[6]=(...a)=>e.dragLeave&&e.dragLeave(...a))},[m,(0,t.Lk)("div",v,(0,o.v_)(e.$t("pages.land.dragndrop")),1),(0,t.bF)(Q,{style:{width:"200px",margin:"auto","white-space":"nowrap"},color:"white","label-color":"white","bg-color":"primary",filled:"",onChange:e.uploadFile,modelValue:e.model,"onUpdate:modelValue":a[3]||(a[3]=a=>e.model=a),label:e.$t("pages.land.browse")},{prepend:(0,t.k6)((()=>[(0,t.bF)(C,{name:"attachment"})])),file:(0,t.k6)((({index:e,file:a})=>[(0,t.Lk)("div",h,(0,o.v_)(a.name),1),(0,t.bF)($,null,{default:(0,t.k6)((()=>[(0,t.eW)((0,o.v_)(a.name),1)])),_:2},1024),(0,t.Q3)("",!0)])),_:1},8,["onChange","modelValue","label"])],32)),(0,t.Lk)("div",k,[(0,t.Lk)("p",null,(0,o.v_)(e.$t("pages.land.choose")),1)]),(0,t.bF)(V,{modelValue:e.model,"onUpdate:modelValue":a[9]||(a[9]=a=>e.model=a),push:"",rounded:"","justify-center":"","toggle-color":"white",options:[{value:"one",slot:"one"},{value:"two",slot:"two"}]},{one:(0,t.k6)((()=>[(0,t.Lk)("div",w,[(0,t.Lk)("img",{src:"images/Pizza_invoice.png",width:"500","aria-hidden":"true",onClick:a[7]||(a[7]=(...a)=>e.goRecipt&&e.goRecipt(...a))})])])),two:(0,t.k6)((()=>[(0,t.Lk)("div",f,[(0,t.Lk)("img",{src:"images/Drinks_invoice.png",width:"500","aria-hidden":"true",onClick:a[8]||(a[8]=(...a)=>e.goRecipt&&e.goRecipt(...a))})])])),_:1},8,["modelValue"])])])),_:1})])),(0,t.bF)(E)],64)}var T=l(14907),F=l(38734),y=(l(82303),l(18505)),A=l(8420),x=l(24622),q=(l(46162),function(e,a,l,t){function o(e){return e instanceof l?e:new l((function(a){a(e)}))}return new(l||(l=Promise))((function(l,n){function i(e){try{s(t.next(e))}catch(a){n(a)}}function r(e){try{s(t["throw"](e))}catch(a){n(a)}}function s(e){e.done?l(e.value):o(e.value).then(i,r)}s((t=t.apply(e,a||[])).next())}))});const C=(0,t.pM)({components:{Loader:A.A},mixins:[y.A,x.A],data:()=>({isHidden:!0}),setup(){(0,T.A)();return{model:(0,F.KR)(null),val:(0,F.KR)(!1),selectedTab:(0,F.KR)("receipt")}},el:"#app",methods:{isMobile(){if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))return!1;window.alert("Following app is not supported on mobile devices! Please use the desktop version!")},goRecipt(){this.$router.push("/receipt")},uploadFile(e){let a=e.target.files||e.dataTransfer.files;a||this.showErrorToast("No file selected."),this.uploadFilee(a[0])},allowDrop(e){e.preventDefault(),e.currentTarget.classList.add("bg-grey-5"),e.currentTarget.classList.add("bd-shadow")},drop(e){e.preventDefault(),e.currentTarget.classList.remove("bg-grey-5"),e.currentTarget.classList.remove("bd-shadow"),e.dataTransfer.files.length>1?this.showErrorToast("Only one file is allowed to upload at a time."):this.uploadFilee(e.dataTransfer.files[0])},dragLeave(e){e.currentTarget.classList.remove("bg-grey-5"),e.currentTarget.classList.remove("bd-shadow")},uploadFilee(e){return q(this,void 0,void 0,(function*(){"application/pdf"===e.type?this.goRecipt():this.showErrorToast("Only pdf files are allowed to upload...")}))},goToInvoice(){this.$router.push("/")}}});var $=l(12807),Q=l(36914),V=l(39150),D=l(42980),R=l(10327),E=l(80460),P=l(56384),I=l(99980),M=l(50492),W=l(97410),B=l(28975),H=l(98582),K=l.n(H);const O=(0,$.A)(C,[["render",_],["__scopeId","data-v-0c11a68f"]]),U=O;K()(C,"components",{QToolbar:Q.A,QToolbarTitle:V.A,QTabs:D.A,QTab:R.A,QCheckbox:E.A,QBtn:P.A,QFile:I.A,QIcon:M.A,QTooltip:W.A,QBtnToggle:B.A})}}]);