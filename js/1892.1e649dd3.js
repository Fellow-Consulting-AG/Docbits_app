"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[1892],{71892:(e,t,o)=>{o.r(t),o.d(t,{default:()=>V});var l=o(61758),a=o(58790);const i=e=>((0,l.Qi)("data-v-635eafc1"),e=e(),(0,l.jt)(),e),s={class:"row full-width"},r={class:"secondary-c-text text-h6"},n={class:"primary-dashboard"},d={class:"row items-center justify-evenly container-fluid"},c={class:"q-page col"},g={class:"side-bar"},u={class:"row text-weight-bolder"},h=i((()=>(0,l.Lk)("div",{class:"col-lg-4 text-center"},(0,a.v_)("Module: "),-1))),m=i((()=>(0,l.Lk)("div",{class:"col-lg-4 text-center"},(0,a.v_)("Short information: "),-1))),p={key:0,class:"col-lg-4 text-center"},f={class:"row",style:{"min-height":"10%"}},v={class:"col-lg-4 text-center"},y={class:"col-lg-4 text-center"},_={key:0,class:"col-lg-4 text-center"},b=i((()=>(0,l.Lk)("hr",null,null,-1))),k={style:{"vertical-align":"middle","margin-left":"5px","font-size":"15px",cursor:"pointer"}},w={style:{"vertical-align":"middle","margin-left":"5px","font-size":"15px",cursor:"pointer"}},L={style:{"vertical-align":"middle","margin-left":"5px","font-size":"15px",cursor:"pointer"}},x={style:{"vertical-align":"middle","margin-left":"5px","font-size":"15px",cursor:"pointer"}},R=i((()=>(0,l.Lk)("div",{class:"secondary-c-text text-h6",style:{padding:"2%"}}," Log ",-1))),C={class:"log",style:{"font-size":"15px"}},E={width:"20%"},K={style:{"margin-left":"2%"}};function S(e,t,o,i,S,A){const F=(0,l.g2)("SubHeader"),z=(0,l.g2)("q-icon"),$=(0,l.g2)("f-btn"),M=(0,l.g2)("Background"),N=(0,l.g2)("MiniMap"),D=(0,l.g2)("VueFlow"),I=(0,l.g2)("q-btn");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(F,{name:"document_flow",label:e.$t("document_flow"),show_expiry_alert:!0,onSearch:!1},null,8,["label"]),(0,l.Lk)("div",s,[(0,l.Lk)("div",r,[(0,l.Lk)("div",null,[(0,l.bF)($,{appearance:"tertiary","data-cy":"dashboard",onClick:t[0]||(t[0]=t=>e.goToDashboard())},{default:(0,l.k6)((()=>[(0,l.bF)(z,{name:"fa-solid fa-circle-arrow-left",size:"sm"}),(0,l.Lk)("label",n,(0,a.v_)(e.$t(e.previousPageName)),1)])),_:1})])])]),(0,l.Lk)("div",d,[(0,l.Lk)("div",c,[(0,l.bF)(D,{modelValue:e.elements,"onUpdate:modelValue":t[1]||(t[1]=t=>e.elements=t),class:"basicflow","default-edge-options":{type:"smoothstep"},"default-zoom":1.2,"min-zoom":1.2,"max-zoom":4,"fit-view-on-init":!1,"nodes-draggable":!1,"zoom-on-scroll":!1,onNodeClick:e.nodeClick},{default:(0,l.k6)((()=>[(0,l.bF)(M,{"pattern-color":"#aaa",gap:"6"}),(0,l.bF)(N)])),_:1},8,["modelValue","onNodeClick"])]),(0,l.Lk)("div",g,[(0,l.Lk)("div",u,[h,m,e.timelog?((0,l.uX)(),(0,l.CE)("div",p,(0,a.v_)("Time used: "))):(0,l.Q3)("",!0)]),(0,l.Lk)("div",f,[(0,l.Lk)("div",v,(0,a.v_)(e.modules),1),(0,l.Lk)("div",y,(0,a.v_)(e.nodemessage),1),e.timelog?((0,l.uX)(),(0,l.CE)("div",_,(0,a.v_)(e.timelog),1)):(0,l.Q3)("",!0)]),b,(0,l.Lk)("div",null,[(0,l.bF)(I,{flat:"",rounded:"","data-cy":"back_button",color:"primary",onClick:t[2]||(t[2]=t=>e.showLog_level("CUSTOMER")),icon:"info"},{default:(0,l.k6)((()=>[(0,l.Lk)("label",k,(0,a.v_)(e.$t("customer")),1)])),_:1}),(0,l.bF)(I,{flat:"",rounded:"","data-cy":"back_button",color:"primary",onClick:t[3]||(t[3]=t=>e.showLog_level("INFO")),icon:"info"},{default:(0,l.k6)((()=>[(0,l.Lk)("label",w,(0,a.v_)(e.$t("info")),1)])),_:1}),(0,l.bF)(I,{flat:"",rounded:"","data-cy":"back_button",color:"primary",onClick:t[4]||(t[4]=t=>e.showLog_level("ERROR")),icon:"error"},{default:(0,l.k6)((()=>[(0,l.Lk)("label",L,(0,a.v_)(e.$t("error")),1)])),_:1}),(0,l.bF)(I,{flat:"",rounded:"","data-cy":"back_button",color:"primary",onClick:t[5]||(t[5]=t=>e.showLog_level("")),icon:"info"},{default:(0,l.k6)((()=>[(0,l.Lk)("label",x,(0,a.v_)(e.$t("all")),1)])),_:1})]),R,(0,l.Lk)("table",C,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.logdata,((e,t)=>((0,l.uX)(),(0,l.CE)("tr",{key:t},[(0,l.Lk)("td",E,[(0,l.Lk)("div",K,(0,a.v_)(e.logmessage),1)])])))),128))])])])],64)}var A=o(38734),F=o(77362),z=o(36057),$=o(29731),M=o(11470),N=function(e,t,o,l){function a(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function s(e){try{n(l.next(e))}catch(t){i(t)}}function r(e){try{n(l["throw"](e))}catch(t){i(t)}}function n(e){e.done?o(e.value):a(e.value).then(s,r)}n((l=l.apply(e,t||[])).next())}))};const D=(0,l.pM)({el:"#app",mixins:[],components:{VueFlow:z.nO,Background:$.VS,MiniMap:$.of,SubHeader:F.A},props:{doc_id:{type:String,default:""}},data(){return{instance:null,prevRoute:"/dashboard",previousPageName:"pages.screen2a.dashboard"}},mounted(){this.init(),document.addEventListener("keydown",this.sendBack),this.prevRoute=this.$router.options.history.state.back,this.prevRoute.includes("field_validation_v1")&&(this.previousPageName="field_validation")},unmounted(){document.removeEventListener("keydown",this.sendBack)},methods:{init(){return N(this,void 0,void 0,(function*(){this.docID=this.$route.params.id,this.flow_data=yield M.hv.getData(this.docID);var e=[];Array.from(this.flow_data).forEach((t=>{for(const o in t)e.push(t[o])})),this.nodesystem=JSON.stringify(e),this.prepareScreen(),this.getLogtaillog(),this.connectors(),this.coloring()}))},goToDashboard(){this.$router.push(this.prevRoute)},prepareScreen(){var e=50,t=100,o=(this.nodesystem.length,0),l=0,a="";Array.from(JSON.parse(this.nodesystem)).forEach((i=>{i.origin=i.type,i.origin==a||(o/4==1&&(l+=1,o=0,e=50,t=175,t+=75*Math.floor(l),4*Math.floor(l)),i.position={x:e+200*o,y:t},this.generalizer(i),this.connectorhandler(i),o+=1,a=i.origin,this.elements.push(i))}))},generalizer(e){e.id=this.elements.length.toString(),e.name in this.wordfilter?e.label=this.wordfilter[e.name]:e.label=this.$t(e.name),e.clickable=!0},connectorhandler(e){"input"==e.type||"import"==e.type?(e.type="input",e.sourcePosition=z.yX.Right):"output"==e.type||"export"==e.type?(e.type="output",e.targetPosition=z.yX.Left):(e.type="default",e.targetPosition=z.yX.Left,e.sourcePosition=z.yX.Right)},connectors(){var e=this.elements.length-1;for(let t=0;t<=e;t++)this.elements.push({id:"e_"+t.toString()+"_"+(t+1).toString(),source:t.toString(),target:(t+1).toString(),updatable:!0})},coloring(){Array.from(this.elements).forEach((e=>{"position"in e&&("style"in e?(e.style.border="1px solid black",e.style.backgroundColor="white"):(e.style={border:"1px solid black"},e.style.backgroundColor="white"),"true"==e.data?(e.style.border="1px solid white",e.label+="<img align='left' width='20' src='images/flow_Check.svg' />"):"false"==e.data&&(e.style.border="1px solid red",e.label+="<img align='left' width='20' src='images/flow_Error.svg' />")),"imported"!==e.name&&"restarted"!==e.name||(e.style={border:"1px solid black"},e.style.backgroundColor="#E6FFDC")}))},nodeClick(e){let t="";this.modules=this.$t(e.node.name),"message"in e.node&&("importsource"in e.node&&(t=" - from "+e.node.importsource,this.nodemessage=e.node.message+t),this.nodemessage=e.node.message),"module"in e.node&&null!=e.node.module&&this.showLog_level_module("CUSTOMER",e.node.module)},showLog_module(e){this.logdata=[],""==e?this.logdata=this.logtaildata:Array.from(this.logtaildata).forEach((t=>{t.module==e&&this.logdata.push(t)}))},showLog_level(e){this.logdata=[],""==e?this.logdata=this.logtaildata:Array.from(this.logtaildata).forEach((t=>{t.level.includes(e)&&this.logdata.push(t)}))},showLog_level_module(e,t){this.logdata=[],Array.from(this.logtaildata).forEach((o=>{o.level.includes(e)&&o.module==t&&this.logdata.push(o)}))},getLogtaillog(){return N(this,void 0,void 0,(function*(){let e,t="sandbox",o=this.docID.toString();var l={doc_id:o,module:["process","classify","ocr","fields_extraction","table_extraction","barcode_extraction","post_process","export","approval","po_matching","upload"],source_filters:[t],group_by:"doc_id"};e=yield M.zC.getData(l),e.success&&(null==e.logs?this.logtaildata.push(l.module+" : "+this.$t("no_error_logged")):Array.from(e.logs).forEach((e=>{o in e&&Array.from(e[o]["messages"]).forEach((e=>{e["logmessage"]=e["logmessage"].replaceAll("aws_storage.aws_storage","S3_storage").replaceAll("aws.aws","S3").replaceAll("google_","").replaceAll("google",""),this.logtaildata.push(e)}))}))),this.showLog_module("")}))},sendBack(e){"Escape"===e.key&&this.$router.go(-1)}},setup(){let e=[{ocr_by_google:"OCR"}];const{onConnect:t,addEdges:o}=(0,z.Id)();return t((e=>o([e]))),{elements:(0,A.KR)([]),sub_nodes:(0,A.KR)([]),addNodes:(0,A.KR)(!1),importNodes:(0,A.KR)(!1),nodetype:(0,A.KR)("Select"),nodename:(0,A.KR)(""),nodesystem:(0,A.KR)(""),system:(0,A.KR)(""),id:(0,A.KR)(""),docID:(0,A.KR)(""),flow_data:(0,A.KR)(),modules:(0,A.KR)(""),nodemessage:(0,A.KR)(""),timelog:(0,A.KR)(""),wordfilter:(0,A.KR)(e),parent_indicator:(0,A.KR)(""),parent_position:(0,A.KR)({}),logtaildata:(0,A.KR)([]),module:(0,A.KR)(""),logdata:(0,A.KR)([])}}});var I=o(12807),P=o(50492),X=o(77716),O=o(56384),T=o(98582),B=o.n(T);const Q=(0,I.A)(D,[["render",S],["__scopeId","data-v-635eafc1"]]),V=Q;B()(D,"components",{QIcon:P.A,QPage:X.A,QBtn:O.A})}}]);