"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[2646],{52646:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Z});var s=o(61758);const i={class:"container page-height-limit settings mt-mb-8"};function r(e,t,o,r,l,c){const d=(0,s.g2)("SubHeader"),n=(0,s.g2)("ScriptBackTo"),a=(0,s.g2)("settingsEditor");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(d,{name:"scripts",label:e.$t("add_special_rules")},null,8,["label"]),(0,s.bF)(n),(0,s.Lk)("div",i,[e.load_script?((0,s.uX)(),(0,s.Wv)(a,{key:0})):(0,s.Q3)("",!0)])],64)}var l=o(38734),c=o(1595),d=o(1659),n=o(58790);const a={class:"row"},u={class:"col-2"},_={class:"items-left"},p={class:"col-auto q-ml-md"},y={class:"full-width items-left"},m={class:"col-3 q-ml-md"},h={class:"full-width items-left"},b={class:"col-10"},f={class:"col-auto q-ml-md"},g={class:"full-width items-left"},k={class:"col-6"},v=(0,s.Lk)("div",{class:"col-1"},"Result:",-1),L={class:"col-11 bg-grey-3 script-output"};function w(e,t,o,i,r,l){const c=(0,s.g2)("q-card-actions"),d=(0,s.g2)("q-input"),w=(0,s.g2)("q-select"),F=(0,s.g2)("q-card-section"),T=(0,s.g2)("f-btn"),S=(0,s.g2)("editor"),C=(0,s.g2)("Loader"),D=(0,s.g2)("q-card");return(0,s.uX)(),(0,s.Wv)(D,{flat:"",bordered:"",class:"import-container white-back"},{default:(0,s.k6)((()=>[(0,s.bF)(c,{align:"right"}),(0,s.bF)(F,null,{default:(0,s.k6)((()=>[(0,s.Lk)("div",a,[(0,s.Lk)("div",u,[(0,s.Lk)("div",_,[(0,s.Lk)("div",null,[(0,s.bF)(d,{modelValue:e.current_model["label"],"onUpdate:modelValue":t[0]||(t[0]=t=>e.current_model["label"]=t),outlined:"",dense:"",label:e.$t("name"),class:"back-white"},null,8,["modelValue","label"])])])]),(0,s.Lk)("div",p,[(0,s.Lk)("div",y,[(0,s.Lk)("div",null,[(0,s.bF)(w,{clearable:"",outlined:"",modelValue:e.current_model["doc_type"],"onUpdate:modelValue":[t[1]||(t[1]=t=>e.current_model["doc_type"]=t),t[2]||(t[2]=t=>e.current_model["sub_doc_type"]="")],"use-input":"",options:e.filterDocTypeList,label:e.$t("pages.screen2a.doctype"),onFilter:e.filterDocTypeListEvent,loading:e.doc_type_loading,"emit-value":"","map-options":"",dense:"",class:"back-white"},null,8,["modelValue","options","label","onFilter","loading"])])])]),(0,s.Lk)("div",m,[(0,s.Lk)("div",h,[(0,s.Lk)("div",b,[(0,s.bF)(w,{modelValue:e.current_model.trigger_on,"onUpdate:modelValue":t[3]||(t[3]=t=>e.current_model.trigger_on=t),outlined:"",label:e.$t("trigger_on"),options:e.script_trigger_list,"emit-value":"","map-options":"",dense:"",class:"back-white"},null,8,["modelValue","label","options"])])])]),(0,s.Lk)("div",f,[(0,s.Lk)("div",g,[(0,s.Lk)("div",k,[(0,s.bF)(w,{clearable:"",outlined:"",label:e.$t("sub_type"),modelValue:e.current_model["sub_doc_type"],"onUpdate:modelValue":t[4]||(t[4]=t=>e.current_model["sub_doc_type"]=t),"use-input":"",options:e.SubDocTypeFilteredList,onFilter:e.SubDocTypeFilterEvent,"emit-value":"","map-options":"",dense:"",class:"back-white"},{append:(0,s.k6)((()=>[])),_:1},8,["label","modelValue","options","onFilter"])])])])])])),_:1}),(0,s.bF)(c,{class:"q-ml-sm"},{default:(0,s.k6)((()=>[(0,s.bF)(T,{onClick:e.formatCode,label:e.$t("format_button"),class:"q-mr-sm"},null,8,["onClick","label"]),(0,s.bF)(T,{onClick:e.saveRecord,label:e.$t("save")},null,8,["onClick","label"])])),_:1}),(0,s.bF)(F,{class:"row items-center q-pb-md"},{default:(0,s.k6)((()=>[(0,s.bF)(S,{formatCode:e.is_format_code,onFormatComplete:e.afterFormatted},null,8,["formatCode","onFormatComplete"])])),_:1}),e.display_output_view?((0,s.uX)(),(0,s.Wv)(F,{key:0,class:"row items-center q-pb-none full-width",style:{"min-height":"100px"}},{default:(0,s.k6)((()=>[v,(0,s.Lk)("pre",L,(0,n.v_)(e.script_output),1)])),_:1})):(0,s.Q3)("",!0),(0,s.bF)(C)])),_:1})}var F=o(24622),T=o(64775),S=o(85560),C=o(89156),D=o(18505),q=function(e,t,o,s){function i(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,r){function l(e){try{d(s.next(e))}catch(t){r(t)}}function c(e){try{d(s["throw"](e))}catch(t){r(t)}}function d(e){e.done?o(e.value):i(e.value).then(l,c)}d((s=s.apply(e,t||[])).next())}))};const E=(0,s.pM)({el:"#app",mixins:[F.A,D.A],props:{},components:{editor:S.A,Loader:C.A},watch:{selected_doc_type:{handler:function(e,t){this.initView()}},processing:{handler:function(e,t){!1===e?this.hideLoading():this.showLoading()}}},data(){return{is_format_code:(0,l.KR)(!1)}},beforeRouteLeave:function(e,t,o){this.reset(),o()},mounted:function(){this.initView()},methods:{initView(){return q(this,void 0,void 0,(function*(){try{if(yield this.getDocTypesSubTypes(),this.filterDocTypeList=this.doc_type_list,!this.selected_doc_type)return void logInfo("selected_doc_type is missing");if(this.processing=!0,""===this.record_id)return void this.setEmptyModel();yield this.getScriptById(),this.filertByDocTypeKey()}catch(e){const t=T.t.getErrorMessage(e);this.showErrorToast(t),logError(e)}finally{this.processing=!1}}))},formatCode(){this.is_format_code=!0},afterFormatted(e){this.is_format_code=e},saveRecord(){return q(this,void 0,void 0,(function*(){try{this.processing=!0;this.current_model.id;yield this.saveCurrentModel(),this.showSuccessToast(this.$t("pages.messages.MSG_SAVE")),this.setRouteForEdit()}catch(e){const t=T.t.getErrorMessage(e);this.showErrorToast(t),logError(e)}finally{this.processing=!1}}))},setRouteForEdit(){if(""!==this.record_id)return;const e={};e["id"]=this.current_model.id,""!==this.sub_doc_type_key&&(e["sub_doc_type_key"]=this.sub_doc_type_key),this.$router.push({name:"record_script",params:{doc_type:this.selected_doc_type},query:e})},filterDocTypeListEvent(e,t,o){t(e?()=>{const t=e.toLowerCase();this.filterDocTypeList=this.doc_type_list.filter((e=>e.label.toLowerCase().indexOf(t)>-1))}:()=>{this.filterDocTypeList=this.doc_type_list})},filertByDocTypeKey(){this.current_model["doc_type"]?this.SubDocTypeFilteredList=this.sub_types_list.filter((e=>e.doc_type_key==this.current_model["doc_type"])):this.SubDocTypeFilteredList=[]},SubDocTypeFilterEvent(e,t,o){this.filertByDocTypeKey(),t(e?()=>{const t=e.toLowerCase();this.SubDocTypeFilteredList=this.SubDocTypeFilteredList.filter((e=>e.label.toLowerCase().indexOf(t)>-1))}:()=>{this.filertByDocTypeKey()})}},setup(){const e=(0,c.oO)(),{getScriptById:t,saveCurrentModel:o,setEmptyModel:s,reset:i}=e,{current_model:r,selected_doc_type:n,record_id:a,sub_doc_type_key:u,display_output_view:_,script_output:p,processing:y,is_script_editor_available:m}=(0,d.bP)(e),h=(0,c.cY)(),{getDocTypesSubTypes:b}=h,{doc_type_list:f,sub_types_list:g,script_trigger_list:k,doc_type_loading:v}=(0,d.bP)(h),L=(0,l.KR)([]),w=(0,l.KR)(h.doc_type_list);return{reset:i,setEmptyModel:s,filterDocTypeList:w,sub_types_list:g,SubDocTypeFilteredList:L,doc_type_list:f,doc_type_loading:v,getDocTypesSubTypes:b,record_id:a,sub_doc_type_key:u,is_script_editor_available:m,script_output:p,display_output_view:_,selected_doc_type:n,saveCurrentModel:o,getScriptById:t,current_model:r,processing:y,CalHeight:(0,l.KR)("600"),script_trigger_list:k}}});var $=o(12807),V=o(23316),A=o(62669),x=o(44189),M=o(67837),K=o(94940),Q=o(98582),R=o.n(Q);const B=(0,$.A)(E,[["render",w]]),z=B;R()(E,"components",{QCard:V.A,QCardActions:A.A,QCardSection:x.A,QInput:M.A,QSelect:K.A});const X={style:{"vertical-align":"middle","margin-left":"10px","font-size":"20px",cursor:"pointer"}},I={style:{"vertical-align":"middle","margin-left":"10px","font-size":"20px",cursor:"pointer"}};function P(e,t,o,i,r,l){const c=(0,s.g2)("q-icon"),d=(0,s.g2)("q-btn");return(0,s.uX)(),(0,s.CE)(s.FK,null,[e.doc_type_key&&!e.sub_doc_type_key?((0,s.uX)(),(0,s.Wv)(d,{key:0,flat:"",rounded:"","data-cy":"dashboard",color:"primary",to:"/settings/manage_scripts/"+e.doc_type_key},{default:(0,s.k6)((()=>[(0,s.bF)(c,{name:"fa-solid fa-circle-arrow-left",size:"sm"}),(0,s.Lk)("label",X,(0,n.v_)(e.$t("pages.settings.document_types")),1)])),_:1},8,["to"])):(0,s.Q3)("",!0),e.doc_type_key&&e.sub_doc_type_key?((0,s.uX)(),(0,s.Wv)(d,{key:1,flat:"",rounded:"","data-cy":"dashboard",color:"primary",to:"/settings/manage_scripts/"+e.doc_type_key+"/"+e.sub_doc_type_key},{default:(0,s.k6)((()=>[(0,s.bF)(c,{name:"fa-solid fa-circle-arrow-left",size:"sm"}),(0,s.Lk)("label",I,(0,n.v_)(e.$t("sub_doc_type")),1)])),_:1},8,["to"])):(0,s.Q3)("",!0)],64)}const W=(0,s.pM)({el:"#app",mixins:[],components:{},data(){return{}},watch:{},mounted(){this.init()},methods:{init(){this.doc_type_key=String(this.$route.params.doc_type||""),this.sub_doc_type_key=String(this.$route.params.sub_doc_type||"")}},setup(){const e=(0,c.zb)(),{doc_type_key:t,sub_doc_type_key:o}=(0,d.bP)(e);return{doc_type_key:t,sub_doc_type_key:o}}});var O=o(56384),U=o(50492);const H=(0,$.A)(W,[["render",P]]),G=H;R()(W,"components",{QBtn:O.A,QIcon:U.A});var Y=o(68180),j=o(68450);const J=(0,s.pM)({el:"#app",mixins:[],props:{},components:{settingsEditor:z,ScriptBackTo:G,SubHeader:Y.A},data(){return{}},mounted:function(){this.initView()},methods:{initView(){this.load_script=!1,this.reset(),this.$route.query&&!(0,j.z)(this.$route.query.sub_doc_type_key)&&(this.sub_doc_type_key=String(this.$route.query.sub_doc_type_key||"")),this.$route.query&&!(0,j.z)(this.$route.query.id)&&(this.record_id=String(this.$route.query.id||"")),this.selected_doc_type=String(this.$route.params.doc_type||""),this.load_script=!0}},setup(){const e=(0,c.oO)(),{selected_doc_type:t,sub_doc_type_key:o,record_id:s}=(0,d.bP)(e),{reset:i}=e;return{reset:i,record_id:s,selected_doc_type:t,sub_doc_type_key:o,load_script:(0,l.KR)(!1)}}}),N=(0,$.A)(J,[["render",r]]),Z=N}}]);