import{_ as s}from"./cl-topbar.B1In29WM.js";import{d as e,z as a,f as o,A as t,j as l,k as n,l as r,o as p,a as c,w as d,p as u,q as i,t as m,s as f,y as h,i as _}from"./index-BvXgjcLf.js";import{_ as g}from"./cl-captcha.D3HQU2zH.js";import{b,a as j}from"./cl-page.ArvafLTY.js";import{u as C,_ as v}from"./_plugin-vue_export-helper.DloEWgbh.js";import{u as x}from"./index.Dg3169dY.js";import{S as y}from"./sms-btn.eOt2kpye.js";import"./cl-text.C-vDcahG.js";import"./cl-input.CoHubX3q.js";const k=v(e({__name:"captcha",setup(e){const{service:v,router:k,refs:w,setRefs:z}=C(),{user:V}=a(),q=x(),B=o(!1),T=t({smsCode:"",phone:""});function A(){B.value=!0,v.user.login.phone(T).then((async s=>{V.setToken(s),await V.get(),k.nextLogin()})).catch((s=>{q.showTips(s.message||"登录失效，请重试~"),B.value=!1,T.smsCode=""}))}return l((()=>{T.phone=k.query.phone||"",w.smsBtn.startCountdown()})),(e,a)=>{const o=n(r("cl-topbar"),s),t=h,l=n(r("cl-captcha"),g),C=_,v=n(r("cl-button"),b),x=n(r("cl-page"),j);return p(),c(x,{"background-color":"#fff"},{default:d((()=>[u(C,{class:"page-captcha"},{default:d((()=>[u(o,{border:!1}),u(C,{class:"container"},{default:d((()=>[u(t,{class:"label"},{default:d((()=>[i("输入验证码")])),_:1}),u(t,{class:"tips"},{default:d((()=>[i("已发送至 +86 "+m(T.phone),1)])),_:1}),u(C,{class:"code"},{default:d((()=>[u(l,{focus:"",modelValue:T.smsCode,"onUpdate:modelValue":a[0]||(a[0]=s=>T.smsCode=s),length:4,gutter:26,onDone:A},null,8,["modelValue"])])),_:1}),u(v,{type:"primary",disabled:4!==T.smsCode.length,loading:B.value,fill:"",height:90,"font-size":30,onClick:A},{default:d((()=>[i(" 确定 ")])),_:1},8,["disabled","loading"]),u(C,{class:"send"},{default:d((()=>[u(y,{size:"small",border:!1,phone:T.phone,ref:f(z)("smsBtn")},null,8,["phone"])])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-6387bda1"]]);export{k as default};
