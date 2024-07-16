import{d as e,r as l,x as a,p as t,a6 as s,am as o,a7 as c,a as u,b as i,c as n,i as r,f as d,w as p,R as m,F as f,j as v,e as y,g as _,t as h,z as b,l as g,k as j,b1 as k,b2 as C,o as V,b3 as x,A as K}from"./index-BXs9N0aO.js";import{P as A,_ as R}from"./cl-select-inner.CmcS0Bxz.js";import{_ as w}from"./cl-tag.CRZfAwUY.js";import{_ as S}from"./cl-list-index.BUVPmmu0.js";import{_ as B}from"./cl-select-popup.BRwefpLG.js";import{a as F,_ as U}from"./_plugin-vue_export-helper.D4XvEQHf.js";import{C as z}from"./city-pca.BwKYHwgO.js";import{i as D,b as E,a as P}from"./cl-page.D0l32468.js";import{c as Y}from"./cloneDeep.CYJ2asS6.js";import{_ as Z}from"./cl-card.CShwl3e9.js";import{_ as $}from"./cl-row.s15Ns3M2.js";import"./cl-input.CAOkH06t.js";import"./cl-checkbox.BVl_dMIM.js";import"./isBoolean.XkqdrK9A.js";import"./cl-avatar.CxVe7Pse.js";import"./cl-empty.Db0daYvH.js";import"./cl-text.FIltvNqU.js";const q=U(e({name:"cl-select-city",props:{...A,data:{type:Array,default:z},modelValue:Array,title:{type:String,default:"请选择所在地区"},labelKey:{type:String,default:"name"},valueKey:{type:String,default:"name"},placeholder:{type:String,default:"请选择所在地区"},separator:{type:String,default:" - "}},emits:["update:modelValue","change"],setup(e,{emit:u}){const{refs:i,setRefs:n}=F(),r=l([]),d=l(0),p=a((()=>{let l=e.data;const a=r.value.map((a=>{const t=l.find((l=>l[e.valueKey]==a));return t?(l=t.children||[],l):[]}));return[e.data,...a].filter((e=>!D(e)))})),m=a((()=>r.value.map(((l,a)=>p.value[a].find((a=>a[e.valueKey]==l)))))),f=l([]),v=a((()=>f.value.map((l=>null==l?void 0:l[e.labelKey])).join(e.separator)));function y(l){r.value=Y(l||e.modelValue||[]),(D(r.value)||r.value.find((e=>!e)))&&(r.value=[""],d.value=0),f.value=m.value.filter(Boolean).map((e=>({...e,children:void 0})))}const _=t({list:[],create(){_.list=r.value.map(o)},update(){r.value.forEach(((e,l)=>{e||(_.list.splice(l,99),_.list[l]=o())}))}});function h(){i.popup.close()}function b(){u("update:modelValue",r.value),u("change",r.value),h()}return s((()=>e.modelValue),y,{immediate:!0,deep:!0}),{refs:i,setRefs:n,list:p,value:r,cache:_,text:v,tabs:m,selection:f,confirm:b,open:function(){i.popup.open(),y(),_.create()},close:h,select:function(l,a){r.value[a]&&r.value.splice(a,99),r.value[a]=l[e.valueKey];const t=p.value[a].find((l=>l[e.valueKey]==r.value[a]));D(null==t?void 0:t.children)?b():(r.value.push(""),_.update(),c((()=>{d.value+=1})))},onActiveChange:function(e){d.value=e.detail.current},active:d,toActive:function(e){d.value=void 0!==e?e:r.value.length}}}}),[["render",function(e,l,a,t,s,o){const c=u(i("cl-select-inner"),R),V=g,x=u(i("cl-tag"),w),K=j,A=u(i("cl-list-index"),S),F=k,U=C,z=u(i("cl-select-popup"),B);return n(),r(f,null,[d(V,{class:"cl-select-city",onClick:e.open},{default:p((()=>[m(e.$slots,"default",{value:e.modelValue,label:e.text,selection:e.selection},(()=>[d(c,{height:e.height,placeholder:e.placeholder,disabled:e.disabled,border:e.border,round:e.round,backgroundColor:e.backgroundColor,borderRadius:e.borderRadius,padding:e.padding,text:e.text},null,8,["height","placeholder","disabled","border","round","backgroundColor","borderRadius","padding","text"])]))])),_:3},8,["onClick"]),d(z,{ref:e.setRefs("popup"),title:e.title,"show-picker":!1,"show-footer":!1,"scroller-height":"70vh"},{list:p((()=>[d(V,{class:"cl-select-city__wrap"},{default:p((()=>[d(V,{class:"cl-select-city__tabs"},{default:p((()=>[(n(!0),r(f,null,v(e.tabs,((l,a)=>(n(),y(x,{key:a,round:"",type:e.active==a?"primary":"info",margin:[0,20,20,0],onClick:l=>e.toActive(a)},{default:p((()=>[_(h((null==l?void 0:l[e.labelKey])||"请选择"),1)])),_:2},1032,["type","onClick"])))),128))])),_:1}),d(V,{class:"cl-select-city__list"},{default:p((()=>[d(U,{current:e.active,onChange:e.onActiveChange},{default:p((()=>[(n(!0),r(f,null,v(e.list,((l,a)=>(n(),y(F,{key:e.cache.list[a]},{default:p((()=>[d(A,{data:l,"search-bar":!1,dict:{id:e.valueKey},delay:500},{item:p((({item:l})=>[d(V,{class:b(["cl-select-city__item",{"is-active":l[e.valueKey]==e.value[a]}]),onClick:t=>e.select(l,a)},{default:p((()=>[d(K,{class:"cl-icon-toast-success"}),d(K,null,{default:p((()=>[_(h(l[e.labelKey]),1)])),_:2},1024)])),_:2},1032,["class","onClick"])])),_:2},1032,["data","dict"])])),_:2},1024)))),128))])),_:1},8,["current","onChange"])])),_:1})])),_:1})])),confirm:p((()=>[])),_:1},8,["title"])],64)}]]),G=e({__name:"select-city",setup(e){const a=l([]),t=l([]),s=l([]),o=l();return V((()=>{x({url:"https://cool-service.oss-cn-shanghai.aliyuncs.com/app%2Fbase%2F8fe445f06db5463386ae940d45b4bd6c_city-pcas.json",success(e){o.value=e.data}})})),(e,l)=>{const c=u(i("cl-select-city"),q),m=u(i("cl-card"),Z),b=u(i("cl-tag"),w),g=u(i("cl-row"),$),j=u(i("cl-button"),E),k=u(i("cl-page"),P);return n(),y(k,{padding:20},{default:p((()=>[d(m,{label:"基础用法"},{default:p((()=>[d(c,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e)},null,8,["modelValue"])])),_:1}),d(m,{label:"省市区乡镇4级"},{default:p((()=>[d(c,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=e=>t.value=e),data:o.value,placeholder:"省市区县、乡镇"},null,8,["modelValue","data"])])),_:1}),d(m,{label:"自定义"},{default:p((()=>[d(c,{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=e=>s.value=e)},{default:p((({selection:e})=>[e.length?(n(),y(g,{key:0,margin:[0,0,20,0]},{default:p((()=>[(n(!0),r(f,null,v(e,(e=>(n(),y(b,{plain:"",round:"",key:e.code},{default:p((()=>[_(h(e.name),1)])),_:2},1024)))),128))])),_:2},1024)):K("",!0),d(j,{round:""},{default:p((()=>[_("选择所在地区")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}});export{G as default};