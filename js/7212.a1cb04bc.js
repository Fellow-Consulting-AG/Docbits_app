"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[7212],{7212:(e,t,o)=>{o.r(t),o.d(t,{default:()=>T});var l=o(83673),i=o(62323);const a=e=>((0,l.dD)("data-v-1953e4d2"),e=e(),(0,l.Cn)(),e),s={class:"row items-center justify-evenly container-fluid"},n={class:"q-page col"},r={class:"side-bar"},d=a((()=>(0,l._)("img",{width:"24",src:"back-primary.svg"},null,-1))),c={style:{"vertical-align":"middle","margin-left":"10px","font-size":"20px",cursor:"pointer"}},g={class:"row text-weight-bolder"},u=a((()=>(0,l._)("div",{class:"col-lg-4 text-center"},(0,i.zw)("Module: "),-1))),m=a((()=>(0,l._)("div",{class:"col-lg-4 text-center"},(0,i.zw)("Short information: "),-1))),h={key:0,class:"col-lg-4 text-center"},p={class:"row",style:{"min-height":"10%"}},f={class:"col-lg-4 text-center"},_={class:"col-lg-4 text-center"},y={key:0,class:"col-lg-4 text-center"},w=a((()=>(0,l._)("hr",null,null,-1))),v={style:{"vertical-align":"middle","margin-left":"5px","font-size":"15px",cursor:"pointer"}},b={style:{"vertical-align":"middle","margin-left":"5px","font-size":"15px",cursor:"pointer"}},k={style:{"vertical-align":"middle","margin-left":"5px","font-size":"15px",cursor:"pointer"}},x={style:{"vertical-align":"middle","margin-left":"5px","font-size":"15px",cursor:"pointer"}},z=a((()=>(0,l._)("div",{class:"secondary-c-text text-h6",style:{padding:"2%"}}," Log ",-1))),H={class:"log",style:{"font-size":"15px"}},L={width:"20%"},S={style:{"margin-left":"2%"}};function C(e,t,o,a,C,E){const A=(0,l.up)("SubHeader"),D=(0,l.up)("Background"),W=(0,l.up)("MiniMap"),$=(0,l.up)("VueFlow"),M=(0,l.up)("q-icon"),B=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(A,{name:"dashboard",label:e.$t("pages.screen2a.dashboard")},null,8,["label"]),(0,l._)("div",s,[(0,l._)("div",n,[(0,l.Wm)($,{modelValue:e.elements,"onUpdate:modelValue":t[0]||(t[0]=t=>e.elements=t),class:"basicflow","default-edge-options":{type:"smoothstep"},"default-zoom":1.2,"min-zoom":1.2,"max-zoom":4,"fit-view-on-init":!0,"nodes-draggable":!1,"zoom-on-scroll":!1,onNodeClick:e.nodeClick},{default:(0,l.w5)((()=>[(0,l.Wm)(D,{"pattern-color":"#aaa",gap:"6"}),(0,l.Wm)(W)])),_:1},8,["modelValue","default-zoom","min-zoom","onNodeClick"])]),(0,l._)("div",r,[(0,l.Wm)(B,{flat:"",rounded:"","data-cy":"back_button",color:"primary",onClick:t[1]||(t[1]=t=>e.sendBack({key:"Escape"}))},{default:(0,l.w5)((()=>[(0,l.Wm)(M,{class:"text-red-13",size:"sm"},{default:(0,l.w5)((()=>[d])),_:1}),(0,l._)("label",c,(0,i.zw)(e.$t("back")),1)])),_:1}),(0,l._)("div",g,[u,m,e.timelog?((0,l.wg)(),(0,l.iD)("div",h,(0,i.zw)("Time used: "))):(0,l.kq)("",!0)]),(0,l._)("div",p,[(0,l._)("div",f,(0,i.zw)(e.modules),1),(0,l._)("div",_,(0,i.zw)(e.nodemessage),1),e.timelog?((0,l.wg)(),(0,l.iD)("div",y,(0,i.zw)(e.timelog),1)):(0,l.kq)("",!0)]),w,(0,l._)("div",null,[(0,l.Wm)(B,{flat:"",rounded:"","data-cy":"back_button",color:"primary",onClick:t[2]||(t[2]=t=>e.showLog_level("CUSTOMER")),icon:"info"},{default:(0,l.w5)((()=>[(0,l._)("label",v,(0,i.zw)(e.$t("customer")),1)])),_:1}),(0,l.Wm)(B,{flat:"",rounded:"","data-cy":"back_button",color:"primary",onClick:t[3]||(t[3]=t=>e.showLog_level("INFO")),icon:"info"},{default:(0,l.w5)((()=>[(0,l._)("label",b,(0,i.zw)(e.$t("info")),1)])),_:1}),(0,l.Wm)(B,{flat:"",rounded:"","data-cy":"back_button",color:"primary",onClick:t[4]||(t[4]=t=>e.showLog_level("ERROR")),icon:"error"},{default:(0,l.w5)((()=>[(0,l._)("label",k,(0,i.zw)(e.$t("error")),1)])),_:1}),(0,l.Wm)(B,{flat:"",rounded:"","data-cy":"back_button",color:"primary",onClick:t[5]||(t[5]=t=>e.showLog_level("")),icon:"info"},{default:(0,l.w5)((()=>[(0,l._)("label",x,(0,i.zw)(e.$t("all")),1)])),_:1})]),z,(0,l._)("table",H,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.logdata,((e,t)=>((0,l.wg)(),(0,l.iD)("tr",{key:t},[(0,l._)("td",L,[(0,l._)("div",S,(0,i.zw)(e.logmessage),1)])])))),128))])])])],64)}var E=o(61959),A=o(99622),D=o(37789),W=o(80579),$=o(13873),M=function(e,t,o,l){function i(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,a){function s(e){try{r(l.next(e))}catch(t){a(t)}}function n(e){try{r(l["throw"](e))}catch(t){a(t)}}function r(e){e.done?o(e.value):i(e.value).then(s,n)}r((l=l.apply(e,t||[])).next())}))};const B=(0,l.aZ)({el:"#app",mixins:[],components:{VueFlow:A.DB,Background:D.Aq,MiniMap:D.a9,SubHeader:$.Z},props:{doc_id:{type:String,default:""}},data(){return{instance:null}},mounted(){this.init(),document.addEventListener("keydown",this.sendBack)},unmounted(){document.removeEventListener("keydown",this.sendBack)},methods:{init(){return M(this,void 0,void 0,(function*(){this.docID=this.$route.params.id,this.flow_data=yield W.rp.getData(this.docID);var e=[];Array.from(this.flow_data).forEach((t=>{for(const o in t)e.push(t[o])})),this.nodesystem=JSON.stringify(e),this.prepareScreen(),this.getLogtaillog(),this.connectors(),this.coloring()}))},prepareScreen(){var e=50,t=100,o=(this.nodesystem.length,0),l=0,i="";Array.from(JSON.parse(this.nodesystem)).forEach((a=>{a.origin=a.type,a.origin==i||(o/4==1&&(l+=1,o=0,e=50,t=175,t+=75*Math.floor(l),4*Math.floor(l)),a.position={x:e+200*o,y:t},this.generalizer(a),this.connectorhandler(a),o+=1,i=a.origin,this.elements.push(a))}))},generalizer(e){e.id=this.elements.length.toString(),e.name in this.wordfilter?e.label=this.wordfilter[e.name]:e.label=this.$t(e.name),e.clickable=!0},connectorhandler(e){"input"==e.type||"import"==e.type?(e.type="input",e.sourcePosition=A.Ly.Right):"output"==e.type||"export"==e.type?(e.type="output",e.targetPosition=A.Ly.Left):(e.type="default",e.targetPosition=A.Ly.Left,e.sourcePosition=A.Ly.Right)},connectors(){var e=this.elements.length-1;for(let t=0;t<=e;t++)this.elements.push({id:"e_"+t.toString()+"_"+(t+1).toString(),source:t.toString(),target:(t+1).toString(),updatable:!0})},coloring(){Array.from(this.elements).forEach((e=>{"position"in e&&("style"in e?(e.style.border="1px solid black",e.style.backgroundColor="white"):(e.style={border:"1px solid black"},e.style.backgroundColor="white"),"true"==e.data?(e.style.border="1px solid green",e.label+="<img align='left' width='20' src='flow_Check.svg' />"):"false"==e.data&&(e.style.border="1px solid red",e.label+="<img align='left' width='20' src='flow_Error.svg' />"))}))},nodeClick(e){let t="";this.modules=this.$t(e.node.name),"message"in e.node&&("importsource"in e.node&&(t=" - from "+e.node.importsource,this.nodemessage=e.node.message+t),this.nodemessage=e.node.message),"time"in e.node?this.timelog=e.node.time.toString():this.timelog="","module"in e.node&&null!=e.node.module&&this.showLog_level_module("CUSTOMER",e.node.module)},showLog_module(e){this.logdata=[],""==e?this.logdata=this.logtaildata:Array.from(this.logtaildata).forEach((t=>{t.module==e&&this.logdata.push(t)}))},showLog_level(e){this.logdata=[],""==e?this.logdata=this.logtaildata:Array.from(this.logtaildata).forEach((t=>{t.level.includes(e)&&this.logdata.push(t)}))},showLog_level_module(e,t){this.logdata=[],Array.from(this.logtaildata).forEach((o=>{o.level.includes(e)&&o.module==t&&this.logdata.push(o)}))},getLogtaillog(){var e,t,o;return M(this,void 0,void 0,(function*(){let l,i="",a=this.docID.toString();i=(null===(e="https://fellowkv2.cloudintegration.eu")||void 0===e?void 0:e.includes("dev"))?"dev":(null===(t="https://fellowkv2.cloudintegration.eu")||void 0===t?void 0:t.includes("stage"))?"stage":(null===(o="https://fellowkv2.cloudintegration.eu")||void 0===o?void 0:o.includes("sandbox"))?"sandbox":"prod";var s={doc_id:a,module:["process","classify","ocr","fields_extraction","table_extraction","post_process","export","approval","po_matching","upload"],source_filters:[i],group_by:"doc_id"};l=yield W.Wq.getData(s),l.success&&(null==l.logs?this.logtaildata.push(s.module+" : "+this.$t("no_error_logged")):Array.from(l.logs).forEach((e=>{a in e&&Array.from(e[a]["messages"]).forEach((e=>{e["logmessage"]=e["logmessage"].replaceAll("aws_storage.aws_storage","S3_storage").replaceAll("aws.aws","S3").replaceAll("google_","").replaceAll("google",""),this.logtaildata.push(e)}))}))),this.showLog_module("")}))},sendBack(e){"Escape"===e.key&&this.$router.go(-1)}},setup(){let e=[{ocr_by_google:"OCR"}];const{onConnect:t,addEdges:o}=(0,A.U8)();return t((e=>o([e]))),{elements:(0,E.iH)([]),sub_nodes:(0,E.iH)([]),addNodes:(0,E.iH)(!1),importNodes:(0,E.iH)(!1),nodetype:(0,E.iH)("Select"),nodename:(0,E.iH)(""),nodesystem:(0,E.iH)(""),system:(0,E.iH)(""),id:(0,E.iH)(""),docID:(0,E.iH)(""),flow_data:(0,E.iH)(),modules:(0,E.iH)(""),nodemessage:(0,E.iH)(""),timelog:(0,E.iH)(""),wordfilter:(0,E.iH)(e),parent_indicator:(0,E.iH)(""),parent_position:(0,E.iH)({}),logtaildata:(0,E.iH)([]),module:(0,E.iH)(""),logdata:(0,E.iH)([])}}});var R=o(74260),q=o(24379),I=o(2165),N=o(24554),O=o(7518),P=o.n(O);const Z=(0,R.Z)(B,[["render",C],["__scopeId","data-v-1953e4d2"]]),T=Z;P()(B,"components",{QPage:q.Z,QBtn:I.Z,QIcon:N.Z})}}]);