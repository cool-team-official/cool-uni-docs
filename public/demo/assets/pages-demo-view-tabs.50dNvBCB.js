import{d as l,f as e,A as a,c as t,aa as o,a4 as s,ab as u,S as n,u as r,a6 as i,k as d,l as c,o as f,a as p,w as b,p as v,b as _,v as m,F as y,x as w,n as h,G as g,q as k,t as x,r as V,y as C,i as j,ad as B,s as D}from"./index-CYp4B_QH.js";import{p as L,_ as S,a as I}from"./cl-page.CV4Clf1q.js";import{_ as U,u as R}from"./_plugin-vue_export-helper.C5tT7wvf.js";import{_ as $}from"./cl-card.BK20rd0V.js";import{_ as A}from"./cl-tag.vUQfIQfD.js";import"./cl-text.0zcdGoXY.js";const N=U(l({name:"cl-tabs",props:{modelValue:[String,Number],height:{type:[String,Number],default:80},list:{type:Array,default:[]},loop:{type:Boolean,default:!0},fill:Boolean,justify:{type:String,default:"start"},border:{type:Boolean,default:!0},gutter:{type:Number,default:30},color:{type:String,default:""},unColor:{type:String,default:""},backgroundColor:{type:String,default:"#fff"},showDropdown:Boolean,showLine:{type:Boolean,default:!0},showslider:{type:Boolean,default:!1},checkable:Boolean,disabled:Boolean},emits:["update:modelValue","change"],setup(l,{emit:d}){const{proxy:c}=i(),f=e(),p=e(0),b=a({width:0,left:0}),v=e(0),_=e(0),m=e(375),y=t((()=>l.list));function w(){u((()=>{n().in(c).select(".cl-tabs").boundingClientRect((l=>{_.value=l.left,m.value=l.width,u((()=>{n().in(c).selectAll(".cl-tabs__bar-item").fields({rect:!0,size:!0},(()=>{})).exec((l=>{x.value=l[0],V()}))}))})).exec()}))}const h=a({visible:!1});async function g(e){if(l.disabled)return!1;let{value:a}=y.value[e];l.checkable&&a==f.value&&(a=void 0),d("update:modelValue",a),d("change",a),f.value=a}function k(){return y.value.findIndex((l=>l.value==f.value))}const x=e();function V(){x.value&&u((()=>{let l=x.value[k()];if(l){let e=l.left-(m.value-l.width)/2-_.value;e<0&&(e=0),v.value=e,p.value=l.left+l.width/2-r(16)-_.value,b.left=l.left-_.value,b.width=l.width}}))}return o((()=>l.modelValue),(l=>{f.value=l,V()}),{immediate:!0}),o((()=>l.list),w),s((()=>{w()})),{current:f,scrollLeft:v,lineLeft:p,slider:b,tabs:y,dropdown:h,getColor:function(e){return f.value!==e.value?l.unColor:l.color?l.color:l.showslider?"#fff":void 0},change:g,prev:function(){let e=k();g(e<=0?l.loop?y.value.length-1:0:e-1)},next:function(){let e=k();g(e>=y.value.length-1?l.loop?0:y.value.length-1:e+1)},openDropdown:function(){h.visible=!h.visible},closeDropdown:function(){h.visible=!1},parseRpx:L}}}),[["render",function(l,e,a,t,o,s){const u=C,n=j,r=B,i=d(c("cl-icon"),S);return f(),p(n,{class:h(["cl-tabs",[{"is-content":l.$slots.default,"is-fill":l.fill,"is-border":l.border,"is-dropdown":l.showDropdown,"is-checkable":l.checkable}]]),style:_({backgroundColor:l.backgroundColor})},{default:b((()=>[v(n,{class:"cl-tabs__inner"},{default:b((()=>[v(r,{class:"cl-tabs__bar","scroll-with-animation":"","scroll-x":"","scroll-left":l.scrollLeft,style:_({height:l.parseRpx(l.height)})},{default:b((()=>[v(n,{class:"cl-tabs__bar-box",style:_({"justify-content":l.justify})},{default:b((()=>[(f(!0),m(y,null,w(l.tabs,((e,a)=>(f(),p(n,{class:h(["cl-tabs__bar-item",{"is-active":l.current===e.value}]),key:a,style:_({color:l.getColor(e),padding:`0 ${l.gutter}rpx`}),onClick:e=>l.change(a)},{default:b((()=>[e.prefixIcon?(f(),p(u,{key:0,class:h(["cl-tabs__icon is-prefix",[e.prefixIcon]])},null,8,["class"])):g("",!0),v(u,{class:"cl-tabs__label"},{default:b((()=>[k(x(e.label),1)])),_:2},1024),e.suffixIcon?(f(),p(u,{key:1,class:h(["cl-tabs__icon is-suffix",[e.suffixIcon]])},null,8,["class"])):g("",!0)])),_:2},1032,["style","class","onClick"])))),128)),l.lineLeft>0?(f(),m(y,{key:0},[l.showLine?(f(),p(n,{key:0,class:"cl-tabs__line",style:_({"background-color":l.color,left:l.lineLeft+"px"})},null,8,["style"])):g("",!0),l.showslider?(f(),p(n,{key:1,class:"cl-tabs__slider",style:_({"background-color":l.color,left:l.slider.left+"px",width:l.slider.width+"px"})},null,8,["style"])):g("",!0)],64)):g("",!0)])),_:1},8,["style"])])),_:1},8,["scroll-left","style"]),l.showDropdown?(f(),p(n,{key:0,class:"cl-tabs__dropdown",onClick:l.openDropdown},{default:b((()=>[v(i,{name:""+(l.dropdown.visible?"arrow-top":"arrow-bottom")},null,8,["name"])])),_:1},8,["onClick"])):g("",!0),v(n,{class:"cl-tabs__dropdown-box",style:_({opacity:l.dropdown.visible?"1":"0"})},{default:b((()=>[V(l.$slots,"dropdown")])),_:3},8,["style"])])),_:3})])),_:3},8,["class","style"])}]]),q=U(l({__name:"tabs",setup(l){const{refs:a,setRefs:t}=R(),o=e(1),s=e([{label:"百亿补贴",value:1},{label:"包邮",value:2},{label:"限时达",value:3},{label:"同城速配",value:4},{label:"货到付款",value:5},{label:"分期免息",value:6},{label:"配送全球",value:7},{label:"促销",value:8}]),u=e(2),n=e([{label:"盒装",value:1},{label:"纸包装",value:2},{label:"袋装",value:3},{label:"罐装",value:4}]);return(l,e)=>{const r=d(c("cl-tabs"),N),i=d(c("cl-card"),$),_=d(c("cl-tag"),A),h=j,g=d(c("cl-page"),I);return f(),p(g,{padding:20},{default:b((()=>[v(i,{label:"基础用法"},{default:b((()=>[v(r,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l),list:s.value},null,8,["modelValue","list"])])),_:1}),v(i,{label:"下拉框"},{default:b((()=>[v(r,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value=l),border:!1,list:s.value,"show-dropdown":"",ref:D(t)("tabs")},{dropdown:b((()=>[v(h,{class:"dropdown"},{default:b((()=>[(f(!0),m(y,null,w(s.value,(l=>(f(),p(_,{key:l.value,margin:10,type:o.value===l.value?"primary":"info",onClick:e=>{return t=l.value,o.value=t,void a.tabs.closeDropdown();var t}},{default:b((()=>[k(x(l.label),1)])),_:2},1032,["type","onClick"])))),128))])),_:1})])),_:1},8,["modelValue","list"])])),_:1}),v(i,{label:"居中"},{default:b((()=>[v(r,{modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=l=>u.value=l),list:n.value,justify:"center"},null,8,["modelValue","list"])])),_:1}),v(i,{label:"填充"},{default:b((()=>[v(r,{modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=l=>u.value=l),list:n.value,fill:""},null,8,["modelValue","list"])])),_:1}),v(i,{label:"块状"},{default:b((()=>[v(r,{modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=l=>u.value=l),list:n.value,"show-line":!1,"show-slider":!0},null,8,["modelValue","list"])])),_:1}),v(i,{label:"自定义"},{default:b((()=>[v(r,{modelValue:o.value,"onUpdate:modelValue":e[5]||(e[5]=l=>o.value=l),list:s.value,border:!1,color:"red","background-color":"f6f7fa","show-line":!1},null,8,["modelValue","list"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-5ce00367"]]);export{q as default};
