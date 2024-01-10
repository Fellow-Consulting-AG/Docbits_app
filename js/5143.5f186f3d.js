"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[5143],{15143:(t,s,e)=>{e.r(s),e.d(s,{default:()=>qt});var i=e(83673),l=e(62323);const a={class:"container settings q-pa-xl"},_={style:{width:"100%"}},n={class:"q-pa-md"},r={style:{"margin-top":"3px"}},o={style:{"margin-top":"3px"}};function u(t,s,e,u,d,g){const c=(0,i.up)("SubHeader"),h=(0,i.up)("BackToSettings"),f=(0,i.up)("q-icon"),p=(0,i.up)("q-space"),m=(0,i.up)("q-separator"),w=(0,i.up)("General"),v=(0,i.up)("q-card-section"),b=(0,i.up)("q-card"),q=(0,i.up)("q-expansion-item"),S=(0,i.up)("StatusFilter"),V=(0,i.up)("q-list");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(c,{name:"dashboard",label:t.$t("dashboard")},null,8,["label"]),(0,i.Wm)(h),(0,i._)("div",a,[(0,i._)("div",_,[(0,i._)("div",n,[(0,i.Wm)(V,{bordered:"",class:"rounded-borders"},{default:(0,i.w5)((()=>[(0,i.Wm)(q,{"expand-separator":"","header-class":"highlighted-back","default-opened":""},{header:(0,i.w5)((()=>[(0,i.Wm)(f,{size:"25px",class:"q-mr-lg",name:"settings"}),(0,i._)("span",r,(0,l.zw)(t.$t("form_builder.general")),1),(0,i.Wm)(p)])),default:(0,i.w5)((()=>[(0,i.Wm)(m),(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(v,null,{default:(0,i.w5)((()=>[(0,i.Wm)(w)])),_:1})])),_:1})])),_:1}),t.isAdmin?((0,i.wg)(),(0,i.j4)(q,{key:0,"expand-separator":"","header-class":"highlighted-back","default-opened":""},{header:(0,i.w5)((()=>[(0,i.Wm)(f,{size:"25px",class:"q-mr-lg",name:"settings"}),(0,i._)("span",o,(0,l.zw)(t.$t("filters")),1),(0,i.Wm)(p)])),default:(0,i.w5)((()=>[(0,i.Wm)(m),(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(v,null,{default:(0,i.w5)((()=>[(0,i.Wm)(S)])),_:1})])),_:1})])),_:1})):(0,i.kq)("",!0)])),_:1})])])])],64)}var d=e(61959),g=e(13873),c=e(47845);const h={class:"container q-pa-xl"},f={class:"full-width row items-center"},p={class:"col-3 q-ml-lg text-weight-medium"},m={class:"full-width row items-center"},w={class:"col-3 q-ml-lg"},v={class:"col-3"},b={class:"full-width row items-center"},q={class:"col-3 q-ml-lg"},S={class:"col-3"},V={class:"full-width row items-center"},x={class:"col-3 q-ml-lg"},W={class:"col-3"},Z={class:"full-width row items-center q-mt-lg"},y={class:"col-3 q-ml-lg text-weight-medium"},k={class:"full-width row items-center"},L={class:"col-3 q-ml-lg"},$={class:"col-3"},z=(0,i._)("img",{class:"loading-image",src:"loader.gif",alt:"Loading..."},null,-1);function Q(t,s,e,a,_,n){const r=(0,i.up)("q-toggle"),o=(0,i.up)("q-inner-loading");return(0,i.wg)(),(0,i.iD)("div",h,[(0,i._)("div",f,[(0,i._)("div",p,(0,l.zw)(t.$t("reset_filters")),1)]),(0,i._)("div",m,[(0,i._)("div",w,(0,l.zw)(t.$t("after_upload_doc")),1),(0,i._)("div",v,[(0,i.Wm)(r,{modelValue:t.user_settings[t.filters_reset_after_upload_setting],"onUpdate:modelValue":[s[0]||(s[0]=s=>t.user_settings[t.filters_reset_after_upload_setting]=s),s[1]||(s[1]=s=>{t.updateSetting(t.filters_reset_after_upload_setting,s)})]},null,8,["modelValue"])])]),(0,i._)("div",b,[(0,i._)("div",q,(0,l.zw)(t.$t("after_document_restart")),1),(0,i._)("div",S,[(0,i.Wm)(r,{modelValue:t.user_settings[t.filters_reset_after_restart_setting],"onUpdate:modelValue":[s[2]||(s[2]=s=>t.user_settings[t.filters_reset_after_restart_setting]=s),s[3]||(s[3]=s=>{t.updateSetting(t.filters_reset_after_restart_setting,s)})]},null,8,["modelValue"])])]),(0,i._)("div",V,[(0,i._)("div",x,(0,l.zw)(t.$t("after_document_export")),1),(0,i._)("div",W,[(0,i.Wm)(r,{modelValue:t.user_settings[t.filters_reset_after_export_setting],"onUpdate:modelValue":[s[4]||(s[4]=s=>t.user_settings[t.filters_reset_after_export_setting]=s),s[5]||(s[5]=s=>{t.updateSetting(t.filters_reset_after_export_setting,s)})]},null,8,["modelValue"])])]),(0,i._)("div",Z,[(0,i._)("div",y,(0,l.zw)(t.$t("dashboard_data")),1)]),(0,i._)("div",k,[(0,i._)("div",L,(0,l.zw)(t.$t("auto_load_dashboard_upload")),1),(0,i._)("div",$,[(0,i.Wm)(r,{modelValue:t.user_settings[t.auto_load_dashboard_on_updates_setting],"onUpdate:modelValue":[s[6]||(s[6]=s=>t.user_settings[t.auto_load_dashboard_on_updates_setting]=s),s[7]||(s[7]=s=>{t.updateSetting(t.auto_load_dashboard_on_updates_setting,s)})]},null,8,["modelValue"])])]),(0,i.Wm)(o,{showing:t.loading||t.loading_settings},{default:(0,i.w5)((()=>[z])),_:1},8,["showing"])])}var C=e(45401),I=e(77378),F=e(60727),O=e(10321),U=e(41891);const T=(0,i.aZ)({el:"#app",mixins:[C.Z,I.Z],data(){return{filters_reset_after_upload_setting:U.yN,filters_reset_after_restart_setting:U.Ic,filters_reset_after_export_setting:U.bh,auto_load_dashboard_on_updates_setting:U.Ji,status_filter_style_setting:U.z0}},watch:{loading_settings:{handler:function(t,s){1==t&&0==s||this.initView()}}},mounted:function(){this.initView()},methods:{initView(){this.user_settings[this.filters_reset_after_upload_setting]||(this.user_settings[this.filters_reset_after_upload_setting]=!1),this.user_settings[this.filters_reset_after_restart_setting]||(this.user_settings[this.filters_reset_after_restart_setting]=!1),this.user_settings[this.filters_reset_after_export_setting]||(this.user_settings[this.filters_reset_after_export_setting]=!1),this.user_settings[this.auto_load_dashboard_on_updates_setting]||(this.user_settings[this.auto_load_dashboard_on_updates_setting]=!1),this.user_settings[this.status_filter_style_setting]||(this.user_settings[this.status_filter_style_setting]="All")}},setup(){const t=(0,F.VF)(),{user_settings:s,loading_settings:e}=(0,O.Jk)(t),{updateSetting:i}=t,l=["All","Static"];return{updateSetting:i,user_settings:s,loading_settings:e,loading:(0,d.iH)(!1),status_filter_options:l}}});var E=e(74260),H=e(28886),A=e(66941),J=e(7518),P=e.n(J);const B=(0,E.Z)(T,[["render",Q]]),D=B;P()(T,"components",{QToggle:H.Z,QInnerLoading:A.Z});const N={class:"container q-pa-xl"},j={class:"full-width row items-center"},G={class:"col-3 q-ml-lg"},Y={class:"col-3"},R={key:0,class:"full-width row items-center",style:{"margin-top":"15px"}},K={class:"col-3 q-ml-lg"},M={class:"col-5"},X={class:"col-3 q-ml-lg"},tt=(0,i._)("img",{class:"loading-image",src:"loader.gif",alt:"Loading..."},null,-1);function st(t,s,e,a,_,n){const r=(0,i.up)("q-select"),o=(0,i.up)("q-checkbox"),u=(0,i.up)("q-item-section"),d=(0,i.up)("q-item"),g=(0,i.up)("q-btn"),c=(0,i.up)("q-inner-loading");return(0,i.wg)(),(0,i.iD)("div",N,[(0,i._)("div",j,[(0,i._)("div",G,(0,l.zw)(t.$t("dashboard_status_filter_style")),1),(0,i._)("div",Y,[(0,i.Wm)(r,{modelValue:t.user_settings[t.status_filter_style_setting],"onUpdate:modelValue":[s[0]||(s[0]=s=>t.user_settings[t.status_filter_style_setting]=s),s[1]||(s[1]=s=>t.updateSetting(t.status_filter_style_setting,t.user_settings[t.status_filter_style_setting]))],options:t.status_filter_options},null,8,["modelValue","options"])])]),"Custom"==t.user_settings[t.status_filter_style_setting]?((0,i.wg)(),(0,i.iD)("div",R,[(0,i._)("div",K,(0,l.zw)(t.$t("custom_status_filter")),1),(0,i._)("div",M,[(0,i.Wm)(r,{ref:"qselect",dense:"",multiple:"",outlined:"","use-input":"",modelValue:t.selected_status,"onUpdate:modelValue":s[2]||(s[2]=s=>t.selected_status=s),onFilter:t.filterlistEvent,onInput:t.clearFilter,options:t.filtered_status_list,label:t.$t("status")},{option:(0,i.w5)((({itemProps:t,selected:s,opt:e,toggleOption:a})=>[(0,i.Wm)(d,(0,l.vs)((0,i.F4)(t)),{default:(0,i.w5)((()=>[(0,i.Wm)(u,{side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(o,{"model-value":s,"onUpdate:modelValue":t=>a(e)},null,8,["model-value","onUpdate:modelValue"])])),_:2},1024),(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i._)("div",null,(0,l.zw)(e.label),1)])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","onFilter","onInput","options","label"])]),(0,i._)("div",X,[(0,i.Wm)(g,{style:{"background-color":"#2388AE"},dense:"",flat:"",label:t.$t("apply"),onClick:s[3]||(s[3]=s=>t.saveOrgPref())},null,8,["label"])])])):(0,i.kq)("",!0),(0,i.Wm)(c,{showing:t.loading||t.loading_settings},{default:(0,i.w5)((()=>[tt])),_:1},8,["showing"])])}var et=e(85985);const it=(0,i.aZ)({el:"#app",mixins:[C.Z,I.Z],data(){return{filters_reset_after_upload_setting:U.yN,filters_reset_after_restart_setting:U.Ic,filters_reset_after_export_setting:U.bh,auto_load_dashboard_on_updates_setting:U.Ji,status_filter_style_setting:U.z0,status_filter_list:U.P3}},watch:{loading_settings:{handler:function(t,s){1==t&&0==s||(this.initView(),this.getStatusesList(U.tl.all),this.loadCustomList(),this.filtered_status_list=this.status_list)}},status_list_loading:{handler:function(t,s){this.filtered_status_list=this.status_list}}},mounted(){this.initView(),this.getStatusesList(U.tl.all),this.loadCustomList(),this.filtered_status_list=this.status_list},methods:{initView(){this.user_settings[this.filters_reset_after_upload_setting]||(this.user_settings[this.filters_reset_after_upload_setting]=!1),this.user_settings[this.filters_reset_after_restart_setting]||(this.user_settings[this.filters_reset_after_restart_setting]=!1),this.user_settings[this.filters_reset_after_export_setting]||(this.user_settings[this.filters_reset_after_export_setting]=!1),this.user_settings[this.auto_load_dashboard_on_updates_setting]||(this.user_settings[this.auto_load_dashboard_on_updates_setting]=!1),this.user_settings[this.status_filter_style_setting]||(this.user_settings[this.status_filter_style_setting]=U.tl.all)},loadCustomList(){if(this.user_settings[this.status_filter_style_setting]==U.tl.custom){if(!this.user_settings[this.status_filter_list])return void(this.selected_status=[]);this.user_settings[this.status_filter_list].split(",").forEach((t=>{let s=t;"-"!=et.Z.methods.getLabelTranslation(t)&&this.selected_status.push(Object.assign({},{value:s,label:et.Z.methods.getLabelTranslation(t)}))}))}},saveOrgPref(){if(0==this.selected_status.length)this.user_settings[this.status_filter_style_setting]=U.tl.all,this.updateSetting(this.status_filter_style_setting,U.tl.all);else{this.updateSetting(this.status_filter_style_setting,U.tl.custom);let t="";this.selected_status.forEach((s=>{t+=s.value+","})),this.updateSetting(this.status_filter_list,t),this.showSuccessToast(this.$t("OPERATION_SUCESSFULL"))}},filterlistEvent(t,s,e){s(t?()=>{const s=t.toLowerCase();this.filtered_status_list=this.status_list.filter((t=>t.label.toLowerCase().indexOf(s)>-1))}:()=>{this.filtered_status_list=this.status_list})},clearFilter(){void 0!==this.$refs.qselect&&this.$refs.qselect.updateInputValue("")}},setup(){const t=(0,F.VF)(),{user_settings:s,loading_settings:e}=(0,O.Jk)(t),{updateSetting:i}=t,l=[U.tl.all,U.tl["static"],U.tl.custom],a=(0,F.tl)(),{status_list_loading:_,status_list:n}=(0,O.Jk)(a),{getStatusesList:r}=a;return{updateSetting:i,getStatusesList:r,user_settings:s,loading_settings:e,loading:(0,d.iH)(!1),status_filter_options:l,status_list_loading:_,status_list:n,filtered_status_list:(0,d.iH)([]),selected_status:(0,d.iH)([])}}});var lt=e(72448),at=e(83414),_t=e(52035),nt=e(65735),rt=e(2165);const ot=(0,E.Z)(it,[["render",st]]),ut=ot;P()(it,"components",{QSelect:lt.Z,QItem:at.Z,QItemSection:_t.Z,QCheckbox:nt.Z,QBtn:rt.Z,QInnerLoading:A.Z});var dt=e(91949);const gt=(0,i.aZ)({el:"#app",components:{SubHeader:g.Z,BackToSettings:c.Z,General:D,StatusFilter:ut},mounted(){this.isAdmin=Boolean(JSON.parse((0,dt.Y4)("is_organisation_admin")))},data(){return{isAdmin:(0,d.iH)(!1)}},setup(){const t=(0,F.VF)(),{getOrgSettings:s}=t;return{getOrgSettings:s}}});var ct=e(27011),ht=e(60429),ft=e(24554),pt=e(62025),mt=e(65869),wt=e(10151),vt=e(25589);const bt=(0,E.Z)(gt,[["render",u]]),qt=bt;P()(gt,"components",{QList:ct.Z,QExpansionItem:ht.Z,QIcon:ft.Z,QSpace:pt.Z,QSeparator:mt.Z,QCard:wt.Z,QCardSection:vt.Z})}}]);