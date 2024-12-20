"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[9906],{9906:(t,e,i)=>{i.r(e),i.d(e,{default:()=>lt});var s=i(61758),r=i(58790);const o=t=>((0,s.Qi)("data-v-2a35d1a8"),t=t(),(0,s.jt)(),t),a={class:"col-4 secondary-c-text text-h6"},n={style:{"vertical-align":"middle","margin-left":"10px","font-size":"20px",cursor:"pointer"}},c={class:"row"},l={class:"col-3 q-pa-sm"},d={class:"q-ma-md"},u={class:"q-ma-md"},m={class:"q-pa-md example-column-equal-width"},h={class:"column border-bdbdbd"},p=o((()=>(0,s.Lk)("div",{class:"col border-bdbdbd q-pa-sm q-mb-sm"},[(0,s.Lk)("span",{class:"text-weight-bold"}," Version ")],-1))),_=["onClick"],b={class:"col-12"},v={class:"text-weight-bold"},f={class:"col-12"},g={class:"col-12"},y={key:0,class:"col-4 row justify-end items-center"},k={key:1,class:"col-4 row justify-end items-center"},A={key:2,class:"col-4 row justify-end items-center"},V={class:"col-9"},D={class:"q-ml-sm"},x={key:0,class:"loading-component"},E=o((()=>(0,s.Lk)("img",{class:"loading-image",src:"images/loader.gif",alt:"Loading..."},null,-1))),C=[E];function w(t,e,i,o,E,w){const F=(0,s.g2)("SubHeader"),q=(0,s.g2)("q-icon"),$=(0,s.g2)("q-btn"),L=(0,s.g2)("q-select"),S=(0,s.g2)("q-badge"),Q=(0,s.g2)("editor"),T=(0,s.g2)("q-avatar"),X=(0,s.g2)("q-card-section"),P=(0,s.g2)("f-btn"),I=(0,s.g2)("q-card-actions"),z=(0,s.g2)("q-card"),M=(0,s.g2)("q-dialog"),R=(0,s.gN)("close-popup");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(F,{name:"settings_manage_xslt",label:"Detail",onSearch:!1}),(0,s.Lk)("div",a,[(0,s.bF)($,{flat:"",rounded:"","data-cy":"dashboard",color:"primary",to:`/settings/manage_xslt/${t.$route.params.doc_type}?tab=${t.$route.params.e_doc_type}&title=${t.title}`},{default:(0,s.k6)((()=>[(0,s.bF)(q,{name:"fa-solid fa-circle-arrow-left",size:"sm"}),(0,s.Lk)("label",n,(0,r.v_)(t.$t("pages.settings.document_types")),1)])),_:1},8,["to"])]),(0,s.Lk)("div",c,[(0,s.Lk)("div",l,[(0,s.Lk)("div",d,[(0,s.bF)(L,{disable:"",readonly:"",outlined:"","use-input":"","hide-dropdown-icon":"",modelValue:t.current_model.doc_type,"onUpdate:modelValue":[e[0]||(e[0]=e=>t.current_model.doc_type=e),e[1]||(e[1]=e=>t.current_model["doc_type"]="")],options:t.doc_type_list,label:t.$t("pages.screen2a.doctype"),"emit-value":"","map-options":"",dense:"",class:"back-white"},null,8,["modelValue","options","label"])]),(0,s.Lk)("div",u,[(0,s.bF)(L,{disable:"",readonly:"",outlined:"","use-input":"","hide-dropdown-icon":"",modelValue:t.current_model.e_doc_type,"onUpdate:modelValue":[e[2]||(e[2]=e=>t.current_model.e_doc_type=e),e[3]||(e[3]=e=>t.current_model["doc_type"]="")],options:["EDI","BOD"],label:t.$t("e_document_type"),"emit-value":"","map-options":"",dense:"",class:"back-white"},null,8,["modelValue","label"])]),(0,s.Lk)("div",m,[(0,s.Lk)("div",h,[p,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.versions,((e,i)=>((0,s.uX)(),(0,s.CE)("div",{class:(0,r.C4)(["col border-bdbdbd q-pa-sm cursor-pointer row",{active:i===t.activeVersion}]),key:e.id},[(0,s.Lk)("div",{class:"col-8 row items-center",onClick:e=>t.chooseVersion(i)},[(0,s.Lk)("div",b,[(0,s.Lk)("span",v,[(0,s.eW)((0,r.v_)(e.version)+" ",1),1==e.is_active?((0,s.uX)(),(0,s.Wv)(S,{key:0,rounded:"",class:"q-pa-sm q-ml-sm",color:"positive",label:t.$t("active")},null,8,["label"])):1==e.is_approved?((0,s.uX)(),(0,s.Wv)(S,{key:1,rounded:"",class:"q-pa-sm q-ml-sm",color:"positive",label:t.$t("approved")},null,8,["label"])):((0,s.uX)(),(0,s.Wv)(S,{key:2,rounded:"",class:"q-pa-sm q-ml-sm",color:"grey",label:t.$t("draft")},null,8,["label"]))])]),(0,s.Lk)("div",f,(0,r.v_)(t.formatDateAccordingToPreference(e.created_on)?t.formatDateAccordingToPreference(e.created_on):t.formatDateAccordingToPreference(e.last_modified_on)),1),(0,s.Lk)("div",g,(0,r.v_)(e.first_name)+" "+(0,r.v_)(e.last_name),1)],8,_),1==e.is_active?((0,s.uX)(),(0,s.CE)("div",y,[(0,s.bF)(q,{name:"edite",size:"sm",color:"grey",onClick:e=>t.createExtractionAttributeValuesDrafts(i)},null,8,["onClick"])])):1==e.is_draft?((0,s.uX)(),(0,s.CE)("div",k,[(0,s.bF)(q,{name:"checked",size:"sm",color:"grey",onClick:e=>t.activateExtractionAttributeValueDrafts(i)},null,8,["onClick"]),(0,s.bF)(q,{name:"edite",size:"sm",color:"grey",onClick:e=>t.createExtractionAttributeValuesDraftsFroms(i)},null,8,["onClick"]),t.versions.length>1?((0,s.uX)(),(0,s.Wv)(q,{key:0,name:"delete",size:"sm",color:"grey",onClick:e=>t.openDeleteDialog(i)},null,8,["onClick"])):(0,s.Q3)("",!0)])):((0,s.uX)(),(0,s.CE)("div",A,[(0,s.bF)(q,{name:"checked",size:"sm",color:"grey",onClick:e=>t.activateExtractionAttributeValueDrafts(i)},null,8,["onClick"]),(0,s.bF)(q,{name:"edite",size:"sm",color:"grey",onClick:e=>t.createExtractionAttributeValuesDraftsFroms(i)},null,8,["onClick"])]))],2)))),128))])])]),(0,s.Lk)("div",V,[(0,s.bF)(Q)])]),(0,s.bF)(M,{modelValue:t.confirmDeleteDialog,"onUpdate:modelValue":e[5]||(e[5]=e=>t.confirmDeleteDialog=e),persistent:""},{default:(0,s.k6)((()=>[(0,s.bF)(z,null,{default:(0,s.k6)((()=>[(0,s.bF)(X,{class:"row",style:{"justify-content":"center",display:"flex"}},{default:(0,s.k6)((()=>[(0,s.bF)(T,{icon:"warning",color:"primary"})])),_:1}),(0,s.bF)(X,{class:"row items-center"},{default:(0,s.k6)((()=>[(0,s.Lk)("span",D,(0,r.v_)(t.$t("pages.messages.msg_delete")),1)])),_:1}),(0,s.bF)(I,{align:"right"},{default:(0,s.k6)((()=>[(0,s.bo)((0,s.bF)(P,{appearance:"cancel",label:t.$t("cancel")},null,8,["label"]),[[R]]),(0,s.bo)((0,s.bF)(P,{appearance:"negative",label:t.$t("delete"),onClick:e[4]||(e[4]=e=>t.deleteAttribute())},null,8,["label"]),[[R]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),t.processing?((0,s.uX)(),(0,s.CE)("div",x,C)):(0,s.Q3)("",!0)],64)}var F=i(1659),q=i(24622),$=i(46736),L=i(64775),S=i(18505),Q=i(24681),T=i(83319),X=i(77362);const P={class:"row"},I={key:0};function z(t,e,i,o,a,n){const c=(0,s.g2)("q-space"),l=(0,s.g2)("f-btn"),d=(0,s.g2)("q-card-section"),u=(0,s.g2)("editor"),m=(0,s.g2)("q-card");return(0,s.uX)(),(0,s.Wv)(m,{flat:"",bordered:"",class:"import-container white-back"},{default:(0,s.k6)((()=>[(0,s.bF)(d,{style:{"padding-bottom":"0px"}},{default:(0,s.k6)((()=>[(0,s.Lk)("div",P,[t.$route.query.attribute_name&&t.$route.query.attribute_type?((0,s.uX)(),(0,s.CE)("span",I,(0,r.v_)(t.$route.query.attribute_name)+" ("+(0,r.v_)(t.$route.query.attribute_type)+") ",1)):(0,s.Q3)("",!0),(0,s.bF)(c),(0,s.bF)(l,{onClick:t.formatCode,label:t.$t("format_button")},null,8,["onClick","label"]),t.current_model.is_draft?((0,s.uX)(),(0,s.Wv)(l,{key:1,onClick:t.saveRecord,label:t.$t("save"),class:"q-ml-sm"},null,8,["onClick","label"])):(0,s.Q3)("",!0)])])),_:1}),(0,s.bF)(d,{class:"row items-center q-pb-md"},{default:(0,s.k6)((()=>[(0,s.bF)(u,{formatCode:t.is_format_code,onFormatComplete:t.afterFormatted},null,8,["formatCode","onFormatComplete"])])),_:1})])),_:1})}var M=i(38734),R=i(88694),W=function(t,e,i,s){function r(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function a(t){try{c(s.next(t))}catch(e){o(e)}}function n(t){try{c(s["throw"](t))}catch(e){o(e)}}function c(t){t.done?i(t.value):r(t.value).then(a,n)}c((s=s.apply(t,e||[])).next())}))};const j=(0,s.pM)({el:"#app",mixins:[q.A,S.A],props:{},components:{editor:R.A},watch:{processing:{handler:function(t,e){!1===t?this.hideLoading():this.showLoading()}}},data(){return{is_format_code:(0,M.KR)(!1)}},methods:{formatCode(){this.is_format_code=!0},afterFormatted(t){this.is_format_code=t},saveRecord(){return W(this,void 0,void 0,(function*(){try{this.processing=!0,yield this.updateExtractionAttributeValueDraft(),this.showSuccessToast(this.$t("pages.messages.MSG_SAVE")),this.processing=!1}catch(t){const e=L.t.getErrorMessage(t);this.showErrorToast(e),this.processing=!1}}))}},setup(){const t=(0,T.If)(),{processing:e,current_model:i}=(0,F.bP)(t),{updateExtractionAttributeValueDraft:s}=t;return{processing:e,updateExtractionAttributeValueDraft:s,current_model:i}}});var O=i(12807),B=i(23316),K=i(44189),U=i(93676),H=i(98582),G=i.n(H);const N=(0,O.A)(j,[["render",z]]),Y=N;G()(j,"components",{QCard:B.A,QCardSection:K.A,QSpace:U.A});var J=function(t,e,i,s){function r(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function a(t){try{c(s.next(t))}catch(e){o(e)}}function n(t){try{c(s["throw"](t))}catch(e){o(e)}}function c(t){t.done?i(t.value):r(t.value).then(a,n)}c((s=s.apply(t,e||[])).next())}))};const Z=(0,s.pM)({el:"#app",mixins:[q.A,S.A,$.A],components:{SubHeader:X.A,editor:Y},data(){return{activeVersion:0,title:""}},mounted(){var t;this.init();const e=null===(t=this.$route.query.title)||void 0===t?void 0:t.toString();e&&(this.title=e)},methods:{init(){return J(this,void 0,void 0,(function*(){this.processing=!0,this.current_model.doc_type=this.$route.params.doc_type,this.current_model.e_doc_type=this.$route.params.e_doc_type,this.params.attribute_id=this.$route.params.id.toString(),this.current_model.attribute_id=this.$route.params.id.toString(),yield this.listVersion(this.$route.params.id.toString()),this.checkInitVersionActive(),this.processing=!1}))},chooseVersion(t){this.activeVersion=t,this.processing=!0,this.current_model.attribute_id=this.versions[t].attribute_id,this.current_model.draft_id=this.versions[t].id,this.current_model.xslt_data=this.versions[t].value,this.current_model.is_active=this.versions[t].is_active,this.current_model.is_draft=this.versions[t].is_draft,this.isReadOnly=this.versions[t].is_active,setTimeout((()=>{this.processing=!1}),2e3)},checkInitVersionActive(){this.versions[0]&&(this.isReadOnly=this.versions[0].is_active)},createExtractionAttributeValuesDrafts(t){return J(this,void 0,void 0,(function*(){try{this.processing=!0,this.current_model.is_active=!1,this.current_model.attribute_id=this.versions[t].attribute_id,this.current_model.xslt_data=this.versions[t].value,yield this.createExtractionAttributeValuesDraft(),this.showSuccessToast(this.$t("draft_created")),this.init(),this.processing=!1}catch(e){const t=L.t.getErrorMessage(e);this.showErrorToast(t),this.processing=!1}}))},createExtractionAttributeValuesDraftsFroms(t){return J(this,void 0,void 0,(function*(){try{this.processing=!0,this.current_model.is_active=!1,this.current_model.attribute_id=this.versions[t].attribute_id,this.current_model.draft_id=this.versions[t].id,this.current_model.xslt_data=this.versions[t].value,yield this.createExtractionAttributeValuesDraftFrom(),this.showSuccessToast(this.$t("draft_created")),this.init(),this.processing=!1}catch(e){const t=L.t.getErrorMessage(e);this.showErrorToast(t),this.processing=!1}}))},activateExtractionAttributeValueDrafts(t){return J(this,void 0,void 0,(function*(){try{this.processing=!0,this.current_model.attribute_id=this.versions[t].attribute_id,this.current_model.draft_id=this.versions[t].id,logInfo(this.versions[t].id,"draft id"),yield this.activateExtractionAttributeValueDraft(),this.showSuccessToast(this.$t("draft_activated")),yield this.init(),this.chooseVersion(t),this.processing=!1}catch(e){const t=L.t.getErrorMessage(e);this.showErrorToast(t),this.processing=!1}}))},openDeleteDialog(t){this.current_model.attribute_id=this.versions[t].attribute_id,this.current_model.draft_id=this.versions[t].id,this.confirmDeleteDialog=!0},deleteAttribute(){return J(this,void 0,void 0,(function*(){try{yield this.deleteExtractionAttributeValueDrafts(),this.init(),this.showSuccessToast(this.$t("draft_deleted"))}catch(t){const e=L.t.getErrorMessage(t);this.showErrorToast(e)}}))}},setup(){const{datePattern:t}=(0,Q.B)(),e=(0,T.cY)(),i=(0,T.If)(),{current_model:s,versions:r,params:o,processing:a,confirmDeleteDialog:n,isReadOnly:c}=(0,F.bP)(i),{listVersion:l,createExtractionAttributeValuesDraft:d,activateExtractionAttributeValueDraft:u,deleteExtractionAttributeValueDrafts:m,createExtractionAttributeValuesDraftFrom:h}=i,{doc_type_list:p}=(0,F.bP)(e);return{doc_type_list:p,current_model:s,listVersion:l,versions:r,params:o,processing:a,isReadOnly:c,createExtractionAttributeValuesDraft:d,activateExtractionAttributeValueDraft:u,confirmDeleteDialog:n,deleteExtractionAttributeValueDrafts:m,datePattern:t,createExtractionAttributeValuesDraftFrom:h}}});var tt=i(56384),et=i(50492),it=i(94940),st=i(23954),rt=i(82156),ot=i(3952),at=i(62669),nt=i(88672);const ct=(0,O.A)(Z,[["render",w],["__scopeId","data-v-2a35d1a8"]]),lt=ct;G()(Z,"components",{QBtn:tt.A,QIcon:et.A,QSelect:it.A,QBadge:st.A,QDialog:rt.A,QCard:B.A,QCardSection:K.A,QAvatar:ot.A,QCardActions:at.A}),G()(Z,"directives",{ClosePopup:nt.A})}}]);