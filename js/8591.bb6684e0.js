"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[8591],{98591:(e,s,t)=>{t.r(s),t.d(s,{default:()=>Pe});var o=t(59835),a=t(86970),l=t(61957);const i={class:"container"},r={class:"row mt-8 mb-25"},n={class:"",style:{width:"100%",margin:"auto"}},d={key:0,class:"row"},u={style:{"text-transform":"capitalize"}},p={style:{"text-transform":"capitalize"}},c={class:"text-red-14"},m={class:"q-ml-sm"},h={class:"text-weight-bold"},w={class:"table-container col-sm-12 col-md-12 col-lg-12 min-height-300"},_=(0,o._)("img",{class:"loading-image",src:"loader.gif",alt:"Loading..."},null,-1);function g(e,s,t,g,f,b){const y=(0,o.up)("SubHeader"),v=(0,o.up)("f-btn"),C=(0,o.up)("BackToSettings"),k=(0,o.up)("q-toggle"),W=(0,o.up)("q-td"),U=(0,o.up)("q-item-section"),q=(0,o.up)("q-item"),I=(0,o.up)("q-separator"),Z=(0,o.up)("q-list"),T=(0,o.up)("q-menu"),R=(0,o.up)("q-btn"),x=(0,o.up)("q-table"),O=(0,o.up)("q-avatar"),S=(0,o.up)("q-card-section"),Q=(0,o.up)("q-card-actions"),N=(0,o.up)("q-card"),D=(0,o.up)("q-dialog"),E=(0,o.up)("Permissions"),$=(0,o.up)("CreateGroup"),P=(0,o.up)("q-toolbar-title"),V=(0,o.up)("q-toolbar"),H=(0,o.up)("ManageUser"),G=(0,o.up)("q-inner-loading"),A=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(y,{name:"settings_group_and_roles",label:e.$t("roles_groups"),display_help_link:!1},null,8,["label"]),(0,o.Wm)(C,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"float-right",icon:"add",label:e.$t("new"),onClick:s[0]||(s[0]=s=>e.display_create_group_dialog=!0)},null,8,["label"])])),_:1}),(0,o._)("div",i,[(0,o._)("div",r,[(0,o._)("div",n,[(0,o.Uk)((0,a.zw)(e.$t("group_main_setting"))+" ",1),(0,o.Wm)(k,{modelValue:e.settings_model["GROUP_PERMISSION_ACTIVATED"],"onUpdate:modelValue":[s[1]||(s[1]=s=>e.settings_model["GROUP_PERMISSION_ACTIVATED"]=s),s[2]||(s[2]=s=>{e.saveSetting("GROUP_PERMISSION_ACTIVATED",s)})]},null,8,["modelValue"])])]),this.settings_model["GROUP_PERMISSION_ACTIVATED"]?((0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(x,{style:{width:"100%"},class:"dashboard-table-style dashboard-table-height back-white",rows:e.rows,columns:e.columns,"no-data-label":e.$t("pages.messages.NO_RECORD_FOUND"),"row-key":"name","hide-bottom":"",flat:"","table-header-class":"table-header-text","rows-per-page-options":[0]},{"body-cell-name":(0,o.w5)((e=>[(0,o.Wm)(W,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.row.name),1)])),_:2},1032,["props"])])),"body-cell-action":(0,o.w5)((t=>[(0,o.Wm)(W,{props:t},{default:(0,o.w5)((()=>[(0,o.Wm)(R,{flat:"",dense:"",round:"",onClick:s[3]||(s[3]=(0,l.iM)((()=>{}),["stop","prevent"])),icon:"more_horiz"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{persistent:"","auto-close":"","transition-show":"jump-down","transition-hide":"jump-up",anchor:"bottom middle",self:"top middle"},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{dense:"",style:{"max-width":"155px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{clickable:""},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{onClick:s=>e.manageUsers(t.row)},{default:(0,o.w5)((()=>[(0,o._)("span",u,(0,a.zw)(e.$t("pages.settings.manage_users")),1)])),_:2},1032,["onClick"])])),_:2},1024),(0,o.Wm)(q,{clickable:""},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{onClick:s=>e.viewPermissions(t.row)},{default:(0,o.w5)((()=>[(0,o._)("span",p,(0,a.zw)(e.$t("view_permissions")),1)])),_:2},1032,["onClick"])])),_:2},1024),(0,o.Wm)(I,{inset:""}),(0,o.Wm)(q,{clickable:""},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{onClick:s=>{e.delete_id=t.row.group_id,e.deleteConfirm=!0}},{default:(0,o.w5)((()=>[(0,o._)("span",c,(0,a.zw)(e.$t("delete")),1)])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","columns","no-data-label"])])):(0,o.kq)("",!0)]),(0,o.Wm)(D,{modelValue:e.deleteConfirm,"onUpdate:modelValue":s[5]||(s[5]=s=>e.deleteConfirm=s),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(N,null,{default:(0,o.w5)((()=>[(0,o.Wm)(S,{class:"row",style:{"justify-content":"center",display:"flex"}},{default:(0,o.w5)((()=>[(0,o.Wm)(O,{icon:"warning",color:"primary"})])),_:1}),(0,o.Wm)(S,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o._)("span",m,(0,a.zw)(e.$t("pages.messages.MSG_DELETE")),1)])),_:1}),(0,o.Wm)(Q,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(v,{appearance:"cancel",label:e.$t("pages.user.cancel")},null,8,["label"]),[[A]]),(0,o.wy)((0,o.Wm)(v,{appearance:"negative",label:e.$t("pages.user.done"),onClick:s[4]||(s[4]=s=>e.deleteGroup())},null,8,["label"]),[[A]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(D,{modelValue:e.display_permissions_dialog,"onUpdate:modelValue":s[6]||(s[6]=s=>e.display_permissions_dialog=s),persistent:"",onKeydown:s[7]||(s[7]=(0,l.D2)((s=>e.display_permissions_dialog=!1),["esc"]))},{default:(0,o.w5)((()=>[(0,o.Wm)(E,{groupId:e.selectedGroupId},null,8,["groupId"])])),_:1},8,["modelValue"]),(0,o.Wm)(D,{modelValue:e.display_create_group_dialog,"onUpdate:modelValue":s[8]||(s[8]=s=>e.display_create_group_dialog=s),persistent:"",onKeydown:s[9]||(s[9]=(0,l.D2)((s=>e.display_create_group_dialog=!1),["esc"]))},{default:(0,o.w5)((()=>[(0,o.Wm)($)])),_:1},8,["modelValue"]),(0,o.Wm)(D,{modelValue:e.display_users_dialog,"onUpdate:modelValue":s[10]||(s[10]=s=>e.display_users_dialog=s),persistent:"","transition-show":"scale","transition-hide":"scale",onKeydown:s[11]||(s[11]=(0,l.D2)((s=>e.display_users_dialog=!1),["esc"]))},{default:(0,o.w5)((()=>[(0,o.Wm)(N,{style:{width:"700px","max-width":"1060px",height:"600px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{class:"secondary-toolbar"},{default:(0,o.w5)((()=>[(0,o.Wm)(P,null,{default:(0,o.w5)((()=>[(0,o._)("span",h,(0,a.zw)(e.selectedGroupName)+" "+(0,a.zw)(e.$t("users")),1)])),_:1}),(0,o.wy)((0,o.Wm)(v,{flat:"",round:"",dense:"",icon:"close"},null,512),[[A]])])),_:1}),(0,o.Wm)(S,{class:"row items-center q-pb-none"}),(0,o.Wm)(S,null,{default:(0,o.w5)((()=>[(0,o._)("div",w,[(0,o.Wm)(H,{groupId:e.selectedGroupId},null,8,["groupId"])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(G,{showing:e.processing},{default:(0,o.w5)((()=>[_])),_:1},8,["showing"])],64)}var f=t(7363),b=t(49990);const y=(0,o._)("img",{class:"img-fluid mb-14 black_to_white",width:"24",height:"24",src:"trash-bin-default.svg",alt:""},null,-1),v={class:"text-weight-bold"},C={class:"table-container col-sm-12 col-md-12 col-lg-12"},k={class:"table-container col-sm-12 col-md-12 col-lg-12"};function W(e,s,t,i,r,n){const d=(0,o.up)("q-icon"),u=(0,o.up)("q-input"),p=(0,o.up)("q-space"),c=(0,o.up)("f-btn"),m=(0,o.up)("q-btn"),h=(0,o.up)("q-td"),w=(0,o.up)("q-tr"),_=(0,o.up)("q-table"),g=(0,o.up)("q-toolbar-title"),f=(0,o.up)("q-toolbar"),b=(0,o.up)("q-card-section"),W=(0,o.up)("q-item-section"),U=(0,o.up)("q-item"),q=(0,o.up)("q-select"),I=(0,o.up)("q-card-actions"),Z=(0,o.up)("q-card"),T=(0,o.up)("q-dialog"),R=(0,o.up)("Loader"),x=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(_,{class:"sticky-header-table",rows:e.rows,columns:e.columns,"rows-per-page-options":[0],"row-key":"id",filter:e.filter,"no-data-label":e.$t("pages.messages.NO_RECORD_FOUND"),"table-header-class":"back-white",loading:e.loading},{top:(0,o.w5)((()=>[(0,o.Wm)(u,{outlined:"",debounce:"300",color:"primary",dense:"",modelValue:e.filter,"onUpdate:modelValue":s[0]||(s[0]=s=>e.filter=s)},{append:(0,o.w5)((()=>[(0,o.Wm)(d,{name:"search"})])),_:1},8,["modelValue"]),(0,o.Wm)(p),(0,o.Wm)(c,{label:e.$t("pages.user.add_user"),onClick:s[1]||(s[1]=s=>e.openUserDlg())},null,8,["label"])])),body:(0,o.w5)((s=>[(0,o.Wm)(w,{props:s,id:s.key},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.cols,(t=>((0,o.wg)(),(0,o.iD)(o.HY,{key:t.name},["action"===t.name?((0,o.wg)(),(0,o.j4)(h,{key:0,style:{width:"30%"}},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{size:"18px",class:"float-right","no-caps":"",flat:"",dense:"",onClick:t=>e.unassignUser(s.row.id)},{default:(0,o.w5)((()=>[y])),_:2},1032,["onClick"])])),_:2},1024)):(0,o.kq)("",!0),"user_name"===t.name?((0,o.wg)(),(0,o.j4)(h,{key:1,style:{width:"70%"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(s.row.user_name),1)])),_:2},1024)):(0,o.kq)("",!0)],64)))),128))])),_:2},1032,["props","id"])])),_:1},8,["rows","columns","filter","no-data-label","loading"]),(0,o.Wm)(T,{modelValue:e.add_users_dialog,"onUpdate:modelValue":s[5]||(s[5]=s=>e.add_users_dialog=s),persistent:"","transition-show":"scale","transition-hide":"scale",onKeydown:s[6]||(s[6]=(0,l.D2)((s=>e.add_users_dialog=!1),["esc"]))},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{style:{width:"700px","max-width":"1060px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{class:"text-white secondary-toolbar"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o._)("span",v,(0,a.zw)(e.$t("pages.user.add_user")),1)])),_:1}),(0,o.wy)((0,o.Wm)(m,{flat:"",round:"",dense:"",icon:"close"},null,512),[[x]])])),_:1}),(0,o.Wm)(b,{class:"row items-center q-pb-none"}),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o._)("div",C,[(0,o.Wm)(q,{outlined:"",modelValue:e.selectedUserId,"onUpdate:modelValue":s[2]||(s[2]=s=>e.selectedUserId=s),options:this.usersDropdownList,"use-input":"","emit-value":"","map-options":"",onFilter:e.filterUserByName,label:e.$t("select_user")},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(U,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.$t("no_data_found")),1)])),_:1})])),_:1})])),_:1},8,["modelValue","options","onFilter","label"])])])),_:1}),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o._)("div",k,[(0,o.Wm)(q,{outlined:"",modelValue:e.removeFromOtherGroups,"onUpdate:modelValue":s[3]||(s[3]=s=>e.removeFromOtherGroups=s),options:[{value:!1,label:e.$t("form_builder.no")},{value:!0,label:e.$t("form_builder.yes")}],"emit-value":"","map-options":"",label:e.$t("remove_from_other_groups")},null,8,["modelValue","options","label"])])])),_:1}),(0,o.Wm)(I,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(m,{label:e.$t("cancel")},null,8,["label"]),[[x]]),(0,o.Wm)(m,{onClick:s[4]||(s[4]=s=>e.assigneeGroupToUser()),color:"primary",class:"q-mr-sm",label:e.$t("save")},null,8,["label"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(R)],64)}var U=t(67325),q=t(31921),I=t(46624),Z=t(70501),T=t(60499),R=t(49341),x=t(11494),O=function(e,s,t,o){function a(e){return e instanceof t?e:new t((function(s){s(e)}))}return new(t||(t=Promise))((function(t,l){function i(e){try{n(o.next(e))}catch(s){l(s)}}function r(e){try{n(o["throw"](e))}catch(s){l(s)}}function n(e){e.done?t(e.value):a(e.value).then(i,r)}n((o=o.apply(e,s||[])).next())}))};const S=(0,o.aZ)({mixins:[Z.Z,b.Z,q.Z],components:{},props:{groupId:{type:String,default:""}},data(){return{current_user_id:""}},mounted:function(){this.current_user_id=(0,x.Y4)("id"),this.prepareTableData(),this.dropdownStore.prepareUsersDropdown(),this.dropdownStore.prepareBooleanList()},methods:{prepareTableData(){return O(this,void 0,void 0,(function*(){yield this.getGroupUsers(),this.prepareTableColumns(),this.prepareTableRows()}))},getGroupUsers(){return O(this,void 0,void 0,(function*(){let e=null;this.showLoading();try{if(e=yield R.kP.getGroupUsers(this.groupId),!e)throw e;this.groupUsers=e}catch(s){this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR"))}finally{this.hideLoading()}}))},prepareTableColumns(){this.columns=[],this.columns.push(Object.assign({},{name:"user_name",label:this.$t("name"),field:"user_name",align:"left"})),this.columns.push(Object.assign({},{name:"action",label:this.$t("action"),field:"action",align:"right"}))},prepareTableRows(){this.rows=[];for(let e of this.groupUsers)e["user_name"]=e.first_name+" "+e.last_name;this.rows=this.groupUsers},unassignUser(e){return O(this,void 0,void 0,(function*(){this.showLoading();try{yield R.kP.removeUserFromGroup(this.groupId,e.toString());this.removeUser(e),yield this.updateUserPermissions(e),this.showSuccessToast(this.$t("user_removed_from_group"))}catch(s){this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR"))}finally{this.hideLoading()}}))},removeUser(e){const s=this.rows.findIndex((s=>s.id===e));-1!==s&&this.rows.splice(s,1)},assigneeGroupToUser(){return O(this,void 0,void 0,(function*(){if(this.selectedUserId){this.showLoading();try{yield R.kP.addUserToGroup(this.groupId,this.selectedUserId.toString(),this.removeFromOtherGroups);this.add_users_dialog=!1,this.addNewUser(),yield this.updateUserPermissions(this.selectedUserId),this.showSuccessToast(this.$t("user_added_to_group"))}catch(e){this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR"))}finally{this.hideLoading()}}else this.showErrorToast(this.$t("select_user"))}))},addNewUser(){const e=JSON.parse(JSON.stringify(this.dropdownStore.usersMap.get(this.selectedUserId)));e["user_name"]=e.first_name+" "+e.last_name,this.rows.push(e)},openUserDlg(){this.add_users_dialog=!0,this.selectedUserId=null,this.prepareDropdownData()},prepareDropdownData(){this.usersList=[];let e=new Map(JSON.parse(JSON.stringify(Array.from(this.dropdownStore.usersMap))));for(const s of this.rows)e.delete(s.id);e.forEach(((e,s)=>{this.usersList.push({value:s,label:e.first_name+" "+e.last_name})})),this.usersDropdownList=this.usersList},updateUserPermissions(e){return O(this,void 0,void 0,(function*(){this.current_user_id===String(e)&&(yield U.W1.fetch())}))},filterUserByName(e,s){s(""!==e?()=>{const s=e.toLowerCase();this.usersDropdownList=this.usersList.filter((e=>e.label.toLowerCase().indexOf(s)>-1))}:()=>{this.usersDropdownList=this.usersList})}},setup(){const e=(0,T.iH)("");let s=[];const t=(0,T.iH)(s),o=(0,I.At)();let a=(0,T.iH)([]);return{filter:e,columns:t,usersList:a,dropdownStore:o,rows:(0,T.iH)(s),loading:(0,T.iH)(!1),selectedUserId:(0,T.iH)(),groupUsers:(0,T.iH)([]),add_users_dialog:(0,T.iH)(!1),removeFromOtherGroups:(0,T.iH)(!1),usersDropdownList:(0,T.XI)([])}}});var Q=t(7683),N=t(61450),D=t(13119),E=t(22857),$=t(90136),P=t(31233),V=t(67220),H=t(68879),G=t(32074),A=t(44458),L=t(51663),z=t(81973),j=t(63190),M=t(32259),B=t(490),F=t(76749),J=t(11821),Y=t(62146),K=t(69984),X=t.n(K);const ee=(0,Q.Z)(S,[["render",W]]),se=ee;X()(S,"components",{QTable:N.Z,QInput:D.Z,QIcon:E.Z,QSpace:$.Z,QTr:P.Z,QTd:V.Z,QBtn:H.Z,QDialog:G.Z,QCard:A.Z,QToolbar:L.Z,QToolbarTitle:z.Z,QCardSection:j.Z,QSelect:M.Z,QItem:B.Z,QItemSection:F.Z,QCardActions:J.Z}),X()(S,"directives",{ClosePopup:Y.Z});const te={class:"text-h6"},oe={class:"row q-pt-lg p-t-0"},ae={class:"col-sm-12 q-pr-sm"},le={key:0},ie={key:1};function re(e,s,t,l,i,r){const n=(0,o.up)("q-space"),d=(0,o.up)("q-btn"),u=(0,o.up)("q-card-section"),p=(0,o.up)("q-checkbox"),c=(0,o.up)("q-th"),m=(0,o.up)("q-tr"),h=(0,o.up)("q-td"),w=(0,o.up)("q-table"),_=(0,o.up)("f-btn"),g=(0,o.up)("q-card-actions"),f=(0,o.up)("q-card"),b=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(f,{style:{width:"1060px","max-width":"1060px","max-height":"670px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{class:"row items-center q-pb-md bg-primary"},{default:(0,o.w5)((()=>[(0,o._)("div",te,[(0,o._)("b",null,(0,a.zw)(e.group_name),1)]),(0,o.Wm)(n),(0,o.wy)((0,o.Wm)(d,{icon:"close",flat:"",round:"",dense:""},null,512),[[b]])])),_:1}),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o._)("div",oe,[(0,o._)("div",ae,[(0,o.Wm)(w,{class:"sticky-header-table",rows:e.rows,columns:e.columns,"no-data-label":e.$t("pages.messages.NO_RECORD_FOUND"),"row-key":"name",flat:"",bordered:"","rows-per-page-options":[0]},{header:(0,o.w5)((s=>[(0,o.Wm)(m,{props:s,class:"back-white"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.cols,(t=>((0,o.wg)(),(0,o.j4)(c,{key:t.name,props:s,class:"back-white"},{default:(0,o.w5)((()=>["document_name"===t.name?((0,o.wg)(),(0,o.iD)("span",le,(0,a.zw)(t.label),1)):((0,o.wg)(),(0,o.iD)("span",ie,[(0,o.Wm)(p,{modelValue:this.headerCheckboxs[t.name],"onUpdate:modelValue":[e=>this.headerCheckboxs[t.name]=e,s=>e.columnSelectAll(t.name)]},null,8,["modelValue","onUpdate:modelValue"]),(0,o.Uk)(" "+(0,a.zw)(e.$t(t.label)),1)]))])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),body:(0,o.w5)((t=>[(0,o.Wm)(m,{props:t,id:t.key},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.cols,(l=>((0,o.wg)(),(0,o.iD)(o.HY,{key:l.name},["document_name"===l.name?((0,o.wg)(),(0,o.j4)(h,{key:0},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(t.row.document_name),1)])),_:2},1024)):((0,o.wg)(),(0,o.j4)(h,{key:1},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{modelValue:t.row.acls[l.name],"onUpdate:modelValue":[e=>t.row.acls[l.name]=e,s[0]||(s[0]=s=>e.onRowCheckboxChange())]},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024))],64)))),128))])),_:2},1032,["props","id"])])),_:1},8,["rows","columns","no-data-label"])])])])),_:1}),(0,o.Wm)(g,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(_,{class:"q-mr-sm",label:e.$t("cancel"),appearance:"cancel"},null,8,["label"]),[[b]]),(0,o.wy)((0,o.Wm)(_,{class:"q-mr-md",label:e.$t("save"),onClick:e.savePermissions},null,8,["label","onClick"]),[[b]])])),_:1})])),_:1})}var ne=t(79860);const de=(0,o.aZ)({el:"#app",mixins:[b.Z],components:{},props:{groupId:{type:String,default:""}},data(){return{}},mounted(){this.group_data=JSON.parse(JSON.stringify(this.getPermissionsByGroupId(this.groupId))),this.setGroupName(),this.prepareColumns(),this.preparePermissionList(),this.prepareHeaderCheckboxs()},methods:{columnSelectAll(e){Array.from(this.rows).forEach((s=>{s.acls[e]=this.headerCheckboxs[e]}))},prepareHeaderCheckboxs(){Array.from(this.rows).forEach((e=>{for(let[s,t]of Object.entries(e.acls))!0===this.headerCheckboxs[s]&&!1===t&&(this.headerCheckboxs[s]=!1)}))},onRowCheckboxChange(){this.resetHeaderCheckbox(),this.prepareHeaderCheckboxs()},resetHeaderCheckbox(){for(let[e,s]of Object.entries(this.headerCheckboxs))this.headerCheckboxs[e]=!0},setGroupName(){this.group_data&&(this.group_name=this.group_data.group_name)},prepareColumns(){this.columns=[],this.columns.push(Object.assign({},{name:"document_name",label:ne.i18n.t("document_type"),field:"document_name",align:"left"})),this.hasPermissins()&&this.prepareHeaderCheckbox()},prepareHeaderCheckbox(){const e=this.group_data.doc_type_permissions[0].acls;for(let[s,t]of Object.entries(e))this.columns.push(Object.assign({},{name:s,label:s,field:s,align:"left"})),this.headerCheckboxs[s]=!0},hasPermissins(){return!(!this.group_data||!Array.isArray(this.group_data.doc_type_permissions)||this.group_data.doc_type_permissions.length<1)},preparePermissionList(){this.hasPermissins()&&(this.rows=[],this.rows=JSON.parse(JSON.stringify(this.group_data.doc_type_permissions)))},savePermissions(){this.saveDocPermissions(this.rows,this.groupId),this.showSuccessToast(this.$t("roles_permission_saved"))}},setup(){const e=(0,I.zI)(),{getPermissionsByGroupId:s}=(0,f.Jk)(e),{saveDocPermissions:t}=e;return{saveDocPermissions:t,getPermissionsByGroupId:s,group_data:(0,T.iH)([]),columns:(0,T.iH)([]),rows:(0,T.iH)([]),group_name:(0,T.iH)(""),headerCheckboxs:(0,T.iH)({})}}});var ue=t(21682),pe=t(11221);const ce=(0,Q.Z)(de,[["render",re]]),me=ce;X()(de,"components",{QCard:A.Z,QCardSection:j.Z,QSpace:$.Z,QBtn:H.Z,QTable:N.Z,QTr:P.Z,QTh:ue.Z,QCheckbox:pe.Z,QTd:V.Z,QCardActions:J.Z}),X()(de,"directives",{ClosePopup:Y.Z});const he=(0,o._)("span",{class:"text-weight-bold"},null,-1),we={style:{"margin-bottom":"20px"},class:"row full-width mb-10 mt-8"},_e={class:"full-width"},ge={class:"row full-width mb-10 mt-8",style:{"margin-bottom":"20px"}},fe={class:"full-width"},be=(0,o._)("img",{class:"loading-image",src:"loader.gif",alt:"Loading..."},null,-1);function ye(e,s,t,i,r,n){const d=(0,o.up)("q-toolbar-title"),u=(0,o.up)("q-btn"),p=(0,o.up)("q-toolbar"),c=(0,o.up)("q-tooltip"),m=(0,o.up)("q-icon"),h=(0,o.up)("q-input"),w=(0,o.up)("q-card-section"),_=(0,o.up)("f-btn"),g=(0,o.up)("q-card-actions"),f=(0,o.up)("q-inner-loading"),b=(0,o.up)("q-card"),y=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(b,{style:{width:"600px"}},{default:(0,o.w5)((()=>[(0,o._)("form",{onSubmit:s[2]||(s[2]=(0,l.iM)(((...s)=>e.submitNewColumFrom&&e.submitNewColumFrom(...s)),["prevent","stop"]))},[(0,o.Wm)(p,{class:"secondary-toolbar"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.$t("create_group")),1),he])),_:1}),(0,o.wy)((0,o.Wm)(u,{flat:"",round:"",dense:"",icon:"close"},null,512),[[y]])])),_:1}),(0,o.Wm)(w,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o._)("div",we,[(0,o._)("div",_e,[(0,o.Wm)(h,{outlined:"",tabindex:"0",class:(0,a.C_)("full-width "+(!e.new_model["validate"]||e.new_model["required_error"]?"column-error-border":"")),modelValue:e.new_model["name"],"onUpdate:modelValue":s[0]||(s[0]=s=>e.new_model["name"]=s),placeholder:e.$t("group_name"),hint:e.message},{append:(0,o.w5)((()=>[!e.new_model["validate"]||e.new_model["required_error"]?((0,o.wg)(),(0,o.j4)(m,{key:0,flat:"",dense:"",name:"error",size:"24px",color:"red"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{class:"bg-red line-error-tooltip"},{default:(0,o.w5)((()=>[e.new_model["validate"]?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o.Uk)((0,a.zw)(e.message),1)],64)),e.new_model["required_error"]?((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.Uk)((0,a.zw)(e.$t("field_required")),1)],64)):(0,o.kq)("",!0)])),_:1})])),_:1})):(0,o.kq)("",!0)])),_:1},8,["class","modelValue","placeholder","hint"])])]),(0,o._)("div",ge,[(0,o._)("div",fe,[(0,o.Wm)(h,{modelValue:e.new_model["description"],"onUpdate:modelValue":s[1]||(s[1]=s=>e.new_model["description"]=s),outlined:"",type:"textarea",autogrow:"",placeholder:e.$t("description")},null,8,["modelValue","placeholder"])])])])),_:1}),(0,o.Wm)(g,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(_,{label:e.$t("cancel"),appearance:"cancel"},null,8,["label"]),[[y]]),(0,o.Wm)(_,{type:"submit",class:"q-mr-sm",label:e.$t("save")},null,8,["label"])])),_:1})],32),(0,o.Wm)(f,{showing:e.loading},{default:(0,o.w5)((()=>[be])),_:1},8,["showing"])])),_:1})}var ve=t(96427),Ce=function(e,s,t,o){function a(e){return e instanceof t?e:new t((function(s){s(e)}))}return new(t||(t=Promise))((function(t,l){function i(e){try{n(o.next(e))}catch(s){l(s)}}function r(e){try{n(o["throw"](e))}catch(s){l(s)}}function n(e){e.done?t(e.value):a(e.value).then(i,r)}n((o=o.apply(e,s||[])).next())}))};const ke=(0,o.aZ)({el:"#app",mixins:[b.Z],props:{},components:{},data(){return{message:this.$t("only_characters")}},setup(){let e={};const s=(0,I.zI)(),{createGroup:t}=s;return{createGroup:t,new_model:(0,T.iH)(e),loading:(0,T.iH)(!1)}},watch:{},mounted(){this.setNewModel()},methods:{setNewModel(){this.new_model["name"]="",this.new_model["description"]="",this.new_model["validate"]=!0,this.new_model["required_error"]=!1},submitNewColumFrom(){return Ce(this,void 0,void 0,(function*(){try{if(!this.validateRow(this.new_model))return;this.loading=!0,yield this.saveNewRow()}catch(e){if(e&&e.response&&e.response.data&&e.response.data.message)return void this.showErrorToast(e.response.data.message);if(null!=e&&"object"==typeof e&&e.hasOwnProperty("message"))return void this.showErrorToast(e.message);this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR"))}finally{this.loading=!1}}))},saveNewRow(){return Ce(this,void 0,void 0,(function*(){const e={name:this.new_model["name"],description:this.new_model["description"]};yield this.createGroup(e),this.setNewModel();const s=new CustomEvent("group_added",{});document.dispatchEvent(s),this.showSuccessToast("Group Created successfully")}))},validateRow(e){let s=!0;return e["name"]&&0!=e["name"].length?(0,ve.x7)(e["name"])?s:(e.validate=!1,!1):(e.required_error=!0,!1)}}});var We=t(46858),Ue=t(60854);const qe=(0,Q.Z)(ke,[["render",ye]]),Ie=qe;X()(ke,"components",{QCard:A.Z,QToolbar:L.Z,QToolbarTitle:z.Z,QBtn:H.Z,QCardSection:j.Z,QInput:D.Z,QIcon:E.Z,QTooltip:We.Z,QCardActions:J.Z,QInnerLoading:Ue.Z}),X()(ke,"directives",{ClosePopup:Y.Z});var Ze=t(17256),Te=t(16308),Re=t(15877),xe=function(e,s,t,o){function a(e){return e instanceof t?e:new t((function(s){s(e)}))}return new(t||(t=Promise))((function(t,l){function i(e){try{n(o.next(e))}catch(s){l(s)}}function r(e){try{n(o["throw"](e))}catch(s){l(s)}}function n(e){e.done?t(e.value):a(e.value).then(i,r)}n((o=o.apply(e,s||[])).next())}))};const Oe=(0,o.aZ)({el:"#app",mixins:[b.Z],components:{SubHeader:Te.Z,ManageUser:se,Permissions:me,CreateGroup:Ie,BackToSettings:Ze.Z},data(){return{dialog:!1}},mounted(){try{this.getPermissionsData(),this.setSettings();const e=(0,I.zI)();e.$subscribe(((e,s)=>{this.prepareColumns(),this.prepareRows()}))}catch(e){this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR"))}document.addEventListener("group_added",this.groupAdded)},methods:{saveSetting(e,s){return xe(this,void 0,void 0,(function*(){try{this.processing=!0,yield(0,Re.AF)(e,s),this.setSettings(),yield U.W1.fetch()}catch(t){this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR"))}finally{this.processing=!1}}))},setSettings(){const e=(0,Re.$8)("GROUP_PERMISSION_ACTIVATED"),s=["true",!0];this.settings_model["GROUP_PERMISSION_ACTIVATED"]=!!s.includes(e)},groupAdded(){this.display_create_group_dialog=!1},deleteGroup(){try{if(!this.delete_id)return;this.deleteGroupById(this.delete_id)}catch(e){this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR"))}finally{this.processing=!1}},viewPermissions(e){this.selectedGroupId=e.group_id,this.display_permissions_dialog=!0},manageUsers(e){this.selectedGroupId=e.group_id,this.selectedGroupName=e.group_name,this.display_users_dialog=!0},prepareColumns(){this.columns=[],this.columns.push(Object.assign({},{name:"group_name",label:this.$t("group_name"),field:"group_name",align:"left"})),this.columns.push(Object.assign({},{name:"action",label:this.$t("action"),field:"action",align:"right"}))},prepareRows(){if(this.groups){this.rows=[];for(let[e,s]of Object.entries(this.groups)){const e=s;this.addNewRow(e)}}},addNewRow(e){let s=Object.assign({},e);return this.rows.push(s),this.rows.length.toString()}},setup(){const e=(0,I.zI)(),{getPermissionsData:s,deleteGroupById:t}=e,{groups:o,processing:a}=(0,f.Jk)(e);return{settings_model:(0,T.iH)({GROUP_PERMISSION_ACTIVATED:!1}),groups:o,processing:a,deleteGroupById:t,getPermissionsData:s,display_users_dialog:(0,T.iH)(!1),display_permissions_dialog:(0,T.iH)(!1),display_create_group_dialog:(0,T.iH)(!1),columns:(0,T.iH)([]),rows:(0,T.iH)([]),selectedGroupId:(0,T.iH)(""),selectedGroupName:(0,T.iH)(""),deleteConfirm:(0,T.iH)(!1),delete_id:(0,T.iH)("")}}});var Se=t(23175),Qe=t(56362),Ne=t(13246),De=t(50926),Ee=t(61357);const $e=(0,Q.Z)(Oe,[["render",g]]),Pe=$e;X()(Oe,"components",{QIcon:E.Z,QToggle:Se.Z,QTable:N.Z,QTd:V.Z,QBtn:H.Z,QMenu:Qe.Z,QList:Ne.Z,QItem:B.Z,QItemSection:F.Z,QSeparator:De.Z,QTooltip:We.Z,QDialog:G.Z,QCard:A.Z,QCardSection:j.Z,QAvatar:Ee.Z,QCardActions:J.Z,QToolbar:L.Z,QToolbarTitle:z.Z,QInnerLoading:Ue.Z}),X()(Oe,"directives",{ClosePopup:Y.Z})}}]);