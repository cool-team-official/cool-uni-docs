import{d as e,f as a,aa as o,k as l,l as t,o as r,a as n,w as s,r as c,G as d,p,b as u,q as i,t as h,i as f}from"./index-CYp4B_QH.js";import{p as m,_ as g,b as y,a as b}from"./cl-page.CV4Clf1q.js";import{_}from"./cl-input.BQlHe_GP.js";import{_ as x}from"./_plugin-vue_export-helper.C5tT7wvf.js";import{_ as B}from"./cl-card.BK20rd0V.js";import{_ as C}from"./cl-avatar.CSnfTPt3.js";import"./cl-text.0zcdGoXY.js";const S=x(e({name:"cl-search",props:{modelValue:{type:String,default:""},type:{type:String,default:"text"},padding:{type:[String,Number],default:"15rpx 20rpx"},height:Number,password:Boolean,placeholder:String,placeholderStyle:String,placeholderClass:String,disabled:Boolean,focus:Boolean,clearable:{type:Boolean,default:!0},maxlength:{type:Number,default:140},cursorSpacing:{type:Number,default:0},confirmType:{type:String,default:"done"},confirmHold:Boolean,adjustPosition:{type:Boolean,default:!0},holdKeyboard:{type:Boolean,default:!1},searchIcon:{type:String,default:"cl-icon-search"},showSearchButton:{type:Boolean,default:!0},searchButtonText:{type:String,default:"搜索"}},emits:["update:modelValue","focus","blur","confirm","keyboardheightchange","search"],setup(e,{emit:l}){const t=a("");o((()=>e.modelValue),(e=>{t.value=e}),{immediate:!0});const r=a(!1);function n(){l("search",t.value)}return o((()=>e.focus),(e=>{r.value=e}),{immediate:!0}),{value:t,isFocus:r,onChange:function(e){l("update:modelValue",e)},onFocus:function(e){l("focus",e)},onBlur:function(e){l("blur",e)},onConfirm:function(e){l("confirm",e),n()},onClear:function(){n()},onKeyboardheightchange:function(e){l("keyboardheightchange",e)},search:n,parseRpx:m}}}),[["render",function(e,a,o,m,b,x){const B=f,C=l(t("cl-icon"),g),S=l(t("cl-input"),_),j=l(t("cl-button"),y);return r(),n(B,{class:"cl-search",style:u({padding:e.parseRpx(e.padding)})},{default:s((()=>[e.$slots.prepend?(r(),n(B,{key:0,class:"cl-search__prepend"},{default:s((()=>[c(e.$slots,"prepend")])),_:3})):d("",!0),p(B,{class:"cl-search__input",style:u({height:e.parseRpx(e.height)})},{default:s((()=>[p(B,{class:"cl-search__inner"},{default:s((()=>[p(S,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=a=>e.value=a),height:e.height,type:e.type,placeholder:e.placeholder,disabled:e.disabled,clearable:e.clearable,focus:e.isFocus,"placeholder-style":e.placeholderStyle,"placeholder-class":e.placeholderClass,maxlength:e.maxlength,"cursor-spacing":e.cursorSpacing,"confirm-type":e.confirmType,"confirm-hold":e.confirmHold,"adjust-position":e.adjustPosition,holdKeyboard:e.holdKeyboard,round:"",onChange:e.onChange,onFocus:e.onFocus,onBlur:e.onBlur,onConfirm:e.onConfirm,onClear:e.onClear,onKeyboardheightchange:e.onKeyboardheightchange},{prepend:s((()=>[p(C,{color:"info",name:"search"})])),_:1},8,["modelValue","height","type","placeholder","disabled","clearable","focus","placeholder-style","placeholder-class","maxlength","cursor-spacing","confirm-type","confirm-hold","adjust-position","holdKeyboard","onChange","onFocus","onBlur","onConfirm","onClear","onKeyboardheightchange"])])),_:1}),p(B,{class:"cl-search__btn"},{default:s((()=>[e.showSearchButton?(r(),n(j,{key:0,type:"primary",round:"",border:!1,onClick:e.search},{default:s((()=>[i(h(e.searchButtonText),1)])),_:1},8,["onClick"])):d("",!0)])),_:1})])),_:1},8,["style"]),e.$slots.append?(r(),n(B,{key:1,class:"cl-search__append"},{default:s((()=>[c(e.$slots,"append")])),_:3})):d("",!0)])),_:3},8,["style"])}]]);const j=x({},[["render",function(e,a){const o=l(t("cl-search"),S),c=l(t("cl-card"),B),d=l(t("cl-avatar"),C),u=l(t("cl-page"),b);return r(),n(u,{padding:20},{default:s((()=>[p(c,{label:"基础用法"},{default:s((()=>[p(o,{placeholder:"搜索图片、文章、链接"})])),_:1}),p(c,{label:"不显示按钮"},{default:s((()=>[p(o,{placeholder:"搜索图片、文章、链接","show-search-button":!1})])),_:1}),p(c,{label:"追加内容"},{default:s((()=>[p(o,{placeholder:"搜索图片、文章、链接"},{append:s((()=>[p(d,{size:60,src:""})])),_:1})])),_:1})])),_:1})}]]);export{j as default};
