"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[6059],{76059:(t,e,s)=>{s.r(e),s.d(e,{default:()=>V});var i=s(61758);const n={class:"container p-b-0 q-pb-sm settings mt-mb-8"};function o(t,e,s,o,r,c){const a=(0,i.g2)("SubHeader"),l=(0,i.g2)("BackToSettings"),d=(0,i.g2)("settingsEditor");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(a,{name:"doc_type_script",label:t.$t("add_special_rules"),display_help_link:!1},null,8,["label"]),(0,i.bF)(l,{back_to_rotue:"/settings/document"}),(0,i.Lk)("div",n,[t.load_script?((0,i.uX)(),(0,i.Wv)(d,{key:0})):(0,i.Q3)("",!0)])],64)}var r=s(38734),c=s(94124),a=s(1659),l=s(58790);const d=(0,i.Lk)("div",{class:"col-1"},"Result:",-1),u={class:"col-11 bg-grey-3 script-output"},p=(0,i.Lk)("img",{class:"loading-image",src:"images/loader.gif",alt:"Loading..."},null,-1);function _(t,e,s,n,o,r){const c=(0,i.g2)("q-btn"),a=(0,i.g2)("q-card-actions"),_=(0,i.g2)("editor"),g=(0,i.g2)("q-card-section"),h=(0,i.g2)("q-inner-loading"),m=(0,i.g2)("q-card");return(0,i.uX)(),(0,i.Wv)(m,{class:"settings-script-editor"},{default:(0,i.k6)((()=>[(0,i.bF)(a,{align:"right"},{default:(0,i.k6)((()=>[(0,i.bF)(c,{color:"primary",class:"q-mr-sm",onClick:t.saveRecord,label:t.$t("save")},null,8,["onClick","label"])])),_:1}),(0,i.bF)(g,{class:"row items-center q-pb-none"},{default:(0,i.k6)((()=>[(0,i.bF)(_)])),_:1}),t.display_output_view?((0,i.uX)(),(0,i.Wv)(g,{key:0,class:"row items-center q-pb-none full-width",style:{"min-height":"100px"}},{default:(0,i.k6)((()=>[d,(0,i.Lk)("pre",u,(0,l.v_)(t.script_output),1)])),_:1})):(0,i.Q3)("",!0),(0,i.bF)(h,{showing:t.processing},{default:(0,i.k6)((()=>[p])),_:1},8,["showing"])])),_:1})}var g=s(24622),h=s(64775),m=s(67139),v=function(t,e,s,i){function n(t){return t instanceof s?t:new s((function(e){e(t)}))}return new(s||(s=Promise))((function(s,o){function r(t){try{a(i.next(t))}catch(e){o(e)}}function c(t){try{a(i["throw"](t))}catch(e){o(e)}}function a(t){t.done?s(t.value):n(t.value).then(r,c)}a((i=i.apply(t,e||[])).next())}))};const y=(0,i.pM)({el:"#app",mixins:[g.A],props:{},components:{editor:m.A},watch:{selected_doc_type:{handler:function(t,e){this.initView()}}},data(){return{}},mounted:function(){this.initView()},methods:{initView(){return v(this,void 0,void 0,(function*(){try{if(!this.selected_doc_type)return;this.setEmptyModel(),this.processing=!0,yield this.getScript()}catch(t){const e=h.t.getErrorMessage(t);this.showErrorToast(e)}finally{this.processing=!1}}))},saveRecord(){return v(this,void 0,void 0,(function*(){try{this.processing=!0,yield this.saveCurrentModel(),this.showSuccessToast(this.$t("pages.messages.MSG_SAVE"))}catch(t){const e=h.t.getErrorMessage(t);this.showErrorToast(e)}finally{this.processing=!1}}))}},setup(){const t=(0,c.oO)(),{getScript:e,saveCurrentModel:s,setEmptyModel:i}=t,{current_model:n,selected_doc_type:o,display_output_view:l,script_output:d,processing:u,is_script_editor_available:p}=(0,a.bP)(t);return{is_script_editor_available:p,script_output:d,display_output_view:l,selected_doc_type:o,setEmptyModel:i,saveCurrentModel:s,getScript:e,current_model:n,processing:u,CalHeight:(0,r.KR)("600")}}});var b=s(12807),f=s(23316),w=s(62669),k=s(56384),A=s(44189),C=s(39035),S=s(98582),E=s.n(S);const M=(0,b.A)(y,[["render",_]]),q=M;E()(y,"components",{QCard:f.A,QCardActions:w.A,QBtn:k.A,QCardSection:A.A,QInnerLoading:C.A});var F=s(60894),Q=s(91236);const T=(0,i.pM)({el:"#app",mixins:[],props:{},components:{settingsEditor:q,BackToSettings:F.A,SubHeader:Q.A},data(){return{}},mounted:function(){this.initView()},methods:{initView(){this.load_script=!1,this.selected_doc_type=String(this.$route.params.type||""),this.load_script=!0}},setup(){const t=(0,c.oO)(),{selected_doc_type:e}=(0,a.bP)(t);return{selected_doc_type:e,load_script:(0,r.KR)(!1)}}}),L=(0,b.A)(T,[["render",o]]),V=L}}]);