import{d as e,f as a,aa as o,c as l,aL as n,o as s,a as t,w as r,G as c,r as d,p as u,aC as i,aD as p,n as f,b as h,i as y,a2 as m,y as b}from"./index-BsPE-n5_.js";import{k as g,u as _,j as v}from"./cl-page.D-7WxXOa.js";import{_ as B}from"./_plugin-vue_export-helper.B5Vkt9du.js";const S=B(e({name:"cl-input",props:{modelValue:{type:String,default:""},type:{type:String,default:"text"},password:Boolean,placeholder:{type:String,default:"请填写"},clearable:{type:Boolean,default:!0},placeholderStyle:Object,placeholderClass:String,readonly:Boolean,disabled:Boolean,round:Boolean,border:{type:Boolean,default:!0},focus:Boolean,maxlength:{type:[Number,String],default:140},cursorSpacing:{type:Number,default:0},confirmType:{type:String,default:"done"},confirmHold:Boolean,adjustPosition:{type:Boolean,default:!0},holdKeyboard:{type:Boolean,default:!1}},setup(e,{emit:s}){const{tap:t}=v(s),r=g(),c=a("");o((()=>e.modelValue),(e=>{c.value=e}),{immediate:!0});const d=a(e.focus),u=l((()=>r.disabled.value||e.disabled)),i=l((()=>{const a={lineHeight:1,color:"#a8abb2",...e.placeholderStyle};return n(a).map((e=>`${e}:${a[e]};`)).join("")}));function p(){s("search",c.value)}return{value:c,isDisabled:u,isFocus:d,click:function(e){u.value||t(e)},onInput:function(){s("update:modelValue",c.value),s("change",c.value),d.value=Boolean(c.value)},onFocus:function(e){s("focus",e),c.value&&(d.value=!0)},onBlur:function(e){s("blur",e),setTimeout((()=>{d.value=!1}),0)},onConfirm:function(e){s("confirm",e),p()},search:p,clear:function(){c.value="",s("update:modelValue",""),s("change",""),s("clear")},onKeyboardheightchange:function(e){s("keyboardheightchange",e)},placeholderStyle:i,..._({padding:"0 20rpx",fontSize:26})}}}),[["render",function(e,a,o,l,n,g){const _=y,v=m,B=b;return s(),t(_,{class:f(["cl-input",[{"is-round":e.round,"is-border":e.border,"is-disabled":e.isDisabled,"is-focus":e.isFocus}]]),style:h([e.baseStyle]),onClick:e.click},{default:r((()=>[e.readonly?(s(),t(_,{key:0,class:"cl-input__readonly"})):c("",!0),e.$slots.prepend?(s(),t(_,{key:1,class:"cl-input__prepend"},{default:r((()=>[d(e.$slots,"prepend")])),_:3})):c("",!0),u(_,{class:"cl-input__wrap"},{default:r((()=>[u(v,{class:"cl-input__inner",modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=a=>e.value=a),type:e.type,password:e.password,placeholder:e.placeholder,disabled:e.isDisabled,focus:e.focus,"placeholder-style":e.placeholderStyle,"placeholder-class":e.placeholderClass,maxlength:e.maxlength,"cursor-spacing":e.cursorSpacing,"confirm-type":e.confirmType,"confirm-hold":e.confirmHold,"adjust-position":e.adjustPosition,holdKeyboard:e.holdKeyboard,onInput:e.onInput,onFocus:e.onFocus,onBlur:e.onBlur,onConfirm:e.onConfirm,onKeyboardheightchange:e.onKeyboardheightchange},null,8,["modelValue","type","password","placeholder","disabled","focus","placeholder-style","placeholder-class","maxlength","cursor-spacing","confirm-type","confirm-hold","adjust-position","holdKeyboard","onInput","onFocus","onBlur","onConfirm","onKeyboardheightchange"]),i(u(_,{class:"cl-input__clear",onClick:e.clear},{default:r((()=>[u(B,{class:"cl-icon-close-border"})])),_:1},8,["onClick"]),[[p,e.isFocus&&e.clearable]])])),_:1}),e.$slots.append?(s(),t(_,{key:2,class:"cl-input__append"},{default:r((()=>[d(e.$slots,"append")])),_:3})):c("",!0)])),_:3},8,["class","style","onClick"])}]]);export{S as _};
