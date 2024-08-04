import{_ as e}from"./cl-input.BQlHe_GP.js";import{d as l,h as a,f as o,A as u,k as r,l as t,o as p,a as s,w as m,p as d,v as i,x as c,F as n,q as f,i as v,t as b}from"./index-CYp4B_QH.js";import{_,a as V}from"./cl-form.CXwu0uvB.js";import{_ as j}from"./cl-select-date.BKlxZAqA.js";import{_ as g}from"./cl-select.uX0dNhV2.js";import{_ as y}from"./cl-input-number.BfT82DkA.js";import{_ as x}from"./cl-checkbox.1GtTlLwZ.js";import{_ as k}from"./cl-checkbox-group.CKdyiv-u.js";import{_ as h,a as U}from"./cl-radio-group.CGpg4g0i.js";import{_ as q}from"./cl-upload.SIJM_Gjh.js";import{_ as z}from"./cl-textarea.BMGHiCAt.js";import{_ as w,b as C,a as A}from"./cl-page.CV4Clf1q.js";import{_ as B}from"./cl-card.BK20rd0V.js";import{_ as D}from"./cl-footer.-31RWf-k.js";import{u as F}from"./index.CS5AuKI6.js";import"./_plugin-vue_export-helper.C5tT7wvf.js";import"./isBoolean.K54iZHq8.js";import"./cloneDeep.Dzvk72xp.js";import"./cl-select-inner.D-GunZ4W.js";import"./cl-select-popup.DeosJHke.js";import"./cl-empty.BYpp4AGE.js";import"./range.BddLCKQF.js";import"./cl-progress.8WJIK8Gw.js";import"./index.hIqzGKeq.js";import"./cl-text.0zcdGoXY.js";const T=l({__name:"form",setup(l){a((e=>{}));const T=F(),$=o({name:"",type:void 0,date:void 0,area:[0,1],source:0,num:5,remark:"",cover:"",pics:[],company:""}),E=u({name:{required:!0,message:"活动名称不能为空"},type:{required:!0,message:"活动类型不能为空"},date:{required:!0,message:"活动时间不能为空"},cover:{required:!0,message:"活动封面不能为空"}}),G=u({area:[{label:"一区",value:0},{label:"二区",value:1}],type:[{label:"线上活动",value:0},{label:"推广活动",value:1},{label:"线下活动",value:2}],source:[{label:"赞助",value:0},{label:"场地",value:1}]}),H=o(),I=o(!1);function J(){var e;null==(e=H.value)||e.validate(((e,l)=>{e&&(I.value=!0,setTimeout((()=>{T.showToast("提交成功"),I.value=!1}),1500))}))}function K(){var e;null==(e=H.value)||e.clear()}return(l,a)=>{const o=r(t("cl-input"),e),u=r(t("cl-form-item"),_),F=r(t("cl-select-date"),j),T=r(t("cl-select"),g),L=r(t("cl-input-number"),y),M=r(t("cl-checkbox"),x),N=r(t("cl-checkbox-group"),k),O=r(t("cl-radio"),h),P=r(t("cl-radio-group"),U),Q=r(t("cl-upload"),q),R=r(t("cl-textarea"),z),S=r(t("cl-icon"),w),W=r(t("cl-form"),V),X=r(t("cl-card"),B),Y=r(t("cl-button"),C),Z=r(t("cl-footer"),D),ee=v,le=r(t("cl-page"),A);return p(),s(le,{padding:20},{default:m((()=>[d(ee,{class:"page"},{default:m((()=>[d(X,{label:"基础用法"},{default:m((()=>[d(W,{ref_key:"Form",ref:H,modelValue:$.value,"onUpdate:modelValue":a[10]||(a[10]=e=>$.value=e),rules:E,disabled:I.value,"label-position":"left"},{default:m((()=>[d(u,{label:"活动名称",prop:"name"},{default:m((()=>[d(o,{modelValue:$.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>$.value.name=e),placeholder:"请填写活动名称"},null,8,["modelValue"])])),_:1}),d(u,{label:"活动时间",prop:"date"},{default:m((()=>[d(F,{modelValue:$.value.date,"onUpdate:modelValue":a[1]||(a[1]=e=>$.value.date=e)},null,8,["modelValue"])])),_:1}),d(u,{label:"活动类型",prop:"type"},{default:m((()=>[d(T,{modelValue:$.value.type,"onUpdate:modelValue":a[2]||(a[2]=e=>$.value.type=e),options:G.type},null,8,["modelValue","options"])])),_:1}),d(u,{label:"活动人数",prop:"num",justify:"end"},{default:m((()=>[d(L,{modelValue:$.value.num,"onUpdate:modelValue":a[3]||(a[3]=e=>$.value.num=e),min:1,max:100},null,8,["modelValue"])])),_:1}),d(u,{label:"活动区域",prop:"area","label-position":"top"},{default:m((()=>[d(N,{modelValue:$.value.area,"onUpdate:modelValue":a[4]||(a[4]=e=>$.value.area=e)},{default:m((()=>[(p(!0),i(n,null,c(G.area,((e,l)=>(p(),s(M,{key:l,label:e.value},{default:m((()=>[f(b(e.label),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),d(u,{label:"资源",prop:"source","label-position":"top"},{default:m((()=>[d(P,{modelValue:$.value.source,"onUpdate:modelValue":a[5]||(a[5]=e=>$.value.source=e)},{default:m((()=>[(p(!0),i(n,null,c(G.source,((e,l)=>(p(),s(O,{key:l,label:e.value},{default:m((()=>[f(b(e.label),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),d(u,{label:"活动封面",prop:"cover","label-position":"top"},{default:m((()=>[d(Q,{modelValue:$.value.cover,"onUpdate:modelValue":a[6]||(a[6]=e=>$.value.cover=e)},null,8,["modelValue"])])),_:1}),d(u,{label:"活动海报（最多上传6张）",prop:"pics","label-position":"top"},{default:m((()=>[d(Q,{modelValue:$.value.pics,"onUpdate:modelValue":a[7]||(a[7]=e=>$.value.pics=e),multiple:"",limit:6},null,8,["modelValue"])])),_:1}),d(u,{label:"活动描述",prop:"remark","label-position":"top"},{default:m((()=>[d(R,{modelValue:$.value.remark,"onUpdate:modelValue":a[8]||(a[8]=e=>$.value.remark=e),count:"",placeholder:"请填写活动描述"},null,8,["modelValue"])])),_:1}),d(u,{label:"活动赞助商",prop:"company","label-position":"top"},{append:m((()=>[d(S,{name:"help-border",size:36})])),default:m((()=>[d(o,{modelValue:$.value.company,"onUpdate:modelValue":a[9]||(a[9]=e=>$.value.company=e),placeholder:"请填写活动赞助商"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue","rules","disabled"])])),_:1}),d(Z,{border:""},{default:m((()=>[d(Y,{size:"large",round:"",fill:"",onClick:K},{default:m((()=>[f("清空")])),_:1}),d(Y,{size:"large",round:"",fill:"",onClick:J,type:"success",loading:I.value},{default:m((()=>[f("提交")])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})}}});export{T as default};
