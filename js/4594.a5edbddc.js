"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[4594],{34594:(t,e,o)=>{o.r(e),o.d(e,{default:()=>P});var n=o(61758);const a={class:"container",style:{display:"flex",width:"100%"}},i={style:{display:"flex","margin-right":"13px"}};function r(t,e,o,r,s,l){const c=(0,n.g2)("q-avatar"),u=(0,n.g2)("q-space"),p=(0,n.g2)("q-btn"),h=(0,n.g2)("q-icon"),d=(0,n.g2)("LanguageDropdown"),f=(0,n.g2)("AccountSettingDropdown"),g=(0,n.g2)("q-toolbar"),b=(0,n.g2)("SubscriptionAlert"),y=(0,n.g2)("q-header"),m=(0,n.g2)("newUpdateError"),k=(0,n.g2)("router-view"),w=(0,n.g2)("q-page-container"),_=(0,n.g2)("q-layout"),A=(0,n.g2)("Loader");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(_,{view:"hHh LpR fFf"},{default:(0,n.k6)((()=>[(0,n.bF)(y,null,{default:(0,n.k6)((()=>[(0,n.bF)(g,{class:"toolbar full-width"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",a,[(0,n.bF)(c,{class:"fellowpro-logo cursor-pointer fixed-left",style:{"margin-left":"12px","margin-top":"2px"}},{default:(0,n.k6)((()=>[(0,n.Lk)("img",{src:"doc2light/main_layout/LOGO-06.png",onClick:e[0]||(e[0]=(...e)=>t.goHome&&t.goHome(...e)),target:"_blank"})])),_:1}),(0,n.bF)(u),(0,n.Lk)("span",i,[(0,n.bF)(p,{flat:"",class:"line-height",color:"primary text-white ",label:t.$t("layout.support"),onClick:e[1]||(e[1]=e=>t.supportIntegration()),target:"_blank"},null,8,["label"]),t.showIcons?((0,n.uX)(),(0,n.Wv)(h,{key:0,style:{padding:"7px"},name:"fas fa-dove",onclick:"location.href = 'https://twitter.com/FConsultingAG';"})):(0,n.Q3)("",!0),t.showIcons?((0,n.uX)(),(0,n.Wv)(h,{key:1,style:{padding:"7px"},name:"fab fa-facebook-f",onclick:"location.href = 'https://www.facebook.com/fellowconsulting';"})):(0,n.Q3)("",!0),t.showIcons?((0,n.uX)(),(0,n.Wv)(h,{key:2,style:{padding:"7px"},name:"fab fa-linkedin",onclick:"location.href = 'https://www.linkedin.com/company/fellow-consulting-ag/';"})):(0,n.Q3)("",!0),(0,n.bF)(d),(0,n.bF)(f)])])])),_:1}),t.show_expiry_alert?((0,n.uX)(),(0,n.Wv)(b,{key:0})):(0,n.Q3)("",!0)])),_:1}),(0,n.bF)(w,null,{default:(0,n.k6)((()=>[(0,n.bF)(m),((0,n.uX)(),(0,n.Wv)(k,{key:t.$route.fullPath}))])),_:1})])),_:1}),(0,n.bF)(A)],64)}var s=o(1659),l=o(24622),c=o(38734),u=o(89156),p=o(1595),h=o(18505),d=o(46162),f=o(63008),g=o(48156),b=o(4957),y=o(17186),m=function(t,e,o,n){function a(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,i){function r(t){try{l(n.next(t))}catch(e){i(e)}}function s(t){try{l(n["throw"](t))}catch(e){i(e)}}function l(t){t.done?o(t.value):a(t.value).then(r,s)}l((n=n.apply(t,e||[])).next())}))};const k=(0,n.pM)({name:"MainLayout",mounted:function(){this.fillDocTypeAndSubTypesListIfEmpty(),this.initFontSize()},methods:{goHome(){this.$router.push("/dashboard")},applyFilter(){return m(this,void 0,void 0,(function*(){this.queryParams="",this.quickFilterMap.clear(),this.queryParams+="?limit=18",this.queryParams+="&skip="+this.doc_skip.toString(),""!==this.full_text_search_filter&&(this.quickFilterMap.set("fullTextSearch",this.full_text_search_filter),this.queryParams+="&content_filter="+this.full_text_search_filter),yield this.setDocumentsDashboard(this.queryParams),this.prepareDashboard()}))},supportIntegration(){window.open(this.supportURL)},gotoSettings(){this.$router.push("/settings")},gotoCloud(){this.$router.push("/dashboard")}},data(){return{showIcons:!1,supportURL:d.cK}},components:{Loader:u.A,LanguageDropdown:g.A,AccountSettingDropdown:b.A,SubscriptionAlert:y.A},mixins:[h.A,l.A],setup(){const t=(0,p.cY)(),{fillDocTypeAndSubTypesListIfEmpty:e}=t,o=(0,f.GX)(),{setDocumentsDashboard:n,prepareDashboard:a}=o,i=(0,s.bP)(o),r=(0,p.Ml)(),{initFontSize:l}=r;return{doc_skip:(0,c.KR)(0),setDocumentsDashboard:n,queryParams:(0,c.KR)(""),document_store:(0,c.KR)(o),prepareDashboard:a,quickFilterMap:(0,c.KR)(new Map),fillDocTypeAndSubTypesListIfEmpty:e,apidata:(0,c.KR)(i),initFontSize:l,full_text_search_filter:(0,c.KR)(""),document_list:(0,c.KR)({})}}});var w=o(12807),_=o(62008),A=o(8416),v=o(36914),F=o(3952),x=o(93676),q=o(56384),D=o(50492),L=o(45205),S=o(98582),Q=o.n(S);const I=(0,w.A)(k,[["render",r],["__scopeId","data-v-9c0d21e2"]]),P=I;Q()(k,"components",{QLayout:_.A,QHeader:A.A,QToolbar:v.A,QAvatar:F.A,QSpace:x.A,QBtn:q.A,QIcon:D.A,QPageContainer:L.A})}}]);