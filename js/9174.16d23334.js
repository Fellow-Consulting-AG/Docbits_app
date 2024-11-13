"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[9174],{9174:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var s=r(61758),o=r(34379),l=r(38734);const a={nodes:[{id:"fellow",shape:{type:"circle",scale:2},payload:{title:"Fellow Consulting",color:"blue",tags:["Main"]},anchor:{type:"hard",x:300,y:100}},{id:"ihk",shape:{type:"circle",scale:2},payload:{title:"IHK",color:"blue"},spawn:{source:"fellow",distance:40}},{id:"bau_finanzierung",shape:{type:"circle",scale:2},payload:{title:"Bau Finanzierung",color:"pink"},spawn:{source:"fellow",distance:400}},{id:"gewerbe",shape:{type:"circle",scale:2},payload:{title:"Gewerbe",color:"red"},spawn:{source:"fellow",distance:400}},{id:"verträge",shape:{type:"circle",scale:2},payload:{title:"Verträge",color:"darkred"},spawn:{source:"fellow",distance:400}},{id:"ines",shape:{type:"circle",scale:1},payload:{title:"Ines Brandao",color:"gray"},spawn:{source:"fellow",distance:400}},{id:"martina",shape:{type:"circle",scale:1},payload:{title:"Martina Siegmann",color:"gray"},spawn:{source:"fellow",distance:400}},{id:"martin",shape:{type:"circle",scale:1},payload:{title:"Martin Müller",color:"gray"},spawn:{source:"fellow",distance:400}},{id:"werner",shape:{type:"circle",scale:1},payload:{title:"Werner Huber",color:"gray"},spawn:{source:"fellow",distance:400}},{id:"mitarbeiter",shape:{type:"circle",scale:2},payload:{title:"Mitarbeiter",color:"green"},spawn:{source:"fellow",distance:400}},{id:"hk",shape:{type:"circle",scale:2},payload:{title:"HK",color:"blue"},spawn:{source:"fellow",distance:40}},{id:"ik",shape:{type:"circle",scale:2},payload:{title:"IK",color:"blue"},spawn:{source:"fellow",distance:40}},{id:"ih",shape:{type:"circle",scale:2},payload:{title:"IH",color:"blue"},spawn:{source:"fellow",distance:40}}],links:[{source:"fellow",target:"ihk",type:"solid",strength:"strong"},{source:"bau_finanzierung",target:"ihk",type:"solid",strength:"strong"},{source:"bau_finanzierung",target:"fellow",type:"solid",strength:"strong"},{source:"fellow",target:"verträge",type:"solid",strength:"strong"},{source:"verträge",target:"ines",type:"solid",strength:"strong"},{source:"verträge",target:"martina",type:"solid",strength:"strong"},{source:"verträge",target:"martin",type:"solid",strength:"strong"},{source:"verträge",target:"werner",type:"solid",strength:"strong"},{source:"fellow",target:"gewerbe",type:"solid",strength:"strong"},{source:"mitarbeiter",target:"ines",type:"solid",strength:"strong"},{source:"mitarbeiter",target:"martina",type:"solid",strength:"strong"},{source:"mitarbeiter",target:"martin",type:"solid",strength:"strong"},{source:"mitarbeiter",target:"werner",type:"solid",strength:"strong"},{source:"hk",target:"fellow",type:"solid",strength:"strong"},{source:"hk",target:"verträge",type:"solid",strength:"strong"},{source:"ik",target:"gewerbe",type:"solid",strength:"strong"},{source:"ik",target:"mitarbeiter",type:"solid",strength:"strong"},{source:"gewerbe",target:"verträge",type:"solid",strength:"strong"},{source:"ih",target:"gewerbe",type:"solid",strength:"strong"},{source:"ih",target:"bau_finanzierung",type:"solid",strength:"strong"}]},i={type:"object",properties:{title:{type:"string"},color:{type:"string"},tags:{type:"array",items:{type:"string"}}},required:["title","color"]},n={shapeSize:120,shapePayload:i,shapeBuilder:c};function c(e,t){const{ShapeStyle:r,SVGShape:s,TextCollection:o,CollectionStyle:l}=t,a=t.Shape.Circle(150);a.style("fill",e.payload?.color??"#9575cd");const i=o(e.payload?.title??"",l(200,240,30,100,10,10,3),[r("class","gly_text.light"),r("font-size","3em"),r("color","red")]);return a.append((()=>i.node())),a}const g={class:"graphlyContainer"},p=(0,s.Lk)("span",null,"Show Nodes",-1),d={style:{width:"24px",height:"24px"},viewBox:"0 0 24 24"},u=(0,s.Lk)("path",{fill:"currentColor",d:"M19,3H15V5H19V9H21V5C21,3.89 20.1,3 19,3M19,19H15V21H19A2,2 0 0,0 21,19V15H19M5,15H3V19A2,2 0 0,0 5,21H9V19H5M3,5V9H5V5H9V3H5A2,2 0 0,0 3,5Z"},null,-1),h=[u],y=(0,s.pM)({__name:"knowledge_graph",props:{graph:{type:Object,default:()=>a,validator(e){return e.nodes&&e.links}}},setup(e){let t=(0,l.KR)({}),r=(0,l.KR)({});const a=e;return(0,s.sV)((()=>{const e=new o.Tk(t.value);function s(){e.moveTo({nodes:a.graph.nodes,padding:100})}e.templateStore.add("circle",n),e.zoomScaleExtent=[.5,3],e.draggableNodes=!1,e.render(a.graph),r.value.addEventListener("click",s),e.on(o.Jh.EnvironmentDoubleClick,((e,t)=>{s()})),setTimeout(s,1e3)})),(e,o)=>{const l=(0,s.g2)("BackToDashboard");return(0,s.uX)(),(0,s.CE)("body",null,[(0,s.Lk)("div",g,[((0,s.uX)(),(0,s.CE)("svg",{ref_key:"graphlyElement",ref:t,class:"graphly",width:"100%",height:"100%"},null,512)),(0,s.Lk)("button",{ref_key:"graphlyMoveTo",ref:r,class:"graphlyMoveTo"},[p,((0,s.uX)(),(0,s.CE)("svg",d,h))],512)]),(0,s.bF)(l,{class:"backToDashboard",flat:"",rounded:""})])}}}),w=y,b=w}}]);