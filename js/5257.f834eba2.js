"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[5257],{75257:(e,s,a)=>{a.r(s),a.d(s,{default:()=>Ae});var t=a(61758),r=a(29104),o=a(58790);const i=e=>((0,t.Qi)("data-v-633c28dc"),e=e(),(0,t.jt)(),e),l={class:"dashboard-container dashboard-text-color container-wrapper"},n={class:"row justify-between",style:{"margin-top":"-18px"}},d={class:"dashboard-search-box mt-20 white-inputs"},m={class:"dashboard-list-area q-my-lg"},c={class:"table-header-text"},u=["data-index","draggable","dropzone","onDragstart","onDrop","onDragover"],h={key:0,class:"cursor-default"},p={key:1},g=["onClick"],_={key:0},w={key:1},b={key:2},f={key:3,class:"text-center"},y={class:"text-red-14"},k={key:0},v={key:0,class:"text-center",colspan:"4"},E={key:0},F={key:1},C={class:"col-sm-12 col-md-12 col-lg-12"},$={style:{width:"80%",left:"10%",position:"relative"}},D=i((()=>(0,t.Lk)("div",{class:"col-sm-12 col-md-12 col-lg-12 text-center"},[(0,t.Lk)("img",{src:"settings/user.svg",class:"black_to_white q-my-sm",style:{height:"80px"}})],-1))),A={class:"col-sm-12 col-md-12 col-lg-12",id:"fist_name",style:{"margin-bottom":"5%"}},L={class:"col-sm-12 col-md-12 col-lg-12",id:"last_name"},V={class:"col-sm-12 col-md-12 col-lg-12",id:"email"},S={class:"password-requirements"},N={class:"col-sm-12 col-md-12 col-lg-12",id:"confirm_password"},x={class:"col-sm-12 col-md-12 col-lg-12"},U={class:"float-right q-ml-auto q-mb-md q-mr-sm"},q={class:"q-ml-sm"};function P(e,s,a,i,P,T){const I=(0,t.g2)("SubHeader"),R=(0,t.g2)("BackToSettings"),Q=(0,t.g2)("q-input"),K=(0,t.g2)("f-btn"),X=(0,t.g2)("ColumnOrderBy"),z=(0,t.g2)("q-checkbox"),O=(0,t.g2)("q-item-section"),j=(0,t.g2)("q-item"),B=(0,t.g2)("q-separator"),M=(0,t.g2)("q-list"),H=(0,t.g2)("q-menu"),Z=(0,t.g2)("q-btn"),G=(0,t.g2)("q-markup-table"),J=(0,t.g2)("Loader"),W=(0,t.g2)("q-toolbar-title"),Y=(0,t.g2)("q-toolbar"),ee=(0,t.g2)("q-icon"),se=(0,t.g2)("q-form"),ae=(0,t.g2)("q-card-section"),te=(0,t.g2)("q-card"),re=(0,t.g2)("q-dialog"),oe=(0,t.g2)("q-avatar"),ie=(0,t.g2)("q-card-actions"),le=(0,t.gN)("close-popup");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.bF)(I,{name:"user_settings",label:e.$t("pages.user.settings"),onSearch:!1},null,8,["label"]),(0,t.bF)(R),(0,t.Lk)("div",l,[(0,t.Lk)("div",n,[(0,t.Lk)("div",d,[(0,t.bF)(Q,{class:"width-500",dense:"",modelValue:e.filter.keyword,"onUpdate:modelValue":[s[0]||(s[0]=s=>e.filter.keyword=s),s[1]||(s[1]=s=>e.updateSearch(s))],autofocus:"",debounce:1e3,placeholder:e.$t("search"),outlined:"",onKeyup:s[2]||(s[2]=(0,r.jR)((s=>e.updateSearch(e.filter.keyword)),["enter"]))},null,8,["modelValue","placeholder"])]),(0,t.bF)(K,{label:e.$t("pages.user.add_user"),class:"mt-20",onClick:s[3]||(s[3]=s=>e.openForm(null))},null,8,["label"])]),(0,t.Lk)("div",m,[(0,t.bF)(G,{flat:"",class:"dashboard-table-style dashboard-table-height back-white",id:"users_table"},{default:(0,t.k6)((()=>[(0,t.Lk)("thead",null,[(0,t.Lk)("tr",c,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.columns,((a,i)=>((0,t.uX)(),(0,t.CE)("th",{key:a.name,"data-index":i,draggable:e.canDragDropColumn(a),dropzone:e.canDragDropColumn(a),direction:"horizontal",onDragstart:s=>e.onDragStart(s,e.columns,i),onDrop:(0,r.D$)((s=>e.handleDrop(s,i)),["prevent"]),onDragover:(0,r.D$)((s=>e.onDragOver(s,i)),["prevent"]),onDragenter:s[4]||(s[4]=(0,r.D$)(((...s)=>e.onDragEnter&&e.onDragEnter(...s)),["prevent"])),onDragleave:s[5]||(s[5]=(0,r.D$)(((...s)=>e.onDragLeave&&e.onDragLeave(...s)),["prevent"])),style:(0,o.Tr)({cursor:e.getIsDragging?"pointer":"move"}),class:(0,o.C4)(a.class||"")},["actions"==a.name?((0,t.uX)(),(0,t.CE)("span",h,(0,o.v_)(e.$t(a.label)),1)):((0,t.uX)(),(0,t.CE)("span",p,(0,o.v_)(e.$t(a.label)),1)),a.action?((0,t.uX)(),(0,t.Wv)(X,{key:2,returnSortingObj:!0,column_name:a.name},null,8,["column_name"])):(0,t.Q3)("",!0)],46,u)))),128))])]),(0,t.Lk)("tbody",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.users,((a,i)=>((0,t.uX)(),(0,t.CE)("tr",{key:i,onClick:s=>e.openForm(a)},[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.columns,(i=>((0,t.uX)(),(0,t.CE)(t.FK,{key:i.name},["name"==i.name?((0,t.uX)(),(0,t.CE)("td",_,(0,o.v_)(a["first_name"])+" "+(0,o.v_)(a["last_name"]),1)):"email"==i.name?((0,t.uX)(),(0,t.CE)("td",w,(0,o.v_)(a["email"]),1)):"is_organisation_admin"==i.name?((0,t.uX)(),(0,t.CE)("td",b,[(0,t.bF)(z,{dense:"",modelValue:a["is_organisation_admin"],"onUpdate:modelValue":e=>a["is_organisation_admin"]=e,onClick:s=>e.isAdminToggle(a["id"],a["is_organisation_admin"])},null,8,["modelValue","onUpdate:modelValue","onClick"])])):((0,t.uX)(),(0,t.CE)("td",f,[(0,t.bF)(Z,{flat:"",dense:"",round:"",onClick:s[6]||(s[6]=(0,r.D$)((()=>{}),["stop","prevent"])),icon:"more_horiz"},{default:(0,t.k6)((()=>[(0,t.bF)(H,{"auto-close":"","transition-show":"jump-down","transition-hide":"jump-up",anchor:"bottom middle",self:"top middle"},{default:(0,t.k6)((()=>[(0,t.bF)(M,{dense:"",style:{"min-width":"100px"}},{default:(0,t.k6)((()=>[(0,t.bF)(j,{clickable:"",onClick:s=>e.openForm(a)},{default:(0,t.k6)((()=>[(0,t.bF)(O,null,{default:(0,t.k6)((()=>[(0,t.eW)((0,o.v_)(e.$t("edit")),1)])),_:1})])),_:2},1032,["onClick"]),(0,t.bF)(B,{inset:""}),(0,t.bF)(j,{clickable:""},{default:(0,t.k6)((()=>[(0,t.bF)(O,{onClick:s=>{e.userId=a["id"],e.confirmDelete=!0}},{default:(0,t.k6)((()=>[(0,t.Lk)("span",y,(0,o.v_)(e.$t("delete")),1)])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)]))],64)))),128))],8,g)))),128)),e.users?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("tr",k,[e.spinner?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("td",v,(0,o.v_)(e.$t("pages.messages.no_record_found")),1))]))])])),_:1})])]),(0,t.bF)(J),(0,t.bF)(re,{modelValue:e.userDialog,"onUpdate:modelValue":s[15]||(s[15]=s=>e.userDialog=s)},{default:(0,t.k6)((()=>[(0,t.bF)(te,{style:{width:"600px","max-width":"60vw"}},{default:(0,t.k6)((()=>[(0,t.bF)(Y,{class:"bg-primary"},{default:(0,t.k6)((()=>[(0,t.bF)(W,{class:"text-white"},{default:(0,t.k6)((()=>[this.userId&&""!=this.userId?((0,t.uX)(),(0,t.CE)("span",E,(0,o.v_)(e.$t("pages.user.edit_user")),1)):((0,t.uX)(),(0,t.CE)("span",F,(0,o.v_)(e.$t("pages.user.add_user")),1))])),_:1}),(0,t.bo)((0,t.bF)(K,{icon:"close"},null,512),[[le]])])),_:1}),(0,t.bF)(ae,null,{default:(0,t.k6)((()=>[(0,t.Lk)("div",C,[(0,t.Lk)("div",$,[D,(0,t.bF)(se,{onSubmit:e.onSubmit,onReset:e.onReset},{default:(0,t.k6)((()=>[(0,t.Lk)("div",A,[(0,t.bF)(Q,{dense:"",outlined:"",modelValue:e.firstName,"onUpdate:modelValue":s[7]||(s[7]=s=>e.firstName=s),label:e.$t("pages.user.firstName"),style:{width:"450px"}},null,8,["modelValue","label"])]),(0,t.Lk)("div",L,[(0,t.bF)(Q,{dense:"",outlined:"",modelValue:e.lastName,"onUpdate:modelValue":s[8]||(s[8]=s=>e.lastName=s),label:e.lastNameError||e.$t("pages.user.lastName"),style:{width:"450px"},error:!!e.lastNameError},null,8,["modelValue","label","error"])]),(0,t.Lk)("div",V,[(0,t.bF)(Q,{dense:"",outlined:"",modelValue:e.email,"onUpdate:modelValue":s[9]||(s[9]=s=>e.email=s),label:e.emailError||e.$t("pages.user.email"),style:{width:"450px"},error:!!e.emailError},null,8,["modelValue","label","error"])]),(0,t.bF)(Q,{dense:"",type:!1===e.show_password?"password":"text",outlined:"",modelValue:e.password,"onUpdate:modelValue":[s[11]||(s[11]=s=>e.password=s),e.validatePassword],label:e.passwordError||e.$t("pages.user.password"),id:"password",style:{width:"450px"},error:!!e.passwordError},{append:(0,t.k6)((()=>[(0,t.bF)(ee,{name:!1===e.show_password?"visibility":"visibility_off",onClick:s[10]||(s[10]=s=>e.show_password=!e.show_password)},null,8,["name"])])),_:1},8,["type","modelValue","label","error","onUpdate:modelValue"]),(0,t.Lk)("div",S,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.passwordRules,((e,s)=>((0,t.uX)(),(0,t.CE)("div",{key:s,class:"password-rule"},[(0,t.bF)(ee,{name:e.met?"check_circle":"cancel",color:e.met?"green":"red",style:{"margin-right":"5px"}},null,8,["name","color"]),(0,t.Lk)("span",{style:(0,o.Tr)([{color:e.met?"green":"grey"},{"font-size":"14px"}])},(0,o.v_)(e.message),5)])))),128))]),(0,t.Lk)("div",N,[(0,t.bF)(Q,{dense:"",type:!1===e.show_confirm_password?"password":"text",outlined:"",modelValue:e.confirmPassword,"onUpdate:modelValue":s[13]||(s[13]=s=>e.confirmPassword=s),label:e.confirmPasswordError||e.$t("pages.user.confirmPassword"),style:{width:"450px"},error:!!e.confirmPasswordError},{append:(0,t.k6)((()=>[(0,t.bF)(ee,{name:!1===e.show_confirm_password?"visibility":"visibility_off",onClick:s[12]||(s[12]=s=>e.show_confirm_password=!e.show_confirm_password)},null,8,["name"])])),_:1},8,["type","modelValue","label","error"])]),(0,t.Lk)("div",x,[(0,t.bF)(z,{modelValue:e.role,"onUpdate:modelValue":s[14]||(s[14]=s=>e.role=s),label:e.$t("pages.user.is_admin")},null,8,["modelValue","label"])]),(0,t.Lk)("div",U,[(0,t.bo)((0,t.bF)(K,{label:e.$t("pages.user.cancel"),appearance:"cancel"},null,8,["label"]),[[le]]),(0,t.bF)(K,{label:e.$t("pages.user.save"),class:"q-ml-sm",type:"submit"},null,8,["label"])])])),_:1},8,["onSubmit","onReset"])])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.bF)(re,{modelValue:e.confirmDelete,"onUpdate:modelValue":s[17]||(s[17]=s=>e.confirmDelete=s),persistent:""},{default:(0,t.k6)((()=>[(0,t.bF)(te,null,{default:(0,t.k6)((()=>[(0,t.bF)(ae,{class:"row",style:{"justify-content":"center",display:"flex"}},{default:(0,t.k6)((()=>[(0,t.bF)(oe,{icon:"warning",color:"primary"})])),_:1}),(0,t.bF)(ae,{class:"row items-center"},{default:(0,t.k6)((()=>[(0,t.Lk)("span",q,(0,o.v_)(e.$t("pages.messages.msg_delete")),1)])),_:1}),(0,t.bF)(ie,{align:"right"},{default:(0,t.k6)((()=>[(0,t.bo)((0,t.bF)(K,{appearance:"cancel",label:e.$t("cancel")},null,8,["label"]),[[le]]),(0,t.bo)((0,t.bF)(K,{appearance:"negative",label:e.$t("delete"),onClick:s[16]||(s[16]=s=>e.deleteUser())},null,8,["label"]),[[le]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var T=a(23537),I=a(84364),R=a(82303),Q=a(92162),K=a(45022),X=a(14907),z=a(24622),O=a(38734),j=a(96056),B=a(11470),M=a(8420),H=a(18505),Z=a(46162),G=a(66693),J=a(25773),W=a(85487),Y=a(68450),ee=a(10739),se=a(64775),ae=function(e,s,a,t){function r(e){return e instanceof a?e:new a((function(s){s(e)}))}return new(a||(a=Promise))((function(a,o){function i(e){try{n(t.next(e))}catch(s){o(s)}}function l(e){try{n(t["throw"](e))}catch(s){o(s)}}function n(e){e.done?a(e.value):r(e.value).then(i,l)}n((t=t.apply(e,s||[])).next())}))};const te=(0,t.pM)({el:"#app",mixins:[H.A,z.A,j.A,ee.A],data(){return{users:(0,O.KR)([]),emailError:"",passwordError:"",confirmPasswordError:"",lastNameError:"",userDialog:(0,O.KR)(!1),passwordRules:[{message:this.$t("pages.messages.password_length"),test:e=>e.length>=8,met:!1},{message:this.$t("pages.messages.password_lowercase"),test:e=>/[a-z]/.test(e),met:!1},{message:this.$t("pages.messages.password_uppercase"),test:e=>/[A-Z]/.test(e),met:!1},{message:this.$t("pages.messages.password_number"),test:e=>/\d/.test(e),met:!1},{message:this.$t("pages.messages.password_special_char"),test:e=>/[^a-zA-Z\d\s]/.test(e),met:!1}]}},components:{ColumnOrderBy:I.A,Loader:M.A,SubHeader:G.A,BackToSettings:J.A},mounted(){this.getUsers(!0),this.prepareColumns(),this.initDragDropColumns("users_table","label",["actions"]),document.addEventListener("users_table-column-drop",this.onDropColumns),document.addEventListener("apply_filters",this.applyFilterEvent)},unmounted(){document.removeEventListener("apply_filters",this.applyFilterEvent),document.removeEventListener("users_table-column-drop",this.onDropColumns)},methods:{isAdminToggle(e,s){return ae(this,void 0,void 0,(function*(){let a=new FormData;a.append("is_organisation_admin",s?"1":"0"),a.append("org_id",(0,W.I)());try{this.showLoading();let s=yield(0,Z.L3)(),t=yield R.A.put(Z.FH.update_user+e,a,{headers:{Authorization:s}});if(t.data.message)return t.data.error_code?this.emailError=this.$t("pages.messages."+t.data.error_code):this.emailError=t.data.message,this.showErrorToast(this.emailError),yield this.getUsers(!1),void this.hideLoading();yield this.getUsers(!1),this.hideLoading(),this.showSuccessToast(this.$t("pages.messages.user_updated"))}catch(t){return this.showErrorToast(this.$t("pages.messages.error_internal_occur")),this.hideLoading(),void logError(t)}}))},getUsers(e){return ae(this,void 0,void 0,(function*(){e&&this.showLoading();try{const e=yield B.jD.getUsers(this.filter);if(!e)return;this.users=e}catch(s){this.showErrorToast(this.$t("pages.messages.error_internal_occur")),logError(s)}finally{e&&this.hideLoading()}}))},isValidPassword(e){if(!e||0===e.trim().length)return!1;const s=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,20}$/;return s.test(e)},validatePassword(){this.passwordRules.forEach((e=>{e.met=e.test(this.password)}))},onSubmit(){this.lastNameError="",this.emailError="",this.passwordError="",this.confirmPasswordError="";let e=this.validateEmail(this.email);e||(this.emailError=this.$t("pages.messages.invalid_email")),this.lastName&&""!=this.lastName||(this.lastNameError=this.$t("pages.messages.user_name_mandatory")),this.isValid(this.userId),this.emailError||this.lastNameError||this.passwordError||this.confirmPasswordError||this.addEditUser()},isValid(e){e||(this.password&&""!=this.password||(this.passwordError=this.$t("pages.messages.password_mandatory")),this.confirmPassword&&""!=this.confirmPassword||(this.confirmPasswordError=this.$t("pages.messages.confirm_password_mandatory"))),this.password&&""!=this.password||this.isValidPassword(this.password)?this.confirmPassword&&!this.isValidPassword(this.confirmPassword)&&(this.confirmPasswordError=this.$t("pages.messages.confirm_password_is_invalid")):this.passwordError=this.$t("pages.messages.password_is_invalid"),this.password!==this.confirmPassword&&(this.confirmPasswordError=this.$t("pages.messages.password_not_match"))},addEditUser(){return ae(this,void 0,void 0,(function*(){const e={};e["first_name"]=this.firstName,e["last_name"]=this.lastName,e["email"]=this.email,e["password"]=this.password,e["org_id"]=(0,W.I)();let s=new FormData;for(let t in e)(0,Y.z)(e[t])&&(e[t]=""),s.append(t,e[t]);this.showLoading();try{if(this.userId){s.append("is_organisation_admin",this.role.toString());const e=yield B.jD.editUser(this.userId,s);if(!1===e.success&&e.error_code)return void this.showErrorToast(e.message);this.showSuccessToast(this.$t("pages.messages.user_updated"))}else{s.append("is_admin",this.role.toString());const e=yield B.jD.addUser(s);if(!1===e.success&&e.error_code)return void this.showErrorToast(e.message);this.showSuccessToast(this.$t("pages.messages.user_successfully_created"))}yield this.getUsers(!1)}catch(a){const e=se.t.getErrorMessage(a);this.showErrorToast(e),logError(a)}finally{this.userDialog=!1,this.hideLoading()}}))},openForm(e){e?(this.userId=e.id,this.email=e.email,this.lastName=e.last_name,this.firstName=e.first_name,this.role=e.is_organisation_admin):(this.role=!1,this.email="",this.userId="",this.lastName="",this.firstName=""),this.password="",this.confirmPassword="",this.emailError="",this.lastNameError="",this.passwordError="",this.confirmPasswordError="",this.userDialog=!0},onReset(){this.role=!1,this.email="",this.userId="",this.lastName="",this.password="",this.firstName="",this.emailError="",this.lastNameError="",this.passwordError="",this.confirmPasswordError="",this.removeClass((0,Q.$)("#email").querySelector("label"),"error-border-left"),this.removeClass((0,Q.$)("#last_name").querySelector("label"),"error-border-left"),this.removeClass((0,Q.$)("#confirm_password").querySelector("label"),"error-border-left")},deleteUser(){return ae(this,void 0,void 0,(function*(){try{let e;this.showLoading();let s=yield(0,Z.L3)();e=yield R.A.delete((0,W.MV)(Z.FH.delete_user+this.userId),{headers:{Authorization:s}}),e.data&&!e.data.hasOwnProperty("success")&&e.data.hasOwnProperty("message")&&this.showErrorToast(e.data.message),e.data&&e.data.hasOwnProperty("success")&&!0===e.data.success&&(this.userId=null,yield this.getUsers(!1),this.showSuccessToast(this.$t("pages.messages.user_deleted")))}catch(e){this.showErrorToast(this.$t("pages.messages.error_internal_occur"))}finally{this.confirmDelete=!1,this.hideLoading()}}))},updateSearch(e){this.filter.keyword=e,this.getUsers(!0)},applyFilterEvent(e){this.filter={keyword:"",sort_by:e.detail.orderBy["field_name"],order:e.detail.orderBy["direction"]},this.getUsers(!0)},prepareColumns(){const e=K.A.getItem("USERS_SETTING_COLUMNS");e&&(this.columns=JSON.parse(e))},onDropColumns(){K.A.set("USERS_SETTING_COLUMNS",JSON.stringify(this.columns))}},setup(){const{t:e}=(0,T.s9)(),s=[{name:"name",label:"name",action:!0},{name:"email",label:"pages.user.email",action:!0},{name:"is_organisation_admin",label:"pages.user.is_admin",action:!0},{name:"actions",label:"actions",action:!1,class:"text-center"}];return{$q:(0,X.A)(),columns:s,icon:(0,O.KR)(!1),role:(0,O.KR)(!1),email:(0,O.KR)(),show_confirm_password:(0,O.KR)(!1),show_password:(0,O.KR)(!1),userId:(0,O.KR)(),firstName:(0,O.KR)(),lastName:(0,O.KR)(),password:(0,O.KR)(),confirmPassword:(0,O.KR)(),confirmDelete:(0,O.KR)(!1),filter:(0,O.KR)({keyword:""})}}});var re=a(12807),oe=a(67837),ie=a(857),le=a(80460),ne=a(56384),de=a(84436),me=a(53999),ce=a(90124),ue=a(25173),he=a(10386),pe=a(82156),ge=a(23316),_e=a(36914),we=a(39150),be=a(44189),fe=a(49200),ye=a(50492),ke=a(3952),ve=a(62669),Ee=a(42315),Fe=a(88672),Ce=a(98582),$e=a.n(Ce);const De=(0,re.A)(te,[["render",P],["__scopeId","data-v-633c28dc"]]),Ae=De;$e()(te,"components",{QInput:oe.A,QMarkupTable:ie.A,QCheckbox:le.A,QBtn:ne.A,QMenu:de.A,QList:me.A,QItem:ce.A,QItemSection:ue.A,QSeparator:he.A,QDialog:pe.A,QCard:ge.A,QToolbar:_e.A,QToolbarTitle:we.A,QCardSection:be.A,QForm:fe.A,QIcon:ye.A,QAvatar:ke.A,QCardActions:ve.A,QTable:Ee.A}),$e()(te,"directives",{ClosePopup:Fe.A})}}]);