"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[2277],{12277:(e,o,t)=>{t.r(o),t.d(o,{default:()=>Te});var n=t(59835);const a={id:"services",class:"services section-bg"},r={class:"row"},l={class:"col-11",style:{padding:"20px","margin-left":"50px"}};function s(e,o,t,s,i,d){const p=(0,n.up)("Correspondent_Groups_Middle");return(0,n.wg)(),(0,n.iD)("section",a,[(0,n._)("div",r,[(0,n._)("div",l,[(0,n.Wm)(p)])])])}var i=t(49990),d=t(70501),p=t(86970),u=t(61957);const c={class:"row text-weight-bolder top-row"},_={class:"full-width",style:{"margin-top":"10px"}},h={style:{"text-align":"left",color:"white",background:"#0e3341"}},m={style:{"max-height":"50vh",overflow:"scroll"}},g={style:{width:"100px"}},f=["onClick"],w=["onClick"];function b(e,o,t,a,r,l){const s=(0,n.up)("q-input"),i=(0,n.up)("q-space"),d=(0,n.up)("DefaultBtn"),b=(0,n.up)("q-checkbox"),v=(0,n.up)("DeleteQfab"),y=(0,n.up)("q-fab"),C=(0,n.up)("q-chip"),Z=(0,n.up)("q-markup-table"),k=(0,n.up)("AddCorresp_Group_Popup"),x=(0,n.up)("q-dialog"),W=(0,n.up)("EditCorresp_Group_Popup"),V=(0,n.up)("ManageCorresps");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",c,[(0,n.Wm)(s,{style:{width:"40%"},outlined:"",dense:"",debounce:"500",modelValue:e.filter,"onUpdate:modelValue":[o[0]||(o[0]=o=>e.filter=o),e.applyFilter],label:e.$t("name")},null,8,["modelValue","label","onUpdate:modelValue"]),(0,n.Wm)(i),(0,n.Wm)(d,{label:e.$t("doc2light.pages.add"),onClick:o[1]||(o[1]=o=>e.show_add_corresp_group_popup=!0)},null,8,["label"])]),(0,n._)("div",_,[(0,n.Wm)(Z,{class:"sticky-column-for-table white-back",style:{"max-height":"70vh","overflow-y":"auto"},dense:"",flat:""},{default:(0,n.w5)((()=>[(0,n._)("thead",null,[(0,n._)("tr",h,[(0,n._)("th",null,[(0,n.Wm)(b,{dark:"",modelValue:e.headerCheckbox,"onUpdate:modelValue":[o[2]||(o[2]=o=>e.headerCheckbox=o),o[3]||(o[3]=o=>e.changeAction())]},null,8,["modelValue"]),(0,n.Wm)(y,{flat:"",modelValue:e.headerFabIcon,"onUpdate:modelValue":o[4]||(o[4]=o=>e.headerFabIcon=o),disable:e.selection.length<1,"label-position":"top","data-cy":"actions","external-label":"",icon:"more_vert",direction:"down",padding:"xs"},{default:(0,n.w5)((()=>[(0,n.Wm)(v,{info:e.$t("doc2light.pages.correspondent_groups"),tooltip:e.$t("delete"),function:e.deleteMarked,argument:e.selection},null,8,["info","tooltip","function","argument"])])),_:1},8,["modelValue","disable"])]),(0,n._)("th",null,(0,p.zw)(e.$t("doc2light.table.name")),1),(0,n._)("th",null,(0,p.zw)(e.$t("doc2light.pages.assignee")),1)])]),(0,n._)("tbody",m,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.group_list,(o=>((0,n.wg)(),(0,n.iD)("tr",{key:o["group_id"]},[(0,n._)("td",g,[(0,n.Wm)(b,{modelValue:o.rowSelection,"onUpdate:modelValue":[e=>o.rowSelection=e,t=>e.selectionList(o)]},null,8,["modelValue","onUpdate:modelValue"])]),(0,n._)("td",{onClick:t=>e.onEditClick(o.id)},(0,p.zw)(o["name"]),9,f),(0,n._)("td",{style:{"overflow-x":"scroll"},onClick:t=>e.onManageClick(o.id)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.correspondents,(e=>((0,n.wg)(),(0,n.j4)(C,{key:e.id,dense:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,p.zw)(e.name),1)])),_:2},1024)))),128))],8,w)])))),128))])])),_:1})]),(0,n.Wm)(x,{modelValue:e.show_add_corresp_group_popup,"onUpdate:modelValue":o[5]||(o[5]=o=>e.show_add_corresp_group_popup=o),onKeydown:o[6]||(o[6]=(0,u.D2)((o=>e.setter()),["esc"]))},{default:(0,n.w5)((()=>[(0,n.Wm)(k)])),_:1},8,["modelValue"]),(0,n.Wm)(x,{modelValue:e.show_edit_corresp_group_popup,"onUpdate:modelValue":o[7]||(o[7]=o=>e.show_edit_corresp_group_popup=o),onKeydown:o[8]||(o[8]=(0,u.D2)((o=>e.setter()),["esc"]))},{default:(0,n.w5)((()=>[(0,n.Wm)(W,{group_id:e.group_id},null,8,["group_id"])])),_:1},8,["modelValue"]),(0,n.Wm)(x,{modelValue:e.show_manage_corresps,"onUpdate:modelValue":o[9]||(o[9]=o=>e.show_manage_corresps=o),onKeydown:o[10]||(o[10]=(0,u.D2)((o=>e.setter()),["esc"]))},{default:(0,n.w5)((()=>[(0,n.Wm)(V,{group_id:e.group_id},null,8,["group_id"])])),_:1},8,["modelValue"])],64)}var v=t(60499),y=t(54170),C=t(40469),Z=t(7363),k=t(42412);const x=e=>((0,n.dD)("data-v-a01f5d16"),e=e(),(0,n.Cn)(),e),W={class:"popup-heading",style:{color:"#2388AE"}},V=x((()=>(0,n._)("hr",{style:{color:"#cecece"}},null,-1))),D={style:{"margin-bottom":"20px"},class:"row full-width mb-10 mt-8"},Q={class:"full-width"};function H(e,o,t,a,r,l){const s=(0,n.up)("q-toolbar-title"),i=(0,n.up)("CancelBtn"),d=(0,n.up)("SaveBtn"),u=(0,n.up)("q-card-actions"),c=(0,n.up)("q-toolbar"),_=(0,n.up)("q-input"),h=(0,n.up)("q-card-section"),m=(0,n.up)("q-card"),g=(0,n.up)("Loader");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(m,{style:{width:"50%"},class:"card-format"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{class:"primary-toolbar"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n._)("span",W,(0,p.zw)(e.$t("doc2light.popups.add_correspondent_group")),1)])),_:1}),(0,n.Wm)(u,{align:"right"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{onClick:o[0]||(o[0]=o=>e.new_corresp_group={})}),(0,n.Wm)(d,{onClick:e.saveChanges},null,8,["onClick"])])),_:1})])),_:1}),V,(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n._)("div",D,[(0,n._)("div",Q,[(0,n.Wm)(_,{type:"text",outlined:"",tabindex:"0",dense:"",label:e.$t("name"),modelValue:e.new_corresp_group["name"],"onUpdate:modelValue":o[1]||(o[1]=o=>e.new_corresp_group["name"]=o)},null,8,["label","modelValue"])])])])),_:1})])),_:1}),(0,n.Wm)(g)],64)}var q=t(31921),S=t(22825),F=t(78406),A=function(e,o,t,n){function a(e){return e instanceof t?e:new t((function(o){o(e)}))}return new(t||(t=Promise))((function(t,r){function l(e){try{i(n.next(e))}catch(o){r(o)}}function s(e){try{i(n["throw"](e))}catch(o){r(o)}}function i(e){e.done?t(e.value):a(e.value).then(l,s)}i((n=n.apply(e,o||[])).next())}))};const U=(0,n.aZ)({el:"#app",mixins:[d.Z,i.Z],props:["showSpinner"],components:{Loader:q.Z,CancelBtn:S.Z,SaveBtn:F.Z},data(){return{}},methods:{saveChanges(){return A(this,void 0,void 0,(function*(){yield this.create_correspondent_group(this.new_corresp_group["name"])}))}},setup(){const e=(0,C._3)(),o=(0,Z.Jk)(e),{create_correspondent_group:t}=e;return{apidata:o,create_correspondent_group:t,multiUploaderDialog:(0,v.iH)(!0),uploadedFiles:(0,v.iH)(null),new_corresp_group:(0,v.iH)({}),algorythms:["Regex","FellowAI","None"]}}});var $=t(7683),T=t(44458),B=t(51663),I=t(81973),L=t(11821),z=t(63190),E=t(13119),M=t(69984),G=t.n(M);const P=(0,$.Z)(U,[["render",H],["__scopeId","data-v-a01f5d16"]]),Y=P;G()(U,"components",{QCard:T.Z,QToolbar:B.Z,QToolbarTitle:I.Z,QCardActions:L.Z,QCardSection:z.Z,QInput:E.Z});const K=e=>((0,n.dD)("data-v-338125e5"),e=e(),(0,n.Cn)(),e),R={class:"popup-heading",style:{color:"#2388AE"}},j=K((()=>(0,n._)("hr",{style:{color:"#cecece"}},null,-1))),O={style:{"margin-bottom":"20px"},class:"row full-width mb-10 mt-8"},J={class:"full-width"};function N(e,o,t,a,r,l){const s=(0,n.up)("q-toolbar-title"),i=(0,n.up)("CancelBtn"),d=(0,n.up)("SaveBtn"),u=(0,n.up)("q-card-actions"),c=(0,n.up)("q-toolbar"),_=(0,n.up)("q-input"),h=(0,n.up)("q-card-section"),m=(0,n.up)("q-card"),g=(0,n.up)("Loader");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(m,{style:{width:"50%"},class:"card-format"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{class:"primary-toolbar"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n._)("span",R,(0,p.zw)(e.$t("rename")),1)])),_:1}),(0,n.Wm)(u,{align:"right"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{onClick:o[0]||(o[0]=o=>e.rename_corresp_group={})}),(0,n.Wm)(d,{onClick:e.saveChanges},null,8,["onClick"])])),_:1})])),_:1}),j,(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n._)("div",O,[(0,n._)("div",J,[(0,n.Wm)(_,{type:"text",outlined:"",dense:"",tabindex:"0",label:e.$t("name"),modelValue:e.rename_corresp_group["name"],"onUpdate:modelValue":o[1]||(o[1]=o=>e.rename_corresp_group["name"]=o)},null,8,["label","modelValue"])])])])),_:1})])),_:1}),(0,n.Wm)(g)],64)}var X=function(e,o,t,n){function a(e){return e instanceof t?e:new t((function(o){o(e)}))}return new(t||(t=Promise))((function(t,r){function l(e){try{i(n.next(e))}catch(o){r(o)}}function s(e){try{i(n["throw"](e))}catch(o){r(o)}}function i(e){e.done?t(e.value):a(e.value).then(l,s)}i((n=n.apply(e,o||[])).next())}))};const ee=(0,n.aZ)({el:"#app",mixins:[d.Z,i.Z],props:["group_id"],components:{Loader:q.Z,CancelBtn:S.Z,SaveBtn:F.Z},data(){return{}},mounted(){this.get_field_infos()},methods:{get_field_infos(){this.rename_corresp_group["name"]=this.apidata.groupData.data[this.group_id].name},saveChanges(){return X(this,void 0,void 0,(function*(){yield this.rename_correspondent_group(this.group_id,this.rename_corresp_group["name"])}))}},setup(){const e=(0,C.Wb)(),o=(0,Z.Jk)(e),{rename_correspondent_group:t}=e;return{apidata:(0,v.iH)(o),rename_correspondent_group:t,multiUploaderDialog:(0,v.iH)(!0),uploadedFiles:(0,v.iH)(null),rename_corresp_group:(0,v.iH)({})}}}),oe=(0,$.Z)(ee,[["render",N],["__scopeId","data-v-338125e5"]]),te=oe;G()(ee,"components",{QCard:T.Z,QToolbar:B.Z,QToolbarTitle:I.Z,QCardActions:L.Z,QCardSection:z.Z,QInput:E.Z});const ne=e=>((0,n.dD)("data-v-8bde95ca"),e=e(),(0,n.Cn)(),e),ae={class:"popup-heading",style:{color:"#2388AE"}},re=ne((()=>(0,n._)("hr",{style:{color:"#cecece"}},null,-1))),le={class:"q-gutter-md row items-start"},se={class:"row"},ie={class:"col-9"},de=ne((()=>(0,n._)("div",{class:"col-1"},null,-1))),pe={class:"col-2"},ue={class:"full-width"},ce={style:{"text-align":"left",color:"white",background:"#0E3341"}},_e={class:"text-uppercase"},he={class:"text-uppercase",style:{width:"30px"}},me={style:{"max-height":"50vh",overflow:"scroll"}};function ge(e,o,t,a,r,l){const s=(0,n.up)("q-toolbar-title"),i=(0,n.up)("q-toolbar"),d=(0,n.up)("q-select"),u=(0,n.up)("SaveBtn"),c=(0,n.up)("q-card-section"),_=(0,n.up)("DeleteQfab"),h=(0,n.up)("q-fab"),m=(0,n.up)("q-markup-table"),g=(0,n.up)("CancelBtn"),f=(0,n.up)("q-card-actions"),w=(0,n.up)("q-card"),b=(0,n.up)("Loader");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(w,{style:{"min-width":"50vh"},class:"card-format"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{class:"primary-toolbar"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n._)("span",ae,(0,p.zw)(e.$t("doc2light.table.manage_correspondents")),1)])),_:1})])),_:1}),re,(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n._)("div",le,[(0,n._)("div",se,[(0,n._)("div",ie,[(0,n.Wm)(d,{style:{width:"400px"},outlined:"",dense:"",modelValue:e.manage_corresp["add_corresp"],"onUpdate:modelValue":o[0]||(o[0]=o=>e.manage_corresp["add_corresp"]=o),options:e.correspondents_select,label:e.$t("doc2light.table.select_correspondent")},null,8,["modelValue","options","label"])]),de,(0,n._)("div",pe,[(0,n.Wm)(u,{onClick:o[1]||(o[1]=o=>e.addCorrespondent()),class:"q-mr-sm",label:e.$t("doc2light.pages.add")},null,8,["label"])])])])])),_:1}),(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n._)("div",ue,[(0,n.Wm)(m,{class:"sticky-column-for-table",style:{"max-height":"150px","overflow-y":"auto"},flat:"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("thead",null,[(0,n._)("tr",ce,[(0,n._)("th",_e,(0,p.zw)(e.$t("doc2light.table.name")),1),(0,n._)("th",he,(0,p.zw)(e.$t("doc2light.table.actions")),1)])]),(0,n._)("tbody",me,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.group_info.correspondents,((o,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:o.id},[(0,n._)("td",null,(0,p.zw)(o.name),1),(0,n._)("td",null,[(0,n.Wm)(h,{flat:"",modelValue:o.fabaction,"onUpdate:modelValue":[e=>o.fabaction=e,o=>e.handleActions(t)],"label-position":"top","data-cy":"actions","external-label":"",color:"primary",icon:"more_horiz",direction:"left",padding:"xs"},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{info:e.$t("doc2light.pages.assignee"),tooltip:e.$t("delete"),function:e.onTrashbinClick,argument:o.id},null,8,["info","tooltip","function","argument"])])),_:2},1032,["modelValue","onUpdate:modelValue"])])])))),128))])])),_:1})]),(0,n.Wm)(f,{align:"right"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{style:{"margin-top":"15px"}})])),_:1})])),_:1})])),_:1}),(0,n.Wm)(b)],64)}var fe=t(47342),we=function(e,o,t,n){function a(e){return e instanceof t?e:new t((function(o){o(e)}))}return new(t||(t=Promise))((function(t,r){function l(e){try{i(n.next(e))}catch(o){r(o)}}function s(e){try{i(n["throw"](e))}catch(o){r(o)}}function i(e){e.done?t(e.value):a(e.value).then(l,s)}i((n=n.apply(e,o||[])).next())}))};const be=(0,n.aZ)({el:"#app",mixins:[d.Z,i.Z],props:["group_id"],components:{Loader:q.Z,DeleteQfab:fe.Z,CancelBtn:S.Z,SaveBtn:F.Z},data(){return{}},mounted(){this.get_field_infos(),this.get_dropdown_infos()},methods:{addCorrespondent(){return we(this,void 0,void 0,(function*(){yield this.add_correspondent_to_group(this.manage_corresp["add_corresp"].value,this.group_info.id,this.group_info.name,this.manage_corresp["add_corresp"].label)}))},get_field_infos(){this.group_info=this.apidata.groupData.value.data[this.group_id]},get_dropdown_infos(){for(const[e,o]of Object.entries(this.apidata.correspondentData.value.data))this.correspondents_select.push({value:o.id,label:o.name})},onTrashbinClick(e){return we(this,void 0,void 0,(function*(){yield this.remove_correspondent_from_group(e,this.group_id)}))},handleActions(e){return this.apidata.groupData.value.data[this.group_id].correspondents.forEach(((o,t)=>{t!==e&&(o["fabAction"]=!1)})),!0}},setup(){const e=(0,C.Wb)(),o=(0,Z.Jk)(e),{remove_correspondent_from_group:t,add_correspondent_to_group:n,setCorrespondentsFromServer:a}=e;return{apidata:o,group_info:(0,v.iH)({}),setCorrespondentsFromServer:a,remove_correspondent_from_group:t,add_correspondent_to_group:n,multiUploaderDialog:(0,v.iH)(!0),uploadedFiles:(0,v.iH)(null),manage_corresp:(0,v.iH)({}),correspondents_select:(0,v.iH)([])}}});var ve=t(32259),ye=t(66933),Ce=t(19361);const Ze=(0,$.Z)(be,[["render",ge],["__scopeId","data-v-8bde95ca"]]),ke=Ze;G()(be,"components",{QCard:T.Z,QToolbar:B.Z,QToolbarTitle:I.Z,QCardSection:z.Z,QSelect:ve.Z,QMarkupTable:ye.Z,QFab:Ce.Z,QCardActions:L.Z});var xe=function(e,o,t,n){function a(e){return e instanceof t?e:new t((function(o){o(e)}))}return new(t||(t=Promise))((function(t,r){function l(e){try{i(n.next(e))}catch(o){r(o)}}function s(e){try{i(n["throw"](e))}catch(o){r(o)}}function i(e){e.done?t(e.value):a(e.value).then(l,s)}i((n=n.apply(e,o||[])).next())}))};const We=(0,n.aZ)({data(){return{showIcons:!1,supportURL:"https://dev.cloudintegration.eu/doc2_support"}},mounted(){this.initView()},mixins:[d.Z],components:{DefaultBtn:k.Z,DeleteQfab:fe.Z,AddCorresp_Group_Popup:Y,EditCorresp_Group_Popup:te,ManageCorresps:ke},methods:{setter(){this.show_add_corresp_group_popup=!1,this.show_edit_corresp_group_popup=!1,this.show_manage_corresps=!1,this.group_list=this.apidata.groupData.data},formateDate(e,o){return y.ZP.formatDate(e,o)},initView(){return xe(this,void 0,void 0,(function*(){yield this.setGroupsFromServer(),yield this.setCorrespondentsFromServer(),this.group_list=this.apidata.groupData.data}))},onEditClick(e){this.group_id=e,this.show_edit_corresp_group_popup=!0},onManageClick(e){this.group_id=e,this.show_manage_corresps=!0},applyFilter(){if(""==this.filter)this.group_list=this.apidata.groupData.data;else{this.group_list={};for(const[e,o]of Object.entries(this.apidata.groupData.data))o.name.toLowerCase().includes(this.filter.toLowerCase())&&(this.group_list[e]=this.apidata.groupData.data[e])}},handleActions(e){this.group_list[e].fabaction,this.group_list[e].fabaction},deleteMarked(e){this.showLoading(),e.forEach((e=>xe(this,void 0,void 0,(function*(){yield this.delete_correspondent_group(e)})))),this.group_skip=0,this.hideLoading()},selectionList(e){const o=this.selection.indexOf(e.id);o>-1?(this.selection.splice(o,1),this.group_list[e.id].rowSelection=!1,this.selection.length<1&&(this.headerFabIcon=!1)):(this.selection.push(e.id),this.group_list[e.id].rowSelection=!0)},changeAction(){!0===this.headerCheckbox?this.selectAllRows():(this.resetAllSelectedRows(),this.headerFabIcon=!1)},selectAllRows(){this.headerCheckbox=!0;for(const[e,o]of Object.entries(this.group_list))this.group_list[e].rowSelection=!0,this.selection.push(e)},resetAllSelectedRows(){this.selection=[],this.headerCheckbox=!1;for(const[e,o]of Object.entries(this.group_list))this.group_list[e].rowSelection=!1}},setup(){const e=(0,C.Wb)(),o=(0,Z.Jk)(e),{setGroupsFromServer:t,setCorrespondentsFromServer:n,delete_correspondent_group:a}=e;return{apidata:(0,v.iH)(o),filter:(0,v.iH)(""),view:(0,v.iH)("list"),show_add_corresp_group_popup:(0,v.iH)(!1),show_edit_corresp_group_popup:(0,v.iH)(!1),show_manage_corresps:(0,v.iH)(!1),setGroupsFromServer:t,setCorrespondentsFromServer:n,delete_correspondent_group:a,group_id:(0,v.iH)(),group_list:(0,v.iH)({}),selection:(0,v.iH)([]),headerCheckbox:(0,v.iH)(!1),headerFabIcon:(0,v.iH)(!1),group_skip:(0,v.iH)(1)}}});var Ve=t(90136),De=t(11221),Qe=t(57691),He=t(32074),qe=t(61450);const Se=(0,$.Z)(We,[["render",b]]),Fe=Se;G()(We,"components",{QInput:E.Z,QSpace:Ve.Z,QMarkupTable:ye.Z,QCheckbox:De.Z,QFab:Ce.Z,QChip:Qe.Z,QDialog:He.Z,QTable:qe.Z});const Ae=(0,n.aZ)({data(){return{}},components:{Correspondent_Groups_Middle:Fe},mixins:[d.Z,i.Z]});var Ue=t(68879);const $e=(0,$.Z)(Ae,[["render",s],["__scopeId","data-v-3a841879"]]),Te=$e;G()(Ae,"components",{QBtn:Ue.Z})}}]);