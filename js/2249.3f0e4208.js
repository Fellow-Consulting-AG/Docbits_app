"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[2249],{92249:(t,e,i)=>{i.r(e),i.d(e,{default:()=>P});var s=i(61758),r=i(58790),o=i(29104);const a={class:"col-3"},l={key:0,class:"text-grey text-uppercase",style:{"margin-top":"24px"}},n={class:"col-6 wizard-wrapper"},p={key:0,class:"error-list text-negative"},u={class:"col-3"},d={class:"text-weight-bold"};function c(t,e,i,c,h,m){const g=(0,s.g2)("SupplierWizard"),_=(0,s.g2)("q-btn"),f=(0,s.g2)("q-space"),v=(0,s.g2)("SupplierDetailsSidebar"),b=(0,s.g2)("q-toolbar-title"),y=(0,s.g2)("q-toolbar"),k=(0,s.g2)("q-input"),A=(0,s.g2)("q-card-section"),S=(0,s.g2)("f-btn"),C=(0,s.g2)("q-card-actions"),E=(0,s.g2)("q-card"),$=(0,s.g2)("q-dialog"),F=(0,s.g2)("ConfirmDialog"),w=(0,s.gN)("close-popup");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",a,[!0===t.renderComponent?((0,s.uX)(),(0,s.CE)("h6",l,(0,r.v_)(t.supplierName),1)):(0,s.Q3)("",!0)]),(0,s.Lk)("div",n,[(0,s.bF)(g),(0,s.Lk)("div",{class:(0,r.C4)(["action-wrapper",t.$q.dark.isActive&&"dark"])},[t.visibleApproveAction()?((0,s.uX)(),(0,s.Wv)(_,{key:0,color:"negative",onClick:t.rejectAction},{default:(0,s.k6)((()=>[(0,s.eW)((0,r.v_)(t.$t("supplier_register_form.other.reject_supplier")),1)])),_:1},8,["onClick"])):(0,s.Q3)("",!0),(0,s.bF)(f),(0,s.bF)(_,{style:{background:"#9e9e9e"},"text-color":"white",onClick:e[0]||(e[0]=e=>t.$router.push("/supplier/dashboard"))},{default:(0,s.k6)((()=>[(0,s.eW)((0,r.v_)(t.$t("cancel")),1)])),_:1}),(0,s.bF)(_,{color:"primary",disabled:t.isFileUploading,onClick:t.save},{default:(0,s.k6)((()=>[(0,s.eW)((0,r.v_)(t.$t("save")),1)])),_:1},8,["disabled","onClick"]),t.visibleApproveAction()?((0,s.uX)(),(0,s.Wv)(_,{key:1,color:"primary",disabled:t.isFileUploading,onClick:e[1]||(e[1]=e=>t.confirmation=!0)},{default:(0,s.k6)((()=>[(0,s.eW)((0,r.v_)(t.$t("supplier_register_form.other.approve")),1)])),_:1},8,["disabled"])):(0,s.Q3)("",!0)],2),t.supplierDetailsErrors?((0,s.uX)(),(0,s.CE)("ul",p,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.supplierDetailsErrors,(t=>((0,s.uX)(),(0,s.CE)("li",{key:t},(0,r.v_)(t),1)))),128))])):(0,s.Q3)("",!0)]),(0,s.Lk)("div",u,[(0,s.bF)(v)]),(0,s.bF)($,{modelValue:t.dialogVisible,"onUpdate:modelValue":e[4]||(e[4]=e=>t.dialogVisible=e)},{default:(0,s.k6)((()=>[(0,s.bF)(E,{class:"card",style:{width:"50vw !important","max-width":"550px !important"}},{default:(0,s.k6)((()=>[(0,s.bF)(y,{class:"text-white secondary-toolbar"},{default:(0,s.k6)((()=>[(0,s.bF)(b,null,{default:(0,s.k6)((()=>[(0,s.Lk)("span",d,(0,r.v_)(t.$t("reject")),1)])),_:1}),(0,s.bo)((0,s.bF)(_,{flat:"",round:"",dense:"",icon:"close"},null,512),[[w]])])),_:1}),(0,s.Lk)("form",{onSubmit:e[3]||(e[3]=(0,o.D$)(((...e)=>t.submitRejection&&t.submitRejection(...e)),["prevent","stop"]))},[(0,s.bF)(A,{class:"row"},{default:(0,s.k6)((()=>[(0,s.bF)(k,{modelValue:t.msg,"onUpdate:modelValue":e[2]||(e[2]=e=>t.msg=e),label:t.$t("pages.support.message"),outlined:"",dense:"",required:"",type:"textarea",class:"col-12 card-padding"},null,8,["modelValue","label"])])),_:1}),(0,s.bF)(C,{align:"right"},{default:(0,s.k6)((()=>[(0,s.bo)((0,s.bF)(S,{label:t.$t("cancel"),appearance:"cancel"},null,8,["label"]),[[w]]),(0,s.bF)(S,{type:"submit",class:"q-mr-sm",label:t.$t("pages.report.send")},null,8,["label"])])),_:1})],32)])),_:1})])),_:1},8,["modelValue"]),(0,s.bF)(F,{modelValue:t.confirmation,"onUpdate:modelValue":e[5]||(e[5]=e=>t.confirmation=e),onConfirm:t.submitApprove,message:t.$t("are_you_sure_to_approve")},null,8,["modelValue","onConfirm","message"])],64)}var h=i(21104),m=i(38734),g=i(1659),_=i(58229),f=i(21647),v=i(83319),b=i(24622),y=i(18505),k=i(64775),A=i(53474),S=i(73937),C=i(73414),E=function(t,e,i,s){function r(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function a(t){try{n(s.next(t))}catch(e){o(e)}}function l(t){try{n(s["throw"](t))}catch(e){o(e)}}function n(t){t.done?i(t.value):r(t.value).then(a,l)}n((s=s.apply(t,e||[])).next())}))};const $=(0,s.pM)({el:"#app",mixins:[y.A,b.A],components:{SupplierWizard:h.A,SupplierDetailsSidebar:f.A,ConfirmDialog:_.A},mounted(){this.init()},data(){return{}},beforeUnmount(){this.formLayout=[],this.formConfigure=[],this.supplierDetailsErrors=[],this.supplierUploadStatus={},this.renderComponent=!1,this.layout_type="",this.last_updated_at="",this._is_from_click_save=!1},computed:{isEditable:function(){const t="supplier_as_org_id"===this.$route.params.id||"rejected"===this.status||"pending_approval"===this.status||"pending_ap_approval"===this.status;return t},isFileUploading:function(){let t=!1;for(const e in this.supplierUploadStatus)"loading"===this.supplierUploadStatus[e].status&&(t=!0);return t},supplierName:function(){var t,e;let i="";for(const s in this.formConfigure)(null===(t=this.formConfigure[s])||void 0===t?void 0:t.supplier_name)&&(i=null===(e=this.formConfigure[s])||void 0===e?void 0:e.supplier_name);return i}},setup(){const t=(0,v.M1)(),{loading:e,formLayout:i,status:s,supplierDetailsErrors:r,formConfigure:o,renderComponent:a,supplierUploadStatus:l,last_updated_at:n,layout_type:p,_is_from_click_save:u}=(0,g.bP)(t),{fetchOrgSupplier:d,getSuppierLayoutByID:c,populateForm:h,approve:_,reject:f,validateAllForm:b,updateSupplier:y,sendForApproval:k}=t;return{loading:e,formLayout:i,formConfigure:o,fetchOrgSupplier:d,dialogVisible:(0,m.KR)(!1),confirmation:(0,m.KR)(!1),status:s,isAdmin:(0,m.KR)(!1),getSuppierLayoutByID:c,populateForm:h,approve:_,reject:f,validateAllForm:b,updateSupplier:y,sendForApproval:k,msg:(0,m.KR)(""),supplierDetailsErrors:r,renderComponent:a,supplierUploadStatus:l,last_updated_at:n,layout_type:p,_is_from_click_save:u}},methods:{init(){return E(this,void 0,void 0,(function*(){const t=(0,v.kH)(),e=t.getParentOrgId();this.loading=!0,this.renderComponent=!1,this.formLayout=[];let i=A.w.SUPPLIER_USER;(0,S.Zu)()||(0,S.Mb)()||(0,S.s5)()?i=A.w.SUPPLIER_MANAGEMENT:(0,S.cq)()&&(i=A.w.SUPPLIER_USER);try{yield this.getSuppierLayoutByID(i,e),yield this.getDataListing()}catch(s){logInfo(s)}finally{this.renderComponent=!0,this.loading=!1}}))},getDataListing(){return E(this,void 0,void 0,(function*(){this.$route.params.oldId&&this.$route.params.id&&(yield this.fetchOrgSupplier(this.$route.params.oldId,this.$route.params.id))}))},save(){return E(this,void 0,void 0,(function*(){this.loading=!0;try{yield this.validateAllForm(),yield this.updateSupplier(this.$route.params.id).then((t=>E(this,void 0,void 0,(function*(){yield this.fetchOrgSupplier(this.$route.params.oldId,this.$route.params.id),this.showSuccessToast("Supplier is saved successfully")})))).catch((t=>{const e=k.t.getErrorMessage(t);this.showErrorToast(e)}))}catch(t){const e=k.t.getErrorMessage(t);this.showErrorToast(e)}finally{this.loading=!1}}))},visibleApproveAction(){return this.isAdmin=Boolean(JSON.parse((0,S.Ky)("is_organisation_admin"))),"pending_ap_approval"===this.status?this.isAdmin:"pending_approval"===this.status},rejectAction(){this.dialogVisible=!0},submitRejection(){return E(this,void 0,void 0,(function*(){this.loading=!0;const t={supplier_as_org_id:this.$route.params.id,supplier_lookup_record_id:this.$route.params.oldId,message:this.msg};try{yield this.reject(t),this.showSuccessToast(this.$t("rejected_successfully")),yield this.fetchOrgSupplier(this.$route.params.oldId,this.$route.params.id)}catch(e){const t=k.t.getErrorMessage(e);this.showErrorToast(t)}finally{this.msg="",this.loading=!1,this.dialogVisible=!1}}))},submitApprove(){return E(this,void 0,void 0,(function*(){this.loading=!0;const t={supplier_as_org_id:this.$route.params.id,supplier_lookup_record_id:this.$route.params.oldId,status:this.status};try{const e=yield this.validateAllForm();if(!e)return void this.showErrorToast(this.$t("supplier_register_form.error.form_validated_failed"));yield this.updateSupplier(this.$route.params.id).catch((t=>{const e=k.t.getErrorMessage(t);this.showErrorToast(e)})),yield this.approve(t),this.supplierDetailsErrors=[],this.showSuccessToast(this.$t("approved_successfully")),yield this.init()}catch(e){if(e instanceof C.m_)this.supplierDetailsErrors=e.messages;else{const t=k.t.getErrorMessage(e);this.showErrorToast(t)}}finally{this.loading=!1}}))}}});var F=i(12807),w=i(56384),D=i(93676),L=i(82156),I=i(23316),U=i(36914),T=i(39150),V=i(44189),q=i(67837),x=i(62669),Q=i(88672),j=i(98582),R=i.n(j);const M=(0,F.A)($,[["render",c],["__scopeId","data-v-7522288a"]]),P=M;R()($,"components",{QBtn:w.A,QSpace:D.A,QDialog:L.A,QCard:I.A,QToolbar:U.A,QToolbarTitle:T.A,QCardSection:V.A,QInput:q.A,QCardActions:x.A}),R()($,"directives",{ClosePopup:Q.A})}}]);