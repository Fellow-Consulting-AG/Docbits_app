"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[4170],{94170:(e,t,s)=>{s.r(t),s.d(t,{default:()=>we});var a=s(61758),i=s(58790);const o={key:1,class:"row q-pl-md"},r={key:2,class:"row bg-grey-2 q-pl-md q-pr-md q-pb-md"},l={class:"col-3 footer-status-message"};function n(e,t,s,n,d,u){const c=(0,a.g2)("MessageBanner"),p=(0,a.g2)("SubHeader"),h=(0,a.g2)("Task"),g=(0,a.g2)("ImageComponent"),_=(0,a.g2)("q-splitter"),m=(0,a.g2)("ErrorDocumentView"),k=(0,a.g2)("Loader"),b=(0,a.g2)("q-separator"),f=(0,a.g2)("q-toolbar"),v=(0,a.g2)("q-footer");return(0,a.uX)(),(0,a.CE)(a.FK,null,[e.isReadOnly||e.error?((0,a.uX)(),(0,a.Wv)(c,{key:0,message:e.error_message,messageCategoryClass:"error-banner"},null,8,["message"])):(0,a.Q3)("",!0),(0,a.bF)(p,{name:"tasks",label:e.$t("tasks"),show_expiry_alert:!0,onSearch:!1},null,8,["label"]),e.doc_fetch_error?((0,a.uX)(),(0,a.CE)("div",r,[(0,a.bF)(m)])):((0,a.uX)(),(0,a.CE)("div",o,[(0,a.Lk)("div",{class:(0,i.C4)(["scroll-area-height-medi",e.expert_mode?"right_section":"full-width"]),id:"right_section"},[(0,a.bF)(_,{modelValue:e.splitterModel,"onUpdate:modelValue":t[0]||(t[0]=t=>e.splitterModel=t),class:"aa-splitter full-width right-content-height"},{before:(0,a.k6)((()=>[e.task?((0,a.uX)(),(0,a.Wv)(h,{key:0})):(0,a.Q3)("",!0)])),separator:(0,a.k6)((()=>[])),after:(0,a.k6)((()=>[(0,a.bF)(g,{renderOpenWindoIcon:!0,docName:e.record.filename,docImages:e.record.images},null,8,["docName","docImages"])])),_:1},8,["modelValue"])],2)])),(0,a.bF)(k),(0,a.bF)(v,{class:"validation-status-bar back-white"},{default:(0,a.k6)((()=>[(0,a.bF)(f,{class:"row justify-start"},{default:(0,a.k6)((()=>[(0,a.Lk)("span",{class:"footer-filename text-primary cursor-pointer",onClick:t[1]||(t[1]=t=>e.openDocument())},(0,i.v_)(e.record.filename),1),(0,a.bF)(b,{vertical:"",class:"q-mx-md"}),(0,a.Lk)("span",l,(0,i.v_)(e.currentDisplayedMessage),1)])),_:1})])),_:1})],64)}var d=s(1659),u=s(24622),c=s(38734),p=s(96056),h=s(89156),g=s(64233),_=s(18505),m=s(28684),k=s(25891),b=s(77362),f=s(12566),v=s(68450),y=s(51184),w=s(64775),L=s(29104);const F={class:"row full-width q-mb-sm"},V={class:"col-9 secondary-c-text text-h6 text-weight-bold"},D={key:0,class:"col-3 secondary-c-text text-h6 text-weight-bold q-ml-auto"},A={class:"row full-width q-mb-sm"},q={class:"col-6"},T={class:"col-6 q-pl-sm"},C={class:"row full-width q-mb-sm"},O={class:"col-6"},$={class:"col-6 q-pl-sm"},Q={class:"row full-width q-mb-sm"},U={class:"col-6"},I={class:"row items-center"},x={class:"row items-center justify-end q-gutter-sm"},E={class:"col-5 q-pl-sm"},P={class:"ellipsis"},M={class:"col-1"},K={class:"row full-width q-mb-sm"};function R(e,t,s,o,r,l){const n=(0,a.g2)("f-btn"),d=(0,a.g2)("q-tooltip"),u=(0,a.g2)("q-icon"),c=(0,a.g2)("q-input"),p=(0,a.g2)("q-select"),h=(0,a.g2)("q-date"),g=(0,a.g2)("q-popup-proxy"),_=(0,a.g2)("q-item-section"),m=(0,a.g2)("q-item"),k=(0,a.g2)("q-toggle"),b=(0,a.g2)("q-card-section"),f=(0,a.g2)("q-card-actions"),v=(0,a.g2)("q-card"),y=(0,a.gN)("close-popup");return(0,a.uX)(),(0,a.Wv)(v,{flat:"",class:"popup-background"},{default:(0,a.k6)((()=>[(0,a.bF)(b,{class:"q-pa-md"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",F,[(0,a.Lk)("div",V,(0,i.v_)(e.$t("task_details")),1),e.assign_to_me?((0,a.uX)(),(0,a.CE)("div",D,[(0,a.bF)(n,{label:e.$t("assign_to_me"),appearance:"primary",onClick:e.AssignToMe,class:"float-right"},null,8,["label","onClick"])])):(0,a.Q3)("",!0)]),(0,a.Lk)("div",A,[(0,a.Lk)("div",q,[(0,a.bF)(c,{dense:"",outlined:"",modelValue:e.task.title,"onUpdate:modelValue":t[0]||(t[0]=t=>e.task.title=t),class:"back-white full-width",label:e.$t("name")},{append:(0,a.k6)((()=>[e.errors.hasOwnProperty("title")&&""!=e.errors["title"]?((0,a.uX)(),(0,a.Wv)(u,{key:0,flat:"",dense:"",name:"error",size:"24px",color:"red"},{default:(0,a.k6)((()=>[(0,a.bF)(d,{class:"bg-red line-error-tooltip"},{default:(0,a.k6)((()=>[(0,a.eW)((0,i.v_)(e.errors["title"]),1)])),_:1})])),_:1})):(0,a.Q3)("",!0)])),_:1},8,["modelValue","label"])]),(0,a.Lk)("div",T,[(0,a.bF)(p,{dense:"",outlined:"",options:e.taskTypeOptions,class:"back-white",modelValue:e.task.is_notification,"onUpdate:modelValue":t[1]||(t[1]=t=>e.task.is_notification=t),label:e.$t("task_type"),"emit-value":"","map-options":""},null,8,["options","modelValue","label"])])]),(0,a.Lk)("div",C,[(0,a.Lk)("div",O,[(0,a.bF)(p,{dense:"",outlined:"",options:e.priorityOptions,class:"back-white",modelValue:e.task.priority,"onUpdate:modelValue":t[2]||(t[2]=t=>e.task.priority=t),"emit-value":"","map-options":"",label:e.$t("priority")},null,8,["options","modelValue","label"])]),(0,a.Lk)("div",$,[(0,a.bF)(p,{dense:"",outlined:"",options:e.statusOptions,class:"back-white",modelValue:e.task.status,"onUpdate:modelValue":t[3]||(t[3]=t=>e.task.status=t),label:e.$t("status"),"emit-value":"","map-options":""},null,8,["options","modelValue","label"])])]),(0,a.Lk)("div",Q,[(0,a.Lk)("div",U,[(0,a.bF)(c,{dense:"",outlined:"",readonly:"",class:"back-white",modelValue:e.task.deadline,"onUpdate:modelValue":t[10]||(t[10]=t=>e.task.deadline=t),label:e.$t("deadline")},{append:(0,a.k6)((()=>[(0,a.bF)(u,{name:"event",class:"cursor-pointer",onClick:t[9]||(t[9]=(0,L.D$)((()=>{}),["stop"]))},{default:(0,a.k6)((()=>[(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.eW)("Select Date-Time")])),_:1}),(0,a.bF)(g,{cover:"",modelValue:e.show_calender,"onUpdate:modelValue":t[8]||(t[8]=t=>e.show_calender=t),"transition-show":"scale","transition-hide":"scale",ref:"qDateProxy"},{default:(0,a.k6)((()=>[(0,a.bF)(h,{modelValue:e.task.date,"onUpdate:modelValue":[t[6]||(t[6]=t=>e.task.date=t),t[7]||(t[7]=t=>{e.OnDateChange(t)})],minimal:""},{default:(0,a.k6)((()=>[(0,a.Lk)("div",I,[(0,a.bF)(u,{name:"schedule ",class:"icon-grey q-mr-sm",size:"20px"}),(0,a.bF)(p,{dense:"",outlined:"",options:e.timeOptions,class:"back-white",modelValue:e.task.time,"onUpdate:modelValue":[t[4]||(t[4]=t=>e.task.time=t),t[5]||(t[5]=t=>{e.OnTimeChange(t)})],label:e.$t("set_time"),"emit-value":"","map-options":""},null,8,["options","modelValue","label"])]),(0,a.Lk)("div",x,[(0,a.bo)((0,a.bF)(n,{label:e.$t("pages.select_app.close"),appearance:"negative-tertiary"},null,8,["label"]),[[y]]),(0,a.bo)((0,a.bF)(n,{label:"Ok",appearance:"tertiary"},null,512),[[y]])])])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue","label"])]),(0,a.Lk)("div",E,[e.task["assigned_to_group"]?((0,a.uX)(),(0,a.Wv)(p,{key:0,clearable:"","use-input":"",dense:"",outlined:"",onFilter:e.filterGroupsEvent,options:e.filteredGroupList,loading:e.groups_loading,"hide-dropdown-icon":"","emit-value":"","map-options":"",class:"back-white",modelValue:e.task.assigned_to_group_id,"onUpdate:modelValue":t[11]||(t[11]=t=>e.task.assigned_to_group_id=t),label:e.$t("assigned_to_group")},{"selected-item":(0,a.k6)((e=>[(0,a.Lk)("div",P,(0,i.v_)(e.opt.label),1)])),"no-option":(0,a.k6)((()=>[(0,a.bF)(m,null,{default:(0,a.k6)((()=>[(0,a.bF)(_,null,{default:(0,a.k6)((()=>[(0,a.eW)(" No results ")])),_:1})])),_:1})])),append:(0,a.k6)((()=>[e.errors.hasOwnProperty("assigned_to_group_id")&&""!=e.errors["assigned_to_group_id"]?((0,a.uX)(),(0,a.Wv)(u,{key:0,flat:"",dense:"",name:"error",size:"24px",color:"red"},{default:(0,a.k6)((()=>[(0,a.bF)(d,{class:"bg-red line-error-tooltip"},{default:(0,a.k6)((()=>[(0,a.eW)((0,i.v_)(e.errors["assigned_to_group_id"]),1)])),_:1})])),_:1})):(0,a.Q3)("",!0)])),_:1},8,["onFilter","options","loading","modelValue","label"])):(0,a.Q3)("",!0),e.task["assigned_to_group"]?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.Wv)(p,{key:1,clearable:"","use-input":"",dense:"",outlined:"","hide-dropdown-icon":"",onFilter:e.filterUsersEvent,options:e.filteredUserList,loading:e.user_list_loading,"emit-value":"","map-options":"",class:"back-white",modelValue:e.task.assigned_to_user_id,"onUpdate:modelValue":t[12]||(t[12]=t=>e.task.assigned_to_user_id=t),label:e.$t("assigned_to")},{append:(0,a.k6)((()=>[e.errors.hasOwnProperty("assigned_to_user_id")&&""!=e.errors["assigned_to_user_id"]?((0,a.uX)(),(0,a.Wv)(u,{key:0,flat:"",dense:"",name:"error",size:"24px",color:"red"},{default:(0,a.k6)((()=>[(0,a.bF)(d,{class:"bg-red line-error-tooltip"},{default:(0,a.k6)((()=>[(0,a.eW)((0,i.v_)(e.errors["assigned_to_user_id"]),1)])),_:1})])),_:1})):(0,a.Q3)("",!0)])),"no-option":(0,a.k6)((()=>[(0,a.bF)(m,null,{default:(0,a.k6)((()=>[(0,a.bF)(_,null,{default:(0,a.k6)((()=>[(0,a.eW)(" No results ")])),_:1})])),_:1})])),_:1},8,["onFilter","options","loading","modelValue","label"]))]),(0,a.Lk)("div",M,[(0,a.bF)(k,{size:"lg",modelValue:e.task["assigned_to_group"],"onUpdate:modelValue":[t[13]||(t[13]=t=>e.task["assigned_to_group"]=t),e.resetAssigned],icon:e.task["assigned_to_group"]?"group":"person"},null,8,["modelValue","onUpdate:modelValue","icon"])])]),(0,a.Lk)("div",K,[(0,a.bF)(c,{dense:"",outlined:"",modelValue:e.task.description,"onUpdate:modelValue":t[14]||(t[14]=t=>e.task.description=t),class:"back-white full-width",label:e.$t("description"),type:"textarea",rows:"10"},null,8,["modelValue","label"])])])),_:1}),(0,a.bF)(f,{align:"right"},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:e.$t("save"),appearance:"tertiary",onClick:e.save,class:"cursor-pointer"},null,8,["label","onClick"]),(0,a.bF)(n,{label:e.$t("save_and_exit"),appearance:"primary",onClick:e.done,class:"cursor-pointer"},null,8,["label","onClick"]),(0,a.bF)(n,{label:e.$t("done"),appearance:"positive",onClick:e.finish_task,class:"q-mr-sm cursor-pointer"},null,8,["label","onClick"])])),_:1})])),_:1})}var S=s(83319),W=s(91486),B=s(11470),G=function(e,t,s,a){function i(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,o){function r(e){try{n(a.next(e))}catch(t){o(t)}}function l(e){try{n(a["throw"](e))}catch(t){o(t)}}function n(e){e.done?s(e.value):i(e.value).then(r,l)}n((a=a.apply(e,t||[])).next())}))};const X=(0,a.pM)({props:{},mixins:[u.A],emits:["btnClicked"],components:{},data(){return{taskTypeOptions:[{label:this.$t("task"),value:!1},{label:this.$t("notification"),value:!0}]}},watch:{groups_loading:function(e){e&&this.loadGroupsList()},user_list_loading:function(e){e&&this.loadUserList()},data_fetched:function(e){e&&(this.isButtonVisible(),this.convertDeadline())}},mounted:function(){this.initView()},methods:{initView(){try{this.priorityOptions=W.G.map((e=>({label:this.$t(e),value:e}))),this.statusOptions=W.E.map((e=>({label:this.$t(e),value:e}))),this.makeTimeOptions(),this.convertDeadline(),this.loadUserList(),this.loadGroupsList(),this.isButtonVisible()}catch(e){logInfo(e)}},isButtonVisible(){if(this.assign_to_me=!1,!this.data_fetched||!this.task.assigned_to_group_id)return;if(!this.task.hasOwnProperty("group_users")||0===this.task.group_users.length)return;const e=this.getUserDetailByKey("id");for(const[t,s]of Object.entries(this.task.group_users))s===e&&(this.assign_to_me=!0)},convertDeadline(){try{if(!this.data_fetched||(0,v.z)(this.task.deadline))return;const{formated_date:e,formatted_time:t,formatted_deadline:s}=this.getDisplayDeadline(this.task.deadline);this.task.date=e,this.task.time=t,this.task.deadline=s}catch(e){logInfo(e)}},OnTimeChange(e){const t=this.makeDeadline(e,this.task.date);this.task.deadline=t},OnDateChange(e){const t=this.makeDeadline(this.task.time,e);this.task.deadline=t},resetAssigned(){this.errors["assigned_to_group_id"]="",this.errors["assigned_to_user_id"]="",this.task.assigned_to_group_id=null,this.task.assigned_to_user_id=null},loadUserList(){this.filteredUserList=this.usersList},loadGroupsList(){this.filteredGroupList=this.group_list},filterGroupsEvent(e,t,s){e.length<1?s():t((()=>{const t=e.toLowerCase();this.filteredGroupList=this.group_list.filter((e=>e.label.toLowerCase().startsWith(t)))}))},filterUsersEvent(e,t,s){e.length<1?s():t((()=>{const t=e.toLowerCase();this.filteredUserList=this.usersList.filter((e=>e.label.toLowerCase().startsWith(t)))}))},finish_task(){return G(this,void 0,void 0,(function*(){this.task.status="done",yield this.done()}))},done(){return G(this,void 0,void 0,(function*(){yield this.save(),this.$router.go(-1)}))},save(){return G(this,void 0,void 0,(function*(){try{if(!this.validateForm())return;this.processing=!0;const e=Object.assign({},this.task);e.deadline=this.getIsoFormatDate(e.deadline),(0,v.z)(e.assigned_to_group_id)&&(e.assigned_to_group_id="",e.assigned_to_group="");const t=yield B.Hg.editTask(this.task.id,e);if(!1===t.success)throw t;this.showSuccessToast(this.$t("pages.messages.MSG_SAVE")),t.data.hasOwnProperty("group_users")&&(this.task.group_users=t.data.group_users)}catch(e){const t=w.t.getErrorMessage(e);this.showErrorToast(t),logError(e)}finally{this.processing=!1}}))},validateForm(){this.errors={};let e=!0;return this.task.title||(this.errors["title"]=this.$t("field_required"),e=!1),this.task.assigned_to_group?this.task.assigned_to_group_id||(this.errors["assigned_to_group_id"]=this.$t("field_required"),e=!1):this.task.assigned_to_user_id||(this.errors["assigned_to_user_id"]=this.$t("field_required"),e=!1),e},AssignToMe(){this.task.assigned_to_user_id=this.getUserDetailByKey("id"),this.task.assigned_to_group_id=null,this.task.assigned_to_group=!1,this.save()}},setup(){const e=(0,S.OP)(),{task:t,processing:s,data_fetched:a,timeOptions:i,task_date_format:o}=(0,d.bP)(e),{getTasks:r,makeTimeOptions:l,getDeadlineTime:n,getIsoFormatDate:u,makeDeadline:p,getDisplayDeadline:h}=e,g=(0,S.cY)(),_=(0,c.KR)(g.usersList),{user_list_loading:m,usersList:k}=(0,d.bP)(g),b=(0,S.$i)(),f=(0,c.KR)(b.group_list),{group_list:v,groups_loading:y}=(0,d.bP)(b),w=(0,S.kH)(),{getUserDetailByKey:L}=w;return{getDisplayDeadline:h,makeDeadline:p,getIsoFormatDate:u,task_date_format:o,getDeadlineTime:n,getUserDetailByKey:L,timeOptions:i,makeTimeOptions:l,data_fetched:a,group_list:v,groups_loading:y,filteredGroupList:f,user_list_loading:m,usersList:k,filteredUserList:_,task:t,processing:s,getTasks:r,priorityOptions:(0,c.KR)([]),statusOptions:(0,c.KR)([]),show_calender:(0,c.KR)(!1),errors:(0,c.KR)({}),assign_to_me:(0,c.KR)(!1)}}});var z=s(12807),N=s(23316),j=s(44189),H=s(67837),Y=s(50492),J=s(97410),Z=s(94940),ee=s(48975),te=s(93692),se=s(90124),ae=s(25173),ie=s(66908),oe=s(62669),re=s(88672),le=s(98582),ne=s.n(le);const de=(0,z.A)(X,[["render",R]]),ue=de;ne()(X,"components",{QCard:N.A,QCardSection:j.A,QInput:H.A,QIcon:Y.A,QTooltip:J.A,QSelect:Z.A,QPopupProxy:ee.A,QDate:te.A,QItem:se.A,QItemSection:ae.A,QToggle:ie.A,QCardActions:oe.A}),ne()(X,"directives",{ClosePopup:re.A});var ce=s(93970),pe=function(e,t,s,a){function i(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,o){function r(e){try{n(a.next(e))}catch(t){o(t)}}function l(e){try{n(a["throw"](e))}catch(t){o(t)}}function n(e){e.done?s(e.value):i(e.value).then(r,l)}n((a=a.apply(e,t||[])).next())}))};const he=(0,a.pM)({el:"#app",mixins:[u.A,p.A,_.A,g.A,k.A,m.A],components:{Loader:h.A,ErrorDocumentView:f.A,ImageComponent:y["default"],Task:ue,MessageBanner:ce.A,SubHeader:b.A},watch:{processing:function(e){e?this.showLoading():this.hideLoading()}},data(){return{docId:"",currentDisplayedMessage:(0,c.KR)("")}},beforeRouteLeave(e,t,s){this.record={},this.page=1,s()},mounted:function(){this.init(),window.addEventListener("resize",this.windowResize),document.body.addEventListener("click",this.mouseClicked,!0),document.addEventListener("dispatch_status_bar_message",this.dispatchTaskbarMessage)},unmounted:function(){window.removeEventListener("resize",this.windowResize),document.removeEventListener("dispatch_status_bar_message",this.dispatchTaskbarMessage)},methods:{dispatchTaskbarMessage(e){e.detail.message&&(this.currentDisplayedMessage=e.detail.message)},init(){return pe(this,void 0,void 0,(function*(){try{this.data_fetched=!1,this.showLoading(),this.resetTaskStore(),yield this.prepareUsersDropdown(),yield this.getGroups();const e=this.$route.params.id;if(yield this.getTask(e,!1),this.docId=this.task.document_id,yield this.getInvoiceDataByDocId(this.docId),this.data_fetched=!0,!this.record||0===Object.keys(this.record).length||!1===this.record.success||this.doc_fetch_error)return void this.hideLoading()}catch(e){const t=w.t.getErrorMessage(e);this.showErrorToast(t),logError(e)}finally{this.hideLoading()}}))},getInvoiceDataByDocId(e){return pe(this,void 0,void 0,(function*(){try{this.record=[];const t=yield this.getDocumentById(e);null!=t&&!1===t.success&&(this.error_message=t.message,this.error=!0,this.currentDisplayedMessage=t.message)}catch(t){throw t}}))},hasApiData(){return 0!==(0,v.Ns)(this.record)&&!this.doc_fetch_error},goToList(){this.$router.push("/tasks")},openDocument(){this.record.hasOwnProperty("has_layout")&&"true"===String(this.record.has_layout)&&this.$router.push("/field_validation_v1/"+this.record.doc_id)}},setup(){const e=(0,S.q3)();e.$reset();const{record:t,doc_loaded:s,error:a,has_ai_table:i,page:o,error_message:r}=(0,d.bP)(e),{getDocumentById:l}=e,n=(0,S._6)(),{tokenQueryParam:u}=(0,d.bP)(n);n.getTokenQueryParam();const p=(0,S.OP)(),{task:h,data_fetched:g}=(0,d.bP)(p),{getTask:_,resetTaskStore:m}=p,k=(0,S.cY)(),{prepareUsersDropdown:b}=k,f=(0,S.$i)(),{getGroups:v}=f;return{error_message:r,data_fetched:g,prepareUsersDropdown:b,getGroups:v,resetTaskStore:m,task:h,getTask:_,has_ai_table:i,doc_loaded:s,getDocumentById:l,record:t,error:a,doc_fetch_error:(0,c.KR)(""),page:o,isReadOnly:(0,c.KR)(!1),imageFieldSplitter:(0,c.KR)(36),is_admin:(0,c.KR)(!1),tokenQueryParam:u,splitterModel:(0,c.KR)(50)}}});var ge=s(98072),_e=s(57092),me=s(36914),ke=s(10386),be=s(67156),fe=s(42315),ve=s(56384);const ye=(0,z.A)(he,[["render",n],["__scopeId","data-v-4dc243d5"]]),we=ye;ne()(he,"components",{QSplitter:ge.A,QFooter:_e.A,QToolbar:me.A,QSeparator:ke.A,QField:be.A,QTable:fe.A,QBtn:ve.A,QItem:se.A})}}]);