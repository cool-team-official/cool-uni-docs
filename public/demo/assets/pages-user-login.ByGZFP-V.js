import{g as e,f as a,D as o,j as s,V as t,W as n,X as l,Y as r,Z as i,d as c,k as u,l as p,o as d,a as m,w as f,p as h,q as g,O as v,y as _,i as y,z as b,e as w,c as k,A as x,t as C,s as j,_ as P,n as B,v as A,F as U,G as V,x as z,$ as T,a0 as $,H as I,a1 as L,a2 as S}from"./index-CYp4B_QH.js";import{_ as q}from"./cl-topbar.BfDZ0C8_.js";import{_ as D}from"./cl-input.BQlHe_GP.js";import{b as N,c as W,a as M,i as R}from"./cl-page.CV4Clf1q.js";import{_ as X}from"./cl-text.0zcdGoXY.js";import{_ as F}from"./cl-divider.X3p2vStP.js";import{_ as O}from"./cl-avatar.CSnfTPt3.js";import{_ as E}from"./cl-list-item.wx3UMe5a.js";import{_ as Z}from"./cl-list.CLsXctYK.js";import{_ as G}from"./logo.DsHqZPNN.js";import{u as H,_ as Y}from"./_plugin-vue_export-helper.C5tT7wvf.js";import{u as J}from"./index.CS5AuKI6.js";import{S as K}from"./sms-btn.B3HELI0o.js";import{_ as Q}from"./cl-checkbox.1GtTlLwZ.js";import{c as ee}from"./cloneDeep.Dzvk72xp.js";import"./isBoolean.K54iZHq8.js";function ae(){const{platform:c}=e(),u=a("");async function p(){return new Promise((e=>{}))}function d(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}const m={appId:""};return o((()=>{p()})),s((()=>{d()&&t.user.comm.wxMpConfig({url:`${location.origin}${location.pathname}`}).then((e=>{n.config({debug:l.app.wx.debug,jsApiList:["chooseWXPay"],...e}),Object.assign(m,e)}))})),{code:u,getCode:p,isWxBrowser:d,hasApp:function(){return!0},downloadApp:function(){},mpConfig:m,mpAuth:function(){const e=encodeURIComponent(`${location.origin}${location.pathname}#/pages/user/login`),a=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${m.appId}&redirect_uri=${e}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;location.href=a},mpLogin:async function(){return new Promise((e=>{const a=r("code"),o=i.get("mpCode");let s=window.location.href;s=s.replace(/(\?[^#]*)#/,"#"),window.history.replaceState({},"",s),a!=o?(i.set("mpCode",a),e(a)):e(null)}))},mpPay:async function(e){return new Promise(((a,o)=>{if(!d())return o({message:"请在微信浏览器中打开"});n.chooseWXPay({...e,timestamp:e.timeStamp,success(){a()},complete(e){if("chooseWXPay:cancel"===e.errMsg)o({message:"已取消支付"});else o({message:"支付失败"})}})}))},miniLogin:async function(){return new Promise(((e,a)=>{uni["mac"===c?"getUserInfo":"getUserProfile"]({lang:"zh_CN",desc:"授权信息仅用于用户登录",success({iv:a,encryptedData:o,signature:s,rawData:t}){function n(){e({iv:a,encryptedData:o,signature:s,rawData:t,code:u.value})}uni.checkSession({success(){n()},fail(){p().then(n)}})},fail(e){console.error(e),p(),a({message:"登录授权失败"})}})}))},miniPay:function(e){return new Promise(((a,o)=>{uni.requestPayment({provider:"wxpay",...e,success(){a()},fail(){o({message:"已取消支付"})}})}))},appLogin:function(){let e,a;return new Promise(((o,s)=>{plus.oauth.getServices((t=>{e=t,Object.keys(e).some((o=>{"weixin"==e[o].id&&(a=e[o])})),a.authorize(o,s)}),s)}))},appPay:function(e){return new Promise(((a,o)=>{uni.requestPayment({provider:"wxpay",orderInfo:e,success(){a()},fail(){o({message:"已取消支付"})}})}))}}}const oe=Y(c({__name:"agree-btn",setup(e,{expose:o}){const{router:s}=H(),t=J(),n=a(!1);function l(e,a){s.push({path:"/pages/user/doc",query:{title:e,key:a}})}return o({check:function(){return n.value||t.showToast("请先勾选同意后再进行登录"),n.value}}),(e,a)=>{const o=_,s=y,t=u(p("cl-checkbox"),Q);return d(),m(t,{size:34,modelValue:n.value,"onUpdate:modelValue":a[2]||(a[2]=e=>n.value=e),round:""},{default:f((()=>[h(s,{class:"agree-btn"},{default:f((()=>[g(" 已阅读并同意 "),h(o,{onClick:a[0]||(a[0]=v((e=>l("用户协议","userAgreement")),["stop"]))},{default:f((()=>[g("用户协议")])),_:1}),g(" 和 "),h(o,{onClick:a[1]||(a[1]=v((e=>l("隐私政策","privacyPolicy")),["stop"]))},{default:f((()=>[g("隐私政策")])),_:1})])),_:1})])),_:1},8,["modelValue"])}}}),[["__scopeId","data-v-dca0435a"]]),se=Y(c({__name:"login",setup(e){const{service:o,router:t,refs:n,setRefs:r,storage:i,upload:c}=H(),{user:v}=b(),Y=w(),Q=J(),se=ae(),te=a(!1),ne=a(i.get("phone")||""),le=a(""),re=a(),ie=a([{label:"通过手机登录",value:"phone",icon:"/pages/user/static/icon/phone.png",hidden:!1},{label:"通过微信登录",value:"wx",icon:"/pages/user/static/icon/wx.png",hidden:!0}]),ce=k((()=>{var e;let a=ee(ie.value);return se.isWxBrowser()&&(a[1].hidden=!1),a=a.filter((e=>!e.hidden)),re.value||(re.value=null==(e=a[0])?void 0:e.value),a.filter((e=>e.value!=re.value))}));async function ue(e,a){le.value=e,o.user.login[e](a).then((async e=>{v.setToken(e),await v.get(),ge.check()})).catch((e=>{Q.showTips(e.message),se.getCode()}))}function pe(){t.nextLogin(le.value)}function de(e){e?fe((()=>{n.smsBtn.open()})):(i.set("phone",ne.value),t.push({path:"/pages/user/captcha",query:{phone:ne.value}}))}function me(){fe((async()=>{se.mpAuth()}))}function fe(e){n.agreeBtn.check()&&e()}const he=x({error:"",check(){},login(){T({provider:"univerify",univerifyStyle:{authButton:{normalColor:"#6b69f8",highlightColor:"#6b69f8",disabledColor:"#73aaf5",textColor:"#ffffff",title:"一键登录",borderRadius:"12px"},privacyTerms:{defaultCheckBoxState:!0,textColor:"#BBBBBB",termsColor:"#5496E3",prefix:"我已阅读并同意",suffix:"并使用本机号码登录",privacyItems:[{url:`${l.baseUrl}/app/base/comm/html?key=userAgreement`,title:"用户协议"},{url:`${l.baseUrl}/app/base/comm/html?key=privacyPolicy`,title:"隐私政策"}]}},async success(e){await ue("uniPhone",{appId:$.appid,...e.authResult}),uni.closeAuthView()},fail(){he.error&&Q.showToast(he.error)}})}});he.check();const ge=x({visible:!1,form:{avatarUrl:"",nickName:""},check(){var e;"mini"==le.value&&"微信用户"==(null==(e=v.info)?void 0:e.nickName)?ge.open():pe()},open(){ge.visible=!0},close(){ge.visible=!1},onClose(){pe()},uploadAvatar(e){c({path:e.detail.avatarUrl}).then((e=>{ge.form.avatarUrl=e})).catch((e=>{Q.showToast(e.message)}))},save:()=>ge.form.avatarUrl?ge.form.nickName?(v.update(ge.form),void ge.close()):Q.showToast("请输入昵称"):Q.showToast("请上传头像")});return s((()=>{se.mpLogin().then((async e=>{e&&(Q.showLoading(),await ue("mp",{code:e}),Q.hideLoading())}))})),(e,a)=>{const o=u(p("cl-topbar"),q),s=I,t=_,n=y,l=u(p("cl-input"),D),i=u(p("cl-button"),N),c=u(p("cl-text"),X),v=u(p("cl-divider"),F),b=u(p("cl-avatar"),O),w=L,k=u(p("cl-list-item"),E),x=S,T=u(p("cl-list"),Z),$=u(p("cl-popup"),W),H=u(p("cl-page"),M);return d(),m(H,{"background-color":"#fff"},{default:f((()=>[h(o,{border:!1,"background-color":"transparent"}),h(n,{class:"page-login"},{default:f((()=>[h(n,{class:"logo"},{default:f((()=>[h(s,{src:G,mode:"aspectFill"}),h(t,null,{default:f((()=>[g(C(j(Y).info.name),1)])),_:1})])),_:1}),P("div",{class:"container"},[h(n,{class:B(["mode",[`is-${re.value}`]])},{default:f((()=>["phone"==re.value?(d(),A(U,{key:0},[h(t,{class:"label"},{default:f((()=>[g("手机号登录")])),_:1}),h(n,{class:"phone"},{default:f((()=>[h(t,null,{default:f((()=>[g("+86")])),_:1}),h(l,{modelValue:ne.value,"onUpdate:modelValue":a[0]||(a[0]=e=>ne.value=e),type:"number",placeholder:"请填写手机号码",border:!1,maxlength:11,"font-size":30,"background-color":"transparent"},null,8,["modelValue"])])),_:1}),h(K,{ref:j(r)("smsBtn"),phone:ne.value,onSuccess:a[1]||(a[1]=e=>de(!1))},{default:f((({disabled:e,btnText:a})=>[h(i,{custom:"",type:"primary",height:90,"font-size":30,disabled:e,onClick:de},{default:f((()=>[g(C(a),1)])),_:2},1032,["disabled"])])),_:1},8,["phone"])],64)):"wx"==re.value?(d(),m(i,{key:1,custom:"",type:"primary",height:90,"font-size":30,loading:te.value,onClick:me},{default:f((()=>[g(" 微信一键登录 ")])),_:1},8,["loading"])):V("",!0),h(n,{class:"agree"},{default:f((()=>[h(oe,{ref:j(r)("agreeBtn")},null,512)])),_:1})])),_:1},8,["class"])]),j(R)(ce.value)?V("",!0):(d(),m(n,{key:0,class:"other"},{default:f((()=>[h(v,{width:"400rpx","background-color":"#ffffff"},{default:f((()=>[h(c,{color:"#ccc",value:"其他登录方式"})])),_:1}),h(n,{class:"platform"},{default:f((()=>[(d(!0),A(U,null,z(ce.value,((e,a)=>(d(),m(n,{class:"platform__item",key:a,onClick:a=>function(e){e.onClick?e.onClick():re.value=e.value}(e)},{default:f((()=>[e.icon?(d(),m(s,{key:0,src:e.icon,mode:"aspectFit"},null,8,["src"])):V("",!0),h(t,null,{default:f((()=>[g(C(e.label),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}))])),_:1}),h($,{modelValue:ge.visible,"onUpdate:modelValue":a[3]||(a[3]=e=>ge.visible=e),direction:"bottom","border-radius":[32,32,0,0],"show-close-btn":"",onClose:ge.onClose},{default:f((()=>[P("div",{class:"edit-popup"},[h(c,{block:"",bold:"",size:32},{default:f((()=>[g("获取你的头像、昵称")])),_:1}),h(c,{block:"",margin:[24,0,50,0],color:"info"},{default:f((()=>[g(" 用于向用户提供有辨识度的界面 ")])),_:1}),h(T,{margin:[0,-12,60,-12],border:!1},{default:f((()=>[h(k,{label:"头像","arrow-icon":!1},{default:f((()=>[h(w,{class:"avatar","open-type":"chooseAvatar",onChooseavatar:ge.uploadAvatar},{default:f((()=>[h(b,{round:"",size:80,src:ge.form.avatarUrl,margin:[0,1,0,0]},null,8,["src"])])),_:1},8,["onChooseavatar"])])),_:1}),h(k,{label:"昵称","arrow-icon":!1},{default:f((()=>[h(x,{class:"name",modelValue:ge.form.nickName,"onUpdate:modelValue":a[2]||(a[2]=e=>ge.form.nickName=e),type:"nickname",placeholder:"请填写昵称、限16个字符或汉字",maxlength:"16"},null,8,["modelValue"])])),_:1})])),_:1}),h(i,{fill:"",type:"primary",height:90,"font-size":30,onClick:ge.save},{default:f((()=>[g(" 保存 ")])),_:1},8,["onClick"])])])),_:1},8,["modelValue","onClose"])])),_:1})}}}),[["__scopeId","data-v-86a15ece"]]);export{se as default};
