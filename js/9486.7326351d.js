"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[9486],{79486:(e,t,i)=>{i.r(t),i.d(t,{default:()=>V});var n=i(83673),o=i(62323),s=i(98880);const r={id:"app"},l=(0,n._)("h1",null,"Vue Prism Editor - v1",-1),u=(0,n.Uk)(" Linenumbers "),c=(0,n._)("h1",null,"Autosize",-1),h=(0,n._)("p",null,[(0,n.Uk)(" don't use "),(0,n._)("b",null,"min-height"),(0,n.Uk)(" or "),(0,n._)("b",null,"height"),(0,n.Uk)(" you could still define "),(0,n._)("b",null,"max-height")],-1),d=(0,n._)("div",{style:{"margin-top":"25px","font-size":"25px"}},[(0,n.Uk)(" Documantation on "),(0,n._)("a",{target:"_blank",href:"https://github.com/koca/vue-prism-editor"},"Github")],-1);function p(e,t,i,p,a,g){const _=(0,n.up)("prism-editor");return(0,n.wg)(),(0,n.iD)("div",r,[l,(0,n._)("pre",null,(0,o.zw)(e.code),1),(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=t=>e.lineNumbers=t)},null,512),[[s.e8,e.lineNumbers]]),u,(0,n.Wm)(_,{class:"my-editor height-300",modelValue:e.code,"onUpdate:modelValue":t[1]||(t[1]=t=>e.code=t),highlight:e.highlighter,"line-numbers":e.lineNumbers},null,8,["modelValue","highlight","line-numbers"]),c,h,(0,n.Wm)(_,{class:"my-editor",modelValue:e.code,"onUpdate:modelValue":t[2]||(t[2]=t=>e.code=t),highlight:e.highlighter},null,8,["modelValue","highlight"]),d])}var a=i(61959),g=i(60727),_=i(10321),m=i(77378),y=i(9273),f=i(21221),v=i(60407),w=(i(3106),i(68561),function(e,t,i,n){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,s){function r(e){try{u(n.next(e))}catch(t){s(t)}}function l(e){try{u(n["throw"](e))}catch(t){s(t)}}function u(e){e.done?i(e.value):o(e.value).then(r,l)}u((n=n.apply(e,t||[])).next())}))});const b=(0,n.aZ)({el:"#app",mixins:[m.Z],props:{},components:{PrismEditor:f.h},watch:{selected_doc_type:{handler:function(e,t){this.initView()}}},data(){return{code:"\n# This is an Example Code\ndef median(pool):\n    copy = sorted(pool)\n    size = len(copy)\n    if size % 2 == 1:\n        return copy[(size - 1) / 2]\n    else:\n        return (copy[size/2 - 1] + copy[size/2]) / 2\nif __name__ == '__main__':\n    import doctest\n    doctest.testmod()\n      ",lineNumbers:!0}},mounted:function(){this.initView()},methods:{highlighter(e){return(0,v.highlight)(e,v.languages.py,"py")},initView(){return w(this,void 0,void 0,(function*(){try{if(this.selected_doc_type=String(this.$route.query.type),!this.selected_doc_type)return;this.setEmptyModel(),this.processing=!0,yield this.getScript()}catch(e){const t=y.w.getErrorMessage(e);this.showErrorToast(t)}finally{this.processing=!1}}))},saveRecord(){return w(this,void 0,void 0,(function*(){try{this.processing=!0,yield this.saveCurrentModel(),this.showSuccessToast(this.$t("pages.messages.MSG_SAVE")),this.open_editor=!1}catch(e){const t=y.w.getErrorMessage(e);this.showErrorToast(t)}finally{this.processing=!1}}))}},setup(){const e=(0,g.Eu)(),{getScript:t,saveCurrentModel:i,setEmptyModel:n}=e,{current_model:o,open_editor:s,selected_doc_type:r,display_output_view:l,script_output:u,processing:c}=(0,_.Jk)(e);return{script_output:u,display_output_view:l,selected_doc_type:r,saveCurrentModel:i,getScript:t,setEmptyModel:n,open_editor:s,current_model:o,processing:c,CalHeight:(0,a.iH)("600")}}});var k=i(74260);const E=(0,k.Z)(b,[["render",p]]),V=E}}]);