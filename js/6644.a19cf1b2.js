"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[6644],{96644:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ke});var l=t(61758),o=t(58790);const s=e=>((0,l.Qi)("data-v-28dc3406"),e=e(),(0,l.jt)(),e),n={class:"masterdata-preset-container white-inputs"},r={key:0,class:"text-center"},d={class:"preset-header"},i={class:"row justify-center q-gutter-md q-mt-md"},u={key:1,class:"text-center"},_={class:"preset-header"},m={class:"row justify-center q-gutter-md q-mt-md"},p={class:"row"},c={class:"q-mt-md row"},b={class:"masterdata-tab-subheader"},h={class:"row q-mt-sm"},f={style:{"text-align":"left"}},y=s((()=>(0,l.Lk)("th",{style:{width:"5%"}},null,-1))),k={style:{width:"4%"}},g=s((()=>(0,l.Lk)("span",{class:"masterdata-tab-subheader"},"Headers",-1))),v={class:"row q-mt-sm"},F={style:{"text-align":"left"}},q=s((()=>(0,l.Lk)("th",{style:{width:"5%"}},null,-1))),V={style:{width:"4%"}},L={class:"masterdata-tab-subheader"},w={class:"q-mt-sm row"},$={class:"masterdata-auth-select q-gutter-md"},C=s((()=>(0,l.Lk)("span",{class:"masterdata-tab-subheader"},"Body",-1))),T={class:"row q-mt-sm"},x={style:{"text-align":"left"}},j=s((()=>(0,l.Lk)("th",{style:{width:"5%"}},null,-1))),U={style:{width:"4%"}},A={key:0},E={class:"masterdata-tab-subheader"},Q={key:1},P={key:0},X={class:"masterdata-tab-subheader"},I={style:{"text-align":"left"}},R=s((()=>(0,l.Lk)("th",{style:{width:"5%"}},null,-1))),K={style:{width:"4%"}},S={key:1};function B(e,a,t,s,B,D){const H=(0,l.g2)("BackToMasterData"),J=(0,l.g2)("q-btn"),M=(0,l.g2)("q-card-section"),N=(0,l.g2)("q-card"),O=(0,l.g2)("q-icon"),W=(0,l.g2)("q-file"),z=(0,l.g2)("q-step"),G=(0,l.g2)("q-input"),Y=(0,l.g2)("q-select"),Z=(0,l.g2)("q-tab"),ee=(0,l.g2)("q-tabs"),ae=(0,l.g2)("q-separator"),te=(0,l.g2)("f-btn"),le=(0,l.g2)("q-markup-table"),oe=(0,l.g2)("q-tab-panel"),se=(0,l.g2)("q-tab-panels"),ne=(0,l.g2)("xmlTablePath"),re=(0,l.g2)("q-spinner-hourglass"),de=(0,l.g2)("xmlTableCreation"),ie=(0,l.g2)("q-stepper-navigation"),ue=(0,l.g2)("q-stepper");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(H),(0,l.Lk)("div",n,[(0,l.bF)(ue,{modelValue:B.creation_step,"onUpdate:modelValue":a[27]||(a[27]=e=>B.creation_step=e),ref:"stepper",color:"primary",class:"page-background masterdata-create-stepper",flat:"",animated:""},{navigation:(0,l.k6)((()=>[(0,l.bF)(ie,{class:"float-right"},{default:(0,l.k6)((()=>[B.creation_step>2?((0,l.uX)(),(0,l.Wv)(te,{key:0,appearance:"cancel",onClick:a[26]||(a[26]=a=>e.$refs.stepper.previous()),label:e.$t("directscan.back"),class:"q-mr-sm"},null,8,["label"])):(0,l.Q3)("",!0),B.creation_step>1?((0,l.uX)(),(0,l.Wv)(te,{key:1,onClick:D.continueStepper,loading:s.loading,loadinglabel:e.$t("pages.custom_master_data.loading"),label:4===B.creation_step?e.$t("pages.screen2a.done"):e.$t("pages.custom_master_data.continue")},{loading:(0,l.k6)((()=>[(0,l.bF)(re)])),_:1},8,["onClick","loading","loadinglabel","label"])):(0,l.Q3)("",!0)])),_:1})])),default:(0,l.k6)((()=>[(0,l.bF)(z,{name:0,title:e.$t("pages.custom_master_data.select_preset"),icon:"manage_search",done:B.creation_step>0},{default:(0,l.k6)((()=>[B.selected_ion?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("div",r,[(0,l.Lk)("span",d,(0,o.v_)(e.$t("pages.custom_master_data.what_api_to_use")),1),(0,l.Lk)("div",i,[(0,l.bF)(N,{flat:"",bordered:"",class:"page-background q-mt-md",style:{width:"185px"}},{default:(0,l.k6)((()=>[(0,l.bF)(M,{class:""},{default:(0,l.k6)((()=>[(0,l.bF)(J,{flat:"",label:"ION API",class:"full-width",onClick:a[0]||(a[0]=e=>B.selected_ion=!0)})])),_:1})])),_:1}),(0,l.bF)(N,{flat:"",bordered:"",class:"page-background q-mt-md",style:{width:"185px"}},{default:(0,l.k6)((()=>[(0,l.bF)(M,{class:""},{default:(0,l.k6)((()=>[(0,l.bF)(J,{flat:"",label:"OAUTH2",class:"full-width",onClick:D.continueStepper},null,8,["onClick"])])),_:1})])),_:1})])])),B.selected_ion?((0,l.uX)(),(0,l.CE)("div",u,[(0,l.Lk)("span",_,(0,o.v_)(e.$t("pages.custom_master_data.upload_ion_json")),1),(0,l.Lk)("div",m,[(0,l.bF)(N,{flat:"",bordered:"",class:"page-background q-mt-md"},{default:(0,l.k6)((()=>[(0,l.bF)(M,null,{default:(0,l.k6)((()=>[(0,l.bF)(W,{outlined:"",onRejected:D.onRejected,filter:D.checkFileType,modelValue:B.auth_json_file,"onUpdate:modelValue":[a[1]||(a[1]=e=>B.auth_json_file=e),D.handleUploadIonJson],label:e.$t("pages.custom_master_data.upload_auth_json"),dense:""},{append:(0,l.k6)((()=>[(0,l.bF)(O,{name:"attach_file"})])),_:1},8,["onRejected","filter","modelValue","onUpdate:modelValue","label"])])),_:1})])),_:1})])])):(0,l.Q3)("",!0)])),_:1},8,["title","done"]),(0,l.bF)(z,{name:2,title:e.$t("pages.custom_master_data.configure_preset"),icon:"manage_search",done:B.creation_step>2},{default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.bF)(N,{flat:"",bordered:"",class:"page-background"},{default:(0,l.k6)((()=>[(0,l.bF)(M,null,{default:(0,l.k6)((()=>[(0,l.Lk)("div",p,[(0,l.bF)(G,{modelValue:s.preset_information["data_type"],"onUpdate:modelValue":a[2]||(a[2]=e=>s.preset_information["data_type"]=e),outlined:"",rules:[a=>!a.includes(" ")||e.$t("pages.custom_master_data.no_spaces_error")],class:"masterdata-preset-datatype-input",label:e.$t("pages.custom_master_data.preset_name"),dense:""},null,8,["modelValue","rules","label"]),(0,l.bF)(Y,{modelValue:s.preset_information["body_type"],"onUpdate:modelValue":a[3]||(a[3]=e=>s.preset_information["body_type"]=e),options:s.body_type_options,outlined:"",readonly:B.fields_read_only,class:"masterdata-bodytype-select",label:e.$t("pages.custom_master_data.application_type"),dense:""},null,8,["modelValue","options","readonly","label"])]),(0,l.Lk)("div",c,[(0,l.bF)(Y,{modelValue:s.preset_information["method"],"onUpdate:modelValue":a[4]||(a[4]=e=>s.preset_information["method"]=e),options:s.method_options,outlined:"",readonly:B.fields_read_only,class:"masterdata-method-select",label:e.$t("doc_type_classification_method"),dense:""},null,8,["modelValue","options","readonly","label"]),(0,l.bF)(G,{modelValue:s.preset_information["url"],"onUpdate:modelValue":a[5]||(a[5]=e=>s.preset_information["url"]=e),outlined:"",class:"masterdata-url-from-json",label:"Base URL",dense:"",readonly:B.fields_read_only},null,8,["modelValue","readonly"]),(0,l.bF)(G,{modelValue:s.preset_information["url_user_input"],"onUpdate:modelValue":a[6]||(a[6]=e=>s.preset_information["url_user_input"]=e),outlined:"",class:"masterdata-url-input-user-input",label:"URL",dense:""},null,8,["modelValue"])])])),_:1}),(0,l.bF)(M,null,{default:(0,l.k6)((()=>[(0,l.bF)(ee,{modelValue:B.api_tabs,"onUpdate:modelValue":a[7]||(a[7]=e=>B.api_tabs=e),dense:"",class:"masterdata-api-tabs","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:(0,l.k6)((()=>[(0,l.bF)(Z,{name:"params",label:"Params"}),(0,l.bF)(Z,{disable:e.master_data_preset?.includes("ion_api"),name:"headers",label:"Headers"},null,8,["disable"]),(0,l.bF)(Z,{name:"auth",label:"Authorization"}),(0,l.bF)(Z,{disable:e.master_data_preset?.includes("ion_api"),name:"body",label:"Body"},null,8,["disable"])])),_:1},8,["modelValue"])])),_:1}),(0,l.bF)(ae),(0,l.bF)(se,{modelValue:B.api_tabs,"onUpdate:modelValue":a[17]||(a[17]=e=>B.api_tabs=e),animated:""},{default:(0,l.k6)((()=>[(0,l.bF)(oe,{name:"params"},{default:(0,l.k6)((()=>[(0,l.Lk)("span",b,(0,o.v_)(e.$t("pages.custom_master_data.query_parameter")),1),(0,l.Lk)("div",h,[(0,l.bF)(G,{modelValue:s.preset_information["query_param_key"],"onUpdate:modelValue":a[8]||(a[8]=e=>s.preset_information["query_param_key"]=e),outlined:"",dense:"",label:"Key",class:"masterdata-query-param-key"},null,8,["modelValue"]),(0,l.bF)(G,{modelValue:s.preset_information["query_param_value"],"onUpdate:modelValue":a[9]||(a[9]=e=>s.preset_information["query_param_value"]=e),outlined:"",dense:"",label:e.$t("value"),class:"masterdata-query-param-value"},null,8,["modelValue","label"]),(0,l.bF)(te,{label:e.$t("doc2light.pages.add"),class:"float-right q-ml-auto",onClick:D.addParamToTable},null,8,["label","onClick"])]),(0,l.bF)(le,{class:"sticky-column-for-table q-table-seperator white-back q-mt-sm",style:{"max-height":"25vh","overflow-y":"auto"},flat:"",bordered:"",dense:""},{default:(0,l.k6)((()=>[(0,l.Lk)("thead",null,[(0,l.Lk)("tr",f,[(0,l.Lk)("th",null,(0,o.v_)(e.$t("Key")),1),(0,l.Lk)("th",null,(0,o.v_)(e.$t("value")),1),y])]),(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.preset_parameters,((e,a)=>((0,l.uX)(),(0,l.CE)("tr",{key:e},[(0,l.Lk)("td",null,(0,o.v_)(e["key"]),1),(0,l.Lk)("td",null,(0,o.v_)(e["value"]),1),(0,l.Lk)("td",k,[(0,l.bF)(J,{round:"",dense:"",flat:"",color:"red",onClick:e=>D.removeParamFromTable(a)},{default:(0,l.k6)((()=>[(0,l.bF)(O,{name:"delete"})])),_:2},1032,["onClick"])])])))),128))])])),_:1})])),_:1}),(0,l.bF)(oe,{name:"headers"},{default:(0,l.k6)((()=>[g,(0,l.Lk)("div",v,[(0,l.bF)(G,{modelValue:s.preset_information["query_header_key"],"onUpdate:modelValue":a[10]||(a[10]=e=>s.preset_information["query_header_key"]=e),outlined:"",dense:"",label:"Key",class:"masterdata-query-param-key"},null,8,["modelValue"]),(0,l.bF)(G,{modelValue:s.preset_information["query_header_value"],"onUpdate:modelValue":a[11]||(a[11]=e=>s.preset_information["query_header_value"]=e),outlined:"",dense:"",label:e.$t("value"),class:"masterdata-query-param-value"},null,8,["modelValue","label"]),(0,l.bF)(te,{label:e.$t("doc2light.pages.add"),class:"float-right q-ml-auto",onClick:D.addHeaderToTable},null,8,["label","onClick"])]),(0,l.bF)(le,{class:"sticky-column-for-table q-table-seperator white-back q-mt-sm",style:{"max-height":"25vh","overflow-y":"auto"},flat:"",bordered:"",dense:""},{default:(0,l.k6)((()=>[(0,l.Lk)("thead",null,[(0,l.Lk)("tr",F,[(0,l.Lk)("th",null,(0,o.v_)(e.$t("Key")),1),(0,l.Lk)("th",null,(0,o.v_)(e.$t("value")),1),q])]),(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.preset_headers,((e,a)=>((0,l.uX)(),(0,l.CE)("tr",{key:e},[(0,l.Lk)("td",null,(0,o.v_)(e["key"]),1),(0,l.Lk)("td",null,(0,o.v_)(e["value"]),1),(0,l.Lk)("td",V,[(0,l.bF)(J,{round:"",dense:"",flat:"",color:"red",onClick:e=>D.removeHeaderFromTable(a)},{default:(0,l.k6)((()=>[(0,l.bF)(O,{name:"delete"})])),_:2},1032,["onClick"])])])))),128))])])),_:1})])),_:1}),(0,l.bF)(oe,{name:"auth"},{default:(0,l.k6)((()=>[(0,l.Lk)("span",L,(0,o.v_)(e.$t("pages.custom_master_data.authorization")),1),(0,l.Lk)("div",w,[(0,l.Lk)("div",$,[(0,l.bF)(Y,{modelValue:s.preset_information["auth_type"],"onUpdate:modelValue":a[12]||(a[12]=e=>s.preset_information["auth_type"]=e),options:s.auth_options,readonly:B.fields_read_only,outlined:"",label:e.$t("pages.custom_master_data.authentication_type"),dense:""},null,8,["modelValue","options","readonly","label"]),(0,l.bF)(W,{outlined:"",readonly:B.fields_read_only,onRejected:D.onRejected,filter:D.checkFileType,modelValue:B.auth_json_file,"onUpdate:modelValue":[a[13]||(a[13]=e=>B.auth_json_file=e),D.handleUploadJson],label:e.$t("pages.custom_master_data.upload_auth_json"),dense:"",disable:"none"==s.preset_information["auth_type"]["value"]},{append:(0,l.k6)((()=>[(0,l.bF)(O,{name:"attach_file"})])),_:1},8,["readonly","onRejected","filter","modelValue","onUpdate:modelValue","label","disable"])]),(0,l.bF)(G,{modelValue:s.preset_information["auth_json"],"onUpdate:modelValue":a[14]||(a[14]=e=>s.preset_information["auth_json"]=e),borderless:"",readonly:B.fields_read_only,class:"masterdata-auth-json text-field-input",autogrow:"",disable:"none"==s.preset_information["auth_type"]["value"]},null,8,["modelValue","readonly","disable"])])])),_:1}),(0,l.bF)(oe,{name:"body"},{default:(0,l.k6)((()=>[C,(0,l.Lk)("div",T,[(0,l.bF)(G,{modelValue:s.preset_information["query_body_key"],"onUpdate:modelValue":a[15]||(a[15]=e=>s.preset_information["query_body_key"]=e),outlined:"",dense:"",label:"Key",class:"masterdata-query-param-key"},null,8,["modelValue"]),(0,l.bF)(G,{modelValue:s.preset_information["query_body_value"],"onUpdate:modelValue":a[16]||(a[16]=e=>s.preset_information["query_body_value"]=e),outlined:"",dense:"",label:e.$t("value"),class:"masterdata-query-param-value"},null,8,["modelValue","label"]),(0,l.bF)(te,{label:e.$t("doc2light.pages.add"),class:"float-right q-ml-auto",onClick:D.addBodyToTable},null,8,["label","onClick"])]),(0,l.bF)(le,{class:"sticky-column-for-table q-table-seperator white-back q-mt-sm",style:{"max-height":"25vh","overflow-y":"auto"},flat:"",bordered:"",dense:""},{default:(0,l.k6)((()=>[(0,l.Lk)("thead",null,[(0,l.Lk)("tr",x,[(0,l.Lk)("th",null,(0,o.v_)(e.$t("Key")),1),(0,l.Lk)("th",null,(0,o.v_)(e.$t("value")),1),j])]),(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.preset_body,((e,a)=>((0,l.uX)(),(0,l.CE)("tr",{key:e},[(0,l.Lk)("td",null,(0,o.v_)(e["key"]),1),(0,l.Lk)("td",null,(0,o.v_)(e["value"]),1),(0,l.Lk)("td",U,[(0,l.bF)(J,{round:"",dense:"",flat:"",color:"red",onClick:e=>D.removeBodyFromTable(a)},{default:(0,l.k6)((()=>[(0,l.bF)(O,{name:"delete"})])),_:2},1032,["onClick"])])])))),128))])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])])),_:1},8,["title","done"]),(0,l.bF)(z,{name:3,title:e.$t("pages.custom_master_data.select_table_data_path"),icon:"table_rows",done:B.creation_step>3},{default:(0,l.k6)((()=>["json"==s.data_mode?((0,l.uX)(),(0,l.CE)("div",A,[(0,l.Lk)("span",E,(0,o.v_)(e.$t("pages.custom_master_data.where_is_data_located")),1),(0,l.bF)(N,{flat:"",bordered:"",class:"page-background q-mt-md"},{default:(0,l.k6)((()=>[(0,l.bF)(M,null,{default:(0,l.k6)((()=>[(0,l.bF)(G,{modelValue:s.preset_information["json_path"],"onUpdate:modelValue":[a[18]||(a[18]=e=>s.preset_information["json_path"]=e),a[19]||(a[19]=e=>s.formatJsonPath("template"))],outlined:"",prefix:"$.",class:"masterdata-json-path-input",label:e.$t("pages.custom_master_data.json_path"),hint:e.$t("pages.custom_master_data.json_path_hint"),dense:""},null,8,["modelValue","label","hint"])])),_:1}),(0,l.bF)(M,{class:"row"},{default:(0,l.k6)((()=>[(0,l.bF)(G,{modelValue:s.response_textarea,"onUpdate:modelValue":a[20]||(a[20]=e=>s.response_textarea=e),borderless:"",class:"masterdata-create-table-original text-field-input",autogrow:"",readonly:""},null,8,["modelValue"]),(0,l.bF)(G,{modelValue:s.formatted_response_textarea,"onUpdate:modelValue":a[21]||(a[21]=e=>s.formatted_response_textarea=e),borderless:"",class:"masterdata-create-table-validated text-field-input",autogrow:"",readonly:""},null,8,["modelValue"])])),_:1})])),_:1})])):"xml"==s.data_mode?((0,l.uX)(),(0,l.CE)("div",Q,[(0,l.bF)(ne,{type:"template"})])):(0,l.Q3)("",!0)])),_:1},8,["title","done"]),(0,l.bF)(z,{name:4,title:e.$t("pages.custom_master_data.create_table_with_response"),icon:"add_circle_outline",done:B.creation_step>4},{default:(0,l.k6)((()=>["json"==s.data_mode?((0,l.uX)(),(0,l.CE)("div",P,[(0,l.Lk)("span",X,(0,o.v_)(e.$t("pages.custom_master_data.select_table_columns")),1),(0,l.bF)(N,{flat:"",bordered:"",class:"page-background q-mt-md"},{default:(0,l.k6)((()=>[(0,l.bF)(M,{class:"row"},{default:(0,l.k6)((()=>[(0,l.bF)(G,{modelValue:s.preset_information["column_name"],"onUpdate:modelValue":a[22]||(a[22]=e=>s.preset_information["column_name"]=e),outlined:"",class:"masterdata-column-input",label:e.$t("pages.custom_master_data.column_name"),dense:""},null,8,["modelValue","label"]),(0,l.bF)(G,{modelValue:s.preset_information["column_value_name"],"onUpdate:modelValue":a[23]||(a[23]=e=>s.preset_information["column_value_name"]=e),outlined:"",class:"masterdata-column-input",label:e.$t("pages.custom_master_data.column_value_name"),dense:""},null,8,["modelValue","label"]),(0,l.bF)(te,{label:e.$t("doc2light.pages.add"),class:"",onClick:D.addColumnToTable,loading:s.loading,loadinglabel:e.$t("pages.custom_master_data.loading")},{loading:(0,l.k6)((()=>[(0,l.bF)(re)])),_:1},8,["label","onClick","loading","loadinglabel"])])),_:1}),(0,l.bF)(M,{class:"row"},{default:(0,l.k6)((()=>[(0,l.bF)(G,{modelValue:s.formatted_response_textarea,"onUpdate:modelValue":a[24]||(a[24]=e=>s.formatted_response_textarea=e),borderless:"",class:"masterdata-create-table-original half-text-field-input",autogrow:"",readonly:""},null,8,["modelValue"]),(0,l.bF)(le,{class:"sticky-column-for-table q-table-seperator white-back",style:{"max-height":"25vh","overflow-y":"auto",width:"50%"},flat:"",bordered:"",dense:""},{default:(0,l.k6)((()=>[(0,l.Lk)("thead",null,[(0,l.Lk)("tr",I,[(0,l.Lk)("th",null,(0,o.v_)(e.$t("Key")),1),(0,l.Lk)("th",null,(0,o.v_)(e.$t("value")),1),R])]),(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.column_paths,((e,a)=>((0,l.uX)(),(0,l.CE)("tr",{key:e},[(0,l.Lk)("td",null,(0,o.v_)(e["key"]),1),(0,l.Lk)("td",null,(0,o.v_)(e["value"]),1),(0,l.Lk)("td",K,[(0,l.bF)(J,{round:"",dense:"",flat:"",color:"red",onClick:e=>D.removeColumnFromTable(a)},{default:(0,l.k6)((()=>[(0,l.bF)(O,{name:"delete"})])),_:2},1032,["onClick"])])])))),128))])])),_:1}),(0,l.bF)(G,{modelValue:this.preset_information["validated_response_textarea"],"onUpdate:modelValue":a[25]||(a[25]=e=>this.preset_information["validated_response_textarea"]=e),borderless:"",class:"masterdata-create-table-original q-mt-md half-text-field-input",autogrow:"",readonly:""},null,8,["modelValue"])])),_:1})])),_:1})])):"xml"==s.data_mode?((0,l.uX)(),(0,l.CE)("div",S,[(0,l.bF)(de,{type:"template"})])):(0,l.Q3)("",!0)])),_:1},8,["title","done"])])),_:1},8,["modelValue"])])],64)}t(10239);var D=t(1659),H=t(24622),J=t(18505),M=t(1595),N=t(59473),O=t(63926),W=t(57826);const z={mixins:[J.A,H.A],name:"CustomPreset",components:{BackToMasterData:N.A,xmlTablePath:O.A,xmlTableCreation:W.A},data(){return{api_tabs:"params",fields_read_only:!1,preset_api:"",selected_ion:!1,creation_step:0,auth_json_file:null}},methods:{addColumnToTable(){0!==this.column_paths.length||"id"==this.preset_information["column_name"].toLowerCase()?(this.column_paths.push({key:this.preset_information["column_name"],value:this.preset_information["column_value_name"]}),this.preset_information["column_name"]="",this.preset_information["column_value_name"]="",this.testDataExtraction("template")):this.showErrorToast(this.$t("pages.custom_master_data.column_id_required"))},removeColumnFromTable(e){this.column_paths.splice(e,1)},addBodyToTable(){this.preset_body.push({key:this.preset_information["query_body_key"],value:this.preset_information["query_body_value"]}),this.preset_information["query_body_key"]="",this.preset_information["query_body_value"]=""},removeBodyFromTable(e){this.preset_body.splice(e,1)},addHeaderToTable(){this.preset_headers.push({key:this.preset_information["query_header_key"],value:this.preset_information["query_header_value"]}),this.preset_information["query_header_key"]="",this.preset_information["query_header_value"]=""},removeHeaderFromTable(e){this.preset_headers.splice(e,1)},addParamToTable(){this.preset_parameters.push({key:this.preset_information["query_param_key"],value:this.preset_information["query_param_value"]}),this.preset_information["query_param_key"]="",this.preset_information["query_param_value"]=""},removeParamFromTable(e){this.preset_parameters.splice(e,1)},checkInputs(){return!!this.preset_information["url_user_input"]&&(!!this.preset_information["data_type"]&&!this.preset_information["data_type"].includes(" "))},async continueStepper(){if(2===this.creation_step){const e=this.checkInputs();if(!e)return void this.showErrorToast(this.$t("pages.custom_master_data.fill_all_fields"));await this.testEndpointResponse("template").then((e=>{e.success&&this.$refs.stepper.next()})).catch((e=>{}))}if(4===this.creation_step){if(0===!this.column_paths.length)return void this.showErrorToast(this.$t("pages.custom_master_data.column_required"));await this.createMasterData(this.sub_org_id,"template","create").then((e=>{this.loading=!0,this.showSuccessToast(this.$t("pages.custom_master_data.template_created")),this.$router.push("/settings/master-data")})).catch((e=>{logInfo(e)}))}this.$refs.stepper.next()},checkFileType(e){return e.filter((e=>e.name.endsWith(".ionapi")||e.name.endsWith(".json")))},handleUploadJson(){if(this.auth_json_file){const e=new FileReader;e.onload=e=>{this.preset_information["auth_json"]=e.target.result},e.readAsText(this.auth_json_file)}},handleUploadIonJson(){if(this.auth_json_file){const e=new FileReader;e.onload=e=>{const a=JSON.parse(e.target.result);this.preset_information["auth_json"]=e.target.result,this.preset_information["url"]=a["iu"]+"/"+a["ti"]},e.readAsText(this.auth_json_file)}this.preset_information["auth_type"]={label:"ION API",value:"ionapi"},this.preset_information["body_type"]={label:"application/json",value:"application/json"},this.fields_read_only=!0,this.$refs.stepper.next()},onRejected(){this.showErrorToast(this.$t("pages.custom_master_data.only_json_files_allowed"))}},setup(){const e=(0,M.rD)(),{preset_parameters:a,preset_headers:t,preset_body:l,data_mode:o,column_paths:s,auth_options:n,preset_information:r,method_options:d,body_type_options:i,response_textarea:u,formatted_response_textarea:_,loading:m}=(0,D.bP)(e),{testEndpointResponse:p,formatJsonPath:c,createMasterData:b,resetAllFields:h,testDataExtraction:f}=e,y=(0,M.kH)(),{sub_org_id:k}=(0,D.bP)(y);return{testEndpointResponse:p,formatJsonPath:c,createMasterData:b,resetAllFields:h,testDataExtraction:f,loading:m,data_mode:o,sub_org_id:k,preset_parameters:a,preset_headers:t,preset_body:l,column_paths:s,auth_options:n,preset_information:r,method_options:d,body_type_options:i,response_textarea:u,formatted_response_textarea:_}},mounted(){}};var G=t(12807),Y=t(37222),Z=t(78577),ee=t(23316),ae=t(44189),te=t(56384),le=t(99980),oe=t(50492),se=t(67837),ne=t(94940),re=t(42980),de=t(10327),ie=t(10386),ue=t(39041),_e=t(71746),me=t(857),pe=t(42315),ce=t(63194),be=t(84776),he=t(98582),fe=t.n(he);const ye=(0,G.A)(z,[["render",B],["__scopeId","data-v-28dc3406"]]),ke=ye;fe()(z,"components",{QStepper:Y.A,QStep:Z.A,QCard:ee.A,QCardSection:ae.A,QBtn:te.A,QFile:le.A,QIcon:oe.A,QInput:se.A,QSelect:ne.A,QTabs:re.A,QTab:de.A,QSeparator:ie.A,QTabPanels:ue.A,QTabPanel:_e.A,QMarkupTable:me.A,QTable:pe.A,QSpinnerHourglass:ce.A,QStepperNavigation:be.A})}}]);