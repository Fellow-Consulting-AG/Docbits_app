"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[8717],{8717:(t,e,i)=>{i.r(e),i.d(e,{default:()=>Yt});var a=i(83673),n=i(62323);const o={class:"container q-pa-xl settings"},l={style:{width:"100%"}},s={class:"q-pa-md"},r={style:{"margin-top":"3px"}},d={key:0},c={style:{"margin-top":"3px"}},u={style:{"margin-top":"3px"}};function p(t,e,i,p,_,m){const g=(0,a.up)("SubHeader"),h=(0,a.up)("BackToSettings"),f=(0,a.up)("q-icon"),w=(0,a.up)("q-space"),y=(0,a.up)("q-separator"),v=(0,a.up)("API"),q=(0,a.up)("q-card-section"),b=(0,a.up)("q-card"),x=(0,a.up)("q-expansion-item"),W=(0,a.up)("SSOProvider"),k=(0,a.up)("IdentityProvider"),Z=(0,a.up)("q-list");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(g,{name:"integration",label:t.$t("pages.settings.integration")},null,8,["label"]),(0,a.Wm)(h),(0,a._)("div",o,[(0,a._)("div",l,[(0,a._)("div",s,[(0,a.Wm)(Z,{bordered:"",class:"rounded-borders"},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{"expand-separator":"","header-class":"highlighted-back","default-opened":""},{header:(0,a.w5)((()=>[(0,a.Wm)(f,{size:"25px",style:{"margin-top":"3px"},class:"q-mr-lg icon-grey",name:"api"}),(0,a._)("span",r,(0,n.zw)(t.$t("pages.settings.api_key")),1),(0,a.Wm)(w)])),default:(0,a.w5)((()=>[(0,a.Wm)(y),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v)])),_:1})])),_:1})])),_:1}),t.isAdmin?((0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(x,{"expand-separator":"","header-class":"highlighted-back","default-opened":""},{header:(0,a.w5)((()=>[(0,a.Wm)(f,{size:"25px",class:"q-mr-lg icon-grey-svg",name:"img:settings/key.svg"}),(0,a._)("span",c,(0,n.zw)(t.$t("pages.integration_settings.general")),1),(0,a.Wm)(w)])),default:(0,a.w5)((()=>[(0,a.Wm)(y),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W)])),_:1})])),_:1})])),_:1}),(0,a.Wm)(x,{"expand-separator":"","header-class":"highlighted-back","default-opened":""},{header:(0,a.w5)((()=>[(0,a.Wm)(f,{size:"25px",class:"q-mr-lg icon-grey",name:"fingerprint"}),(0,a._)("span",u,(0,n.zw)(t.$t("pages.integration_settings.saml_metadata")),1),(0,a.Wm)(w)])),default:(0,a.w5)((()=>[(0,a.Wm)(y),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(k)])),_:1})])),_:1})])),_:1})])):(0,a.kq)("",!0)])),_:1})])])])],64)}var _=i(61959),m=i(13873),g=i(47845);const h={class:"container q-pa-xl"},f={style:{width:"100%"}},w={class:"row mt-30"},y=(0,a._)("div",{class:"col-2"},null,-1),v={class:"col-9"},q={class:"col-1"};function b(t,e,i,o,l,s){const r=(0,a.up)("q-input"),d=(0,a.up)("q-tooltip"),c=(0,a.up)("q-btn"),u=(0,a.up)("q-form");return(0,a.wg)(),(0,a.iD)("div",h,[(0,a._)("div",f,[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a._)("div",w,[y,(0,a._)("div",v,[(0,a.Wm)(r,{class:"api",id:"apiKey",outlined:"",modelValue:t.api_key,"onUpdate:modelValue":e[0]||(e[0]=e=>t.api_key=e),readonly:"",label:"Key","error-message":t.$t("pages.api_settings.invalid_key"),rules:[t=>t&&t.length>0]},null,8,["modelValue","error-message","rules"])]),(0,a._)("div",q,[(0,a.Wm)(c,{round:"",class:"q-ml-sm q-mt-sm",color:"primary",icon:"fas fa-copy",onClick:e[1]||(e[1]=e=>t.copyText(t.api_key))},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(t.$t("pages.api_settings.api_key_tooltip")),1)])),_:1})])),_:1})])])])),_:1})])])}var x=i(45401),W=i(77378),k=i(80579),Z=i(41914),E=i(64434);const T={methods:{copyText(t){0!=t.trim().length&&(0,Z.Z)(t).then((()=>{E.Z.create({color:"primary",message:"Copied!"})}))}}};var C=function(t,e,i,a){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function l(t){try{r(a.next(t))}catch(e){o(e)}}function s(t){try{r(a["throw"](t))}catch(e){o(e)}}function r(t){t.done?i(t.value):n(t.value).then(l,s)}r((a=a.apply(t,e||[])).next())}))};const L=(0,a.aZ)({el:"#app",mixins:[x.Z,W.Z,T],props:["showSpinner"],data(){return{api_key:""}},mounted:function(){this.getAppKey()},methods:{getAppKey(){return C(this,void 0,void 0,(function*(){try{this.showLoading();const t={app_key:"FELLOW_DOC2"},e=yield k.FT.getAppSubscription(t);this.api_key=e[0].token}catch(t){this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR"))}finally{this.hideLoading()}}))}}});var S=i(74260),$=i(68689),A=i(64689),V=i(2165),z=i(5363),I=i(86115),Q=i(7518),U=i.n(Q);const O=(0,S.Z)(L,[["render",b]]),D=O;U()(L,"components",{QForm:$.Z,QInput:A.Z,QBtn:V.Z,QTooltip:z.Z,QField:I.Z});const R={class:"container q-pa-xl"},M={style:{width:"100%"}},F={class:"row"},H={class:"col-2"},P={class:"col-9"},B={class:"col-1"},N={class:"row mt-30"},Y={class:"col-2"},K={class:"col-9"},j={class:"col-1"},G={class:"row mt-30"},J={class:"col-2"},X={class:"col-9"},tt={class:"col-1"},et={class:"row mt-30"},it=(0,a._)("div",{class:"col-2"},null,-1),at={class:"col-9"},nt=["href"],ot=["href"];function lt(t,e,i,o,l,s){const r=(0,a.up)("q-input"),d=(0,a.up)("q-tooltip"),c=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)("div",R,[(0,a._)("div",M,[(0,a._)("div",F,[(0,a._)("div",H,(0,n.zw)(t.$t("pages.integration_settings.entity_id")),1),(0,a._)("div",P,[(0,a.Wm)(r,{class:"api",id:"entity_id",outlined:"",modelValue:t.entity_id,"onUpdate:modelValue":e[0]||(e[0]=e=>t.entity_id=e),readonly:""},null,8,["modelValue"])]),(0,a._)("div",B,[(0,a.Wm)(c,{round:"",class:"q-ml-sm q-mt-sm",color:"primary",icon:"fas fa-copy",onClick:e[1]||(e[1]=e=>t.copyText(t.entity_id))},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(t.$t("copy")),1)])),_:1})])),_:1})])]),(0,a._)("div",N,[(0,a._)("div",Y,(0,n.zw)(t.$t("pages.integration_settings.slo_url")),1),(0,a._)("div",K,[(0,a.Wm)(r,{class:"api",id:"slo_url",outlined:"",modelValue:t.slo_url,"onUpdate:modelValue":e[2]||(e[2]=e=>t.slo_url=e),readonly:""},null,8,["modelValue"])]),(0,a._)("div",j,[(0,a.Wm)(c,{round:"",class:"q-ml-sm q-mt-sm",color:"primary",icon:"fas fa-copy",onClick:e[3]||(e[3]=e=>t.copyText(t.slo_url))},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(t.$t("copy")),1)])),_:1})])),_:1})])]),(0,a._)("div",G,[(0,a._)("div",J,(0,n.zw)(t.$t("pages.integration_settings.sso_url")),1),(0,a._)("div",X,[(0,a.Wm)(r,{class:"api",id:"sso_url",outlined:"",modelValue:t.sso_url,"onUpdate:modelValue":e[4]||(e[4]=e=>t.sso_url=e),readonly:""},null,8,["modelValue"])]),(0,a._)("div",tt,[(0,a.Wm)(c,{round:"",class:"q-ml-sm q-mt-sm",color:"primary",icon:"fas fa-copy",onClick:e[5]||(e[5]=e=>t.copyText(t.sso_url))},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(t.$t("copy")),1)])),_:1})])),_:1})])])]),(0,a._)("div",et,[it,(0,a._)("div",at,[(0,a._)("a",{class:"q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--active",href:t.certificate_url,download:""},(0,n.zw)(t.$t("pages.integration_settings.download_certificate")),9,nt),(0,a._)("a",{style:{"margin-left":"10px"},class:"q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--active",target:"_blank",href:t.metadata_url,download:""},(0,n.zw)(t.$t("pages.integration_settings.metadata_url")),9,ot)])])])}var st=i(30052),rt=i.n(st),dt=i(54268),ct=function(t,e,i,a){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function l(t){try{r(a.next(t))}catch(e){o(e)}}function s(t){try{r(a["throw"](t))}catch(e){o(e)}}function r(t){t.done?i(t.value):n(t.value).then(l,s)}r((a=a.apply(t,e||[])).next())}))};const ut=(0,a.aZ)({el:"#app",mixins:[x.Z,W.Z,T],props:["showSpinner"],data(){return{api_key:"",entity_id:"",slo_url:"",sso_url:"",certificate_url:"",metadata_url:"",file:null}},mounted:function(){this.getSAMLInfo()},setup(){return{}},methods:{getSAMLInfo(){return ct(this,void 0,void 0,(function*(){this.showLoading();try{let t=yield(0,dt.O_)();this.fetchConfiguration(t),this.hideLoading()}catch(t){return this.hideLoading(),void this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR"))}}))},fetchConfiguration(t){return ct(this,void 0,void 0,(function*(){let e=yield rt().get(dt.hi.fetch_saml_configurations,{headers:{Authorization:t}});this.entity_id=e.data.ENTITY_ID,this.sso_url=e.data.SSO,this.slo_url=e.data.SLO,this.certificate_url=e.data.CERTIFICATE,this.metadata_url=e.data.METADATA_URL}))}}}),pt=(0,S.Z)(ut,[["render",lt]]),_t=pt;U()(ut,"components",{QInput:A.Z,QBtn:V.Z,QTooltip:z.Z});const mt={class:"container q-pa-xl"},gt={style:{width:"100%"}},ht={class:"row"},ft={class:"col-2"},wt={class:"col-9"},yt={class:"row mt-30"},vt={class:"col-2"},qt={class:"col-9"},bt={key:0,class:"row mt-30",style:{position:"relative"}},xt={class:"col-2"},Wt={class:"col-9"},kt={class:"col-1"},Zt={class:"row mt-30"},Et=(0,a._)("div",{class:"col-2"},null,-1),Tt={class:"col-9"},Ct=(0,a._)("img",{class:"loading-image",src:"loader.gif",alt:"Loading..."},null,-1);function Lt(t,e,i,o,l,s){const r=(0,a.up)("q-input"),d=(0,a.up)("q-file"),c=(0,a.up)("q-tooltip"),u=(0,a.up)("q-btn"),p=(0,a.up)("q-inner-loading");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",mt,[(0,a._)("div",gt,[(0,a._)("div",ht,[(0,a._)("div",ft,(0,n.zw)(t.$t("pages.integration_settings.infor_tenant_id")),1),(0,a._)("div",wt,[(0,a.Wm)(r,{class:"api",id:"infor_tenant_id",outlined:"",modelValue:t.infor_tenant_id,"onUpdate:modelValue":e[0]||(e[0]=e=>t.infor_tenant_id=e)},null,8,["modelValue"])])]),(0,a._)("div",yt,[(0,a._)("div",vt,(0,n.zw)(t.$t("pages.integration_settings.upload_file")),1),(0,a._)("div",qt,[(0,a.Wm)(d,{style:{width:"20% !important","white-space":"nowrap"},color:"white","label-color":"white","bg-color":"primary",square:"",filled:"",counter:"",multiple:"",modelValue:t.file,"onUpdate:modelValue":e[1]||(e[1]=e=>t.file=e),label:t.$t("pages.integration_settings.upload_button")},null,8,["modelValue","label"])])]),t.exiting_metadate_url?((0,a.wg)(),(0,a.iD)("div",bt,[(0,a._)("div",xt,(0,n.zw)(t.$t("pages.integration_settings.existing_upload_file")),1),(0,a._)("div",Wt,[(0,a.Wm)(r,{class:"api",outlined:"",modelValue:t.existing_tenant_id,"onUpdate:modelValue":e[2]||(e[2]=e=>t.existing_tenant_id=e),readonly:""},null,8,["modelValue"])]),(0,a._)("div",kt,[(0,a.Wm)(u,{round:"",color:"primary",class:"q-ml-sm q-mt-sm",icon:"fas fa-download",onClick:t.downloadMetadata},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(t.$t("pages.integration_settings.export")),1)])),_:1})])),_:1},8,["onClick"])])])):(0,a.kq)("",!0),(0,a._)("div",Zt,[Et,(0,a._)("div",Tt,[(0,a.Wm)(u,{label:t.$t("pages.integration_settings.configure_save_button"),type:"button",color:"primary",class:"q-mr-lg",onClick:t.saveConfiguration},null,8,["label","onClick"]),t.exiting_metadate_url?((0,a.wg)(),(0,a.j4)(u,{key:0,label:t.$t("delete"),type:"button",color:"primary",onClick:t.deleteConfig},null,8,["label","onClick"])):(0,a.kq)("",!0)])])])]),(0,a.Wm)(p,{showing:t.loading},{default:(0,a.w5)((()=>[Ct])),_:1},8,["showing"])],64)}var St=i(9273),$t=function(t,e,i,a){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function l(t){try{r(a.next(t))}catch(e){o(e)}}function s(t){try{r(a["throw"](t))}catch(e){o(e)}}function r(t){t.done?i(t.value):n(t.value).then(l,s)}r((a=a.apply(t,e||[])).next())}))};const At=(0,a.aZ)({el:"#app",mixins:[x.Z,W.Z],data(){return{}},mounted:function(){this.init(),window.ip=this},methods:{init(){return $t(this,void 0,void 0,(function*(){try{this.loading=!0;let t=yield(0,dt.O_)();this.fetchMetaDataInfo(t)}catch(t){const e=St.w.getErrorMessage(t);this.showErrorToast(e)}finally{this.loading=!1}}))},fetchMetaDataInfo(t){return $t(this,void 0,void 0,(function*(){let e=yield rt().get(dt.hi.fetch_saml_meta,{headers:{Authorization:t}});const i=e.data.tennant_id;i&&"undefined"!==i&&(this.existing_tenant_id=i);const a=e.data.saml_download_path;a&&"undefined"!==a&&(this.exiting_metadate_url=a||"")}))},openFileExplorer(){const t=document.getElementById("uploadfile");t&&t.click()},saveConfiguration(){this.file?this.uploadFile(this.file[0]):this.showErrorToast(this.$t("pages.messages.NO_FILE_SELECTED"))},downloadMetadata(){return $t(this,void 0,void 0,(function*(){try{this.loading=!0;let t=yield(0,dt.O_)(),e=yield rt().get(this.exiting_metadate_url,{headers:{Authorization:t}});this.decodeRequest(e.data)}catch(t){const e=St.w.getErrorMessage(t);this.showErrorToast(e)}finally{this.loading=!1}}))},uploadFile(t){return $t(this,void 0,void 0,(function*(){try{if("text/xml"!==t.type)return void this.showErrorToast(this.$t("pages.messages.ONLY_XML_ALLOWED"));this.loading=!0;let e=new FormData;e.append("file",t),e.append("tenant_id",this.infor_tenant_id);let i=yield(0,dt.O_)();yield rt().post(dt.hi.save_saml_configurations,e,{headers:{"Content-Type":"multipart/form-data",Authorization:i}}),yield this.init(),this.file=null,this.showSuccessToast(this.$t("pages.messages.MSG_SAVE"))}catch(e){const t=St.w.getErrorMessage(e);this.showErrorToast(t)}finally{this.loading=!1}}))},decodeRequest(t){var e="configured_metadata.xml",i=document.createElement("a"),a=new Blob([t],{type:"text/xml"});i.setAttribute("href",window.URL.createObjectURL(a)),i.setAttribute("download",e),i.dataset.downloadurl=["text/xml",i.download,i.href].join(":"),i.draggable=!0,i.classList.add("dragout"),i.click()},deleteConfig(){return $t(this,void 0,void 0,(function*(){try{this.loading=!0,yield k.U2["delete"](),this.resetViewData(),this.showSuccessToast(this.$t("pages.messages.DELETED_SUCCESSFULLY"))}catch(t){const e=St.w.getErrorMessage(t);this.showErrorToast(e)}finally{this.loading=!1}}))},resetViewData(){this.infor_tenant_id="",this.exiting_metadate_url="",this.existing_tenant_id="",this.file=null}},setup(){return{loading:(0,_.iH)(!1),infor_tenant_id:(0,_.iH)(""),existing_tenant_id:(0,_.iH)(""),exiting_metadate_url:(0,_.iH)(""),file:(0,_.iH)(null)}}});var Vt=i(64974),zt=i(66941);const It=(0,S.Z)(At,[["render",Lt]]),Qt=It;U()(At,"components",{QInput:A.Z,QFile:Vt.Z,QBtn:V.Z,QTooltip:z.Z,QInnerLoading:zt.Z});var Ut=i(91949);const Ot=(0,a.aZ)({el:"#app",components:{SubHeader:m.Z,BackToSettings:g.Z,API:D,SSOProvider:_t,IdentityProvider:Qt},data(){return{isAdmin:(0,_.iH)(!1)}},mounted(){this.isAdmin=Boolean(JSON.parse((0,Ut.Y4)("is_organisation_admin")))}});var Dt=i(27011),Rt=i(60429),Mt=i(24554),Ft=i(62025),Ht=i(65869),Pt=i(10151),Bt=i(25589);const Nt=(0,S.Z)(Ot,[["render",p]]),Yt=Nt;U()(Ot,"components",{QList:Dt.Z,QExpansionItem:Rt.Z,QIcon:Mt.Z,QSpace:Ft.Z,QSeparator:Ht.Z,QCard:Pt.Z,QCardSection:Bt.Z})}}]);