"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[2007],{12007:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Re});var i=s(83673),r=s(62323),a=s(98880);const o=e=>((0,i.dD)("data-v-e6fc4580"),e=e(),(0,i.Cn)(),e),l={class:"page-holder"},n={class:"container login"},d={key:0,class:"row",style:{height:"100vh","min-height":"780px","overflow-y":"auto"}},c={class:"upper-section"},u={class:"text-primary text-heading text-weight-bold"},m=o((()=>(0,i._)("br",null,null,-1))),p={class:"q-pt-xl text-muted text-sm"},h=o((()=>(0,i._)("div",{class:"col-2"},null,-1))),_={class:"col-8",id:"email"},g={class:"col-sm-12 col-md-12 col-lg-12 text-red-5 height-20 q-pl-md"},w={class:"col-8",id:"password"},b={class:"col-sm-12 col-md-12 col-lg-12 text-red-5 height-20 q-pl-md"},f={class:"text-center"},v={class:"text-center"},y={class:"absolute-bottom"},x={class:"mainLine"},S=o((()=>(0,i._)("div",{class:"signupLines"},null,-1))),k={class:"q-px-sm text-primary"},C=o((()=>(0,i._)("div",{class:"signupLines"},null,-1))),q={class:"row justify-center"},L={class:"btnG"},D=o((()=>(0,i._)("br",null,null,-1))),T={class:"btnM"},E=o((()=>(0,i._)("br",null,null,-1))),$={class:"btnL"},A={style:{"border-top":"1px solid lightgrey"}},W={class:"text-sm text-muted q-pt-md"},Z=(0,i.Uk)(". "),I=o((()=>(0,i._)("div",{class:"col-2 text-center"},null,-1))),V={class:"col-4 text-center"},H={style:{top:"20%",bottom:"50%",position:"relative"}},U=o((()=>(0,i._)("img",{class:"vertical-middle",height:"300",width:"300",src:"fellowpro_white.png",alt:""},null,-1))),P={class:"mb-14 text-white"},M=o((()=>(0,i._)("br",{class:"d-none d-lg-inline"},null,-1))),O={href:"https://en.docs.fellowpro.com/docbits/settings-users/#adding-a-user",class:"text-primary"},R={class:"row",style:{"flex-direction":"column",width:"100%"}},z={key:0,class:"row",style:{width:"100%",display:"flex","flex-direction":"column","align-items":"flex-start"}},F=o((()=>(0,i._)("img",{class:"loader",src:"loader.gif",alt:"Loading..."},null,-1)));function Q(e,t,s,o,Q,N){const K=(0,i.up)("q-img"),B=(0,i.up)("q-select"),j=(0,i.up)("q-card-section"),G=(0,i.up)("q-input"),Y=(0,i.up)("q-icon"),X=(0,i.up)("q-btn"),J=(0,i.up)("PasswordDisableCounter"),ee=(0,i.up)("GoogleLogin"),te=(0,i.up)("MicrosoftLogin"),se=(0,i.up)("LinkedinLogin"),ie=(0,i.up)("q-card"),re=(0,i.up)("ResendVerifyEmail"),ae=(0,i.up)("q-card-actions"),oe=(0,i.up)("q-dialog"),le=(0,i.up)("q-inner-loading");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",l,[(0,i._)("div",n,[e.userlogin?((0,i.wg)(),(0,i.iD)("div",d,[(0,i.Wm)(ie,{class:"col-5"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{class:"absolute-top"},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{src:"docbits.svg",style:{"max-width":"120px"}}),(0,i.Wm)(B,{modelValue:e.locale,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.locale=t),e.languageChanged],options:e.localeOptions,dense:"",borderless:"","emit-value":"","map-options":"","options-dense":"",class:"float-right q-ml-auto text-grey-7 text-uppercase q-mr-md"},null,8,["modelValue","options","onUpdate:modelValue"])])),_:1}),(0,i._)("div",c,[(0,i.Wm)(j,{class:"text-center"},{default:(0,i.w5)((()=>[(0,i._)("span",u,(0,r.zw)(e.$t("pages.login.welcome_to")),1),m,(0,i.Wm)(K,{src:"docbits.svg",class:"q-mt-md",style:{"max-width":"235px"}}),(0,i._)("p",p,[(0,i.Uk)((0,r.zw)(e.$t("pages.login.login_sub_header"))+" ",1),(0,i._)("a",{class:"text-primary cursor-pointer",style:{"text-decoration":"underline"},onClick:t[1]||(t[1]=t=>e.contactPage())},(0,r.zw)(e.$t("pages.login.here")),1)])])),_:1}),(0,i.Wm)(j,{class:""},{default:(0,i.w5)((()=>[h,(0,i._)("div",_,[(0,i.Wm)(G,{onKeyup:(0,a.D2)(e.enterS,["enter"]),modelValue:e.email,"onUpdate:modelValue":t[2]||(t[2]=t=>e.email=t),dense:"","data-cy":"email",label:e.$t("pages.login.email"),outlined:""},null,8,["onKeyup","modelValue","label"])]),(0,i._)("div",g,(0,r.zw)(e.emailError),1),(0,i._)("div",w,[(0,i.Wm)(G,{onKeyup:(0,a.D2)(e.enterS,["enter"]),type:e.showPassword?"text":"password",modelValue:e.password,"onUpdate:modelValue":t[3]||(t[3]=t=>e.password=t),"data-cy":"password",label:e.$t("pages.login.password"),outlined:"",dense:""},{append:(0,i.w5)((()=>[(0,i.Wm)(Y,{onClick:e.toggleShow,flat:"",dense:"",name:e.showPassword?"visibility_off":"visibility",size:"24px",class:"cursor-pointer"},null,8,["onClick","name"])])),_:1},8,["onKeyup","type","modelValue","label"])]),(0,i._)("div",b,(0,r.zw)(e.passwordError),1),(0,i._)("div",f,[(0,i._)("p",null,[(0,i._)("a",{class:"cursor-pointer text-primary text-subtitle1",style:{"text-decoration":"underline"},onClick:t[4]||(t[4]=t=>e.onResetPW())},(0,r.zw)(e.$t("pages.login.forgot_password")),1)])]),(0,i._)("div",v,[(0,i.Wm)(X,{unelevated:"",disable:e.processing||e.start_disable_submit_timer,onKeyup:(0,a.D2)(e.enterS,["enter"]),label:e.$t("pages.login.login_button"),color:"primary","text-color":"white",onClick:t[5]||(t[5]=t=>e.onSubmit())},null,8,["disable","onKeyup","label"]),(0,i.Wm)(J,{start_timer:e.start_disable_submit_timer,counter_end_time:e.disable_submit_time,onDisableTimerDone:e.disableTimerDone},null,8,["start_timer","counter_end_time","onDisableTimerDone"])])])),_:1})]),(0,i._)("div",y,[(0,i.Wm)(j,null,{default:(0,i.w5)((()=>[(0,i._)("div",x,[S,(0,i._)("div",k,(0,r.zw)(e.$t("pages.login.social_media")),1),C]),(0,i._)("div",q,[(0,i._)("div",L,[(0,i.Wm)(ee)]),D,(0,i._)("div",T,[(0,i.Wm)(te)]),E,(0,i._)("div",$,[(0,i.Wm)(se)])])])),_:1}),(0,i.Wm)(j,{class:"text-center"},{default:(0,i.w5)((()=>[(0,i._)("div",A,[(0,i._)("div",W,[(0,i.Uk)((0,r.zw)(e.$t("pages.login.no_account"))+" ",1),(0,i._)("a",{class:"text-primary cursor-pointer",style:{"text-decoration":"underline"},onClick:t[6]||(t[6]=t=>e.user_register())},(0,r.zw)(e.$t("pages.login.register")),1),Z])])])),_:1})])])),_:1}),I,(0,i._)("div",V,[(0,i._)("div",H,[U,(0,i._)("h1",P,[(0,i.Uk)((0,r.zw)(e.$t("pages.login.learn_polydocs"))+" ",1),M,(0,i.Uk)((0,r.zw)(e.$t("pages.login.visit_site")),1)]),(0,i.Wm)(X,{unelevated:"",color:"primary","text-color":"white",onClick:t[7]||(t[7]=t=>e.goCloud()),label:e.$t("pages.login.visit_site_btn")},null,8,["label"])])])])):(0,i.kq)("",!0)])]),(0,i.Wm)(oe,{modelValue:e.display_error,"onUpdate:modelValue":t[9]||(t[9]=t=>e.display_error=t),persistent:"",class:"login-error-dialog"},{default:(0,i.w5)((()=>[(0,i.Wm)(ie,{style:{width:"500px","max-width":"40vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{class:"row items-center login-error-background p-4"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{color:"white",size:"xl",class:"q-ml-auto q-mr-auto",name:"warning"})])),_:1}),(0,i.Wm)(j,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,r.zw)(e.error_message)+" ",1),(0,i._)("a",O,(0,r.zw)(e.$t("help_center")),1)])),_:1}),(0,i.Wm)(ae,null,{default:(0,i.w5)((()=>[(0,i._)("div",R,[(0,i.Wm)(X,{label:e.$t("Close"),class:"q-mr-sm login-error-background",color:"primary",onClick:t[8]||(t[8]=t=>e.display_error=!1)},null,8,["label"])]),e.show_verif_email_btn?((0,i.wg)(),(0,i.iD)("div",z,[(0,i.Wm)(re,{email:e.email},null,8,["email"])])):(0,i.kq)("",!0)])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(le,{showing:e.processing},{default:(0,i.w5)((()=>[F])),_:1},8,["showing"])],64)}var N=s(30052),K=s.n(N),B=s(9262),j=s(77987),G=s(77378),Y=s(61959),X=s(15168),J=s(78564),ee=s(30524),te=s(80579),se=s(12699),ie=s(48825),re=s(80589),ae=s(7153),oe=s(60727),le=s(81243),ne=s(11765),de=s(76621),ce=s(2410);const ue=e=>((0,i.dD)("data-v-2491afc4"),e=e(),(0,i.Cn)(),e),me={key:0,class:"login_time_out_message"},pe=ue((()=>(0,i._)("div",{class:"col-4 secondary-c-text login_timout_time",style:{width:"150px"}},null,-1)));function he(e,t,s,a,o,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[e.start_timer?((0,i.wg)(),(0,i.iD)("div",me,(0,r.zw)(e.$t("failed_login_attempts_warning")),1)):(0,i.kq)("",!0),pe],64)}function _e(e,t){var s=document.createElement("span");s.className="flip-clock__piece",s.innerHTML='<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>',this.el=s;var i=s.querySelector(".card__top"),r=s.querySelector(".card__bottom"),a=s.querySelector(".card__back"),o=s.querySelector(".card__back .card__bottom");this.update=function(e){e=("0"+e).slice(-2),e!==this.currentValue&&(this.currentValue>=0&&(a.setAttribute("data-value",this.currentValue),r.setAttribute("data-value",this.currentValue)),this.currentValue=e,i.innerText=this.currentValue,o.setAttribute("data-value",this.currentValue),this.el.classList.remove("flip"),this.el.offsetWidth,this.el.classList.add("flip"))},this.update(t)}function ge(e){var t=Date.parse(e)-Date.parse(new Date);return{Total:t,Hours:Math.floor(t/36e5%24),Minutes:Math.floor(t/1e3/60%60),Seconds:Math.floor(t/1e3%60)}}function we(){var e=new Date;return{Total:e,Hours:e.getHours()%12,Minutes:e.getMinutes(),Seconds:e.getSeconds()}}function be(e,t){e=!!e&&new Date(Date.parse(e)),t=t||function(){};var s=e?ge:we;this.el=document.createElement("div"),this.el.className="flip-clock";var i,r,a={},o=s(e);for(i in o)o[i]<0&&(o[i]=0),"Total"!==i&&(a[i]=new _e(i,o[i]),this.el.appendChild(a[i].el));var l=0;function n(){if(r=requestAnimationFrame(n),!(l++%10)){var o=s(e);if(o.Total<0){for(i in cancelAnimationFrame(r),a)a[i].update(0);t()}else for(i in a)a[i].update(o[i])}}setTimeout(n,500)}const fe=(0,i.aZ)({el:"#app",props:{start_timer:{type:Boolean,default:!1},counter_end_time:{type:String,default:""}},watch:{start_timer:{handler:function(e,t){e?this.setCounter():this.hideCounter()}}},emits:["disableTimerDone"],mounted(){this.initView()},methods:{initView(){this.setCounter()},makeCounter(){let e=document.querySelector(".login_timout_time");e.innerHTML="";var t=new Date(this.counter_dateTime),s=new be(t,this.timeCompleted);e.appendChild(s.el)},timeCompleted(){this.$emit("disableTimerDone")},hideCounter(){let e=document.querySelector(".login_timout_time");e.innerHTML=""},getDistance(){const e=(new Date).getTime(),t=this.counter_time-e;return t},setCounter(){try{if(!1===this.start_timer)return;this.counter_dateTime=new Date(this.counter_end_time),this.counter_time=this.counter_dateTime.getTime();const e=this.getDistance();e<0&&this.expired_tries++,this.makeCounter()}catch(e){}}},setup(){return{counter_value:(0,Y.iH)(""),counter_time:(0,Y.iH)(0),counter_dateTime:(0,Y.iH)({}),counter_interval:(0,Y.iH)(0),expired_tries:(0,Y.iH)(0)}}});var ve=s(74260);const ye=(0,ve.Z)(fe,[["render",he],["__scopeId","data-v-2491afc4"]]),xe=ye;var Se=s(54268),ke=s(93622),Ce=s(28741),qe=function(e,t,s,i){function r(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,a){function o(e){try{n(i.next(e))}catch(t){a(t)}}function l(e){try{n(i["throw"](e))}catch(t){a(t)}}function n(e){e.done?s(e.value):r(e.value).then(o,l)}n((i=i.apply(e,t||[])).next())}))};const Le=(0,i.aZ)({el:"#app",mixins:[G.Z,ee.Z,J.Z,X.Z,ke.Z,Ce.Z],components:{GoogleLogin:ne.Z,MicrosoftLogin:ce.Z,LinkedinLogin:de.Z,ResendVerifyEmail:le.Z,PasswordDisableCounter:xe},data(){return{email:"",password:"",emailError:"",passwordError:"",forgotPW:"https://auth.docbits.com/oauth2/reset_password_request_doc2app",userlogin:!0,userregister:!1,disable_submit_difference:60}},watch:{display_error(e,t){}},mounted(){this.isUserAlreadyLoggedIn(),document.addEventListener("social_media_login_after",this.socialMediaLoginAfter)},unmounted:function(){document.removeEventListener("social_media_login_after",this.socialMediaLoginAfter)},methods:{isUserAlreadyLoggedIn(){return qe(this,void 0,void 0,(function*(){const e=(0,oe.wX)(),t=yield e.isLoggedIn();t?this.afterLoginRedirect(this):this.clearStorageForLogout()}))},enterS(){this.onSubmit()},socialMediaLoginAfter(e){this.handleSocialMediaRedirect(e.detail)},toggleShow(){this.showPassword=!this.showPassword},goCloud(){se.Az&&window.open(se.Az)},goHelp(){se.ny&&window.open(se.ny)},contactPage(){window.open("https://cloudintegration.eu/doc2_support")},user_register(){this.$router.push("/register")},onResetPW(){this.$router.push("/forget-password")},onSubmit(){this.email=this.removeSpaces(this.email);let e=this.validateEmail(this.email);e?(this.removeClass((0,j.$)("#email").querySelector("label"),"error-border-left"),this.addClass((0,j.$)("#email").querySelector("label"),"success-border-left"),this.emailError=""):(this.removeClass((0,j.$)("#email").querySelector("label"),"success-border-left"),this.addClass((0,j.$)("#email").querySelector("label"),"error-border-left"),this.emailError=this.$t("pages.messages.INVALID_EMAIL")),this.password&&""!=this.password?(this.removeClass((0,j.$)("#password").querySelector("label"),"error-border-left"),this.addClass((0,j.$)("#password").querySelector("label"),"success-border-left"),this.passwordError=""):(this.removeClass((0,j.$)("#password").querySelector("label"),"success-border-left"),this.addClass((0,j.$)("#password").querySelector("label"),"error-border-left"),this.passwordError=this.$t("pages.messages.PASSWORD_MANDATORY")),this.emailError||this.passwordError||this.authenticateUser()},authenticateUser(){return qe(this,void 0,void 0,(function*(){try{this.processing=!0;let e={username:this.email,password:this.removeSpaces(this.password)};const t=yield te.FT.login(e);t&&this.afterLoginEvent(t)}catch(e){this.handleLoginFailed(),this.handleErrorFromApi(e),this.processing=!1}}))},handleLoginFailed(){this.start_disable_submit_timer=!1;let e=re.Z.getItem("login_attempts")||0;if(re.Z.set("login_attempts",++e),e>3){const t=(e-3)*this.disable_submit_difference;this.disableSubmit(t)}},disableSubmit(e=60){e<0&&(e=this.disable_submit_difference),this.start_disable_submit_timer=!0,this.disable_submit_time=new Date,this.disable_submit_time.setSeconds(this.disable_submit_time.getSeconds()+e)},disableTimerDone(){this.start_disable_submit_timer=!1,this.disable_submit_time=null},handleSpecificErrors(e){e.hasOwnProperty("error")&&"email_not_verified"===e.error&&(this.show_verif_email_btn=!0)},afterLoginEvent(e){return qe(this,void 0,void 0,(function*(){try{this.processing=!0,this.setTokenInLocalStorage(e),yield this.setAuthToken("Bearer "+e.access_token),yield te.PK.setUserSession(),this.getUniqueLockId(),yield this.fetchUserSettings(),this.afterLoginRedirect(this)}catch(t){this.showErrorToast(this.$t("pages.messages.ERROR_INTERNAL_OCCUR"))}finally{this.processing=!1}}))},onReset(){this.email="",this.password="",this.emailError="",this.passwordError="",this.removeClass((0,j.$)("#email").querySelector("label"),"error-border-left"),this.removeClass((0,j.$)("#password").querySelector("label"),"error-border-left")},handleSocialMediaRedirect(e){return qe(this,void 0,void 0,(function*(){try{if(!e.access_type||!e.access_token)return;this.processing=!0;let t=new FormData;t.append("type",e.access_type),t.append("access_token",e.access_token);let s=yield this.getSocialToken(t);this.afterLoginEvent(s)}catch(t){this.handleErrorFromApi(t),this.processing=!1}}))},getSocialToken(e){return qe(this,void 0,void 0,(function*(){let t;t=yield K().post(Se.hi.social_token,e,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:(0,Se.jd)()},timeout:1e4,timeoutErrorMessage:"Request timed out"});const s=!(!t.data||!t.data.hasOwnProperty("success")||!0!==t.data.success);if(!s&&t.data.hasOwnProperty("message_code")&&"INVALID_AUTHORIZATION_CODE"==t.data.message_code)throw{message:this.$t("errors.INVALID_AUTHORIZATION_CODE")};if(!s&&t.data.hasOwnProperty("message"))throw{message:t.data.message};if(s){let e=t.data.token;return e}return""}))},displayError(e){this.display_error=!0;let t="";t='Invalid "username" or "password" in request.'==e?this.$t("invalid_user_password"):e,t||(t=this.$t("general_login_error")),this.error_message=t},handleErrorFromApi(e){let t="";e.response&&400===e.response.status&&(t=this.$t("pages.messages.INVALID_EMAIL_PASSWORD")),null!=e&&"object"==typeof e&&e.hasOwnProperty("message")&&(t=e.message),e&&e.response&&e.response.data&&(e.response.data.hasOwnProperty("message")&&(t=e.response.data.message),e.response.data.hasOwnProperty("error_description")&&(t=e.response.data.error_description,this.handleSpecificErrors(e.response.data))),t&&""!==t&&this.displayError(t)},languageChanged(){re.Z.set("selected_language",this.locale),ae.Z.set("event_name","language_change"),re.Z.remove("doc_types")}},setup(){(0,ie.Z)();let{locale:e}=(0,B.QT)({useScope:"global"});const t=(0,oe.TB)(),{getUniqueLockId:s}=t,i=(0,oe.wX)(),{setAuthToken:r}=i,a=(0,oe.LM)(),{fetchUserSettings:o}=a;return{fetchUserSettings:o,setAuthToken:r,locale:(0,Y.iH)(e),access_token:(0,Y.iH)(""),access_type:(0,Y.iH)("google"),display_error:(0,Y.iH)(!1),error_message:(0,Y.iH)(""),show_verif_email_btn:(0,Y.iH)(!1),processing:(0,Y.iH)(!1),showPassword:(0,Y.iH)(!1),start_disable_submit_timer:(0,Y.iH)(!1),disable_submit_time:(0,Y.iH)(null),getUniqueLockId:s,localeOptions:[{value:"en-us",label:"English"},{value:"de",label:"Deutsch"},{value:"es-es",label:"Español"},{value:"fr",label:"Français"},{value:"nl",label:"Dutch"}]}}});var De=s(10151),Te=s(25589),Ee=s(24027),$e=s(72448),Ae=s(2165),We=s(68689),Ze=s(64689),Ie=s(24554),Ve=s(46778),He=s(99367),Ue=s(66941),Pe=s(7518),Me=s.n(Pe);const Oe=(0,ve.Z)(Le,[["render",Q],["__scopeId","data-v-e6fc4580"]]),Re=Oe;Me()(Le,"components",{QCard:De.Z,QCardSection:Te.Z,QImg:Ee.Z,QSelect:$e.Z,QBtn:Ae.Z,QForm:We.Z,QInput:Ze.Z,QIcon:Ie.Z,QDialog:Ve.Z,QCardActions:He.Z,QInnerLoading:Ue.Z})}}]);