"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[4999],{34999:(t,n,e)=>{e.r(n),e.d(n,{default:()=>_});var o=e(83673);function c(t,n,e,c,u,i){const l=(0,o.up)("example-component"),a=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(a,{class:"row items-center justify-evenly"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{title:"Example component",active:"",todos:t.todos,meta:t.meta},null,8,["todos","meta"])])),_:1})}var u=e(62323);function i(t,n,e,c,i,l){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("p",null,(0,u.zw)(t.title),1),(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.todos,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.id,onClick:n[0]||(n[0]=(...n)=>t.increment&&t.increment(...n))},(0,u.zw)(e.id)+" - "+(0,u.zw)(e.content),1)))),128))]),(0,o._)("p",null,"Count: "+(0,u.zw)(t.todoCount)+" / "+(0,u.zw)(t.meta.totalCount),1),(0,o._)("p",null,"Active: "+(0,u.zw)(t.active?"yes":"no"),1),(0,o._)("p",null,"Clicks on todos: "+(0,u.zw)(t.clickCount),1)])}var l=e(61959);function a(){const t=(0,l.iH)(0);function n(){return t.value+=1,t.value}return{clickCount:t,increment:n}}function r(t){const n=(0,o.Fl)((()=>t.value.length));return{todoCount:n}}const s=(0,o.aZ)({name:"CompositionComponent",props:{title:{type:String,required:!0},todos:{type:Array,default:()=>[]},meta:{type:Object,required:!0},active:{type:Boolean}},setup(t){return Object.assign(Object.assign({},a()),r((0,l.Vh)(t,"todos")))}});var p=e(74260);const d=(0,p.Z)(s,[["render",i]]),m=d,v=(0,o.aZ)({name:"PageIndex",components:{ExampleComponent:m},setup(){const t=(0,l.iH)([{id:1,content:"ct1"},{id:2,content:"ct2"},{id:3,content:"ct3"},{id:4,content:"ct4"},{id:5,content:"ct5"}]),n=(0,l.iH)({totalCount:1200});return{todos:t,meta:n}}});var w=e(24379),C=e(7518),g=e.n(C);const f=(0,p.Z)(v,[["render",c]]),_=f;g()(v,"components",{QPage:w.Z})}}]);