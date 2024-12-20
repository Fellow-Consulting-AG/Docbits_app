"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[7576],{17576:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ie});var l=a(61758);function o(e,t,a,o,n,s){const i=(0,l.g2)("Scanner");return(0,l.uX)(),(0,l.Wv)(i,{service:e.alfred},null,8,["service"])}var n=a(29104),s=a(58790);const i=e=>((0,l.Qi)("data-v-7b57f5aa"),e=e(),(0,l.jt)(),e),d={id:"services"},r={class:"row"},c={class:"col-9",style:{"margin-top":"2vh"}},u={class:"drag-area text-center full-width",style:{padding:"20px"},id:"box-droppable"},p={style:{width:"300px",margin:"auto"},align:"center"},h={style:{padding:"10px",width:"100%"}},g={style:{"font-size":"20px"}},f={class:"",style:{padding:"10px","margin-bottom":"10px",width:"100%"}},m={key:1,style:{height:"75vh","overflow-y":"auto",padding:"20px","margin-left":"68px",border:"2px solid"}},w={class:"col-2",style:{"margin-top":"2vh"}},v={class:"popup-heading color-primary"},_={class:"row text-center"},b={key:0,style:{"margin-top":"5px"}},y=i((()=>(0,l.Lk)("span",{class:"scanner-error"}," ! NO SCANNER FOUND ",-1)));function k(e,t,a,o,i,k){const F=(0,l.g2)("DownloadInstaller"),D=(0,l.g2)("q-dialog"),L=(0,l.g2)("q-img"),V=(0,l.g2)("q-file"),x=(0,l.g2)("q-card-section"),A=(0,l.g2)("q-card"),R=(0,l.g2)("vue-pdf-embed"),S=(0,l.g2)("q-separator"),I=(0,l.g2)("q-toolbar-title"),K=(0,l.g2)("q-toolbar"),$=(0,l.g2)("q-input"),C=(0,l.g2)("q-tooltip"),Q=(0,l.g2)("q-btn"),T=(0,l.g2)("q-item-section"),q=(0,l.g2)("q-item"),U=(0,l.g2)("q-select"),B=(0,l.g2)("DefaultBtn"),E=(0,l.g2)("q-checkbox"),N=(0,l.g2)("SaveBtn"),X=(0,l.g2)("q-card-actions"),M=(0,l.g2)("DocSplit");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(D,{modelValue:e.showDownloadInstaller,"onUpdate:modelValue":t[0]||(t[0]=t=>e.showDownloadInstaller=t),onKeydown:t[1]||(t[1]=(0,n.jR)((t=>e.showDownloadInstaller=!1),["esc"]))},{default:(0,l.k6)((()=>[(0,l.bF)(F)])),_:1},8,["modelValue"]),(0,l.Lk)("section",d,[(0,l.Lk)("div",r,[(0,l.Lk)("div",c,[e.showDragDrop?((0,l.uX)(),(0,l.Wv)(A,{key:0,flat:"",class:"drag-n-drop dark-back",onDrop:e.drop,onDragover:e.allowDrop,onDragleave:e.dragLeave},{default:(0,l.k6)((()=>[(0,l.bF)(x,{style:{border:"2px dashed",height:"100%"}},{default:(0,l.k6)((()=>[(0,l.Lk)("div",u,[(0,l.bF)(L,{src:"doc2light/scanner/cloud.svg",style:{height:"240px",width:"700px","margin-top":"10%"}}),(0,l.Lk)("div",p,[(0,l.Lk)("div",h,[(0,l.Lk)("span",g,(0,s.v_)(e.$t("doc2light.pages.dragndrop")),1)]),(0,l.Lk)("div",f,(0,s.v_)(e.$t("doc2light.pages.or")),1),(0,l.bF)(V,{color:"white",outlined:"",multiple:"",label:e.$t("doc2light.pages.browse_files"),modelValue:e.uploadedFiles,"onUpdate:modelValue":[t[2]||(t[2]=t=>e.uploadedFiles=t),e.uploadFiles],"data-cy":"upload-multiple-docs",style:{width:"60%"}},null,8,["label","modelValue","onUpdate:modelValue"])])])])),_:1})])),_:1},8,["onDrop","onDragover","onDragleave"])):((0,l.uX)(),(0,l.CE)("div",m,[(0,l.bF)(R,{ref:"pager",source:e.file},null,8,["source"])]))]),(0,l.bF)(S,{vertical:"",style:{"margin-left":"30px","margin-right":"30px","min-height":"89vh"}}),(0,l.Lk)("div",w,[(0,l.Lk)("div",null,[(0,l.bF)(A,{class:"card-format",flat:""},{default:(0,l.k6)((()=>[(0,l.bF)(K,null,{default:(0,l.k6)((()=>[(0,l.bF)(I,null,{default:(0,l.k6)((()=>[(0,l.Lk)("span",v,(0,s.v_)(e.$t("doc2light.pages.scan_settings")),1)])),_:1})])),_:1}),(0,l.bF)(x,null,{default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.bF)($,{modelValue:e.new_scan["name"],"onUpdate:modelValue":t[3]||(t[3]=t=>e.new_scan["name"]=t),label:e.$t("name")},null,8,["modelValue","label"])]),(0,l.Lk)("div",_,[(0,l.bF)(U,{style:{"min-width":"15vw"},modelValue:e.new_scan["source"],"onUpdate:modelValue":t[5]||(t[5]=t=>e.new_scan["source"]=t),label:e.$t("doc2light.pages.choose_source"),options:e.scanners},{after:(0,l.k6)((()=>[(0,l.bF)(Q,{unelevated:"",round:"",icon:"restart_alt",onClick:t[4]||(t[4]=t=>e.getScanners(e.valid_url))},{default:(0,l.k6)((()=>[(0,l.bF)(C,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(e.$t("doc2light.pages.search_scanners")),1)])),_:1})])),_:1})])),"no-option":(0,l.k6)((()=>[(0,l.bF)(q,null,{default:(0,l.k6)((()=>[(0,l.bF)(T,{class:"text-grey"},{default:(0,l.k6)((()=>[(0,l.eW)(" No results ")])),_:1})])),_:1})])),_:1},8,["modelValue","label","options"])]),e.showDownloadInstallerButton?((0,l.uX)(),(0,l.CE)("div",b,[(0,l.bF)(T,null,{default:(0,l.k6)((()=>[y])),_:1}),(0,l.bF)(B,{label:e.$t("doc2light.pages.download"),style:{"margin-top":"5px","margin-bottom":"15px"},onClick:t[6]||(t[6]=t=>e.showDownloadInstaller=!0)},null,8,["label"])])):(0,l.Q3)("",!0),(0,l.Lk)("div",null,[(0,l.bF)(E,{modelValue:e.new_scan["automatic_get"],"onUpdate:modelValue":t[7]||(t[7]=t=>e.new_scan["automatic_get"]=t),"indeterminate-value":!1,label:e.$t("doc2light.pages.automatic_get")},null,8,["modelValue","label"])]),(0,l.Lk)("div",null,[(0,l.bF)(E,{modelValue:e.new_scan["remove_empty_sites"],"onUpdate:modelValue":t[8]||(t[8]=t=>e.new_scan["remove_empty_sites"]=t),"indeterminate-value":!1,label:e.$t("doc2light.pages.remove_empty_pages")},null,8,["modelValue","label"])]),(0,l.Lk)("div",null,[(0,l.bF)(E,{modelValue:e.new_scan["2_sided"],"onUpdate:modelValue":t[9]||(t[9]=t=>e.new_scan["2_sided"]=t),"indeterminate-value":!1,label:e.$t("doc2light.pages.two_side_scan")},null,8,["modelValue","label"])]),(0,l.Lk)("div",null,[(0,l.bF)(U,{modelValue:e.new_scan["resolution"],"onUpdate:modelValue":t[10]||(t[10]=t=>e.new_scan["resolution"]=t),label:e.$t("doc2light.pages.resolution"),options:e.resolutions},null,8,["modelValue","label","options"])]),(0,l.Lk)("div",null,[(0,l.bF)(U,{type:"multi",modelValue:e.new_scan["pixel_type"],"onUpdate:modelValue":t[11]||(t[11]=t=>e.new_scan["pixel_type"]=t),label:"Pixeltype",options:[{value:"Grayscale8",label:e.$t("doc2light.pages.gray")},{value:"RGB24",label:e.$t("doc2light.table.color")}]},null,8,["modelValue","options"])])])),_:1}),e.documentScanned?((0,l.uX)(),(0,l.Wv)(X,{key:0,align:"center",style:{}},{default:(0,l.k6)((()=>[(0,l.bF)(B,{label:e.$t("doc2light.pages.scan"),onClick:t[12]||(t[12]=t=>e.doScan()),style:{"margin-right":"20px","margin-bottom":"10px"}},null,8,["label"]),(0,l.bF)(N,{label:e.$t("doc2light.pages.upload"),onClick:t[13]||(t[13]=t=>e.uploadSingleFile(e.filedata))},null,8,["label"])])),_:1})):((0,l.uX)(),(0,l.Wv)(X,{key:1,align:"center",style:{"margin-right":"7px"}},{default:(0,l.k6)((()=>[(0,l.bF)(B,{label:e.$t("doc2light.pages.scan"),style:{"margin-bottom":"20px"},onClick:e.doScan},null,8,["label","onClick"])])),_:1})),e.showSplitButton?((0,l.uX)(),(0,l.Wv)(X,{key:2,align:"center",class:"text-center"},{default:(0,l.k6)((()=>[(0,l.bF)(B,{label:e.$t("doc2light.pages.split"),onClick:t[14]||(t[14]=t=>e.show_popup=!0)},null,8,["label"])])),_:1})):(0,l.Q3)("",!0)])),_:1})]),(0,l.bF)(D,{modelValue:e.show_popup,"onUpdate:modelValue":t[15]||(t[15]=t=>e.show_popup=t),onKeydown:t[16]||(t[16]=(0,n.jR)((t=>e.show_popup=!1),["esc"]))},{default:(0,l.k6)((()=>[(0,l.bF)(M,{doc:e.file,pageCount:e.getRef(),filedata:e.filedata,mode:"split_create"},null,8,["doc","pageCount","filedata"])])),_:1},8,["modelValue"])])])])],64)}var F=a(24622),D=a(38734),L=a(18505),V=a(36246),x=a(78748),A=a(82303),R=a(11470),S=a(34300),I=a(5255),K=a(31123),$=a(97912),C=a(44271),Q=a(85487),T=function(e,t,a,l){function o(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,n){function s(e){try{d(l.next(e))}catch(t){n(t)}}function i(e){try{d(l["throw"](e))}catch(t){n(t)}}function d(e){e.done?a(e.value):o(e.value).then(s,i)}d((l=l.apply(e,t||[])).next())}))};const q=(0,l.pM)({data(){return{}},props:["service"],components:{DocSplit:x.A,DefaultBtn:K.A,VuePdfEmbed:$.A,DownloadInstaller:C.A,SaveBtn:I.A},mixins:[L.A,F.A],mounted(){logInfo(this.service);var e="https://local.polydocs.io:";this.initView(e)},methods:{initView(e){this.new_scan["automatic_get"]=!1,this.new_scan["remove_empty_sites"]=!1,this.new_scan["2_sided"]=!1,this.new_scan["resolution"]=this.resolutions[0],this.checkAlfred(e)},checkAlfred(e){return T(this,void 0,void 0,(function*(){try{yield A.A.get((0,Q.MV)(e+"12500/")),yield this.getScanners(e+"12500/")}catch(t){try{yield A.A.get((0,Q.MV)(e+"12154/")),yield this.getScanners(e+"12154/")}catch(t){try{yield A.A.get((0,Q.MV)(e+"12346/")),yield this.getScanners(e+"12346/")}catch(t){this.showErrorToast("No Running scanner found."),this.showDownloadInstallerButton=!0}}}}))},getScanners(e){return T(this,void 0,void 0,(function*(){this.valid_url=e;const t=yield A.A.get((0,Q.MV)(e+"scanners"));1==t.data.success?(this.scanners=[],t.data.scanners.forEach((e=>{this.scanners.push({value:e["Host"],label:e["Device"]})})),this.new_scan["source"]=this.scanners[0]):(logInfo(t),this.showErrorToast("No Scanner found"))}))},doScan(){return T(this,void 0,void 0,(function*(){let e=this.valid_url+"scan?host="+this.new_scan["source"]["value"];1==this.new_scan["automatic_get"]?e+="&source=adf":e+="&source=platen",""!=this.new_scan["pixel_type"]["value"]&&(e=e+"&color="+this.new_scan["pixel_type"]["value"]),""!=this.new_scan["2_sided"]&&(e=e+"&duplex_input="+this.new_scan["2_sided"]),this.showLoading();yield A.A.get(e,{responseType:"blob"}).then((e=>{const t=e.headers["content-type"];new Blob([e.data,"test.pdf",t]);this.file=URL.createObjectURL(e.data),this.new_scan["automatic_get"]&&(this.showSplitButton=!0),this.showDragDrop=!1,this.documentScanned=!0,this.filedata=e.data})).catch((e=>logInfo(e)));this.hideLoading()}))},getRef(){let e=this.$refs["pager"].pageCount;return e},formateDate(e,t){return V.Ay.formatDate(e,t)},allowDrop(e){e.preventDefault(),e.currentTarget.classList.add("bg-grey-5"),e.currentTarget.classList.add("bd-shadow")},drop(e){e.preventDefault(),e.currentTarget.classList.remove("bg-grey-5"),e.currentTarget.classList.remove("bd-shadow"),logInfo(e.dataTransfer.files),this.uploadFiles(e.dataTransfer.files)},dragLeave(e){e.currentTarget.classList.remove("bg-grey-5"),e.currentTarget.classList.remove("bd-shadow")},uploadFiles(e){return T(this,void 0,void 0,(function*(){if("alfred"==this.service){this.showLoading(),logInfo(e);for(const l in e)try{let a=new FormData;var t=e[l];logInfo(t),a.append("file",t),yield S.QR.create_doc(a)}catch(a){logInfo(a)}this.hideLoading(),this.$router.push("/alfred/dashboard")}else if("docapp"==this.service){this.showLoading(),logInfo(e);for(const l in e)try{let a=new FormData;t=e[l];logInfo(t),a.append("files",t),yield R.z6.uploadFiles(a)}catch(a){logInfo(a)}this.hideLoading(),this.$router.push("/dashboard")}}))},uploadSingleFile(e){return T(this,void 0,void 0,(function*(){if("alfred"==this.service){this.showLoading();try{let a=new FormData;var t=e;""!==this.new_scan["name"]?a.append("file",t,this.new_scan["name"]):a.append("file",t,"New Scan"),yield S.QR.create_doc(a)}catch(a){logInfo(a)}this.hideLoading(),this.$router.push("/alfred/dashboard")}else if("docapp"==this.service){this.showLoading();try{let t=new FormData;this.new_scan["name"]?t.append("files",e,this.new_scan["name"]+".pdf"):t.append("files",e,"Scan.pdf"),logInfo(e),yield R.z6.uploadFiles(t)}catch(a){logInfo(a)}this.hideLoading(),this.$router.push("/dashboard")}}))}},setup(){const e=[{value:"300",label:"300"},{value:"600",label:"600"},{value:"1200",label:"1200"}];return{showDragDrop:(0,D.KR)(!0),showDownloadInstallerButton:(0,D.KR)(!1),showDownloadInstaller:(0,D.KR)(!1),pageCount:(0,D.KR)(1),file:(0,D.KR)(),filedata:(0,D.KR)(),filter:(0,D.KR)(""),view:(0,D.KR)("list"),multiUploaderDialog:(0,D.KR)(!1),uploadedFiles:(0,D.KR)(null),image:(0,D.KR)(),new_scan:(0,D.KR)({}),scanners:(0,D.KR)([]),show_popup:(0,D.KR)(!1),resolutions:(0,D.KR)(e),importing:(0,D.KR)(!1),showSplitButton:(0,D.KR)(!1),showMenu:(0,D.KR)(!1),showIcons:(0,D.KR)(!0),documentScanned:(0,D.KR)(!1),ports:(0,D.KR)(["12500","12154","12346"]),valid_url:(0,D.KR)(),scan_card_height:(0,D.KR)()}}});var U=a(12807),B=a(82156),E=a(23316),N=a(44189),X=a(15046),M=a(99980),W=a(10386),j=a(36914),z=a(39150),O=a(67837),P=a(94940),G=a(56384),H=a(97410),J=a(90124),Y=a(25173),Z=a(80460),ee=a(62669),te=a(98582),ae=a.n(te);const le=(0,U.A)(q,[["render",k],["__scopeId","data-v-7b57f5aa"]]),oe=le;ae()(q,"components",{QDialog:B.A,QCard:E.A,QCardSection:N.A,QImg:X.A,QFile:M.A,QSeparator:W.A,QToolbar:j.A,QToolbarTitle:z.A,QInput:O.A,QSelect:P.A,QBtn:G.A,QTooltip:H.A,QItem:J.A,QItemSection:Y.A,QCheckbox:Z.A,QCardActions:ee.A});const ne=(0,l.pM)({data(){return{}},components:{Scanner:oe},setup(){return{alfred:"alfred"}}}),se=(0,U.A)(ne,[["render",o]]),ie=se}}]);