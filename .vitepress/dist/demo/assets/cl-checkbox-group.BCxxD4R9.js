import{d as e,o,a as l,w as a,r as s,n,i as t}from"./index-BsPE-n5_.js";import{c as r}from"./cloneDeep.BlVYHWYK.js";import{_ as u}from"./_plugin-vue_export-helper.B5Vkt9du.js";const d=u(e({name:"cl-checkbox-group",props:{modelValue:{type:Array,default:()=>[]},border:Boolean,bg:Boolean,disabled:Boolean,round:Boolean,fill:Boolean,text:Boolean,size:[String,Number]},emits:["update:modelValue","change"],setup:(e,{emit:o})=>({onChange:function(l){const a=e.modelValue.findIndex((e=>e==l));let s=r(e.modelValue);a>=0?s.splice(a,1):s.push(l),o("update:modelValue",s),o("change",s)}})}),[["render",function(e,r,u,d,i,c){const p=t;return o(),l(p,{class:n(["cl-checkbox-group",{"is-fill":e.fill}])},{default:a((()=>[s(e.$slots,"default")])),_:3},8,["class"])}]]);export{d as _};
