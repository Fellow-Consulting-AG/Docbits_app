"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[6170],{86170:(e,t,a)=>{a.r(t),a.d(t,{default:()=>H});var i=a(83673),s=a(62323);const n=e=>((0,i.dD)("data-v-050099ee"),e=e(),(0,i.Cn)(),e),o={class:"row back mt-20"},r={class:"secondary-c-text text-h6"},d=n((()=>(0,i._)("img",{width:"24",src:"back_new.svg"},null,-1))),l={style:{"vertical-align":"middle","margin-left":"10px","font-size":"20px",cursor:"pointer"}},g={class:"container"},_={class:"full-width"},c=n((()=>(0,i._)("img",{src:"fields.svg",class:"q-pr-sm q-pl-sm",width:"40"},null,-1))),u=(0,i.Uk)(" Regex ");function h(e,t,a,n,h,p){const y=(0,i.up)("SubHeader"),x=(0,i.up)("q-icon"),m=(0,i.up)("q-btn"),f=(0,i.up)("q-item-section"),w=(0,i.up)("ManageRegexes"),v=(0,i.up)("q-item"),b=(0,i.up)("q-list"),R=(0,i.up)("Loader");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(y,{name:"filter_regex",label:e.$t("filter_regexes")},null,8,["label"]),(0,i._)("div",o,[(0,i._)("div",r,[(0,i.Wm)(m,{flat:"",rounded:"",color:"primary",to:"/settings"},{default:(0,i.w5)((()=>[(0,i.Wm)(x,{class:"text-red-13",size:"sm"},{default:(0,i.w5)((()=>[d])),_:1}),(0,i._)("label",l,(0,s.zw)(e.$t("layout.settings")),1)])),_:1})])]),(0,i._)("div",g,[(0,i._)("div",_,[(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.apiData,((t,a)=>((0,i.wg)(),(0,i.j4)(v,{clickable:"",key:a,class:"q-ma-md q-pa-md bg-white grey-border"},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{avatar:""},{default:(0,i.w5)((()=>[c])),_:1}),(0,i.Wm)(f,{class:"text-weight-bold"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.$t(a)),1)])),_:2},1024),(0,i.Wm)(f,{avatar:""},{default:(0,i.w5)((()=>[e.hasRegexData()?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Wm)(m,{color:"primary",disable:e.doc_type_regexes[a]["regexes"]["loading_data"],onClick:t=>e.showRegexesListView(a),style:{width:"60px"}},{default:(0,i.w5)((()=>[u])),_:2},1032,["disable","onClick"]),(0,i.Wm)(w,{type:"filter_regexes",doctype:a,display:e.doc_type_regexes[a]["regexes"]["display_list"],list_data:e.doc_type_regexes[a]["regexes"]["data"],language_origin_list:e.language_origin_list,loading_new_data:e.doc_type_regexes[a]["regexes"]["loading_data"]},null,8,["doctype","display","list_data","language_origin_list","loading_new_data"])],64)):(0,i.kq)("",!0)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])]),(0,i.Wm)(R)],64)}var p=a(30052),y=a.n(p),x=a(77378),m=a(61959),f=a(72113),w=a(45401),v=a(54268),b=a(93305),R=a(29938),D=a(13873),k=function(e,t,a,i){function s(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,n){function o(e){try{d(i.next(e))}catch(t){n(t)}}function r(e){try{d(i["throw"](e))}catch(t){n(t)}}function d(e){e.done?a(e.value):s(e.value).then(o,r)}d((i=i.apply(e,t||[])).next())}))};const L=(0,i.aZ)({el:"#app",mixins:[w.Z,x.Z],components:{Loader:f.Z,ManageRegexes:b.Z,SubHeader:D.Z},data(){return{}},mounted(){this.getTypes(),document.addEventListener("regexes_saved",this.newChangesSavedForRegexes)},unmounted:function(){document.removeEventListener("regexes_saved",this.newChangesSavedForRegexes)},methods:{getTypes(){try{this.showLoading(),this.apiData={FILTER_3:[],VAT:[],IBAN:[]},this.resetDocTypeRegexData()}catch(e){this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR"))}finally{this.hideLoading()}},manageSettings(e){this.$router.push(e)},hasRegexData(e){return!(0,R.fg)(this.doc_type_regexes)&&!(0,R.fg)(this.doc_type_regexes[e])},showRegexesListView(e){return k(this,void 0,void 0,(function*(){if(!this.doc_type_regexes||!this.doc_type_regexes[e]||!this.doc_type_regexes[e]["regexes"])return;let t=this.doc_type_regexes[e]["regexes"];try{0===this.language_origin_list.length&&(yield this.fetchLanguageOptions()),t["loading_data"]=!0,this.showLoading(),!1===t["api_data"]&&(yield this.getDocumentTypeRegexes(e)),t["display_list"]=!0,setTimeout((()=>{t["display_list"]=!1}),0)}catch(a){this.showErrorToast("Something went wrong while loading data. Please try again.")}finally{t["loading_data"]=!1,this.hideLoading()}}))},getDocumentTypeRegexes(e){return k(this,void 0,void 0,(function*(){if(!e||""===e)throw{message:"Document Type is missing"};let t,a=yield(0,v.O_)(),i=new FormData,s={regexType:e};i.append("data",JSON.stringify(s)),t=yield y().post(v.hi.post_data_fellowkv+v.hi.get_fellow_kv_regexes,i,{headers:{Authorization:a}});let n=this.doc_type_regexes[e]["regexes"];if(n["api_data"]=!0,n["data"]=[],!t.data)throw{message:"No Data return from api"};if(t.data.hasOwnProperty("message"))throw t.data;t.data.forEach(((e,t)=>{n["data"].push(e)}))}))},newChangesSavedForRegexes(e){if(!e||!e.detail)return;let t=e.detail;this.doc_type_regexes[t]["regexes"]["api_data"]=!1,this.showRegexesListView(t)},resetDocTypeRegexData(){this.doc_type_regexes={};for(const e in this.apiData)this.doc_type_regexes[e]={},this.doc_type_regexes[e]["regexes"]={data:[],display_list:!1,api_data:!1,loading_data:!1}},fetchLanguageOptions(){return k(this,void 0,void 0,(function*(){let e,t=yield(0,v.O_)();if(e=yield y().get(v.hi.get_items_from_dictionary+"DOC_ORIGIN",{headers:{Authorization:t}}),!e.data||0===Object.keys(e.data).length)throw{message:"No language origin list found"};this.language_origin_list=[];for(const a in e.data){let t=e.data[a];this.language_origin_list.push(Object.assign({},{value:t.value,label:t.label}))}}))}},setup(){let e={},t=[];return{apiData:(0,m.iH)(),loading_doc_type_regex_data:(0,m.iH)(!0),doc_type_regexes:(0,m.iH)(e),language_origin_list:t}}});var T=a(74260),O=a(2165),Z=a(24554),C=a(27011),q=a(83414),W=a(52035),I=a(7518),S=a.n(I);const E=(0,T.Z)(L,[["render",h],["__scopeId","data-v-050099ee"]]),H=E;S()(L,"components",{QBtn:O.Z,QIcon:Z.Z,QList:C.Z,QItem:q.Z,QItemSection:W.Z})}}]);