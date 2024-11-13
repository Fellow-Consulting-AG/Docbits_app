"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[2959],{62959:(e,t,l)=>{l.r(t),l.d(t,{default:()=>me});var a=l(61758);const o=e=>((0,a.Qi)("data-v-e782b53e"),e=e(),(0,a.jt)(),e),n={class:"table-container"},i=o((()=>(0,a.Lk)("img",{class:"loading-image",src:"images/loader.gif",alt:"Loading..."},null,-1)));function s(e,t,l,o,s,r){const u=(0,a.g2)("SubHeader"),d=(0,a.g2)("f-btn"),p=(0,a.g2)("BackToSettings"),c=(0,a.g2)("Create"),g=(0,a.g2)("q-dialog"),h=(0,a.g2)("SupplierList"),m=(0,a.g2)("q-inner-loading");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(u,{name:"supplier_group",label:e.$t("supplier_group_setting")},null,8,["label"]),(0,a.bF)(p,null,{default:(0,a.k6)((()=>[(0,a.bF)(d,{class:"float-right",icon:"add",label:e.$t("new"),onClick:e.addNewSupplierGroup},null,8,["label","onClick"])])),_:1}),(0,a.bF)(g,{modelValue:e.display_add_dialog,"onUpdate:modelValue":t[0]||(t[0]=t=>e.display_add_dialog=t)},{default:(0,a.k6)((()=>[(0,a.bF)(c,{getDisplay:e.DialogDisplay,getLoading:e.LoadingData},null,8,["getDisplay","getLoading"])])),_:1},8,["modelValue"]),(0,a.Lk)("div",n,[(0,a.bF)(h)]),(0,a.bF)(m,{showing:e.loading},{default:(0,a.k6)((()=>[i])),_:1},8,["showing"])],64)}var r=l(38734),u=l(66693),d=l(25773),p=l(58790);const c={class:"text-weight-bold"};function g(e,t,l,o,n,i){const s=(0,a.g2)("q-toolbar-title"),r=(0,a.g2)("f-btn"),u=(0,a.g2)("q-toolbar"),d=(0,a.g2)("q-input"),g=(0,a.g2)("q-card-section"),h=(0,a.g2)("q-card-actions"),m=(0,a.g2)("q-form"),b=(0,a.g2)("q-card"),_=(0,a.gN)("close-popup");return(0,a.uX)(),(0,a.Wv)(b,{style:{width:"600px"}},{default:(0,a.k6)((()=>[(0,a.bF)(m,{onSubmit:e.onSubmit},{default:(0,a.k6)((()=>[(0,a.bF)(u,{class:"text-white secondary-toolbar"},{default:(0,a.k6)((()=>[(0,a.bF)(s,null,{default:(0,a.k6)((()=>[(0,a.Lk)("span",c,(0,p.v_)(e.$t("create_new_group")),1)])),_:1}),(0,a.bo)((0,a.bF)(r,{icon:"close"},null,512),[[_]])])),_:1}),(0,a.bF)(g,{class:"q-mt-md"},{default:(0,a.k6)((()=>[(0,a.bF)(d,{modelValue:e.groupApiName,"onUpdate:modelValue":t[0]||(t[0]=t=>e.groupApiName=t),label:e.$t("group_api_name"),outlined:"",dense:"",class:"col-12","lazy-rules":"",rules:[e=>e&&e.length>0||"Please input group api name"]},null,8,["modelValue","label","rules"]),(0,a.bF)(d,{modelValue:e.groupName,"onUpdate:modelValue":t[1]||(t[1]=t=>e.groupName=t),label:e.$t("group_name"),outlined:"",dense:"",class:"col-12 q-mt-sm","lazy-rules":"",rules:[e=>e&&e.length>0||"Please input group name"]},null,8,["modelValue","label","rules"])])),_:1}),(0,a.bF)(h,{align:"right"},{default:(0,a.k6)((()=>[(0,a.bo)((0,a.bF)(r,{appearance:"cancel",label:e.$t("cancel")},null,8,["label"]),[[_]]),(0,a.bF)(r,{type:"submit",class:"q-mr-sm",label:e.$t("save")},null,8,["label"])])),_:1})])),_:1},8,["onSubmit"])])),_:1})}var h=l(11470),m=l(64775),b=l(24622),_=l(1659),f=function(e,t,l,a){function o(e){return e instanceof l?e:new l((function(t){t(e)}))}return new(l||(l=Promise))((function(l,n){function i(e){try{r(a.next(e))}catch(t){n(t)}}function s(e){try{r(a["throw"](e))}catch(t){n(t)}}function r(e){e.done?l(e.value):o(e.value).then(i,s)}r((a=a.apply(e,t||[])).next())}))};const y=(0,_.nY)("supplier_group_store",{state:()=>({display_data:[],loading:!0}),actions:{getAll(){return f(this,void 0,void 0,(function*(){try{const e=yield h.Zb.list();e&&(this.display_data=null===e||void 0===e?void 0:e.data)}catch(e){throw e}}))}}});var k=l(23537),A=function(e,t,l,a){function o(e){return e instanceof l?e:new l((function(t){t(e)}))}return new(l||(l=Promise))((function(l,n){function i(e){try{r(a.next(e))}catch(t){n(t)}}function s(e){try{r(a["throw"](e))}catch(t){n(t)}}function r(e){e.done?l(e.value):o(e.value).then(i,s)}r((a=a.apply(e,t||[])).next())}))};const v=(0,a.pM)({el:"#app",mixins:[b.A],props:{getDisplay:{type:Function,required:!0},getLoading:{type:Function,required:!0}},components:{},setup(){const e=y(),{getAll:t}=e,{t:l}=(0,k.s9)();return{groupApiName:(0,r.KR)(""),groupName:(0,r.KR)(""),supplier_group_store:e,getAll:t,t:l}},methods:{onSubmit(){return A(this,void 0,void 0,(function*(){try{this.getDisplay(!1),this.getLoading(!0);const e=new FormData;e.append("group_name",this.groupApiName),e.append("title",this.groupName);const t=yield h.Zb.create(e);!1===t.success?this.showErrorToast(null===t||void 0===t?void 0:t.message):(yield this.supplier_group_store.getAll(),this.showSuccessToast(this.t("supplier_group_created_successfully")))}catch(e){const t=m.t.getErrorMessage(e);this.showErrorToast(t)}finally{this.getLoading(!1)}}))}}});var F=l(12807),w=l(23316),q=l(49200),D=l(36914),L=l(39150),Q=l(44189),C=l(67837),S=l(62669),x=l(88672),N=l(98582),V=l.n(N);const $=(0,F.A)(v,[["render",g]]),T=$;V()(v,"components",{QCard:w.A,QForm:q.A,QToolbar:D.A,QToolbarTitle:L.A,QCardSection:Q.A,QInput:C.A,QCardActions:S.A}),V()(v,"directives",{ClosePopup:x.A});var E=l(29104);const P=e=>((0,a.Qi)("data-v-43b3811a"),e=e(),(0,a.jt)(),e),K={class:"full-width"},I={class:"table-header-text"},M={style:{width:"120px"},align:"right"},R={align:"right"},z={class:"text-red-14"},U={class:"q-ml-sm"},X=P((()=>(0,a.Lk)("img",{class:"loading-image",src:"images/loader.gif",alt:"Loading..."},null,-1)));function j(e,t,l,o,n,i){const s=(0,a.g2)("q-item-section"),r=(0,a.g2)("q-item"),u=(0,a.g2)("q-separator"),d=(0,a.g2)("q-list"),c=(0,a.g2)("q-menu"),g=(0,a.g2)("q-btn"),h=(0,a.g2)("q-markup-table"),m=(0,a.g2)("Edit"),b=(0,a.g2)("q-dialog"),_=(0,a.g2)("q-avatar"),f=(0,a.g2)("q-card-section"),y=(0,a.g2)("f-btn"),k=(0,a.g2)("q-card-actions"),A=(0,a.g2)("q-card"),v=(0,a.g2)("q-inner-loading"),F=(0,a.gN)("close-popup");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",K,[(0,a.bF)(h,{flat:"",class:"dashboard-table-height back-white",style:{"z-index":"1"}},{default:(0,a.k6)((()=>[(0,a.Lk)("thead",null,[(0,a.Lk)("tr",I,[(0,a.Lk)("th",null,(0,p.v_)(e.$t("group_api_name")),1),(0,a.Lk)("th",null,(0,p.v_)(e.$t("group_name")),1),(0,a.Lk)("th",M,(0,p.v_)(e.$t("actions")),1)])]),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.display_data,(l=>((0,a.uX)(),(0,a.CE)("tr",{key:l.id},[(0,a.Lk)("td",null,(0,p.v_)(l.group_name),1),(0,a.Lk)("td",null,(0,p.v_)(l.title),1),(0,a.Lk)("td",R,[(0,a.bF)(g,{flat:"",dense:"",round:"",onClick:t[0]||(t[0]=(0,E.D$)((()=>{}),["stop","prevent"])),icon:"more_horiz"},{default:(0,a.k6)((()=>[(0,a.bF)(c,{"auto-close":"","transition-show":"jump-down","transition-hide":"jump-up",anchor:"bottom middle",self:"top middle"},{default:(0,a.k6)((()=>[(0,a.bF)(d,{dense:"",style:{"min-width":"100px"}},{default:(0,a.k6)((()=>[(0,a.bF)(r,{clickable:"",onClick:t=>e.openFormEdit(l)},{default:(0,a.k6)((()=>[(0,a.bF)(s,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,p.v_)(e.$t("edit")),1)])),_:1})])),_:2},1032,["onClick"]),(0,a.bF)(u,{inset:""}),(0,a.bF)(r,{clickable:"",onClick:t=>e.openFormDelete(null===l||void 0===l?void 0:l.id)},{default:(0,a.k6)((()=>[(0,a.bF)(s,null,{default:(0,a.k6)((()=>[(0,a.Lk)("span",z,(0,p.v_)(e.$t("delete")),1)])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])])))),128))])])),_:1})]),(0,a.bF)(b,{modelValue:e.display_edit_dialog,"onUpdate:modelValue":t[1]||(t[1]=t=>e.display_edit_dialog=t)},{default:(0,a.k6)((()=>[(0,a.bF)(m,{getData:e.getData,getDisplay:e.DisplayDialog},null,8,["getData","getDisplay"])])),_:1},8,["modelValue"]),(0,a.bF)(b,{modelValue:e.confirm_delete,"onUpdate:modelValue":t[2]||(t[2]=t=>e.confirm_delete=t),persistent:""},{default:(0,a.k6)((()=>[(0,a.bF)(A,null,{default:(0,a.k6)((()=>[(0,a.bF)(f,{class:"row",style:{"justify-content":"center",display:"flex"}},{default:(0,a.k6)((()=>[(0,a.bF)(_,{icon:"warning",color:"primary"})])),_:1}),(0,a.bF)(f,{class:"row items-center"},{default:(0,a.k6)((()=>[(0,a.Lk)("span",U,(0,p.v_)(e.$t("pages.messages.msg_delete")),1)])),_:1}),(0,a.bF)(k,{align:"right"},{default:(0,a.k6)((()=>[(0,a.bo)((0,a.bF)(y,{appearance:"cancel",label:e.$t("cancel")},null,8,["label"]),[[F]]),(0,a.bo)((0,a.bF)(y,{appearance:"negative",label:e.$t("delete"),onClick:e.handleDelete},null,8,["label","onClick"]),[[F]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.bF)(v,{showing:e.loading,style:{"z-index":"2"}},{default:(0,a.k6)((()=>[X])),_:1},8,["showing"])],64)}const Z={class:"text-weight-bold"};function B(e,t,l,o,n,i){const s=(0,a.g2)("q-toolbar-title"),r=(0,a.g2)("f-btn"),u=(0,a.g2)("q-toolbar"),d=(0,a.g2)("q-input"),c=(0,a.g2)("q-card-section"),g=(0,a.g2)("q-card-actions"),h=(0,a.g2)("q-form"),m=(0,a.g2)("q-card"),b=(0,a.gN)("close-popup");return(0,a.uX)(),(0,a.Wv)(m,{style:{width:"600px"}},{default:(0,a.k6)((()=>[(0,a.bF)(h,{onSubmit:e.updateSupplier},{default:(0,a.k6)((()=>[(0,a.bF)(u,{class:"text-white secondary-toolbar"},{default:(0,a.k6)((()=>[(0,a.bF)(s,null,{default:(0,a.k6)((()=>[(0,a.Lk)("span",Z,(0,p.v_)(e.$t("edit_supplier_group")),1)])),_:1}),(0,a.bo)((0,a.bF)(r,{icon:"close"},null,512),[[b]])])),_:1}),(0,a.bF)(c,{class:"q-mt-md"},{default:(0,a.k6)((()=>[(0,a.bF)(d,{modelValue:e.groupApiName,"onUpdate:modelValue":t[0]||(t[0]=t=>e.groupApiName=t),label:e.$t("group_api_name"),outlined:"",dense:"",class:"col-12","lazy-rules":"",rules:[e=>e&&e.length>0||"Please input group api name"]},null,8,["modelValue","label","rules"]),(0,a.bF)(d,{modelValue:e.groupName,"onUpdate:modelValue":t[1]||(t[1]=t=>e.groupName=t),label:e.$t("group_name"),outlined:"",dense:"",class:"col-12 q-mt-sm","lazy-rules":"",rules:[e=>e&&e.length>0||"Please input group name"]},null,8,["modelValue","label","rules"])])),_:1}),(0,a.bF)(g,{align:"right"},{default:(0,a.k6)((()=>[(0,a.bo)((0,a.bF)(r,{appearance:"cancel",label:e.$t("cancel")},null,8,["label"]),[[b]]),(0,a.bF)(r,{type:"submit",class:"q-mr-sm",label:e.$t("save")},null,8,["label"])])),_:1})])),_:1},8,["onSubmit"])])),_:1})}var W=function(e,t,l,a){function o(e){return e instanceof l?e:new l((function(t){t(e)}))}return new(l||(l=Promise))((function(l,n){function i(e){try{r(a.next(e))}catch(t){n(t)}}function s(e){try{r(a["throw"](e))}catch(t){n(t)}}function r(e){e.done?l(e.value):o(e.value).then(i,s)}r((a=a.apply(e,t||[])).next())}))};const G=(0,a.pM)({el:"#app",mixins:[b.A],props:{getData:{type:Function,required:!0},getDisplay:{type:Function,required:!0,optional:!1}},components:{},data(){return{data:{}}},setup(){const e=y(),{getAll:t}=e,{loading:l}=(0,_.bP)(e),{t:a}=(0,k.s9)();return{groupApiName:(0,r.KR)(""),groupName:(0,r.KR)(""),id:(0,r.KR)(""),supplier_group_store:e,getAll:t,loading:l,t:a}},created(){this.handlePopulateData()},methods:{handlePopulateData(){this.data=this.getData(),this.groupApiName=this.data.group_name,this.groupName=this.data.title},updateSupplier(){return W(this,void 0,void 0,(function*(){try{this.getDisplay(!1),this.loading=!0;const e={group_name:this.groupApiName,title:this.groupName};this.id=this.data.id;const t=yield h.Zb.edit(this.id,e);!1===t.success?this.showErrorToast(null===t||void 0===t?void 0:t.message):(yield this.supplier_group_store.getAll(),this.showSuccessToast(this.t("supplier_group_updated_successfully")))}catch(e){const t=m.t.getErrorMessage(e);this.showErrorToast(t)}finally{this.loading=!1}}))}}}),H=(0,F.A)(G,[["render",B]]),Y=H;V()(G,"components",{QCard:w.A,QForm:q.A,QToolbar:D.A,QToolbarTitle:L.A,QCardSection:Q.A,QInput:C.A,QCardActions:S.A}),V()(G,"directives",{ClosePopup:x.A});var J=function(e,t,l,a){function o(e){return e instanceof l?e:new l((function(t){t(e)}))}return new(l||(l=Promise))((function(l,n){function i(e){try{r(a.next(e))}catch(t){n(t)}}function s(e){try{r(a["throw"](e))}catch(t){n(t)}}function r(e){e.done?l(e.value):o(e.value).then(i,s)}r((a=a.apply(e,t||[])).next())}))};const O=(0,a.pM)({el:"#app",mixins:[b.A],components:{Edit:Y},mounted(){this.init()},data(){let e=!1,t=!1;const l=(0,r.KR)(""),a=(0,r.KR)("");return{display_edit_dialog:e,confirm_delete:t,supplierData:l,id:a}},setup(){const e=y(),{display_data:t,loading:l}=(0,_.bP)(e),{getAll:a}=e,{t:o}=(0,k.s9)();return{supplier_group_store:e,getAll:a,display_data:t,loading:l,t:o}},methods:{init(){this.getSupplierList()},getSupplierList(){return J(this,void 0,void 0,(function*(){try{this.loading=!0,yield this.supplier_group_store.getAll()}catch(e){logError(e)}finally{this.loading=!1}}))},openFormEdit(e){this.display_edit_dialog=!0,this.supplierData=e},getData(){return this.supplierData},openFormDelete(e){this.confirm_delete=!0,this.id=e},handleDelete(){return J(this,void 0,void 0,(function*(){try{this.loading=!0;const e=yield h.Zb.delete(this.id);!0===e.success&&(yield this.supplier_group_store.getAll(),this.showSuccessToast(this.t("supplier_group_deleted_successfully")))}catch(e){const t=m.t.getErrorMessage(e);this.showErrorToast(t)}finally{this.loading=!1}}))},DisplayDialog(e){this.display_edit_dialog=e}}});var ee=l(857),te=l(56384),le=l(84436),ae=l(53999),oe=l(90124),ne=l(25173),ie=l(10386),se=l(82156),re=l(3952),ue=l(39035),de=l(42315);const pe=(0,F.A)(O,[["render",j],["__scopeId","data-v-43b3811a"]]),ce=pe;V()(O,"components",{QMarkupTable:ee.A,QBtn:te.A,QMenu:le.A,QList:ae.A,QItem:oe.A,QItemSection:ne.A,QSeparator:ie.A,QDialog:se.A,QCard:w.A,QCardSection:Q.A,QAvatar:re.A,QCardActions:S.A,QInnerLoading:ue.A,QTable:de.A}),V()(O,"directives",{ClosePopup:x.A});const ge=(0,a.pM)({el:"#app",mixins:[b.A],components:{SubHeader:u.A,BackToSettings:d.A,Create:T,SupplierList:ce},data(){let e=!1;return{loading:e}},setup(){return{display_add_dialog:(0,r.KR)(!1)}},methods:{addNewSupplierGroup(){this.display_add_dialog=!0},DialogDisplay(e){this.display_add_dialog=e},LoadingData(e){this.loading=e}}}),he=(0,F.A)(ge,[["render",s],["__scopeId","data-v-e782b53e"]]),me=he;V()(ge,"components",{QDialog:se.A,QInnerLoading:ue.A})}}]);