"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[8558],{98558:(e,t,a)=>{a.r(t),a.d(t,{default:()=>fe});var o=a(61758),n=a(58790);const l={class:"masterdata-create-container white-inputs"},s={class:"text-center column items-center"},i={class:"masterdata-tab-subheader"},r={class:"row justify-center q-gutter-md q-mt-md"},d={class:"row"},u={class:"q-mt-md row"},_={class:"masterdata-tab-subheader"},m={class:"row q-mt-sm"},p={style:{"text-align":"left"}},c=(0,o.Lk)("th",{style:{width:"5%"}},null,-1),h={style:{width:"4%"}},b=(0,o.Lk)("span",{class:"masterdata-tab-subheader"},"Headers",-1),f={class:"row q-mt-sm"},y={style:{"text-align":"left"}},k=(0,o.Lk)("th",{style:{width:"5%"}},null,-1),g={style:{width:"4%"}},v={class:"masterdata-tab-subheader"},F={class:"q-mt-sm row"},q={class:"masterdata-auth-select q-gutter-md"},V=(0,o.Lk)("span",{class:"masterdata-tab-subheader"},"Body",-1),w={class:"row q-mt-sm"},L={style:{"text-align":"left"}},$=(0,o.Lk)("th",{style:{width:"5%"}},null,-1),T={style:{width:"4%"}},C={key:0},x={class:"masterdata-tab-subheader"},E={key:1},j={key:0},A={class:"masterdata-tab-subheader"},U={style:{"text-align":"left"}},P=(0,o.Lk)("th",{style:{width:"5%"}},null,-1),S={style:{width:"4%"}},Q={key:1};function I(e,t,a,I,K,O){const X=(0,o.g2)("BackToMasterData"),D=(0,o.g2)("q-btn"),R=(0,o.g2)("q-card-section"),M=(0,o.g2)("q-card"),J=(0,o.g2)("q-step"),N=(0,o.g2)("q-input"),B=(0,o.g2)("q-select"),H=(0,o.g2)("q-tab"),W=(0,o.g2)("q-tabs"),G=(0,o.g2)("q-separator"),z=(0,o.g2)("f-btn"),Y=(0,o.g2)("q-icon"),Z=(0,o.g2)("q-markup-table"),ee=(0,o.g2)("q-tab-panel"),te=(0,o.g2)("q-file"),ae=(0,o.g2)("q-tab-panels"),oe=(0,o.g2)("xmlTablePath"),ne=(0,o.g2)("q-spinner-hourglass"),le=(0,o.g2)("xmlTableCreation"),se=(0,o.g2)("q-stepper-navigation"),ie=(0,o.g2)("q-stepper");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(X),(0,o.Lk)("div",l,[(0,o.bF)(ie,{modelValue:e.creation_step,"onUpdate:modelValue":t[29]||(t[29]=t=>e.creation_step=t),ref:"stepper",color:"primary",class:"page-background masterdata-create-stepper",flat:"",animated:""},{navigation:(0,o.k6)((()=>[(0,o.bF)(se,{class:"float-right"},{default:(0,o.k6)((()=>[e.creation_step>0?((0,o.uX)(),(0,o.Wv)(z,{key:0,appearance:"cancel",onClick:t[27]||(t[27]=t=>e.$refs.stepper.previous()),label:e.$t("directscan.back"),class:"q-mr-sm"},null,8,["label"])):(0,o.Q3)("",!0),(0,o.bF)(z,{onClick:t[28]||(t[28]=t=>e.continueStepper(this.master_data_preset)),loading:e.loading,loadinglabel:e.$t("pages.custom_master_data.loading"),label:4===e.creation_step?e.$t("pages.screen2a.done"):e.$t("pages.custom_master_data.continue")},{loading:(0,o.k6)((()=>[(0,o.bF)(ne)])),_:1},8,["loading","loadinglabel","label"])])),_:1})])),default:(0,o.k6)((()=>["create"==e.mode?((0,o.uX)(),(0,o.Wv)(J,{key:0,name:0,title:e.$t("pages.custom_master_data.select_preset"),icon:"manage_search",done:e.creation_step>0},{default:(0,o.k6)((()=>[(0,o.Lk)("div",s,[(0,o.Lk)("span",i,(0,n.v_)(e.$t("pages.custom_master_data.new_custom_master_data")),1),(0,o.Lk)("div",r,[(0,o.bF)(M,{flat:"",bordered:"",class:"page-background q-mt-md",style:{"min-width":"185px"}},{default:(0,o.k6)((()=>[(0,o.bF)(R,{class:"column"},{default:(0,o.k6)((()=>[(0,o.bF)(D,{label:e.$t("pages.custom_master_data.blank"),class:"preset-button",flat:"",onClick:t[0]||(t[0]=t=>e.selectPreset("reset"))},null,8,["label"]),(0,o.bF)(D,{label:"ION API",class:"preset-button",flat:"",onClick:t[1]||(t[1]=t=>e.selectPreset("ion_api_blank"))}),(0,o.bF)(D,{label:"OAuth2",class:"preset-button",flat:"",onClick:t[2]||(t[2]=t=>e.selectPreset("oauth2"))}),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.custom_templates,(t=>((0,o.uX)(),(0,o.Wv)(D,{key:t.id,label:t.data_key.replaceAll("_"," "),class:"preset-button",flat:"",onClick:a=>e.selectPreset(t)},null,8,["label","onClick"])))),128))])),_:1})])),_:1})])])])),_:1},8,["title","done"])):(0,o.Q3)("",!0),(0,o.bF)(J,{name:1,title:e.$t("pages.custom_master_data.configure_api_endpoint"),icon:"webhook",done:e.creation_step>1},{default:(0,o.k6)((()=>[(0,o.Lk)("div",null,[(0,o.bF)(M,{flat:"",bordered:"",class:"page-background"},{default:(0,o.k6)((()=>[(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",d,[(0,o.bF)(N,{modelValue:e.endpoint_information["data_type"],"onUpdate:modelValue":t[3]||(t[3]=t=>e.endpoint_information["data_type"]=t),outlined:"",rules:[t=>!t.includes(" ")||e.$t("pages.custom_master_data.no_spaces_error")],class:"masterdata-datatype-input",label:e.$t("pages.custom_master_data.endpoint_name"),dense:""},null,8,["modelValue","rules","label"]),(0,o.bF)(B,{modelValue:e.endpoint_information["body_type"],"onUpdate:modelValue":t[4]||(t[4]=t=>e.endpoint_information["body_type"]=t),options:e.body_type_options,outlined:"",class:"masterdata-bodytype-select",label:e.$t("pages.custom_master_data.application_type"),dense:""},null,8,["modelValue","options","label"])]),(0,o.Lk)("div",u,[(0,o.bF)(B,{modelValue:e.endpoint_information["method"],"onUpdate:modelValue":t[5]||(t[5]=t=>e.endpoint_information["method"]=t),options:e.method_options,outlined:"",class:"masterdata-method-select",label:e.$t("doc_type_classification_method"),dense:""},null,8,["modelValue","options","label"]),(0,o.bF)(N,{modelValue:e.endpoint_information["url"],"onUpdate:modelValue":t[6]||(t[6]=t=>e.endpoint_information["url"]=t),outlined:"",class:(0,n.C4)("ionapi"==e.endpoint_information["auth_type"]["value"]?"masterdata-url-from-json":"masterdata-url-input"),label:"Base URL",dense:"",readonly:"ionapi"==e.endpoint_information["auth_type"]["value"]},null,8,["modelValue","class","readonly"]),"ionapi"==e.endpoint_information["auth_type"]["value"]?((0,o.uX)(),(0,o.Wv)(N,{key:0,modelValue:e.endpoint_information["url_user_input"],"onUpdate:modelValue":t[7]||(t[7]=t=>e.endpoint_information["url_user_input"]=t),outlined:"",class:"masterdata-url-input-user-input",label:"URL",dense:""},null,8,["modelValue"])):(0,o.Q3)("",!0)])])),_:1}),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.bF)(W,{modelValue:e.api_tabs,"onUpdate:modelValue":t[8]||(t[8]=t=>e.api_tabs=t),dense:"",class:"masterdata-api-tabs","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:(0,o.k6)((()=>[(0,o.bF)(H,{name:"params",label:"Params"}),(0,o.bF)(H,{disable:e.master_data_preset?.includes("ion_api"),name:"headers",label:"Headers"},null,8,["disable"]),(0,o.bF)(H,{name:"auth",label:"Authorization"}),(0,o.bF)(H,{disable:e.master_data_preset?.includes("ion_api"),name:"body",label:"Body"},null,8,["disable"])])),_:1},8,["modelValue"])])),_:1}),(0,o.bF)(G),(0,o.bF)(ae,{modelValue:e.api_tabs,"onUpdate:modelValue":t[18]||(t[18]=t=>e.api_tabs=t),animated:""},{default:(0,o.k6)((()=>[(0,o.bF)(ee,{name:"params"},{default:(0,o.k6)((()=>[(0,o.Lk)("span",_,(0,n.v_)(e.$t("pages.custom_master_data.query_parameter")),1),(0,o.Lk)("div",m,[(0,o.bF)(N,{modelValue:e.endpoint_information["query_param_key"],"onUpdate:modelValue":t[9]||(t[9]=t=>e.endpoint_information["query_param_key"]=t),outlined:"",dense:"",label:"Key",class:"masterdata-query-param-key"},null,8,["modelValue"]),(0,o.bF)(N,{modelValue:e.endpoint_information["query_param_value"],"onUpdate:modelValue":t[10]||(t[10]=t=>e.endpoint_information["query_param_value"]=t),outlined:"",dense:"",label:e.$t("value"),class:"masterdata-query-param-value"},null,8,["modelValue","label"]),(0,o.bF)(z,{label:e.$t("doc2light.pages.add"),class:"float-right q-ml-auto",onClick:e.addParamToTable},null,8,["label","onClick"])]),(0,o.bF)(Z,{class:"sticky-column-for-table q-table-seperator white-back q-mt-sm",style:{"max-height":"25vh","overflow-y":"auto"},flat:"",bordered:"",dense:""},{default:(0,o.k6)((()=>[(0,o.Lk)("thead",null,[(0,o.Lk)("tr",p,[(0,o.Lk)("th",null,(0,n.v_)(e.$t("Key")),1),(0,o.Lk)("th",null,(0,n.v_)(e.$t("value")),1),c])]),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.create_parameters,((t,a)=>((0,o.uX)(),(0,o.CE)("tr",{key:t},[(0,o.Lk)("td",null,(0,n.v_)(t["key"]),1),(0,o.Lk)("td",null,(0,n.v_)(t["value"]),1),(0,o.Lk)("td",h,[(0,o.bF)(D,{round:"",dense:"",flat:"",color:"red",onClick:t=>e.removeParamFromTable(a)},{default:(0,o.k6)((()=>[(0,o.bF)(Y,{name:"delete"})])),_:2},1032,["onClick"])])])))),128))])])),_:1})])),_:1}),(0,o.bF)(ee,{name:"headers"},{default:(0,o.k6)((()=>[b,(0,o.Lk)("div",f,[(0,o.bF)(N,{modelValue:e.endpoint_information["query_header_key"],"onUpdate:modelValue":t[11]||(t[11]=t=>e.endpoint_information["query_header_key"]=t),outlined:"",dense:"",label:"Key",class:"masterdata-query-param-key"},null,8,["modelValue"]),(0,o.bF)(N,{modelValue:e.endpoint_information["query_header_value"],"onUpdate:modelValue":t[12]||(t[12]=t=>e.endpoint_information["query_header_value"]=t),outlined:"",dense:"",label:e.$t("value"),class:"masterdata-query-param-value"},null,8,["modelValue","label"]),(0,o.bF)(z,{label:e.$t("doc2light.pages.add"),class:"float-right q-ml-auto",onClick:e.addHeaderToTable},null,8,["label","onClick"])]),(0,o.bF)(Z,{class:"sticky-column-for-table q-table-seperator white-back q-mt-sm",style:{"max-height":"25vh","overflow-y":"auto"},flat:"",bordered:"",dense:""},{default:(0,o.k6)((()=>[(0,o.Lk)("thead",null,[(0,o.Lk)("tr",y,[(0,o.Lk)("th",null,(0,n.v_)(e.$t("Key")),1),(0,o.Lk)("th",null,(0,n.v_)(e.$t("value")),1),k])]),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.create_headers,((t,a)=>((0,o.uX)(),(0,o.CE)("tr",{key:t},[(0,o.Lk)("td",null,(0,n.v_)(t["key"]),1),(0,o.Lk)("td",null,(0,n.v_)(t["value"]),1),(0,o.Lk)("td",g,[(0,o.bF)(D,{round:"",dense:"",flat:"",color:"red",onClick:t=>e.removeHeaderFromTable(a)},{default:(0,o.k6)((()=>[(0,o.bF)(Y,{name:"delete"})])),_:2},1032,["onClick"])])])))),128))])])),_:1})])),_:1}),(0,o.bF)(ee,{name:"auth"},{default:(0,o.k6)((()=>[(0,o.Lk)("span",v,(0,n.v_)(e.$t("pages.custom_master_data.authorization")),1),(0,o.Lk)("div",F,[(0,o.Lk)("div",q,[(0,o.bF)(B,{modelValue:e.endpoint_information["auth_type"],"onUpdate:modelValue":t[13]||(t[13]=t=>e.endpoint_information["auth_type"]=t),options:e.auth_options,outlined:"",label:e.$t("pages.custom_master_data.authentication_type"),dense:""},null,8,["modelValue","options","label"]),(0,o.bF)(te,{outlined:"",onRejected:e.onRejected,filter:e.checkFileType,modelValue:e.auth_json_file,"onUpdate:modelValue":[t[14]||(t[14]=t=>e.auth_json_file=t),e.handleUploadJson],label:e.$t("pages.custom_master_data.upload_auth_json"),dense:"",disable:"none"==e.endpoint_information["auth_type"]["value"]},{append:(0,o.k6)((()=>[(0,o.bF)(Y,{name:"attach_file"})])),_:1},8,["onRejected","filter","modelValue","onUpdate:modelValue","label","disable"])]),(0,o.bF)(N,{modelValue:e.endpoint_information["auth_json"],"onUpdate:modelValue":t[15]||(t[15]=t=>e.endpoint_information["auth_json"]=t),borderless:"",class:"masterdata-auth-json text-field-input",autogrow:"",disable:"none"==e.endpoint_information["auth_type"]["value"]},null,8,["modelValue","disable"])])])),_:1}),(0,o.bF)(ee,{name:"body"},{default:(0,o.k6)((()=>[V,(0,o.Lk)("div",w,[(0,o.bF)(N,{modelValue:e.endpoint_information["query_body_key"],"onUpdate:modelValue":t[16]||(t[16]=t=>e.endpoint_information["query_body_key"]=t),outlined:"",dense:"",label:"Key",class:"masterdata-query-param-key"},null,8,["modelValue"]),(0,o.bF)(N,{modelValue:e.endpoint_information["query_body_value"],"onUpdate:modelValue":t[17]||(t[17]=t=>e.endpoint_information["query_body_value"]=t),outlined:"",dense:"",label:e.$t("value"),class:"masterdata-query-param-value"},null,8,["modelValue","label"]),(0,o.bF)(z,{label:e.$t("doc2light.pages.add"),class:"float-right q-ml-auto",onClick:e.addBodyToTable},null,8,["label","onClick"])]),(0,o.bF)(Z,{class:"sticky-column-for-table q-table-seperator white-back q-mt-sm",style:{"max-height":"25vh","overflow-y":"auto"},flat:"",bordered:"",dense:""},{default:(0,o.k6)((()=>[(0,o.Lk)("thead",null,[(0,o.Lk)("tr",L,[(0,o.Lk)("th",null,(0,n.v_)(e.$t("Key")),1),(0,o.Lk)("th",null,(0,n.v_)(e.$t("value")),1),$])]),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.create_body,((t,a)=>((0,o.uX)(),(0,o.CE)("tr",{key:t},[(0,o.Lk)("td",null,(0,n.v_)(t["key"]),1),(0,o.Lk)("td",null,(0,n.v_)(t["value"]),1),(0,o.Lk)("td",T,[(0,o.bF)(D,{round:"",dense:"",flat:"",color:"red",onClick:t=>e.removeBodyFromTable(a)},{default:(0,o.k6)((()=>[(0,o.bF)(Y,{name:"delete"})])),_:2},1032,["onClick"])])])))),128))])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])])),_:1},8,["title","done"]),(0,o.bF)(J,{name:3,title:e.$t("pages.custom_master_data.select_table_data_path"),icon:"table_rows",done:e.creation_step>3},{default:(0,o.k6)((()=>["json"==e.data_mode?((0,o.uX)(),(0,o.CE)("div",C,[(0,o.Lk)("span",x,(0,n.v_)(e.$t("pages.custom_master_data.where_is_data_located")),1),(0,o.bF)(M,{flat:"",bordered:"",class:"page-background q-mt-md"},{default:(0,o.k6)((()=>[(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.bF)(N,{modelValue:e.endpoint_information["json_path"],"onUpdate:modelValue":[t[19]||(t[19]=t=>e.endpoint_information["json_path"]=t),t[20]||(t[20]=t=>e.formatJsonPath("record"))],outlined:"",prefix:"$.",class:"masterdata-json-path-input",label:e.$t("pages.custom_master_data.json_path"),hint:e.$t("pages.custom_master_data.json_path_hint"),dense:""},null,8,["modelValue","label","hint"])])),_:1}),(0,o.bF)(R,{class:"row"},{default:(0,o.k6)((()=>[(0,o.bF)(N,{modelValue:e.response_textarea,"onUpdate:modelValue":t[21]||(t[21]=t=>e.response_textarea=t),borderless:"",class:"masterdata-create-table-original text-field-input",autogrow:"",readonly:""},null,8,["modelValue"]),(0,o.bF)(N,{modelValue:e.formatted_response_textarea,"onUpdate:modelValue":t[22]||(t[22]=t=>e.formatted_response_textarea=t),borderless:"",class:"masterdata-create-table-validated text-field-input",autogrow:"",readonly:""},null,8,["modelValue"])])),_:1})])),_:1})])):"xml"==e.data_mode?((0,o.uX)(),(0,o.CE)("div",E,[(0,o.bF)(oe)])):(0,o.Q3)("",!0)])),_:1},8,["title","done"]),(0,o.bF)(J,{name:4,title:e.$t("pages.custom_master_data.create_table_with_response"),icon:"add_circle_outline",done:e.creation_step>4},{default:(0,o.k6)((()=>["json"==e.data_mode?((0,o.uX)(),(0,o.CE)("div",j,[(0,o.Lk)("span",A,(0,n.v_)(e.$t("pages.custom_master_data.select_table_columns")),1),(0,o.bF)(M,{flat:"",bordered:"",class:"page-background q-mt-md"},{default:(0,o.k6)((()=>[(0,o.bF)(R,{class:"row"},{default:(0,o.k6)((()=>[(0,o.bF)(N,{modelValue:e.endpoint_information["column_name"],"onUpdate:modelValue":t[23]||(t[23]=t=>e.endpoint_information["column_name"]=t),outlined:"",class:"masterdata-column-input",hint:e.$t("pages.custom_master_data.table_values_extracted"),label:e.$t("pages.custom_master_data.column_name"),dense:""},null,8,["modelValue","hint","label"]),(0,o.bF)(N,{modelValue:e.endpoint_information["column_value_name"],"onUpdate:modelValue":t[24]||(t[24]=t=>e.endpoint_information["column_value_name"]=t),outlined:"",class:"masterdata-column-input",hint:e.$t("pages.custom_master_data.seperate_values_with_commas"),label:e.$t("pages.custom_master_data.column_value_name"),dense:""},null,8,["modelValue","hint","label"]),(0,o.bF)(z,{label:e.$t("doc2light.pages.add"),style:{height:"40px"},onClick:e.addColumnToTable,loading:e.loading,loadinglabel:e.$t("pages.custom_master_data.loading")},null,8,["label","onClick","loading","loadinglabel"]),(0,o.bF)(z,{label:e.$t("pages.custom_master_data.test_extraction"),style:{height:"40px"},onClick:e.testExtraction,appearance:"tertiary",class:"q-ml-sm",loading:e.loading,loadinglabel:e.$t("pages.custom_master_data.loading")},{loading:(0,o.k6)((()=>[(0,o.bF)(ne)])),_:1},8,["label","onClick","loading","loadinglabel"])])),_:1}),(0,o.bF)(R,{class:"row"},{default:(0,o.k6)((()=>[(0,o.bF)(N,{modelValue:e.formatted_response_textarea,"onUpdate:modelValue":t[25]||(t[25]=t=>e.formatted_response_textarea=t),borderless:"",class:"masterdata-create-table-original half-text-field-input",autogrow:"",readonly:""},null,8,["modelValue"]),(0,o.bF)(Z,{class:"sticky-column-for-table q-table-seperator white-back",style:{"max-height":"25vh","overflow-y":"auto",width:"50%"},flat:"",bordered:"",dense:""},{default:(0,o.k6)((()=>[(0,o.Lk)("thead",null,[(0,o.Lk)("tr",U,[(0,o.Lk)("th",null,(0,n.v_)(e.$t("Key")),1),(0,o.Lk)("th",null,(0,n.v_)(e.$t("value")),1),P])]),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.column_paths,((t,a)=>((0,o.uX)(),(0,o.CE)("tr",{key:t},[(0,o.Lk)("td",null,(0,n.v_)(t["key"]),1),(0,o.Lk)("td",null,(0,n.v_)(t["value"]),1),(0,o.Lk)("td",S,[(0,o.bF)(D,{round:"",dense:"",flat:"",color:"red",onClick:t=>e.removeColumnFromTable(a)},{default:(0,o.k6)((()=>[(0,o.bF)(Y,{name:"delete"})])),_:2},1032,["onClick"])])])))),128))])])),_:1}),(0,o.bF)(N,{modelValue:this.endpoint_information["validated_response_textarea"],"onUpdate:modelValue":t[26]||(t[26]=e=>this.endpoint_information["validated_response_textarea"]=e),borderless:"",class:"masterdata-create-table-original q-mt-md half-text-field-input",autogrow:"",readonly:""},null,8,["modelValue"])])),_:1})])),_:1})])):"xml"==e.data_mode?((0,o.uX)(),(0,o.CE)("div",Q,[(0,o.bF)(le)])):(0,o.Q3)("",!0)])),_:1},8,["title","done"])])),_:1},8,["modelValue"])])],64)}a(10239);var K=a(38734),O=a(64775),X=a(1595),D=a(59473),R=a(63926),M=a(57826),J=a(18505),N=a(1659),B=(a(92162),a(24622));const H=(0,o.pM)({name:"MasterDataLookup",components:{BackToMasterData:D.A,xmlTablePath:R.A,xmlTableCreation:M.A},mixins:[J.A,B.A],methods:{onRejected(){this.showErrorToast(this.$t("pages.custom_master_data.only_json_files_allowed"))},checkFileType(e){return e.filter((e=>e.name.endsWith(".ionapi")||e.name.endsWith(".json")))},handleUploadJson(){if(this.auth_json_file){const e=new FileReader;e.onload=e=>{const t=JSON.parse(e.target.result);this.endpoint_information["auth_json"]=e.target.result,"ionapi"==this.endpoint_information["auth_type"]["value"]&&(this.endpoint_information["url"]=t["iu"]+"/"+t["ti"])},e.readAsText(this.auth_json_file)}else if(this.endpoint_information["auth_json"]){const e=JSON.parse(this.endpoint_information["auth_json"]);this.endpoint_information["url"]=e["iu"]+"/"+e["ti"]}},checkInputs(){return!!this.endpoint_information["url"]&&(!!this.endpoint_information["data_type"]&&!this.endpoint_information["data_type"].includes(" "))},selectPreset(e){e.id||this.continueStepper(e),this.endpoint_information["method"]={label:e.method,value:e.method},"ionapi"==e.authentication_type&&(this.endpoint_information["auth_type"]={label:"ION API",value:"ionapi"},this.endpoint_information["url_user_input"]=e.url),"oauth2"==e.authentication_type&&(this.endpoint_information["auth_type"]={label:"OAuth2",value:"oauth2"},this.endpoint_information["url"]=e.url),"none"==e.authentication_type&&(this.endpoint_information["auth_type"]={label:"None",value:"none"},this.endpoint_information["url"]=e.url),e.authentication_json&&(this.endpoint_information["auth_json"]=e.authentication_json),this.endpoint_information["data_type"]=e.data_key;let t=e.data_base_path.replaceAll("$["," ");t=t.replaceAll("][","."),t=t.replaceAll("]",""),t=t.trim(),this.column_paths=[],this.endpoint_information["json_path"]=t,e.column_paths=JSON.parse(e.column_paths),Object.keys(e.column_paths).forEach((t=>{this.column_paths.push({key:t,value:e.column_paths[t]})})),e.body&&(this.create_body=[],e.body=JSON.parse(e.body),Object.keys(e.body).forEach((t=>{this.create_body.push({key:t,value:e.body[t]})}))),e.headers&&(this.create_headers=[],e.headers=JSON.parse(e.headers),Object.keys(e.headers).forEach((t=>{this.create_headers.push({key:t,value:e.headers[t]})}))),e.params&&(this.create_parameters=[],e.params=JSON.parse(e.params),Object.keys(e.params).forEach((t=>{this.create_parameters.push({key:t,value:e.params[t]})}))),this.api_tabs="auth",this.auth_json_file=null,this.handleUploadJson(),this.endpoint_information.url_user_input&&(this.endpoint_information.url_user_input=this.endpoint_information.url_user_input.replace(this.endpoint_information.url,"")),this.$refs.stepper.next()},async continueStepper(e="none"){try{if(1===this.creation_step){const e=this.checkInputs();return e?(this.loading=!0,await this.testEndpointResponse("record"),this.showSuccessToast(this.$t("pages.custom_master_data.response_was_successful")),this.$refs.stepper.next(),void(this.loading=!1)):void this.showErrorToast(this.$t("pages.messages.MISSING_FIELD"))}if(4===this.creation_step){if(0===!this.column_paths.length)return void this.showErrorToast(this.$t("pages.custom_master_data.column_required"));if(this.loading=!0,await this.testDataExtraction("record"),this.showSuccessToast(this.$t("pages.custom_master_data.response_was_successful")),await this.createMasterData(this.sub_org_id,"record",this.mode),"edit"==this.mode)return this.showSuccessToast(this.$t("pages.custom_master_data.master_data_updated")),void this.$router.push("/settings/master-data");this.showSuccessToast(this.$t("pages.custom_master_data.master_data_created")),this.$router.push("/settings/master-data"),this.loading=!1}0===this.creation_step&&(this.master_data_preset=e,"reset"==e&&(this.resetAllFields(),this.auth_json_file=null),"ion_api_blank"==e&&(this.endpoint_information["method"]={label:"GET",value:"GET"},this.endpoint_information["auth_type"]={label:"ION API",value:"ionapi"},this.endpoint_information["data_type"]="new_ion_endpoint",this.api_tabs="auth",this.auth_json_file=null),"oauth2"==e&&(this.endpoint_information["method"]={label:"GET",value:"GET"},this.endpoint_information["auth_type"]={label:"OAuth2",value:"oauth2"},this.endpoint_information["data_type"]="new_oauth2_endpoint",this.api_tabs="auth",this.auth_json_file=null)),this.$refs.stepper.next()}catch(t){const e=O.t.getErrorMessage(t);this.loading=!1,this.showErrorToast(e)}finally{this.loading=!1}},async testExtraction(){try{this.loading=!0,await this.testDataExtraction("record")}catch(e){const t=O.t.getErrorMessage(e);this.loading=!1,this.showErrorToast(t)}finally{this.loading=!1}},addColumnToTable(){const e=JSON.parse(this.formatted_response_textarea);let t=!0;this.endpoint_information["column_value_name"].split(",").forEach((a=>{var o=e[0][a.replaceAll(" ","")];void 0==o&&(t=!1)})),t?0!==this.column_paths.length||"id"==this.endpoint_information["column_name"].toLowerCase()?(this.column_paths.push({key:this.endpoint_information["column_name"],value:this.endpoint_information["column_value_name"]}),this.endpoint_information["column_name"]="",this.endpoint_information["column_value_name"]=""):this.showErrorToast(this.$t("pages.custom_master_data.column_id_required")):this.showErrorToast(this.$t(this.endpoint_information["column_value_name"]+" Could not be found in your Response. Please check your JSON Path and try again."))},removeColumnFromTable(e){this.column_paths.splice(e,1)},addBodyToTable(){this.create_body.push({key:this.endpoint_information["query_body_key"],value:this.endpoint_information["query_body_value"]}),this.endpoint_information["query_body_key"]="",this.endpoint_information["query_body_value"]=""},removeBodyFromTable(e){this.create_body.splice(e,1)},addHeaderToTable(){this.create_headers.push({key:this.endpoint_information["query_header_key"],value:this.endpoint_information["query_header_value"]}),this.endpoint_information["query_header_key"]="",this.endpoint_information["query_header_value"]=""},removeHeaderFromTable(e){this.create_headers.splice(e,1)},addParamToTable(){this.create_parameters.push({key:this.endpoint_information["query_param_key"],value:this.endpoint_information["query_param_value"]}),this.endpoint_information["query_param_key"]="",this.endpoint_information["query_param_value"]=""},removeParamFromTable(e){this.create_parameters.splice(e,1)},async getTemplates(){await this.getMasterDataList("template")},async getEndpoints(){await this.getMasterDataList("record")}},async mounted(){const e=this.$route.params.id;if(await this.getEndpoints(),e){this.creation_step=1,this.mode="edit",this.auth_json_file=null,this.endpoint_information.id=e;const t=this.custom_records.findIndex((t=>t.id==e));if(-1==t)return void this.router.push("/settings/master-data");const a=this.custom_records[t];this.selectPreset(a)}this.getTemplates()},setup(){const e=(0,X.rD)(),{create_parameters:t,custom_records:a,create_headers:o,data_mode:n,raw_json_response:l,create_body:s,column_paths:i,auth_options:r,endpoint_information:d,method_options:u,body_type_options:_,response_textarea:m,formatted_response_textarea:p,loading:c,custom_templates:h}=(0,N.bP)(e),{testEndpointResponse:b,formatJsonPath:f,createMasterData:y,resetAllFields:k,testDataExtraction:g,getMasterDataList:v}=e,F=(0,X.kH)(),{sub_org_id:q}=(0,N.bP)(F);return{testEndpointResponse:b,formatJsonPath:f,createMasterData:y,resetAllFields:k,testDataExtraction:g,getMasterDataList:v,sub_org_id:q,data_mode:n,custom_records:a,raw_json_response:l,custom_templates:h,loading:c,create_parameters:t,create_headers:o,create_body:s,column_paths:i,auth_options:r,endpoint_information:d,method_options:u,body_type_options:_,response_textarea:m,formatted_response_textarea:p,master_data_preset:(0,K.KR)(""),mode:(0,K.KR)("create"),auth_json_file:(0,K.KR)(null),creation_step:(0,K.KR)(0),api_tabs:(0,K.KR)("params"),stepper:"stepper"}}});var W=a(12807),G=a(37222),z=a(78577),Y=a(23316),Z=a(44189),ee=a(56384),te=a(67837),ae=a(94940),oe=a(42980),ne=a(10327),le=a(10386),se=a(39041),ie=a(71746),re=a(857),de=a(42315),ue=a(50492),_e=a(99980),me=a(63194),pe=a(84776),ce=a(98582),he=a.n(ce);const be=(0,W.A)(H,[["render",I]]),fe=be;he()(H,"components",{QStepper:G.A,QStep:z.A,QCard:Y.A,QCardSection:Z.A,QBtn:ee.A,QInput:te.A,QSelect:ae.A,QTabs:oe.A,QTab:ne.A,QSeparator:le.A,QTabPanels:se.A,QTabPanel:ie.A,QMarkupTable:re.A,QTable:de.A,QIcon:ue.A,QFile:_e.A,QSpinnerHourglass:me.A,QStepperNavigation:pe.A})}}]);