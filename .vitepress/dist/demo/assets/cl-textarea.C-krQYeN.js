import{d as e,f as o,aa as a,c as n,aL as l,o as t,a as s,w as u,p as r,q as i,t as d,G as c,n as h,b as f,bc as p,y as g,i as b}from"./index-BvXgjcLf.js";import{k as m,u as y}from"./cl-page.ArvafLTY.js";import{_ as B}from"./_plugin-vue_export-helper.DloEWgbh.js";const x=B(e({name:"cl-textarea",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:"请填写"},disabled:{type:Boolean,default:null},border:{type:Boolean,default:!0},count:Boolean,autoFocus:Boolean,focus:Boolean,placeholderStyle:Object,autoHeight:Boolean,fixed:Boolean,cursorSpacing:{type:Number,default:0},cursor:Number,showConfirmBar:{type:Boolean,default:!0},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},adjustPosition:{type:Boolean,default:!0},disableDefaultPadding:{type:Boolean,default:!0},holdKeyboard:Boolean,maxlength:{type:Number,default:150}},emits:["update:modelValue","change","clear","focus","blur","linechange","confirm","keyboardheightchange"],setup(e,{emit:t}){const{disabled:s}=m(),u=o("");a((()=>e.modelValue),(e=>{u.value=e}),{immediate:!0});const r=n((()=>s.value||e.disabled)),i=n((()=>{const o={lineHeight:1.2,color:"#a8abb2",...e.placeholderStyle};return l(o).map((e=>`${e}:${o[e]};`)).join("")}));return{value:u,isDisabled:r,placeholderStyle:i,onFocus:function(e){t("focus",e)},onBlur:function(e){t("blur",e)},onLinechange:function(e){t("linechange",e)},onInput:function(e){t("update:modelValue",e.detail.value)},onConfirm:function(e){t("confirm",e)},onKeyboardheightchange:function(e){t("keyboardheightchange",e)},...y({height:150})}}}),[["render",function(e,o,a,n,l,m){const y=p,B=g,x=b;return t(),s(x,{class:h(["cl-textarea",[{"is-disabled":e.isDisabled,"is-count":e.count,"is-border":e.border}]]),style:f([e.baseStyle])},{default:u((()=>[r(y,{class:"cl-textarea__inner",modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=o=>e.value=o),placeholder:e.placeholder,disabled:e.isDisabled,"auto-focus":e.autoFocus,focus:e.focus,"auto-height":e.autoHeight,fixed:e.fixed,"placeholder-style":e.placeholderStyle,"cursor-spacing":e.cursorSpacing,cursor:e.cursor,"show-confirm-bar":e.showConfirmBar,"selection-start":e.selectionStart,"selection-end":e.selectionEnd,"adjust-position":e.adjustPosition,"disable-default-padding":e.disableDefaultPadding,"hold-keyboard":e.holdKeyboard,maxlength:e.maxlength,onFocus:e.onFocus,onBlur:e.onBlur,onLinechange:e.onLinechange,onInput:e.onInput,onConfirm:e.onConfirm,onKeyboardheightchange:e.onKeyboardheightchange},null,8,["modelValue","placeholder","disabled","auto-focus","focus","auto-height","fixed","placeholder-style","cursor-spacing","cursor","show-confirm-bar","selection-start","selection-end","adjust-position","disable-default-padding","hold-keyboard","maxlength","onFocus","onBlur","onLinechange","onInput","onConfirm","onKeyboardheightchange"]),e.count?(t(),s(B,{key:0,class:"cl-textarea__count"},{default:u((()=>{var o;return[i(d((null==(o=e.value)?void 0:o.length)||0)+"/"+d(e.maxlength),1)]})),_:1})):c("",!0)])),_:1},8,["class","style"])}]]);export{x as _};
