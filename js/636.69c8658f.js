"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[636],{50636:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Le});var o=s(61758),r=s(58790),i=s(29104);const a={class:"col-6 pl-20",style:{"margin-top":"10px","margin-bottom":"-5vh"}},l={style:{"vertical-align":"middle","margin-left":"10px","font-size":"20px",cursor:"pointer"}},n={class:"row"},d={key:1},c={class:"text-subtitle2 row",style:{"margin-bottom":"20px","margin-top":"5px"}},u={key:0,class:"col-5"},w={key:0},h={class:"card-category-text"},f={key:0,class:"row"},g={class:"col-11"},k={key:0,class:"col-1"},_={key:1,class:"col-1"},p={class:"card-category-text"},m={class:"col-11"},v={key:0,class:"col-1"},y={key:1,class:"col-1"},b={class:"card-category-text"},C={class:"col-11"},F={key:0,class:"col-1"},L={key:1,class:"col-1"},x={key:1},X={class:"small-heading"},E={class:"card-category-text"},A={key:0,class:"row"},S={class:"col-11"},K={class:"card-category-text"},W={class:"col-11"},D={class:"card-category-text"},$={class:"col-11"},T={class:"col-7"},j={class:"small-heading"},R={key:0},I={key:1},q={key:0},z={class:"col-10"},Q={key:1};function O(e,t,s,O,B,G){const V=(0,o.g2)("SubHeader"),M=(0,o.g2)("q-icon"),P=(0,o.g2)("q-btn"),U=(0,o.g2)("q-th"),H=(0,o.g2)("q-tr"),J=(0,o.g2)("q-td"),N=(0,o.g2)("GenericCard"),Y=(0,o.g2)("q-table"),Z=(0,o.g2)("Loader");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(V,{name:"WorkflowLogs",label:e.$t("workflow_logs"),display_help_link:!1},null,8,["label"]),(0,o.Lk)("div",a,[(0,o.bF)(P,{flat:"",rounded:"",color:"primary",to:"/dashboard"},{default:(0,o.k6)((()=>[(0,o.bF)(M,{name:"fa-solid fa-circle-arrow-left",size:"sm"}),(0,o.Lk)("label",l,(0,r.v_)(e.$t("dashboard")),1)])),_:1})]),(0,o.Lk)("div",n,[(0,o.bF)(Y,{flat:"",bordered:"",title:e.$t("workflow_logs"),rows:this.rows,columns:e.columns,style:{width:"95%",margin:"3%","max-height":"80vh","max-width":"95%"},"rows-per-page-options":[10,15,20,25,0],separator:"cell","wrap-cells":""},{header:(0,o.k6)((t=>[(0,o.bF)(H,{props:t},{default:(0,o.k6)((()=>[(0,o.bF)(U,{"auto-width":""}),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.cols,(s=>((0,o.uX)(),(0,o.Wv)(U,{key:s.name,props:t},{default:(0,o.k6)((()=>[(0,o.eW)((0,r.v_)(e.$t(s.label)),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),body:(0,o.k6)((t=>[(0,o.bF)(H,{props:t},{default:(0,o.k6)((()=>[(0,o.bF)(J,{"auto-width":""},{default:(0,o.k6)((()=>[(0,o.bF)(P,{size:"sm",color:"primary",round:"",dense:"",onClick:e=>t.expand=!t.expand,icon:t.expand?"keyboard_arrow_up":"keyboard_arrow_down"},null,8,["onClick","icon"])])),_:2},1024),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.cols,(e=>((0,o.uX)(),(0,o.Wv)(J,{key:e.name,props:t},{default:(0,o.k6)((()=>["result"===e.name?((0,o.uX)(),(0,o.Wv)(J,{key:0,style:{display:"flex","align-items":"center","justify-content":"center"}},{default:(0,o.k6)((()=>[(0,o.bF)(M,{name:"success"===t.row[e.name]?"check_circle":"cancel",color:"success"===t.row[e.name]?"green":"red",size:"sm"},null,8,["name","color"])])),_:2},1024)):((0,o.uX)(),(0,o.CE)("div",d,(0,r.v_)(e.value),1))])),_:2},1032,["props"])))),128))])),_:2},1032,["props"]),(0,o.bo)((0,o.bF)(H,{props:t},{default:(0,o.k6)((()=>[(0,o.bF)(J,{colspan:"100%"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",c,[Object.keys(this.workflows).includes(t.row.workflow_id)?((0,o.uX)(),(0,o.CE)("div",u,[this.workflowChanged(t.row.id)?((0,o.uX)(),(0,o.CE)("div",x,[(0,o.Lk)("div",X,(0,r.v_)(e.$t("workflow_changed")),1),(0,o.Lk)("div",null,[(0,o.Lk)("div",E,(0,r.v_)(e.$t("wf_when")),1)]),Object.keys(this.workflows).includes(t.row.workflow_id)?((0,o.uX)(),(0,o.CE)("div",A,[(0,o.Lk)("div",S,[(0,o.bF)(N,{item:this.workflows[t.row.workflow_id].data.when_condition,version:this.workflows[t.row.workflow_id].data.when_condition.version,onClick:e=>this.getCardLogs(this.workflows[t.row.workflow_id].data.when_condition.id,t.row.id,0,"when")},null,8,["item","version","onClick"])])])):(0,o.Q3)("",!0),(0,o.Lk)("div",null,[(0,o.Lk)("div",K,(0,r.v_)(e.$t("wf_and")),1)]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(this.workflows[t.row.workflow_id].data.and_conditions,((e,s)=>((0,o.uX)(),(0,o.CE)("div",{class:"row",key:e.id+"_"+e.card_version+"_"+s},[(0,o.Lk)("div",W,[(0,o.bF)(N,{item:e,version:e.version,onClick:o=>this.getCardLogs(e.id,t.row.id,s,"and")},null,8,["item","version","onClick"])])])))),128)),(0,o.Lk)("div",null,[(0,o.Lk)("div",D,(0,r.v_)(e.$t("wf_then")),1)]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(this.workflows[t.row.workflow_id].data.then_conditions,((e,s)=>((0,o.uX)(),(0,o.CE)("div",{class:"row",key:e.id+"_"+e.card_version+"_"+s},[(0,o.Lk)("div",$,[(0,o.bF)(N,{item:e,version:e.version,onClick:o=>this.getCardLogs(e.id,t.row.id,s,"then")},null,8,["item","version","onClick"])])])))),128))])):((0,o.uX)(),(0,o.CE)("div",w,[(0,o.Lk)("div",null,[(0,o.Lk)("div",h,(0,r.v_)(e.$t("wf_when")),1)]),Object.keys(this.workflows).includes(t.row.workflow_id)?((0,o.uX)(),(0,o.CE)("div",f,[(0,o.Lk)("div",g,[(0,o.bF)(N,{item:this.workflows[t.row.workflow_id].data.when_condition,version:this.workflows[t.row.workflow_id].data.when_condition.version,onClick:e=>this.getCardLogs(this.workflows[t.row.workflow_id].data.when_condition.id,t.row.id,0,"when")},null,8,["item","version","onClick"])]),"success"==t.row.logs[0][0].card_result?((0,o.uX)(),(0,o.CE)("div",k,[(0,o.bF)(M,{name:"check_circle",size:"22px",color:"green"})])):((0,o.uX)(),(0,o.CE)("div",_,[(0,o.bF)(M,{name:"cancel",size:"22px",color:"red"})]))])):(0,o.Q3)("",!0),(0,o.Lk)("div",null,[(0,o.Lk)("div",p,(0,r.v_)(e.$t("wf_and")),1)]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(this.workflows[t.row.workflow_id].data.and_conditions,((s,r)=>((0,o.uX)(),(0,o.CE)("div",{class:"row",key:s.id+"_"+s.card_version+"_"+r},[(0,o.Lk)("div",m,[(0,o.bF)(N,{item:s,version:s.version,onClick:e=>this.getCardLogs(s.id,t.row.id,r,"and")},null,8,["item","version","onClick"])]),e.checkCardSuccess(t.row.id,r,"and")?((0,o.uX)(),(0,o.CE)("div",v,[(0,o.bF)(M,{name:"check_circle",size:"22px",color:"green"})])):((0,o.uX)(),(0,o.CE)("div",y,[(0,o.bF)(M,{name:"cancel",size:"22px",color:"red"})]))])))),128)),(0,o.Lk)("div",null,[(0,o.Lk)("div",b,(0,r.v_)(e.$t("wf_then")),1)]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(this.workflows[t.row.workflow_id].data.then_conditions,((s,r)=>((0,o.uX)(),(0,o.CE)("div",{class:"row",key:s.id+"_"+s.card_version+"_"+r},[(0,o.Lk)("div",C,[(0,o.bF)(N,{item:s,version:s.version,onClick:e=>this.getCardLogs(s.id,t.row.id,r,"then")},null,8,["item","version","onClick"])]),e.checkCardSuccess(t.row.id,r,"then")?((0,o.uX)(),(0,o.CE)("div",F,[(0,o.bF)(M,{name:"check_circle",size:"22px",color:"green"})])):((0,o.uX)(),(0,o.CE)("div",L,[(0,o.bF)(M,{name:"cancel",size:"22px",color:"red"})]))])))),128))]))])):(0,o.Q3)("",!0),(0,o.Lk)("div",T,[(0,o.Lk)("div",j,[this.workflowChanged(t.row.id)?((0,o.uX)(),(0,o.CE)("div",I,(0,r.v_)(e.$t("workflow_logs")),1)):((0,o.uX)(),(0,o.CE)("div",R,(0,r.v_)(e.$t("card_logs")),1))]),Object.keys(this.displayed_messages).includes(t.row.id)?((0,o.uX)(),(0,o.CE)("div",q,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(this.displayed_messages[t.row.id],(e=>((0,o.uX)(),(0,o.CE)("div",{key:e,class:"row",style:{"text-wrap":"wrap"}},[(0,o.Lk)("div",z,(0,r.v_)(e.message),1)])))),128))])):((0,o.uX)(),(0,o.CE)("div",Q,(0,r.v_)(e.$t("card_logs_message")),1))])])])),_:2},1024)])),_:2},1032,["props"]),[[i.aG,t.expand]])])),_:1},8,["title","rows","columns"])]),(0,o.bF)(Z)],64)}var B=s(24622),G=s(38734);const V={class:"col-sm-12 col-md-12 col-lg-12"},M=["innerHTML"],P={class:"color-93939A paddingMargin0 font-size-0-75"},U={class:"paddingMargin0 font-size-15",style:{"text-wrap":"wrap"}};function H(e,t,s,i,a,l){const n=(0,o.g2)("q-btn"),d=(0,o.g2)("q-card-section"),c=(0,o.g2)("q-card");return(0,o.uX)(),(0,o.CE)("div",V,[(0,o.bF)(c,{class:"row",style:{"margin-bottom":"10px"}},{default:(0,o.k6)((()=>[(0,o.bF)(n,{class:"col-2 p-10",disable:"",round:"",flat:"",size:"xs",style:(0,r.Tr)("background-color:"+e.color)},{default:(0,o.k6)((()=>[(0,o.Lk)("i",{innerHTML:e.item.svg,class:"svg-icon center-inner"},null,8,M)])),_:1},8,["style"]),(0,o.bF)(d,{class:"col-10"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",P,(0,r.v_)(e.$t(e.item.category)),1),(0,o.Lk)("p",U,[!e.dataArray||e.dataArray.length<1?((0,o.uX)(),(0,o.CE)(o.FK,{key:0},[(0,o.eW)((0,r.v_)(e.$t(e.item.text)),1)],64)):((0,o.uX)(!0),(0,o.CE)(o.FK,{key:1},(0,o.pI)(e.dataArray,((t,s)=>((0,o.uX)(),(0,o.CE)(o.FK,{key:s},[e.renderBadge(t)?((0,o.uX)(),(0,o.CE)(o.FK,{key:0},[(0,o.eW)((0,r.v_)(e.$t(e.getVariableData(t))),1)],64)):e.renderTextTranslation(t)?((0,o.uX)(),(0,o.CE)(o.FK,{key:1},[(0,o.eW)((0,r.v_)(e.$t(t)),1)],64)):((0,o.uX)(),(0,o.CE)(o.FK,{key:2},[(0,o.eW)((0,r.v_)(t+" "),1)],64))],64)))),128))])])),_:1})])),_:1})])}var J=s(96056),N=s(18505),Y=s(76956),Z=s(66715),ee=s(1659),te=s(11470),se=function(e,t,s,o){function r(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,i){function a(e){try{n(o.next(e))}catch(t){i(t)}}function l(e){try{n(o["throw"](e))}catch(t){i(t)}}function n(e){e.done?s(e.value):r(e.value).then(a,l)}n((o=o.apply(e,t||[])).next())}))};const oe=(0,ee.nY)("workflow_logs_variables_store",{state:()=>({users:[],groups:[],workflows:[]}),getters:{getStoredUsers:e=>e.users},actions:{getUsers(){return se(this,void 0,void 0,(function*(){if(0==this.users.length){const e=yield te.jD.getUsers();e.forEach((e=>{this.users.push(e)}))}}))},getGroups(){return se(this,void 0,void 0,(function*(){if(0==this.groups.length){const e=yield te.jD.getGroups();e.forEach((e=>{this.groups.push(e)}))}}))},getWorkflows(){return se(this,void 0,void 0,(function*(){if(0==this.users.length){const e=yield te.Bj.getWorkflowsForOrg();e.forEach((e=>{this.workflows.push(e)}))}}))}}}),re=(0,o.pM)({name:"generic-card",emits:[],mixins:[B.A,J.A,N.A],components:{},props:{isDialog:{type:Boolean,default:!1},itemIndex:{type:Number,default:null},cardType:{type:String,default:""},parentSvg:{type:String,default:""},color:{type:String,default:""},item:{type:Object,default:{category:"",id:"",text:"",toolTip:"",card_version:""}}},data(){return{showItemPanel:(0,G.KR)(!1),dataArray:(0,G.KR)([])}},mounted(){this.prepareDataForVariableReplacement(),this.prepareData()},methods:{renderBadge(e){return e.startsWith(Y.XF)},renderTextTranslation(e){return e.startsWith(Y.Q9)},getVariableData(e){if(this.item)for(let t of this.item.variables)if(t.id.split(Y.XF).join("")==e.split(Y.XF).join("")){if(["user","users","operator","math_operator","sub_org_id","groups","workflow","export_configuration","decision_table"].includes(t.display_name))switch(t.display_name){case"user":case"users":case"groups":case"operator":case"sub_org_id":return this.getVariableDataForID(t.display_name,"id",t.data);case"operator":case"math_operator":return Z.i18n.t(t.data);case"workflow":return this.getVariableDataForID(t.display_name,"entries.id",t.data)}return t.data}return""},getVariableDataForID(e,t,s){const o=Object.keys(this.data);if(o.includes(e)){let o=[];for(let r of s.split(","))for(let s of this.data[e])if(s[t]==r)switch(e){case"user":case"users":const e=s.first_name+" "+s.last_name;-1==o.indexOf(e)&&o.push(e);break;case"groups":case"workflows":o.push(s.name);break}return o.length>0?o.toString():s}return s},prepareDataForVariableReplacement(){this.data.users=this.users,this.data.user=this.users,this.data.groups=this.groups,this.data.workflows=this.workflows},prepareData(){try{if(this.item&&this.$t(this.item.text).includes(Y.XF)){let e=this.$t(this.item.text).split(/(__%)/);for(let t=0;t<e.length;t++){let s="";e[t]&&(e[t]==Y.XF?(s=e[t]+e[t+1]+e[t+2],t+=2):s=e[t],this.dataArray.push(s))}}}catch(e){}}},setup(){const e=oe(),{users:t,groups:s,workflows:o}=(0,ee.bP)(e);return{users:t,groups:s,workflows:o,data:{}}}});var ie=s(12807),ae=s(23316),le=s(56384),ne=s(44189),de=s(98582),ce=s.n(de);const ue=(0,ie.A)(re,[["render",H],["__scopeId","data-v-7ed73610"]]),we=ue;ce()(re,"components",{QCard:ae.A,QBtn:le.A,QCardSection:ne.A});var he=s(8420),fe=s(36246),ge=s(91236),ke=s(46736),_e=function(e,t,s,o){function r(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,i){function a(e){try{n(o.next(e))}catch(t){i(t)}}function l(e){try{n(o["throw"](e))}catch(t){i(t)}}function n(e){e.done?s(e.value):r(e.value).then(a,l)}n((o=o.apply(e,t||[])).next())}))};const pe=(0,o.pM)({name:"workflowLogs",mixins:[B.A,J.A,N.A,ke.A],components:{Loader:he.A,GenericCard:we,SubHeader:ge.A},data(){return{}},mounted(){return _e(this,void 0,void 0,(function*(){this.showLoading(),yield this.getLogsForDocument(),this.getUsers(),this.getGroups(),this.getWorkflows,this.prepareTableRows(),this.hideLoading(),window.vpo=this}))},methods:{formatDate(e,t){return fe.Ay.formatDate(e,t)},prepareTableRows(){this.rows=this.logs;for(let e=0;e<this.rows.length;e++)this.rows[e].name=this.rows[e].workflow_name,this.rows[e].created_on=this.formatDateAccordingToPreference(this.rows[e].created_on),this.rows[e].run_time_seconds=(this.rows[e].run_time_mili_seconds/1e3).toFixed(2)},getLogsForDocument(){return _e(this,void 0,void 0,(function*(){let e={with_name:!0},t=yield te.Bj.getWorkflowLogsForDoc(this.$route.params.id.toString(),e);this.logs=t.logs;for(let s of t.logs)yield this.loadWorkflow(s.workflow_id),this.expanded[s.id]=!1}))},loadWorkflow(e){return _e(this,void 0,void 0,(function*(){if(!Object.keys(this.workflows).includes(e)){let t=yield te.Bj.loadworkflowJson(e);this.workflows[e]=t,this.workflows[e].last_modified_on=this.formatDateAccordingToPreference(t.last_modified_on)}}))},getCardLogs(e,t,s,o){Object.keys(this.card_messages).includes(e.toString()+t.toString()+s+"_"+o)||this.prepareCardLogs(e,t,s,o),this.displayed_messages[t.toString()]=this.card_messages[e.toString()+t.toString()+s+"_"+o]},prepareCardLogs(e,t,s,o){const r=this.getWorkflowRunLog(t);if("when"==o)this.card_messages[e.toString()+t.toString()+s+"_"+o]=r[0];else if("and"==o){for(let i=1;i<r.length;i++)if(i==s+1){this.card_messages[e.toString()+t.toString()+s+"_"+o]=r[i];break}}else if("then"==o)for(let i=0;i<r.length;i++)if(r[i][0].run_category==o){this.card_messages[e.toString()+t.toString()+s+"_"+o]=r[i+s];break}},prepareCompleteLogs(e){const t=this.getWorkflowRunLog(e);let s=[];for(let o of t)for(let e of o)s.push(e);this.displayed_messages[e.toString()]=s},checkCardSuccess(e,t,s){const o=this.getWorkflowRunLog(e);try{if("when"==s)return"success"==o[0][0].card_result;if("and"==s)return t+=1,"success"==o[t][0].card_result;if("then"==s)for(let e=1;e<o.length;e++)if(o[e][0].run_category==s)return"success"==o[e+t][0].card_result}catch(r){}},getWorkflowRunLog(e){let t="";for(let s of this.logs)s.id==e&&(t=s.logs);return t},workflowChanged(e){let t=!1;for(let s of this.logs)if(s.id==e)return t=s.created_on<this.workflows[s.workflow_id].last_modified_on,t&&this.prepareCompleteLogs(e),t;return t}},setup(){const e=[{name:"workflow_name",required:!0,label:"wf_name",align:"left",field:"workflow_name",headerClasses:"table-header-wf-logs",style:"width: 40%;",headerStyle:" width: 40%;"},{name:"created_on",required:!1,label:"doc2light.table.created_on",align:"left",field:"created_on",headerClasses:"table-header-wf-logs"},{name:"run_time_seconds",required:!1,label:"run_time_seconds",align:"right",field:"run_time_seconds",headerClasses:"table-header-wf-logs",headerStyle:"align-items: left; justify-content: left;"},{name:"result",required:!1,label:"result",align:"left",field:"result",style:" align-items: center; justify-content: center; width: 10%;",headerStyle:" width: 10%;",headerClasses:"table-header-wf-logs"}],t=oe(),{getUsers:s,getGroups:o,getWorkflows:r}=t;return{logs:(0,G.KR)([]),expanded:(0,G.KR)({}),workflows:(0,G.KR)({}),card_messages:(0,G.KR)({}),displayed_messages:(0,G.KR)({}),wf_logs:(0,G.KR)({}),columns:e,rows:(0,G.KR)([]),getUsers:s,getGroups:o,getWorkflows:r}}});var me=s(50492),ve=s(42315),ye=s(44488),be=s(57722),Ce=s(45262);const Fe=(0,ie.A)(pe,[["render",O],["__scopeId","data-v-ed07dda0"]]),Le=Fe;ce()(pe,"components",{QBtn:le.A,QIcon:me.A,QTable:ve.A,QTr:ye.A,QTh:be.A,QTd:Ce.A})}}]);