"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[5809],{35809:(e,t,s)=>{s.r(t),s.d(t,{default:()=>dt});var l=s(61758),o=s(58790),a=s(29104);const i={class:"container settings no-padding-left-right list-of-values-area"},n={class:"q-mt-sm",style:{"text-transform":"capitalize"}},r=(0,l.Lk)("template",null,null,-1),d={class:"row items-center"},u=(0,l.Lk)("img",{class:"loading-image",src:"images/loader.gif",alt:"Loading..."},null,-1);function c(e,t,s,c,m,g){const h=(0,l.g2)("SubHeader"),b=(0,l.g2)("f-btn"),_=(0,l.g2)("BackToSettings"),p=(0,l.g2)("q-separator"),f=(0,l.g2)("q-icon"),v=(0,l.g2)("q-space"),y=(0,l.g2)("q-item-section"),w=(0,l.g2)("valuesOfList"),k=(0,l.g2)("q-card-section"),L=(0,l.g2)("q-card"),F=(0,l.g2)("q-expansion-item"),E=(0,l.g2)("q-list"),C=(0,l.g2)("CreateList"),A=(0,l.g2)("q-dialog"),V=(0,l.g2)("q-inner-loading");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(h,{name:"list_of_values",label:e.$t("list_of_values")},null,8,["label"]),(0,l.bF)(_,null,{default:(0,l.k6)((()=>[(0,l.bF)(b,{class:"float-right",icon:"add",onClick:t[0]||(t[0]=t=>e.create_new_list=!0),label:e.$t("new")},null,8,["label"])])),_:1}),(0,l.Lk)("div",i,[(0,l.bF)(E,{bordered:"",class:"rounded-borders"},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.list_of_values,((s,i)=>((0,l.uX)(),(0,l.CE)(l.FK,{key:i},[(0,l.bF)(p),(0,l.bF)(F,{"expand-separator":"","header-class":"highlighted-back","defauklt-opened":""},{header:(0,l.k6)((()=>[(0,l.bF)(f,{size:"25px",class:"q-mr-lg black_to_white q-mt-sm",name:"img:images/menu-button.svg"}),(0,l.Lk)("span",n,(0,o.v_)(i),1),(0,l.bF)(v),r,(0,l.bF)(y,{side:""},{default:(0,l.k6)((()=>[(0,l.Lk)("div",d,["DEFAULT"!=s["org_id"]?((0,l.uX)(),(0,l.Wv)(b,{key:0,appearance:"flat",class:"float-right",onClick:[t[1]||(t[1]=(0,a.D$)((()=>{}),["stop"])),t=>e.deleteRow(i)],icon:"img:images/trash-bin-default.svg"},null,8,["onClick"])):(0,l.Q3)("",!0)])])),_:2},1024)])),default:(0,l.k6)((()=>[(0,l.bF)(L,null,{default:(0,l.k6)((()=>[(0,l.bF)(k,{style:"height: auto; min-height: 15vh;"},{default:(0,l.k6)((()=>[(0,l.bF)(w,{list_name:i},null,8,["list_name"])])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,l.bF)(p)],64)))),128))])),_:1})]),(0,l.bF)(A,{modelValue:e.create_new_list,"onUpdate:modelValue":t[2]||(t[2]=t=>e.create_new_list=t),persistent:"",onKeydown:t[3]||(t[3]=(0,a.jR)((t=>e.create_new_list=!1),["esc"]))},{default:(0,l.k6)((()=>[(0,l.bF)(C)])),_:1},8,["modelValue"]),(0,l.bF)(V,{showing:e.processing},{default:(0,l.k6)((()=>[u])),_:1},8,["showing"])],64)}var m=s(1659),g=s(24622),h=s(38734),b=s(64775),_=s(11470),p=s(91236),f=s(60894),v=s(94124);const y=e=>((0,l.Qi)("data-v-4dbfc8e9"),e=e(),(0,l.jt)(),e),w={class:"row full-width mb-10 mt-8",style:{"margin-bottom":"20px"}},k={class:"full-width"},L={class:"row full-width mb-10 mt-8",style:{"margin-bottom":"20px"}},F={class:"full-width"},E=y((()=>(0,l.Lk)("img",{class:"loading-image",src:"images/loader.gif",alt:"Loading..."},null,-1)));function C(e,t,s,i,n,r){const d=(0,l.g2)("q-toolbar-title"),u=(0,l.g2)("q-btn"),c=(0,l.g2)("q-toolbar"),m=(0,l.g2)("q-tooltip"),g=(0,l.g2)("q-icon"),h=(0,l.g2)("q-input"),b=(0,l.g2)("q-select"),_=(0,l.g2)("q-card-section"),p=(0,l.g2)("f-btn"),f=(0,l.g2)("q-card-actions"),v=(0,l.g2)("q-inner-loading"),y=(0,l.g2)("q-card"),C=(0,l.gN)("close-popup");return(0,l.uX)(),(0,l.Wv)(y,null,{default:(0,l.k6)((()=>[(0,l.bF)(c,{class:"text-white secondary-toolbar"},{default:(0,l.k6)((()=>[(0,l.bF)(d,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.$t("pages.settings.lov.new_list")),1)])),_:1}),(0,l.bo)((0,l.bF)(u,{flat:"",round:"",dense:"",icon:"close"},null,512),[[C]])])),_:1}),(0,l.Lk)("form",{onSubmit:t[2]||(t[2]=(0,a.D$)(((...t)=>e.submitNewColumFrom&&e.submitNewColumFrom(...t)),["prevent","stop"])),class:"create-form q-pt-md q-pb-lg"},[(0,l.bF)(_,{class:"q-pt-none"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",w,[(0,l.Lk)("div",k,[(0,l.bF)(h,{outlined:"",dense:"",label:e.$t("Name"),modelValue:e.model["name"],"onUpdate:modelValue":t[0]||(t[0]=t=>e.model["name"]=t),class:(0,o.C4)("full-width"+(e.errors["name"]?"column-error-border":""))},{append:(0,l.k6)((()=>[e.errors["name"]?((0,l.uX)(),(0,l.Wv)(g,{key:0,flat:"",dense:"",name:"error",size:"24px",color:"red"},{default:(0,l.k6)((()=>[(0,l.bF)(m,{class:"bg-red line-error-tooltip"},{default:(0,l.k6)((()=>["required"==e.errors["name"]?((0,l.uX)(),(0,l.CE)(l.FK,{key:0},[(0,l.eW)((0,o.v_)(e.$t("pages.api_user_messages.FIELD_REQUIRED")),1)],64)):(0,l.Q3)("",!0),"only_characters_underscore"==e.errors["name"]?((0,l.uX)(),(0,l.CE)(l.FK,{key:1},[(0,l.eW)((0,o.v_)(e.$t("only_characters_underscore")),1)],64)):(0,l.Q3)("",!0),"duplicate_error"==e.errors["name"]?((0,l.uX)(),(0,l.CE)(l.FK,{key:2},[(0,l.eW)((0,o.v_)(e.$t("duplicate_error")),1)],64)):(0,l.Q3)("",!0)])),_:1})])),_:1})):(0,l.Q3)("",!0)])),_:1},8,["label","modelValue","class"])])]),(0,l.Lk)("div",L,[(0,l.Lk)("div",F,[(0,l.bF)(b,{outlined:"",clearable:"",modelValue:e.model["sub_org_id"],"onUpdate:modelValue":t[1]||(t[1]=t=>e.model["sub_org_id"]=t),"use-input":"",options:e.filterSubOrgsList,onFilter:e.filterSubOrgslistEvent,label:e.$t("sub_organizations"),loading:e.sub_org_list_loading,class:"select-box","emit-value":"","map-options":""},null,8,["modelValue","options","onFilter","label","loading"])])])])),_:1}),(0,l.bF)(f,{align:"right"},{default:(0,l.k6)((()=>[(0,l.bF)(p,{type:"submit",class:"q-mr-sm",label:e.$t("save")},null,8,["label"])])),_:1}),(0,l.bF)(v,{showing:e.loading},{default:(0,l.k6)((()=>[E])),_:1},8,["showing"])],32)])),_:1})}var A=s(68450),V=function(e,t,s,l){function o(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,a){function i(e){try{r(l.next(e))}catch(t){a(t)}}function n(e){try{r(l["throw"](e))}catch(t){a(t)}}function r(e){e.done?s(e.value):o(e.value).then(i,n)}r((l=l.apply(e,t||[])).next())}))};const S=(0,l.pM)({props:{list_name:{type:String,default:""}},mixins:[g.A],components:{},data(){return{}},mounted:function(){this.init()},methods:{init(){try{this.list_names=Object.keys(this.list_of_values),this.resetModel()}catch(e){}},resetModel(){this.model["name"]="",this.resetErrors()},resetErrors(){for(const[e,t]of Object.entries(this.model))this.errors[e]=""},submitNewColumFrom(){return V(this,void 0,void 0,(function*(){try{if(!this.validateRow())return;this.loading=!0,yield this.saveNewRow();const e=new CustomEvent("row_added",{});document.dispatchEvent(e),this.showSuccessToast("Record Created successfully")}catch(e){const t=b.t.getErrorMessage(e);this.showErrorToast(t)}finally{this.loading=!1}}))},saveNewRow(){return V(this,void 0,void 0,(function*(){const e={};e["name"]=this.model["name"],e["label"]=this.model["label"],this.model["sub_org_id"]&&(e["sub_org_id"]=this.model["sub_org_id"]);const t=yield _.tA.createList(e);if(0==t.success)throw t.message;this.resetModel()}))},validateRow(){let e=!0;return this.resetErrors(),this.validateName()||(e=!1),e},validateName(){return this.model["name"]&&0!=this.model["name"].length?(0,A.SW)(this.model["name"])?!this.list_names.includes(this.model["name"])||(this.errors["name"]="duplicate_error",!1):(this.errors["name"]="only_characters_underscore",!1):(this.errors["name"]="required",!1)},filterSubOrgslistEvent(e,t,s){t(e?()=>{const t=e.toLowerCase();this.filterSubOrgsList=this.subOrgList.filter((e=>e.label.toLowerCase().indexOf(t)>-1))}:()=>{this.filterSubOrgsList=this.subOrgList})}},setup(){const e=(0,v.yM)(),{list_of_values:t,processing:s}=(0,m.bP)(e),{getLists:l}=e,o=(0,v.cY)(),a=(0,h.KR)(o.subOrgList),{subOrgList:i,sub_org_list_loading:n}=(0,m.bP)(o);return{subOrgList:i,filterSubOrgsList:a,sub_org_list_loading:n,getLists:l,list_of_values:t,processing:s,model:(0,h.KR)({}),errors:(0,h.KR)({}),loading:(0,h.KR)(!1),list_names:(0,h.KR)([])}}});var Q=s(12807),q=s(23316),x=s(36914),R=s(39150),D=s(56384),O=s(44189),I=s(67837),K=s(50492),$=s(97410),X=s(94940),N=s(62669),T=s(39035),U=s(88672),M=s(98582),W=s.n(M);const z=(0,Q.A)(S,[["render",C],["__scopeId","data-v-4dbfc8e9"]]),P=z;W()(S,"components",{QCard:q.A,QToolbar:x.A,QToolbarTitle:R.A,QBtn:D.A,QCardSection:O.A,QInput:I.A,QIcon:K.A,QTooltip:$.A,QSelect:X.A,QCardActions:N.A,QInnerLoading:T.A}),W()(S,"directives",{ClosePopup:U.A});const j=e=>((0,l.Qi)("data-v-28002278"),e=e(),(0,l.jt)(),e),B={class:"container"},Y={class:"full-width q-pa-md"},J={class:"row q-mb-md"},G={class:"table-header-text"},H=["data-index","draggable","dropzone","onDragstart","onDrop","onDragover"],Z={key:0,class:"cursor-default"},ee={key:1},te={key:0,class:"text-h4"},se={key:1,class:"text-h5"},le={key:2,class:"text-h4"},oe={key:3,class:"text-h4"},ae={key:4,class:"text-h4 action"},ie={class:"text-red"},ne=j((()=>(0,l.Lk)("img",{class:"loading-image",src:"images/loader.gif",alt:"Loading..."},null,-1))),re={class:"text-weight-bold"},de={class:"text-weight-bold"};function ue(e,t,s,i,n,r){const d=(0,l.g2)("q-space"),u=(0,l.g2)("f-btn"),c=(0,l.g2)("q-badge"),m=(0,l.g2)("q-item-section"),g=(0,l.g2)("q-item"),h=(0,l.g2)("q-separator"),b=(0,l.g2)("q-list"),_=(0,l.g2)("q-menu"),p=(0,l.g2)("q-btn"),f=(0,l.g2)("q-markup-table"),v=(0,l.g2)("q-inner-loading"),y=(0,l.g2)("q-toolbar-title"),w=(0,l.g2)("q-toolbar"),k=(0,l.g2)("CreateValues"),L=(0,l.g2)("q-card"),F=(0,l.g2)("q-dialog"),E=(0,l.g2)("editValue"),C=(0,l.gN)("close-popup");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",B,[(0,l.Lk)("div",Y,[(0,l.Lk)("div",J,[(0,l.bF)(d),(0,l.bF)(u,{label:e.$t("pages.settings.master_data_lookup.add_row"),onClick:t[0]||(t[0]=t=>e.show_create_dialog=!0)},null,8,["label"])]),(0,l.bF)(f,{flat:"",class:"dashboard-table-style back-white",id:"list_values_table"},{default:(0,l.k6)((()=>[(0,l.Lk)("thead",null,[(0,l.Lk)("tr",G,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.table_columns,((s,i)=>((0,l.uX)(),(0,l.CE)("th",{key:s.name,"data-index":i,draggable:e.canDragDropColumn(s),dropzone:e.canDragDropColumn(s),direction:"horizontal",onDragstart:t=>e.onDragStart(t,e.table_columns,i),onDrop:(0,a.D$)((t=>e.handleDrop(t,i)),["prevent"]),onDragover:(0,a.D$)((t=>e.onDragOver(t,i)),["prevent"]),onDragenter:t[1]||(t[1]=(0,a.D$)(((...t)=>e.onDragEnter&&e.onDragEnter(...t)),["prevent"])),onDragleave:t[2]||(t[2]=(0,a.D$)(((...t)=>e.onDragLeave&&e.onDragLeave(...t)),["prevent"])),style:(0,o.Tr)([(null===s||void 0===s?void 0:s.style)||"",{cursor:e.getIsDragging?"pointer":"move"}]),class:(0,o.C4)((null===s||void 0===s?void 0:s.class)||"")},["actions"==s.name?((0,l.uX)(),(0,l.CE)("span",Z,(0,o.v_)(e.$t(s.label)),1)):((0,l.uX)(),(0,l.CE)("span",ee,(0,o.v_)(e.$t(s.label)),1))],46,H)))),128))])]),(0,l.Lk)("tbody",null,[e.list_of_values[e.list_name]["lov_items"]?((0,l.uX)(!0),(0,l.CE)(l.FK,{key:0},(0,l.pI)(e.list_of_values[e.list_name]["lov_items"],((s,i)=>((0,l.uX)(),(0,l.CE)("tr",{key:i},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.table_columns,(i=>((0,l.uX)(),(0,l.CE)(l.FK,{key:i.name},["Value"==i.name?((0,l.uX)(),(0,l.CE)("td",te,(0,o.v_)(s["value"]),1)):"label"==i.name?((0,l.uX)(),(0,l.CE)("td",se,(0,o.v_)(s["label"]),1)):"sub_organizations"==i.name?((0,l.uX)(),(0,l.CE)("td",le,(0,o.v_)(e.getSubOrgName(s["sub_org_id"])),1)):"Synonyms"==i.name?((0,l.uX)(),(0,l.CE)("td",oe,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s["synonyms"],(e=>((0,l.uX)(),(0,l.Wv)(c,{key:e,rounded:"",color:"primary",class:"q-mr-sm badge"},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e),1)])),_:2},1024)))),128))])):((0,l.uX)(),(0,l.CE)("td",ae,["DEFAULT"!=s["org_id"]?((0,l.uX)(),(0,l.Wv)(p,{key:0,flat:"",dense:"",round:"",onClick:t[3]||(t[3]=(0,a.D$)((()=>{}),["stop","prevent"])),icon:"more_horiz"},{default:(0,l.k6)((()=>[(0,l.bF)(_,{"auto-close":"","transition-show":"jump-down","transition-hide":"jump-up",anchor:"bottom middle",self:"top middle"},{default:(0,l.k6)((()=>[(0,l.bF)(b,{dense:"",style:{"min-width":"100px"}},{default:(0,l.k6)((()=>[(0,l.bF)(g,{clickable:""},{default:(0,l.k6)((()=>[(0,l.bF)(m,{onClick:t=>e.editRow(s)},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.$t("edit")),1)])),_:2},1032,["onClick"])])),_:2},1024),(0,l.bF)(h,{inset:""}),(0,l.bF)(g,{clickable:""},{default:(0,l.k6)((()=>[(0,l.bF)(m,{onClick:t=>e.deleteRow(s)},{default:(0,l.k6)((()=>[(0,l.Lk)("span",ie,(0,o.v_)(e.$t("delete")),1)])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)):(0,l.Q3)("",!0)]))],64)))),128))])))),128)):(0,l.Q3)("",!0)])])),_:1})]),(0,l.bF)(v,{showing:e.loading,class:"z-index-2"},{default:(0,l.k6)((()=>[ne])),_:1},8,["showing"])]),(0,l.bF)(F,{modelValue:e.show_create_dialog,"onUpdate:modelValue":t[4]||(t[4]=t=>e.show_create_dialog=t),persistent:"",onKeydown:t[5]||(t[5]=(0,a.jR)((t=>e.show_create_dialog=!1),["esc"]))},{default:(0,l.k6)((()=>[(0,l.bF)(L,{style:{"min-height":"20vh","min-width":"470px"}},{default:(0,l.k6)((()=>[(0,l.bF)(w,{class:"text-white secondary-toolbar"},{default:(0,l.k6)((()=>[(0,l.bF)(y,null,{default:(0,l.k6)((()=>[(0,l.Lk)("span",re,(0,o.v_)(e.$t("create_values")),1)])),_:1}),(0,l.bo)((0,l.bF)(p,{flat:"",round:"",dense:"",icon:"close",onClick:e.show_create_dialog},null,8,["onClick"]),[[C]])])),_:1}),(0,l.bF)(k,{list_name:e.list_name},null,8,["list_name"])])),_:1})])),_:1},8,["modelValue"]),(0,l.bF)(F,{modelValue:e.show_edit_dialog,"onUpdate:modelValue":t[7]||(t[7]=t=>e.show_edit_dialog=t),persistent:"",onKeydown:t[8]||(t[8]=(0,a.jR)((t=>e.show_edit_dialog=!1),["esc"]))},{default:(0,l.k6)((()=>[(0,l.bF)(L,{style:{"min-height":"15vh","min-width":"10vw"}},{default:(0,l.k6)((()=>[(0,l.bF)(w,{class:"text-white secondary-toolbar"},{default:(0,l.k6)((()=>[(0,l.bF)(y,null,{default:(0,l.k6)((()=>[(0,l.Lk)("span",de,(0,o.v_)(e.$t("Edit Value")),1)])),_:1}),(0,l.bo)((0,l.bF)(p,{flat:"",round:"",dense:"",icon:"close",onClick:t[6]||(t[6]=t=>e.show_edit_dialog=!1)},null,512),[[C]])])),_:1}),(0,l.bF)(E,{list_name:e.list_name,model:e.edit_model},null,8,["list_name","model"])])),_:1})])),_:1},8,["modelValue"])],64)}const ce=e=>((0,l.Qi)("data-v-3b6e811a"),e=e(),(0,l.jt)(),e),me={class:"align-items-end"},ge={class:"row full-width mb-10 mt-8",style:{"margin-bottom":"20px"}},he={class:"full-width"},be={class:"row full-width mb-10 mt-8",style:{"margin-bottom":"20px"}},_e={class:"first-flex-item"},pe={class:"flex-item"},fe={class:"flex-item"},ve=ce((()=>(0,l.Lk)("img",{class:"loading-image",src:"images/loader.gif",alt:"Loading..."},null,-1)));function ye(e,t,s,i,n,r){const d=(0,l.g2)("q-select"),u=(0,l.g2)("q-tooltip"),c=(0,l.g2)("q-icon"),m=(0,l.g2)("q-input"),g=(0,l.g2)("q-card-section"),h=(0,l.g2)("q-btn"),b=(0,l.g2)("q-card-actions"),_=(0,l.g2)("q-inner-loading");return(0,l.uX)(),(0,l.CE)("form",{onSubmit:t[0]||(t[0]=(0,a.D$)(((...t)=>e.submitEditFrom&&e.submitEditFrom(...t)),["prevent","stop"])),class:"q-pt-md q-pb-lg"},[(0,l.Lk)("div",me,[(0,l.bF)(g,{class:"q-pt-none"},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.values,((t,s)=>((0,l.uX)(),(0,l.CE)(l.FK,{key:s},[(0,l.Lk)("div",ge,[(0,l.Lk)("div",he,[(0,l.bF)(d,{outlined:"",clearable:"",modelValue:t["sub_org_id"],"onUpdate:modelValue":e=>t["sub_org_id"]=e,"use-input":"",options:e.filterSubOrgsList,onFilter:e.filterSubOrgslistEvent,label:e.$t("sub_organizations"),class:"select-box",loading:e.sub_org_list_loading,"emit-value":"","map-options":""},null,8,["modelValue","onUpdate:modelValue","options","onFilter","label","loading"])])]),(0,l.Lk)("div",be,[(0,l.Lk)("div",_e,[(0,l.bF)(m,{label:"name",dense:"",outlined:"",modelValue:t["value"],"onUpdate:modelValue":e=>t["value"]=e,autofocus:"",class:(0,o.C4)("full-width "+(t["validate"]?"column-error-border":""))},{append:(0,l.k6)((()=>[1==t["validate"]?((0,l.uX)(),(0,l.Wv)(c,{key:0,flat:"",dense:"",name:"error",size:"24px",color:"red"},{default:(0,l.k6)((()=>[(0,l.bF)(u,{class:"bg-red line-error-tooltip"},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.$t("pages.api_user_messages.FIELD_REQUIRED")),1)])),_:1})])),_:1})):(0,l.Q3)("",!0)])),_:2},1032,["modelValue","onUpdate:modelValue","class"])]),(0,l.Lk)("div",pe,[(0,l.bF)(m,{label:"label",dense:"",outlined:"",modelValue:t["label"],"onUpdate:modelValue":e=>t["label"]=e,autofocus:"",class:(0,o.C4)("full-width "+(t["validate"]?"column-error-border":""))},{append:(0,l.k6)((()=>[1==t["validate"]?((0,l.uX)(),(0,l.Wv)(c,{key:0,flat:"",dense:"",name:"error",size:"24px",color:"red"},{default:(0,l.k6)((()=>[(0,l.bF)(u,{class:"bg-red line-error-tooltip"},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.$t("pages.api_user_messages.FIELD_REQUIRED")),1)])),_:1})])),_:1})):(0,l.Q3)("",!0)])),_:2},1032,["modelValue","onUpdate:modelValue","class"])]),(0,l.Lk)("div",fe,[(0,l.bF)(d,{dense:"",label:"Synonyms",outlined:"",modelValue:t["synonyms"],"onUpdate:modelValue":e=>t["synonyms"]=e,"use-input":"","use-chips":"",multiple:"","hide-dropdown-icon":"","input-debounce":"0",onNewValue:e.createSynonyms},{default:(0,l.k6)((()=>[(0,l.bF)(u,null,{default:(0,l.k6)((()=>[(0,l.eW)("Press enter when done typing")])),_:1})])),_:2},1032,["modelValue","onUpdate:modelValue","onNewValue"])])])],64)))),128))])),_:1})]),(0,l.bF)(b,{align:"right",class:"action-buttons"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.bF)(h,{type:"submit",color:"primary",class:"float-right",label:e.$t("save")},null,8,["label"])])])),_:1}),(0,l.bF)(_,{showing:e.loading},{default:(0,l.k6)((()=>[ve])),_:1},8,["showing"])],32)}var we=function(e,t,s,l){function o(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,a){function i(e){try{r(l.next(e))}catch(t){a(t)}}function n(e){try{r(l["throw"](e))}catch(t){a(t)}}function r(e){e.done?s(e.value):o(e.value).then(i,n)}r((l=l.apply(e,t||[])).next())}))};const ke=(0,l.pM)({props:{list_name:{type:String,default:""},model:{}},watch:{},mixins:[g.A],components:{},data(){return{}},mounted:function(){this.init()},methods:{init(){try{this.editValue()}catch(e){}},editValue(){const e=Object.assign(this.model,{validate:!1,error:""});this.values.push(e)},createSynonyms(e,t){t(e)},deleteRow(e){0!=e&&this.values.splice(e,1)},resetErrors(){Array.from(this.values).forEach(((e,t)=>{e["validate"]=!1}))},submitEditFrom(){return we(this,void 0,void 0,(function*(){try{if(!this.validateForm())return;this.loading=!0,yield this.saveAll(),this.showSuccessToast("Record updated successfully"),yield this.getValuesForList(this.list_name);const e=new CustomEvent("values_added",{});document.dispatchEvent(e)}catch(e){const t=b.t.getErrorMessage(e);this.showErrorToast(t)}finally{this.loading=!1}}))},saveAll(){return we(this,void 0,void 0,(function*(){try{this.errors=[];for(let e of this.values)yield this.saveRow(e);if(this.errors.length>0)throw this.errors}catch(e){const t=b.t.getErrorMessage(e);this.showErrorToast(t)}}))},saveRow(e){return we(this,void 0,void 0,(function*(){try{let t={};t["name"]=this.list_name,t["value"]=e["value"],t["label"]=e["label"],t["id"]=e["id"],t["sub_org_id"]=e["sub_org_id"],e["synonyms"]&&(t["synonyms"]=JSON.stringify(e["synonyms"]));const s=yield _.tA.editValueForlist(t);if(0==s.success)throw s.message}catch(t){const e=b.t.getErrorMessage(t);this.errors.push(e)}}))},validateForm(){let e=!0;return this.resetErrors(),Array.from(this.values).forEach(((t,s)=>{this.validateName(t)||(e=!1)})),e},validateName(e){return!(!e["value"]||0==e["value"].length)||(e["validate"]=!0,!1)}},setup(){const e=(0,v.yM)(),{getValuesForList:t}=e,s=(0,v.cY)(),l=(0,h.KR)(s.subOrgList),{subOrgList:o,sub_org_list_loading:a}=(0,m.bP)(s);return{subOrgList:o,filterSubOrgsList:l,sub_org_list_loading:a,getValuesForList:t,loading:(0,h.KR)(!1),list_names:(0,h.KR)([]),values:(0,h.KR)([]),errors:(0,h.KR)([])}}}),Le=(0,Q.A)(ke,[["render",ye],["__scopeId","data-v-3b6e811a"]]),Fe=Le;W()(ke,"components",{QCardSection:O.A,QSelect:X.A,QInput:I.A,QIcon:K.A,QTooltip:$.A,QCardActions:N.A,QBtn:D.A,QInnerLoading:T.A});const Ee=e=>((0,l.Qi)("data-v-4ec853f4"),e=e(),(0,l.jt)(),e),Ce={class:"align-items"},Ae={class:"row full-width mb-10 mt-8",style:{"margin-bottom":"20px"}},Ve={class:"full-width"},Se={class:"text-caption"},Qe={class:"row full-width mb-10 mt-8",style:{"margin-bottom":"20px"}},qe={class:"full-width"},xe={class:"input-fields"},Re={class:"f-input-box"},De={class:"input-box"},Oe={class:"input-box"},Ie={class:"trash-icon-container"},Ke=Ee((()=>(0,l.Lk)("img",{width:"20",height:"20",src:"images/trash-bin-default.svg",alt:""},null,-1))),$e=Ee((()=>(0,l.Lk)("img",{class:"loading-image",src:"images/loader.gif",alt:"Loading..."},null,-1)));function Xe(e,t,s,i,n,r){const d=(0,l.g2)("q-select"),u=(0,l.g2)("q-tooltip"),c=(0,l.g2)("q-icon"),m=(0,l.g2)("q-input"),g=(0,l.g2)("q-btn"),h=(0,l.g2)("q-card-section"),b=(0,l.g2)("q-card-actions"),_=(0,l.g2)("q-inner-loading");return(0,l.uX)(),(0,l.CE)("form",{onSubmit:t[3]||(t[3]=(0,a.D$)(((...t)=>e.submitNewColumFrom&&e.submitNewColumFrom(...t)),["prevent","stop"])),class:"q-pt-md q-pb-lg"},[(0,l.Lk)("div",Ce,[(0,l.bF)(h,{class:"q-pt-none"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",Ae,[(0,l.Lk)("div",Ve,[(0,l.bF)(d,{outlined:"",clearable:"",modelValue:e.sub_org_id,"onUpdate:modelValue":t[0]||(t[0]=t=>e.sub_org_id=t),"use-input":"",options:e.filterSubOrgsList,onFilter:e.filterSubOrgslistEvent,label:e.$t("sub_organizations"),loading:e.sub_org_list_loading,class:"select-box","emit-value":"","map-options":""},null,8,["modelValue","options","onFilter","label","loading"])]),(0,l.Lk)("div",null,[(0,l.Lk)("span",Se,(0,o.v_)(e.$t("list_of_values_hint")),1)]),(0,l.Lk)("div",Qe,[(0,l.Lk)("div",qe,(0,o.v_)(e.$t("values")),1)]),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.values,((s,i)=>((0,l.uX)(),(0,l.CE)("div",{key:i,class:"input-row"},[(0,l.Lk)("div",xe,[(0,l.Lk)("div",Re,[(0,l.bF)(m,{dense:"",label:e.$t("name"),outlined:"",modelValue:s["name"],"onUpdate:modelValue":e=>s["name"]=e,autofocus:"",class:(0,o.C4)("full-width "+(s["validate"]?"column-error-border":""))},{append:(0,l.k6)((()=>[1==s["validate"]?((0,l.uX)(),(0,l.Wv)(c,{key:0,flat:"",dense:"",name:"error",size:"24px",color:"red"},{default:(0,l.k6)((()=>[(0,l.bF)(u,{class:"bg-red line-error-tooltip"},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.$t("pages.api_user_messages.FIELD_REQUIRED")),1)])),_:1})])),_:1})):(0,l.Q3)("",!0)])),_:2},1032,["label","modelValue","onUpdate:modelValue","class"])]),(0,l.Lk)("div",De,[(0,l.bF)(m,{dense:"",label:e.$t("label"),outlined:"",modelValue:s["label"],"onUpdate:modelValue":e=>s["label"]=e,autofocus:"",class:(0,o.C4)("full-width "+(s["validate"]?"column-error-border":""))},{append:(0,l.k6)((()=>[1==s["validate"]?((0,l.uX)(),(0,l.Wv)(c,{key:0,flat:"",dense:"",name:"error",size:"24px",color:"red"},{default:(0,l.k6)((()=>[(0,l.bF)(u,{class:"bg-red line-error-tooltip"},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.$t("pages.api_user_messages.FIELD_REQUIRED")),1)])),_:1})])),_:1})):(0,l.Q3)("",!0)])),_:2},1032,["label","modelValue","onUpdate:modelValue","class"])]),(0,l.Lk)("div",Oe,[(0,l.bF)(d,{dense:"",class:"full-width",label:e.$t("synonyms"),outlined:"",modelValue:s["synonyms"],"onUpdate:modelValue":e=>s["synonyms"]=e,"use-input":"","use-chips":"",multiple:"","hide-dropdown-icon":"","input-debounce":"0",onNewValue:e.createSynonyms},null,8,["label","modelValue","onUpdate:modelValue","onNewValue"])])]),(0,l.Lk)("div",Ie,[0!==i?((0,l.uX)(),(0,l.Wv)(g,{key:0,flat:"",color:"primary no-padding-left-right",onClick:[t[1]||(t[1]=(0,a.D$)((()=>{}),["stop"])),t=>e.deleteRow(i)]},{default:(0,l.k6)((()=>[Ke])),_:2},1032,["onClick"])):(0,l.Q3)("",!0)])])))),128))])])),_:1})]),(0,l.bF)(b,{align:"right",class:"action-buttons"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.bF)(g,{class:"on-left",color:"primary",label:e.$t("add_more_values"),onClick:t[2]||(t[2]=t=>e.addNewLine())},null,8,["label"]),(0,l.bF)(g,{type:"submit",color:"primary",label:e.$t("save")},null,8,["label"])])])),_:1}),(0,l.bF)(_,{showing:e.loading},{default:(0,l.k6)((()=>[$e])),_:1},8,["showing"])],32)}var Ne=function(e,t,s,l){function o(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,a){function i(e){try{r(l.next(e))}catch(t){a(t)}}function n(e){try{r(l["throw"](e))}catch(t){a(t)}}function r(e){e.done?s(e.value):o(e.value).then(i,n)}r((l=l.apply(e,t||[])).next())}))};const Te=(0,l.pM)({props:{list_name:{type:String,default:""}},watch:{},mixins:[g.A],components:{},data(){return{}},mounted:function(){this.init()},methods:{init(){try{this.addNewLine()}catch(e){}},addNewLine(){const e=Object.assign({},{name:"",label:"",synonyms:null,validate:!1,error:""});this.values.push(e)},createSynonyms(e,t){t(e)},deleteRow(e){0!=e&&this.values.splice(e,1)},resetErrors(){Array.from(this.values).forEach(((e,t)=>{e["validate"]=!1}))},submitNewColumFrom(){return Ne(this,void 0,void 0,(function*(){try{if(!this.validateForm())return;this.loading=!0,yield this.saveAll(),this.showSuccessToast("Record(s) Created successfully"),yield this.getValuesForList(this.list_name);const e=new CustomEvent("values_added",{});document.dispatchEvent(e)}catch(e){const t=b.t.getErrorMessage(e);this.showErrorToast(t)}finally{this.loading=!1}}))},saveAll(){return Ne(this,void 0,void 0,(function*(){try{this.errors=[];for(let e of this.values)yield this.saveNewRow(e);if(this.errors.length>0)throw this.errors}catch(e){const t=b.t.getErrorMessage(e);this.showErrorToast(t)}}))},saveNewRow(e){return Ne(this,void 0,void 0,(function*(){try{let t={};t["name"]=this.list_name,t["value"]=e["name"],t["label"]=e["label"],t["sub_org_id"]=this.sub_org_id,e["synonyms"]&&(t["synonyms"]=JSON.stringify(e["synonyms"]));const s=yield _.tA.createValuesForlist(t);if(0==s.success)throw s.message}catch(t){const e=b.t.getErrorMessage(t);this.errors.push(e)}}))},validateForm(){let e=!0;return this.resetErrors(),Array.from(this.values).forEach(((t,s)=>{this.validateName(t)||(e=!1)})),e},validateName(e){return!(!e["name"]||0==e["name"].length)||(e["validate"]=!0,!1)},filterSubOrgslistEvent(e,t,s){t(e?()=>{const t=e.toLowerCase();this.filterSubOrgsList=this.subOrgList.filter((e=>e.label.toLowerCase().indexOf(t)>-1))}:()=>{this.filterSubOrgsList=this.subOrgList})}},setup(){const e=(0,v.yM)(),{getValuesForList:t}=e,s=(0,v.cY)(),l=(0,h.KR)(s.subOrgList),{subOrgList:o,sub_org_list_loading:a}=(0,m.bP)(s);return{subOrgList:o,filterSubOrgsList:l,sub_org_list_loading:a,getValuesForList:t,loading:(0,h.KR)(!1),list_names:(0,h.KR)([]),values:(0,h.KR)([]),errors:(0,h.KR)([]),sub_org_id:(0,h.KR)("")}}}),Ue=(0,Q.A)(Te,[["render",Xe],["__scopeId","data-v-4ec853f4"]]),Me=Ue;W()(Te,"components",{QCardSection:O.A,QSelect:X.A,QInput:I.A,QIcon:K.A,QTooltip:$.A,QBtn:D.A,QCardActions:N.A,QInnerLoading:T.A});var We=s(10739),ze=s(45022),Pe=function(e,t,s,l){function o(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,a){function i(e){try{r(l.next(e))}catch(t){a(t)}}function n(e){try{r(l["throw"](e))}catch(t){a(t)}}function r(e){e.done?s(e.value):o(e.value).then(i,n)}r((l=l.apply(e,t||[])).next())}))};const je=(0,l.pM)({props:{list_name:{type:String,default:""}},mixins:[g.A,We.A],components:{CreateValues:Me,editValue:Fe},data(){return{}},mounted:function(){this.init(),this.getSavedColumns(),this.initDragDropColumns("list_values_table","label",["actions"]),document.addEventListener("list_values_table-column-drop",this.onDropColumns),document.addEventListener("values_added",this.rowAdded)},unmounted(){document.removeEventListener("values_added",this.rowAdded),document.removeEventListener("list_values_table-column-drop",this.onDropColumns)},methods:{init(){return Pe(this,void 0,void 0,(function*(){try{yield this.getValuesForList(this.list_name),this.prepareColumns()}catch(e){}}))},rowAdded(e){this.show_create_dialog=!1,this.show_edit_dialog=!1},getSavedColumns(){const e=ze.A.getItem("LIST_VALUES_SETTING_COLUMNS");e&&(this.table_columns=JSON.parse(e))},onDropColumns(){ze.A.set("LIST_VALUES_SETTING_COLUMNS",JSON.stringify(this.table_columns))},prepareColumns(){this.columns.push({name:"Value",label:"Value",field:"Value",align:"left"}),this.columns.push({name:"action",label:this.$t("action"),field:"action",align:"right"})},deleteRow(e){return Pe(this,void 0,void 0,(function*(){try{this.loading=!0;const t={id:e["id"]};yield _.tA.deleteValue(t);delete this.list_of_values[this.list_name]["lov_items"][e["value"]]}catch(t){const e=b.t.getErrorMessage(t);this.showErrorToast(e)}finally{this.loading=!1}}))},editRow(e){this.edit_model=e,this.show_edit_dialog=!0},getSubOrgName(e){if(!e)return"";const t=this.subOrgList.find((t=>t.value===e));return t&&String(t.label)||""}},setup(){const e=(0,v.yM)(),{list_of_values:t,processing:s,table_columns:l}=(0,m.bP)(e),{getValuesForList:o}=e,a=(0,v.cY)(),{subOrgList:i}=(0,m.bP)(a);let n=[];return{table_columns:l,subOrgList:i,getValuesForList:o,list_of_values:t,processing:s,columns:(0,h.KR)(n),show_create_dialog:(0,h.KR)(!1),tableRows:(0,h.KR)([]),loading:(0,h.KR)(!1),edit_model:(0,h.KR)({}),show_edit_dialog:(0,h.KR)(!1)}}});var Be=s(93676),Ye=s(857),Je=s(23954),Ge=s(84436),He=s(53999),Ze=s(90124),et=s(25173),tt=s(10386),st=s(82156);const lt=(0,Q.A)(je,[["render",ue],["__scopeId","data-v-28002278"]]),ot=lt;W()(je,"components",{QSpace:Be.A,QMarkupTable:Ye.A,QBadge:Je.A,QBtn:D.A,QMenu:Ge.A,QList:He.A,QItem:Ze.A,QItemSection:et.A,QSeparator:tt.A,QInnerLoading:T.A,QDialog:st.A,QCard:q.A,QToolbar:x.A,QToolbarTitle:R.A}),W()(je,"directives",{ClosePopup:U.A});var at=function(e,t,s,l){function o(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,a){function i(e){try{r(l.next(e))}catch(t){a(t)}}function n(e){try{r(l["throw"](e))}catch(t){a(t)}}function r(e){e.done?s(e.value):o(e.value).then(i,n)}r((l=l.apply(e,t||[])).next())}))};const it=(0,l.pM)({props:{},mixins:[g.A],components:{SubHeader:p.A,BackToSettings:f.A,valuesOfList:ot,CreateList:P},data(){return{}},mounted:function(){this.init(),document.addEventListener("row_added",this.rowAdded)},unmounted(){document.removeEventListener("row_added",this.rowAdded)},methods:{init(){return at(this,void 0,void 0,(function*(){try{this.processing=!0,yield this.getLists(),yield this.getSubOrgsList()}catch(e){}finally{this.processing=!1}}))},deleteRow(e){return at(this,void 0,void 0,(function*(){try{this.processing=!0;const t=yield _.tA.deleteList(e);if(0==t.success)throw t.message;yield this.getLists(),this.showSuccessToast(this.$t("pages.messages.DELETED_SUCCESSFULLY"))}catch(t){const e=b.t.getErrorMessage(t);this.showErrorToast(e)}finally{this.processing=!1}}))},rowAdded(e){this.getLists(),this.create_new_list=!1}},setup(){const e=(0,v.yM)(),{processing:t,list_of_values:s}=(0,m.bP)(e),{getLists:l}=e,o=(0,v.cY)(),{getSubOrgsList:a}=o;return{getLists:l,getSubOrgsList:a,processing:t,list_of_values:s,tab:(0,h.KR)("list_of_values"),create_new_list:(0,h.KR)(!1)}}});var nt=s(88841);const rt=(0,Q.A)(it,[["render",c]]),dt=rt;W()(it,"components",{QList:He.A,QSeparator:tt.A,QExpansionItem:nt.A,QIcon:K.A,QSpace:Be.A,QItemSection:et.A,QCard:q.A,QCardSection:O.A,QDialog:st.A,QInnerLoading:T.A})}}]);