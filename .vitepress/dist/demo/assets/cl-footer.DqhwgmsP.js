import{d as e,f as a,c as t,aa as l,a4 as r,aJ as s,ab as o,S as i,a6 as d,o as n,a as p,w as f,b as u,G as c,p as b,n as g,r as x,i as y}from"./index-BsPE-n5_.js";import{p as _}from"./cl-page.D-7WxXOa.js";import{_ as h}from"./_plugin-vue_export-helper.B5Vkt9du.js";const m=h(e({name:"cl-footer",props:{backgroundColor:{type:String,default:"#fff"},backdropFilter:String,padding:{type:[String,Number],default:"24rpx 36rpx"},height:[String,Number],zIndex:{type:Number,default:99},bottom:{type:[String,Number],default:0},border:Boolean,fixed:{type:Boolean,default:!0},flex:{type:Boolean,default:!0},delay:{type:Number,default:0},vt:null},setup(e){const n=d(),p=a(),f=t((()=>0!=parseInt(p.value)));async function u(){if(e.height)return p.value=_(e.height),!1;await s(e.delay),await o(),i().in(null==n?void 0:n.proxy).select(".cl-footer__inner").boundingClientRect((e=>{e&&(p.value=Math.floor(e.height||0)+"px")})).exec()}return l((()=>e.vt),(()=>{u()}),{deep:!0}),r((()=>{u()})),{height:p,visible:f,update:u,parseRpx:_}}}),[["render",function(e,a,t,l,r,s){const o=y;return n(),p(o,{class:"cl-footer__wrap"},{default:f((()=>[e.fixed&&e.visible?(n(),p(o,{key:0,class:"cl-footer__placeholder",style:u({height:e.height,padding:e.parseRpx(e.padding)})},null,8,["style"])):c("",!0),b(o,{class:g(["cl-footer",{"is-border":e.border,"is-fixed":e.fixed}]),style:u({backgroundColor:e.backgroundColor,backdropFilter:e.backdropFilter,visibility:e.visible?"visible":"hidden",bottom:e.parseRpx(e.bottom),zIndex:e.zIndex})},{default:f((()=>[b(o,{class:"cl-footer__wrap",style:u({padding:e.parseRpx(e.padding)})},{default:f((()=>[b(o,{class:g(["cl-footer__inner",{"is-flex":e.flex}])},{default:f((()=>[x(e.$slots,"default")])),_:3},8,["class"])])),_:3},8,["style"])])),_:3},8,["class","style"])])),_:3})}]]);export{m as _};
