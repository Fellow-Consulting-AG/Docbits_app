"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[5353],{55353:(t,e,a)=>{a.r(e),a.d(e,{default:()=>kt});var l=a(83673),i=a(62323),o=a(98880),d=a(68394),n=a.n(d),s=a(49498),c=a.n(s),p=a(9520),h=a.n(p);const r=t=>((0,l.dD)("data-v-de1ef972"),t=t(),(0,l.Cn)(),t),u={class:"row"},_={class:"col-11",style:{padding:"20px","margin-left":"50px"}},m={class:"row text-weight-bolder top-row"},w={class:"full-width",style:{"margin-top":"10px"}},y={style:{"text-align":"left",color:"white",background:"#0e3341"}},b=r((()=>(0,l._)("th",null,null,-1))),v={style:{"max-height":"70vh","overflow-y":"scroll"}},g={style:{width:"100px"}},f=["onClick"],k={class:"chip"},x=["onClick"],V=["onClick"],C=["onClick"];function W(t,e,a,d,s,p){const r=(0,l.up)("BackToSettings"),W=(0,l.up)("q-input"),Z=(0,l.up)("q-space"),q=(0,l.up)("DefaultBtn"),D=(0,l.up)("q-checkbox"),H=(0,l.up)("DeleteQfab"),S=(0,l.up)("q-fab"),$=(0,l.up)("q-chip"),z=(0,l.up)("q-img"),Q=(0,l.up)("q-markup-table"),E=(0,l.up)("AddEditSpacepath"),U=(0,l.up)("q-dialog");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(r),(0,l._)("div",u,[(0,l._)("div",_,[(0,l._)("div",m,[(0,l.Wm)(W,{style:{width:"40%"},outlined:"",dense:"",debounce:"500",modelValue:t.filter,"onUpdate:modelValue":[e[0]||(e[0]=e=>t.filter=e),t.applyFilter],label:t.$t("name")},null,8,["modelValue","label","onUpdate:modelValue"]),(0,l.Wm)(Z),(0,l.Wm)(q,{label:t.$t("doc2light.pages.add"),onClick:e[1]||(e[1]=e=>t.add_path=!0)},null,8,["label"])]),(0,l._)("div",w,[(0,l.Wm)(Q,{class:"sticky-column-for-table white-back",style:{"max-height":"49vh","overflow-y":"auto"},dense:"",flat:""},{default:(0,l.w5)((()=>[(0,l._)("thead",null,[(0,l._)("tr",y,[(0,l._)("th",null,[(0,l.Wm)(D,{dark:"",modelValue:t.headerCheckbox,"onUpdate:modelValue":[e[2]||(e[2]=e=>t.headerCheckbox=e),e[3]||(e[3]=e=>t.changeAction())]},null,8,["modelValue"]),(0,l.Wm)(S,{flat:"",modelValue:t.headerFabIcon,"onUpdate:modelValue":e[4]||(e[4]=e=>t.headerFabIcon=e),disable:t.selection.length<1,"label-position":"top","data-cy":"actions","external-label":"",icon:"more_vert",direction:"down",padding:"xs"},{default:(0,l.w5)((()=>[(0,l.Wm)(H,{info:t.$t("doc2light.table.path"),tooltip:t.$t("delete"),function:t.deleteMarked,argument:t.selection},null,8,["info","tooltip","function","argument"])])),_:1},8,["modelValue","disable"])]),(0,l._)("th",null,(0,i.zw)(t.$t("doc2light.table.name")),1),(0,l._)("th",null,(0,i.zw)(t.$t("doc2light.popups.condition")),1),b,(0,l._)("th",null,(0,i.zw)(t.$t("doc2light.pages.store")),1),(0,l._)("th",null,(0,i.zw)(t.$t("doc2light.table.path")),1)])]),(0,l._)("tbody",v,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.apidata.pathData.data,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",g,[(0,l.Wm)(D,{modelValue:e.rowSelection,"onUpdate:modelValue":[t=>e.rowSelection=t,a=>t.selectionList(e)]},null,8,["modelValue","onUpdate:modelValue"])]),(0,l._)("td",{style:{width:"15vw"},onClick:a=>t.EditDirectory(e.id)},(0,i.zw)(e.name),9,f),(0,l._)("td",null,[(0,l._)("div",k,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.conditions,(t=>((0,l.wg)(),(0,l.j4)($,{key:t.id,class:"chip-bg",dense:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(t.value_1)+" "+(0,i.zw)(t.value_2)+" "+(0,i.zw)(t.value_3),1)])),_:2},1024)))),128))])]),(0,l._)("td",{style:{width:"25px"},onClick:a=>t.EditDirectory(e.id)},["dropbox"==e.store.store_type?((0,l.wg)(),(0,l.j4)(z,{key:0,src:n(),height:"20px",width:"20px"})):(0,l.kq)("",!0),"google_drive"==e.store.store_type?((0,l.wg)(),(0,l.j4)(z,{key:1,src:c(),height:"20px",width:"20px"})):(0,l.kq)("",!0),"onedrive"==e.store.store_type?((0,l.wg)(),(0,l.j4)(z,{key:2,src:h(),height:"20px",width:"20px"})):(0,l.kq)("",!0)],8,x),(0,l._)("td",{onClick:a=>t.EditDirectory(e.id),style:{width:"10vw"}},(0,i.zw)(e.store.name),9,V),(0,l._)("td",{onClick:a=>t.EditDirectory(e.id)},(0,i.zw)(e.path),9,C)])))),128))])])),_:1})])])]),(0,l.Wm)(U,{modelValue:t.add_path,"onUpdate:modelValue":e[5]||(e[5]=e=>t.add_path=e),onKeydown:e[6]||(e[6]=(0,o.D2)((e=>t.add_path=!1),["esc"]))},{default:(0,l.w5)((()=>[(0,l.Wm)(E,{mode:"add"})])),_:1},8,["modelValue"]),(0,l.Wm)(U,{modelValue:t.edit_path,"onUpdate:modelValue":e[7]||(e[7]=e=>t.edit_path=e),onKeydown:e[8]||(e[8]=(0,o.D2)((e=>t.edit_path=!1),["esc"]))},{default:(0,l.w5)((()=>[(0,l.Wm)(E,{mode:"edit",directory_id:t.current_directory_id},null,8,["directory_id"])])),_:1},8,["modelValue"])],64)}var Z=a(61959),q=a(77378);const D=t=>((0,l.dD)("data-v-70addd5c"),t=t(),(0,l.Cn)(),t),H={key:0,class:"popup-heading",style:{color:"#2388ae",width:"250px"}},S={key:1,class:"popup-heading",style:{color:"#2388ae"}},$=D((()=>(0,l._)("hr",{style:{color:"#cecece"}},null,-1))),z={class:"row full-width"},Q={class:"full-width"},E={class:"text-subtitle2",style:{"text-transform":"uppercase","margin-bottom":"10px"}},U={class:"full-width row"},F={style:{"text-align":"left",color:"white",background:"#0e3341"}},T={class:"text-subtitle2",style:{"text-transform":"uppercase","margin-bottom":"10px"}},I={class:"full-width row"};function A(t,e,a,o,d,n){const s=(0,l.up)("q-toolbar-title"),c=(0,l.up)("q-space"),p=(0,l.up)("CancelBtn"),h=(0,l.up)("SaveBtn"),r=(0,l.up)("q-toolbar"),u=(0,l.up)("q-input"),_=(0,l.up)("q-card-section"),m=(0,l.up)("q-select"),w=(0,l.up)("q-btn"),y=(0,l.up)("q-markup-table"),b=(0,l.up)("q-card"),v=(0,l.up)("Loader");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(b,{style:{"min-width":"35vw","min-height":"36vh"}},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"primary-toolbar row"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>["add"==t.mode?((0,l.wg)(),(0,l.iD)("span",H,(0,i.zw)(t.$t("doc2light.popups.add_path")),1)):"edit"==t.mode?((0,l.wg)(),(0,l.iD)("span",S,(0,i.zw)(t.$t("doc2light.popups.add_path")),1)):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(c),(0,l.Wm)(p,{onClick:e[0]||(e[0]=e=>t.add_spacepath={})}),(0,l.Wm)(h,{onClick:t.saveChanges,style:{"margin-left":"10px"}},null,8,["onClick"])])),_:1}),$,(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l._)("div",z,[(0,l._)("div",Q,[(0,l.Wm)(u,{type:"text",square:"",outlined:"",dense:"",tabindex:"0",label:t.$t("name"),modelValue:t.add_spacepath["name"],"onUpdate:modelValue":e[1]||(e[1]=e=>t.add_spacepath["name"]=e)},null,8,["label","modelValue"])])])])),_:1}),(0,l.Wm)(_,{class:"row full-width"},{default:(0,l.w5)((()=>[(0,l._)("span",E,(0,i.zw)(t.$t("doc2light.pages.condition")),1),(0,l._)("div",U,[(0,l.Wm)(m,{square:"",outlined:"",dense:"",options:t.condition_types,style:{width:"30%"},label:t.$t("doc2light.popups.type"),modelValue:t.add_spacepath["condition_type"],"onUpdate:modelValue":e[2]||(e[2]=e=>t.add_spacepath["condition_type"]=e)},null,8,["options","label","modelValue"]),(0,l.Wm)(m,{square:"",outlined:"",dense:"",options:t.conditions,style:{width:"30%","margin-left":"4.5%","margin-right":"4.5%"},label:t.$t("doc2light.popups.condition"),modelValue:t.add_spacepath["condition_condition"],"onUpdate:modelValue":e[3]||(e[3]=e=>t.add_spacepath["condition_condition"]=e)},null,8,["options","label","modelValue"]),(0,l.Wm)(u,{square:"",outlined:"",dense:"",style:{width:"30%"},label:t.$t("doc2light.popups.value"),modelValue:t.add_spacepath["condition_value"],"onUpdate:modelValue":e[4]||(e[4]=e=>t.add_spacepath["condition_value"]=e)},null,8,["label","modelValue"])]),(0,l.Wm)(w,{square:"",color:"primary",icon:"add",unelevated:"",style:{"margin-top":"15px"},onClick:e[5]||(e[5]=e=>t.addEntry())})])),_:1}),(0,l.Wm)(_,{class:"full-width"},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{flat:"",style:{"max-height":"20vh",overflow:"auto","margin-bottom":"5vh"},dense:""},{default:(0,l.w5)((()=>[(0,l._)("thead",null,[(0,l._)("tr",F,[(0,l._)("th",null,(0,i.zw)(t.$t("doc2light.table.type")),1),(0,l._)("th",null,(0,i.zw)(t.$t("doc2light.popups.condition")),1),(0,l._)("th",null,(0,i.zw)(t.$t("doc2light.popups.value")),1),(0,l._)("th",null,(0,i.zw)(t.$t("doc2light.table.actions")),1)])]),(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.table_data,((e,a)=>((0,l.wg)(),(0,l.iD)("tr",{key:a,style:{height:"25px"}},[(0,l._)("td",null,(0,i.zw)(e.value_1),1),(0,l._)("td",null,(0,i.zw)(e.value_2),1),(0,l._)("td",null,(0,i.zw)(e.value_3),1),(0,l._)("td",null,[(0,l.Wm)(w,{flat:"",round:"",color:"red",icon:"delete_outline",onClick:e=>t.removeRow(a)},null,8,["onClick"])])])))),128))])])),_:1})])),_:1}),(0,l.Wm)(_,{class:"row full-width"},{default:(0,l.w5)((()=>[(0,l._)("span",T,(0,i.zw)(t.$t("doc2light.pages.store")),1),(0,l._)("div",I,[(0,l.Wm)(m,{square:"",outlined:"",dense:"",options:t.available_stores,style:{width:"48%","margin-right":"4%"},label:t.$t("doc2light.pages.store"),modelValue:t.add_spacepath["store"],"onUpdate:modelValue":e[6]||(e[6]=e=>t.add_spacepath["store"]=e)},null,8,["options","label","modelValue"]),(0,l.Wm)(u,{square:"",outlined:"",dense:"",style:{width:"48%"},label:t.$t("doc2light.table.path"),modelValue:t.add_spacepath["path"],"onUpdate:modelValue":e[7]||(e[7]=e=>t.add_spacepath["path"]=e)},null,8,["label","modelValue"])])])),_:1})])),_:1}),(0,l.Wm)(v)],64)}var B=a(72113),R=a(45401),j=a(79261),K=a(10321),M=a(64252),Y=a(97767),L=a(50442),J=function(t,e,a,l){function i(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,o){function d(t){try{s(l.next(t))}catch(e){o(e)}}function n(t){try{s(l["throw"](t))}catch(e){o(e)}}function s(t){t.done?a(t.value):i(t.value).then(d,n)}s((l=l.apply(t,e||[])).next())}))};const P=(0,l.aZ)({el:"#app",mixins:[R.Z,q.Z],props:["mode","directory_id"],components:{CancelBtn:Y.Z,Loader:B.Z,SaveBtn:L.Z},data(){return{}},mounted(){this.getStores(),"edit"==this.mode&&this.FillFields()},methods:{saveChanges(){return J(this,void 0,void 0,(function*(){if("edit"==this.mode){this.apidata.pathData.data[this.directory_id];yield this.edit_pathdirectory(this.directory_id,this.add_spacepath["store"].value,this.add_spacepath["name"],this.add_spacepath["path"]).then((t=>{this.showSuccessToast("Successfull edited Conditions")}))}else"add"==this.mode&&(yield this.add_pathdirectory(this.add_spacepath["store"].value,this.add_spacepath["name"],this.add_spacepath["path"]).then((t=>{this.table_data.forEach((e=>J(this,void 0,void 0,(function*(){yield this.create_path_condition_pair(e.value_1,e.value_2,e.value_3,t.directory.id)}))))})))}))},FillFields(){const t=this.apidata.pathData.data[this.directory_id];this.add_spacepath["name"]=t.name,this.add_spacepath["store"]={label:t.store.name,value:t.store.id},this.add_spacepath["path"]=t.path,Object.values(t.conditions).forEach((t=>{this.table_data.push(t)}))},getStores(){return J(this,void 0,void 0,(function*(){try{yield M.wk.getAccessableStores().then((t=>{t.exports.forEach((t=>{this.available_stores.push({label:t.name,value:t.id})}))}))}catch(t){this.showErrorToast("Failed getting authenticated Stores")}}))},removeRow(t){"edit"==this.mode?(this.remove_path_condition_pair(this.directory_id,this.table_data[t].id),"0"==t?this.table_data.shift():this.table_data.splice(1,t)):"0"==t?this.table_data.shift():this.table_data.splice(1,t)},addEntry(){return J(this,void 0,void 0,(function*(){"edit"==this.mode&&(yield this.create_path_condition_pair(this.add_spacepath["condition_type"].value,this.add_spacepath["condition_condition"].value,this.add_spacepath["condition_value"],this.directory_id)),this.table_data.push({value_1:this.add_spacepath["condition_type"].label,value_2:this.add_spacepath["condition_condition"].label,value_3:this.add_spacepath["condition_value"]}),this.add_spacepath["condition_type"]=null,this.add_spacepath["condition_condition"]=null,this.add_spacepath["condition_value"]=""}))}},setup(){const t=(0,j.Wb)(),e=(0,K.Jk)(t),{remove_path_condition_pair:a,edit_pathdirectory:l,create_path_condition_pair:i,add_pathdirectory:o}=t,d=[{label:"Is",value:"=="},{label:"Is not",value:"!="}],n=[{label:"Tag",value:"tag"},{label:"Doc Type",value:"doc_type"},{label:"Corresp",value:"correspondent"}];return{add_pathdirectory:o,create_path_condition_pair:i,remove_path_condition_pair:a,edit_pathdirectory:l,available_stores:(0,Z.iH)([]),apidata:(0,Z.iH)(e),condition_types:(0,Z.iH)(n),conditions:(0,Z.iH)(d),add_spacepath:(0,Z.iH)({}),table_data:(0,Z.iH)([])}}});var O=a(74260),G=a(10151),N=a(39570),X=a(13747),tt=a(62025),et=a(25589),at=a(64689),lt=a(72448),it=a(2165),ot=a(30481),dt=a(7518),nt=a.n(dt);const st=(0,O.Z)(P,[["render",A],["__scopeId","data-v-70addd5c"]]),ct=st;nt()(P,"components",{QCard:G.Z,QToolbar:N.Z,QToolbarTitle:X.Z,QSpace:tt.Z,QCardSection:et.Z,QInput:at.Z,QSelect:lt.Z,QBtn:it.Z,QMarkupTable:ot.Z});var pt=a(27547),ht=a(99321),rt=a(73902),ut=function(t,e,a,l){function i(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,o){function d(t){try{s(l.next(t))}catch(e){o(e)}}function n(t){try{s(l["throw"](t))}catch(e){o(e)}}function s(t){t.done?a(t.value):i(t.value).then(d,n)}s((l=l.apply(t,e||[])).next())}))};const _t=(0,l.aZ)({data(){return{}},components:{DeleteQfab:ht.Z,BackToSettings:pt.Z,AddEditSpacepath:ct,DefaultBtn:rt.Z},mixins:[q.Z],mounted(){return ut(this,void 0,void 0,(function*(){yield this.loadFromServer()}))},methods:{EditDirectory(t){this.current_directory_id=t,this.edit_path=!0},deleteMarked(t){t.forEach((t=>ut(this,void 0,void 0,(function*(){yield this.delete_pathdirectory(t)}))))},handleActions(t){this.path_list[t].fabaction,this.path_list[t].fabaction},selectionList(t){this.selection.push(t.id)},changeAction(){!0===this.headerCheckbox?this.selectAllRows():(this.resetAllSelectedRows(),this.headerFabIcon=!1)},selectAllRows(){this.headerCheckbox=!0,this.path_list.forEach((t=>{this.path_list[t].rowSelection=!0,this.selection.push(t)}))},resetAllSelectedRows(){this.selection=[],this.headerCheckbox=!1,this.path_list.forEach((t=>{this.path_list[t].rowSelection=!1}))}},setup(){const t=[{value:"doctype",label:"Doctype"},{value:"correspondent",label:"Correspondent"}],e=(0,j.Wb)(),a=(0,K.Jk)(e),{loadFromServer:l,delete_pathdirectory:i}=e;return{apidata:(0,Z.iH)(a),loadFromServer:l,delete_pathdirectory:i,showMenu:(0,Z.iH)(!1),showIcons:(0,Z.iH)(!0),filter:(0,Z.iH)(""),view:(0,Z.iH)("list"),headerCheckbox:(0,Z.iH)(!1),headerFabIcon:(0,Z.iH)(!1),add_path:(0,Z.iH)(!1),edit_path:(0,Z.iH)(!1),current_directory_id:(0,Z.iH)(""),selection:(0,Z.iH)([]),path_list:(0,Z.iH)([]),dropdowns:(0,Z.iH)(t),setting:(0,Z.iH)({}),path:(0,Z.iH)(""),path_id:(0,Z.iH)("")}}});var mt=a(65735),wt=a(39200),yt=a(67030),bt=a(24027),vt=a(46778),gt=a(17132);const ft=(0,O.Z)(_t,[["render",W],["__scopeId","data-v-de1ef972"]]),kt=ft;nt()(_t,"components",{QInput:at.Z,QSpace:tt.Z,QMarkupTable:ot.Z,QCheckbox:mt.Z,QFab:wt.Z,QChip:yt.Z,QImg:bt.Z,QDialog:vt.Z,QTable:gt.Z,QBtn:it.Z})}}]);