import{P as e,_ as t}from"./cl-select-inner.D5P_UWNj.js";import{d as a,ae as l,b as o,r as s,B as r,aG as n,ad as d,e as u,f as i,g as c,n as m,j as p,w as f,V as h,F as g,p as v,k as b,t as _,v as y,bj as k,h as C,bk as j}from"./index-Dlau7bkh.js";import{c as x}from"./cl-page.C3y_EXfh.js";import{_ as V}from"./cl-select-popup.7bVSwqXn.js";import{a as Y}from"./index.AbH2Jzti.js";import{r as R}from"./range.F11Nzdx0.js";import{_ as S}from"./_plugin-vue_export-helper.BCo6x5W8.js";const D=S(a({name:"cl-select-date",props:{...e,modelValue:String,title:{type:String,default:l("选择日期")},startYear:{type:Number,default:2e3},mode:{type:Array,default:["year","month","date","hour","minute","second"]},format:{type:String,default:"YYYY-MM-DD HH:mm:ss"},displayFormat:Function,start:String,end:String,placeholder:{type:String,default:l("请选择时间")},disabled:Boolean},emits:["update:modelValue","change"],setup(e,{emit:t}){const{refs:a,setRefs:l}=Y(),{t:u}=o(),i=s(),c=s([]),m=r((()=>e.displayFormat?e.displayFormat(e.modelValue):e.modelValue)),p=r((()=>{const t=R(e.startYear,e.startYear+50),a=R(1,13),l=f(i.value).endOf("month").date(),o=R(1,l+1),s=R(24),r=R(60),n=R(60),d={year:{list:t,unit:u("年")},month:{list:a,unit:u("月")},date:{list:o,unit:u("日")},hour:{list:s,unit:u("时")},minute:{list:r,unit:u("分")},second:{list:n,unit:u("秒")}};return e.mode.map((e=>d[e]))}));function f(t){let a=n();if(t){let l=t.split(/\D+/g);e.mode.forEach(((e,t)=>{let o=Number(l[t]);"month"==e&&(o-=1),a=a.set(e,o)}))}return a}function h(t,a=!0){i.value=t||void 0;const l=f(i.value),o=e.mode.map(((e,t)=>{var a;let o=null==(a=l[e])?void 0:a.call(l);return"month"==e&&(o+=1),p.value[t].list.findIndex((e=>e==o))}));c.value=e.mode.map((()=>0)),d((()=>{c.value=o,a&&g({detail:{value:o}})}))}function g(t){c.value=t.detail.value;let a=n();e.mode.forEach(((t,l)=>{let o=c.value[l];if("year"==t&&(o+=e.startYear),"date"==t){o+=1;const e=a.endOf("month").date();o>e&&(o=e)}a=a.set(t,o)})),i.value=a.format(e.format),e.start&&a.isBefore(n(f(e.start)))&&h(e.start,!1),e.end&&a.isAfter(n(f(e.end)))&&h(e.end,!1)}function v(){a.popup.close()}return{date:i,columns:p,value:c,text:m,getDate:f,setDate:h,confirm:function(){t("update:modelValue",i.value),t("change",i.value),v()},onChange:g,refs:a,setRefs:l,open:function(){e.disabled||(h(e.modelValue),a.popup.open())},close:v}}}),[["render",function(e,a,l,o,s,r){const n=u(i("cl-select-inner"),t),d=y,Y=j,R=k,S=u(i("cl-button"),x),D=u(i("cl-select-popup"),V);return c(),m(g,null,[p(d,{class:"cl-select-date",onClick:e.open},{default:f((()=>[h(e.$slots,"default",{value:e.modelValue,label:e.modelValue},(()=>[p(n,{height:e.height,placeholder:e.placeholder,disabled:e.disabled,border:e.border,round:e.round,backgroundColor:e.backgroundColor,borderRadius:e.borderRadius,arrowIcon:"cl-icon-time",padding:e.padding,text:e.text},null,8,["height","placeholder","disabled","border","round","backgroundColor","borderRadius","padding","text"])]))])),_:3},8,["onClick"]),p(D,{ref:e.setRefs("popup"),title:e.title,"show-picker":!1},{list:f((()=>[p(d,{class:"cl-select-date__wrap"},{default:f((()=>[p(R,{value:e.value,class:"cl-select-date__picker",onChange:e.onChange},{default:f((()=>[(c(!0),m(g,null,v(e.columns,((e,t)=>(c(),C(Y,{key:t},{default:f((()=>[(c(!0),m(g,null,v(e.list,((t,a)=>(c(),C(d,{class:"cl-select-date__picker-item",key:a},{default:f((()=>[b(_(t)+_(e.unit),1)])),_:2},1024)))),128))])),_:2},1024)))),128))])),_:1},8,["value","onChange"])])),_:1})])),confirm:f((()=>[p(S,{type:"primary",custom:"",onClick:e.confirm},{default:f((()=>[b(_(e.$t("选择")),1)])),_:1},8,["onClick"])])),_:1},8,["title"])],64)}]]);export{D as _};
