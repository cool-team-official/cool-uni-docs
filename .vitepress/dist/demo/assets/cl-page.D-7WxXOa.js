import{au as e,a7 as o,av as l,aw as t,ai as a,ax as n,ay as s,az as r,aA as i,aB as c,f as u,c as d,ab as p,a6 as f,d as g,o as m,a as y,n as b,b as h,y as v,k as _,l as k,w as C,p as B,aC as S,q as x,t as w,G as T,aD as z,r as $,i as V,g as N,aa as R,ag as M,O as I,aE as O,aF as j,aG as A,v as P,F as H,x as F,H as G,a1 as L,aH as U,e as E,A as q,a4 as D,u as J,S as K,T as Q,aI as W}from"./index-BsPE-n5_.js";import{_ as X,u as Y}from"./_plugin-vue_export-helper.B5Vkt9du.js";var Z=Object.prototype.hasOwnProperty;function ee(i){if(null==i)return!0;if(e(i)&&(o(i)||"string"==typeof i||"function"==typeof i.splice||l(i)||t(i)||a(i)))return!i.length;var c=n(i);if("[object Map]"==c||"[object Set]"==c)return!i.size;if(s(i))return!r(i).length;for(var u in i)if(Z.call(i,u))return!1;return!0}function oe(e){return"number"==typeof e||i(e)&&"[object Number]"==c(e)}function le(e,l,t){const{proxy:a}=f(),n=u();return d((()=>(()=>{let s=a.$parent;for(;s;){if(s.$options.name===e)return o(t)&&p((()=>{const e={};(t||[]).map((o=>{a[o]&&(e[o]=a[o])})),s.__children||(s.__children=[]),ee(e)||s.__children.push(e)})),(l||[]).reduce(((e,o)=>(e[o]=s[o],e)),{});s=s.$parent}return s||n.value})()))}function te(e){return o(e)?e.map(te).join(" "):oe(e)?`${e}rpx`:e}const ae=[{key:"padding",rpx:!0},{key:"margin",rpx:!0},{key:"height",rpx:!0},{key:"width",rpx:!0},{key:"font-size",rpx:!0},{key:"border-radius",alias:["radius"],rpx:!0},{key:"background-color"},{key:"background"},{key:"custom-style"}];function ne(e={}){const o=f();return{baseStyle:d((()=>function(e){for(var o=-1,l=null==e?0:e.length,t={};++o<l;){var a=e[o];t[a[0]]=a[1]}return t}(ae.map((l=>{const t=[l.key,...l.alias||[]].map((l=>{var t;const a=null==(t=null==o?void 0:o.proxy)?void 0:t.$attrs[l],n=e[l];return void 0!==a?a:n})).find((e=>void 0!==e));return[l.key,l.rpx?te(t):t]})).filter((e=>void 0!==e[1]))))),parseRpx:te}}function se(e){return{tap:function(o){e("tap",o)}}}function re(){const e=le("cl-form",["disabled"]);return{disabled:d((()=>{var o;return null==(o=e.value)?void 0:o.disabled}))}}const ie=X(g({name:"cl-icon",props:{name:String,className:String,size:{type:[String,Number],default:30},color:String},setup:()=>({...ne()})}),[["render",function(e,o,l,t,a,n){const s=v;return m(),y(s,{class:b(["cl-icon",e.className||`cl-icon-${e.name}`,`is-${e.color}`]),style:h([e.baseStyle,{fontSize:e.parseRpx(e.size),color:e.color}])},null,8,["class","style"])}]]);const ce=X(g({name:"cl-loading",props:{color:{type:String,default:"primary"},theme:{type:String,default:"spin"},size:{type:[String,Number],default:50}}}),[["render",function(e,o,l,t,a,n){const s=_(k("cl-icon"),ie);return m(),y(s,{"class-name":`cl-loading cl-icon-loading-${e.theme}`,color:e.color,size:e.size},null,8,["class-name","color","size"])}]]);const ue=X(g({name:"cl-loading-mask",props:{text:String,loading:Boolean,loadingTheme:String,fullscreen:Boolean,color:String,modal:{type:Boolean,default:!0},border:Boolean,background:{type:String,default:"rgba(255, 255, 255, 0.7)"}}}),[["render",function(e,o,l,t,a,n){const s=_(k("cl-loading"),ce),r=v,i=V;return m(),y(i,{class:"cl-loading-mask__wrap"},{default:C((()=>[B(i,{class:b(["cl-loading-mask",[{"is-fullscreen":e.fullscreen,"is-show":e.loading,"is-border":e.border}]]),style:h({background:e.modal&&!e.border?e.background:"transparent",color:e.color})},{default:C((()=>[S(B(i,{class:"cl-loading-mask__content"},{default:C((()=>[B(i,{class:"cl-loading-mask__border"},{default:C((()=>[B(s,{theme:e.loadingTheme,color:e.border?"#ffffff":e.color,size:60},null,8,["theme","color"]),e.text?(m(),y(r,{key:0,class:"cl-loading-mask__text"},{default:C((()=>[x(w(e.text),1)])),_:1})):T("",!0)])),_:1})])),_:1},512),[[z,e.loading]])])),_:1},8,["class","style"]),$(e.$slots,"default")])),_:3})}]]),{statusBarHeight:de=0}=N();let pe=1;const fe=X(g({name:"cl-popup",props:{modelValue:Boolean,title:String,showHeader:{type:Boolean,default:!0},direction:{type:String,default:"center"},size:{type:[String,Number],default:"auto"},padding:{type:[String,Number],default:32},borderRadius:[Number,Array,String],showCloseBtn:Boolean,backgroundColor:{type:String,default:"#fff"},modal:{type:Boolean,default:!0},modalBackground:{type:String,default:"rgba(0, 0, 0, 0.4)"},closeOnClickModal:{type:Boolean,default:!0},zIndex:{type:Number,default:600}},emits:["update:modelValue","open","opened","close","closed"],setup(e,{emit:o}){const l=u(!1),t=u(!1),a=u(!0),n=u(!1),s=u(0);let r;const i=d((()=>!0)),c=d((()=>{switch(e.direction){case"top":case"bottom":return te(e.size);case"left":case"right":return"100%"}})),p=d((()=>{switch(e.direction){case"top":case"bottom":return"100%";case"left":case"right":case"center":return te(e.size)}})),f=d((()=>{var o;if(["left","right","top"].includes(e.direction)){let l=0;(null==(o=M.info())?void 0:o.isCustomNavbar)?l+=de:l+=44+de;let[t]=te(e.padding).split(" ");return"0rpx"==t&&(t="0px"),`calc(${l}px + ${t})`}return 1}));function g(){s.value=e.zIndex+pe++,l.value||(l.value=!0,a.value=!1,o("update:modelValue",!0),o("open"),clearTimeout(r),r=setTimeout((()=>{n.value=!0,r=setTimeout((()=>{t.value=!0,o("opened")}),350)}),50))}function m(){if(n.value){(()=>{t.value=!1,n.value=!1,o("close"),clearTimeout(r),r=setTimeout((()=>{l.value=!1,o("update:modelValue",!1),a.value=!0,o("closed")}),300)})()}}return R((()=>e.modelValue),(e=>{e?g():m()}),{immediate:!0}),{visible:l,isOpened:t,isClosed:a,isFocus:i,status:n,height:c,width:p,paddingTop:f,zIndex:s,parseRpx:te,open:g,close:m,modalClose:function(){if(!e.closeOnClickModal)return!1;m()}}}}),[["render",function(e,o,l,t,a,n){const s=V,r=v;return e.visible?(m(),y(s,{key:0,class:b(["cl-popup__wrapper",`cl-popup__wrapper--${e.direction}`,"is-"+(e.status?"open":"close"),{"is-modal":e.modal}]),style:h({zIndex:e.zIndex}),onTouchmove:o[0]||(o[0]=I((()=>{}),["stop","prevent"]))},{default:C((()=>[e.modal?(m(),y(s,{key:0,class:"cl-popup__modal",style:h({background:e.modalBackground}),onClick:e.modalClose},null,8,["style","onClick"])):T("",!0),B(s,{class:"cl-popup",style:h({height:e.height,width:e.width,backgroundColor:e.backgroundColor,borderRadius:e.parseRpx(e.borderRadius)})},{default:C((()=>[e.title&&e.showHeader?(m(),y(s,{key:0,class:"cl-popup__header"},{default:C((()=>[$(e.$slots,"header",{},(()=>[x(w(e.title),1)]))])),_:3})):T("",!0),B(s,{class:"cl-popup__container",style:h({padding:e.parseRpx(e.padding),paddingTop:e.paddingTop})},{default:C((()=>[$(e.$slots,"default")])),_:3},8,["style"]),e.status&&e.showCloseBtn?(m(),y(s,{key:1,class:"cl-popup__close",onClick:e.close},{default:C((()=>[B(r,{class:"cl-icon-close"})])),_:1},8,["onClick"])):T("",!0)])),_:3},8,["style"])])),_:3},8,["class","style"])):T("",!0)}]]);const ge=X(g({name:"cl-toast",setup(){let e=0;const o=u([]);function l(e){clearTimeout(e.timer),e.visible=!1,A(e.onClose)&&e.onClose(),setTimeout((()=>{e.closed=!0}),300)}function t(e){const{duration:o}=e||{};o>0&&(e.visible=!0,e.timer=setTimeout((()=>{l(e)}),o))}return{list:o,open:function(l){const a={id:e++,visible:!1,closed:!1,icon:"",image:null,message:"",duration:2e3,type:"",position:"center",clear:!1};switch(O(l,"message")?Object.assign(a,l):a.message=String(l),a.type){case"success":a.icon="cl-icon-check-border";break;case"warning":a.icon="cl-icon-warning-border";break;case"info":a.icon="cl-icon-help-border";break;case"error":a.icon="cl-icon-close-border"}a.clear?o.value=[a]:o.value.push(a),(a.image||a.icon)&&(a.position="center"),setTimeout((()=>{t(j(o.value))}),50)},close:l,create:t}}}),[["render",function(e,o,l,t,a,n){const s=G,r=v,i=V,c=_(k("cl-popup"),fe);return m(),y(i,{class:"cl-toast__wrap"},{default:C((()=>[(m(!0),P(H,null,F(e.list,(o=>(m(),y(c,{key:o.id,modelValue:o.visible,"onUpdate:modelValue":e=>o.visible=e,padding:0,modal:!1,direction:o.position,"background-color":"transparent"},{default:C((()=>[B(i,{class:b(["cl-toast",{"is-icon":o.image||o.icon}])},{default:C((()=>[o.image||o.icon?(m(),y(i,{key:0,class:"cl-toast__icon"},{default:C((()=>[o.image?(m(),y(s,{key:0,src:o.image.url,mode:o.image.mode||"aspectFill",style:h(o.image.style)},null,8,["src","mode","style"])):(m(),y(r,{key:1,class:b(o.icon)},null,8,["class"]))])),_:2},1024)):T("",!0),$(e.$slots,"default",{},(()=>[B(r,{class:"cl-toast__content"},{default:C((()=>[x(w(o.message),1)])),_:2},1024)]))])),_:2},1032,["class"])])),_:2},1032,["modelValue","onUpdate:modelValue","direction"])))),128))])),_:3})}]]);const me=X(g({name:"cl-button",props:{size:String,type:{type:String,default:"default"},plain:Boolean,disabled:Boolean,loading:Boolean,loadingTheme:String,loadingColor:String,round:Boolean,border:{type:Boolean,default:!0},icon:String,fill:Boolean,color:String,bold:Boolean,custom:Boolean,formType:String,openType:String,hoverClass:{type:String,default:"button-hover"},hoverStartTime:{type:Number,default:20},hoverStayTime:{type:Number,default:70},appParameter:String,hoverStopPropagation:Boolean,lang:{type:String,default:"en"},sessionForm:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:Boolean},setup(e,{emit:o}){const{tap:l}=se(o);return{getPhoneNumber:function(e){o("getphonenumber",e)},getUserInfo:function(e){o("getuserinfo",e)},error:function(e){o("error",e)},openSetting:function(e){o("opensetting",e)},launchApp:function(e){o("launchapp",e)},click:function(e){l(e)},isImg:d((()=>{var o;return null==(o=e.icon)?void 0:o.includes("/")})),...ne()}}}),[["render",function(e,o,l,t,a,n){const s=_(k("cl-loading"),ce),r=G,i=v,c=V,u=L;return m(),y(u,{class:b(["cl-button",e.type&&`cl-button--${e.type}`,e.size&&`cl-button--${e.size}`,{"is-round":e.round,"is-loading":e.loading,"is-plain":e.plain,"is-fill":e.fill,"is-disabled":e.disabled,"is-border":e.border,"is-bold":e.bold,"is-custom":e.custom}]),style:h([e.baseStyle,{color:e.color}]),size:e.size,disabled:e.disabled||e.loading,"form-type":e.formType,"open-type":e.openType,"hover-class":e.hoverClass,"hover-start-time":e.hoverStartTime,"hover-stay-time":e.hoverStayTime,"app-parameter":e.appParameter,"hover-stop-propagation":e.hoverStopPropagation,lang:e.lang,"session-form":e.sessionForm,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,onGetphonenumber:e.getPhoneNumber,onGetuserinfo:e.getUserInfo,onError:e.error,onOpensetting:e.openSetting,onLaunchapp:e.launchApp,onClick:e.click},{default:C((()=>[e.loading?(m(),y(s,{key:0,size:32,color:e.loadingColor,theme:e.loadingTheme},null,8,["color","theme"])):T("",!0),e.icon?(m(),y(c,{key:1,class:"cl-button__icon"},{default:C((()=>[e.isImg?(m(),y(r,{key:0,src:e.icon,mode:"aspectFit"},null,8,["src"])):(m(),y(i,{key:1,class:b([e.icon])},null,8,["class"]))])),_:1})):T("",!0),B(c,{class:"cl-button__text",style:h({color:e.color})},{default:C((()=>[$(e.$slots,"default")])),_:3},8,["style"])])),_:3},8,["class","style","size","disabled","form-type","open-type","hover-class","hover-start-time","hover-stay-time","app-parameter","hover-stop-propagation","lang","session-form","send-message-title","send-message-path","send-message-img","show-message-card","onGetphonenumber","onGetuserinfo","onError","onOpensetting","onLaunchapp","onClick"])}]]);const ye=X(g({name:"cl-dialog",props:{modelValue:Boolean,title:String,textAlign:{type:String,default:"left"},width:{type:String,default:"80%"},closeOnClickModal:{type:Boolean,default:!0},showCloseBtn:Boolean},setup(e,{emit:o}){const l=u(!1);return R((()=>e.modelValue),(e=>{l.value=e}),{immediate:!0}),{visible:l,open:function(){l.value=!0},close:function(){l.value=!1},onClose:function(){o("update:modelValue",!1),o("close")},onClosed:function(){o("closed")}}}}),[["render",function(e,o,l,t,a,n){const s=V,r=v,i=_(k("cl-popup"),fe);return m(),y(s,{class:"cl-dialog__wrapper"},{default:C((()=>[B(i,{modelValue:e.visible,"onUpdate:modelValue":o[0]||(o[0]=o=>e.visible=o),direction:"center","close-on-click-modal":e.closeOnClickModal,size:e.width,"border-radius":16,padding:0,onClose:e.onClose,onClosed:e.onClosed},{default:C((()=>[B(s,{class:"cl-dialog"},{default:C((()=>[e.title?(m(),y(s,{key:0,class:"cl-dialog__header"},{default:C((()=>[$(e.$slots,"header",{},(()=>[x(w(e.title),1)]))])),_:3})):T("",!0),B(s,{class:"cl-dialog__container",style:h({textAlign:e.textAlign})},{default:C((()=>[$(e.$slots,"default")])),_:3},8,["style"]),e.$slots.footer?(m(),y(s,{key:1,class:"cl-dialog__footer"},{default:C((()=>[$(e.$slots,"footer")])),_:3})):T("",!0),e.showCloseBtn?(m(),y(s,{key:2,class:"cl-dialog__close",onClick:e.close},{default:C((()=>[B(r,{class:"cl-icon-close"})])),_:1},8,["onClick"])):T("",!0)])),_:3})])),_:3},8,["modelValue","close-on-click-modal","size","onClose","onClosed"])])),_:3})}]]);const be=X(g({name:"cl-confirm",setup(){const e=u(!1),o=u(!0),l=u(!1),t=u({});let a,n=!1;function s(o="close"){function a(){t.value.callback&&t.value.callback(o),p((()=>{e.value=!1,s()}))}function s(){l.value=!1}n=!0,t.value.beforeClose?t.value.beforeClose(o,{done:a,showLoading:function(){l.value=!0},hideLoading:s}):a()}return{visible:e,loading:l,conf:t,open:function(l){function r(){e.value=!0,o.value=!1,p((()=>{t.value={width:"500rpx",showCancelButton:!0,showConfirmButton:!0,confirmButtonText:"确认",cancelButtonText:"取消",closeOnClickModal:!0,...l},t.value.duration&&(a=setTimeout((()=>{s("close")}),t.value.duration))}))}n=!1,e.value=!1,clearTimeout(a),o.value?r():setTimeout((()=>{r()}),350)},close:s,onClose:function(){clearTimeout(a),n||s("close")},onClosed:function(){o.value=!0}}}}),[["render",function(e,o,l,t,a,n){const s=v,r=V,i=_(k("cl-button"),me),c=_(k("cl-dialog"),ye);return m(),y(r,{class:"cl-confirm"},{default:C((()=>[B(c,{modelValue:e.visible,"onUpdate:modelValue":o[2]||(o[2]=o=>e.visible=o),title:e.conf.title,width:e.conf.width,"close-on-click-modal":e.conf.closeOnClickModal,onClose:e.onClose,onClosed:e.onClosed},U({header:C((()=>[B(r,{class:"cl-confirm__header"},{default:C((()=>["error"==e.conf.type?(m(),y(s,{key:0,class:"cl-icon-toast-error"})):"warning"==e.conf.type?(m(),y(s,{key:1,class:"cl-icon-toast-warning"})):"success"==e.conf.type?(m(),y(s,{key:2,class:"cl-icon-toast-success"})):T("",!0),B(s,{class:"cl-confirm__title"},{default:C((()=>[x(w(e.conf.title),1)])),_:1})])),_:1})])),default:C((()=>[B(r,{class:"cl-confirm__container",style:h({textAlign:e.conf.message?"center":"left"})},{default:C((()=>[$(e.$slots,"default",{},(()=>[B(r,{class:"cl-confirm__message"},{default:C((()=>[x(w(e.conf.message),1)])),_:1})]))])),_:3},8,["style"])])),_:2},[e.conf.showCancelButton||e.conf.showConfirmButton?{name:"footer",fn:C((()=>[B(r,{class:"cl-confirm__footer"},{default:C((()=>[e.conf.showCancelButton?(m(),y(r,{key:0,class:"cl-confirm__footer-item"},{default:C((()=>[B(i,{fill:"",onClick:o[0]||(o[0]=o=>e.close("cancel"))},{default:C((()=>[x(w(e.conf.cancelButtonText),1)])),_:1})])),_:1})):T("",!0),e.conf.showConfirmButton?(m(),y(r,{key:1,class:"cl-confirm__footer-item"},{default:C((()=>[B(i,{fill:"",type:"primary",loading:e.loading,onClick:o[1]||(o[1]=o=>e.close("confirm"))},{default:C((()=>[x(w(e.conf.confirmButtonText),1)])),_:1},8,["loading"])])),_:1})):T("",!0)])),_:1})])),key:"0"}:void 0]),1032,["modelValue","title","width","close-on-click-modal","onClose","onClosed"])])),_:3})}]]);const he=X(g({name:"cl-status-bar",props:{backgroundColor:String,sticky:{type:Boolean,default:!0}},setup(e){const{statusBarHeight:o}=N(),{router:l}=Y();return{height:d((()=>`${o}px`)),backgroundColor:d((()=>{var o,t,a;return e.backgroundColor||(null==(t=null==(o=l.info())?void 0:o.style)?void 0:t.navigationBarBackgroundColor)||(null==(a=l.globalStyle)?void 0:a.navigationBarBackgroundColor)||"#ffffff"}))}}}),[["render",function(e,o,l,t,a,n){const s=V;return m(),y(s,{class:b(["cl-status-bar__wrap",[{"is-sticky":e.sticky}]]),style:h({height:e.height})},{default:C((()=>[B(s,{class:"cl-status-bar",style:h({backgroundColor:e.backgroundColor})},null,8,["style"])])),_:1},8,["class","style"])}]]);const ve=X(g({name:"cl-page",props:{fullscreen:Boolean,padding:{type:[Number,String],default:0},statusBar:{type:Boolean,default:!0},statusBarBackground:String,backgroundColor:String},setup(e){const{refs:o,setRefs:l,router:t}=Y(),a=E(),n=t.info(),{statusBarHeight:s=0,screenHeight:r,windowHeight:i,safeAreaInsets:c}=N(),{proxy:u}=f(),p=!!(null==n?void 0:n.isCustomNavbar)&&e.statusBar,g=d((()=>{var o,l;return e.backgroundColor||(null==(l=null==(o=t.info())?void 0:o.style)?void 0:l.backgroundColor)||t.globalStyle.backgroundColor||"#ffffff"})),m=d((()=>{if(!e.fullscreen)return"auto";let o=0;return o=i,o-((null==c?void 0:c.bottom)||0)+"px"})),y=q({loading:!1,border:!1,text:"加载中"});const b=t.currentPage();return b&&(b["cl-page"]={loaded:!1,showLoading:function(e){y.loading=!0,W(e)?y.text=e:Object.assign(y,e)},hideLoading:function(){y.loading=!1},showToast:function(e){var l;null==(l=o.toast)||l.open(e)},showConfirm:function(e){var l;null==(l=o.confirm)||l.open(e)},showTips:function(e,l){var t;null==(t=o.confirm)||t.open({title:"提示",message:e,showCancelButton:!1,callback:l})}},D((()=>{b["cl-page"].loaded=!0}))),u.$root.scrollTo=o=>{if(o-=(null==n?void 0:n.isCustomNavbar)?s:0,e.padding){const[l]=te(e.padding).split(" ");o-=J(parseInt(l))}K().in(u).select(".cl-page").boundingClientRect((e=>{K().in(u).select(".safe-area-bottom").boundingClientRect((l=>{const t=o+((null==e?void 0:e.height)||0)-((null==l?void 0:l.bottom)||0);Q({scrollTop:t,duration:100})})).exec()})).exec()},{app:a,background:g,height:m,refs:o,setRefs:l,loader:y,parseRpx:te,statusBar:p}}}),[["render",function(e,o,l,t,a,n){const s=_(k("cl-loading-mask"),ue),r=_(k("cl-toast"),ge),i=_(k("cl-confirm"),be),c=_(k("cl-status-bar"),he),u=V;return m(),P(H,null,[B(u,{class:b(["cl-page",[`theme-${e.app.theme.name}`,{"is-fullscreen":e.fullscreen}]]),style:h({padding:e.parseRpx(e.padding),height:e.height})},{default:C((()=>[B(s,{fullscreen:"",loading:e.loader.loading,text:e.loader.text,border:e.loader.border},null,8,["loading","text","border"]),B(r,{ref:e.setRefs("toast")},null,512),B(i,{ref:e.setRefs("confirm")},null,512),e.statusBar?(m(),y(c,{key:0,"background-color":e.statusBarBackground},null,8,["background-color"])):T("",!0),$(e.$slots,"default"),e.fullscreen?T("",!0):(m(),y(u,{key:1,class:"safe-area-bottom"}))])),_:3},8,["class","style"]),B(u,{class:"cl-page__bg",style:h({background:e.background})},null,8,["style"])],64)}]]);export{ie as _,ve as a,me as b,fe as c,ue as d,ge as e,ce as f,le as g,oe as h,ee as i,se as j,re as k,be as l,ye as m,te as p,ne as u};
