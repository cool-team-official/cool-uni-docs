import{d as a,z as l,e,j as s,k as t,l as o,o as r,a as u,w as i,p as n,s as c,v as p,F as d,G as f,U as m,i as _}from"./index-BvXgjcLf.js";import{_ as v}from"./cl-text.C-vDcahG.js";import{_ as b}from"./cl-avatar.BbrMNpkN.js";import{_ as g}from"./cl-list-item.CiwMfznH.js";import{_ as k}from"./cl-list.Cj6A-dv2.js";import{_ as h,a as j}from"./cl-page.ArvafLTY.js";import{u as x,_ as y}from"./_plugin-vue_export-helper.DloEWgbh.js";import{u as C}from"./index.Dg3169dY.js";import"./isBoolean.Ca5h8WNX.js";const w=y(a({__name:"set",setup(a){const{router:y,upload:w}=x(),{user:U}=l(),z=C(),q=e();return s((()=>{U.get()})),(a,l)=>{const e=t(o("cl-text"),v),s=t(o("cl-avatar"),b),x=_,C=t(o("cl-list-item"),g),F=t(o("cl-list"),k),I=t(o("cl-icon"),h),$=t(o("cl-page"),j);return r(),u($,null,{default:i((()=>[n(x,{class:"page-set"},{default:i((()=>[c(U).info?(r(),p(d,{key:0},[n(e,{value:"账号",margin:[0,0,20,20],block:""}),n(F,{radius:16},{default:i((()=>[n(C,{label:"头像","arrow-icon":!1},{default:i((()=>[n(x,{class:"avatar"},{default:i((()=>[n(s,{round:"",size:88,src:c(U).info.avatarUrl,onClick:l[0]||(l[0]=a=>function(a){function l(a){w({path:a}).then((a=>{z.showToast("头像更新成功"),U.update({avatarUrl:a})}))}a?l(a.detail.avatarUrl):m({count:1,success(a){l(a.tempFiles[0].path)}})}())},null,8,["src"])])),_:1})])),_:1}),n(C,{label:"昵称",onClick:l[1]||(l[1]=a=>c(y).push("/pages/user/edit"))},{default:i((()=>[n(e,{value:c(U).info.nickName},null,8,["value"])])),_:1}),n(C,{label:"手机号","arrow-icon":!1},{default:i((()=>[n(e,{value:c(U).info.phone},null,8,["value"])])),_:1}),n(C,{label:"ID","arrow-icon":!1,border:!1},{default:i((()=>[n(e,{value:c(U).info.id},null,8,["value"])])),_:1})])),_:1})],64)):f("",!0),n(e,{value:"关于",margin:[30,0,20,20],block:""}),n(F,{radius:16},{default:i((()=>[n(C,{label:`关于${c(q).info.name}`,onClick:l[2]||(l[2]=a=>c(y).push("/pages/user/about"))},null,8,["label"]),n(C,{label:"用户协议",onClick:l[3]||(l[3]=a=>c(y).push({path:"/pages/user/doc",query:{key:"userAgreement",title:"用户协议"}}))}),n(C,{label:"隐私政策",onClick:l[4]||(l[4]=a=>c(y).push({path:"/pages/user/doc",query:{key:"privacyPolicy",title:"隐私政策"}}))})])),_:1}),n(F,{radius:16},{default:i((()=>[n(C,{label:"切换账号",onClick:l[5]||(l[5]=a=>c(y).push("/pages/user/login"))}),n(C,{label:"退出登录","arrow-icon":!1,onClick:l[6]||(l[6]=a=>c(U).logout())},{default:i((()=>[n(I,{size:36,name:"exit"})])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-d8b7005a"]]);export{w as default};
