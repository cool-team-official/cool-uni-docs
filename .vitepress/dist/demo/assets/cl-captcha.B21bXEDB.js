import{d as e,r as a,x as l,a6 as o,c as s,e as t,w as u,f as n,i as c,F as r,j as p,J as d,g as i,t as m,A as f,z as g,aK as h,k as _,l as b}from"./index-BXs9N0aO.js";import{p as v}from"./cl-page.D0l32468.js";import{_ as y}from"./_plugin-vue_export-helper.D4XvEQHf.js";const x=y(e({name:"cl-captcha",props:{modelValue:String,focus:Boolean,height:{type:[String,Number],default:140},len:{type:Number,default:4},gutter:{type:Number,default:20},border:Boolean,backgroundColor:{type:String,default:"#ebecee"}},emits:["update:modelValue","done"],setup(e,{emit:s}){const t=a(),u=a(e.focus),n=l((()=>new Array(e.len).fill(1)));return o((()=>e.modelValue),(e=>{t.value=e||""}),{immediate:!0}),{value:t,isFocus:u,list:n,parseRpx:v,onFocus:function(){u.value=!0},onBlur:function(){u.value=!1},onInput:function(a){const l=a.detail.value;s("update:modelValue",l),l.length===e.len&&s("done",l)}}}}),[["render",function(e,a,l,o,v,y){const x=h,F=_,V=b;return s(),t(V,{class:g(["cl-captcha",{"is-border":e.border}])},{default:u((()=>[n(x,{class:"cl-captcha__input",modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=a=>e.value=a),type:"number",focus:e.focus,maxlength:e.len,onFocus:e.onFocus,onBlur:e.onBlur,onInput:e.onInput},null,8,["modelValue","focus","maxlength","onFocus","onBlur","onInput"]),n(V,{class:"cl-captcha__code"},{default:u((()=>[(s(!0),c(r,null,p(e.list,((a,l)=>(s(),t(V,{class:"cl-captcha__item",style:d({height:e.parseRpx(e.height),margin:`0 ${e.parseRpx(e.gutter)}`,backgroundColor:e.backgroundColor}),key:l},{default:u((()=>[n(F,{class:"cl-captcha__value"},{default:u((()=>[i(m(e.value[l]),1)])),_:2},1024),e.value.length==l&&e.isFocus?(s(),t(V,{key:0,class:"cl-captcha__cursor"})):f("",!0)])),_:2},1032,["style"])))),128))])),_:1})])),_:1},8,["class"])}]]);export{x as _};