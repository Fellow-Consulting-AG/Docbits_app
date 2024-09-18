"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[356],{40356:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Ce});var o=s(61758),r=s(58790),i=s(29104);const a={class:"row"},n={key:1},l={class:"text-subtitle2 row",style:{"margin-bottom":"20px","margin-top":"5px"}},d={key:0,class:"col-5"},c={key:0},u={class:"card-category-text"},w={key:0,class:"row"},h={class:"col-11"},f={key:0,class:"col-1"},g={key:1,class:"col-1"},k={class:"card-category-text"},_={class:"col-11"},p={key:0,class:"col-1"},m={key:1,class:"col-1"},v={class:"card-category-text"},y={class:"col-11"},b={key:0,class:"col-1"},C={key:1,class:"col-1"},F={key:1},L={class:"small-heading"},x={class:"card-category-text"},X={key:0,class:"row"},E={class:"col-11"},A={class:"card-category-text"},S={class:"col-11"},K={class:"card-category-text"},W={class:"col-11"},D={class:"col-7"},$={class:"small-heading"},T={key:0},j={key:1},R={key:0},I={class:"col-10"},q={key:1};function Q(e,t,s,Q,z,O){const B=(0,o.g2)("SubHeader"),G=(0,o.g2)("q-th"),V=(0,o.g2)("q-tr"),M=(0,o.g2)("q-btn"),P=(0,o.g2)("q-td"),U=(0,o.g2)("q-icon"),H=(0,o.g2)("GenericCard"),J=(0,o.g2)("q-table"),N=(0,o.g2)("Loader");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(B,{name:"WorkflowLogs",label:e.$t("workflow_logs"),display_help_link:!1},null,8,["label"]),(0,o.Lk)("div",a,[(0,o.bF)(J,{flat:"",bordered:"",title:e.$t("workflow_logs"),rows:this.rows,columns:e.columns,style:{width:"95%",margin:"3%","max-height":"80vh","max-width":"95%"},"rows-per-page-options":[10,15,20,25,0],separator:"cell","wrap-cells":""},{header:(0,o.k6)((t=>[(0,o.bF)(V,{props:t},{default:(0,o.k6)((()=>[(0,o.bF)(G,{"auto-width":""}),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.cols,(s=>((0,o.uX)(),(0,o.Wv)(G,{key:s.name,props:t},{default:(0,o.k6)((()=>[(0,o.eW)((0,r.v_)(e.$t(s.label)),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),body:(0,o.k6)((t=>[(0,o.bF)(V,{props:t},{default:(0,o.k6)((()=>[(0,o.bF)(P,{"auto-width":""},{default:(0,o.k6)((()=>[(0,o.bF)(M,{size:"sm",color:"primary",round:"",dense:"",onClick:e=>t.expand=!t.expand,icon:t.expand?"keyboard_arrow_up":"keyboard_arrow_down"},null,8,["onClick","icon"])])),_:2},1024),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.cols,(e=>((0,o.uX)(),(0,o.Wv)(P,{key:e.name,props:t},{default:(0,o.k6)((()=>["result"===e.name?((0,o.uX)(),(0,o.Wv)(P,{key:0,style:{display:"flex","align-items":"center","justify-content":"center"}},{default:(0,o.k6)((()=>[(0,o.bF)(U,{name:"success"===t.row[e.name]?"check_circle":"cancel",color:"success"===t.row[e.name]?"green":"red",size:"sm"},null,8,["name","color"])])),_:2},1024)):((0,o.uX)(),(0,o.CE)("div",n,(0,r.v_)(e.value),1))])),_:2},1032,["props"])))),128))])),_:2},1032,["props"]),(0,o.bo)((0,o.bF)(V,{props:t},{default:(0,o.k6)((()=>[(0,o.bF)(P,{colspan:"100%"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",l,[Object.keys(this.workflows).includes(t.row.workflow_id)?((0,o.uX)(),(0,o.CE)("div",d,[this.workflowChanged(t.row.id)?((0,o.uX)(),(0,o.CE)("div",F,[(0,o.Lk)("div",L,(0,r.v_)(e.$t("workflow_changed")),1),(0,o.Lk)("div",null,[(0,o.Lk)("div",x,(0,r.v_)(e.$t("wf_when")),1)]),Object.keys(this.workflows).includes(t.row.workflow_id)?((0,o.uX)(),(0,o.CE)("div",X,[(0,o.Lk)("div",E,[(0,o.bF)(H,{item:this.workflows[t.row.workflow_id].data.when_condition,version:this.workflows[t.row.workflow_id].data.when_condition.version,onClick:e=>this.getCardLogs(this.workflows[t.row.workflow_id].data.when_condition.id,t.row.id,0,"when")},null,8,["item","version","onClick"])])])):(0,o.Q3)("",!0),(0,o.Lk)("div",null,[(0,o.Lk)("div",A,(0,r.v_)(e.$t("wf_and")),1)]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(this.workflows[t.row.workflow_id].data.and_conditions,((e,s)=>((0,o.uX)(),(0,o.CE)("div",{class:"row",key:e.id+"_"+e.card_version+"_"+s},[(0,o.Lk)("div",S,[(0,o.bF)(H,{item:e,version:e.version,onClick:o=>this.getCardLogs(e.id,t.row.id,s,"and")},null,8,["item","version","onClick"])])])))),128)),(0,o.Lk)("div",null,[(0,o.Lk)("div",K,(0,r.v_)(e.$t("wf_then")),1)]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(this.workflows[t.row.workflow_id].data.then_conditions,((e,s)=>((0,o.uX)(),(0,o.CE)("div",{class:"row",key:e.id+"_"+e.card_version+"_"+s},[(0,o.Lk)("div",W,[(0,o.bF)(H,{item:e,version:e.version,onClick:o=>this.getCardLogs(e.id,t.row.id,s,"then")},null,8,["item","version","onClick"])])])))),128))])):((0,o.uX)(),(0,o.CE)("div",c,[(0,o.Lk)("div",null,[(0,o.Lk)("div",u,(0,r.v_)(e.$t("wf_when")),1)]),Object.keys(this.workflows).includes(t.row.workflow_id)?((0,o.uX)(),(0,o.CE)("div",w,[(0,o.Lk)("div",h,[(0,o.bF)(H,{item:this.workflows[t.row.workflow_id].data.when_condition,version:this.workflows[t.row.workflow_id].data.when_condition.version,onClick:e=>this.getCardLogs(this.workflows[t.row.workflow_id].data.when_condition.id,t.row.id,0,"when")},null,8,["item","version","onClick"])]),"success"==t.row.logs[0][0].card_result?((0,o.uX)(),(0,o.CE)("div",f,[(0,o.bF)(U,{name:"check_circle",size:"22px",color:"green"})])):((0,o.uX)(),(0,o.CE)("div",g,[(0,o.bF)(U,{name:"cancel",size:"22px",color:"red"})]))])):(0,o.Q3)("",!0),(0,o.Lk)("div",null,[(0,o.Lk)("div",k,(0,r.v_)(e.$t("wf_and")),1)]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(this.workflows[t.row.workflow_id].data.and_conditions,((s,r)=>((0,o.uX)(),(0,o.CE)("div",{class:"row",key:s.id+"_"+s.card_version+"_"+r},[(0,o.Lk)("div",_,[(0,o.bF)(H,{item:s,version:s.version,onClick:e=>this.getCardLogs(s.id,t.row.id,r,"and")},null,8,["item","version","onClick"])]),e.checkCardSuccess(t.row.id,r,"and")?((0,o.uX)(),(0,o.CE)("div",p,[(0,o.bF)(U,{name:"check_circle",size:"22px",color:"green"})])):((0,o.uX)(),(0,o.CE)("div",m,[(0,o.bF)(U,{name:"cancel",size:"22px",color:"red"})]))])))),128)),(0,o.Lk)("div",null,[(0,o.Lk)("div",v,(0,r.v_)(e.$t("wf_then")),1)]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(this.workflows[t.row.workflow_id].data.then_conditions,((s,r)=>((0,o.uX)(),(0,o.CE)("div",{class:"row",key:s.id+"_"+s.card_version+"_"+r},[(0,o.Lk)("div",y,[(0,o.bF)(H,{item:s,version:s.version,onClick:e=>this.getCardLogs(s.id,t.row.id,r,"then")},null,8,["item","version","onClick"])]),e.checkCardSuccess(t.row.id,r,"then")?((0,o.uX)(),(0,o.CE)("div",b,[(0,o.bF)(U,{name:"check_circle",size:"22px",color:"green"})])):((0,o.uX)(),(0,o.CE)("div",C,[(0,o.bF)(U,{name:"cancel",size:"22px",color:"red"})]))])))),128))]))])):(0,o.Q3)("",!0),(0,o.Lk)("div",D,[(0,o.Lk)("div",$,[this.workflowChanged(t.row.id)?((0,o.uX)(),(0,o.CE)("div",j,(0,r.v_)(e.$t("workflow_logs")),1)):((0,o.uX)(),(0,o.CE)("div",T,(0,r.v_)(e.$t("card_logs")),1))]),Object.keys(this.displayed_messages).includes(t.row.id)?((0,o.uX)(),(0,o.CE)("div",R,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(this.displayed_messages[t.row.id],(e=>((0,o.uX)(),(0,o.CE)("div",{key:e,class:"row",style:{"text-wrap":"wrap"}},[(0,o.Lk)("div",I,(0,r.v_)(e.message),1)])))),128))])):((0,o.uX)(),(0,o.CE)("div",q,(0,r.v_)(e.$t("card_logs_message")),1))])])])),_:2},1024)])),_:2},1032,["props"]),[[i.aG,t.expand]])])),_:1},8,["title","rows","columns"])]),(0,o.bF)(N)],64)}var z=s(24622),O=s(38734);const B={class:"col-sm-12 col-md-12 col-lg-12"},G=["innerHTML"],V={class:"color-93939A paddingMargin0 font-size-0-75"},M={class:"paddingMargin0 font-size-15",style:{"text-wrap":"wrap"}};function P(e,t,s,i,a,n){const l=(0,o.g2)("q-btn"),d=(0,o.g2)("q-card-section"),c=(0,o.g2)("q-card");return(0,o.uX)(),(0,o.CE)("div",B,[(0,o.bF)(c,{class:"row",style:{"margin-bottom":"10px"}},{default:(0,o.k6)((()=>[(0,o.bF)(l,{class:"col-2 p-10",disable:"",round:"",flat:"",size:"xs",style:(0,r.Tr)("background-color:"+e.color)},{default:(0,o.k6)((()=>[(0,o.Lk)("i",{innerHTML:e.item.svg,class:"svg-icon center-inner"},null,8,G)])),_:1},8,["style"]),(0,o.bF)(d,{class:"col-10"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",V,(0,r.v_)(e.$t(e.item.category)),1),(0,o.Lk)("p",M,[!e.dataArray||e.dataArray.length<1?((0,o.uX)(),(0,o.CE)(o.FK,{key:0},[(0,o.eW)((0,r.v_)(e.$t(e.item.text)),1)],64)):((0,o.uX)(!0),(0,o.CE)(o.FK,{key:1},(0,o.pI)(e.dataArray,((t,s)=>((0,o.uX)(),(0,o.CE)(o.FK,{key:s},[e.renderBadge(t)?((0,o.uX)(),(0,o.CE)(o.FK,{key:0},[(0,o.eW)((0,r.v_)(e.$t(e.getVariableData(t))),1)],64)):e.renderTextTranslation(t)?((0,o.uX)(),(0,o.CE)(o.FK,{key:1},[(0,o.eW)((0,r.v_)(e.$t(t)),1)],64)):((0,o.uX)(),(0,o.CE)(o.FK,{key:2},[(0,o.eW)((0,r.v_)(t+" "),1)],64))],64)))),128))])])),_:1})])),_:1})])}var U=s(96056),H=s(18505),J=s(76956),N=s(66715),Y=s(1659),Z=s(11470),ee=function(e,t,s,o){function r(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,i){function a(e){try{l(o.next(e))}catch(t){i(t)}}function n(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?s(e.value):r(e.value).then(a,n)}l((o=o.apply(e,t||[])).next())}))};const te=(0,Y.nY)("workflow_logs_variables_store",{state:()=>({users:[],groups:[],workflows:[]}),getters:{getStoredUsers:e=>e.users},actions:{getUsers(){return ee(this,void 0,void 0,(function*(){if(0==this.users.length){const e=yield Z.jD.getUsers();e.forEach((e=>{this.users.push(e)}))}}))},getGroups(){return ee(this,void 0,void 0,(function*(){if(0==this.groups.length){const e=yield Z.jD.getGroups();e.forEach((e=>{this.groups.push(e)}))}}))},getWorkflows(){return ee(this,void 0,void 0,(function*(){if(0==this.users.length){const e=yield Z.Bj.getWorkflowsForOrg();e.forEach((e=>{this.workflows.push(e)}))}}))}}}),se=(0,o.pM)({name:"generic-card",emits:[],mixins:[z.A,U.A,H.A],components:{},props:{isDialog:{type:Boolean,default:!1},itemIndex:{type:Number,default:null},cardType:{type:String,default:""},parentSvg:{type:String,default:""},color:{type:String,default:""},item:{type:Object,default:{category:"",id:"",text:"",toolTip:"",card_version:""}}},data(){return{showItemPanel:(0,O.KR)(!1),dataArray:(0,O.KR)([])}},mounted(){this.prepareDataForVariableReplacement(),this.prepareData()},methods:{renderBadge(e){return e.startsWith(J.XF)},renderTextTranslation(e){return e.startsWith(J.Q9)},getVariableData(e){if(this.item)for(let t of this.item.variables)if(t.id.split(J.XF).join("")==e.split(J.XF).join("")){if(["user","users","operator","math_operator","sub_org_id","groups","workflow","export_configuration","decision_table"].includes(t.display_name))switch(t.display_name){case"user":case"users":case"groups":case"operator":case"sub_org_id":return this.getVariableDataForID(t.display_name,"id",t.data);case"operator":case"math_operator":return N.i18n.t(t.data);case"workflow":return this.getVariableDataForID(t.display_name,"entries.id",t.data)}return t.data}return""},getVariableDataForID(e,t,s){const o=Object.keys(this.data);if(o.includes(e)){let o=[];for(let r of s.split(","))for(let s of this.data[e])if(s[t]==r)switch(e){case"user":case"users":const e=s.first_name+" "+s.last_name;-1==o.indexOf(e)&&o.push(e);break;case"groups":case"workflows":o.push(s.name);break}return o.length>0?o.toString():s}return s},prepareDataForVariableReplacement(){this.data.users=this.users,this.data.user=this.users,this.data.groups=this.groups,this.data.workflows=this.workflows},prepareData(){try{if(this.item&&this.$t(this.item.text).includes(J.XF)){let e=this.$t(this.item.text).split(/(__%)/);for(let t=0;t<e.length;t++){let s="";e[t]&&(e[t]==J.XF?(s=e[t]+e[t+1]+e[t+2],t+=2):s=e[t],this.dataArray.push(s))}}}catch(e){}}},setup(){const e=te(),{users:t,groups:s,workflows:o}=(0,Y.bP)(e);return{users:t,groups:s,workflows:o,data:{}}}});var oe=s(12807),re=s(23316),ie=s(56384),ae=s(44189),ne=s(98582),le=s.n(ne);const de=(0,oe.A)(se,[["render",P],["__scopeId","data-v-7ed73610"]]),ce=de;le()(se,"components",{QCard:re.A,QBtn:ie.A,QCardSection:ae.A});var ue=s(8420),we=s(36246),he=s(95488),fe=s(46736),ge=function(e,t,s,o){function r(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,i){function a(e){try{l(o.next(e))}catch(t){i(t)}}function n(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?s(e.value):r(e.value).then(a,n)}l((o=o.apply(e,t||[])).next())}))};const ke=(0,o.pM)({name:"workflowLogs",mixins:[z.A,U.A,H.A,fe.A],components:{Loader:ue.A,GenericCard:ce,SubHeader:he.A},data(){return{}},mounted(){return ge(this,void 0,void 0,(function*(){this.showLoading(),yield this.getLogsForDocument(),this.getUsers(),this.getGroups(),this.getWorkflows,this.prepareTableRows(),this.hideLoading(),window.vpo=this}))},methods:{formatDate(e,t){return we.Ay.formatDate(e,t)},prepareTableRows(){this.rows=this.logs;for(let e=0;e<this.rows.length;e++)this.rows[e].name=this.rows[e].workflow_name,this.rows[e].created_on=this.formatDateAccordingToPreference(this.rows[e].created_on),this.rows[e].run_time_seconds=(this.rows[e].run_time_mili_seconds/1e3).toFixed(2)},getLogsForDocument(){return ge(this,void 0,void 0,(function*(){let e={with_name:!0},t=yield Z.Bj.getWorkflowLogsForDoc(this.$route.params.id.toString(),e);this.logs=t.logs;for(let s of t.logs)yield this.loadWorkflow(s.workflow_id),this.expanded[s.id]=!1}))},loadWorkflow(e){return ge(this,void 0,void 0,(function*(){if(!Object.keys(this.workflows).includes(e)){let t=yield Z.Bj.loadworkflowJson(e);this.workflows[e]=t,this.workflows[e].last_modified_on=this.formatDateAccordingToPreference(t.last_modified_on)}}))},getCardLogs(e,t,s,o){Object.keys(this.card_messages).includes(e.toString()+t.toString()+s+"_"+o)||this.prepareCardLogs(e,t,s,o),this.displayed_messages[t.toString()]=this.card_messages[e.toString()+t.toString()+s+"_"+o]},prepareCardLogs(e,t,s,o){const r=this.getWorkflowRunLog(t);if("when"==o)this.card_messages[e.toString()+t.toString()+s+"_"+o]=r[0];else if("and"==o){for(let i=1;i<r.length;i++)if(i==s+1){this.card_messages[e.toString()+t.toString()+s+"_"+o]=r[i];break}}else if("then"==o)for(let i=0;i<r.length;i++)if(r[i][0].run_category==o){this.card_messages[e.toString()+t.toString()+s+"_"+o]=r[i+s];break}},prepareCompleteLogs(e){const t=this.getWorkflowRunLog(e);let s=[];for(let o of t)for(let e of o)s.push(e);this.displayed_messages[e.toString()]=s},checkCardSuccess(e,t,s){const o=this.getWorkflowRunLog(e);if("when"==s)try{return"success"==o[0][0]}catch(r){return!1}else if("and"==s){for(let n=1;n<o.length;n++)if(n==t)try{return"success"==o[n][0].card_result}catch(i){return!1}}else if("then"==s)for(let n=1;n<o.length;n++)if(o[n][0].run_category==s)try{return"success"==o[n+t][0].card_result}catch(a){return!1}},getWorkflowRunLog(e){let t="";for(let s of this.logs)s.id==e&&(t=s.logs);return t},workflowChanged(e){let t=!1;for(let s of this.logs)if(s.id==e)return t=s.created_on<this.workflows[s.workflow_id].last_modified_on,t&&this.prepareCompleteLogs(e),t;return t}},setup(){const e=[{name:"workflow_name",required:!0,label:"wf_name",align:"left",field:"workflow_name",headerClasses:"table-header-wf-logs",style:"width: 40%;",headerStyle:" width: 40%;"},{name:"created_on",required:!1,label:"doc2light.table.created_on",align:"left",field:"created_on",headerClasses:"table-header-wf-logs"},{name:"run_time_seconds",required:!1,label:"run_time_seconds",align:"right",field:"run_time_seconds",headerClasses:"table-header-wf-logs",headerStyle:"align-items: left; justify-content: left;"},{name:"result",required:!1,label:"result",align:"left",field:"result",style:" align-items: center; justify-content: center; width: 10%;",headerStyle:" width: 10%;",headerClasses:"table-header-wf-logs"}],t=te(),{getUsers:s,getGroups:o,getWorkflows:r}=t;return{logs:(0,O.KR)([]),expanded:(0,O.KR)({}),workflows:(0,O.KR)({}),card_messages:(0,O.KR)({}),displayed_messages:(0,O.KR)({}),wf_logs:(0,O.KR)({}),columns:e,rows:(0,O.KR)([]),getUsers:s,getGroups:o,getWorkflows:r}}});var _e=s(42315),pe=s(44488),me=s(57722),ve=s(45262),ye=s(50492);const be=(0,oe.A)(ke,[["render",Q],["__scopeId","data-v-4f1c46f7"]]),Ce=be;le()(ke,"components",{QTable:_e.A,QTr:pe.A,QTh:me.A,QTd:ve.A,QBtn:ie.A,QIcon:ye.A})}}]);