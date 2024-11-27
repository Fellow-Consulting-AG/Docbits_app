"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[4625],{14625:(t,e,i)=>{i.r(e),i.d(e,{default:()=>at});var o=i(61758),a=i(58790),n=i(29104);const d=t=>((0,o.Qi)("data-v-bc0ec276"),t=t(),(0,o.jt)(),t),l={class:"container text-color-white settings-container bg-wrapper"},r={class:"q-pa-md"},s={key:0},c={class:"container"},u={class:"full-width q-pa-md"},_={key:0,class:"row q-mb-md"},p={class:"focus",style:{width:"100%",border:"1.5px solid #EFEFEF !important"}},b=["onClick"],v={class:"q-td text-left",style:{width:"25%"}},g={class:"q-td text-left",style:{width:"25%"}},m={class:"q-td text-left",style:{width:"25%"}},h={class:"q-td text-left",style:{width:"25%"}},k={class:"q-td text-right"},f={class:"text-red"},y={class:"q-ml-sm"},A=d((()=>(0,o.Lk)("img",{class:"loading-image",src:"images/loader.gif",alt:"Loading..."},null,-1)));function F(t,e,i,d,F,w){const x=(0,o.g2)("SubHeader"),L=(0,o.g2)("q-avatar"),C=(0,o.g2)("q-item-section"),D=(0,o.g2)("q-space"),q=(0,o.g2)("f-btn"),E=(0,o.g2)("q-item"),$=(0,o.g2)("q-list"),Q=(0,o.g2)("q-menu"),T=(0,o.g2)("q-btn"),S=(0,o.g2)("q-markup-table"),X=(0,o.g2)("q-tree"),I=(0,o.g2)("q-card"),V=(0,o.g2)("q-expansion-item"),M=(0,o.g2)("q-separator"),P=(0,o.g2)("q-card-section"),z=(0,o.g2)("q-card-actions"),K=(0,o.g2)("q-dialog"),j=(0,o.g2)("q-inner-loading"),U=(0,o.gN)("close-popup");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(x,{name:"settings_manage_xslt",label:t.$t(t.title.toLocaleLowerCase())+" XSLT "+t.$t("editor"),display_help_link:!0,onSearch:!1},null,8,["label"]),(0,o.Lk)("div",l,[(0,o.Lk)("div",r,[(0,o.bF)($,{bordered:"",class:"rounded-borders"},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(Object.entries(t.e_doc_data),(([i,d],l)=>{var r;return(0,o.uX)(),(0,o.CE)(o.FK,{key:l},[d&&d.length?((0,o.uX)(),(0,o.CE)("div",s,[(0,o.bF)(V,{"default-opened":(null===(r=t.$route.query.tab)||void 0===r?void 0:r.toString().toUpperCase())===i},{header:(0,o.k6)((()=>[(0,o.bF)(C,{avatar:""},{default:(0,o.k6)((()=>[(0,o.bF)(L,{icon:"description",color:"primary","text-color":"white"})])),_:1}),(0,o.bF)(C,null,{default:(0,o.k6)((()=>[(0,o.Lk)("span",null,(0,a.v_)(i),1)])),_:2},1024)])),default:(0,o.k6)((()=>[(0,o.bF)(I,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",c,[(0,o.Lk)("div",u,[1==t.is_admin?((0,o.uX)(),(0,o.CE)("div",_,[(0,o.bF)(D),(0,o.bF)(q,{icon:"add",label:t.$t("new"),onClick:e=>t.goToAddNew(i)},null,8,["label","onClick"])])):(0,o.Q3)("",!0),(0,o.bF)(X,{nodes:t.customDocEDI(d),"node-key":"label","default-expand-all":"",expanded:t.expandedKeys},{"default-header":(0,o.k6)((d=>[(0,o.Lk)("div",p,[(0,o.bF)(S,{flat:"",class:"back-white"},{default:(0,o.k6)((()=>{var l,r,s,c,u,_;return[(0,o.Lk)("tbody",null,[(0,o.Lk)("tr",{class:"cursor-pointer",onClick:e=>t.rowCliked(d.node.data,i)},[(0,o.Lk)("td",v,(0,a.v_)(t.modifiedString(null===(l=d.node.data)||void 0===l?void 0:l.attribute_name)),1),(0,o.Lk)("td",g,(0,a.v_)(null===(r=d.node.data)||void 0===r?void 0:r.attribute_type),1),(0,o.Lk)("td",m,(0,a.v_)(null===(s=d.node.data)||void 0===s?void 0:s.version),1),(0,o.Lk)("td",h,(0,a.v_)((null===(c=d.node.data)||void 0===c?void 0:c.last_modified_on)?t.formatDateAccordingToPreference(null===(u=d.node.data)||void 0===u?void 0:u.last_modified_on):t.formatDateAccordingToPreference(null===(_=d.node.data)||void 0===_?void 0:_.created_on)),1),(0,o.Lk)("td",k,[(0,o.bF)(T,{flat:"",dense:"",round:"",onClick:e[0]||(e[0]=(0,n.D$)((()=>{}),["stop","prevent"])),icon:"more_horiz"},{default:(0,o.k6)((()=>[(0,o.bF)(Q,{"auto-close":"","transition-show":"jump-down","transition-hide":"jump-up",anchor:"bottom middle",self:"top middle"},{default:(0,o.k6)((()=>[(0,o.bF)($,{dense:"",style:{"min-width":"100px"}},{default:(0,o.k6)((()=>{var e,n;return[1==t.is_admin?((0,o.uX)(),(0,o.Wv)(E,{key:0,clickable:"",onClick:e=>{var i;return t.openDeleteDialog(null===(i=d.node.data)||void 0===i?void 0:i.id)}},{default:(0,o.k6)((()=>[(0,o.bF)(C,null,{default:(0,o.k6)((()=>[(0,o.Lk)("span",f,(0,a.v_)(t.$t("delete")),1)])),_:1})])),_:2},1032,["onClick"])):(0,o.Q3)("",!0),"DEFAULT"!=(null===(e=d.node.data)||void 0===e?void 0:e.org_id)?((0,o.uX)(),(0,o.Wv)(E,{key:1,clickable:""},{default:(0,o.k6)((()=>[(0,o.bF)(C,{onClick:e=>{var o,a,n,l;return t.goToEdit(null===(o=d.node.data)||void 0===o?void 0:o.id,null===(a=d.node.data)||void 0===a?void 0:a.doc_type_key,i,null===(n=d.node.data)||void 0===n?void 0:n.attribute_name,null===(l=d.node.data)||void 0===l?void 0:l.attribute_type)}},{default:(0,o.k6)((()=>[(0,o.Lk)("span",null,(0,a.v_)(t.$t("edit")),1)])),_:2},1032,["onClick"])])),_:2},1024)):(0,o.Q3)("",!0),"DEFAULT"==(null===(n=d.node.data)||void 0===n?void 0:n.org_id)?((0,o.uX)(),(0,o.Wv)(E,{key:2,clickable:""},{default:(0,o.k6)((()=>[(0,o.bF)(C,{onClick:e=>{var o,a,n,l;return t.customize(null===(o=d.node.data)||void 0===o?void 0:o.id,null===(a=d.node.data)||void 0===a?void 0:a.doc_type_key,i,null===(n=d.node.data)||void 0===n?void 0:n.attribute_name,null===(l=d.node.data)||void 0===l?void 0:l.attribute_type)}},{default:(0,o.k6)((()=>[(0,o.Lk)("span",null,(0,a.v_)(t.$t("customize")),1)])),_:2},1032,["onClick"])])),_:2},1024)):(0,o.Q3)("",!0)]})),_:2},1024)])),_:2},1024)])),_:2},1024)])],8,b)])]})),_:2},1024)])])),_:2},1032,["nodes","expanded"])])])])),_:2},1024)])),_:2},1032,["default-opened"]),(0,o.bF)(M)])):(0,o.Q3)("",!0)],64)})),128))])),_:1})])]),(0,o.bF)(K,{modelValue:t.confirmDeleteDialog,"onUpdate:modelValue":e[2]||(e[2]=e=>t.confirmDeleteDialog=e),persistent:""},{default:(0,o.k6)((()=>[(0,o.bF)(I,null,{default:(0,o.k6)((()=>[(0,o.bF)(P,{class:"row",style:{"justify-content":"center",display:"flex"}},{default:(0,o.k6)((()=>[(0,o.bF)(L,{icon:"warning",color:"primary"})])),_:1}),(0,o.bF)(P,{class:"row items-center"},{default:(0,o.k6)((()=>[(0,o.Lk)("span",y,(0,a.v_)(t.$t("pages.messages.msg_delete")),1)])),_:1}),(0,o.bF)(z,{align:"right"},{default:(0,o.k6)((()=>[(0,o.bo)((0,o.bF)(q,{appearance:"cancel",label:t.$t("cancel")},null,8,["label"]),[[U]]),(0,o.bo)((0,o.bF)(q,{appearance:"negative",label:t.$t("delete"),onClick:e[1]||(e[1]=e=>t.deleteAttribute())},null,8,["label"]),[[U]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.bF)(j,{showing:t.processing,style:{"z-index":"1000000000"}},{default:(0,o.k6)((()=>[A])),_:1},8,["showing"])],64)}var w=i(1659),x=i(24622),L=i(46736),C=i(38734),D=i(64775),q=i(73937),E=i(1595),$=i(18505),Q=i(24681),T=i(68180),S=function(t,e,i,o){function a(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,n){function d(t){try{r(o.next(t))}catch(e){n(e)}}function l(t){try{r(o["throw"](t))}catch(e){n(e)}}function r(t){t.done?i(t.value):a(t.value).then(d,l)}r((o=o.apply(t,e||[])).next())}))};const X=(0,o.pM)({el:"#app",mixins:[x.A,$.A,L.A],components:{SubHeader:T.A},mounted(){var t;this.initView(),this.is_admin=(0,q.qc)();const e=null===(t=this.$route.query.title)||void 0===t?void 0:t.toString();this.title=e||this.params.doc_type},data(){return{title:""}},methods:{initView(){this.getDocxsltBy()},getDocxsltBy(){return S(this,void 0,void 0,(function*(){this.processing=!0,this.params.doc_type=this.$route.params.doc_type.toString(),yield this.getDocXslt(),setTimeout((()=>{this.processing=!1}),2e3)}))},goToEdit(t,e,i,o,a){this.$router.push(`/settings/manage_xslt/${e}/${t}/${i}?attribute_name=${this.modifiedString(o)}&attribute_type=${a}&title=${this.title}`)},goToAddNew(t){const e=this.$route.params.doc_type.toString();this.$router.push(`/settings/record_xslt/${e}/${t}?title=${this.title}`),this.resetCurrentModel()},modifiedString(t){return t?t.replace(/_/g," "):t},openDeleteDialog(t){this.current_model.attribute_id=t,this.confirmDeleteDialog=!0},deleteAttribute(){return S(this,void 0,void 0,(function*(){try{yield this.deleteExtractionAttribute(),this.initView(),this.showSuccessToast("Attribute deleted successfully")}catch(t){const e=D.t.getErrorMessage(t);this.showErrorToast(e)}}))},customize(t,e,i,o,a){return S(this,void 0,void 0,(function*(){this.current_model.attribute_name=o,this.current_model.attribute_type=a,this.current_model.doc_type_key=e,this.current_model.e_doc_type=i,this.current_model.doc_type=e,yield this.listVersion(t),this.current_model.xslt_data=this.versions[0].value;const n=yield this.createExtractionAttribute();this.goToEdit(n.data.id,e,i,o,a)}))},buildTree(t,e=0){if(0===t.length)return[];const i={label:`Label ${e+1}`,data:t[0],index:e};return t.length>1&&(i["children"]=[this.buildTree(t.slice(1),e+1)]),i},customDocEDI(t){const e=[this.buildTree(t)];return e},rowCliked(t,e){"DEFAULT"!=t.org_id?this.goToEdit(t.id,t.doc_type_key,e,t.attribute_name,t.attribute_type):this.customize(t.id,t.doc_type_key,e,t.attribute_name,t.attribute_type)}},setup(){const t=(0,E.If)(),{datePattern:e}=(0,Q.B)(),{getDocXslt:i,resetCurrentModel:o,deleteExtractionAttribute:a,createExtractionAttribute:n,listVersion:d}=t,{processing:l,params:r,versions:s,e_doc_data:c,current_model:u,confirmDeleteDialog:_}=(0,w.bP)(t);return{expandedKeys:["Label 1","Label 2","Label 3"],is_admin:(0,C.KR)(!1),params:r,versions:s,processing:l,e_doc_data:c,current_model:u,confirmDeleteDialog:_,deleteExtractionAttribute:a,createExtractionAttribute:n,resetCurrentModel:o,datePattern:e,listVersion:d,getDocXslt:i}}});var I=i(12807),V=i(53999),M=i(88841),P=i(25173),z=i(3952),K=i(23316),j=i(93676),U=i(52220),B=i(857),N=i(45262),W=i(56384),H=i(84436),O=i(90124),R=i(10386),G=i(82156),J=i(44189),Y=i(62669),Z=i(39035),tt=i(88672),et=i(98582),it=i.n(et);const ot=(0,I.A)(X,[["render",F],["__scopeId","data-v-bc0ec276"]]),at=ot;it()(X,"components",{QList:V.A,QExpansionItem:M.A,QItemSection:P.A,QAvatar:z.A,QCard:K.A,QSpace:j.A,QTree:U.A,QMarkupTable:B.A,QTd:N.A,QBtn:W.A,QMenu:H.A,QItem:O.A,QSeparator:R.A,QDialog:G.A,QCardSection:J.A,QCardActions:Y.A,QInnerLoading:Z.A}),it()(X,"directives",{ClosePopup:tt.A})}}]);