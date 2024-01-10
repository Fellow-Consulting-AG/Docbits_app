"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[5003],{5003:(t,e,i)=>{i.r(e),i.d(e,{default:()=>ft});var o=i(83673),l=i(62323),a=i(98880);const s=t=>((0,o.dD)("data-v-41b292f6"),t=t(),(0,o.Cn)(),t),n={class:"container no-padding back settings highlighted-back"},r={class:"secondary-c-text text-h6 q-pt-md q-pb-md"},c=s((()=>(0,o._)("img",{width:"24",src:"back_new.svg"},null,-1))),d={style:{"vertical-align":"middle","margin-left":"10px","font-size":"20px",cursor:"pointer"}},g={style:{"margin-left":"auto","margin-right":"37px"}},p={key:0,class:"container settings"},u={style:{"text-align":"center","line-height":"35px","letter-spacing":"2px"}},f=s((()=>(0,o._)("br",null,null,-1))),_=(0,o.Uk)(),h=s((()=>(0,o._)("br",null,null,-1))),m=s((()=>(0,o._)("br",null,null,-1))),x={class:"container settings"},y={class:"row full-width"},w={class:"col-sm-12 col-md-12 col-lg-12 q-pa-md"},b={class:"highlighted-back"},v={class:"text-h4 text-uppercase text-left"},C={class:"text-h4 text-uppercase text-left"},k={class:"text-h4 text-uppercase text-left"},S={class:"text-h4 text-uppercase text-left"},E={class:"text-h4 text-uppercase text-center"},D={class:"text-h4 text-left"},W={class:"text-h4 text-left"},O={class:"text-h4 text-left"},z={class:"text-h4 text-left"},T={class:"text-h4 text-center"},$=s((()=>(0,o._)("img",{class:"img-fluid mb-14 filter-primary",width:"28",height:"28",src:"pencil.svg",alt:""},null,-1))),Z=s((()=>(0,o._)("img",{class:"img-fluid mb-14 black_to_white",width:"28",height:"28",src:"trash-bin-default.svg",alt:""},null,-1))),L={class:"active-toggle switch"},q=["onUpdate:modelValue","onClick"],N=s((()=>(0,o._)("div",{class:"slider"},null,-1))),I={key:1},Q={colspan:"5",class:"text-h4 text-center"},R={class:"q-ml-sm"};function U(t,e,i,s,U,A){const F=(0,o.up)("SubHeader"),V=(0,o.up)("q-icon"),H=(0,o.up)("q-btn"),J=(0,o.up)("q-tooltip"),M=(0,o.up)("q-markup-table"),P=(0,o.up)("Loader"),K=(0,o.up)("export-dialog"),Y=(0,o.up)("q-dialog"),j=(0,o.up)("q-avatar"),B=(0,o.up)("q-card-section"),X=(0,o.up)("q-card-actions"),G=(0,o.up)("q-card"),tt=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(F,{name:"export_settings",label:t.$t("export_settings")},null,8,["label"]),(0,o._)("div",n,[(0,o._)("div",r,[(0,o.Wm)(H,{flat:"",rounded:"",color:"primary",to:"/settings"},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{class:"text-red-13",size:"sm"},{default:(0,o.w5)((()=>[c])),_:1}),(0,o._)("label",d,(0,l.zw)(t.$t("layout.settings")),1)])),_:1})]),(0,o._)("div",g,[(0,o.Wm)(H,{color:"primary","data-cy":"add-integration-button",class:"float-right",icon:"add",label:t.$t("new"),onClick:e[0]||(e[0]=e=>t.addNewConfig())},null,8,["label"])])]),t.configurations?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("div",u,[(0,o.Wm)(H,{style:{"margin-bottom":"20px","pointer-events":"none"},size:"25px",round:"",class:"integration-icon",icon:"upload"}),f,(0,o._)("b",null,(0,l.zw)(t.$t("pages.export.heading")),1),_,h,(0,o.Uk)(" "+(0,l.zw)(t.$t("pages.export.subheading"))+" ",1),m,(0,o.Wm)(H,{style:{"margin-top":"20px","letter-spacing":"2px"},color:"primary",label:t.$t("pages.export.addintegration"),onClick:e[1]||(e[1]=e=>t.addNewConfig())},null,8,["label"])])])),(0,o._)("div",x,[(0,o._)("div",y,[(0,o._)("div",w,[(0,o.Wm)(M,null,{default:(0,o.w5)((()=>[(0,o._)("thead",null,[(0,o._)("tr",b,[(0,o._)("th",v,(0,l.zw)(t.$t("pages.export.title")),1),(0,o._)("th",C,(0,l.zw)(t.$t("pages.export.doc_type")),1),(0,o._)("th",k,(0,l.zw)(t.$t("sub_organizations")),1),(0,o._)("th",S,(0,l.zw)(t.$t("pages.export.export_method")),1),(0,o._)("th",E,(0,l.zw)(t.$t("pages.export.actions")),1)])]),(0,o._)("tbody",null,[t.configurations?((0,o.wg)(!0),(0,o.iD)(o.HY,{key:0},(0,o.Ko)(t.configurations,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[(0,o._)("td",D,(0,l.zw)(e.title),1),(0,o._)("td",W,(0,l.zw)(t.getDocTypeLabel(e)),1),(0,o._)("td",O,(0,l.zw)(t.getSubOrgName(e)),1),(0,o._)("td",z,(0,l.zw)(e.export_method),1),(0,o._)("td",T,[(0,o.Wm)(H,{flat:"",color:"primary",onClick:i=>t.editConfiguration(e),class:"no-padding-left-right mr-10"},{default:(0,o.w5)((()=>[$])),_:2},1032,["onClick"]),(0,o.Wm)(H,{flat:"",onClick:i=>{t.deleteConfirmation=!0,t.configId=e.id},color:"primary",class:"no-padding-left-right"},{default:(0,o.w5)((()=>[Z])),_:2},1032,["onClick"]),(0,o._)("label",L,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":t=>e.is_active=t,onClick:i=>t.handleDisability(e,e.is_active)},null,8,q),[[a.e8,e.is_active]]),N,(0,o.Wm)(J,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(!0===e.is_active?t.$t("click_to_disable"):t.$t("click_to_enable")),1)])),_:2},1024)])])])))),128)):((0,o.wg)(),(0,o.iD)("tr",I,[(0,o._)("td",Q,(0,l.zw)(t.$t("no_configurations")),1)]))])])),_:1})])])]),(0,o.Wm)(P),(0,o.Wm)(Y,{modelValue:t.display_config_dialog,"onUpdate:modelValue":e[2]||(e[2]=e=>t.display_config_dialog=e),persistent:"",onKeydown:e[3]||(e[3]=(0,a.D2)((e=>t.display_config_dialog=!1),["esc"]))},{default:(0,o.w5)((()=>[(0,o.Wm)(K)])),_:1},8,["modelValue"]),(0,o.Wm)(Y,{modelValue:t.deleteConfirmation,"onUpdate:modelValue":e[5]||(e[5]=e=>t.deleteConfirmation=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(G,null,{default:(0,o.w5)((()=>[(0,o.Wm)(B,{class:"row",style:{"justify-content":"center",display:"flex"}},{default:(0,o.w5)((()=>[(0,o.Wm)(j,{icon:"warning",color:"primary","text-color":"white"})])),_:1}),(0,o.Wm)(B,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o._)("span",R,(0,l.zw)(t.$t("pages.export.sure")),1)])),_:1}),(0,o.Wm)(X,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(H,{flat:"",label:t.$t("cancel"),"data-cy":"cancel-card",color:"primary"},null,8,["label"]),[[tt]]),(0,o.wy)((0,o.Wm)(H,{flat:"",label:t.$t("delete"),"data-cy":"done-card",color:"primary",onClick:e[4]||(e[4]=e=>t.deleteConfiguration())},null,8,["label"]),[[tt]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var A=i(77378),F=i(61959),V=i(72113),H=i(45401),J=i(75592),M=i(13873),P=i(60727),K=i(10321),Y=i(91777),j=i(80579),B=i(9273),X=function(t,e,i,o){function l(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,a){function s(t){try{r(o.next(t))}catch(e){a(e)}}function n(t){try{r(o["throw"](t))}catch(e){a(e)}}function r(t){t.done?i(t.value):l(t.value).then(s,n)}r((o=o.apply(t,e||[])).next())}))};const G=(0,o.aZ)({el:"#app",mixins:[A.Z,H.Z,Y.Z],components:{Loader:V.Z,ExportDialog:J.Z,SubHeader:M.Z},data(){return{dialog:!1}},watch:{processing:{handler:function(t,e){!1===t?this.hideLoading():this.showLoading()}},config_saved:{handler:function(t,e){!0===t&&(this.display_config_dialog=!1,this.config_saved=!1,this.getExportConfigurations())}}},mounted(){return X(this,void 0,void 0,(function*(){this.processing=!0,yield this.getSubOrgsList(),this.fillDocTypeAndSubTypesListIfEmpty(),yield this.getExportConfigurations(),this.processing=!1}))},methods:{editConfiguration(t){const e=t.export_method;if(e){this.display_config_dialog=!0;var i=JSON.parse(JSON.stringify(t));this.setSelectedExportForEdit(i)}else this.showErrorToast(this.$t("pages.messages.ERROR_EXPORT_METHOD_NOT_FOUND"))},addNewConfig(){this.configId=0,this.display_config_dialog=!0,this.clearOnlySelectionConfigState()},deleteConfiguration(){return X(this,void 0,void 0,(function*(){try{this.processing=!0,yield j.xS["delete"](this.configId.toString()),this.clearStateForExportDialog(),this.getExportConfigurations()}catch(t){return this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR")),void(this.processing=!1)}}))},handleDisability(t,e){return X(this,void 0,void 0,(function*(){try{e=!e,this.processing=!0;const i=yield j.xS.updateActive(t.id.toString(),e);if(!i.success||!0!==i.success)throw{message:i.message};t.is_active=e}catch(i){const t=B.w.getErrorMessage(i);this.showErrorToast(t)}finally{this.processing=!1}}))},getDocTypeLabel(t){const e=this.doc_type_list.find((e=>e.value===t.doc_type));return String(e?e.label:t.doc_type)},getSubOrgName(t){if(!t.sub_org_id)return"";const e=this.subOrgList.find((e=>e.value===t.sub_org_id));return e&&String(e.label)||""}},setup(){const t=(0,P.Fl)(),{getExportConfigurations:e,setSelectedExportForEdit:i,clearStateForExportDialog:o,clearOnlySelectionConfigState:l}=t,{configurations:a,processing:s,display_config_dialog:n,config_saved:r}=(0,K.Jk)(t),c=(0,P.At)(),{fillDocTypeAndSubTypesListIfEmpty:d,getSubOrgsList:g}=c,{doc_type_list:p,subOrgList:u}=(0,K.Jk)(c);return{subOrgList:u,getSubOrgsList:g,doc_type_list:p,display_config_dialog:n,fillDocTypeAndSubTypesListIfEmpty:d,setSelectedExportForEdit:i,exportConfiguration:(0,F.iH)(),isExportConfigured:!1,deleteConfirmation:(0,F.iH)(!1),configId:0,getExportConfigurations:e,configurations:a,processing:s,clearStateForExportDialog:o,clearOnlySelectionConfigState:l,config_saved:r}}});var tt=i(74260),et=i(2165),it=i(24554),ot=i(30481),lt=i(5363),at=i(46778),st=i(10151),nt=i(25589),rt=i(75096),ct=i(99367),dt=i(60677),gt=i(7518),pt=i.n(gt);const ut=(0,tt.Z)(G,[["render",U],["__scopeId","data-v-41b292f6"]]),ft=ut;pt()(G,"components",{QBtn:et.Z,QIcon:it.Z,QMarkupTable:ot.Z,QTooltip:lt.Z,QDialog:at.Z,QCard:st.Z,QCardSection:nt.Z,QAvatar:rt.Z,QCardActions:ct.Z}),pt()(G,"directives",{ClosePopup:dt.Z})}}]);