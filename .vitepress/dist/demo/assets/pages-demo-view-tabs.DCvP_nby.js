import{d as l,r as e,x as a,p as t,a6 as o,a0 as s,a7 as u,P as n,a9 as r,a2 as i,a as c,b as d,c as f,e as b,w as p,f as v,J as m,i as _,F as h,j as g,z as y,A as w,g as x,t as k,R as V,k as C,l as j,aa as B,h as D}from"./index-BXs9N0aO.js";import{p as L,_ as I,a as R}from"./cl-page.D0l32468.js";import{_ as S,u as U}from"./_plugin-vue_export-helper.D4XvEQHf.js";import{_ as A}from"./cl-card.CShwl3e9.js";import{_ as N}from"./cl-text.FIltvNqU.js";const $=S(l({name:"cl-tabs",props:{modelValue:[String,Number],height:{type:[String,Number],default:80},list:{type:Array,default:[]},loop:{type:Boolean,default:!0},fill:Boolean,justify:{type:String,default:"start"},border:{type:Boolean,default:!0},gutter:{type:Number,default:30},color:{type:String,default:""},unColor:{type:String,default:""},backgroundColor:{type:String,default:"#fff"},showDropdown:Boolean,showLine:{type:Boolean,default:!0},checkable:Boolean,disabled:Boolean},emits:["update:modelValue","change"],setup(l,{emit:c}){const{proxy:d}=i(),f=e(),b=e(0),p=e(0),v=e(0),m=e(375),_=a((()=>l.list));function h(){u((()=>{n().in(d).select(".cl-tabs").boundingClientRect((l=>{v.value=l.left,m.value=l.width,u((()=>{n().in(d).selectAll(".cl-tabs__bar-item").fields({rect:!0,size:!0},(()=>{})).exec((l=>{x.value=l[0],k()}))}))})).exec()}))}const g=t({visible:!1,height:"200rpx",timer:null});async function y(e){if(l.disabled)return!1;let{value:a}=_.value[e];l.checkable&&a==f.value&&(a=void 0),c("update:modelValue",a),c("change",a),f.value=a}function w(){return _.value.findIndex((l=>l.value==f.value))}const x=e();function k(){x.value&&u((()=>{let l=x.value[w()];if(l){let e=l.left-(m.value-l.width)/2-v.value;e<0&&(e=0),p.value=e,b.value=l.left+l.width/2-r(16)-v.value}}))}return o((()=>l.modelValue),(l=>{f.value=l,k()}),{immediate:!0}),o((()=>l.list),h),s((()=>{h()})),{current:f,scrollLeft:p,lineLeft:b,tabs:_,dropdown:g,change:y,prev:function(){let e=w();y(e<=0?l.loop?_.value.length-1:0:e-1)},next:function(){let e=w();y(e>=_.value.length-1?l.loop?0:_.value.length-1:e+1)},openDropdown:function(){if(g.visible=!g.visible,clearTimeout(g.timer),g.visible){const l=()=>{n().in(d).select(".cl-tabs__dropdown-box").boundingClientRect((l=>{g.height=l.height+"px"})).exec()};g.timer=setTimeout(l,300)}},closeDropdown:function(){g.visible=!1},parseRpx:L}}}),[["render",function(l,e,a,t,o,s){const u=C,n=j,r=B,i=c(d("cl-icon"),I);return f(),b(n,{class:y(["cl-tabs",[{"is-content":l.$slots.default,"is-fill":l.fill,"is-border":l.border,"is-dropdown":l.showDropdown,"is-checkable":l.checkable}]]),style:m({backgroundColor:l.backgroundColor})},{default:p((()=>[v(n,{class:"cl-tabs__header"},{default:p((()=>[v(r,{class:"cl-tabs__bar","scroll-with-animation":"","scroll-x":"","scroll-left":l.scrollLeft,style:m({height:l.parseRpx(l.height)})},{default:p((()=>[v(n,{class:"cl-tabs__bar-box",style:m({"justify-content":l.justify})},{default:p((()=>[(f(!0),_(h,null,g(l.tabs,((e,a)=>(f(),b(n,{class:y(["cl-tabs__bar-item",{"is-active":l.current===e.value}]),key:a,style:m({color:l.current===e.value?l.color:l.unColor,padding:`0 ${l.gutter}rpx`}),onClick:e=>l.change(a)},{default:p((()=>[e.prefixIcon?(f(),b(u,{key:0,class:y(["cl-tabs__icon is-prefix",[e.prefixIcon]])},null,8,["class"])):w("",!0),v(u,{class:"cl-tabs__label"},{default:p((()=>[x(k(e.label),1)])),_:2},1024),e.suffixIcon?(f(),b(u,{key:1,class:y(["cl-tabs__icon is-suffix",[e.suffixIcon]])},null,8,["class"])):w("",!0)])),_:2},1032,["style","class","onClick"])))),128)),l.lineLeft>0&&l.showLine?(f(),b(n,{key:0,class:"cl-tabs__line",style:m({"background-color":l.color,left:l.lineLeft+"px"})},null,8,["style"])):w("",!0)])),_:1},8,["style"])])),_:1},8,["scroll-left","style"]),l.showDropdown?(f(),b(n,{key:0,class:"cl-tabs__dropdown",onClick:l.openDropdown},{default:p((()=>[v(i,{name:""+(l.dropdown.visible?"arrow-top":"arrow-bottom")},null,8,["name"])])),_:1},8,["onClick"])):w("",!0),v(n,{class:"cl-tabs__dropdown-box",style:m({maxHeight:l.dropdown.visible?l.dropdown.height:"0"})},{default:p((()=>[V(l.$slots,"dropdown")])),_:3},8,["style"])])),_:3})])),_:3},8,["class","style"])}]]),z=S(l({__name:"tabs",setup(l){const{refs:a,setRefs:t}=U(),o=e(1),s=e([{label:"百亿补贴",value:1},{label:"包邮",value:2},{label:"限时达",value:3},{label:"同城速配",value:4},{label:"货到付款",value:5},{label:"分期免息",value:6},{label:"配送全球",value:7},{label:"促销",value:8}]),u=e([{label:"盒装",value:1},{label:"纸包装",value:2},{label:"袋装",value:3},{label:"罐装",value:4}]);return(l,e)=>{const n=c(d("cl-tabs"),$),r=c(d("cl-card"),A),i=c(d("cl-text"),N),m=j,y=c(d("cl-page"),R);return f(),b(y,{padding:20},{default:p((()=>[v(r,{label:"基础用法"},{default:p((()=>[v(n,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l),list:s.value},null,8,["modelValue","list"])])),_:1}),v(r,{label:"居中"},{default:p((()=>[v(n,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value=l),list:u.value,justify:"center"},null,8,["modelValue","list"])])),_:1}),v(r,{label:"填充"},{default:p((()=>[v(n,{modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value=l),list:u.value,fill:""},null,8,["modelValue","list"])])),_:1}),v(r,{label:"下拉框"},{default:p((()=>[v(n,{modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=l=>o.value=l),border:!1,list:s.value,"show-dropdown":"",ref:D(t)("tabs")},{dropdown:p((()=>[v(m,{class:"dropdown"},{default:p((()=>[(f(!0),_(h,null,g(s.value,(l=>(f(),b(i,{value:l.label,key:l.value,margin:20,color:o.value===l.value?"primary":"",onClick:e=>{return t=l.value,o.value=t,void a.tabs.closeDropdown();var t}},null,8,["value","color","onClick"])))),128))])),_:1})])),_:1},8,["modelValue","list"])])),_:1}),v(r,{label:"自定义"},{default:p((()=>[v(n,{modelValue:o.value,"onUpdate:modelValue":e[4]||(e[4]=l=>o.value=l),list:s.value,border:!1,color:"red","background-color":"f6f7fa","show-line":!1},null,8,["modelValue","list"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-c2151b3b"]]);export{z as default};