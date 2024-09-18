"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[4907],{84907:(e,t,o)=>{o.r(t),o.d(t,{default:()=>T});var l=o(61758);const s={class:"row"},a={class:"col-3",style:{"margin-left":"20px","margin-top":"10px"}},d={style:{"margin-left":"10px"}},r={class:"col-8",style:{padding:"20px","margin-left":"20px"}};function n(e,t,o,n,i,c){const p=(0,l.g2)("FolderView"),u=(0,l.g2)("DefaultBtn"),h=(0,l.g2)("SaveBtn"),f=(0,l.g2)("q-tree"),F=(0,l.g2)("q-card-section"),m=(0,l.g2)("q-card");return(0,l.uX)(),(0,l.CE)("div",s,[(0,l.Lk)("div",a,[(0,l.bF)(p,{mode:"fileview"}),(0,l.Lk)("div",d,[(0,l.bF)(u,{label:e.$t("doc2light.pages.download"),onClick:t[0]||(t[0]=t=>e.downloadFile()),style:{"margin-right":"10px"}},null,8,["label"]),(0,l.bF)(h,{label:e.$t("alfred.importSpaceFileToAlfred"),onClick:t[1]||(t[1]=t=>e.importFile())},null,8,["label"])])]),(0,l.Lk)("div",r,[(0,l.bF)(m,{bordered:"",flat:"",class:"dark-back"},{default:(0,l.k6)((()=>[(0,l.bF)(F,{style:{height:"70vh","overflow-y":"auto"},class:"text-center"},{default:(0,l.k6)((()=>["dropbox"==e.apidata.getStoreType?((0,l.uX)(),(0,l.Wv)(f,{key:0,class:"",nodes:e.apidata.getCurrentFolderFiles,"node-key":"path","no-connectors":"",icon:"folder","selected-color":"primary",selected:e.selected,"onUpdate:selected":t[2]||(t[2]=t=>e.selected=t)},null,8,["nodes","selected"])):((0,l.uX)(),(0,l.Wv)(f,{key:1,class:"",nodes:e.apidata.getCurrentFolderFiles,"node-key":"id","selected-color":"primary","no-connectors":"",selected:e.selected,"onUpdate:selected":t[3]||(t[3]=t=>e.selected=t)},null,8,["nodes","selected"]))])),_:1})])),_:1})])])}var i=o(24622),c=o(38734),p=o(18505),u=o(3871),h=o(98872),f=o(1659),F=o(31123),m=o(5255),g=function(e,t,o,l){function s(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,a){function d(e){try{n(l.next(e))}catch(t){a(t)}}function r(e){try{n(l["throw"](e))}catch(t){a(t)}}function n(e){e.done?o(e.value):s(e.value).then(d,r)}n((l=l.apply(e,t||[])).next())}))};const y=(0,l.pM)({data(){return{}},mixins:[p.A,i.A],components:{FolderView:u.A,DefaultBtn:F.A,SaveBtn:m.A},methods:{importFile(){return g(this,void 0,void 0,(function*(){if(""!=this.selected){const e=this.getFileById(this.selected);yield this.importSpaceFileToAlfred(e,this.selected_store_id).then((()=>{this.showSuccessToast("Import was successful")})).catch((()=>{this.showErrorToast("Import failed, please try again.")}))}else this.showErrorToast("Please select a File to Import")}))},downloadFile(){return g(this,void 0,void 0,(function*(){if(""!=this.selected){const e=this.getFileById(this.selected);yield this.downloadFileFromSpace(e,this.selected_store_id).then((t=>{var o=document.createElement("a");o.download=e.label,o.href=t,document.body.appendChild(o),o.click(),document.body.removeChild(o)})).catch((()=>{this.showErrorToast("Download failed, please try again4")}))}else this.showErrorToast("Please select a File to Import")}))},setCurrentFolder(e){this.setFolder(e)}},setup(){const e=(0,h.C)(),t=(0,f.bP)(e),{setFolder:o,loadStoreContent:l,importSpaceFileToAlfred:s,getFileById:a,downloadFileFromSpace:d}=e,r=(0,c.KR)("");return{apidata:(0,c.KR)(t),selected:r,downloadFileFromSpace:d,getFileById:a,importSpaceFileToAlfred:s,setFolder:o,loadStoreContent:l}}});var v=o(12807),w=o(23316),b=o(44189),k=o(52220),C=o(98582),S=o.n(C);const A=(0,v.A)(y,[["render",n],["__scopeId","data-v-8a8fcb50"]]),T=A;S()(y,"components",{QCard:w.A,QCardSection:b.A,QTree:k.A})}}]);