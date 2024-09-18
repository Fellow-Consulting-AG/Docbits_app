"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[588],{90588:(e,t,o)=>{o.r(t),o.d(t,{default:()=>ce});var l=o(61758),i=o(58790),s=o(29104);const r={class:"__bg_wrapper container text-color-white settings-container"},n={class:"q-pa-md"},a={class:"container"},u={class:"full-width q-pa-md"},p={class:"row q-mb-md"},d={class:"table-header-text"},c={class:"text-left"},g={class:"text-right"},_={class:"q-td text-left"},b={class:"q-td text-right"},h={class:"text-red"},m={class:"q-td text-left"},f={class:"q-td text-right"},k={class:"text-red"},v={class:"q-ml-sm"};function F(e,t,o,F,L,A){const w=(0,l.g2)("SubHeader"),C=(0,l.g2)("BackToSettings"),x=(0,l.g2)("q-avatar"),G=(0,l.g2)("q-item-section"),q=(0,l.g2)("q-space"),U=(0,l.g2)("f-btn"),y=(0,l.g2)("q-icon"),Q=(0,l.g2)("q-item"),S=(0,l.g2)("q-list"),V=(0,l.g2)("q-menu"),D=(0,l.g2)("q-btn"),$=(0,l.g2)("q-markup-table"),M=(0,l.g2)("q-card"),O=(0,l.g2)("q-expansion-item"),T=(0,l.g2)("q-separator"),E=(0,l.g2)("Create"),X=(0,l.g2)("q-dialog"),j=(0,l.g2)("q-card-section"),I=(0,l.g2)("q-card-actions"),K=(0,l.g2)("Loader"),P=(0,l.gN)("close-popup");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(w,{name:"supplier_group_mapping",label:"User and Supplier Group Mapping"}),(0,l.bF)(C),(0,l.Lk)("div",r,[(0,l.Lk)("div",n,[(0,l.bF)(S,{bordered:"",class:"rounded-borders"},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.supplier_group_mapping_list,(o=>((0,l.uX)(),(0,l.CE)("div",{key:o.id},[(0,l.bF)(O,null,{header:(0,l.k6)((()=>[(0,l.bF)(G,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(x,{icon:"perm_identity",color:"primary","text-color":"white"})])),_:1}),(0,l.bF)(G,null,{default:(0,l.k6)((()=>{var t,s;return[(0,l.Lk)("span",null,[(0,l.eW)((0,i.v_)(o.title)+" ",1),(0,l.Lk)("span",null,"( "+(0,i.v_)(e.userAndGroupCount(null===(t=o.users)||void 0===t?void 0:t.length,null===(s=o.groups)||void 0===s?void 0:s.length))+" )",1)])]})),_:2},1024)])),default:(0,l.k6)((()=>[(0,l.bF)(M,null,{default:(0,l.k6)((()=>[(0,l.Lk)("div",a,[(0,l.Lk)("div",u,[(0,l.Lk)("div",p,[(0,l.bF)(q),(0,l.bF)(U,{icon:"add",label:e.$t("new"),onClick:t=>e.openDialog(o.id,o.users,o.groups)},null,8,["label","onClick"])]),(0,l.bF)($,{flat:"",class:"back-white"},{default:(0,l.k6)((()=>[(0,l.Lk)("thead",null,[(0,l.Lk)("tr",d,[(0,l.Lk)("th",c,(0,i.v_)(e.$t("name")),1),(0,l.Lk)("th",g,(0,i.v_)(e.$t("actions")),1)])]),(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(o.groups,(r=>((0,l.uX)(),(0,l.CE)("tr",{key:r},[(0,l.Lk)("td",_,[(0,l.eW)((0,i.v_)(r.name)+" ",1),(0,l.bF)(y,{name:"people",size:"16px",class:"q-ml-sm"})]),(0,l.Lk)("td",b,[(0,l.bF)(D,{flat:"",dense:"",round:"",onClick:t[0]||(t[0]=(0,s.D$)((()=>{}),["stop","prevent"])),icon:"more_horiz"},{default:(0,l.k6)((()=>[(0,l.bF)(V,{"auto-close":"","transition-show":"jump-down","transition-hide":"jump-up",anchor:"bottom middle",self:"top middle"},{default:(0,l.k6)((()=>[(0,l.bF)(S,{dense:"",style:{"min-width":"100px"}},{default:(0,l.k6)((()=>[(0,l.bF)(Q,{clickable:""},{default:(0,l.k6)((()=>[(0,l.bF)(G,{onClick:t=>e.openDeleteDialog(o.id,r.id,"group")},{default:(0,l.k6)((()=>[(0,l.Lk)("span",h,(0,i.v_)(e.$t("delete")),1)])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])])))),128)),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(o.users,(r=>((0,l.uX)(),(0,l.CE)("tr",{key:r},[(0,l.Lk)("td",m,(0,i.v_)(r.first_name)+" "+(0,i.v_)(r.last_name),1),(0,l.Lk)("td",f,[(0,l.bF)(D,{flat:"",dense:"",round:"",onClick:t[1]||(t[1]=(0,s.D$)((()=>{}),["stop","prevent"])),icon:"more_horiz"},{default:(0,l.k6)((()=>[(0,l.bF)(V,{"auto-close":"","transition-show":"jump-down","transition-hide":"jump-up",anchor:"bottom middle",self:"top middle"},{default:(0,l.k6)((()=>[(0,l.bF)(S,{dense:"",style:{"min-width":"100px"}},{default:(0,l.k6)((()=>[(0,l.bF)(Q,{clickable:""},{default:(0,l.k6)((()=>[(0,l.bF)(G,{onClick:t=>e.openDeleteDialog(o.id,r.user_id,"user")},{default:(0,l.k6)((()=>[(0,l.Lk)("span",k,(0,i.v_)(e.$t("delete")),1)])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])])))),128))])])),_:2},1024)])])])),_:2},1024)])),_:2},1024),(0,l.bF)(T)])))),128))])),_:1})])]),(0,l.bF)(X,{modelValue:e.dialog,"onUpdate:modelValue":t[2]||(t[2]=t=>e.dialog=t)},{default:(0,l.k6)((()=>[(0,l.bF)(E)])),_:1},8,["modelValue"]),(0,l.bF)(X,{modelValue:e.confirmDeleteDialog,"onUpdate:modelValue":t[4]||(t[4]=t=>e.confirmDeleteDialog=t),persistent:""},{default:(0,l.k6)((()=>[(0,l.bF)(M,null,{default:(0,l.k6)((()=>[(0,l.bF)(j,{class:"row",style:{"justify-content":"center",display:"flex"}},{default:(0,l.k6)((()=>[(0,l.bF)(x,{icon:"warning",color:"primary"})])),_:1}),(0,l.bF)(j,{class:"row items-center"},{default:(0,l.k6)((()=>[(0,l.Lk)("span",v,(0,i.v_)(e.$t("pages.messages.msg_delete")),1)])),_:1}),(0,l.bF)(I,{align:"right"},{default:(0,l.k6)((()=>[(0,l.bo)((0,l.bF)(U,{appearance:"cancel",label:e.$t("cancel")},null,8,["label"]),[[P]]),(0,l.bo)((0,l.bF)(U,{appearance:"negative",label:e.$t("delete"),onClick:t[3]||(t[3]=t=>e.deleteUser())},null,8,["label"]),[[P]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.bF)(K)],64)}var L=o(95488),A=o(60894),w=o(94124);const C={class:"text-weight-bold"};function x(e,t,o,s,r,n){const a=(0,l.g2)("q-toolbar-title"),u=(0,l.g2)("q-btn"),p=(0,l.g2)("q-toolbar"),d=(0,l.g2)("q-select"),c=(0,l.g2)("q-card-section"),g=(0,l.g2)("f-btn"),_=(0,l.g2)("q-card-actions"),b=(0,l.g2)("q-card"),h=(0,l.gN)("close-popup");return(0,l.uX)(),(0,l.Wv)(b,{class:"card dialog-container"},{default:(0,l.k6)((()=>[(0,l.bF)(p,{class:"text-white secondary-toolbar"},{default:(0,l.k6)((()=>[(0,l.bF)(a,null,{default:(0,l.k6)((()=>[(0,l.Lk)("span",C,(0,i.v_)(e.$t("user")),1)])),_:1}),(0,l.bo)((0,l.bF)(u,{flat:"",round:"",dense:"",icon:"close"},null,512),[[h]])])),_:1}),(0,l.bF)(c,{class:"row"},{default:(0,l.k6)((()=>[(0,l.bF)(d,{modelValue:e.userOrGroupValue,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.userOrGroupValue=t),e.onUserOrGroupChange],label:e.$t("select_user_or_group"),outlined:"",dense:"","use-input":"",clearable:"","hide-dropdown-icon":"",class:"col-12",options:e.userOrGroupList,"map-options":"","emit-value":""},null,8,["modelValue","label","options","onUpdate:modelValue"]),"group"===e.userOrGroupValue?((0,l.uX)(),(0,l.Wv)(d,{key:0,modelValue:e.group_id,"onUpdate:modelValue":t[1]||(t[1]=t=>e.group_id=t),label:e.$t("select_groups"),outlined:"",dense:"","use-input":"",clearable:"","hide-dropdown-icon":"",onFilter:e.filterGroup,class:"col-12 q-mt-md",options:e.filteredGroupList,"map-options":"","emit-value":""},null,8,["modelValue","label","onFilter","options"])):((0,l.uX)(),(0,l.Wv)(d,{key:1,modelValue:e.user_id,"onUpdate:modelValue":t[2]||(t[2]=t=>e.user_id=t),label:e.$t("user"),outlined:"",dense:"","use-input":"",clearable:"","hide-dropdown-icon":"",onFilter:e.filterFn,class:"col-12 q-mt-md",options:e.filteredUserList,"map-options":"","emit-value":""},null,8,["modelValue","label","onFilter","options"]))])),_:1}),(0,l.bF)(_,{align:"right"},{default:(0,l.k6)((()=>[(0,l.bo)((0,l.bF)(g,{label:e.$t("cancel"),appearance:"cancel"},null,8,["label"]),[[h]]),(0,l.bo)((0,l.bF)(g,{onClick:e.updateUser,label:e.$t("add"),appearance:"add"},null,8,["onClick","label"]),[[h]])])),_:1})])),_:1})}var G=o(38734),q=o(1659),U=o(24622),y=o(23537),Q=function(e,t,o,l){function i(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,s){function r(e){try{a(l.next(e))}catch(t){s(t)}}function n(e){try{a(l["throw"](e))}catch(t){s(t)}}function a(e){e.done?o(e.value):i(e.value).then(r,n)}a((l=l.apply(e,t||[])).next())}))};const S=(0,l.pM)({mixins:[U.A],mounted(){this.getUserlist(),this.getGroupList()},methods:{updateUser(){return Q(this,void 0,void 0,(function*(){try{yield this.addUserSupplierGroupMapping(),this.showSuccessToast(this.t("user_added_to_group"))}catch(e){this.showErrorToast(this.$t("pages.messages.error_internal_occur"))}}))},onUserOrGroupChange(e){this.user_id="",this.group_id=""},filterFn(e,t,o){t(e?()=>{const t=e.toLowerCase();this.filteredUserList=this.list_user_option.filter((e=>e.label.toLowerCase().indexOf(t)>-1))}:()=>{this.filteredUserList=this.list_user_option})},filterGroup(e,t,o){t(e?()=>{const t=e.toLowerCase();this.filteredGroupList=this.list_group_option.filter((e=>e.label.toLowerCase().indexOf(t)>-1))}:()=>{this.filteredGroupList=this.list_group_option})}},setup(){const e=(0,w.jj)(),{getUserlist:t,addUserSupplierGroupMapping:o,getGroupList:l}=e,{list_user_option:i,user_id:s,group_id:r,existing_users:n,userOrGroupList:a,userOrGroupValue:u,list_group_option:p}=(0,q.bP)(e),{t:d}=(0,y.s9)(),c=(0,G.KR)(e.list_user_option),g=(0,G.KR)(e.list_group_option);return{user_id:s,group_id:r,t:d,list_user_option:i,getUserlist:t,getGroupList:l,filteredUserList:c,addUserSupplierGroupMapping:o,userOrGroupList:a,userOrGroupValue:u,list_group_option:p,filteredGroupList:g}}});var V=o(12807),D=o(23316),$=o(36914),M=o(39150),O=o(56384),T=o(44189),E=o(94940),X=o(62669),j=o(67156),I=o(88672),K=o(98582),P=o.n(K);const W=(0,V.A)(S,[["render",x],["__scopeId","data-v-4f8b2cb1"]]),B=W;P()(S,"components",{QCard:D.A,QToolbar:$.A,QToolbarTitle:M.A,QBtn:O.A,QCardSection:T.A,QSelect:E.A,QCardActions:X.A,QField:j.A}),P()(S,"directives",{ClosePopup:I.A});var z=o(64775),H=o(8420),N=o(18505),R=function(e,t,o,l){function i(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,s){function r(e){try{a(l.next(e))}catch(t){s(t)}}function n(e){try{a(l["throw"](e))}catch(t){s(t)}}function a(e){e.done?o(e.value):i(e.value).then(r,n)}a((l=l.apply(e,t||[])).next())}))};const J=(0,l.pM)({el:"#app",mixins:[U.A,N.A],components:{SubHeader:L.A,BackToSettings:A.A,Create:B,Loader:H.A},mounted(){this.getUserSupplierGroupMappingAsSelectList(),this.getUserlist()},watch:{loading:{deep:!0,handler:function(e,t){e?this.showLoading():this.hideLoading()}}},methods:{openDialog(e,t,o){this.dialog=!0,this.supplier_group_id=e,this.existing_users=t,this.existing_group=o,this.userOrGroupValue="",this.user_id="",this.group_id=""},openDeleteDialog(e,t,o){this.confirmDeleteDialog=!0,this.supplier_group_id=e,"user"===o?(this.user_id=t,this.group_id=""):(this.group_id=t,this.user_id="")},deleteUser(){return R(this,void 0,void 0,(function*(){try{yield this.deleteUserSupplierGroupMapping(),this.showSuccessToast(this.t("user_removed_from_group"))}catch(e){const t=z.t.getErrorMessage(e);this.showErrorToast(t)}}))},userAndGroupCount(e,t){return(e||0)+(t||0)}},setup(){const{t:e}=(0,y.s9)(),t=(0,w.jj)(),{getUserSupplierGroupMappingAsSelectList:o,getUserlist:l,deleteUserSupplierGroupMapping:i}=t,{supplier_group_mapping_list:s,loading:r,dialog:n,existing_users:a,existing_group:u,confirmDeleteDialog:p,user_id:d,group_id:c,supplier_group_id:g,userOrGroupValue:_}=(0,q.bP)(t);return{t:e,loading:r,supplier_group_mapping_list:s,getUserSupplierGroupMappingAsSelectList:o,getUserlist:l,dialog:n,existing_users:a,existing_group:u,confirmDeleteDialog:p,deleteUserSupplierGroupMapping:i,user_id:d,group_id:c,supplier_group_id:g,userOrGroupValue:_}}});var Y=o(53999),Z=o(88841),ee=o(25173),te=o(3952),oe=o(93676),le=o(857),ie=o(45262),se=o(50492),re=o(84436),ne=o(90124),ae=o(10386),ue=o(82156),pe=o(42315);const de=(0,V.A)(J,[["render",F],["__scopeId","data-v-6526d768"]]),ce=de;P()(J,"components",{QList:Y.A,QExpansionItem:Z.A,QItemSection:ee.A,QAvatar:te.A,QCard:D.A,QSpace:oe.A,QMarkupTable:le.A,QTd:ie.A,QIcon:se.A,QBtn:O.A,QMenu:re.A,QItem:ne.A,QSeparator:ae.A,QDialog:ue.A,QCardSection:T.A,QCardActions:X.A,QTable:pe.A}),P()(J,"directives",{ClosePopup:I.A})}}]);