import{_ as o}from"./cl-list-item.8KrAEZgJ.js";import{d as l,A as e,f as t,aa as a,c as n,S as s,a6 as r,k as c,l as u,o as i,a as p,w as d,p as f,b as m,r as v,G as T,O as h,n as b,q as g,i as _,ad as w,y as x,j as k,v as y,x as B,F as S,s as j}from"./index-BsPE-n5_.js";import{f as F,_ as I,a as $}from"./cl-page.D-7WxXOa.js";import{_ as E}from"./cl-text.Dmi3_oh8.js";import{_ as z,u as A}from"./_plugin-vue_export-helper.B5Vkt9du.js";import{r as M}from"./range.CDrfcn2n.js";import"./isBoolean.DMMK92jj.js";const N=z(l({props:{top:{type:Number,default:80},bottom:{type:Number,default:100},loadingText:{type:String,default:"正在刷新"},pullingText:{type:String,default:"下拉刷新"},releaseText:{type:String,default:"释放刷新"},scrollTop:Number,scrollIntoView:String,scrollWithAnimation:{type:Boolean,default:!0},enableBackToTop:Boolean,showBackTopButton:{type:Boolean,default:!0},showScrollbar:Boolean,enableFlex:Boolean,refresherEnabled:{type:Boolean,default:!0}},emits:["down","up","scroll"],setup(o,{emit:l}){const{proxy:c}=r(),u=e({start:0,move:0}),i=t(0);a((()=>o.scrollTop),(o=>{i.value=o||0}),{immediate:!0});const p=t(!1),d=t("end"),f=n((()=>u.move?`translate3d(0, ${u.move}px, 0)`:"")),m=n((()=>["end","loading"].includes(d.value)?"transform 0.3s":"")),v=n((()=>u.move>=o.top)),T=n((()=>{switch(d.value){case"pulling":return v.value?o.releaseText:o.pullingText;case"loading":return o.loadingText;default:return o.pullingText}}));function h(){s().in(c).select(".cl-scroller__loading").fields({size:!0},(o=>{d.value="loading",u.move=o.height||0,l("down")})).exec()}function b(){d.value="end",u.move=0}return{touch:u,scrollTop2:i,backTopButtonFadeIn:p,status:d,transform:f,transition:m,isReleasable:v,text:T,onScroll:function(o){p.value=o.detail.scrollTop>=200,l("scroll",o)},onTouchStart:function(l){"end"==d.value&&o.refresherEnabled&&(u.start=l.changedTouches[0].clientY,d.value="pulling")},onTouchMove:function(o){if("pulling"==d.value&&i.value<=10){let l=o.changedTouches[0].clientY-u.start;l<=200&&(u.move=l)}},onTouchEnd:function(){v.value?h():b()},down:h,up:function(){l("up")},end:b,scrollTo:function(o){i.value=o},backTop:function(){i.value=Math.random()}}}}),[["render",function(o,l,e,t,a,n){const s=c(u("cl-loading"),F),r=c(u("cl-text"),E),k=_,y=w,B=c(u("cl-icon"),I),S=x;return i(),p(k,{class:"cl-scroller__wrap"},{default:d((()=>[f(k,{class:"cl-scroller__loading",style:m({transform:o.transform,transition:o.transition})},{default:d((()=>[v(o.$slots,"loading",{text:o.text,status:o.status,move:o.touch.move},(()=>["loading"==o.status?(i(),p(s,{key:0,size:40})):T("",!0),f(r,{size:26,margin:[0,0,0,14],value:o.text},null,8,["value"])]))])),_:3},8,["style"]),f(k,{class:"cl-scroller",style:m({transform:o.transform,transition:o.transition}),onTouchmove:h(o.onTouchMove,["stop"]),onTouchstart:o.onTouchStart,onTouchend:o.onTouchEnd},{default:d((()=>[f(y,{class:"cl-scroller__view","scroll-y":"","lower-top":o.bottom,"scroll-top":o.scrollTop2,"scroll-into-view":o.scrollIntoView,"scroll-with-animation":o.scrollWithAnimation,"enable-back-to-top":o.enableBackToTop,"show-scrollbar":o.showScrollbar,"enable-flex":o.enableFlex,onScroll:o.onScroll,onScrolltolower:o.up},{default:d((()=>[v(o.$slots,"default")])),_:3},8,["lower-top","scroll-top","scroll-into-view","scroll-with-animation","enable-back-to-top","show-scrollbar","enable-flex","onScroll","onScrolltolower"])])),_:3},8,["style","onTouchmove","onTouchstart","onTouchend"]),o.showBackTopButton?(i(),p(k,{key:0,class:b(["cl-scroller__back-top",[{fadeIn:o.backTopButtonFadeIn}]]),onClick:o.backTop},{default:d((()=>[f(B,{name:"top",color:"#666"}),f(S,{class:"cl-scroller__back-top-text"},{default:d((()=>[g("顶部")])),_:1})])),_:1},8,["class","onClick"])):T("",!0)])),_:3})}]]),C=l({__name:"scroller",setup(l){const{refs:e,setRefs:a}=A(),n=t([]);function s(){setTimeout((()=>{const o=M(n.value.length,n.value.length+20);n.value.push(...o)}),300)}function r(){n.value=M(20),setTimeout((()=>{e.scroller.end()}),500)}return k((()=>{r()})),(l,e)=>{const t=c(u("cl-list-item"),o),m=c(u("cl-scroller"),N),v=c(u("cl-page"),$);return i(),p(v,{fullscreen:""},{default:d((()=>[f(m,{ref:j(a)("scroller"),onUp:s,onDown:r},{default:d((()=>[(i(!0),y(S,null,B(n.value,((o,l)=>(i(),p(t,{key:l,label:`${o+1}`,padding:[0,20,0,20],border:""},null,8,["label"])))),128))])),_:1},512)])),_:1})}}});export{C as default};
