import{k as e,i as a,_ as l,a as t}from"./cl-page.ArvafLTY.js";import{d as s,f as o,aa as r,c as u,k as c,l as i,o as n,a as d,w as m,v as f,F as p,x as v,p as _,b as x,q as y,t as b,G as g,i as C}from"./index-BvXgjcLf.js";import{g as h}from"./index.C2eWtKpK.js";import{_ as j}from"./_plugin-vue_export-helper.DloEWgbh.js";import{_ as k}from"./cl-card.fJE_TL2t.js";import"./cl-text.C-vDcahG.js";const w=j(s({name:"cl-rate",props:{modelValue:{type:Number,default:0},icon:{type:String,default:"cl-icon-favor-fill"},color:{type:[String,Array],default:""},voidColor:{type:String,default:"#C6D1DE"},size:{type:[Number,String],default:40},max:{type:Number,default:5},disabled:{type:Boolean,default:null},showText:{type:Boolean,default:null},texts:{type:Array,default:()=>[]}},setup(l,{emit:t}){const{disabled:s}=e(),c=o(0);r((()=>l.modelValue),(e=>{c.value=Number(e)}),{immediate:!0});const i=u((()=>a(l.texts)?c.value:l.texts[Math.ceil(c.value)-1])),n=u((()=>new Array(l.max).fill(1).map(((e,a)=>{const t=parseInt(String(c.value)),s=c.value-t;return{width:(c.value>a?t>a?100:100*s:0)+"%",color:h({value:c.value,color:l.color,max:l.max})}}))));return{value:c,list:n,text:i,onTap:function(e){if(s.value||l.disabled)return!1;c.value=e+1,t("update:modelValue",c.value),t("change",c.value)}}}}),[["render",function(e,a,t,s,o,r){const u=c(i("cl-icon"),l),h=C;return n(),d(h,{class:"cl-rate"},{default:m((()=>[(n(!0),f(p,null,v(e.list,((a,l)=>(n(),d(h,{class:"cl-rate__icon",key:l,onClick:a=>e.onTap(l)},{default:m((()=>[_(u,{"class-name":e.icon,size:e.size,color:e.voidColor},null,8,["class-name","size","color"]),_(h,{class:"cl-rate__icon-active",style:x({width:a.width})},{default:m((()=>[_(u,{"class-name":e.icon,size:e.size,color:a.color},null,8,["class-name","size","color"])])),_:2},1032,["style"])])),_:2},1032,["onClick"])))),128)),e.showText?(n(),d(h,{key:0,class:"cl-rate__text"},{default:m((()=>[y(b(e.text),1)])),_:1})):g("",!0)])),_:1})}]]);const z=j({},[["render",function(e,a){const l=c(i("cl-rate"),w),s=c(i("cl-card"),k),o=c(i("cl-page"),t);return n(),d(o,{padding:20},{default:m((()=>[_(s,{label:"基础用法"},{default:m((()=>[_(l,{"model-value":2.7})])),_:1}),_(s,{label:"禁用"},{default:m((()=>[_(l,{"model-value":2.7,disabled:""})])),_:1}),_(s,{label:"多色"},{default:m((()=>[_(l,{"model-value":2,color:["#F56C6C","#E6A23C","#67C23A"]})])),_:1}),_(s,{label:"其他图标"},{default:m((()=>[_(l,{"model-value":1,icon:"cl-icon-like"})])),_:1})])),_:1})}]]);export{z as default};
