"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[7513],{37513:(e,t,o)=>{o.r(t),o.d(t,{default:()=>$t});var a=o(83673),n=o(62323),i=o(98880);const l=e=>((0,a.dD)("data-v-29b1f872"),e=e(),(0,a.Cn)(),e),d={id:"services",class:"services section-bg"},s={class:"row"},r={class:"col-12",style:{"margin-top":"10px"}},c={style:{"font-size":"20px","margin-left":"80px"}},u={class:"row",style:{float:"right","margin-right":"43px",height:"30px"}},p={class:"row",style:{border:"1px solid","margin-right":"20px","min-width":"130px"}},m={style:{margin:"auto 5px auto 5px",width:"40px"},align:"center"},h={style:{margin:"auto 10px auto 5px","min-width":"30px"},align:"center"},_=l((()=>(0,a._)("hr",{style:{"margin-top":"20px","margin-bottom":"15px"}},null,-1))),f={class:"row",style:{"margin-bottom":"50px","margin-left":"50px"}},w={class:"col-4"},g={class:"col-8"},v={style:{border:"2px solid","margin-left":"20px","margin-right":"48px"}},y={key:0,class:"image"},b={key:1},Z=l((()=>(0,a._)("img",{src:"loader.gif",alt:"Loading...",class:"inner",style:{"margin-left":"auto","margin-right":"30%"}},null,-1))),W=[Z],x={key:2},V=l((()=>(0,a._)("div",null,"No doc",-1))),k={class:"q-ml-sm"};function D(e,t,o,l,Z,D){const C=(0,a.up)("q-separator"),q=(0,a.up)("q-input"),Q=(0,a.up)("q-btn"),H=(0,a.up)("q-tooltip"),U=(0,a.up)("q-icon"),$=(0,a.up)("q-item-section"),z=(0,a.up)("q-item"),T=(0,a.up)("q-list"),S=(0,a.up)("q-menu"),P=(0,a.up)("Document_View_Left"),I=(0,a.up)("vue-pdf-embed"),B=(0,a.up)("q-avatar"),j=(0,a.up)("DocSplit"),E=(0,a.up)("q-dialog"),O=(0,a.up)("q-card-section"),R=(0,a.up)("CancelBtn"),L=(0,a.up)("SaveBtn"),A=(0,a.up)("q-card-actions"),K=(0,a.up)("q-card"),M=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)("section",d,[(0,a._)("div",s,[(0,a._)("div",r,[(0,a._)("span",c,(0,n.zw)(e.doc["name"]),1),(0,a._)("span",u,[(0,a._)("div",p,[(0,a._)("span",m,(0,n.zw)(e.$t("doc2light.pages.page")),1),(0,a.Wm)(C,{vertical:""}),(0,a.Wm)(q,{dense:"",borderless:"",modelValue:e.inputPage,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.inputPage=t),t[1]||(t[1]=e=>{this.changePage(e)})],style:{width:"30px","margin-left":"5px"}},null,8,["modelValue"]),(0,a.Wm)(C,{vertical:""}),(0,a._)("span",h,(0,n.zw)(e.$t("doc2light.pages.of")+" "+e.pageCount),1),(0,a.Wm)(C,{vertical:""}),(0,a.Wm)(Q,{flat:"",icon:"navigate_before",style:{width:"20px"},onClick:t[2]||(t[2]=t=>this.changePage(e.inputPage-1))}),(0,a.Wm)(C,{vertical:""}),(0,a.Wm)(Q,{flat:"",icon:"navigate_next",style:{width:"20px"},onClick:t[3]||(t[3]=t=>this.changePage(e.inputPage+1))})]),(0,a.Wm)(Q,{icon:"settings",class:"default-btn-alfred",style:{"margin-right":"5px"},flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(S,{align:"center"},{default:(0,a.w5)((()=>[(0,a.Wm)(T,{bordered:"",separator:""},{default:(0,a.w5)((()=>[(0,a.wy)(((0,a.wg)(),(0,a.j4)(z,{clickable:"",onClick:t[4]||(t[4]=t=>e.confirm=!0)},{default:(0,a.w5)((()=>[(0,a.Wm)(H,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.$t("doc2light.pages.delete")),1)])),_:1}),(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Wm)(U,{color:"red",name:"delete_outline",size:"1.8em"})])),_:1})])),_:1})),[[M]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(z,{clickable:"",onClick:t[5]||(t[5]=t=>e.onDownloadClick())},{default:(0,a.w5)((()=>[(0,a.Wm)(H,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.$t("doc2light.pages.download")),1)])),_:1}),(0,a.Wm)(U,{name:"download",size:"1.8em"})])),_:1})),[[M]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(z,{clickable:"",onClick:t[6]||(t[6]=t=>e.show_popup=!0)},{default:(0,a.w5)((()=>[(0,a.Wm)(H,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.$t("doc2light.pages.split")),1)])),_:1}),(0,a.Wm)(U,{name:"insert_page_break",size:"1.8em"})])),_:1})),[[M]])])),_:1})])),_:1})])),_:1})])])]),_,(0,a._)("div",f,[(0,a._)("div",w,[(0,a.Wm)(P)]),(0,a._)("div",g,[(0,a._)("div",v,[e.image?((0,a.wg)(),(0,a.iD)("div",y,[(0,a.Wm)(I,{ref:"pdfRef",source:e.image,style:{"max-height":"72vh"},page:e.page,onRendered:t[7]||(t[7]=t=>e.getRef())},null,8,["source","page"])])):e.loading?((0,a.wg)(),(0,a.iD)("div",b,W)):((0,a.wg)(),(0,a.iD)("div",x,[(0,a.Wm)(B,{color:"red",size:"250px","font-size":"50px","text-color":"white"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a.Wm)(U,{name:"warning"})]),V])),_:1})]))]),(0,a.Wm)(E,{modelValue:e.show_popup,"onUpdate:modelValue":t[8]||(t[8]=t=>e.show_popup=t),onKeydown:t[9]||(t[9]=(0,i.D2)((t=>e.show_popup=!1),["esc"]))},{default:(0,a.w5)((()=>[(0,a.Wm)(j,{doc:e.image,pageCount:e.pageCount,filedata:e.filedata,mode:"split_only"},null,8,["doc","pageCount","filedata"])])),_:1},8,["modelValue"]),(0,a.Wm)(E,{modelValue:e.confirm,"onUpdate:modelValue":t[10]||(t[10]=t=>e.confirm=t),onKeydown:t[11]||(t[11]=(0,i.D2)((t=>e.confirm=!1),["esc"])),style:{width:"350px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(K,{style:{width:"350px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(O,{class:"row items-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{icon:"delete",color:"red","text-color":"white"}),(0,a._)("span",k,(0,n.zw)(e.$t("doc2light.descriptions.confirm_delete")+" ("+e.$t("doc2light.pages.document")+")"),1)])),_:1}),(0,a.Wm)(A,{align:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(R),(0,a.Wm)(L,{label:e.$t("doc2light.popups.accept"),onClick:e.deleteDoc},null,8,["label","onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])])}var C=o(77378),q=o(61959),Q=o(45401),H=o(25616),U=o(79261),$=o(10321),z=o(54268);const T={align:"center"},S={class:"text-left"},P={class:"text-left",style:{height:"49vh"}},I={class:"text-left"},B={class:"text-left",style:{"margin-left":"5%"}};function j(e,t,o,n,i,l){const d=(0,a.up)("q-btn-toggle"),s=(0,a.up)("Details"),r=(0,a.up)("q-carousel-slide"),c=(0,a.up)("Content"),u=(0,a.up)("MetaData"),p=(0,a.up)("TimeLine"),m=(0,a.up)("q-carousel");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",T,[(0,a.Wm)(d,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=t=>e.show=t),unelevated:"",style:{"margin-bottom":"10px"},options:[{label:e.$t("doc2light.pages.details"),value:"details"},{label:e.$t("doc2light.pages.content"),value:"content"},{label:e.$t("doc2light.pages.metadata"),value:"metadata"},{label:e.$t("doc2light.pages.timeline"),value:"timeline"}]},null,8,["modelValue","options"])]),(0,a.Wm)(m,{animated:"",modelValue:e.show,"onUpdate:modelValue":t[1]||(t[1]=t=>e.show=t),infinite:"",id:"view-left",style:{height:"95%"},"transition-prev":"jump-right","transition-next":"jump-left"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{name:"details"},{default:(0,a.w5)((()=>[(0,a._)("div",S,[(0,a.Wm)(s)])])),_:1}),(0,a.Wm)(r,{name:"content"},{default:(0,a.w5)((()=>[(0,a._)("div",P,[(0,a.Wm)(c)])])),_:1}),(0,a.Wm)(r,{name:"metadata"},{default:(0,a.w5)((()=>[(0,a._)("div",I,[(0,a.Wm)(u)])])),_:1}),(0,a.Wm)(r,{name:"timeline"},{default:(0,a.w5)((()=>[(0,a._)("div",B,[(0,a.Wm)(p)])])),_:1})])),_:1},8,["modelValue"])],64)}const E={class:"text-left",style:{"margin-left":"2%"}},O={style:{"margin-top":"10px"}},R={style:{"margin-top":"10px"}},L={style:{"margin-top":"10px"}},A={style:{"margin-top":"10px"}},K={style:{"margin-top":"10px"}},M={style:{"margin-top":"10px"}},Y={style:{"margin-top":"10px"}},F={style:{"margin-top":"2vh"},align:"center"};function N(e,t,o,l,d,s){const r=(0,a.up)("q-input"),c=(0,a.up)("q-icon"),u=(0,a.up)("q-select"),p=(0,a.up)("q-chip"),m=(0,a.up)("q-item-label"),h=(0,a.up)("q-item-section"),_=(0,a.up)("q-item"),f=(0,a.up)("CancelBtn"),w=(0,a.up)("SaveBtn"),g=(0,a.up)("EditCreatePopup"),v=(0,a.up)("q-dialog"),y=(0,a.up)("TagsEditCreate");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",E,[(0,a._)("div",O,[(0,a.Uk)((0,n.zw)(e.$t("doc2light.table.title"))+" ",1),(0,a.Wm)(r,{outlined:"",style:{width:"97%"},dense:"",modelValue:e.doc_information["name"],"onUpdate:modelValue":t[0]||(t[0]=t=>e.doc_information["name"]=t)},null,8,["modelValue"])]),(0,a._)("div",R,[(0,a.Uk)((0,n.zw)(e.$t("doc2light.table.asn"))+" ",1),(0,a.Wm)(r,{outlined:"",style:{width:"97%"},dense:"",modelValue:e.doc_information["asi"],"onUpdate:modelValue":t[1]||(t[1]=t=>e.doc_information["asi"]=t)},null,8,["modelValue"])]),(0,a._)("div",L,[(0,a.Uk)((0,n.zw)(e.$t("doc2light.table.created_on"))+" ",1),(0,a.Wm)(r,{outlined:"",style:{width:"97%"},dense:"",readonly:"",modelValue:e.doc_information["created_on"],"onUpdate:modelValue":t[2]||(t[2]=t=>e.doc_information["created_on"]=t)},null,8,["modelValue"])]),(0,a._)("div",A,[(0,a.Uk)((0,n.zw)(e.$t("doc2light.pages.assignee"))+" ",1),(0,a.Wm)(u,{"virtual-scroll-item-size":"10",outlined:"",style:{width:"97%"},dense:"",modelValue:e.doc_information["correspondent"],"onUpdate:modelValue":t[6]||(t[6]=t=>e.doc_information["correspondent"]=t),options:e.correspondents},{after:(0,a.w5)((()=>[(0,a.Wm)(c,{name:"add_box",size:"2vh",onClick:t[3]||(t[3]=t=>e.show_popup["corresp"]=!0),style:{cursor:"pointer"}})])),append:(0,a.w5)((()=>[(0,a.Wm)(c,{onClick:[t[4]||(t[4]=(0,i.iM)((()=>{}),["stop","prevent"])),t[5]||(t[5]=t=>e.doc_information["correspondent"]="")],name:"delete",size:"2vh",style:{cursor:"pointer"}})])),_:1},8,["modelValue","options"])]),(0,a._)("div",K,[(0,a.Uk)((0,n.zw)(e.$t("doc2light.pages.doc_type"))+" ",1),(0,a.Wm)(u,{outlined:"",style:{width:"97%"},dense:"",modelValue:e.doc_information["doc_type"],"onUpdate:modelValue":t[10]||(t[10]=t=>e.doc_information["doc_type"]=t),options:e.doc_types},{after:(0,a.w5)((()=>[(0,a.Wm)(c,{name:"add_box",size:"2vh",onClick:t[7]||(t[7]=t=>e.show_popup["doctype"]=!0),style:{cursor:"pointer"}})])),append:(0,a.w5)((()=>[(0,a.Wm)(c,{onClick:[t[8]||(t[8]=(0,i.iM)((()=>{}),["stop","prevent"])),t[9]||(t[9]=t=>e.doc_information["doc_type"]="")],name:"delete",size:"2vh",style:{cursor:"pointer"}})])),_:1},8,["modelValue","options"])]),(0,a._)("div",M,[(0,a.Uk)((0,n.zw)(e.$t("doc2light.pages.tags"))+" ",1),(0,a.Wm)(u,{outlined:"",multiple:!0,style:{width:"97%"},"use-chips":"",dense:"",modelValue:e.doc_information["tags"],"onUpdate:modelValue":t[12]||(t[12]=t=>e.doc_information["tags"]=t),options:e.tags},{option:(0,a.w5)((t=>[(0,a.Wm)(_,(0,n.vs)((0,a.F4)(t.itemProps)),{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{style:(0,n.j5)({"background-color":t.opt.color,color:e.color_check(t.opt.color)})},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(t.opt.label),1)])),_:2},1032,["style"])])),_:2},1024)])),_:2},1024)])),_:2},1040)])),after:(0,a.w5)((()=>[(0,a.Wm)(c,{name:"add_box",size:"2vh",onClick:t[11]||(t[11]=t=>e.show_popup["tags"]=!0),style:{cursor:"pointer"}})])),_:1},8,["modelValue","options"])]),(0,a._)("div",Y,[(0,a.Uk)((0,n.zw)(e.$t("doc2light.popups.save_location"))+" ",1),(0,a.Wm)(r,{outlined:"",style:{width:"97%"},dense:"",readonly:"",placeholder:e.$t("doc2light.popups.save_location")},null,8,["placeholder"])]),(0,a._)("div",F,[(0,a.Wm)(f,{style:{"margin-right":"2vw"},onClick:t[13]||(t[13]=t=>e.$router.push("/alfred/dashboard"))}),(0,a.Wm)(w,{onClick:t[14]||(t[14]=t=>e.saveAndNext()),style:{"margin-right":"2vw"},label:e.$t("doc2light.pages.save_continue")},null,8,["label"]),(0,a.Wm)(w,{onClick:t[15]||(t[15]=t=>e.saveAndBack())})])]),(0,a.Wm)(v,{modelValue:e.show_popup["corresp"],"onUpdate:modelValue":t[16]||(t[16]=t=>e.show_popup["corresp"]=t),onKeydown:t[17]||(t[17]=(0,i.D2)((t=>(e.show_popup["corresp"]=!1,e.initView())),["esc"]))},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{show:"corresp",mode:"create"})])),_:1},8,["modelValue"]),(0,a.Wm)(v,{modelValue:e.show_popup["doctype"],"onUpdate:modelValue":t[18]||(t[18]=t=>e.show_popup["doctype"]=t),onKeydown:t[19]||(t[19]=(0,i.D2)((t=>(e.show_popup["doctype"]=!1,e.initView())),["esc"]))},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{show:"doctype",mode:"create"})])),_:1},8,["modelValue"]),(0,a.Wm)(v,{modelValue:e.show_popup["tags"],"onUpdate:modelValue":t[20]||(t[20]=t=>e.show_popup["tags"]=t),onKeydown:t[21]||(t[21]=(0,i.D2)((t=>(e.show_popup["tags"]=!1,e.initView())),["esc"]))},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{mode:"create"})])),_:1},8,["modelValue"])],64)}var J=o(50442),G=o(97767),X=o(22899),ee=o(85574),te=o(64252),oe=function(e,t,o,a){function n(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function l(e){try{s(a.next(e))}catch(t){i(t)}}function d(e){try{s(a["throw"](e))}catch(t){i(t)}}function s(e){e.done?o(e.value):n(e.value).then(l,d)}s((a=a.apply(e,t||[])).next())}))};const ae=(0,a.aZ)({data(){return{showIcons:!1,supportURL:"https://cloudintegration.eu/doc2_support"}},components:{EditCreatePopup:X.Z,TagsEditCreate:ee.Z,SaveBtn:J.Z,CancelBtn:G.Z},mixins:[Q.Z,C.Z],mounted(){this.initView()},methods:{color_check(e){if(null==e)return"black";var t=e.substring(1),o=parseInt(t,16),a=o>>16&255,n=o>>8&255,i=o>>0&255,l=.2126*a+.7152*n+.0722*i;return l<40?"white":"black"},initView(){this.setupDropdowns(),this.taglist=[];var e=this.$route.params.id;if(this.doc_information=this.apidata.documentData.documents[e],this.doc_information["created_on"]=this.formateDate(this.doc_information["created_on"],"YY-MM-DD HH:mm:ss"),this.doc_index=Object.keys(this.apidata.documentData.documents).indexOf(e),this.doc_information["correspondent"])for(const[t,o]of Object.entries(this.apidata.correspondentData.data))o.id==this.doc_information["correspondent"].id&&(this.doc_information["correspondent"]=o,this.doc_information["correspondent"]["label"]=o.name);else this.doc_information["correspondent"]="";if(this.doc_information["doc_type"])for(const[t,o]of Object.entries(this.apidata.docTypeData.data))o.id==this.doc_information["doc_type"].id&&(this.doc_information["doc_type"]=o,this.doc_information["doc_type"]["label"]=o.name);else this.doc_information["doc_type"]="";this.doc_information["tags"].length>0?(this.doc_information["tags"].forEach((e=>{let t=this.apidata.tagData.data[e.value];t.value=t.id,t.label=t.name,this.taglist.push(t)})),this.doc_information["tags"]=this.taglist):this.doc_information["tags"]=[]},setupDropdowns(){for(const[e,t]of Object.entries(this.apidata.correspondentData.data))this.correspondents.push({value:t.id,label:t.name});for(const[e,t]of Object.entries(this.apidata.docTypeData.data))this.doc_types.push({value:t.id,label:t.name});for(const[e,t]of Object.entries(this.apidata.tagData.data))this.tags.push({value:t.id,label:t.name,color:t.color})},saveAndBack(){return oe(this,void 0,void 0,(function*(){yield this.saveDoc(),this.$router.push("/alfred/dashboard")}))},saveDoc(){return oe(this,void 0,void 0,(function*(){let e="";this.doc_information["tags"].forEach((t=>{e+=t.value+","})),yield te.zU.update_doc(this.doc_information.id,this.doc_information.name,this.doc_information.asi,this.doc_information["correspondent"].value,this.doc_information["doc_type"].value,e)}))},saveAndNext(){return oe(this,void 0,void 0,(function*(){yield this.saveDoc(),Object.entries(this.apidata.documentData.documents).forEach(((e,t)=>{t==this.doc_index+1&&this.$router.push("/alfred/document/"+e[0])}))}))},formateDate(e,t){return H.ZP.formatDate(e,t)}},setup(){const e=(0,U.Wb)(),t=(0,$.Jk)(e),{setDocTypesfromServer:o,setCorrespondentsFromServer:a,setTagsFromServer:n,loadFromServer:i}=e;return{loadFromServer:i,apidata:(0,q.iH)(t),setDocTypesfromServer:o,setCorrespondentsFromServer:a,setTagsFromServer:n,show_popup:(0,q.iH)({}),doc_information:(0,q.iH)({}),doc:(0,q.iH)(),taglist:(0,q.iH)([]),doc_index:(0,q.iH)(),correspondents:(0,q.iH)([]),doc_types:(0,q.iH)([]),tags:(0,q.iH)([])}}});var ne=o(74260),ie=o(64689),le=o(72448),de=o(24554),se=o(83414),re=o(52035),ce=o(2350),ue=o(67030),pe=o(46778),me=o(7518),he=o.n(me);const _e=(0,ne.Z)(ae,[["render",N],["__scopeId","data-v-a9dfbe74"]]),fe=_e;function we(e,t,o,l,d,s){const r=(0,a.up)("q-space"),c=(0,a.up)("q-icon"),u=(0,a.up)("q-input"),p=(0,a.up)("q-td"),m=(0,a.up)("q-tr"),h=(0,a.up)("q-table"),_=(0,a.up)("AddRow"),f=(0,a.up)("q-dialog"),w=(0,a.up)("EditRow");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(h,{dense:"",id:"metadata-table",class:(0,n.C_)("main-table"),rows:e.document_metadata,columns:e.column,"no-data-label":e.$t("pages.messages.NO_RECORD_FOUND"),"rows-per-page-options":[0],"row-key":"name",filter:e.filter,flat:""},{top:(0,a.w5)((()=>[(0,a.Wm)(r),(0,a.Wm)(u,{class:"width-500",dense:"",outlined:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":t[0]||(t[0]=t=>e.filter=t),label:e.$t("search_by_column")},{append:(0,a.w5)((()=>[(0,a.Wm)(c,{name:"search"})])),_:1},8,["modelValue","label"])])),body:(0,a.w5)((e=>[(0,a.Wm)(m,{props:e,id:e.key},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(t=>((0,a.wg)(),(0,a.j4)(p,{key:t.name},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.row[t.name]),1)])),_:2},1024)))),128))])),_:2},1032,["props","id"])])),_:1},8,["rows","columns","no-data-label","filter"]),(0,a.Wm)(f,{modelValue:e.show_create_dialog,"onUpdate:modelValue":t[1]||(t[1]=t=>e.show_create_dialog=t),onKeydown:t[2]||(t[2]=(0,i.D2)((t=>e.show_create_dialog=!1),["esc"]))},{default:(0,a.w5)((()=>[(0,a.Wm)(_)])),_:1},8,["modelValue"]),(0,a.Wm)(f,{modelValue:e.show_edit_dialog,"onUpdate:modelValue":t[3]||(t[3]=t=>e.show_edit_dialog=t),onKeydown:t[4]||(t[4]=(0,i.D2)((t=>e.show_edit_dialog=!1),["esc"]))},{default:(0,a.w5)((()=>[(0,a.Wm)(w)])),_:1},8,["modelValue"])],64)}he()(ae,"components",{QInput:ie.Z,QSelect:le.Z,QIcon:de.Z,QItem:se.Z,QItemSection:re.Z,QItemLabel:ce.Z,QChip:ue.Z,QDialog:pe.Z});const ge={class:"text-weight-bold"},ve={class:"row full-width mb-10 mt-8"},ye={class:"full-width"},be={class:"create-edit-card-row-element"},Ze=(0,a._)("div",{class:"create-edit-card-row-key-element"},"Key",-1),We={class:"create-edit-card-row-element"},xe=(0,a._)("div",{class:"create-edit-card-row-key-element"},"Value",-1);function Ve(e,t,o,i,l,d){const s=(0,a.up)("q-toolbar-title"),r=(0,a.up)("q-btn"),c=(0,a.up)("q-toolbar"),u=(0,a.up)("q-input"),p=(0,a.up)("q-card-section"),m=(0,a.up)("SaveBtn"),h=(0,a.up)("q-card-actions"),_=(0,a.up)("q-card"),f=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(_,{class:"create-edit-card"},{default:(0,a.w5)((()=>[(0,a._)("form",null,[(0,a.Wm)(c,{class:"text-white secondary-toolbar"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a._)("span",ge,(0,n.zw)(e.$t("pages.settings.master_data_lookup.add_row")),1)])),_:1}),(0,a.wy)((0,a.Wm)(r,{flat:"",round:"",dense:"",icon:"close"},null,512),[[f]])])),_:1}),(0,a.Wm)(p,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a._)("div",ve,[(0,a._)("div",ye,[(0,a._)("div",be,[Ze,(0,a.Wm)(u,{type:"text",outlined:"",modelValue:e.add_row["key"],"onUpdate:modelValue":t[0]||(t[0]=t=>e.add_row["key"]=t),filled:"",key:""},null,8,["modelValue"])]),(0,a._)("div",We,[xe,(0,a.Wm)(u,{type:"text",outlined:"",modelValue:e.add_row["value"],"onUpdate:modelValue":t[1]||(t[1]=t=>e.add_row["value"]=t),filled:""},null,8,["modelValue"])])])])])),_:1}),(0,a.Wm)(h,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(r,{class:"bg-grey-3",label:e.$t("cancel")},null,8,["label"]),[[f]]),(0,a.Wm)(m)])),_:1})])])),_:1})}const ke=(0,a.aZ)({el:"#app",mixins:[Q.Z,C.Z],props:{},components:{SaveBtn:J.Z},data(){return{}},setup(){return{add_row:(0,q.iH)({})}},methods:{initEditCreate(){}}});var De=o(10151),Ce=o(39570),qe=o(13747),Qe=o(2165),He=o(25589),Ue=o(99367),$e=o(60677);const ze=(0,ne.Z)(ke,[["render",Ve]]),Te=ze;he()(ke,"components",{QCard:De.Z,QToolbar:Ce.Z,QToolbarTitle:qe.Z,QBtn:Qe.Z,QCardSection:He.Z,QInput:ie.Z,QCardActions:Ue.Z}),he()(ke,"directives",{ClosePopup:$e.Z});const Se={class:"text-weight-bold"},Pe={class:"row full-width mb-10 mt-8"},Ie={class:"full-width"},Be={class:"create-edit-card-row-element"},je=(0,a._)("div",{class:"create-edit-card-row-key-element"},"Key",-1),Ee={class:"create-edit-card-row-element"},Oe=(0,a._)("div",{class:"create-edit-card-row-key-element"},"Value",-1);function Re(e,t,o,i,l,d){const s=(0,a.up)("q-toolbar-title"),r=(0,a.up)("q-toolbar"),c=(0,a.up)("q-input"),u=(0,a.up)("q-card-section"),p=(0,a.up)("q-btn"),m=(0,a.up)("SaveBtn"),h=(0,a.up)("q-card-actions"),_=(0,a.up)("q-card"),f=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(_,{class:"create-edit-card"},{default:(0,a.w5)((()=>[(0,a._)("form",null,[(0,a.Wm)(r,{class:"text-white secondary-toolbar"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a._)("span",Se,(0,n.zw)(e.$t("pages.settings.master_data_lookup.edit_row")),1)])),_:1})])),_:1}),(0,a.Wm)(u,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a._)("div",Pe,[(0,a._)("div",Ie,[(0,a._)("div",Be,[je,(0,a.Wm)(c,{type:"text",outlined:"",modelValue:e.edit_row["key"],"onUpdate:modelValue":t[0]||(t[0]=t=>e.edit_row["key"]=t),filled:""},null,8,["modelValue"])]),(0,a._)("div",Ee,[Oe,(0,a.Wm)(c,{type:"text",outlined:"",modelValue:e.edit_row["value"],"onUpdate:modelValue":t[1]||(t[1]=t=>e.edit_row["value"]=t),filled:""},null,8,["modelValue"])])])])])),_:1}),(0,a.Wm)(h,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(p,{class:"bg-grey-3",label:e.$t("cancel")},null,8,["label"]),[[f]]),(0,a.Wm)(m)])),_:1})])])),_:1})}const Le=(0,a.aZ)({el:"#app",mixins:[Q.Z,C.Z],props:{},components:{SaveBtn:J.Z},data(){return{}},setup(){return{edit_row:(0,q.iH)({})}},methods:{}}),Ae=(0,ne.Z)(Le,[["render",Re]]),Ke=Ae;he()(Le,"components",{QCard:De.Z,QToolbar:Ce.Z,QToolbarTitle:qe.Z,QCardSection:He.Z,QInput:ie.Z,QCardActions:Ue.Z,QBtn:Qe.Z}),he()(Le,"directives",{ClosePopup:$e.Z});const Me=(0,a.aZ)({el:"#app",mixins:[Q.Z,C.Z],props:["showSpinner"],components:{AddRow:Te,EditRow:Ke},data(){return{}},mounted(){const e=this.$route.params.id;let t=this.apidata.documentData.documents[e];Object.keys(t.metadata).forEach((e=>{"created-on"==e||"modified-on"==e?this.document_metadata.push({key:e,value:this.formateDate(t.metadata[e],"YYYY-MM-DD HH:mm:ss")}):this.document_metadata.push({key:e,value:t.metadata[e]})}))},methods:{openAddDialog(){this.show_create_dialog=!0},openEditDialog(){this.show_edit_dialog=!0},formateDate(e,t){return H.ZP.formatDate(e,t)},deleteRowLocal(e){alert(e)}},setup(){let e=[];e.push({name:"key",label:"Key",field:"key",align:"left"}),e.push({name:"value",label:"Value",field:"value",align:"left"});let t=[];const o=(0,U.Wb)(),a=(0,$.Jk)(o);return{document_metadata:(0,q.iH)(t),apidata:(0,q.iH)(a),column:(0,q.iH)(e),filter:(0,q.iH)(""),show_create_dialog:(0,q.iH)(!1),show_edit_dialog:(0,q.iH)(!1)}}});var Ye=o(17132),Fe=o(62025),Ne=o(18186),Je=o(83884),Ge=o(5363);const Xe=(0,ne.Z)(Me,[["render",we],["__scopeId","data-v-b67d5c46"]]),et=Xe;he()(Me,"components",{QTable:Ye.Z,QBtn:Qe.Z,QSpace:Fe.Z,QInput:ie.Z,QIcon:de.Z,QTr:Ne.Z,QTd:Je.Z,QTooltip:Ge.Z,QDialog:pe.Z});const tt={class:"q-px-lg q-pb-md"};function ot(e,t,o,n,i,l){const d=(0,a.up)("q-timeline-entry"),s=(0,a.up)("q-timeline");return(0,a.wg)(),(0,a.iD)("div",tt,[(0,a.Wm)(s,{color:"secondary",style:{"overflow-y":"auto",height:"55vh"}},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{heading:"",body:e.$t("doc2light.pages.timeline")},null,8,["body"]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.data,((t,o)=>((0,a.wg)(),(0,a.j4)(d,{key:o,style:{"white-space":"pre-line"},title:t.data,subtitle:t.user+"\n"+e.formateDate(this.modified_at,"HH:mm:ss")},null,8,["title","subtitle"])))),128))])),_:1})])}var at=function(e,t,o,a){function n(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function l(e){try{s(a.next(e))}catch(t){i(t)}}function d(e){try{s(a["throw"](e))}catch(t){i(t)}}function s(e){e.done?o(e.value):n(e.value).then(l,d)}s((a=a.apply(e,t||[])).next())}))};const nt=(0,a.aZ)({data(){return{}},components:{},mixins:[Q.Z,C.Z],mounted(){this.getTimeLineData()},methods:{getTimeLineData(){return at(this,void 0,void 0,(function*(){const e=this.$route.params.id,t=yield this.get_by_id(e),o=t;this.data=o.doc.timeline,this.modified_at=o.doc.last_modified}))},formateDate(e,t){return H.ZP.formatDate(e,t)}},setup(){const e=(0,U.My)(),{get_by_id:t}=((0,$.Jk)(e),e);return{get_by_id:t,data:(0,q.iH)({}),modified_at:(0,q.iH)()}}});var it=o(1432),lt=o(23424);const dt=(0,ne.Z)(nt,[["render",ot]]),st=dt;he()(nt,"components",{QTimeline:it.Z,QTimelineEntry:lt.Z});const rt={class:"text-left",style:{"margin-left":"2%"}};function ct(e,t,o,n,i,l){const d=(0,a.up)("q-input");return(0,a.wg)(),(0,a.iD)("div",rt,[(0,a.Wm)(d,{class:"highlighted-back",style:{"overflow-y":"auto",width:"97%"},readonly:"",outlined:"",dense:"",autogrow:"",modelValue:e.doc_content[0],"onUpdate:modelValue":t[0]||(t[0]=t=>e.doc_content[0]=t)},null,8,["modelValue"])])}var ut=function(e,t,o,a){function n(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function l(e){try{s(a.next(e))}catch(t){i(t)}}function d(e){try{s(a["throw"](e))}catch(t){i(t)}}function s(e){e.done?o(e.value):n(e.value).then(l,d)}s((a=a.apply(e,t||[])).next())}))};const pt=(0,a.aZ)({data(){return{}},components:{},mixins:[Q.Z,C.Z],methods:{getOcrText(){return ut(this,void 0,void 0,(function*(){var e=this.$route.params.id;const t=yield te.zU.get_doc_text(e);this.doc_content.push(t.data.text)}))}},mounted(){this.getOcrText()},setup(){return{doc_content:(0,q.iH)([])}}}),mt=(0,ne.Z)(pt,[["render",ct]]),ht=mt;he()(pt,"components",{QInput:ie.Z});const _t=(0,a.aZ)({data(){return{showIcons:!1,supportURL:"https://cloudintegration.eu/doc2_support"}},components:{Details:fe,MetaData:et,TimeLine:st,Content:ht},mixins:[Q.Z,C.Z],methods:{},setup(){return{show:(0,q.iH)("details"),show_popup:(0,q.iH)({})}}});var ft=o(30201),wt=o(31277),gt=o(34593);const vt=(0,ne.Z)(_t,[["render",j]]),yt=vt;he()(_t,"components",{QBtnToggle:ft.Z,QCarousel:wt.Z,QCarouselSlide:gt.Z});var bt=o(45752),Zt=o.n(bt),Wt=o(30052),xt=o.n(Wt),Vt=o(74371),kt=function(e,t,o,a){function n(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function l(e){try{s(a.next(e))}catch(t){i(t)}}function d(e){try{s(a["throw"](e))}catch(t){i(t)}}function s(e){e.done?o(e.value):n(e.value).then(l,d)}s((a=a.apply(e,t||[])).next())}))};const Dt=(0,a.aZ)({data(){return{}},components:{CancelBtn:G.Z,SaveBtn:J.Z,Document_View_Left:yt,VuePdfEmbed:Zt(),DocSplit:Vt.Z},mixins:[Q.Z,C.Z],mounted(){const e=this.$route.params.id;this.doc=this.apidata.documentData.documents[e],this.imageHandler()},methods:{changePage(e){Number(e)<=this.pageCount?(this.inputPage=e,this.page=Number(e)):this.showErrorToast("Select a valid page")},imageHandler(){return kt(this,void 0,void 0,(function*(){var e=this.$route.params.id;const t=yield(0,z.O_)();this.loading=!0;try{const o=yield xt().get(z.hi.download_doc+"/"+e,{responseType:"blob",headers:{Authorization:t}});this.filedata=o.data,this.image=URL.createObjectURL(new Blob([o.data,e+".pdf",o.headers["content-type"]]))}catch(o){this.showErrorToast("There was an issue getting the pdf")}this.loading=!1}))},getRef(){this.pageCount=this.$refs["pdfRef"].pageCount},formateDate(e,t){return H.ZP.formatDate(e,t)},deleteDoc(){var e=this.$route.params.id;this.delete_doc(e),this.$router.push("/alfred/dashboard")},onDownloadClick(){return kt(this,void 0,void 0,(function*(){const e=this.$route.params.id;yield te.zU.download_doc(e).then((e=>{var t=document.createElement("a");this.doc["name"].endsWith(".pdf")?t.download=this.doc["name"]:t.download=this.doc["name"]+".pdf",t.href=e,document.body.appendChild(t),t.click(),document.body.removeChild(t)}))}))}},setup(){const e=(0,U.Wb)(),t=(0,$.Jk)(e),{delete_doc:o,loadFromServer:a}=e;return{loadFromServer:a,docId:(0,q.iH)(""),apidata:(0,q.iH)(t),delete_doc:o,filter:(0,q.iH)(""),view:(0,q.iH)("list"),doc:(0,q.iH)({}),showMenu:(0,q.iH)(!1),showIcons:(0,q.iH)(!0),confirm:(0,q.iH)(!1),loading:(0,q.iH)(!1),show:(0,q.iH)("details"),show_popup:(0,q.iH)({}),image:(0,q.iH)(""),page:(0,q.iH)(1),pageCount:(0,q.iH)(1),inputPage:(0,q.iH)(1),filedata:(0,q.iH)()}}});var Ct=o(65869),qt=o(20811),Qt=o(27011),Ht=o(75096);const Ut=(0,ne.Z)(Dt,[["render",D],["__scopeId","data-v-29b1f872"]]),$t=Ut;he()(Dt,"components",{QSeparator:Ct.Z,QInput:ie.Z,QBtn:Qe.Z,QMenu:qt.Z,QList:Qt.Z,QItem:se.Z,QTooltip:Ge.Z,QItemSection:re.Z,QIcon:de.Z,QAvatar:Ht.Z,QDialog:pe.Z,QCard:De.Z,QCardSection:He.Z,QCardActions:Ue.Z}),he()(Dt,"directives",{ClosePopup:$e.Z})}}]);