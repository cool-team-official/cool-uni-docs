import{d as l,r as s,g as a,h as e,w as o,V as t,O as n,E as c,D as i,N as r,x as p,v as u}from"./index-Dlau7bkh.js";import{u as d,j as g}from"./cl-page.C3y_EXfh.js";import{_ as f}from"./_plugin-vue_export-helper.BCo6x5W8.js";const y=f(l({name:"cl-tag",props:{type:{type:String,default:"primary"},plain:Boolean,size:{type:String,default:"default"},color:String,closable:Boolean,round:Boolean},setup(l,{emit:a}){const{tap:e}=g(a),o=s(!0);return{visible:o,tap:e,open:function(){o.value=!0},close:function(){o.value=!1,a("close")},...d()}}}),[["render",function(l,s,d,g,f,y){const m=p,k=u;return l.visible?(a(),e(k,{key:0,class:i(["cl-tag",[`cl-tag--${l.type}`,`cl-tag--${l.size}`,{"is-plain":l.plain,"is-round":l.round}]]),style:r([l.baseStyle,{backgroundColor:l.color}]),onClick:l.tap},{default:o((()=>[t(l.$slots,"default"),l.closable?(a(),e(m,{key:0,class:"cl-tag__close cl-icon-close",onClick:n(l.close,["stop"])},null,8,["onClick"])):c("",!0)])),_:3},8,["class","style","onClick"])):c("",!0)}]]);export{y as _};
