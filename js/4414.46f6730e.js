"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[4414],{94414:(t,e,i)=>{i.r(e),i.d(e,{default:()=>lt});var o=i(61758),a=i(58790),d=i(29104);const n=t=>((0,o.Qi)("data-v-79e4fce3"),t=t(),(0,o.jt)(),t),l={class:"col-4 secondary-c-text text-h6"},r={style:{"vertical-align":"middle","margin-left":"10px","font-size":"20px",cursor:"pointer"}},s={class:"container text-color-white settings-container bg-wrapper"},c={class:"q-pa-md"},u={key:0},_={class:"container"},p={class:"full-width q-pa-md"},b={key:0,class:"row q-mb-md"},m={class:"focus",style:{width:"100%",border:"1.5px solid #EFEFEF !important"}},g=["onClick"],v={class:"q-td text-left",style:{width:"25%"}},h={class:"q-td text-left",style:{width:"25%"}},k={class:"q-td text-left",style:{width:"25%"}},f={class:"q-td text-left",style:{width:"25%"}},y={class:"q-td text-right"},A={class:"text-red"},x={class:"q-ml-sm"},F=n((()=>(0,o.Lk)("img",{class:"loading-image",src:"images/loader.gif",alt:"Loading..."},null,-1)));function w(t,e,i,n,w,L){const C=(0,o.g2)("SubHeader"),D=(0,o.g2)("q-icon"),q=(0,o.g2)("q-btn"),$=(0,o.g2)("q-avatar"),E=(0,o.g2)("q-item-section"),Q=(0,o.g2)("q-space"),T=(0,o.g2)("f-btn"),S=(0,o.g2)("q-item"),X=(0,o.g2)("q-list"),I=(0,o.g2)("q-menu"),V=(0,o.g2)("q-markup-table"),z=(0,o.g2)("q-tree"),M=(0,o.g2)("q-card"),P=(0,o.g2)("q-expansion-item"),K=(0,o.g2)("q-separator"),j=(0,o.g2)("q-card-section"),U=(0,o.g2)("q-card-actions"),B=(0,o.g2)("q-dialog"),N=(0,o.g2)("q-inner-loading"),W=(0,o.gN)("close-popup");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(C,{name:"doc_type_custom_columns",label:t.$t(t.title.toLocaleLowerCase())+" XSLT "+t.$t("editor"),display_help_link:!1,onSearch:!1},null,8,["label"]),(0,o.Lk)("div",l,[(0,o.bF)(q,{flat:"",rounded:"","data-cy":"dashboard",color:"primary",to:"/settings/document"},{default:(0,o.k6)((()=>[(0,o.bF)(D,{name:"fa-solid fa-circle-arrow-left",size:"sm"}),(0,o.Lk)("label",r,(0,a.v_)(t.$t("pages.settings.document_types")),1)])),_:1})]),(0,o.Lk)("div",s,[(0,o.Lk)("div",c,[(0,o.bF)(X,{bordered:"",class:"rounded-borders"},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(Object.entries(t.e_doc_data),(([i,n],l)=>{var r;return(0,o.uX)(),(0,o.CE)(o.FK,{key:l},[n&&n.length?((0,o.uX)(),(0,o.CE)("div",u,[(0,o.bF)(P,{"default-opened":(null===(r=t.$route.query.tab)||void 0===r?void 0:r.toString().toUpperCase())===i},{header:(0,o.k6)((()=>[(0,o.bF)(E,{avatar:""},{default:(0,o.k6)((()=>[(0,o.bF)($,{icon:"description",color:"primary","text-color":"white"})])),_:1}),(0,o.bF)(E,null,{default:(0,o.k6)((()=>[(0,o.Lk)("span",null,(0,a.v_)(i),1)])),_:2},1024)])),default:(0,o.k6)((()=>[(0,o.bF)(M,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",_,[(0,o.Lk)("div",p,[1==t.is_admin?((0,o.uX)(),(0,o.CE)("div",b,[(0,o.bF)(Q),(0,o.bF)(T,{icon:"add",label:t.$t("new"),onClick:e=>t.goToAddNew(i)},null,8,["label","onClick"])])):(0,o.Q3)("",!0),(0,o.bF)(z,{nodes:t.customDocEDI(n),"node-key":"label","default-expand-all":"",expanded:t.expandedKeys},{"default-header":(0,o.k6)((n=>[(0,o.Lk)("div",m,[(0,o.bF)(V,{flat:"",class:"back-white"},{default:(0,o.k6)((()=>{var l,r,s,c,u,_;return[(0,o.Lk)("tbody",null,[(0,o.Lk)("tr",{class:"cursor-pointer",onClick:e=>t.rowCliked(n.node.data,i)},[(0,o.Lk)("td",v,(0,a.v_)(t.modifiedString(null===(l=n.node.data)||void 0===l?void 0:l.attribute_name)),1),(0,o.Lk)("td",h,(0,a.v_)(null===(r=n.node.data)||void 0===r?void 0:r.attribute_type),1),(0,o.Lk)("td",k,(0,a.v_)(null===(s=n.node.data)||void 0===s?void 0:s.version),1),(0,o.Lk)("td",f,(0,a.v_)((null===(c=n.node.data)||void 0===c?void 0:c.last_modified_on)?t.formatDateAccordingToPreference(null===(u=n.node.data)||void 0===u?void 0:u.last_modified_on):t.formatDateAccordingToPreference(null===(_=n.node.data)||void 0===_?void 0:_.created_on)),1),(0,o.Lk)("td",y,[(0,o.bF)(q,{flat:"",dense:"",round:"",onClick:e[0]||(e[0]=(0,d.D$)((()=>{}),["stop","prevent"])),icon:"more_horiz"},{default:(0,o.k6)((()=>[(0,o.bF)(I,{"auto-close":"","transition-show":"jump-down","transition-hide":"jump-up",anchor:"bottom middle",self:"top middle"},{default:(0,o.k6)((()=>[(0,o.bF)(X,{dense:"",style:{"min-width":"100px"}},{default:(0,o.k6)((()=>{var e,d;return[1==t.is_admin?((0,o.uX)(),(0,o.Wv)(S,{key:0,clickable:"",onClick:e=>{var i;return t.openDeleteDialog(null===(i=n.node.data)||void 0===i?void 0:i.id)}},{default:(0,o.k6)((()=>[(0,o.bF)(E,null,{default:(0,o.k6)((()=>[(0,o.Lk)("span",A,(0,a.v_)(t.$t("delete")),1)])),_:1})])),_:2},1032,["onClick"])):(0,o.Q3)("",!0),"DEFAULT"!=(null===(e=n.node.data)||void 0===e?void 0:e.org_id)?((0,o.uX)(),(0,o.Wv)(S,{key:1,clickable:""},{default:(0,o.k6)((()=>[(0,o.bF)(E,{onClick:e=>{var o,a,d,l;return t.goToEdit(null===(o=n.node.data)||void 0===o?void 0:o.id,null===(a=n.node.data)||void 0===a?void 0:a.doc_type_key,i,null===(d=n.node.data)||void 0===d?void 0:d.attribute_name,null===(l=n.node.data)||void 0===l?void 0:l.attribute_type)}},{default:(0,o.k6)((()=>[(0,o.Lk)("span",null,(0,a.v_)(t.$t("edit")),1)])),_:2},1032,["onClick"])])),_:2},1024)):(0,o.Q3)("",!0),"DEFAULT"==(null===(d=n.node.data)||void 0===d?void 0:d.org_id)?((0,o.uX)(),(0,o.Wv)(S,{key:2,clickable:""},{default:(0,o.k6)((()=>[(0,o.bF)(E,{onClick:e=>{var o,a,d,l;return t.customize(null===(o=n.node.data)||void 0===o?void 0:o.id,null===(a=n.node.data)||void 0===a?void 0:a.doc_type_key,i,null===(d=n.node.data)||void 0===d?void 0:d.attribute_name,null===(l=n.node.data)||void 0===l?void 0:l.attribute_type)}},{default:(0,o.k6)((()=>[(0,o.Lk)("span",null,(0,a.v_)(t.$t("customize")),1)])),_:2},1032,["onClick"])])),_:2},1024)):(0,o.Q3)("",!0)]})),_:2},1024)])),_:2},1024)])),_:2},1024)])],8,g)])]})),_:2},1024)])])),_:2},1032,["nodes","expanded"])])])])),_:2},1024)])),_:2},1032,["default-opened"]),(0,o.bF)(K)])):(0,o.Q3)("",!0)],64)})),128))])),_:1})])]),(0,o.bF)(B,{modelValue:t.confirmDeleteDialog,"onUpdate:modelValue":e[2]||(e[2]=e=>t.confirmDeleteDialog=e),persistent:""},{default:(0,o.k6)((()=>[(0,o.bF)(M,null,{default:(0,o.k6)((()=>[(0,o.bF)(j,{class:"row",style:{"justify-content":"center",display:"flex"}},{default:(0,o.k6)((()=>[(0,o.bF)($,{icon:"warning",color:"primary"})])),_:1}),(0,o.bF)(j,{class:"row items-center"},{default:(0,o.k6)((()=>[(0,o.Lk)("span",x,(0,a.v_)(t.$t("pages.messages.msg_delete")),1)])),_:1}),(0,o.bF)(U,{align:"right"},{default:(0,o.k6)((()=>[(0,o.bo)((0,o.bF)(T,{appearance:"cancel",label:t.$t("cancel")},null,8,["label"]),[[W]]),(0,o.bo)((0,o.bF)(T,{appearance:"negative",label:t.$t("delete"),onClick:e[1]||(e[1]=e=>t.deleteAttribute())},null,8,["label"]),[[W]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.bF)(N,{showing:t.processing,style:{"z-index":"1000000000"}},{default:(0,o.k6)((()=>[F])),_:1},8,["showing"])],64)}var L=i(1659),C=i(24622),D=i(46736),q=i(38734),$=i(64775),E=i(73937),Q=i(94124),T=i(18505),S=i(24681),X=i(91236),I=function(t,e,i,o){function a(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,d){function n(t){try{r(o.next(t))}catch(e){d(e)}}function l(t){try{r(o["throw"](t))}catch(e){d(e)}}function r(t){t.done?i(t.value):a(t.value).then(n,l)}r((o=o.apply(t,e||[])).next())}))};const V=(0,o.pM)({el:"#app",mixins:[C.A,T.A,D.A],components:{SubHeader:X.A},mounted(){var t;this.initView(),this.is_admin=(0,E.qc)();const e=null===(t=this.$route.query.title)||void 0===t?void 0:t.toString();this.title=e||this.params.doc_type},data(){return{title:""}},methods:{initView(){this.getDocxsltBy()},getDocxsltBy(){return I(this,void 0,void 0,(function*(){this.processing=!0,this.params.doc_type=this.$route.params.doc_type.toString(),yield this.getDocXslt(),setTimeout((()=>{this.processing=!1}),2e3)}))},goToEdit(t,e,i,o,a){this.$router.push(`/settings/manage_xslt/${e}/${t}/${i}?attribute_name=${this.modifiedString(o)}&attribute_type=${a}&title=${this.title}`)},goToAddNew(t){const e=this.$route.params.doc_type.toString();this.$router.push(`/settings/record_xslt/${e}/${t}?title=${this.title}`),this.resetCurrentModel()},modifiedString(t){return t?t.replace(/_/g," "):t},openDeleteDialog(t){this.current_model.attribute_id=t,this.confirmDeleteDialog=!0},deleteAttribute(){return I(this,void 0,void 0,(function*(){try{yield this.deleteExtractionAttribute(),this.initView(),this.showSuccessToast("Attribute deleted successfully")}catch(t){const e=$.t.getErrorMessage(t);this.showErrorToast(e)}}))},customize(t,e,i,o,a){return I(this,void 0,void 0,(function*(){this.current_model.attribute_name=o,this.current_model.attribute_type=a,this.current_model.doc_type_key=e,this.current_model.e_doc_type=i,this.current_model.doc_type=e,yield this.listVersion(t),this.current_model.xslt_data=this.versions[0].value;const d=yield this.createExtractionAttribute();this.goToEdit(d.data.id,e,i,o,a)}))},buildTree(t,e=0){if(0===t.length)return[];const i={label:`Label ${e+1}`,data:t[0],index:e};return t.length>1&&(i["children"]=[this.buildTree(t.slice(1),e+1)]),i},customDocEDI(t){const e=[this.buildTree(t)];return e},rowCliked(t,e){"DEFAULT"!=t.org_id?this.goToEdit(t.id,t.doc_type_key,e,t.attribute_name,t.attribute_type):this.customize(t.id,t.doc_type_key,e,t.attribute_name,t.attribute_type)}},setup(){const t=(0,Q.If)(),{datePattern:e}=(0,S.B)(),{getDocXslt:i,resetCurrentModel:o,deleteExtractionAttribute:a,createExtractionAttribute:d,listVersion:n}=t,{processing:l,params:r,versions:s,e_doc_data:c,current_model:u,confirmDeleteDialog:_}=(0,L.bP)(t);return{expandedKeys:["Label 1","Label 2","Label 3"],is_admin:(0,q.KR)(!1),params:r,versions:s,processing:l,e_doc_data:c,current_model:u,confirmDeleteDialog:_,deleteExtractionAttribute:a,createExtractionAttribute:d,resetCurrentModel:o,datePattern:e,listVersion:n,getDocXslt:i}}});var z=i(12807),M=i(56384),P=i(50492),K=i(53999),j=i(88841),U=i(25173),B=i(3952),N=i(23316),W=i(93676),H=i(52220),O=i(857),R=i(45262),G=i(84436),J=i(90124),Y=i(10386),Z=i(82156),tt=i(44189),et=i(62669),it=i(39035),ot=i(88672),at=i(98582),dt=i.n(at);const nt=(0,z.A)(V,[["render",w],["__scopeId","data-v-79e4fce3"]]),lt=nt;dt()(V,"components",{QBtn:M.A,QIcon:P.A,QList:K.A,QExpansionItem:j.A,QItemSection:U.A,QAvatar:B.A,QCard:N.A,QSpace:W.A,QTree:H.A,QMarkupTable:O.A,QTd:R.A,QMenu:G.A,QItem:J.A,QSeparator:Y.A,QDialog:Z.A,QCardSection:tt.A,QCardActions:et.A,QInnerLoading:it.A}),dt()(V,"directives",{ClosePopup:ot.A})}}]);