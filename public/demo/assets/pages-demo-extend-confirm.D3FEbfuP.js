import{l as e,b as l,a}from"./cl-page.CV4Clf1q.js";import{d as o,f as n,k as t,l as s,o as r,a as c,w as i,p as f,q as u}from"./index-CYp4B_QH.js";import{_ as m}from"./cl-input.BQlHe_GP.js";import{_ as d}from"./cl-card.BK20rd0V.js";import{u as p}from"./index.CS5AuKI6.js";import"./_plugin-vue_export-helper.C5tT7wvf.js";import"./cl-text.0zcdGoXY.js";const _=o({__name:"confirm",setup(o){const _=p(),k=n(),g=n(),C=n(),b=n();function h(){var e;null==(e=k.value)||e.open({title:"提示",message:"你有一个待取信件",callback(e){switch(console.log(e),e){case"confirm":_.showToast("领取成功");break;case"cancel":_.showToast("已取消");break;case"close":_.showToast("已关闭")}}})}function v(){var e;null==(e=g.value)||e.open({title:"提示"})}function w(){var e;null==(e=C.value)||e.open({title:"提示",message:"你有一个待取信件",beforeClose(e,{done:l,showLoading:a,hideLoading:o}){console.log(e),"confirm"==e?(a(),setTimeout((()=>{l(),_.showToast("领取成功")}),1500)):l()}})}function j(e){var l;null==(l=b.value)||l.open({title:"提示",message:"这是一条消息",type:e,showCancelButton:!1})}return(o,n)=>{const p=t(s("cl-confirm"),e),_=t(s("cl-input"),m),x=t(s("cl-button"),l),y=t(s("cl-card"),d),T=t(s("cl-page"),a);return r(),c(T,{padding:20},{default:i((()=>[f(p,{ref_key:"Confirm",ref:k},null,512),f(p,{ref_key:"Confirm2",ref:g},{default:i((()=>[f(_)])),_:1},512),f(p,{ref_key:"Confirm3",ref:C},null,512),f(p,{ref_key:"Confirm4",ref:b},null,512),f(y,{label:"基础用法"},{default:i((()=>[f(x,{onClick:h},{default:i((()=>[u("打开")])),_:1})])),_:1}),f(y,{label:"自定义内容"},{default:i((()=>[f(x,{onClick:v},{default:i((()=>[u("打开")])),_:1})])),_:1}),f(y,{label:"关闭回掉"},{default:i((()=>[f(x,{onClick:w},{default:i((()=>[u("打开")])),_:1})])),_:1}),f(y,{label:"不同类型"},{default:i((()=>[f(x,{onClick:n[0]||(n[0]=e=>j("success"))},{default:i((()=>[u("成功")])),_:1}),f(x,{onClick:n[1]||(n[1]=e=>j("warning"))},{default:i((()=>[u("警告")])),_:1}),f(x,{onClick:n[2]||(n[2]=e=>j("error"))},{default:i((()=>[u("错误")])),_:1})])),_:1})])),_:1})}}});export{_ as default};
