"use strict";(globalThis["webpackChunkfc_ocr_vue"]=globalThis["webpackChunkfc_ocr_vue"]||[]).push([[5778],{65778:(e,s,r)=>{r.r(s),r.d(s,{default:()=>Ce});var a=r(59835),t=r(86970),o=r(61957);const l=e=>((0,a.dD)("data-v-56b99f33"),e=e(),(0,a.Cn)(),e),i={class:"page-holder"},n={class:"container login"},d={class:"row"},c={class:"upper-section"},p={class:"header-text text-weight-bold",style:{"margin-right":"20%"}},m=l((()=>(0,a._)("br",null,null,-1))),u={key:0,style:{"font-size":"1.3rem"},class:"col-lg-12 text-red-5 text-subtitle1"},h={class:"col-12",id:"last_name"},g={class:"col-12 text-red-5 q-pa-sm"},w={class:"col-12",id:"last_name"},_={class:"col-12 text-red-5 q-pa-sm"},f={class:"col-12",id:"email"},y={class:"col-12 text-red-5 q-pa-sm"},v={class:"col-11 password",id:"password"},b={class:"cursor-pointer"},x={class:"col-12 text-red-5 q-pa-sm"},E={class:"col-12",id:"confirm_password"},k={class:"col-12 text-red-5 q-pa-sm"},W={key:1,class:"row q-ml-sm",style:{"margin-left":"2px"}},q={class:"col-12 row q-pl-md"},V={class:"text-primary cursor-pointer",style:{"text-decoration":"underline"},href:"https://polydocs.io/master-service-agreement/",target:"_blank"},C={class:"col-12 text-red-5 q-pa-sm"},P={class:"absolute-bottom"},Z={class:"mainLine"},z=l((()=>(0,a._)("div",{class:"signupLines"},null,-1))),U={class:"betweenLines"},$=l((()=>(0,a._)("div",{class:"signupLines"},null,-1))),L={class:"row justify-center"},N={class:"btnG"},D={class:"btnM"},K={class:"btnL"},S={style:{"border-top":"1px solid lightgrey"}},Q={class:"text-sm text-muted q-pt-md"},H=(0,a.Uk)("."),R=l((()=>(0,a._)("div",{class:"col-2 text-center"},null,-1))),F={class:"col-4 text-center"},T={style:{top:"20%",bottom:"50%",position:"relative"}},A=l((()=>(0,a._)("img",{class:"vertical-middle",width:"300",height:"300",src:"fellowpro_white.png",alt:""},null,-1))),I={class:"mb-14 text-white"},O=l((()=>(0,a._)("br",{class:"d-none d-lg-inline"},null,-1))),M=l((()=>(0,a._)("img",{class:"loader",src:"loader.gif",alt:"Loading..."},null,-1)));function j(e,s,r,l,j,B){const G=(0,a.up)("q-img"),Y=(0,a.up)("q-select"),J=(0,a.up)("q-card-section"),X=(0,a.up)("q-input"),ee=(0,a.up)("q-icon"),se=(0,a.up)("q-tooltip"),re=(0,a.up)("vue-recaptcha"),ae=(0,a.up)("q-checkbox"),te=(0,a.up)("q-btn"),oe=(0,a.up)("GoogleLogin"),le=(0,a.up)("MicrosoftLogin"),ie=(0,a.up)("LinkedinLogin"),ne=(0,a.up)("q-card"),de=(0,a.up)("Loader"),ce=(0,a.up)("q-card-actions"),pe=(0,a.up)("q-dialog"),me=(0,a.up)("q-inner-loading");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",i,[(0,a._)("div",n,[(0,a._)("div",d,[(0,a.Wm)(ne,{class:"col-5 left-side"},{default:(0,a.w5)((()=>[(0,a.Wm)(J,{class:"absolute-top"},{default:(0,a.w5)((()=>[(0,a.Wm)(G,{src:"docbits.svg",style:{"max-width":"120px"}}),(0,a.Wm)(Y,{modelValue:e.locale,"onUpdate:modelValue":[s[0]||(s[0]=s=>e.locale=s),e.languageChanged],options:e.localeOptions,dense:"",borderless:"","emit-value":"","map-options":"","options-dense":"",class:"float-right q-ml-auto text-grey-7 text-uppercase q-mr-md"},null,8,["modelValue","options","onUpdate:modelValue"])])),_:1}),(0,a._)("div",c,[(0,a.Wm)(J,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a._)("span",p,(0,t.zw)(e.$t("pages.register.register_header")),1),m,(0,a.Wm)(G,{src:"docbits.svg",style:{"max-width":"235px","margin-left":"20%"}})])),_:1}),(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[e.api_error?((0,a.wg)(),(0,a.iD)("div",u," Error: "+(0,t.zw)(e.error_message),1)):(0,a.kq)("",!0),(0,a._)("div",h,[(0,a.Wm)(X,{dense:"",label:e.$t("pages.register.first_name"),onKeyup:(0,o.D2)(e.enterS,["enter"]),modelValue:e.firstName,"onUpdate:modelValue":s[1]||(s[1]=s=>e.firstName=s),"data-cy":"firstName",outlined:"",class:"full-width"},null,8,["label","onKeyup","modelValue"])]),(0,a._)("div",g,(0,t.zw)(e.firstNameError),1),(0,a._)("div",w,[(0,a.Wm)(X,{dense:"",label:e.$t("pages.register.last_name"),onKeyup:(0,o.D2)(e.enterS,["enter"]),modelValue:e.lastName,"onUpdate:modelValue":s[2]||(s[2]=s=>e.lastName=s),"data-cy":"lastName",outlined:"",class:"full-width"},null,8,["label","onKeyup","modelValue"])]),(0,a._)("div",_,(0,t.zw)(e.lastNameError),1),(0,a._)("div",f,[(0,a.Wm)(X,{dense:"",label:e.$t("pages.register.email"),onKeyup:(0,o.D2)(e.enterS,["enter"]),modelValue:e.email,"onUpdate:modelValue":s[3]||(s[3]=s=>e.email=s),"data-cy":"email",outlined:"",class:"full-width"},null,8,["label","onKeyup","modelValue"])]),(0,a._)("div",y,(0,t.zw)(e.emailError),1),(0,a._)("div",v,[(0,a.Wm)(X,{dense:"",label:e.$t("pages.register.password"),onKeyup:(0,o.D2)(e.enterS,["enter"]),type:e.showPassword?"text":"password",modelValue:e.password,"onUpdate:modelValue":s[4]||(s[4]=s=>e.password=s),"data-cy":"password",outlined:"",class:"full-width"},{append:(0,a.w5)((()=>[(0,a.Wm)(ee,{onClick:e.toggleShow,flat:"",dense:"",name:e.showPassword?"visibility_off":"visibility",size:"24px",class:"cursor-pointer"},null,8,["onClick","name"])])),after:(0,a.w5)((()=>[(0,a._)("div",b,[(0,a.Wm)(ee,{name:"img:info_primary.svg"}),(0,a.Wm)(se,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,t.zw)(e.$t("password_hint")),1)])),_:1})])])),_:1},8,["label","onKeyup","type","modelValue"])]),(0,a._)("div",x,(0,t.zw)(e.passwordError),1),(0,a._)("div",E,[(0,a.Wm)(X,{dense:"",label:e.$t("pages.register.confirm_password"),onKeyup:(0,o.D2)(e.enterS,["enter"]),type:e.showConfPassword?"text":"password",modelValue:e.confirmPassword,"onUpdate:modelValue":s[5]||(s[5]=s=>e.confirmPassword=s),"data-cy":"confirmPassword",outlined:"",class:"full-width"},{append:(0,a.w5)((()=>[(0,a.Wm)(ee,{onClick:e.toggleShowConf,flat:"",dense:"",name:e.showConfPassword?"visibility_off":"visibility",size:"24px",class:"cursor-pointer"},null,8,["onClick","name"])])),_:1},8,["label","onKeyup","type","modelValue"])]),(0,a._)("div",k,(0,t.zw)(e.confpasswordError),1),""!==e.recaptcha_key?((0,a.wg)(),(0,a.iD)("div",W,[(0,a.Wm)(re,{ref:"recaptcha",sitekey:e.recaptcha_key,onVerify:e.captcaResp},null,8,["sitekey","onVerify"])])):(0,a.kq)("",!0),(0,a._)("div",q,[(0,a.Wm)(ae,{onKeyup:(0,o.D2)(e.enterS,["enter"]),modelValue:e.agree,"onUpdate:modelValue":s[6]||(s[6]=s=>e.agree=s),id:"agree"},{default:(0,a.w5)((()=>[(0,a._)("span",null,[(0,a.Uk)((0,t.zw)(e.$t("pages.register.agree"))+" ",1),(0,a._)("a",V,(0,t.zw)(e.$t("pages.register.terms_and_conditions")),1)])])),_:1},8,["onKeyup","modelValue"])]),(0,a._)("div",C,(0,t.zw)(e.agreeError),1)])),_:1}),(0,a.Wm)(J,{class:"col-12 text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(te,{unelevated:"",onKeyup:(0,o.D2)(e.enterS,["enter"]),color:"primary","text-color":"white",disable:e.processing,label:e.$t("pages.register.register_button"),onClick:s[7]||(s[7]=s=>e.registerUser())},null,8,["onKeyup","disable","label"])])),_:1})]),(0,a._)("div",P,[(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[(0,a._)("div",Z,[z,(0,a._)("div",U,(0,t.zw)(e.$t("pages.register.social_media")),1),$]),(0,a._)("div",L,[(0,a._)("div",N,[(0,a.Wm)(oe)]),(0,a._)("div",D,[(0,a.Wm)(le)]),(0,a._)("div",K,[(0,a.Wm)(ie)])])])),_:1}),(0,a.Wm)(J,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a._)("div",S,[(0,a._)("div",Q,[(0,a.Uk)((0,t.zw)(e.$t("pages.register.have_account"))+" ",1),(0,a._)("a",{class:"text-primary cursor-pointer",style:{"text-decoration":"underline"},onClick:s[8]||(s[8]=s=>e.user_login())},(0,t.zw)(e.$t("pages.register.login")),1),H])])])),_:1})])])),_:1}),R,(0,a._)("div",F,[(0,a._)("div",T,[A,(0,a._)("h1",I,[(0,a.Uk)((0,t.zw)(e.$t("pages.login.learn_polydocs"))+" ",1),O,(0,a.Uk)((0,t.zw)(e.$t("pages.login.visit_site")),1)]),(0,a.Wm)(te,{unelevated:"",color:"primary","text-color":"white",onClick:s[9]||(s[9]=s=>e.goCloud())},{default:(0,a.w5)((()=>[(0,a.Uk)((0,t.zw)(e.$t("pages.login.visit_site_btn")),1)])),_:1})])])])])]),(0,a.Wm)(de),(0,a.Wm)(pe,{modelValue:e.display_error,"onUpdate:modelValue":s[11]||(s[11]=s=>e.display_error=s),persistent:"",class:"login-error-dialog"},{default:(0,a.w5)((()=>[(0,a.Wm)(ne,{style:{width:"500px","max-width":"40vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(J,{class:"row items-center login-error-background p-4"},{default:(0,a.w5)((()=>[(0,a.Wm)(ee,{color:"white",size:"xl",class:"q-ml-auto q-mr-auto",name:"warning"})])),_:1}),(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,t.zw)(e.error_message),1)])),_:1}),(0,a.Wm)(ce,null,{default:(0,a.w5)((()=>[(0,a.Wm)(te,{label:e.$t("Close"),class:"q-mr-sm login-error-background q-ml-auto q-mr-auto",color:"primary",onClick:s[10]||(s[10]=s=>e.display_error=!1)},null,8,["label"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(me,{showing:e.processing},{default:(0,a.w5)((()=>[M])),_:1},8,["showing"])],64)}var B=r(9991),G=r(49990),Y=r(60499),J=r(91530),X=r(49341),ee=r(26033),se=r(31921),re=r(70501),ae=r(3833),te=r(38126),oe=r(67865),le=r(75134),ie=r(93439),ne=function(e,s,r,a){function t(e){return e instanceof r?e:new r((function(s){s(e)}))}return new(r||(r=Promise))((function(r,o){function l(e){try{n(a.next(e))}catch(s){o(s)}}function i(e){try{n(a["throw"](e))}catch(s){o(s)}}function n(e){e.done?r(e.value):t(e.value).then(l,i)}n((a=a.apply(e,s||[])).next())}))};const de=(0,a.aZ)({el:"#app",mixins:[re.Z,G.Z,ee.Z],components:{VueRecaptcha:J.Z,Loader:se.Z,GoogleLogin:oe.Z,LinkedinLogin:le.Z,MicrosoftLogin:ie.Z},data(){return{lastName:"",firstName:"",email:"",password:"",confirmPassword:"",agree:!1,users:(0,Y.iH)([]),emailError:"",passwordError:"",confpasswordError:"",agreeError:"",lastNameError:"",firstNameError:"",userDialog:(0,Y.iH)(!1),showPassword:!1,showConfPassword:!1,captchaResponse:(0,Y.iH)("")}},setup(){let{locale:e}=(0,B.QT)({useScope:"global"});return{api_error:(0,Y.iH)(!1),locale:(0,Y.iH)(e),error_message:(0,Y.iH)(""),display_error:(0,Y.iH)(!1),recaptcha_key:(0,Y.iH)(""),processing:(0,Y.iH)(!1),localeOptions:[{value:"en-us",label:"English"},{value:"de",label:"Deutsch"},{value:"es-es",label:"Español"},{value:"fr",label:"Français"},{value:"nl",label:"Dutch"}]}},computed:{buttonLabel(){return this.showPassword?"Hide":"Show"}},mounted(){ae.Z.remove("user_details"),this.setRecaptchaKey()},methods:{languageChanged(){ae.Z.set("selected_language",this.locale),te.Z.set("event_name","language_change"),ae.Z.remove("doc_types")},onResetPW(){this.$router.push("/forget-password")},setRecaptchaKey(){this.recaptcha_key="6LegB9sfAAAAAF0KU4RWg_6zUryTMujtsL6kFmh7"},routeToVerifyEmail(e){ae.Z.set("verify_email",e),this.$router.push("/register-success")},enterS(){this.registerUser()},captcaResp(e){this.captchaResponse=e},toggleShow(){this.showPassword=!this.showPassword},toggleShowConf(){this.showConfPassword=!this.showConfPassword},goCloud(){window.open("https://polydocs.io/")},goHelp(){window.open("https://docs.fellowpro.com/DocBits/")},contactPage(){window.open("https://dev.cloudintegration.eu/doc2_support")},user_login(){this.$router.push("/")},validateForm(){let e=!1;return this.passwordError="",this.confpasswordError="",this.lastNameError="",this.firstNameError="",this.agreeError="",this.emailError="",""===this.firstName&&(this.firstNameError="First name is required",e=!0),""===this.lastName&&(this.lastNameError="Last name is required",e=!0),""===this.email&&(this.emailError="Email is required",e=!0),this.validateEmail(this.email)||(this.emailError="Please enter valid email",e=!0),""===this.password&&(this.passwordError="Password is required",e=!0),""===this.confirmPassword&&(this.confpasswordError="Confirm password is required",e=!0),this.password!==this.confirmPassword&&(this.confpasswordError="Passwords do not match",e=!0),!1===this.agree&&(this.agreeError="Please agree to the Terms and Conditions",e=!0),e},registerUser(){return ne(this,void 0,void 0,(function*(){try{let e=this.validateForm();if(e)throw{message:"dont_show_error"};this.processing=!0,this.api_error=!1;let s={first_name:this.firstName,last_name:this.lastName,email:this.email,password:this.password,password_confirm:this.confirmPassword,captcha_response:this.captchaResponse},r=yield X.FT.registerUser(s);if(this.processing=!1,r&&r.hasOwnProperty("success")&&!1===r.success&&r.hasOwnProperty("message"))throw this.displayErrorInDialog(r.message),{message:"dont_show_error"};this.routeToVerifyEmail(this.email)}catch(e){this.handleErrorFromApi(e)}finally{this.processing=!1,this.resetRecaptcha()}}))},handleErrorFromApi(e){let s="";""===s&&null!=e&&"object"==typeof e&&e.hasOwnProperty("message")&&"dont_show_error"!==e.message&&(s=e.message),e&&e.response&&e.response.data&&e.response.data.hasOwnProperty("message")&&(s=e.response.data.message),s&&""!==s&&this.displayError(s)},resetRecaptcha(){try{this.$refs["recaptcha"].reset()}catch(e){}},displayError(e){""!==e&&(this.api_error=!0,this.error_message=e)},displayErrorInDialog(e){this.display_error=!0;let s=e;s||(s=this.$t("general_login_error")),this.error_message=s}}});var ce=r(7683),pe=r(44458),me=r(63190),ue=r(70335),he=r(32259),ge=r(13119),we=r(22857),_e=r(46858),fe=r(11221),ye=r(68879),ve=r(32074),be=r(11821),xe=r(60854),Ee=r(8326),ke=r(18149),We=r(69984),qe=r.n(We);const Ve=(0,ce.Z)(de,[["render",j],["__scopeId","data-v-56b99f33"]]),Ce=Ve;qe()(de,"components",{QCard:pe.Z,QCardSection:me.Z,QImg:ue.Z,QSelect:he.Z,QInput:ge.Z,QIcon:we.Z,QTooltip:_e.Z,QCheckbox:fe.Z,QBtn:ye.Z,QDialog:ve.Z,QCardActions:be.Z,QInnerLoading:xe.Z,QForm:Ee.Z,QField:ke.Z})}}]);