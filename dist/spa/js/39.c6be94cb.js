"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[39],{50039:(e,a,l)=>{l.r(a),l.d(a,{default:()=>H});var t=l(61758);const o={class:"row"},i={class:"col-3 q-pa-sm"},n={class:"q-ma-md"},r={class:"q-mb-none q-mx-md"},d={key:0,class:"row justify-end"},s={class:"q-ma-md"},p={class:"q-mb-none q-mx-md"},u={key:0,class:"row justify-end"},m={class:"q-ma-md"},c={class:"col-9"},_={class:"row"};function b(e,a,l,b,g,f){const h=(0,t.g2)("SubHeader"),k=(0,t.g2)("BackToSettings"),F=(0,t.g2)("q-input"),x=(0,t.g2)("q-icon"),w=(0,t.g2)("q-file"),V=(0,t.g2)("f-btn"),v=(0,t.g2)("q-expansion-item"),C=(0,t.g2)("q-tab-panel"),q=(0,t.g2)("q-tab-panels"),y=(0,t.g2)("q-space"),S=(0,t.g2)("q-card-section"),T=(0,t.g2)("editor"),A=(0,t.g2)("q-card"),E=(0,t.g2)("Loader");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.bF)(h,{name:"doc_type_custom_columns",label:e.$t("export_configuration"),display_help_link:!1},null,8,["label"]),(0,t.bF)(k),(0,t.Lk)("div",o,[(0,t.Lk)("div",i,[(0,t.bF)(q,{modelValue:e.ionMappingTab,"onUpdate:modelValue":a[4]||(a[4]=a=>e.ionMappingTab=a),animated:""},{default:(0,t.k6)((()=>[(0,t.bF)(C,{name:"ion_mapping",class:"q-pb-none p-16"},{default:(0,t.k6)((()=>[(0,t.bF)(v,{modelValue:e.expandedION,"onUpdate:modelValue":a[3]||(a[3]=a=>e.expandedION=a),label:e.$t("pages.export.ion_mapping"),group:"fieldsGroup","header-class":"text-weight-bold rounded-borders solid-border-1px"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",n,[(0,t.bF)(F,{outlined:"",class:"back-white",modelValue:e.current_model.url,"onUpdate:modelValue":a[0]||(a[0]=a=>e.current_model.url=a),label:e.$t("url"),required:""},null,8,["modelValue","label"])]),(0,t.Lk)("div",r,[(0,t.bF)(w,{modelValue:e.current_model.file,"onUpdate:modelValue":a[1]||(a[1]=a=>e.current_model.file=a),"data-cy":"ion-file",outlined:"","max-files":"1",class:"back-white",label:e.$t("pages.export.ion_mapping")},{prepend:(0,t.k6)((()=>[(0,t.bF)(x,{name:"attach_file"})])),_:1},8,["modelValue","label"]),e.current_model.create_supplier_config&&e.current_model.create_supplier_config.credentials_id?((0,t.uX)(),(0,t.CE)("div",d,[(0,t.bF)(V,{appearance:"tertiary",label:e.$t("download"),onClick:a[2]||(a[2]=a=>e.downloadFile("create_supplier","ion_mapping.json"))},null,8,["label"])])):(0,t.Q3)("",!0)])])),_:1},8,["modelValue","label"])])),_:1})])),_:1},8,["modelValue"]),(0,t.bF)(q,{modelValue:e.idmMappingTab,"onUpdate:modelValue":a[8]||(a[8]=a=>e.idmMappingTab=a),animated:""},{default:(0,t.k6)((()=>[(0,t.bF)(C,{name:"idm_mapping",class:"q-py-none px-16"},{default:(0,t.k6)((()=>[(0,t.bF)(v,{"expand-separator":"",label:e.$t("pages.export.idm_mapping"),group:"fieldsGroup","header-class":"text-weight-bold rounded-borders solid-border-1px"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",s,[(0,t.bF)(F,{outlined:"",class:"back-white",modelValue:e.current_model.idm_url,"onUpdate:modelValue":a[5]||(a[5]=a=>e.current_model.idm_url=a),label:e.$t("url"),required:""},null,8,["modelValue","label"])]),(0,t.Lk)("div",p,[(0,t.bF)(w,{modelValue:e.current_model.idm_file,"onUpdate:modelValue":a[6]||(a[6]=a=>e.current_model.idm_file=a),outlined:"","max-files":"1",class:"back-white",label:e.$t("pages.export.idm_mapping")},{prepend:(0,t.k6)((()=>[(0,t.bF)(x,{name:"attach_file"})])),_:1},8,["modelValue","label"]),e.current_model.upload_documents_config&&e.current_model.upload_documents_config.data_mapping?((0,t.uX)(),(0,t.CE)("div",u,[(0,t.bF)(V,{appearance:"tertiary",label:e.$t("download"),onClick:a[7]||(a[7]=a=>e.downloadFile("upload_documents","idm_mapping.properties"))},null,8,["label"])])):(0,t.Q3)("",!0)])])),_:1},8,["label"])])),_:1})])),_:1},8,["modelValue"]),(0,t.bF)(q,{modelValue:e.supplierDetailsMappingTab,"onUpdate:modelValue":a[10]||(a[10]=a=>e.supplierDetailsMappingTab=a),animated:""},{default:(0,t.k6)((()=>[(0,t.bF)(C,{name:"supplier_details_mapping",class:"q-pt-none p-16"},{default:(0,t.k6)((()=>[(0,t.bF)(v,{"expand-separator":"",label:e.$t("pages.export.supplier_details_mapping"),group:"fieldsGroup","header-class":"text-weight-bold rounded-borders solid-border-1px"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",m,[(0,t.bF)(F,{outlined:"",class:"back-white",modelValue:e.supplier_details_url,"onUpdate:modelValue":a[9]||(a[9]=a=>e.supplier_details_url=a),label:e.$t("url"),required:""},null,8,["modelValue","label"])])])),_:1},8,["label"])])),_:1})])),_:1},8,["modelValue"])]),(0,t.Lk)("div",c,[(0,t.bF)(A,{flat:"",bordered:"",class:"import-container white-back"},{default:(0,t.k6)((()=>[(0,t.bF)(S,{style:{"padding-bottom":"0px"}},{default:(0,t.k6)((()=>[(0,t.Lk)("div",_,[(0,t.bF)(y),(0,t.bF)(V,{label:e.$t("use_default_template"),onClick:a[11]||(a[11]=a=>e.submitUSeDefault()),class:"q-ml-sm"},null,8,["label"]),(0,t.bF)(V,{onClick:a[12]||(a[12]=a=>e.formatJson()),label:e.$t("format_button"),class:"q-ml-sm"},null,8,["label"]),(0,t.bF)(V,{label:e.$t("save"),class:"q-ml-sm",onClick:a[13]||(a[13]=a=>e.submit())},null,8,["label"])])])),_:1}),(0,t.bF)(S,{class:"row items-center q-pb-md"},{default:(0,t.k6)((()=>[(0,t.bF)(T,{formatCode:e.is_format_code,onFormatComplete:e.afterFormatted},null,8,["formatCode","onFormatComplete"])])),_:1})])),_:1})])]),(0,t.bF)(E)],64)}var g=l(38734),f=l(95488),h=l(24622),k=l(18505),F=l(1659),x=l(94124);const w={id:"app"};function V(e,a,l,o,i,n){const r=(0,t.g2)("prism-editor");return(0,t.uX)(),(0,t.CE)("div",w,[(0,t.bF)(r,{style:{height:"65vh"},class:"special-rules-editor",modelValue:e.current_model.data_mapping,"onUpdate:modelValue":a[0]||(a[0]=a=>e.current_model.data_mapping=a),highlight:e.highlighter,"line-numbers":""},null,8,["modelValue","highlight"])])}var v=l(57706),C=l(51459),q=l.n(C),y=(l(52325),l(53749),l(75125),l(46843),l(81623));const S=(0,t.pM)({el:"#app",mixins:[],props:{formatCode:{type:Boolean,required:!0}},components:{PrismEditor:v.N},data(){return{}},mounted:function(){window.pyCodeEditor=this},watch:{formatCode(e){e&&this.formatXmlCode()}},methods:{highlighter(e){return q().highlight(e,q().languages.json,"json")},async formatXmlCode(){try{JSON.stringify(this.current_model["data_mapping"]);this.current_model["data_mapping"]=await(0,y.js)(this.current_model["data_mapping"],{indent_size:4,space_in_empty_paren:!0}),this.$emit("formatComplete",!1)}catch(e){}}},setup(){const e=(0,x.Wm)(),{processing:a,current_model:l}=(0,F.bP)(e);return{current_model:l,processing:a}}});var T=l(12807);const A=(0,T.A)(S,[["render",V],["__scopeId","data-v-02fc28c6"]]),E=A;var $=l(64775),M=l(60894),L=l(8420),U=function(e,a,l,t){function o(e){return e instanceof l?e:new l((function(a){a(e)}))}return new(l||(l=Promise))((function(l,i){function n(e){try{d(t.next(e))}catch(a){i(a)}}function r(e){try{d(t["throw"](e))}catch(a){i(a)}}function d(e){e.done?l(e.value):o(e.value).then(n,r)}d((t=t.apply(e,a||[])).next())}))};const Q=(0,t.pM)({el:"#app",mixins:[h.A,k.A],components:{SubHeader:f.A,editor:E,BackToSettings:M.A,Loader:L.A},watch:{processing:{handler:function(e,a){1==e?this.showLoading():this.hideLoading()}}},computed:{supplier_details_url(){return this.current_model.api_supplier_details?this.current_model.api_supplier_details.url:""}},data(){return{is_format_code:(0,g.KR)(!1),ionMappingTab:(0,g.KR)("ion_mapping"),idmMappingTab:(0,g.KR)("idm_mapping"),supplierDetailsMappingTab:(0,g.KR)("supplier_details_mapping"),expandedION:(0,g.KR)(!0),expandedIDM:(0,g.KR)(!1)}},mounted(){this.init()},methods:{init(){return U(this,void 0,void 0,(function*(){this.processing=!0;try{yield this.getSupplierExportConfig(),this.formatJson()}catch(e){const a=$.t.getErrorMessage(e);this.showSuccessToast(a)}finally{this.processing=!1}}))},formatJson(){this.is_format_code=!0},afterFormatted(e){this.is_format_code=e},submit(){return U(this,void 0,void 0,(function*(){this.processing=!0;try{yield this.submitExportConfig();yield this.getSupplierExportConfig(),this.showSuccessToast(this.$t("pages.messages.MSG_SAVE"))}catch(e){this.showErrorToast(this.$t("pages.messages.error_internal_occur"))}finally{this.processing=!1,this.formatJson()}}))}},setup(){const e=(0,x.Wm)(),{processing:a,current_model:l}=(0,F.bP)(e),{downloadFile:t,getSupplierExportConfig:o,submitExportConfig:i,submitUSeDefault:n}=e;return{processing:a,current_model:l,downloadFile:t,getSupplierExportConfig:o,submitExportConfig:i,submitUSeDefault:n}}});var I=l(39041),D=l(71746),K=l(88841),j=l(67837),P=l(99980),R=l(50492),X=l(23316),J=l(44189),N=l(93676),G=l(98582),O=l.n(G);const B=(0,T.A)(Q,[["render",b],["__scopeId","data-v-2f06d840"]]),H=B;O()(Q,"components",{QTabPanels:I.A,QTabPanel:D.A,QExpansionItem:K.A,QInput:j.A,QFile:P.A,QIcon:R.A,QCard:X.A,QCardSection:J.A,QSpace:N.A})}}]);