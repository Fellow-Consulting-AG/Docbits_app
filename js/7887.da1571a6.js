"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[7887],{27887:(e,t,a)=>{a.r(t),a.d(t,{default:()=>me});var l=a(61758),i=a(58790);const s=e=>((0,l.Qi)("data-v-26b71620"),e=e(),(0,l.jt)(),e),o={key:0,class:"container-wrapper q-pa-lg settings",id:"access_control_detail"},d={class:"row full-width items-center"},n={class:"col-6"},c={class:"q-ma-xs text-lg"},r={class:"col-6"},u={class:"full-width q-my-md"},p={class:"highlighted-back"},_=s((()=>(0,l.Lk)("th",{class:"text-h4 text-center"},null,-1))),h={class:"text-h4 text-center"},m={class:"text-h4 text-center"},v={class:"text-h4 text-center"},f={class:"text-h4 text-center"},b={class:"text-h4 text-center"},g={class:"text-h4 text-center"},k={class:"text-h4 text-center"},y={class:"text-h4 text-center"},x={class:"text-h4 text-center"},F={class:"text-h4 text-center"},L={key:0,class:"text-h4 text-center"},w={key:1,class:"text-h4 text-center"},D={class:"full-width"},$={class:"q-ma-md"},A={class:"relative"},q={class:"row",style:{width:"1200px"}},T={class:"row items-center q-ma-xs"},C={class:"q-mx-xs"},V={class:"q-mx-xs font-size-12 field_color"},E={class:"q-mx-xs"},X={class:"row",style:{width:"1200px"}},Q={class:"row items-center q-ma-xs"},I={class:"q-mx-xs"},K={class:"q-mx-xs font-size-12 field_color"},S={class:"q-mx-xs"};function P(e,t,a,s,P,O){const U=(0,l.g2)("SubHeader"),W=(0,l.g2)("BackToSettings"),B=(0,l.g2)("f-btn"),R=(0,l.g2)("q-icon"),H=(0,l.g2)("q-item-label"),N=(0,l.g2)("q-item-section"),j=(0,l.g2)("q-item"),z=(0,l.g2)("q-select"),G=(0,l.g2)("q-markup-table"),M=(0,l.g2)("q-tab"),J=(0,l.g2)("q-tabs"),Y=(0,l.g2)("q-separator"),Z=(0,l.g2)("q-tab-panel"),ee=(0,l.g2)("q-tab-panels"),te=(0,l.g2)("Loader");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(U,{label:e.$t("access_control"),onSearch:!1,show_expiry_alert:!0,name:"access_control",display_help_link:!1},null,8,["label"]),(0,l.bF)(W,{back_to_rotue:`/settings/access_control/${e.group_name}/${e.group_id}`,label:e.$t("back")},null,8,["back_to_rotue","label"]),e.renderComponent?((0,l.uX)(),(0,l.CE)("div",o,[(0,l.Lk)("div",d,[(0,l.Lk)("div",n,[(0,l.Lk)("span",c,(0,i.v_)(e.formatGroupName)+" - "+(0,i.v_)(e.formatDocId),1)]),(0,l.Lk)("div",r,[(0,l.bF)(B,{label:e.$t("save"),class:"q-ma-xs float-right",onClick:t[0]||(t[0]=t=>e.save())},null,8,["label"])])]),(0,l.Lk)("div",u,[(0,l.bF)(G,{dense:"",flat:"",bordered:"",separator:"cell",class:"dashboard-table-style fields-table-height back-white dashboard-table-header-sticky"},{default:(0,l.k6)((()=>[(0,l.Lk)("thead",null,[(0,l.Lk)("tr",p,[_,(0,l.Lk)("th",h,(0,i.v_)(e.$t("access")),1),(0,l.Lk)("th",m,(0,i.v_)(e.$t("list")),1),(0,l.Lk)("th",v,(0,i.v_)(e.$t("view")),1),(0,l.Lk)("th",f,(0,i.v_)(e.$t("edit")),1),(0,l.Lk)("th",b,(0,i.v_)(e.$t("delete")),1),(0,l.Lk)("th",g,(0,i.v_)(e.$t("mass_update")),1),(0,l.Lk)("th",k,(0,i.v_)(e.$t("first_approval")),1),(0,l.Lk)("th",y,(0,i.v_)(e.$t("second_approval")),1),(0,l.Lk)("th",x,(0,i.v_)(e.$t("unlock_document")),1)])]),(0,l.Lk)("tbody",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",F,(0,i.v_)(e.formatDocId),1),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.fields,(t=>((0,l.uX)(),(0,l.CE)(l.FK,{key:t},["access"===t?((0,l.uX)(),(0,l.CE)("th",L,[(0,l.bF)(z,{borderless:"",modelValue:e.apiData[e.group_id][e.doc_id][t],"onUpdate:modelValue":a=>e.apiData[e.group_id][e.doc_id][t]=a,options:e.accessOptionList,dense:"","emit-value":"","map-options":"","hide-dropdown-icon":""},{option:(0,l.k6)((a=>[(0,l.bF)(j,(0,l.v6)({ref_for:!0},a.itemProps),{default:(0,l.k6)((()=>[(0,l.bF)(N,null,{default:(0,l.k6)((()=>[(0,l.bF)(H,null,{default:(0,l.k6)((()=>[a.opt.value===e.apiData[e.group_id][e.doc_id][t]?((0,l.uX)(),(0,l.Wv)(R,{key:0,name:"check",class:"q-ml-xs",color:"primary"})):(0,l.Q3)("",!0),(0,l.eW)(" "+(0,i.v_)(a.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:2},1032,["modelValue","onUpdate:modelValue","options"])])):((0,l.uX)(),(0,l.CE)("th",w,[(0,l.bF)(z,{borderless:"",modelValue:e.apiData[e.group_id][e.doc_id][t],"onUpdate:modelValue":a=>e.apiData[e.group_id][e.doc_id][t]=a,options:e.listOption,dense:"","emit-value":"","map-options":"","hide-dropdown-icon":""},{option:(0,l.k6)((a=>[(0,l.bF)(j,(0,l.v6)({ref_for:!0},a.itemProps),{default:(0,l.k6)((()=>[(0,l.bF)(N,null,{default:(0,l.k6)((()=>[(0,l.bF)(H,null,{default:(0,l.k6)((()=>[a.opt.value===e.apiData[e.group_id][e.doc_id][t]?((0,l.uX)(),(0,l.Wv)(R,{key:0,name:"check",class:"q-ml-xs",color:"primary"})):(0,l.Q3)("",!0),(0,l.eW)(" "+(0,i.v_)(a.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:2},1032,["modelValue","onUpdate:modelValue","options"])]))],64)))),128))])])])),_:1})]),(0,l.Lk)("div",D,[(0,l.Lk)("span",$,(0,i.v_)(e.$t("field_permission")),1),(0,l.Lk)("div",A,[(0,l.bF)(J,{modelValue:e.activeTab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.activeTab=t),dense:"","active-class":"highlighted-back","indicator-color":"primary","active-color":"primary",align:"justify"},{default:(0,l.k6)((()=>[(0,l.bF)(M,{name:"table_columns",label:e.$t("table_columns")},null,8,["label"]),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.field_setting,(t=>((0,l.uX)(),(0,l.Wv)(M,{key:t.name,name:t.name,label:e.$t(`${t.name}`)},null,8,["name","label"])))),128))])),_:1},8,["modelValue"]),(0,l.bF)(Y),(0,l.bF)(ee,{modelValue:e.activeTab,"onUpdate:modelValue":t[2]||(t[2]=t=>e.activeTab=t),animated:""},{default:(0,l.k6)((()=>[(0,l.bF)(Z,{name:"table_columns"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",q,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.table_columns,(t=>((0,l.uX)(),(0,l.CE)("div",{class:"width-500 text-right",key:t.column_name},[(0,l.Lk)("div",T,[(0,l.Lk)("div",C,(0,i.v_)(null===t||void 0===t?void 0:t.column_name),1),(0,l.Lk)("div",V,(0,i.v_)(`[${null===t||void 0===t?void 0:t.column_name}]`),1),(0,l.Lk)("div",E,[(0,l.bF)(z,{modelValue:e.apiData[e.group_id][e.doc_id]["fields"][t.id],"onUpdate:modelValue":a=>e.apiData[e.group_id][e.doc_id]["fields"][t.id]=a,filled:"",options:e.fieldPropertiesOptions,dense:"","emit-value":"","map-options":"","hide-dropdown-icon":""},{option:(0,l.k6)((t=>[(0,l.bF)(j,(0,l.v6)({ref_for:!0},t.itemProps),{default:(0,l.k6)((()=>[(0,l.bF)(N,null,{default:(0,l.k6)((()=>[(0,l.bF)(H,null,{default:(0,l.k6)((()=>[t.opt.value===e.option?((0,l.uX)(),(0,l.Wv)(R,{key:0,name:"check",class:"q-ml-xs",color:"primary"})):(0,l.Q3)("",!0),(0,l.eW)(" "+(0,i.v_)(t.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:2},1032,["modelValue","onUpdate:modelValue","options"])])])])))),128))])])),_:1}),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.field_setting,(t=>((0,l.uX)(),(0,l.Wv)(Z,{key:t.name,name:t.name},{default:(0,l.k6)((()=>[(0,l.Lk)("div",X,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(null===t||void 0===t?void 0:t.rows,((t,a)=>((0,l.uX)(),(0,l.CE)(l.FK,{key:a},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(t,(t=>((0,l.uX)(),(0,l.CE)("div",{class:"width-500 text-right",key:t.id},[(0,l.Lk)("div",Q,[(0,l.Lk)("div",I,(0,i.v_)(t.title),1),(0,l.Lk)("div",K,(0,i.v_)(`[${null===t||void 0===t?void 0:t.field_name}]`),1),(0,l.Lk)("div",S,[(0,l.bF)(z,{modelValue:e.apiData[e.group_id][e.doc_id]["fields"][t.id],"onUpdate:modelValue":a=>e.apiData[e.group_id][e.doc_id]["fields"][t.id]=a,filled:"",options:e.fieldPropertiesOptions,dense:"","emit-value":"","map-options":"","hide-dropdown-icon":""},{option:(0,l.k6)((t=>[(0,l.bF)(j,(0,l.v6)({ref_for:!0},t.itemProps),{default:(0,l.k6)((()=>[(0,l.bF)(N,null,{default:(0,l.k6)((()=>[(0,l.bF)(H,null,{default:(0,l.k6)((()=>[t.opt.value===e.option?((0,l.uX)(),(0,l.Wv)(R,{key:0,name:"check",class:"q-ml-xs",color:"primary"})):(0,l.Q3)("",!0),(0,l.eW)(" "+(0,i.v_)(t.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:2},1032,["modelValue","onUpdate:modelValue","options"])])])])))),128))],64)))),128))])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])])])):(0,l.Q3)("",!0),(0,l.bF)(te)],64)}var O=a(38734),U=a(66693),W=a(25773),B=a(11470),R=a(8420),H=a(24622),N=a(96056),j=a(18505),z=a(1595),G=a(1659),M=a(85487),J=function(e,t,a,l){function i(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,s){function o(e){try{n(l.next(e))}catch(t){s(t)}}function d(e){try{n(l["throw"](e))}catch(t){s(t)}}function n(e){e.done?a(e.value):i(e.value).then(o,d)}n((l=l.apply(e,t||[])).next())}))};const Y=(0,l.pM)({el:"#app",mixins:[H.A,N.A,j.A],mounted(){return J(this,void 0,void 0,(function*(){yield this.init()}))},components:{SubHeader:U.A,BackToSettings:W.A,Loader:R.A},computed:{formatDocId(){const e=(0,M.I)(),t=this.doc_id;return t.includes(e)?t.replace("_"+e,"").replace(/_/g," "):t.replace(/_/g," ")},formatGroupName(){return this.group_name.replace(/_/g," ")}},methods:{init(){return J(this,void 0,void 0,(function*(){this.showLoading();try{yield this.getTableColumns(),yield this.getFields(),yield this.accessDetail()}catch(e){}finally{this.renderComponent=!0,this.hideLoading()}}))},updateDocTyleFields(e){return J(this,void 0,void 0,(function*(){try{const t=new FormData;t.append("data",e);const a=yield B.lr.updateAllDocTypeSettings(t);if(!1===a.success)throw{message:a.message}}catch(t){throw t}}))},save(){return J(this,void 0,void 0,(function*(){this.showLoading();const e=JSON.stringify(this.apiData);try{yield this.updateDocTyleFields(e),yield this.accessDetail(),this.showSuccessToast(this.$t("save_successfully"))}catch(t){this.showErrorToast(this.$t("pages.messages.error_internal_occur"))}finally{this.hideLoading()}}))},accessDetail(){return J(this,void 0,void 0,(function*(){yield this.getAllDocTypeFieldsForAccessControl(this.group_id),this.mappingValueForDetailFields()}))},mappingValueForDetailFields(){this.apiData[this.group_id][this.doc_id]||(this.apiData[this.group_id][this.doc_id]={});const e=this.apiData[this.group_id][this.doc_id];e&&(this.fields.forEach((t=>{void 0===e[t]&&(e[t]=0)})),void 0===e["fields"]&&(e["fields"]={}),Array.from(this.field_setting).forEach((t=>{Array.from(t.rows).forEach((t=>{Array.from(t).forEach((t=>{void 0===e["fields"][t.id]&&(e["fields"][t.id]=2)}))}))})),this.table_columns.map((t=>{void 0===e["fields"][t.id]&&(e["fields"][t.id]=2)})))},getFields(){return J(this,void 0,void 0,(function*(){this.field_setting=[];const e={doc_type:this.doc_id};try{const t=yield B.bg.getFieldSettingsByType(e);if(!1===t.success)throw t;this.field_setting=t.field_setting}catch(t){throw t}}))},getTableColumns(){var e;return J(this,void 0,void 0,(function*(){this.table_columns=[];try{const t=yield B.p5.getTableColumns(this.doc_id);if(!1===t.success)throw{message:t.data.message};this.table_columns=null===(e=null===t||void 0===t?void 0:t.data)||void 0===e?void 0:e[this.doc_id+"_TABLE"]}catch(t){}}))}},data(){return{activeTab:(0,O.KR)("table_columns"),table_columns:(0,O.KR)([]),field_setting:(0,O.KR)([]),renderComponent:(0,O.KR)(!1),group_id:this.$route.params.group_id,doc_id:this.$route.params.doc_type,group_name:this.$route.params.group_name,fieldPropertiesOptions:[{label:this.$t("read_write"),value:2},{label:this.$t("read_owner_write"),value:4},{label:this.$t("readonly"),value:1},{label:this.$t("owner_read_owner_write"),value:8},{label:this.$t("approval"),value:16},{label:this.$t("none"),value:0}]}},setup(){const e=(0,z.H4)(),{accessOptionList:t,listOption:a,processing:l,apiData:i,fields:s}=(0,G.bP)(e),{getAllDocTypeFieldsForAccessControl:o}=e;return{accessOptionList:t,listOption:a,processing:l,apiData:i,fields:s,getAllDocTypeFieldsForAccessControl:o}}});var Z=a(12807),ee=a(857),te=a(94940),ae=a(90124),le=a(25173),ie=a(13796),se=a(50492),oe=a(42980),de=a(10327),ne=a(10386),ce=a(39041),re=a(71746),ue=a(67156),pe=a(98582),_e=a.n(pe);const he=(0,Z.A)(Y,[["render",P],["__scopeId","data-v-26b71620"]]),me=he;_e()(Y,"components",{QMarkupTable:ee.A,QSelect:te.A,QItem:ae.A,QItemSection:le.A,QItemLabel:ie.A,QIcon:se.A,QTabs:oe.A,QTab:de.A,QSeparator:ne.A,QTabPanels:ce.A,QTabPanel:re.A,QField:ue.A})}}]);