import{d as e,f as a,aa as l,o,a as t,w as n,p as u,ac as r,i as s,k as c,l as d}from"./index-BsPE-n5_.js";import{_ as i}from"./_plugin-vue_export-helper.B5Vkt9du.js";import{_ as p}from"./cl-card.CcFW5yJQ.js";import{a as m}from"./cl-page.D-7WxXOa.js";import"./cl-text.Dmi3_oh8.js";const f=i(e({name:"cl-slider",props:{modelValue:{type:Number},disabled:{type:Boolean,default:null},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},activeColor:{type:String,default:"#409eff"},backgroundColor:{type:String,default:"#e9e9e9"},blockSize:{type:Number,default:15},blockColor:{type:String,default:"#ffffff"},showValue:{type:Boolean,default:!1}},emits:["update:modelValue","change","changing"],setup(e,{emit:o}){const t=a(0);return l((()=>e.modelValue),(e=>{t.value=e}),{immediate:!0}),{value:t,onChange:function(e){o("update:modelValue",e.detail.value),o("change",e)},onChanging:function(e){o("update:modelValue",e.detail.value),o("changing",e)}}}}),[["render",function(e,a,l,c,d,i){const p=r,m=s;return o(),t(m,{class:"cl-slider"},{default:n((()=>[u(p,{value:e.value,min:e.min,max:e.max,step:e.step,"active-color":e.activeColor,"background-color":e.backgroundColor,"block-size":e.blockSize,"block-color":e.blockColor,"show-value":e.showValue,disabled:e.disabled,onChange:e.onChange,onChanging:e.onChanging},null,8,["value","min","max","step","active-color","background-color","block-size","block-color","show-value","disabled","onChange","onChanging"])])),_:1})}]]);const g=i({},[["render",function(e,a){const l=c(d("cl-slider"),f),r=c(d("cl-card"),p),s=c(d("cl-page"),m);return o(),t(s,{padding:20},{default:n((()=>[u(r,{label:"基础用法"},{default:n((()=>[u(l,{"show-value":""})])),_:1})])),_:1})}]]);export{g as default};
