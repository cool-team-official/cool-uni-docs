import{d as e,f as l,k as n,l as o,o as a,a as t,w as c,p as s,q as i,t as u,G as r,v as f,F as d,x as p,n as _,b,i as m,y as v,a1 as k}from"./index-CYp4B_QH.js";import{_ as h,c as C,b as g,a as y}from"./cl-page.CV4Clf1q.js";import{_ as x}from"./_plugin-vue_export-helper.C5tT7wvf.js";import{_ as j}from"./cl-card.BK20rd0V.js";import{u as E}from"./index.CS5AuKI6.js";import"./cl-text.0zcdGoXY.js";const O=x(e({name:"cl-action-sheet",setup(){const e=l(!1),n=l({});function o(l){const o=()=>{e.value=!1,n.value.callback&&n.value.callback(l)};n.value.beforeClose?n.value.beforeClose(l,o):o()}return{visible:e,conf:n,open:function(l){n.value=Object.assign({title:"",list:[],callback:null,closeOnClickModal:!0,showCancel:!0,cancelText:"取消"},l),e.value=!0},close:o,select:function(l,n){if(n.disabled)return!1;n.click?n.click((()=>{e.value=!1})):o(l)},onEvent:function(e,l){e[l]&&e[l]()}}}}),[["render",function(e,l,g,y,x,j){const E=m,O=n(o("cl-icon"),h),w=v,G=k,T=n(o("cl-popup"),C);return a(),t(E,{class:"cl-action-sheet"},{default:c((()=>[s(T,{modelValue:e.visible,"onUpdate:modelValue":l[1]||(l[1]=l=>e.visible=l),direction:"bottom",padding:0,"border-radius":"32rpx 32rpx 0 0","close-on-click-modal":e.conf.closeOnClickModal},{default:c((()=>[e.conf.title?(a(),t(E,{key:0,class:"cl-action-sheet__title"},{default:c((()=>[i(u(e.conf.title),1)])),_:1})):r("",!0),s(E,{class:"cl-action-sheet__list"},{default:c((()=>[(a(!0),f(d,null,p(e.conf.list,((l,n)=>(a(),t(G,{class:_(["cl-action-sheet__item",[l.disabled?"is-disabled":""]]),key:n,style:b({color:l.color,fontSize:l.size}),"open-type":l.openType,onGetphonenumber:n=>e.onEvent(l,"getphonenumber"),onGetuserinfo:n=>e.onEvent(l,"getuserinfo"),onContact:n=>e.onEvent(l,"contact"),onError:n=>e.onEvent(l,"error"),onOpensetting:n=>e.onEvent(l,"opensetting"),onClick:o=>e.select(n,l)},{default:c((()=>[l.icon?(a(),t(O,{key:0,"class-name":l.icon,size:34,margin:[0,10,0,0]},null,8,["class-name"])):r("",!0),s(w,{class:"cl-action-sheet__label"},{default:c((()=>[i(u(l.label),1)])),_:2},1024)])),_:2},1032,["class","style","open-type","onGetphonenumber","onGetuserinfo","onContact","onError","onOpensetting","onClick"])))),128)),e.conf.showCancel?(a(),t(G,{key:0,class:"cl-action-sheet__item cl-action-sheet__item--cancel",onClick:l[0]||(l[0]=l=>e.close("cancel"))},{default:c((()=>[i(u(e.conf.cancelText),1)])),_:1})):r("",!0)])),_:1})])),_:1},8,["modelValue","close-on-click-modal"])])),_:1})}]]),w=e({__name:"action-sheet",setup(e){const u=E(),r=l();function f(){var e;null==(e=r.value)||e.open({list:[{label:"删除好友"}]})}function d(){var e;null==(e=r.value)||e.open({list:[{label:"微信支付",icon:"cl-icon-payment"}]})}function p(){var e;null==(e=r.value)||e.open({title:"删除好友会同时删除所有聊天记录",list:[{label:"删除好友",color:"red"}]})}function _(){var e;null==(e=r.value)||e.open({closeOnClickModal:!1,list:[{label:"删除好友",color:"red"}],beforeClose(e,l){0==e?u.showConfirm({title:"提示",message:"是否删除该联系人",callback(e){"confirm"==e&&u.showToast("删除成功"),l()}}):l()}})}return(e,l)=>{const u=n(o("cl-action-sheet"),O),b=n(o("cl-button"),g),m=n(o("cl-card"),j),v=n(o("cl-page"),y);return a(),t(v,{padding:20},{default:c((()=>[s(u,{ref_key:"ActionSheet",ref:r},null,512),s(m,{label:"基础用法"},{default:c((()=>[s(b,{onClick:f},{default:c((()=>[i("打开")])),_:1})])),_:1}),s(m,{label:"添加图标"},{default:c((()=>[s(b,{onClick:d},{default:c((()=>[i("打开")])),_:1})])),_:1}),s(m,{label:"禁用"},{default:c((()=>[s(b,{onClick:p},{default:c((()=>[i("打开")])),_:1})])),_:1}),s(m,{label:"关闭回调"},{default:c((()=>[s(b,{onClick:_},{default:c((()=>[i("打开")])),_:1})])),_:1})])),_:1})}}});export{w as default};
