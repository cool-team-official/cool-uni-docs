import{P as e,_ as l}from"./cl-select-inner.DHFL-QdW.js";import{d as o,f as s,c as a,A as t,aa as c,ab as i,aF as r,a7 as n,k as p,l as u,o as d,v as f,a as m,w as v,r as h,p as _,G as b,b as g,F as k,x,n as w,q as y,t as C,aC as R,aD as $,i as j,y as A,ad as H}from"./index-BvXgjcLf.js";import{_ as O}from"./cl-empty.CF4tbDTT.js";import{p as B,i as F,b as S,c as V}from"./cl-page.ArvafLTY.js";import{a as q,_ as I}from"./_plugin-vue_export-helper.DloEWgbh.js";const N=I(o({name:"cl-select-popup",props:{...e,modelValue:[String,Number,Array],title:String,scrollerHeight:[String,Number],scrollerMaxHeight:{type:[String,Number],default:600},options:{type:Array,default:()=>[]},multiple:Boolean,showPicker:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0},required:Boolean},emits:["update:modelValue","change","confirm","opened","close","closed"],setup(e,{emit:l}){const{refs:o,setRefs:p}=q(),u=s([]),d=s([]),f=a((()=>u.value.map((l=>{var o;return null==(o=e.options.find((e=>e.value==l)))?void 0:o.label})).join("、"))),m=t({stop:null,view:"",clear(){var e;null==(e=m.stop)||e.call(m),m.view=""},watch(){m.stop=c((()=>[u.value,e.options]),(()=>{F(u.value)||F(e.options)||i((()=>{var e;m.view=`item-${r(u.value)}`,null==(e=m.stop)||e.call(m)}))}),{immediate:!0,deep:!0})}});function v(){var e;null==(e=o.popup)||e.close()}return c((()=>e.modelValue),(e=>{n(e)?u.value=[...e]:u.value=void 0===e?[]:[e],d.value=u.value}),{deep:!0,immediate:!0}),{refs:o,setRefs:p,checked:u,selection:d,text:f,scroller:m,open:function(){var e;null==(e=o.popup)||e.open(),m.watch(),d.value=[...u.value]},onOpened:function(){l("opened")},close:v,onClose:function(){m.clear(),l("close")},onClosed:function(){l("closed")},confirm:function(){const o=e.multiple?d.value:d.value[0];l("update:modelValue",o),l("change",o),l("confirm",o),v()},check:function(l){const o=d.value.indexOf(l);e.multiple?o>=0?d.value.splice(o,1):d.value.push(l):d.value=o>=0?[]:[l]},isActive:function(e){return d.value.includes(e)},parseRpx:B}}}),[["render",function(e,o,s,a,t,c){const i=p(u("cl-select-inner"),l),r=j,n=A,B=p(u("cl-empty"),O),F=H,q=p(u("cl-button"),S),I=p(u("cl-popup"),V);return d(),f(k,null,[e.showPicker?(d(),m(r,{key:0,class:"cl-select-popup",onClick:e.open},{default:v((()=>[h(e.$slots,"default",{label:e.text,value:e.checked},(()=>[_(i,{height:e.height,placeholder:e.placeholder,disabled:e.disabled,border:e.border,round:e.round,backgroundColor:e.backgroundColor,borderRadius:e.borderRadius,arrowIcon:e.arrowIcon,padding:e.padding,text:e.text},null,8,["height","placeholder","disabled","border","round","backgroundColor","borderRadius","arrowIcon","padding","text"])]))])),_:3},8,["onClick"])):b("",!0),_(I,{ref:e.setRefs("popup"),padding:0,title:e.title,direction:"bottom","border-radius":"24rpx 24rpx 0 0","show-close-btn":"",onOpened:e.onOpened,onClose:e.onClose,onClosed:e.onClosed},{default:v((()=>[_(r,{class:"cl-select-popup__wrap"},{default:v((()=>[_(F,{class:"cl-select-popup__container",ref:e.setRefs("scroller"),"scroll-y":"","scroll-into-view":e.scroller.view,style:g({height:e.parseRpx(e.scrollerHeight),maxHeight:e.parseRpx(e.scrollerHeight||e.scrollerMaxHeight)})},{default:v((()=>[h(e.$slots,"list",{},(()=>[_(r,{class:"cl-select-popup__list"},{default:v((()=>[(d(!0),f(k,null,x(e.options,((l,o)=>(d(),m(r,{class:w(["cl-select-popup__item",{"is-active":e.isActive(l.value)}]),key:o,id:`item-${l.value}`,onClick:o=>e.check(l.value)},{default:v((()=>[h(e.$slots,"item",{item:l,active:e.isActive(l.value),selection:e.selection},(()=>[y(C(l.label)+" ",1),_(n,{class:"is-check cl-icon-check"})]))])),_:2},1032,["class","id","onClick"])))),128))])),_:3}),R(_(r,{class:"cl-select-popup__empty"},{default:v((()=>[_(B,{fixed:!1})])),_:1},512),[[$,0==e.options.length]])]))])),_:3},8,["scroll-into-view","style"]),e.showFooter?(d(),m(r,{key:0,class:"cl-select-popup__footer"},{default:v((()=>[h(e.$slots,"confirm",{},(()=>[_(q,{custom:"",type:"primary",disabled:!!e.required&&0==e.selection.length,onClick:e.confirm},{default:v((()=>[y(" 确定 ")])),_:1},8,["disabled","onClick"])]))])),_:3})):b("",!0)])),_:3})])),_:3},8,["title","onOpened","onClose","onClosed"])],64)}]]);export{N as _};
