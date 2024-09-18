"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[3699],{3699:(e,t,n)=>{n.r(t),n.d(t,{default:()=>yt});var a=n(61758),o=n(58790),s=n(29104);const i=e=>((0,a.Qi)("data-v-4b4f6da4"),e=e(),(0,a.jt)(),e),l={class:"dashboard-container dashboard-text-color dashboard-main"},r={class:"full-width dashboard-list-area q-my-lg"},d={class:"text-item",style:{"text-transform":"capitalize"}},c={key:2},u={key:3},m={key:4,align:"right",style:{"padding-right":"16px"}},v={key:5},h={key:6,class:"text-item"},_=i((()=>(0,a.Lk)("div",{class:"box loading-shimmer"},null,-1))),p=["data-index","onDragstart","onDrop","onDragover"],g=["colspan"],b={class:"back-white flex justify-end"},f={class:"row",style:{"margin-right":"0"}},y=i((()=>(0,a.Lk)("img",{class:"loading-image",src:"images/loader.gif",alt:"Loading..."},null,-1)));function k(e,t,n,i,k,D){const C=(0,a.g2)("SubHeader"),L=(0,a.g2)("InvoiceDashboardHeader"),w=(0,a.g2)("q-separator"),E=(0,a.g2)("ColumnOrderBy"),x=(0,a.g2)("q-th"),S=(0,a.g2)("q-tr"),F=(0,a.g2)("q-badge"),q=(0,a.g2)("q-td"),I=(0,a.g2)("q-table"),A=(0,a.g2)("q-markup-table"),O=(0,a.g2)("PaginationInvoice"),V=(0,a.g2)("q-pagination"),j=(0,a.g2)("q-inner-loading");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(C,{name:"invoice_dashboard",label:e.$t("invoices")},null,8,["label"]),(0,a.Lk)("div",l,[(0,a.bF)(L),(0,a.bF)(w,{class:"seperator"}),(0,a.Lk)("div",r,[e.display_data.length>0?((0,a.uX)(),(0,a.Wv)(I,{key:0,class:(0,o.C4)("main-table dashboard-table-style dashboard-table-height back-white"),rows:Object.values(e.display_data),"rows-per-page-options":[0],columns:e.tableColumns,"row-key":"id",flat:"","hide-bottom":"","no-data-label":e.$t("pages.messages.no_record_found"),id:"invoice_table"},{header:(0,a.k6)((t=>[(0,a.bF)(S,{props:t},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.cols,((n,i)=>((0,a.uX)(),(0,a.Wv)(x,{key:n.name,props:t,"data-index":i,draggable:"true",dropzone:"true",direction:"horizontal",onDragstart:t=>e.onDragStart(t,e.tableColumns,i),onDrop:(0,s.D$)((t=>e.handleDrop(t,i)),["prevent"]),onDragover:(0,s.D$)((t=>e.onDragOver(t,i)),["prevent"]),onDragenter:(0,s.D$)(e.onDragEnter,["prevent"]),onDragleave:(0,s.D$)(e.onDragLeave,["prevent"]),style:(0,o.Tr)([{cursor:e.getIsDragging?"pointer":"move"},{"text-align":"left"}])},{default:(0,a.k6)((()=>[(0,a.Lk)("span",d,(0,o.v_)(e.$t(n.label)),1),n.actions?((0,a.uX)(),(0,a.Wv)(E,{key:0,type_name:e.type_name,column_name:n.field},null,8,["type_name","column_name"])):(0,a.Q3)("",!0)])),_:2},1032,["props","data-index","onDragstart","onDrop","onDragover","onDragenter","onDragleave","style"])))),128))])),_:2},1032,["props"])])),body:(0,a.k6)((t=>[e.show_table_loader?((0,a.uX)(),(0,a.Wv)(S,{key:1},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.tableColumns.length,(e=>((0,a.uX)(),(0,a.Wv)(q,{key:e},{default:(0,a.k6)((()=>[_])),_:1})))),128))])),_:1})):((0,a.uX)(),(0,a.Wv)(S,{key:0,props:t},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.cols,(n=>((0,a.uX)(),(0,a.Wv)(q,{key:n.name,props:t,class:(0,o.C4)(e.setRowStyle(t.row)+" cursor-pointer"),style:{"text-align":"left"},onClick:n=>e.goToDetails(t.row)},{default:(0,a.k6)((()=>{var t;return["status"==n.name?((0,a.uX)(),(0,a.Wv)(F,{key:0,transparent:"",align:"middle",color:e.statusColor(n.value)},{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(n.value),1)])),_:2},1032,["color"])):"paid_status"==n.name?((0,a.uX)(),(0,a.Wv)(F,{key:1,transparent:"",align:"middle",color:e.statusColor(null!==(t=n.value)&&void 0!==t?t:"Open")},{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(n.value?n.value:"Open"),1)])),_:2},1032,["color"])):"payment_method"==n.name?((0,a.uX)(),(0,a.CE)("div",c,(0,o.v_)(e.showPaymentMethodLabel(n.value)),1)):"electronic_payment_number"==n.name?((0,a.uX)(),(0,a.CE)("div",u,(0,o.v_)(e.displayLastSixDigits(n.value)),1)):"extended_amount"==n.name?((0,a.uX)(),(0,a.CE)("div",m,(0,o.v_)(n.value),1)):e.dateFields(n.name)?((0,a.uX)(),(0,a.CE)("div",v,(0,o.v_)(e.formatDateTimeZone(n.value,!0)),1)):((0,a.uX)(),(0,a.CE)("div",h,(0,o.v_)(n.value),1))]})),_:2},1032,["props","class","onClick"])))),128))])),_:2},1032,["props"]))])),_:1},8,["rows","columns","no-data-label"])):(0,a.Q3)("",!0),0==e.display_data.length?((0,a.uX)(),(0,a.Wv)(A,{key:1,class:(0,o.C4)("main-table dashboard-table-style back-white"),flat:"","hide-bottom":"",actions:!0,id:"invoice_table"},{default:(0,a.k6)((()=>[(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.tableColumns,((n,i)=>((0,a.uX)(),(0,a.CE)("th",{key:n.name,"data-index":i,draggable:"true",dropzone:"true",direction:"horizontal",onDragstart:t=>e.onDragStart(t,e.tableColumns,i),onDrop:(0,s.D$)((t=>e.handleDrop(t,i)),["prevent"]),onDragover:(0,s.D$)((t=>e.onDragOver(t,i)),["prevent"]),onDragenter:t[0]||(t[0]=(0,s.D$)(((...t)=>e.onDragEnter&&e.onDragEnter(...t)),["prevent"])),onDragleave:t[1]||(t[1]=(0,s.D$)(((...t)=>e.onDragLeave&&e.onDragLeave(...t)),["prevent"])),style:(0,o.Tr)([{cursor:e.getIsDragging?"pointer":"move"},{"text-align":"left"}])},(0,o.v_)(e.$t(n.label)),45,p)))),128))]),(0,a.Lk)("tr",null,[(0,a.Lk)("td",{class:"text-center",colspan:e.tableColumns.length},(0,o.v_)(e.$t("pages.messages.no_record_found")),9,g)])])])),_:1})):(0,a.Q3)("",!0),(0,a.Lk)("div",b,[(0,a.Lk)("div",f,[(0,a.bF)(O,{class:"q-py-xs q-mr-md"}),(0,a.bF)(V,{modelValue:e.pagination.current_page,"onUpdate:modelValue":[t[2]||(t[2]=t=>e.pagination.current_page=t),t[3]||(t[3]=t=>e.paginationItemClicked())],color:"primary",max:e.pagination.total_pages,class:"q-py-xs q-mx-md","max-pages":6,input:"","boundary-links":""},null,8,["modelValue","max"])])])])]),(0,a.bF)(j,{showing:e.loading,style:{"z-index":"2"}},{default:(0,a.k6)((()=>[y])),_:1},8,["showing"])],64)}var D=n(23537),C=n(1659),L=n(24622),w=n(46736),E=n(38734),x=n(10739),S=n(87033),F=n(95488),q=n(94124);const I={class:"orderByParentSpan arrow-color"},A=["data-name"],O=["data-name"];function V(e,t,n,s,i,l){return(0,a.uX)(),(0,a.CE)("span",I,[(0,a.Lk)("span",{class:(0,o.C4)(["up-arrow orderBy absolute",e.is_order_by_selected("asc")?"selected":""]),"data-name":e.column_name,"data-direction":"asc",onClick:t[0]||(t[0]=(...t)=>e.OrderBy&&e.OrderBy(...t))},null,10,A),(0,a.Lk)("span",{class:(0,o.C4)(["down-arrow orderBy absolute",e.is_order_by_selected("desc")?"selected":""]),"data-name":e.column_name,"data-direction":"desc",onClick:t[1]||(t[1]=(...t)=>e.OrderBy&&e.OrderBy(...t))},null,10,O)])}var j=n(68450),P=function(e,t,n,a){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function i(e){try{r(a.next(e))}catch(t){s(t)}}function l(e){try{r(a["throw"](e))}catch(t){s(t)}}function r(e){e.done?n(e.value):o(e.value).then(i,l)}r((a=a.apply(e,t||[])).next())}))};const Q=(0,a.pM)({props:{column_name:{type:String,required:!0}},watch:{order_by:{deep:!0,handler:function(e,t){this.init()}}},mounted:function(){this.init(),document.addEventListener("reset_filters",this.resetFilters)},unmounted:function(){document.removeEventListener("reset_filters",this.resetFilters)},methods:{init(){0!==(0,j.Ns)(this.order_by)&&(this.order_by_field=this.order_by.field_name,this.order_by_direction=this.order_by.direction)},is_order_by_selected(e){return this.order_by_field==this.column_name&&this.order_by_direction==e},OrderBy(e){if(e.target.classList.contains("selected"))return;let t=e.target.dataset.direction,n=e.target.dataset.name;if(!t||!n)return;e.target.classList.add("selected");const a=document.querySelectorAll(".orderBy");if(a.length){for(var o=0;o<a.length;o++){let e=a[o];(e.dataset.name!=n||e.dataset.name==n&&e.dataset.direction!=t)&&e.classList.remove("selected")}this.order_by_field=n,this.order_by_direction=t,this.order_by={field_name:this.order_by_field,direction:this.order_by_direction},this.params.sort_by=this.order_by_field,this.params.sort_order=this.order_by_direction,this.getData(),this.triggerApplyFilters()}},getData(){return P(this,void 0,void 0,(function*(){try{this.loading=!0,yield this.getInvoiceData()}catch(e){}finally{this.loading=!1}}))},triggerApplyFilters(){const e=new CustomEvent("apply_filters",{detail:{}});document.dispatchEvent(e)},resetFilters(){let e=document.getElementsByClassName("orderBy selected");Array.from(e).forEach((e=>{e.classList.remove("selected")}))}},data(){return{sort_order_by:(0,E.KR)(""),order_by_field:(0,E.KR)(""),order_by_direction:(0,E.KR)("")}},setup(){const e=(0,q.LN)(),{order_by:t,params:n,loading:a}=(0,C.bP)(e),{getInvoiceData:o}=e;return{params:n,order_by:t,loading:a,getInvoiceData:o}}});var T=n(12807);const X=(0,T.A)(Q,[["render",V],["__scopeId","data-v-f3323724"]]),$=X,K={class:"row"},N={class:"q-py-xs q-mt-md q-mr-sm"};function R(e,t,n,s,i,l){const r=(0,a.g2)("q-select");return(0,a.uX)(),(0,a.CE)("div",K,[(0,a.Lk)("span",N,(0,o.v_)(e.$t("pagination_size"))+":",1),(0,a.bF)(r,{borderless:"",dense:"",modelValue:e.pagination.page_size,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.pagination.page_size=t),e.getInvoiceData],options:e.pagination_options},null,8,["modelValue","options","onUpdate:modelValue"])])}const B=(0,a.pM)({setup(){const e=(0,q.LN)(),{pagination:t}=(0,C.bP)(e),{getInvoiceData:n}=e;return{pagination:t,getInvoiceData:n,pagination_options:(0,E.KR)(["10","20","25","50","100"])}}});var U=n(94940),W=n(98582),H=n.n(W);const M=(0,T.A)(B,[["render",R]]),z=M;H()(B,"components",{QSelect:U.A});var J=n(30582);const Z={class:"row q-mb-md"},G={style:{"margin-top":"39px"},class:"row items-start example-container dashboard-title dark-readable"},Y={class:"col q-ml-xl"},ee={class:"row justify-start"},te={class:"dashboard-search-box q-ml-md mt-20 white-inputs"},ne={class:"q-mr-sm mt-20"};function ae(e,t,n,s,i,l){const r=(0,a.g2)("quickSearch"),d=(0,a.g2)("q-space"),c=(0,a.g2)("ColumnOrganization"),u=(0,a.g2)("q-tooltip"),m=(0,a.g2)("f-btn");return(0,a.uX)(),(0,a.CE)("div",Z,[(0,a.Lk)("div",G,[(0,a.Lk)("div",{class:"example-cell cursor-pointer",tabindex:"0",onClick:t[0]||(t[0]=(...t)=>e.getAllInvoices&&e.getAllInvoices(...t))},(0,o.v_)(e.$t("all"))+" ("+(0,o.v_)(e.total_count)+") ",1),(0,a.Lk)("div",{class:"example-cell q-ml-lg cursor-pointer",tabindex:"0",onClick:t[1]||(t[1]=t=>e.getInvoiceStatus("Invoiced"))},(0,o.v_)(e.$t("invoiced"))+" ("+(0,o.v_)(e.total_invoice_count)+") ",1),(0,a.Lk)("div",{class:"example-cell q-ml-lg cursor-pointer",tabindex:"0",onClick:t[2]||(t[2]=t=>e.getInvoiceStatus("Closed"))},(0,o.v_)(e.$t("closed"))+" ("+(0,o.v_)(e.total_closed_count)+") ",1)]),(0,a.Lk)("div",Y,[(0,a.Lk)("div",ee,[(0,a.Lk)("div",te,[(0,a.bF)(r)]),(0,a.bF)(d),(0,a.Lk)("div",ne,[(0,a.bF)(c,{columns_key:"INVOICES_DASHBOARD_COLUMNS",table_columns:e.table_columns},null,8,["table_columns"])]),(0,a.bF)(m,{square:"",class:"mt-20",icon:"img:images/refresh.svg",onClick:e.refreshFilters},{default:(0,a.k6)((()=>[(0,a.bF)(u,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(e.$t("refresh_list")),1)])),_:1})])),_:1},8,["onClick"])])])])}const oe={class:"q-pa-md"},se={class:"row q-my-sm"},ie={style:{"margin-top":"5px"}},le={class:"row q-my-sm"},re={style:{"margin-top":"5px"}},de={class:"float-right q-ml-auto"};function ce(e,t,n,s,i,l){const r=(0,a.g2)("q-space"),d=(0,a.g2)("SupplierName"),c=(0,a.g2)("Status"),u=(0,a.g2)("f-btn"),m=(0,a.g2)("q-menu"),v=(0,a.g2)("q-input");return(0,a.uX)(),(0,a.Wv)(v,{class:"width-500",dense:"",modelValue:e.params.search,"onUpdate:modelValue":[t[1]||(t[1]=t=>e.params.search=t),e.fetchData],autofocus:"",debounce:1e3,placeholder:e.$t("search_by_invoice_number"),outlined:"",onKeyup:e.onKeyup},{append:(0,a.k6)((()=>[(0,a.bF)(u,{icon:"tune",appearance:"flat"},{default:(0,a.k6)((()=>[(0,a.bF)(m,{style:{width:"500px","min-height":"250px"},anchor:"bottom start",self:"top left",offset:[453,10]},{default:(0,a.k6)((()=>[(0,a.Lk)("div",oe,[(0,a.Lk)("div",se,[(0,a.Lk)("span",ie,(0,o.v_)(e.$t("supplier_name")),1),(0,a.bF)(r),(0,a.bF)(d)]),(0,a.Lk)("div",le,[(0,a.Lk)("span",re,(0,o.v_)(e.$t("status")),1),(0,a.bF)(r),(0,a.bF)(c)]),(0,a.Lk)("div",de,[(0,a.bF)(u,{appearance:"secondary",class:"q-mr-sm mt-20 q-mb-md",label:e.$t("clear_filters"),onClick:t[0]||(t[0]=t=>e.resetFilters())},null,8,["label"])])])])),_:1})])),_:1})])),_:1},8,["modelValue","onUpdate:modelValue","placeholder","onKeyup"])}function ue(e,t,n,o,s,i){const l=(0,a.g2)("q-input");return(0,a.uX)(),(0,a.Wv)(l,{outlined:"",dense:"",clearable:!0,debounce:1e3,class:"q-mr-sm",style:{width:"227px",height:"40px"},modelValue:e.params.supplier_name,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.params.supplier_name=t),e.fetchData]},null,8,["modelValue","onUpdate:modelValue"])}const me=(0,a.pM)({mixins:[],props:{},methods:{fetchData(){this.resetPagination(),this.getInvoiceData()}},setup(){const e=(0,q.LN)(),{params:t}=(0,C.bP)(e),{getInvoiceData:n,resetPagination:a}=e;return{params:t,getInvoiceData:n,resetPagination:a}}});var ve=n(67837);const he=(0,T.A)(me,[["render",ue]]),_e=he;function pe(e,t,n,s,i,l){const r=(0,a.g2)("q-select");return(0,a.uX)(),(0,a.Wv)(r,{outlined:"",class:"q-mr-sm",style:{width:"227px",height:"40px"},clearable:"",dense:"",modelValue:e.params.status,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.params.status=t),e.fetchData],options:e.statusOptions,label:e.$t("status")},{"selected-item":(0,a.k6)((e=>[(0,a.Lk)("div",null,(0,o.v_)(e.opt.label),1)])),_:1},8,["modelValue","options","label","onUpdate:modelValue"])}H()(me,"components",{QInput:ve.A});const ge=(0,a.pM)({methods:{fetchData(){this.resetPagination(),this.getInvoiceData()}},setup(){const e=(0,q.LN)(),{params:t}=(0,C.bP)(e),{getInvoiceData:n,resetPagination:a}=e;return{params:t,resetPagination:a,getInvoiceData:n,statusOptions:[{label:"Open",value:"Open"},{label:"Paid",value:"Paid"},{label:"Invoiced",value:"Invoiced"},{label:"Closed",value:"Closed"}]}}}),be=(0,T.A)(ge,[["render",pe]]),fe=be;H()(ge,"components",{QSelect:U.A});var ye=function(e,t,n,a){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function i(e){try{r(a.next(e))}catch(t){s(t)}}function l(e){try{r(a["throw"](e))}catch(t){s(t)}}function r(e){e.done?n(e.value):o(e.value).then(i,l)}r((a=a.apply(e,t||[])).next())}))};const ke=(0,a.pM)({components:{SupplierName:_e,Status:fe},methods:{onKeyup(e){"Enter"==e.key&&this.fetchData()},fetchData(){return ye(this,void 0,void 0,(function*(){this.resetPagination(),yield this.getInvoiceData()}))},resetFilters(){this.resetFilter(),this.fetchData()}},setup(){const e=(0,q.LN)(),{params:t}=(0,C.bP)(e),{resetPagination:n,getInvoiceData:a,resetFilter:o}=e;return{params:t,resetPagination:n,getInvoiceData:a,resetFilter:o}}});var De=n(84436),Ce=n(93676);const Le=(0,T.A)(ke,[["render",ce]]),we=Le;H()(ke,"components",{QInput:ve.A,QMenu:De.A,QSpace:Ce.A});const Ee=e=>((0,a.Qi)("data-v-87444eb2"),e=e(),(0,a.jt)(),e),xe={class:"text-weight-bold"},Se={class:"row no-wrap justify-around q-pt-md"},Fe={class:"drop-target rounded-borders q-mr-md"},qe={class:"box row justify-center items-center",style:{"border-bottom":"1px solid grey"}},Ie=["id","data-column-name"],Ae={class:"rounded-borders overflow-hidden content-center"},Oe={class:"row justify-end items-start"},Ve={class:"row justify-end items-start"},je={class:"drop-target rounded-borders"},Pe={class:"box row justify-center items-center",style:{"border-bottom":"1px solid grey"}},Qe={class:"visible-columns-parent"},Te=["id","data-column-name","data-order"],Xe={class:"row justify-end items-start q-mt-md"},$e=Ee((()=>(0,a.Lk)("img",{class:"loading-image",src:"images/loader.gif",alt:"Loading..."},null,-1)));function Ke(e,t,n,i,l,r){const d=(0,a.g2)("q-tooltip"),c=(0,a.g2)("f-btn"),u=(0,a.g2)("q-toolbar-title"),m=(0,a.g2)("q-btn"),v=(0,a.g2)("q-toolbar"),h=(0,a.g2)("q-checkbox"),_=(0,a.g2)("q-icon"),p=(0,a.g2)("q-card-section"),g=(0,a.g2)("q-inner-loading"),b=(0,a.g2)("q-card"),f=(0,a.g2)("q-dialog"),y=(0,a.gN)("close-popup");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(c,{square:"",class:"q-mr-sm",icon:"img:images/column_filter.svg",onClick:t[0]||(t[0]=t=>e.show_column_settings=!0)},{default:(0,a.k6)((()=>[(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(e.label)+" ",1)])),_:1})])),_:1}),(0,a.bF)(f,{modelValue:e.show_column_settings,"onUpdate:modelValue":t[3]||(t[3]=t=>e.show_column_settings=t),onShow:e.BeforePopupShow,onKeydown:t[4]||(t[4]=(0,s.jR)((t=>e.show_column_settings=!1),["esc"])),persistent:"",onHide:e.onDashboardColumnDialogHide},{default:(0,a.k6)((()=>[(0,a.bF)(b,{style:{width:"900px","max-width":"1060px"}},{default:(0,a.k6)((()=>[(0,a.bF)(v,{class:"text-white secondary-toolbar draggable-toolbar"},{default:(0,a.k6)((()=>[(0,a.bF)(u,null,{default:(0,a.k6)((()=>[(0,a.Lk)("span",xe,(0,o.v_)(e.$t("column_settings")),1)])),_:1}),(0,a.bo)((0,a.bF)(m,{flat:"",round:"",dense:"",icon:"close"},null,512),[[y]])])),_:1}),(0,a.bF)(p,null,{default:(0,a.k6)((()=>[(0,a.Lk)("div",null,[(0,a.Lk)("div",Se,[(0,a.Lk)("div",Fe,[(0,a.Lk)("div",qe,(0,o.v_)(e.$t("hidden_columns")),1),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.hidden_columns,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t,id:e.name,"data-column-name":e.name,class:"box"},[(0,a.bF)(h,{"data-column-name":e.name,modelValue:e.selected,"onUpdate:modelValue":t=>e.selected=t},null,8,["data-column-name","modelValue","onUpdate:modelValue"]),(0,a.eW)(" "+(0,o.v_)(e.label),1)],8,Ie)))),128))]),(0,a.Lk)("div",Ae,[(0,a.Lk)("div",Oe,[(0,a.bF)(c,{class:"q-mr-md mt-20",icon:"arrow_back",onClick:e.moveToHideColumnList},{default:(0,a.k6)((()=>[(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(e.$t("move_to_visibile_button_tooltip")),1)])),_:1})])),_:1},8,["onClick"])]),(0,a.Lk)("div",Ve,[(0,a.bF)(c,{class:"q-mr-md mt-20",icon:"arrow_forward",onClick:e.moveToShowColumnList},{default:(0,a.k6)((()=>[(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(e.$t("move_to_hidden_button_tooltip")),1)])),_:1})])),_:1},8,["onClick"])])]),(0,a.Lk)("div",je,[(0,a.Lk)("div",Pe,(0,o.v_)(e.$t("visible_columns")),1),(0,a.Lk)("div",Qe,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.visible_columns,((t,n)=>((0,a.uX)(),(0,a.CE)("div",{key:n,draggable:"true",class:"draggable-box"},[(0,a.Lk)("div",{draggable:"true",id:t.name,"data-column-name":t.name,class:"box","data-order":t.order},[(0,a.bF)(_,{name:"drag_indicator",size:"xs"}),(0,a.bF)(h,{"data-order":t.order,"data-column-name":t.name,modelValue:t.selected,"onUpdate:modelValue":e=>t.selected=e,class:"box-checkbox"},null,8,["data-order","data-column-name","modelValue","onUpdate:modelValue"]),t.hasOwnProperty("doc_type_key")?((0,a.uX)(),(0,a.Wv)(_,{key:0,flat:"",dense:"",name:"close",size:"24px",color:"red",onClick:n=>e.removeDocTypeColumn(t.name)},null,8,["onClick"])):(0,a.Q3)("",!0),(0,a.eW)(" "+(0,o.v_)(t.label),1)],8,Te)])))),128))])])]),(0,a.Lk)("div",Xe,[(0,a.bF)(c,{appearance:"cancel",label:e.$t("cancel"),onClick:t[1]||(t[1]=t=>e.show_column_settings=!1)},null,8,["label"]),(0,a.bF)(c,{label:e.$t("done"),class:"q-ml-sm",onClick:t[2]||(t[2]=t=>e.saveSettings())},null,8,["label"])])])])),_:1}),(0,a.bF)(g,{showing:e.processing},{default:(0,a.k6)((()=>[$e])),_:1},8,["showing"])])),_:1})])),_:1},8,["modelValue","onShow","onHide"])],64)}var Ne=n(66715),Re=n(25891),Be=function(e,t,n,a){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function i(e){try{r(a.next(e))}catch(t){s(t)}}function l(e){try{r(a["throw"](e))}catch(t){s(t)}}function r(e){e.done?n(e.value):o(e.value).then(i,l)}r((a=a.apply(e,t||[])).next())}))};const Ue=(0,a.pM)({props:{columns_key:{type:String,required:!0},table_columns:{type:Array,required:!0},label:{type:String,required:!0,default:Ne.i18n.t("table_column_settings_tooltip")}},components:{},mounted(){this.init(),document.addEventListener("add_columns",this.addColumns)},unmounted:function(){document.removeEventListener("add_columns",this.addColumns)},data(){return{dragSrcEl:{},clearInterval:0}},beforeRouteLeave:function(e,t,n){this.removeDragEvents(),n()},methods:{BeforePopupShow(){this.init(),this.show_column_settings=!0},getSavedColumns(){return Be(this,void 0,void 0,(function*(){try{const e=yield this.getColumnSettingsFromServer();this.visible_columns=e&&""!=e?JSON.parse(e):Object.assign({},this.table_columns)}catch(e){this.visible_columns=Object.assign({},this.table_columns)}return this.visible_columns}))},getColumnSettingsFromServer(){return Be(this,void 0,void 0,(function*(){try{const e=(0,q.Bu)(),t=yield e.getSettingWithExpiry(this.columns_key.toUpperCase());return t}catch(e){return""}}))},init(){return Be(this,void 0,void 0,(function*(){this.elements_loaded=!1,this.visible_columns=[],this.visible_columns_obj_list={},this.hidden_columns={},yield this.setColumns(),this.intervalManager()}))},setColumns(){return Be(this,void 0,void 0,(function*(){yield this.setVisibleColumns(),this.setHiddenColumns()}))},setHiddenColumns(){for(const[e,t]of Object.entries(this.table_columns)){if(this.visible_columns_obj_list.hasOwnProperty(e))continue;const n=t;n.selected=!1,n.label=this.getColumnLabel(n),this.hidden_columns[n.name]=n}},setVisibleColumns(){return Be(this,void 0,void 0,(function*(){const e=yield this.getSavedColumns();this.setVibileColumnsForView(e),this.visible_columns_obj_list=e}))},setVibileColumnsForView(e){this.visible_columns=[];for(const t in e)e[t].selected=!1,e[t].label=this.getColumnLabel(e[t]),this.visible_columns.push(e[t]);this.sortVisibleColumns()},moveToHideColumnList(){this.visible_columns.forEach(((e,t)=>{if(!this.visible_columns_obj_list[e.name].selected)return;const n=e.name;this.visible_columns_obj_list[n].selected=!1,this.hidden_columns[n]=this.visible_columns_obj_list[n],delete this.visible_columns_obj_list[n]})),this.setVibileColumnsForView(this.visible_columns_obj_list)},moveToShowColumnList(){for(var e of Object.keys(this.hidden_columns))this.hidden_columns[e].selected&&(this.hidden_columns[e].selected=!1,this.visible_columns_obj_list[e]=this.hidden_columns[e],delete this.hidden_columns[e]);this.setVibileColumnsForView(this.visible_columns_obj_list)},getColumnLabel(e){e.label=e.name;const t=this.table_columns[e.name];return(e.translation_key||t.translation_key)&&(e.label=e.translation_key||t.translation_key),e.label=Ne.i18n.t(e.label),e.hasOwnProperty("doc_type_key")&&(e.label=Re.A.methods.getFieldLabelFromAllPrefixes(e)),String(e.label)},saveSettings(){return Be(this,void 0,void 0,(function*(){this.processing=!0,yield this.saveColumns(this.visible_columns_obj_list),this.processing=!1,this.show_column_settings=!1;const e=new CustomEvent("reload_columns",{});document.dispatchEvent(e)}))},intervalManager(){if(!this.elements_loaded||0!==this.clearInterval){if(this.elements_loaded&&0!==this.clearInterval)return this.clearInterval=0,void clearInterval(this.clearInterval);this.isElementRendered(),this.elements_loaded&&this.addDragEvents(),!1===this.elements_loaded&&(this.clearInterval=setTimeout((()=>{this.intervalManager()}),1e3))}},isElementRendered(){let e=document.querySelectorAll(".visible-columns-parent .box");return e.length>0&&(this.elements_loaded=!0,!0)},removeDragEvents(){let e=document.querySelectorAll(".visible-columns-parent .box");e.forEach((e=>{e.removeEventListener("dragstart",this.handleDragStart),e.removeEventListener("dragend",this.handleDragEnd),e.removeEventListener("dragover",this.handleDragOver),e.removeEventListener("dragenter",this.handleDragEnter),e.removeEventListener("dragleave",this.handleDragLeave),e.removeEventListener("drop",this.handleDrop)}))},addDragEvents(){let e=document.querySelectorAll(".visible-columns-parent .box");e.forEach((e=>{e.removeEventListener("dragstart",this.handleDragStart),e.removeEventListener("dragend",this.handleDragEnd),e.removeEventListener("dragover",this.handleDragOver),e.removeEventListener("dragenter",this.handleDragEnter),e.removeEventListener("dragleave",this.handleDragLeave),e.removeEventListener("drop",this.handleDrop),e.addEventListener("dragstart",this.handleDragStart),e.addEventListener("dragend",this.handleDragEnd),e.addEventListener("dragover",this.handleDragOver),e.addEventListener("dragenter",this.handleDragEnter),e.addEventListener("dragleave",this.handleDragLeave),e.addEventListener("drop",this.handleDrop)}))},handleDragStart(e){e.target.style.opacity="0.4",e.dataTransfer.effectAllowed="move";const t=e.target.getAttribute("data-order"),n=e.target.getAttribute("data-column-name");e.dataTransfer.setData("column_order",t),e.dataTransfer.setData("column_name",n)},handleDragEnd(e){e.target.style.opacity="1";let t=document.querySelectorAll(".visible-columns-parent .box");t.forEach((function(e,t){e.classList.remove("over")}))},handleDragOver(e){return e.preventDefault(),!1},handleDragEnter(e){e.target.classList.add("over")},handleDragLeave(e){e.target.classList.remove("over")},handleDrop(e){e.stopPropagation(),e.preventDefault();const t=+e.target.getAttribute("data-order"),n=e.target.getAttribute("data-column-name"),a=+e.dataTransfer.getData("column_order"),o=e.dataTransfer.getData("column_name");return this.visible_columns_obj_list[o].order=t,this.visible_columns_obj_list[n].order=a,this.visible_columns.forEach((e=>{e.name===o&&(e.order=t),e.name===n&&(e.order=a)})),this.sortVisibleColumns(),this.$forceUpdate(),!1},sortVisibleColumns(){this.visible_columns.sort(((e,t)=>e.order-t.order))},onDashboardColumnDialogHide(){this.removeDragEvents(),this.show_column_settings=!1},onDocTypeFieldsDialogHide(){this.show_doc_type_fields=!1},addColumns(e){if(e){for(const t in e.detail.selected_fields)this.visible_columns_obj_list[t]=e.detail.selected_fields[t];this.setVibileColumnsForView(this.visible_columns_obj_list),this.onDocTypeFieldsDialogHide()}},removeDocTypeColumn(e){delete this.visible_columns_obj_list[e],this.setVibileColumnsForView(this.visible_columns_obj_list)},saveColumns(e){return Be(this,void 0,void 0,(function*(){const t=JSON.stringify(e),n=(0,q.Bu)();yield n.updateSetting(this.columns_key.toUpperCase(),t),this.$emit("columnsUpdated",{visible_columns:this.visible_columns,hidden_columns:this.hidden_columns});const a=new CustomEvent("columnsUpdated",{detail:{visible_columns:this.visible_columns,hidden_columns:this.hidden_columns}});document.dispatchEvent(a)}))}},setup(){return{elements_loaded:(0,E.KR)(!1),visible_columns:(0,E.KR)([]),visible_columns_obj_list:(0,E.KR)({}),hidden_columns:(0,E.KR)({}),processing:(0,E.KR)(!1),show_column_settings:(0,E.KR)(!1),show_doc_type_fields:(0,E.KR)(!1)}}});var We=n(97410),He=n(82156),Me=n(23316),ze=n(36914),Je=n(39150),Ze=n(56384),Ge=n(44189),Ye=n(80460),et=n(50492),tt=n(39035),nt=n(88672);const at=(0,T.A)(Ue,[["render",Ke],["__scopeId","data-v-87444eb2"]]),ot=at;H()(Ue,"components",{QTooltip:We.A,QDialog:He.A,QCard:Me.A,QToolbar:ze.A,QToolbarTitle:Je.A,QBtn:Ze.A,QCardSection:Ge.A,QCheckbox:Ye.A,QIcon:et.A,QInnerLoading:tt.A}),H()(Ue,"directives",{ClosePopup:nt.A});var st=function(e,t,n,a){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function i(e){try{r(a.next(e))}catch(t){s(t)}}function l(e){try{r(a["throw"](e))}catch(t){s(t)}}function r(e){e.done?n(e.value):o(e.value).then(i,l)}r((a=a.apply(e,t||[])).next())}))};const it=(0,a.pM)({components:{quickSearch:we,ColumnOrganization:ot},methods:{refreshFilters(){this.getInvoiceData()},getAllInvoices(){this.resetFilter(),this.getInvoiceData()},getInvoiceStatus(e){return st(this,void 0,void 0,(function*(){this.resetPagination(),this.params.status=e,yield this.getInvoiceData()}))}},setup(){const e=(0,q.LN)(),{total_count:t,total_invoice_count:n,total_closed_count:a,params:o,table_columns:s}=(0,C.bP)(e),{getInvoiceData:i,resetFilter:l,resetPagination:r}=e;return{total_count:t,total_invoice_count:n,total_closed_count:a,getInvoiceData:i,resetFilter:l,resetPagination:r,params:o,table_columns:s}}}),lt=(0,T.A)(it,[["render",ae]]),rt=lt;H()(it,"components",{QSpace:Ce.A,QTooltip:We.A});var dt=function(e,t,n,a){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function i(e){try{r(a.next(e))}catch(t){s(t)}}function l(e){try{r(a["throw"](e))}catch(t){s(t)}}function r(e){e.done?n(e.value):o(e.value).then(i,l)}r((a=a.apply(e,t||[])).next())}))};const ct=(0,a.pM)({mixins:[L.A,x.A,S.A,w.A,J.A],props:{type_name:{type:String,reqired:!0,default:"invoice"}},components:{SubHeader:F.A,ColumnOrderBy:$,PaginationInvoice:z,InvoiceDashboardHeader:rt},data(){return{show_table_loader:(0,E.KR)(!1)}},mounted(){const{user_settings:e}=(0,q.Bu)();if(this.init(),this.initDragDropColumns("invoice_table","label"),document.addEventListener("invoice_table-column-drop",this.onDropColumns),e["INVOICES_DASHBOARD_COLUMNS"]){let t=(0,E.KR)();this.visible_columns=JSON.parse(e["INVOICES_DASHBOARD_COLUMNS"]),t.value=Object.values(this.visible_columns);let n=(0,E.KR)();n.value=Object.values(this.table_columns).map((e=>{t.value.map((t=>{t.name===e.name&&(t.label=e.translation_key)}))}))}this.prepareTableColumns(),document.addEventListener("columnsUpdated",(e=>{e.detail&&(this.visible_columns=e.detail.visible_columns,this.tableColumns=this.visible_columns)}))},unmounted(){document.removeEventListener("columnsUpdated",(()=>{})),document.removeEventListener("invoice_table-column-drop",this.onDropColumns)},methods:{init(){return dt(this,void 0,void 0,(function*(){yield this.getInvoices(!0)}))},prepareTableColumns(){if(this.visible_columns&&Object.keys(this.visible_columns).length>0){let e=(0,E.KR)();e.value=Object.values(JSON.parse(JSON.stringify(this.visible_columns))),e.value=e.value.sort(((e,t)=>e.order-t.order)),this.tableColumns=e.value}},onDropColumns(){this.savedOrderColumns(this.tableColumns)},savedOrderColumns(e){return dt(this,void 0,void 0,(function*(){try{this.loading=!0;let t=JSON.parse(JSON.stringify(e)),n={};t.forEach(((e,t)=>{n[e.name]={name:e.name,required:!0,order:t,label:e.label,field:e.field,selected:!1,actions:e.actions}})),yield this.updateSetting("INVOICES_DASHBOARD_COLUMNS",JSON.stringify(n))}catch(t){this.showErrorToast(this.$t("pages.messages.error_internal_occur"))}finally{this.loading=!1}}))},getInvoices(e){return dt(this,void 0,void 0,(function*(){try{this.loading=!0,e&&(this.show_table_loader=!0),yield this.getInvoiceData()}catch(t){}finally{this.loading=!1,this.show_table_loader=!1}}))},paginationItemClicked(){return dt(this,void 0,void 0,(function*(){try{yield this.getInvoices(!0)}catch(e){}finally{this.loading=!1}}))}},setup(){const e=(0,q.LN)(),{display_data:t,table_columns:n,loading:a,pagination:o}=(0,C.bP)(e),{getInvoiceData:s}=e,{t:i}=(0,D.s9)(),l=(0,q.Bu)(),{updateSetting:r}=l,d=(0,E.KR)();return d.value=Object.values(JSON.parse(JSON.stringify(n.value))).map((e=>({name:e.name,required:!0,order:e.order,label:e.translation_key,field:e.field,actions:e.actions}))),d.value=d.value.sort(((e,t)=>e.order-t.order)),{t:i,table_columns:n,display_data:t,loading:a,getInvoiceData:s,pagination:o,visible_columns:(0,E.KR)({}),tableColumns:d,updateSetting:r}}});var ut=n(10386),mt=n(42315),vt=n(44488),ht=n(57722),_t=n(45262),pt=n(23954),gt=n(857),bt=n(54700);const ft=(0,T.A)(ct,[["render",k],["__scopeId","data-v-4b4f6da4"]]),yt=ft;H()(ct,"components",{QSeparator:ut.A,QTable:mt.A,QTr:vt.A,QTh:ht.A,QTd:_t.A,QBadge:pt.A,QMarkupTable:gt.A,QPagination:bt.A,QInnerLoading:tt.A})}}]);