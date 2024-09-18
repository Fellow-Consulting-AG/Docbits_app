"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[7369],{47369:(t,e,i)=>{i.r(e),i.d(e,{default:()=>I});var r=i(61758),s=i(58790);const o={class:"col-3"},a={key:0,class:"text-grey text-uppercase",style:{"margin-top":"24px"}},n={class:"col-6 wizard-wrapper"},p={key:0},l={class:"col-3"};function u(t,e,i,u,d,c){const h=(0,r.g2)("SupplierWizard"),_=(0,r.g2)("q-space"),f=(0,r.g2)("q-btn"),g=(0,r.g2)("SupplierDetailsSidebar"),m=(0,r.g2)("ConfirmDialog");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",o,[!0===t.renderComponent?((0,r.uX)(),(0,r.CE)("h6",a,(0,s.v_)(t.supplierName),1)):(0,r.Q3)("",!0)]),(0,r.Lk)("div",n,[(0,r.bF)(h),(0,r.Lk)("div",{class:(0,s.C4)(["action-wrapper",t.$q.dark.isActive&&"dark"])},[(0,r.bF)(_),(0,r.bF)(f,{style:{background:"#9e9e9e"},"text-color":"white",onClick:e[0]||(e[0]=e=>t.$router.push("/dashboard"))},{default:(0,r.k6)((()=>[(0,r.eW)((0,s.v_)(t.$t("cancel")),1)])),_:1}),(0,r.bF)(f,{color:"primary",disabled:t.loading||t.isEditable||t.isFileUploading,onClick:t.save},{default:(0,r.k6)((()=>[(0,r.eW)((0,s.v_)(t.$t("save")),1)])),_:1},8,["disabled","onClick"]),!t.isUserLogin||"pending_registration"!==t.status&&"pending_supplier_input"!==t.status?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("div",p,[(0,r.bF)(f,{color:"primary",disabled:t.isFileUploading,onClick:e[1]||(e[1]=e=>t.confirmOpen=!0)},{default:(0,r.k6)((()=>[(0,r.eW)((0,s.v_)(t.$t("supplier_register_form.other.send_for_approval")),1)])),_:1},8,["disabled"])]))],2)]),(0,r.Lk)("div",l,[(0,r.bF)(g)]),(0,r.bF)(m,{modelValue:t.confirmOpen,"onUpdate:modelValue":e[2]||(e[2]=e=>t.confirmOpen=e),onConfirm:t.sendApproval,message:t.$t("are_you_sure_to_send_approval")},null,8,["modelValue","onConfirm","message"])],64)}var d=i(10942),c=i(38734),h=i(1659),_=i(58229),f=i(42868),g=i(94124),m=i(24622),v=i(18505),y=i(64775),S=i(53474),k=i(73937),C=i(85487),b=function(t,e,i,r){function s(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function a(t){try{p(r.next(t))}catch(e){o(e)}}function n(t){try{p(r["throw"](t))}catch(e){o(e)}}function p(t){t.done?i(t.value):s(t.value).then(a,n)}p((r=r.apply(t,e||[])).next())}))};const E=(0,r.pM)({el:"#app",mixins:[v.A,m.A],components:{SupplierWizard:d.A,SupplierDetailsSidebar:f.A,ConfirmDialog:_.A},mounted(){this.init()},data(){return{}},beforeUnmount(){this.formLayout=[],this.formConfigure=[],this.supplierDetailsErrors=[],this.supplierUploadStatus={},this.renderComponent=!1,this.layout_type="",this.last_updated_at="",this._is_from_click_save=!1},computed:{isUserLogin:function(){const t=this.$route.params.id===(0,C.I)();return(0,k.cq)()&&t},isEditable:function(){const t="supplier_as_org_id"===this.$route.params.id||"rejected"===this.status||"pending_approval"===this.status||"pending_ap_approval"===this.status;return t},isFileUploading:function(){let t=!1;for(const e in this.supplierUploadStatus)"loading"===this.supplierUploadStatus[e].status&&(t=!0);return t},supplierName:function(){var t,e;let i="";for(const r in this.formConfigure)(null===(t=this.formConfigure[r])||void 0===t?void 0:t.supplier_name)&&(i=null===(e=this.formConfigure[r])||void 0===e?void 0:e.supplier_name);return i}},setup(){const t=(0,g.M1)(),{loading:e,formLayout:i,status:r,renderComponent:s,formConfigure:o,supplierUploadStatus:a,supplierDetailsErrors:n,last_updated_at:p,layout_type:l,_is_from_click_save:u}=(0,h.bP)(t),{validateAllForm:d,updateSupplier:_,sendForApproval:f,fetchOrgSupplier:m,getSuppierLayoutByID:v,populateForm:y,fetchOrgSupplierWizard:S}=t;return{loading:e,formLayout:i,validateAllForm:d,updateSupplier:_,sendForApproval:f,fetchOrgSupplier:m,confirmOpen:(0,c.KR)(!1),status:r,getSuppierLayoutByID:v,populateForm:y,renderComponent:s,supplierUploadStatus:a,formConfigure:o,supplierDetailsErrors:n,fetchOrgSupplierWizard:S,last_updated_at:p,layout_type:l,_is_from_click_save:u}},methods:{init(){return b(this,void 0,void 0,(function*(){const t=(0,g.kH)(),e=t.getParentOrgId();this.loading=!0,this.renderComponent=!1,this.formLayout=[];let i=S.w.SUPPLIER_USER;(0,k.Zu)()||(0,k.Mb)()?i=S.w.SUPPLIER_MANAGEMENT:(0,k.cq)()&&(i=S.w.SUPPLIER_USER);try{yield this.getSuppierLayoutByID(i,e),yield this.getDataListing()}catch(r){}finally{this.loading=!1,this.renderComponent=!0}}))},getDataListing(){return b(this,void 0,void 0,(function*(){if(this.$route.params.oldId&&this.$route.params.id){const t=(0,g.kH)(),e=t.getParentOrgId();yield this.fetchOrgSupplierWizard(this.$route.params.oldId,this.$route.params.id,e)}}))},save(){return b(this,void 0,void 0,(function*(){this.loading=!0;try{yield this.validateAllForm(),yield this.updateSupplier(this.$route.params.id).then((t=>b(this,void 0,void 0,(function*(){yield this.fetchOrgSupplier(this.$route.params.oldId,this.$route.params.id),this.showSuccessToast("Supplier is saved successfully")})))).catch((t=>{const e=y.t.getErrorMessage(t);this.showErrorToast(e)}))}catch(t){const e=y.t.getErrorMessage(t);this.showErrorToast(e)}finally{this.loading=!1}}))},sendApproval(){return b(this,void 0,void 0,(function*(){const t=yield this.validateAllForm();if(!t)return void this.showErrorToast(this.$t("supplier_register_form.error.form_validated_failed"));const e=(0,k.sE)().organisations[0];if(!e.parent_org_id)return;this.loading=!0,yield this.updateSupplier(this.$route.params.id).catch((t=>{const e=y.t.getErrorMessage(t);this.showErrorToast(e)}));const i={supplier_as_org_id:this.$route.params.id,supplier_lookup_record_id:this.$route.params.oldId,parent_org_id:e.parent_org_id};yield this.sendForApproval(i).then((t=>{this.showSuccessToast(this.$t("supplier_sent_for_approval_success"))})).catch((t=>{const e=y.t.getErrorMessage(t);this.showErrorToast(e)})),yield this.init()}))}}});var A=i(12807),F=i(93676),$=i(56384),w=i(98582),L=i.n(w);const U=(0,A.A)(E,[["render",u]]),I=U;L()(E,"components",{QSpace:F.A,QBtn:$.A})}}]);