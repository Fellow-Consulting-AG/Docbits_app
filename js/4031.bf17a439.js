"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[4031],{34031:(e,t,l)=>{l.r(t),l.d(t,{default:()=>pe});var o=l(61758),i=l(58790);const a=e=>((0,o.Qi)("data-v-36d0a792"),e=e(),(0,o.jt)(),e),s={class:"decision-tree-name-container"},n=["textContent"],u={class:"main-buttons"},r={class:"text-weight-bold"},d={class:"decision-tree-container"},p={class:"table-wrapper"},c={style:{width:"5px","font-size":"medium"}},m={key:0,style:{width:"50px","font-size":"medium"}},h={class:"header-row"},_=a((()=>(0,o.Lk)("img",{width:"20",height:"20",src:"images/trash-bin-default.svg",alt:"Remove Condition"},null,-1))),b={style:{width:"25px"}},v={class:"align-center",style:{"font-size":"medium"}},f={key:0},g={class:"data-row"},y={class:"trash-icon-wrapper"},k=a((()=>(0,o.Lk)("img",{width:"20",height:"20",src:"images/trash-bin-default.svg",alt:"Remove Condition"},null,-1))),C=["colspan"],w={class:"table-wrapper"},V={style:{width:"5px","font-size":"medium"}},L={class:"header-row"},R=a((()=>(0,o.Lk)("img",{width:"20",height:"20",src:"images/trash-bin-default.svg",alt:"Remove Condition"},null,-1))),U={style:{width:"25px"}},E={class:"align-center",style:{"font-size":"medium"}},x={class:"data-row"},F=a((()=>(0,o.Lk)("img",{width:"20",height:"20",src:"images/trash-bin-default.svg",alt:"Remove Condition"},null,-1))),O=["colspan"];function D(e,t,l,a,D,X){const K=(0,o.g2)("SubHeader"),T=(0,o.g2)("q-select"),A=(0,o.g2)("f-btn"),N=(0,o.g2)("q-toolbar-title"),I=(0,o.g2)("q-btn"),Q=(0,o.g2)("q-toolbar"),$=(0,o.g2)("q-input"),j=(0,o.g2)("q-card-section"),S=(0,o.g2)("q-card-actions"),q=(0,o.g2)("q-card"),W=(0,o.g2)("q-dialog"),z=(0,o.g2)("q-item-section"),J=(0,o.g2)("q-item"),M=(0,o.g2)("q-list"),P=(0,o.g2)("q-menu"),H=(0,o.g2)("q-markup-table"),Z=(0,o.g2)("q-splitter"),G=(0,o.g2)("Loader"),B=(0,o.gN)("close-popup");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(K,{name:"decisionTree_builder",label:e.decisionTreeName,show_expiry_alert:!0,display_help_link:!1,onSearch:!1},null,8,["label"]),(0,o.Lk)("div",s,[(0,o.Lk)("label",{appearance:"tertiary",class:"decision-tree-name",textContent:(0,i.v_)(e.decisionTreeName)},null,8,n)]),(0,o.Lk)("div",u,[(0,o.bF)(T,{outlined:"",modelValue:e.record.tree_rule,"onUpdate:modelValue":t[0]||(t[0]=t=>e.record.tree_rule=t),options:e.rule_options,label:e.$t("decision_tree_select_rule"),dense:"","emit-value":"","map-options":"","option-value":"value","option-label":"label",style:{width:"10%","margin-right":"5px","font-size":"0.75rem","max-height":"40px"}},null,8,["modelValue","options","label"]),(0,o.bF)(A,{label:e.$t("save"),class:"float-right",onClick:t[1]||(t[1]=t=>e.updateRecord()),style:{"margin-right":"5px",width:"7%"}},null,8,["label"]),(0,o.bF)(A,{label:e.$t("export"),class:"float-right",style:{width:"7%","margin-right":"5px"},onClick:t[2]||(t[2]=t=>e.exportTree())},null,8,["label"]),(0,o.bF)(A,{label:e.$t("test"),class:"float-right",style:{width:"7%","margin-right":"20px"},onClick:e.openTestDialog},null,8,["label","onClick"])]),(0,o.bF)(W,{modelValue:e.testDialog,"onUpdate:modelValue":t[3]||(t[3]=t=>e.testDialog=t)},{default:(0,o.k6)((()=>[(0,o.bF)(q,{style:{width:"20vw",height:"30vh"}},{default:(0,o.k6)((()=>[(0,o.bF)(Q,{class:"text-white secondary-toolbar"},{default:(0,o.k6)((()=>[(0,o.bF)(N,null,{default:(0,o.k6)((()=>[(0,o.Lk)("span",r,(0,i.v_)(e.$t("decision_tree_tester")),1)])),_:1}),(0,o.bo)((0,o.bF)(I,{flat:"",round:"",dense:"",icon:"close"},null,512),[[B]])])),_:1}),(0,o.bF)(j,null,{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.first_rule_fields,((t,l)=>((0,o.uX)(),(0,o.CE)("div",{key:l},[(0,o.bF)($,{modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,label:t.field_name,dense:"",outlined:"",placeholder:e.$t("enter_value_for")+" "+e.formatFieldName(t.field_name)},null,8,["modelValue","onUpdate:modelValue","label","placeholder"])])))),128))])),_:1}),(0,o.bF)(S,null,{default:(0,o.k6)((()=>[(0,o.bF)(I,{label:"DONE",color:"primary",onClick:e.handleDone},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Lk)("div",d,[(0,o.bF)(Z,{modelValue:e.splitter,"onUpdate:modelValue":t[7]||(t[7]=t=>e.splitter=t),class:"full-width",limits:[30,80]},{before:(0,o.k6)((()=>[(0,o.Lk)("div",p,[(0,o.bF)(H,{flat:"",class:"compact-table"},{default:(0,o.k6)((()=>[(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",c,(0,i.v_)(e.$t("decision_tree_rule")),1),"priority"==e.record.tree_rule?((0,o.uX)(),(0,o.CE)("th",m,(0,i.v_)(e.record.tree_rule.charAt(0).toUpperCase()+e.record.tree_rule.slice(1).toLowerCase()),1)):(0,o.Q3)("",!0),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.rules_condition_columns,((t,l)=>((0,o.uX)(),(0,o.CE)("th",{key:l,class:"text-left text-weight-bold"},[(0,o.Lk)("span",h,[(0,o.bF)(T,{outlined:"",modelValue:t.source,"onUpdate:modelValue":[e=>t.source=e,t=>{e.columnSourceUpdated(t,l)}],options:e.source_options,label:e.$t("decision_tree_source_field"),dense:"","emit-value":"","map-options":"","option-value":"value","option-label":"label",class:"header-item"},null,8,["modelValue","onUpdate:modelValue","options","label"]),"document_field"==t.source?((0,o.uX)(),(0,o.Wv)(T,{key:0,outlined:"",modelValue:t.label,"onUpdate:modelValue":[e=>t.label=e,t=>{e.conditionColumnUpdated(t,l)}],options:e.filtered_doc_options,label:e.$t("decision_tree_doc_field"),dense:"","emit-value":"","map-options":"","option-value":"value","option-label":"label",class:(0,i.C4)(0===l?"header-item":"new-header-item"),onFilter:e.filterDocTypes,"use-input":"","hide-selected":"","fill-input":""},null,8,["modelValue","onUpdate:modelValue","options","label","class","onFilter"])):(0,o.Q3)("",!0),"Custom Expression"==t.source||"custom_expression"==t.source?((0,o.uX)(),(0,o.Wv)($,{key:1,modelValue:t.field_value,"onUpdate:modelValue":[e=>t.field_value=e,t=>{e.columnValueUpdated(t,l)}],dense:"",outlined:"","emit-value":"","map-options":"","option-value":"value","option-label":"label",class:(0,i.C4)(0===l?"header-item":"new-header-item")},{default:(0,o.k6)((()=>["Custom Expression"==t.source||"custom_expression"==t.source?((0,o.uX)(),(0,o.Wv)(P,{key:0,anchor:"bottom left",self:"top left",fit:""},{default:(0,o.k6)((()=>[(0,o.bF)(M,null,{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.custom_expressions,(a=>((0,o.uX)(),(0,o.Wv)(J,{key:a.value,clickable:"","emit-value":"","map-options":"","option-value":"value","option-label":"label",onClick:o=>e.selectCustomExpression(a.value,l,t)},{default:(0,o.k6)((()=>[(0,o.bF)(z,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(a.label),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:2},1024)])),_:2},1024)):(0,o.Q3)("",!0)])),_:2},1032,["modelValue","onUpdate:modelValue","class"])):(0,o.Q3)("",!0),l>0?((0,o.uX)(),(0,o.Wv)(A,{key:2,appearance:"tertiary",onClick:t=>e.deleteConditionColumn(l),style:{margin:"-5px"}},{default:(0,o.k6)((()=>[_])),_:2},1032,["onClick"])):(0,o.Q3)("",!0)])])))),128)),(0,o.Lk)("th",b,[(0,o.bF)(A,{appearance:"tertiary",icon:"add",class:"new-column-button",onClick:t[4]||(t[4]=t=>e.addNewConditionColumn())})])])]),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.rules,((t,l)=>((0,o.uX)(),(0,o.CE)("tr",{key:l,class:(0,i.C4)({"highlight-color":e.highlightedLineIDs.includes(t.id)})},[(0,o.Lk)("td",null,[(0,o.Lk)("span",v,(0,i.v_)(l+1),1)]),"priority"==e.record.tree_rule?((0,o.uX)(),(0,o.CE)("td",f,[(0,o.bF)($,{modelValue:t.priority,"onUpdate:modelValue":[e=>t.priority=e,l=>e.validatePriority(t.priority)],modelModifiers:{number:!0},type:"number",dense:"",outlined:"",min:"1",max:"999",style:{"min-width":"60px","margin-top":"10px"}},null,8,["modelValue","onUpdate:modelValue"])])):(0,o.Q3)("",!0),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.conditions,((t,l)=>((0,o.uX)(),(0,o.CE)("td",{key:l},[(0,o.Lk)("span",g,["user"===t.source||"User"==t.source?((0,o.uX)(),(0,o.Wv)(T,{key:0,outlined:"",dense:"","emit-value":"","map-options":"","option-value":"value",modelValue:t["operator"],"onUpdate:modelValue":e=>t["operator"]=e,options:e.bool_options,"option-label":"label",label:e.$t("decision_tree_select_operator"),class:"data-item"},null,8,["modelValue","onUpdate:modelValue","options","label"])):"custom_expression"!==t.source&&"Custom Expression"!=t.source||"[status]"!==t.field_value?((0,o.uX)(),(0,o.Wv)(T,{key:2,outlined:"",modelValue:t["operator"],"onUpdate:modelValue":e=>t["operator"]=e,options:""==t["type"]?e.empty_options:"STRING"===t["type"]||"CURRENCY"===t["type"]?e.string_options:""===t["type"]?[]:e.amount_options,dense:"","emit-value":"","map-options":"","option-value":"value","option-label":"label",label:e.$t("decision_tree_select_operator"),class:"data-item"},null,8,["modelValue","onUpdate:modelValue","options","label"])):((0,o.uX)(),(0,o.Wv)(T,{key:1,outlined:"",dense:"","emit-value":"","map-options":"","option-value":"value",modelValue:t["operator"],"onUpdate:modelValue":e=>t["operator"]=e,options:e.bool_options,"option-label":"label",label:e.$t("decision_tree_select_operator"),class:"data-item"},null,8,["modelValue","onUpdate:modelValue","options","label"])),"User"==t.source||"user"==t.source?((0,o.uX)(),(0,o.Wv)(T,{key:3,outlined:"",modelValue:t["value"],"onUpdate:modelValue":e=>t["value"]=e,options:e.userOptions,label:e.$t("select_user"),dense:"","emit-value":"","map-options":"","option-value":"value","option-label":"label",class:"data-item"},null,8,["modelValue","onUpdate:modelValue","options","label"])):"custom_expression"!==t.source&&"Custom Expression"!=t.source||"[status]"!==t.field_value?((0,o.uX)(),(0,o.Wv)($,{key:5,modelValue:t["value"],"onUpdate:modelValue":e=>t["value"]=e,placeholder:e.$t("decision_tree_add_value"),dense:"",outlined:"",class:"data-item"},null,8,["modelValue","onUpdate:modelValue","placeholder"])):((0,o.uX)(),(0,o.Wv)(T,{key:4,outlined:"",modelValue:t["value"],"onUpdate:modelValue":e=>t["value"]=e,options:e.status_options,label:e.$t("select_status"),dense:"","emit-value":"","map-options":"","option-value":"value","option-label":"label",class:"data-item"},null,8,["modelValue","onUpdate:modelValue","options","label"]))])])))),128)),(0,o.Lk)("td",null,[(0,o.Lk)("div",y,[l>0?((0,o.uX)(),(0,o.Wv)(A,{key:0,appearance:"tertiary",onClick:t=>e.deleteRuleLine(l),style:{margin:"-5px"},class:"data-item"},{default:(0,o.k6)((()=>[k])),_:2},1032,["onClick"])):(0,o.Q3)("",!0)])])],2)))),128)),(0,o.Lk)("tr",null,[(0,o.Lk)("td",{colspan:e.rules_condition_columns.length+2},[(0,o.bF)(A,{appearance:"tertiary",label:e.$t("decision_tree_add_new_row"),class:"new-row-button",onClick:t[5]||(t[5]=t=>e.AddNewRuleline())},null,8,["label"])],8,C)])])])),_:1})])])),after:(0,o.k6)((()=>[(0,o.Lk)("div",w,[(0,o.bF)(H,{flat:"",class:"result-table-wrapper compact-table"},{default:(0,o.k6)((()=>[(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",V,(0,i.v_)(e.$t("decision_tree_result")),1),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.result_columns,((t,l)=>((0,o.uX)(),(0,o.CE)("th",{key:l,class:"text-left text-weight-bold"},[(0,o.Lk)("span",L,[(0,o.bF)(T,{outlined:"",modelValue:t.output_type,"onUpdate:modelValue":[e=>t.output_type=e,t=>{e.resultColumnUpdated(t,l)}],options:e.return_options,label:e.$t("decision_tree_return_type"),dense:"","emit-value":"","map-options":"","option-value":"value","option-label":"label",class:"header-item"},null,8,["modelValue","onUpdate:modelValue","options","label"]),"document_fields"==t.output_type?((0,o.uX)(),(0,o.Wv)(T,{key:0,outlined:"",modelValue:t.field_name,"onUpdate:modelValue":[e=>t.field_name=e,t=>{e.resultColumnDropdownUpdated(t,l)}],options:e.columnOptions,label:e.$t("decision_tree_doc_field"),dense:"","emit-value":"","map-options":"","option-label":"label",class:"new-header-item"},null,8,["modelValue","onUpdate:modelValue","options","label"])):(0,o.Q3)("",!0),l>0?((0,o.uX)(),(0,o.Wv)(A,{key:1,appearance:"tertiary",onClick:t=>e.removeResultColumn(l)},{default:(0,o.k6)((()=>[R])),_:2},1032,["onClick"])):(0,o.Q3)("",!0)])])))),128)),(0,o.Lk)("th",U,[(0,o.bF)(A,{appearance:"tertiary",icon:"add",class:"new-column-button",onClick:e.addResultColumn},null,8,["onClick"])])])]),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.rules,((t,l)=>((0,o.uX)(),(0,o.CE)("tr",{key:l,class:(0,i.C4)({"highlight-color":e.highlightedLineIDs.includes(t.id)})},[(0,o.Lk)("td",null,[(0,o.Lk)("span",E,(0,i.v_)(l+1),1)]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.output,((t,l)=>((0,o.uX)(),(0,o.CE)("td",{key:l},[(0,o.Lk)("span",x,["value"==t["output_type"]||"document_fields"==t["output_type"]?((0,o.uX)(),(0,o.Wv)($,{key:0,modelValue:t["value"],"onUpdate:modelValue":e=>t["value"]=e,class:"data-item",placeholder:e.$t("decision_tree_add_value"),dense:"",outlined:""},null,8,["modelValue","onUpdate:modelValue","placeholder"])):"user"===t["output_type"]?((0,o.uX)(),(0,o.Wv)(T,{key:1,outlined:"",modelValue:t["value"],"onUpdate:modelValue":e=>t["value"]=e,options:e.userOptions,label:e.$t("select_user"),dense:"","emit-value":"","map-options":"","option-value":"value","option-label":"label",class:"data-item"},null,8,["modelValue","onUpdate:modelValue","options","label"])):"group"===t["output_type"]?((0,o.uX)(),(0,o.Wv)(T,{key:2,outlined:"",modelValue:t["value"],"onUpdate:modelValue":e=>t["value"]=e,options:e.groupOptions,label:e.$t("decision_tree_select_group"),dense:"","emit-value":"","map-options":"","option-value":"value","option-label":"label",class:"data-item"},null,8,["modelValue","onUpdate:modelValue","options","label"])):(0,o.Q3)("",!0)])])))),128)),(0,o.Lk)("td",null,[l>0?((0,o.uX)(),(0,o.Wv)(A,{key:0,appearance:"tertiary",onClick:t=>e.deleteRuleLine(l)},{default:(0,o.k6)((()=>[F])),_:2},1032,["onClick"])):(0,o.Q3)("",!0)])],2)))),128)),(0,o.Lk)("tr",null,[(0,o.Lk)("td",{colspan:e.result_columns.length+2},[(0,o.bF)(A,{appearance:"tertiary",label:e.$t("decision_tree_add_new_row"),class:"new-row-button",onClick:t[6]||(t[6]=t=>e.AddNewRuleline())},null,8,["label"])],8,O)])])])),_:1})])])),_:1},8,["modelValue"]),(0,o.bF)(G)])],64)}var X=l(38734),K=l(23537),T=l(24622),A=l(96056),N=l(89156),I=l(77362),Q=l(11470),$=l(18505),j=l(68450),S=l(64775),q=function(e,t,l,o){function i(e){return e instanceof l?e:new l((function(t){t(e)}))}return new(l||(l=Promise))((function(l,a){function s(e){try{u(o.next(e))}catch(t){a(t)}}function n(e){try{u(o["throw"](e))}catch(t){a(t)}}function u(e){e.done?l(e.value):i(e.value).then(s,n)}u((o=o.apply(e,t||[])).next())}))};const W=(0,o.pM)({name:"decisionDesigner",mixins:[T.A,A.A,$.A],components:{Loader:N.A,SubHeader:I.A},mounted(){this.initView(),window.dt=this},methods:{openTestDialog(){this.first_rule_fields=JSON.parse(JSON.stringify(this.rules[0].conditions)),this.testDialog=!0},highlightLines(e){this.clearHighlight();for(let t of e)for(let[e,l]of Object.entries(this.rules))l.id==t&&(this.highlightedLineID=t,Array.isArray(this.highlightedLineIDs)||(this.highlightedLineIDs=[]),this.highlightedLineIDs.push(t))},clearHighlight(){this.highlightedLineIDs=[]},handleDone(){return q(this,void 0,void 0,(function*(){const e=this.$route.params.id;this.first_rule_fields.forEach((e=>{this.doc_fields.push({name:e.field_name,value:e.value})})),this.showLoading();const t=yield Q.oZ.testDecisionTree(JSON.stringify(this.doc_fields),e);if(this.initView(),this.hideLoading(),1==t.success){logInfo(t);let e=[];null!=t.ID&&Array.isArray(t.ID)?(e=t.ID,this.highlightLines(e)):(this.clearHighlight(),this.showSuccessToast(t.message))}else this.clearHighlight(),this.showSuccessToast(t.message);this.doc_fields=[],this.testDialog=!1}))},initView(){return q(this,void 0,void 0,(function*(){const e=this.$route.params.id;try{this.showLoading();const t=yield Q.oZ.getDecisionTree(e);if(t.hasOwnProperty("success")&&!1===t.success)throw t;if(this.record=t.data,this.decisionTreeName=this.record.name,this.splitter=65,yield this.getData(),(0,j.z)(this.record.data))return void this.initData();this.prepareDataForView()}catch(t){const e=S.t.getErrorMessage(t);this.showErrorToast(e),logError(t)}finally{this.hideLoading()}}))},getData(){return q(this,void 0,void 0,(function*(){try{const e=yield Q.oZ.getDocumentTypeFields(this.record.doc_type),t=yield Q.jD.getUsers(),l=yield Q.jD.getGroups();this.columnOptions=[],this.userOptions=[],this.groupOptions=[],this.field_type_mapping={},e.forEach((e=>{this.columnOptions.push({label:this.formatFieldName(e.field_name),value:e.field_name,type:e.field_type})})),t.forEach((e=>{this.userOptions.push({label:e.first_name+" "+e.last_name,value:e.id})})),l.forEach((e=>{this.groupOptions.push({label:e.name,value:e.id})}))}catch(e){this.showErrorToast(e)}finally{this.hideLoading()}}))},getFieldType(e){const t=this.columnOptions.findIndex((t=>t.value===e));this.field_type_mapping.hasOwnProperty(e)||(this.field_type_mapping[e]=this.columnOptions[t].type)},updateRecord(){return q(this,void 0,void 0,(function*(){if(this.isValid)try{this.showLoading(),yield Q.oZ.updateTable(this.record.id,this.generateJSON()),this.showSuccessToast("Saved successfully")}catch(e){const t=S.t.getErrorMessage(e);this.showErrorToast(t),logError(e)}finally{this.hideLoading()}else this.showErrorToast("Invalid priority value\nPlease select a value 1-999")}))},exportTree(){const e=String(this.record.name),t=this.generateJSON();try{const l=new Blob([t],{type:"application/json"}),o=window.URL.createObjectURL(l),i=document.createElement("a");i.href=o,i.download=`${e}.json`,document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(o),document.body.removeChild(i)}catch(l){logError("Error exporting or downloading file:",l)}},formatFieldName(e){let t=e.split("_").map((e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join(" ");return t=t+" ("+e+")",t},initData(){this.rules.push(this.getEmptyRule()),this.rules[0].conditions.push(this.getEmptyCondition()),this.rules[0].output.push(this.getEmptyDecisionResult()),this.setColumns()},setColumns(){this.setConditionColumns(),this.setResultColumns()},getEmptyRule(){return{id:0,priority:0,conditions:[],output:[]}},setConditionColumns(){this.rules_condition_columns=[];for(let[e,t]of Object.entries(this.rules[0].conditions)){const e=t;this.rules_condition_columns.push({source:e.source,label:this.formatFieldName(e.field_name),value:e.field_name,field_value:e.field_value})}},setResultColumns(){this.result_columns=[];for(let[e,t]of Object.entries(this.rules[0].output)){const e=t;this.result_columns.push({output_type:e.output_type,field_name:e.field_name})}},getEmptyCondition(){return{source:"",field_name:"",operator:"",value:"",type:"",field_value:""}},getEmptyDecisionResult(){return{field_name:"",output_type:"value",value:"",field_type:""}},prepareDataForView(){try{if((0,j.z)(this.record.data))return void this.initData();this.rules=this.record.data,this.setColumns()}catch(e){logError("Error loading decision tree data:",e),this.showErrorToast(e)}},columnSourceUpdated(e,t){for(let[l,o]of Object.entries(this.rules))o.conditions[t].field_name="",o.conditions[t].source=e,o.conditions[t].field_name="custom_expression"===e?e:""},columnValueUpdated(e,t){for(let[l,o]of Object.entries(this.rules))o.conditions[t].field_value=e},conditionColumnUpdated(e,t){this.cst_column_value_types.includes(e)||this.getFieldType(e);for(let[l,o]of Object.entries(this.rules))o.conditions[t].field_name=e,o.conditions[t].type=this.field_type_mapping[e],o.conditions[t].operator="",o.conditions[t].field_value=""},resultColumnDropdownUpdated(e,t){this.getFieldType(e);for(let[l,o]of Object.entries(this.rules))o.output[t].field_name=e,o.output[t].field_type=this.field_type_mapping[e]},resultColumnUpdated(e,t){for(let[l,o]of Object.entries(this.rules))o.output[t].output_type=e,o.output[t].field_name="",o.output[t].field_type="",o.output[t].value=""},generateJSON(){let e={tree_rule:this.record.tree_rule,doc_type:this.record.doc_type,data:this.rules};const t=JSON.stringify(e,null,2);return t},addNewConditionColumn(){for(let[e,t]of Object.entries(this.rules))t.conditions.push(this.getEmptyCondition());this.setConditionColumns()},deleteRuleLine(e){this.rules.splice(e,1)},addResultColumn(){for(let[e,t]of Object.entries(this.rules))t.output.push(this.getEmptyDecisionResult());this.setResultColumns()},getNewRuleConditions(){const e=[];for(let[t,l]of Object.entries(this.rules[0].conditions)){const t=l,o=this.getEmptyCondition();o.field_name=t.field_name,o.type=t.type,o.field_value=t.field_value,e.push(o)}return e},getNewRuleResult(){const e=[];for(let[t,l]of Object.entries(this.rules[0].output)){const t=l,o=this.getEmptyDecisionResult();o.field_name=t.field_name,o.output_type=t.output_type,o.field_type=t.field_type,e.push(o)}return e},AddNewRuleline(){let e=this.getEmptyRule();e.conditions=this.getNewRuleConditions(),e.output=this.getNewRuleResult(),e.id=this.rules.length,this.rules.push(e)},deleteConditionColumn(e){for(let[t,l]of Object.entries(this.rules))l.conditions.splice(e,1);this.setConditionColumns()},removeResultColumn(e){for(let[t,l]of Object.entries(this.rules))l.output.splice(e,1);this.setResultColumns()},selectCustomExpression(e,t,l){for(let[o,i]of Object.entries(this.rules))i.conditions[t].field_value+=e,l.field_value=i.conditions[t].field_value,"[category]"===i.conditions[t].field_value?i.conditions[t].type="STRING":i.conditions[t].type="AMOUNT"},filterDocTypes(e,t){""===e&&t((()=>{this.filtered_doc_options=this.columnOptions})),t((()=>{const t=e.toLowerCase();this.filtered_doc_options=this.columnOptions.filter((e=>e.label.toLowerCase().includes(t)))}))},validatePriority(e){return this.isValid=!(e<1||e>999),this.isValid}},setup(){const{t:e}=(0,K.s9)(),t=(0,X.KR)([{label:"!=",value:"!="},{label:"=",value:"="},{label:"<",value:"<"},{label:">",value:">"},{label:">=",value:">="},{label:"<=",value:"<="}]),l=(0,X.KR)([{label:e("is"),value:"is"},{label:e("isnot"),value:"is_not"},{label:e("starts_with"),value:"starts_with"},{label:e("ends_with"),value:"ends_with"},{label:e("contains"),value:"contains"},{label:e("not_contains"),value:"not_contain"}]),o=(0,X.KR)([{label:e("return_value"),value:"value"},{label:e("set_document_field"),value:"document_fields"},{label:e("return_user"),value:"user"},{label:e("return_group"),value:"group"}]),i=(0,X.KR)([{label:e("unique"),value:"unique"},{label:e("first"),value:"first"},{label:e("priority"),value:"priority"},{label:e("collect_sum"),value:"collect_sum"},{label:e("collect_min"),value:"collect_min"},{label:e("collect_max"),value:"collect_max"},{label:e("collect_count"),value:"collect_count"},{label:e("rule_order"),value:"rule_order"},{label:e("match_any"),value:"any"},{label:e("first_and_adjacent"),value:"first & adjacent"}]),a=(0,X.KR)([{label:e("is"),value:"is"},{label:e("isnot"),value:"is_not"}]),s=(0,X.KR)([{label:e("active"),value:"active"},{label:e("inactive"),value:"inactive"}]),n=(0,X.KR)([]),u=(0,X.KR)([{label:e("spending"),value:"[spending]"},{label:e("quantity_spending"),value:"[qty_spending]"},{label:e("unit_price_spending"),value:"[unit_price_spending]"},{label:e("category"),value:"[category]"},{label:e("unit_price_and_charge_spending"),value:"[unit_price_and_charge_spending]"},{label:e("status"),value:"[status]"}]),r=(0,X.KR)([{label:e("wf_card_Docfield"),value:"document_field"},{label:e("user"),value:"user"},{label:e("custom_expression"),value:"custom_expression"}]);return{highlightedLineIDs:[],highlightedLineID:null,first_rule_fields:(0,X.KR)([]),testDialog:(0,X.KR)(!1),data:(0,X.KR)([]),rules:(0,X.KR)([]),rules_condition_columns:(0,X.KR)([]),result_columns:(0,X.KR)([]),columnOptions:(0,X.KR)([{label:"",value:"",type:""},{label:"",value:"",type:""}]),userOptions:(0,X.KR)([{label:"",value:""},{label:"",value:""}]),groupOptions:(0,X.KR)([{label:"",value:""},{label:"",value:""}]),amount_options:t,string_options:l,return_options:o,rule_options:i,bool_options:a,status_options:s,empty_options:n,field_type_mapping:(0,X.KR)({}),record:(0,X.KR)({}),custom_expressions:u,decisionTreeName:(0,X.KR)(""),splitter:(0,X.KR)(50),cst_column_value_types:["custom_expression"],filtered_doc_options:(0,X.KR)([{label:"",value:"",type:""},{label:"",value:"",type:""}]),source_options:r,sourceOptions:(0,X.KR)([{label:"",value:""},{label:"",value:""}]),doc_fields:(0,X.KR)([]),isValid:(0,X.KR)(!0)}}});var z=l(12807),J=l(94940),M=l(82156),P=l(23316),H=l(36914),Z=l(39150),G=l(56384),B=l(44189),Y=l(67837),ee=l(62669),te=l(98072),le=l(857),oe=l(84436),ie=l(53999),ae=l(90124),se=l(25173),ne=l(88672),ue=l(98582),re=l.n(ue);const de=(0,z.A)(W,[["render",D],["__scopeId","data-v-36d0a792"]]),pe=de;re()(W,"components",{QSelect:J.A,QDialog:M.A,QCard:P.A,QToolbar:H.A,QToolbarTitle:Z.A,QBtn:G.A,QCardSection:B.A,QInput:Y.A,QCardActions:ee.A,QSplitter:te.A,QMarkupTable:le.A,QMenu:oe.A,QList:ie.A,QItem:ae.A,QItemSection:se.A}),re()(W,"directives",{ClosePopup:ne.A})}}]);