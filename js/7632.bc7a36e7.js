"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[7632],{17632:(t,e,a)=>{a.r(e),a.d(e,{default:()=>K});var s=a(61758),n=a(58790);const o={class:"container page-height-limit"},i={class:"full-width"},r={style:{"margin-top":"3px","text-transform":"capitalize"}};function l(t,e,a,l,u,d){const c=(0,s.g2)("SubHeader"),g=(0,s.g2)("f-btn"),_=(0,s.g2)("BackToSettings"),p=(0,s.g2)("q-separator"),m=(0,s.g2)("q-icon"),h=(0,s.g2)("q-space"),b=(0,s.g2)("MasterDataTypeList"),f=(0,s.g2)("q-card-section"),y=(0,s.g2)("q-card"),k=(0,s.g2)("q-expansion-item"),v=(0,s.g2)("q-list"),A=(0,s.g2)("CustomMasterDataPopUp"),F=(0,s.g2)("q-dialog");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(c,{name:"master_data_settings",label:t.$t("pages.settings.supplier_validation"),onSearch:!1},null,8,["label"]),(0,s.bF)(_,null,{default:(0,s.k6)((()=>[t.user_settings[t.custom_master_data]?((0,s.uX)(),(0,s.Wv)(g,{key:0,class:"float-right q-ml-auto",onClick:e[0]||(e[0]=e=>t.show_custom_master_data=!t.show_custom_master_data),label:t.$t("pages.custom_master_data.custom_master_data")},null,8,["label"])):(0,s.Q3)("",!0)])),_:1}),(0,s.Lk)("div",o,[(0,s.Lk)("div",i,[t.data_types_loaded?((0,s.uX)(),(0,s.Wv)(v,{key:0,bordered:"",class:"rounded-borders"},{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.data_types,((e,a)=>((0,s.uX)(),(0,s.CE)(s.FK,{key:a},[(0,s.bF)(p),(0,s.bF)(k,{"expand-separator":"","header-class":"highlighted-back","default-opened":0==a},{header:(0,s.k6)((()=>[(0,s.bF)(m,{size:"25px",class:"q-mr-lg black_to_white",name:"img:images/vendors-default.svg"}),(0,s.Lk)("span",r,(0,n.v_)(t.$t(t.aliases[e]||e)),1),(0,s.bF)(h)])),default:(0,s.k6)((()=>[(0,s.bF)(y,null,{default:(0,s.k6)((()=>[(0,s.bF)(f,{style:"height: auto; min-height: 15vh;"},{default:(0,s.k6)((()=>[(0,s.bF)(b,{type_name:e},null,8,["type_name"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["default-opened"]),(0,s.bF)(p)],64)))),128))])),_:1})):(0,s.Q3)("",!0)])]),(0,s.bF)(F,{modelValue:t.show_custom_master_data,"onUpdate:modelValue":e[1]||(e[1]=e=>t.show_custom_master_data=e)},{default:(0,s.k6)((()=>[(0,s.bF)(A)])),_:1},8,["modelValue"])],64)}var u=a(1659),d=a(24622),c=a(38734),g=a(18505),_=a(64775),p=a(76956),m=a(68180),h=a(1595),b=a(25773),f=a(44499),y=a(77973),k=function(t,e,a,s){function n(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,o){function i(t){try{l(s.next(t))}catch(e){o(e)}}function r(t){try{l(s["throw"](t))}catch(e){o(e)}}function l(t){t.done?a(t.value):n(t.value).then(i,r)}l((s=s.apply(t,e||[])).next())}))};const v=(0,s.pM)({el:"#app",mixins:[g.A,d.A],props:{},components:{SubHeader:m.A,BackToSettings:b.A,CustomMasterDataPopUp:y.A,MasterDataTypeList:f.A},data(){return{tab:(0,c.KR)("tables"),custom_master_data:p.MS}},beforeRouteLeave:function(t,e,a){const s=(0,h.rD)();s.$reset(),a()},setup(){const t=(0,h.rD)(),{getDataSetTypes:e,getDataSetAliases:a,getMasterDataList:s}=t,{aliases:n,data_types:o,data_types_loaded:i}=(0,u.bP)(t),r=(0,h.Bu)(),{user_settings:l}=(0,u.bP)(r),{startSettingsFetch:d}=r;return{user_settings:l,data_types_loaded:i,startSettingsFetch:d,getDataSetTypes:e,getDataSetAliases:a,getMasterDataList:s,aliases:n,data_types:o,loading:(0,c.KR)(!1),show_custom_master_data:(0,c.KR)(!1)}},mounted:function(){this.initView()},methods:{initView(){return k(this,void 0,void 0,(function*(){try{yield this.getDataSetTypes(),yield this.getDataSetAliases(),yield this.startSettingsFetch(),yield this.getMasterDataList("record")}catch(t){const e=_.t.getErrorMessage(t);this.showErrorToast(e),logError(t)}}))}}});var A=a(12807),F=a(53999),S=a(10386),D=a(88841),w=a(50492),L=a(93676),Q=a(23316),q=a(44189),C=a(82156),M=a(39035),T=a(98582),x=a.n(T);const E=(0,A.A)(v,[["render",l]]),K=E;x()(v,"components",{QList:F.A,QSeparator:S.A,QExpansionItem:D.A,QIcon:w.A,QSpace:L.A,QCard:Q.A,QCardSection:q.A,QDialog:C.A,QInnerLoading:M.A})}}]);