import{d as a,u as e,a as l,b as s,r as t,c as i,o,m as n,e as c,f as u,g as r,h as d,w as p,i as f,s as m,j as v,k as h,t as b,l as _,n as g,p as x,F as j,q as k,v as y,x as C}from"./index-Dlau7bkh.js";import{i as w,_ as z,a as H,b as T}from"./cl-page.C3y_EXfh.js";import{_ as V}from"./cl-tag.CClJOHWp.js";import{_ as E}from"./logo.BkEKDfb4.js";import{u as F}from"./index.AbH2Jzti.js";import{u as q}from"./index.Dnq2RgDG.js";import{T as B}from"./tabbar.Dq18j0rA.js";import{_ as G}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./cl-footer.terJo5gq.js";const I=a({name:"undefined"}),S=G(a({...I,setup(a){const{router:G,service:I}=F();q();const S=e();l();const{t:U}=s(),$=t([{label:"v8.x",value:"v8",children:[{label:"多语言",path:"i18n"}]},{label:"基础组件",value:"basic",children:[]},{label:"表单组件",value:"form",children:[]},{label:"视图组件",value:"view",children:[]},{label:"高级组件",value:"extend",children:[]}]),A=i({active:"zh-Hans",visible:!1,list:[{label:"简体中文",value:"zh-Hans"},{label:"繁体中文",value:"zh-Hant"},{label:"English",value:"en"},{label:"Spanish",value:"es"}],open(){A.active=f(),this.visible=!0},close(){this.visible=!1},change(a){m(a),A.close()}});return o((()=>{G.routes.forEach((a=>{if(a.path.includes("pages/demo")){const[,,e]=a.path.split("/"),l=$.value.find((a=>a.value==e));l&&l.children.push({label:a.style.navigationBarTitleText,path:"/"+a.path})}}));const a=n.list.filter((a=>a.demo)).map((a=>a.demo));w(a)||$.value.unshift({label:U("插件 / 模块"),value:"plugin",children:a})})),(a,e)=>{const l=k,s=y,t=C,i=c(u("cl-icon"),z),o=c(u("cl-tag"),V),n=c(u("cl-popup"),H),f=c(u("cl-page"),T);return r(),d(f,null,{default:p((()=>[v(s,{class:"page-home"},{default:p((()=>[v(s,{class:"logo"},{default:p((()=>[v(s,{class:"icon"},{default:p((()=>[v(l,{src:E,mode:"aspectFit"})])),_:1}),v(t,{class:"name"},{default:p((()=>[h(b(_(S).info.name),1)])),_:1})])),_:1}),v(s,{class:"desc"},{default:p((()=>[h(b(_(U)("uniapp快速开发脚手架")),1)])),_:1}),v(s,{class:"container"},{default:p((()=>[(r(!0),g(j,null,x($.value,((a,e)=>(r(),d(s,{class:"group",key:e},{default:p((()=>[v(t,{class:"label"},{default:p((()=>[h(b(a.label),1)])),_:2},1024),v(s,{class:"list"},{default:p((()=>[(r(!0),g(j,null,x(a.children,((a,e)=>(r(),d(s,{class:"item",key:e,onClick:e=>{var l;"i18n"==(l=a.path)?A.open():G.push({path:l,isGuard:!1})}},{default:p((()=>[v(t,{class:"name"},{default:p((()=>[h(b(a.label),1)])),_:2},1024),v(i,{name:"arrow-right",color:"info"})])),_:2},1032,["onClick"])))),128))])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),v(B),v(n,{modelValue:A.visible,"onUpdate:modelValue":e[0]||(e[0]=a=>A.visible=a),title:_(U)("选择语言"),direction:"bottom","border-radius":"32rpx 32rpx 0 0"},{default:p((()=>[v(s,{class:"list"},{default:p((()=>[(r(!0),g(j,null,x(A.list,(a=>(r(),d(o,{key:a.value,type:a.value==A.active?"success":"info",margin:[0,20,20,0],onClick:e=>A.change(a.value)},{default:p((()=>[h(b(a.label),1)])),_:2},1032,["type","onClick"])))),128))])),_:1})])),_:1},8,["modelValue","title"])])),_:1})}}}),[["__scopeId","data-v-775e6c4e"]]);export{S as default};
