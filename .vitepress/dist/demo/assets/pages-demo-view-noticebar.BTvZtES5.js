import{p as t,_ as e,a as l}from"./cl-page.D0l32468.js";import{d as a,r as o,p as s,x as r,a0 as n,a1 as i,P as c,a2 as u,a3 as d,a as b,b as f,c as p,e as _,w as x,A as m,R as g,f as h,z as y,J as k,i as v,F as C,j,g as z,t as S,k as R,l as X}from"./index-BXs9N0aO.js";import{_ as $}from"./_plugin-vue_export-helper.D4XvEQHf.js";import{_ as w}from"./cl-card.CShwl3e9.js";import"./cl-text.FIltvNqU.js";const T=$(a({name:"cl-noticebar",props:{text:{type:[String,Array],default:"",required:!0},direction:{type:String,default:"horizontal"},color:String,backgroundColor:String,scrollable:Boolean,duration:{type:Number,default:10},closeable:Boolean,icon:String,height:{type:[String,Number],default:40}},emits:["close"],setup(e,{emit:l}){const{proxy:a}=u(),b=o(!0),f=s({left:0,top:0,translateX:0,duration:0});let p=null;const _=r((()=>d(e.text)?e.text:[e.text])),x=r((()=>"horizontal"==e.direction?`transform ${f.duration}s linear`:"top 0.3s"));function m(){e.scrollable&&(g(),c().in(a).select(".cl-noticebar__box").boundingClientRect((t=>{c().in(a).select(".cl-noticebar__text").boundingClientRect((l=>{const a=1e3*e.duration;if("horizontal"==e.direction){const o=()=>{f.duration=e.duration,f.left=t.width,f.translateX=l.width+f.left,p=setTimeout((()=>{f.translateX=0,f.duration=0,setTimeout(o,500)}),a)};o()}else p=setInterval((()=>{Math.abs(f.top)>=t.height*(_.value.length-1)?f.top=0:f.top-=t.height}),a)})).exec()})).exec())}function g(){clearInterval(p),clearTimeout(p),p=null}return n((()=>{m()})),i((()=>{g()})),{visible:b,scroll:f,list:_,transition:x,refresh:m,close:function(){g(),b.value=!1,l("close")},clear:g,parseRpx:t}}}),[["render",function(t,l,a,o,s,r){const n=b(f("cl-icon"),e),i=R,c=X;return t.visible?(p(),_(c,{key:0,class:y(["cl-noticebar",[{"is-scrollable":t.scrollable}]]),style:k({color:t.color,backgroundColor:t.backgroundColor})},{default:x((()=>[t.closeable?(p(),_(n,{key:0,name:"close-border",size:34,margin:[0,10,0,0],onClick:t.close},null,8,["onClick"])):m("",!0),g(t.$slots,"icon",{},(()=>[t.icon?(p(),_(n,{key:0,"class-name":t.icon,size:34,margin:[0,10,0,0]},null,8,["class-name"])):m("",!0)])),h(c,{class:"cl-noticebar__box"},{default:x((()=>[h(c,{class:y(["cl-noticebar__scroller",[`is-${t.direction}`]]),style:k({height:t.parseRpx(t.height),top:t.scroll.top+"px",left:t.scroll.left+"px",transition:t.transition,transform:`translateX(-${t.scroll.translateX}px)`})},{default:x((()=>[(p(!0),v(C,null,j(t.list,((t,e)=>(p(),_(c,{class:"cl-noticebar__item",key:e},{default:x((()=>[h(i,{class:"cl-noticebar__text"},{default:x((()=>[z(S(t),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["class","style"])])),_:1})])),_:3},8,["class","style"])):m("",!0)}]]);const A=$({},[["render",function(t,e){const a=b(f("cl-noticebar"),T),o=b(f("cl-card"),w),s=b(f("cl-page"),l);return p(),_(s,{padding:20},{default:x((()=>[h(o,{label:"基础用法"},{default:x((()=>[h(a,{text:"云想衣裳花想容，春风拂槛露华浓。"})])),_:1}),h(o,{label:"带图标"},{default:x((()=>[h(a,{icon:"cl-icon-notification",text:"云想衣裳花想容，春风拂槛露华浓。"})])),_:1}),h(o,{label:"可关闭"},{default:x((()=>[h(a,{text:"云想衣裳花想容，春风拂槛露华浓。",closeable:""})])),_:1}),h(o,{label:"可滑动"},{default:x((()=>[h(a,{text:"云想衣裳花想容，春风拂槛露华浓。",scrollable:""})])),_:1}),h(o,{label:"不同方向"},{default:x((()=>[h(a,{text:["云想衣裳花想容，春风拂槛露华浓云想衣裳花想容，春风拂槛露华浓云想衣裳花想容，春风拂槛露华浓。","这世界那么多人","目光所至则心向往之"],direction:"vertical",scrollable:"",duration:3})])),_:1})])),_:1})}]]);export{A as default};
