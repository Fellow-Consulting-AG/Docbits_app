"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[4055],{4055:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J});var c=a(61758);const n={class:"container page-height-limit"},i={style:{width:"100%"}};function o(e,t,a,o,s,d){const l=(0,c.g2)("SubHeader"),h=(0,c.g2)("BackToSettings"),r=(0,c.g2)("ReceivedCache");return(0,c.uX)(),(0,c.CE)(c.FK,null,[(0,c.bF)(l,{name:"cache_management",label:e.$t("cache_management")},null,8,["label"]),(0,c.bF)(h),(0,c.Lk)("div",n,[(0,c.Lk)("div",i,[(0,c.bF)(r)])])],64)}var s=a(95488),d=a(60894),l=a(58790);const h={class:"grid-main"},r={class:"full-width"},u={class:"table-header-text"},_={style:{width:"300px"}},p={style:{width:"300px"}},g={class:"q-mt-md"};function v(e,t,a,n,i,o){const s=(0,c.g2)("q-toggle"),d=(0,c.g2)("q-tooltip"),v=(0,c.g2)("q-input"),f=(0,c.g2)("PurchaseOrderCach"),b=(0,c.g2)("TaskAndNotificationCache"),k=(0,c.g2)("q-markup-table"),m=(0,c.g2)("f-btn"),y=(0,c.g2)("Loader");return(0,c.uX)(),(0,c.CE)(c.FK,null,[(0,c.Lk)("div",h,[(0,c.Lk)("div",r,[(0,c.bF)(k,{flat:"",class:"dashboard-table-style dashboard-table-height back-white"},{default:(0,c.k6)((()=>{var a,n;return[(0,c.Lk)("thead",null,[(0,c.Lk)("tr",u,[(0,c.Lk)("th",null,(0,l.v_)(e.$t("object")),1),(0,c.Lk)("th",null,(0,l.v_)(e.$t("status")),1),(0,c.Lk)("th",_,(0,l.v_)(e.$t("ttl")),1)])]),(0,c.Lk)("tbody",null,[(0,c.Lk)("tr",null,[(0,c.Lk)("td",null,(0,l.v_)(e.$t("receive_delivery_cache")),1),(0,c.Lk)("td",null,[(0,c.bF)(s,{"model-value":(null===(a=e.cache_data[e.get_receive_delivery_cache])||void 0===a?void 0:a.enabled)||!1,"onUpdate:modelValue":t[0]||(t[0]=t=>e.updateEnable(t))},null,8,["model-value"])]),(0,c.Lk)("td",null,[(0,c.Lk)("div",p,[(0,c.bF)(v,{outlined:"",dense:"",tabindex:"0",debounce:"500",type:"number",class:(0,l.C4)("full-width"),"model-value":(null===(n=e.cache_data[e.get_receive_delivery_cache])||void 0===n?void 0:n.ttl)||0,"onUpdate:modelValue":t[1]||(t[1]=t=>e.updateTtl(t)),"hide-bottom-space":"","bottom-slots":!1,style:{padding:"5px 0px"}},{default:(0,c.k6)((()=>[(0,c.bF)(d,null,{default:(0,c.k6)((()=>[(0,c.eW)((0,l.v_)(e.$t("ttl_tooltip")),1)])),_:1})])),_:1},8,["model-value"])])])]),(0,c.Lk)("tr",null,[(0,c.bF)(f)]),(0,c.Lk)("tr",null,[(0,c.bF)(b)])])]})),_:1}),(0,c.Lk)("div",g,[(0,c.bF)(m,{label:e.$t("clear_cache"),onClick:e.clearCache,loading:e.loading},null,8,["label","onClick","loading"])])])]),(0,c.bF)(y)],64)}var f=a(38734),b=a(1659),k=a(94124),m=a(76956),y=a(24622),C=a(18505),w=a(64775),L=a(8420);const T={style:{width:"300px"}};function A(e,t,a,n,i,o){var s,d;const h=(0,c.g2)("q-toggle"),r=(0,c.g2)("q-tooltip"),u=(0,c.g2)("q-input");return(0,c.uX)(),(0,c.CE)(c.FK,null,[(0,c.Lk)("td",null,(0,l.v_)(e.$t("purchase_order_cache")),1),(0,c.Lk)("td",null,[(0,c.bF)(h,{"model-value":(null===(s=e.cache_data[e.get_purchase_order_cache])||void 0===s?void 0:s.enabled)||!1,"onUpdate:modelValue":t[0]||(t[0]=t=>e.updateEnable(t))},null,8,["model-value"])]),(0,c.Lk)("td",null,[(0,c.Lk)("div",T,[(0,c.bF)(u,{outlined:"",dense:"",tabindex:"0",debounce:"500",type:"number",class:(0,l.C4)("full-width"),"model-value":(null===(d=e.cache_data[e.get_purchase_order_cache])||void 0===d?void 0:d.ttl)||0,"onUpdate:modelValue":t[1]||(t[1]=t=>e.updateTtl(t)),"hide-bottom-space":"","bottom-slots":!1,style:{padding:"5px 0px"}},{default:(0,c.k6)((()=>[(0,c.bF)(r,null,{default:(0,c.k6)((()=>[(0,c.eW)((0,l.v_)(e.$t("ttl_tooltip")),1)])),_:1})])),_:1},8,["model-value"])])])],64)}var P=a(11470),x=function(e,t,a,c){function n(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,i){function o(e){try{d(c.next(e))}catch(t){i(t)}}function s(e){try{d(c["throw"](e))}catch(t){i(t)}}function d(e){e.done?a(e.value):n(e.value).then(o,s)}d((c=c.apply(e,t||[])).next())}))};const F=(0,c.pM)({components:{},el:"#app",mixins:[y.A,C.A],watch:{},data(){return{get_purchase_order_cache:m.vp.get_purchase_order_cache}},setup(){const e=(0,k.Bu)(),{loading_settings:t,cache_data:a}=(0,b.bP)(e),{getCachePreferences:c}=e;return{cache_data:a,loading_settings:t,getCachePreferences:c}},methods:{updateEnable(e){return x(this,void 0,void 0,(function*(){this.cache_data[this.get_purchase_order_cache].enabled=e,yield this.updateCache()}))},updateTtl(e){return x(this,void 0,void 0,(function*(){this.cache_data[this.get_purchase_order_cache].ttl=e,yield this.updateCache()}))},updateCache(){return x(this,void 0,void 0,(function*(){const e=this.cache_data[this.get_purchase_order_cache].enabled,t=this.cache_data[this.get_purchase_order_cache].ttl;try{const a={key:this.get_purchase_order_cache,cache_name:"PO",enable:e,ttl:t||0},c=yield P.jD.setCachePreference(a);if(yield this.getCachePreferences(this.get_purchase_order_cache),!1===c.success)throw c;this.showSuccessToast(this.$t("cache_preference_updated"))}catch(a){this.showErrorToast(this.$t("failed_update_cache_preferences"))}finally{this.loading_settings=!1}}))}}});var $=a(12807),E=a(66908),q=a(67837),Q=a(97410),S=a(98582),I=a.n(S);const M=(0,$.A)(F,[["render",A],["__scopeId","data-v-7181507e"]]),U=M;I()(F,"components",{QToggle:E.A,QInput:q.A,QTooltip:Q.A});const V={style:{width:"300px"}};function B(e,t,a,n,i,o){var s,d;const h=(0,c.g2)("q-toggle"),r=(0,c.g2)("q-tooltip"),u=(0,c.g2)("q-input");return(0,c.uX)(),(0,c.CE)(c.FK,null,[(0,c.Lk)("td",null,(0,l.v_)(e.$t("task_and_notification_cache")),1),(0,c.Lk)("td",null,[(0,c.bF)(h,{"model-value":(null===(s=e.cache_data[e.get_task_and_notification_cache])||void 0===s?void 0:s.enabled)||!1,"onUpdate:modelValue":t[0]||(t[0]=t=>e.updateEnable(t))},null,8,["model-value"])]),(0,c.Lk)("td",null,[(0,c.Lk)("div",V,[(0,c.bF)(u,{outlined:"",dense:"",tabindex:"0",debounce:"500",type:"number",class:(0,l.C4)("full-width"),"model-value":(null===(d=e.cache_data[e.get_task_and_notification_cache])||void 0===d?void 0:d.ttl)||0,"onUpdate:modelValue":t[1]||(t[1]=t=>e.updateTtl(t)),"hide-bottom-space":"","bottom-slots":!1,style:{padding:"5px 0px"}},{default:(0,c.k6)((()=>[(0,c.bF)(r,null,{default:(0,c.k6)((()=>[(0,c.eW)((0,l.v_)(e.$t("ttl_tooltip")),1)])),_:1})])),_:1},8,["model-value"])])])],64)}var K=function(e,t,a,c){function n(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,i){function o(e){try{d(c.next(e))}catch(t){i(t)}}function s(e){try{d(c["throw"](e))}catch(t){i(t)}}function d(e){e.done?a(e.value):n(e.value).then(o,s)}d((c=c.apply(e,t||[])).next())}))};const X=(0,c.pM)({components:{},el:"#app",mixins:[y.A,C.A],watch:{},data(){return{get_task_and_notification_cache:m.vp.get_task_and_notification_cache}},setup(){const e=(0,k.Bu)(),{loading_settings:t,cache_data:a}=(0,b.bP)(e),{getCachePreferences:c}=e;return{cache_data:a,loading_settings:t,getCachePreferences:c}},methods:{updateEnable(e){return K(this,void 0,void 0,(function*(){this.cache_data[this.get_task_and_notification_cache].enabled=e,yield this.updateCache()}))},updateTtl(e){return K(this,void 0,void 0,(function*(){this.cache_data[this.get_task_and_notification_cache].ttl=e,yield this.updateCache()}))},updateCache(){return K(this,void 0,void 0,(function*(){const e=this.cache_data[this.get_task_and_notification_cache].enabled,t=this.cache_data[this.get_task_and_notification_cache].ttl;try{const a={key:this.get_task_and_notification_cache,cache_name:"TN",enable:e,ttl:t||0},c=yield P.jD.setCachePreference(a);if(!1===c.success)throw c;yield this.getCachePreferences(this.get_task_and_notification_cache),this.showSuccessToast(this.$t("cache_preference_updated"))}catch(a){this.showErrorToast(this.$t("failed_update_cache_preferences"))}finally{this.loading_settings=!1}}))}}}),j=(0,$.A)(X,[["render",B],["__scopeId","data-v-7a972e36"]]),N=j;I()(X,"components",{QToggle:E.A,QInput:q.A,QTooltip:Q.A});var O=function(e,t,a,c){function n(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,i){function o(e){try{d(c.next(e))}catch(t){i(t)}}function s(e){try{d(c["throw"](e))}catch(t){i(t)}}function d(e){e.done?a(e.value):n(e.value).then(o,s)}d((c=c.apply(e,t||[])).next())}))};const R=(0,c.pM)({components:{Loader:L.A,PurchaseOrderCach:U,TaskAndNotificationCache:N},el:"#app",mixins:[y.A,C.A],watch:{loading_settings:{handler:function(e,t){}},loading:{handler(e){1==e?this.showLoading():this.hideLoading()}}},data(){return{get_receive_delivery_cache:m.vp.get_receive_delivery_cache,get_purchase_order_cache:m.vp.get_purchase_order_cache,get_task_and_notification_cache:m.vp.get_task_and_notification_cache}},mounted(){this.init()},setup(){const e=(0,k.Bu)(),{user_settings:t,loading_settings:a,cache_data:c}=(0,b.bP)(e),{setCachePreferences:n,getCachePreferences:i,deleteCache:o}=e;return{user_settings:t,cache_data:c,loading_settings:a,setCachePreferences:n,getCachePreferences:i,deleteCache:o,loading:(0,f.KR)(!1)}},methods:{clearCache(){return O(this,void 0,void 0,(function*(){this.loading=!0;try{const e=yield this.deleteCache();if(!e.success)throw{message:e.message};this.showSuccessToast(this.$t("cache_cleared_successfully"))}catch(e){const t=w.t.getErrorMessage(e);this.showErrorToast(t)}finally{this.loading=!1}}))},init(){return O(this,void 0,void 0,(function*(){this.loading=!0;try{yield this.getCachePreferences(this.get_receive_delivery_cache),yield this.getCachePreferences(this.get_purchase_order_cache),yield this.getCachePreferences(this.get_task_and_notification_cache)}catch(e){this.showErrorToast(this.$t("failed_to_get_cache_preferences"))}finally{this.loading=!1}}))},updateEnable(e){return O(this,void 0,void 0,(function*(){this.cache_data[this.get_receive_delivery_cache].enabled=e,yield this.updateCache()}))},updateTtl(e){return O(this,void 0,void 0,(function*(){this.cache_data[this.get_receive_delivery_cache].ttl=e,yield this.updateCache()}))},updateCache(){return O(this,void 0,void 0,(function*(){const e=this.cache_data[this.get_receive_delivery_cache].enabled,t=this.cache_data[this.get_receive_delivery_cache].ttl;yield this.setCachePreferences(e,t).then((()=>{this.showSuccessToast(this.$t("cache_preference_updated"))})).catch((()=>{this.showErrorToast(this.$t("failed_update_cache_preferences"))})).finally((()=>{this.loading=!1}))}))}}});var W=a(857);const D=(0,$.A)(R,[["render",v],["__scopeId","data-v-7d7ffe0a"]]),H=D;I()(R,"components",{QMarkupTable:W.A,QToggle:E.A,QInput:q.A,QTooltip:Q.A});const z=(0,c.pM)({el:"#app",components:{SubHeader:s.A,BackToSettings:d.A,ReceivedCache:H},mounted(){},setup(){return{}}}),G=(0,$.A)(z,[["render",o]]),J=G}}]);