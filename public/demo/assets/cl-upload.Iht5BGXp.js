import{d as e,r as a,x as s,a6 as l,a3 as t,am as r,S as o,aq as u,a as i,b as n,c as p,e as c,w as d,i as f,F as m,j as g,J as v,az as y,f as h,aA as _,K as x,A as b,R as k,g as z,t as j,z as A,B as S,k as R,l as T}from"./index-BXs9N0aO.js";import{_ as B}from"./cl-progress.DdIS5RSE.js";import{k as C,p as w}from"./cl-page.D0l32468.js";import{b as D,_ as O}from"./_plugin-vue_export-helper.D4XvEQHf.js";const U=O(e({name:"cl-upload",props:{modelValue:[String,Array],text:{type:String,default:"上传/拍摄"},sizeType:{type:[String,Array],default:()=>["original","compressed"]},sourceType:{type:Array,default:()=>["album","camera"]},size:{type:Array,default:()=>[200,200]},imageMode:{type:String,default:"aspectFill"},multiple:Boolean,limit:{type:Number,default:9},action:String,headers:Object,data:Object,name:{type:String,default:"file"},disabled:{type:Boolean,default:null},autoUpload:{type:Boolean,default:!0},test:Boolean},emits:["update:modelValue","change","exceed","success","error","upload","remove","progress"],setup(e,{emit:i}){const{disabled:n}=C(),p=a([]),c=a(),d=s((()=>n.value||e.disabled));l((()=>e.modelValue),(e=>{if(e){const a=p.value,s=t(e)?e:e.split(",");p.value=s.map((e=>{const s=a.find((a=>a.url==e));return{uid:s?s.uid:r(),url:e,progress:100}})).filter((e=>e.url))}}),{immediate:!0});const f=s((()=>{const a=p.value.length;return d.value?0==a:a<(e.multiple?e.limit:1)}));function m(e,a){const s=p.value.find((a=>a.uid==e));s&&(Object.assign(s,a),100==s.progress&&y())}function g(e){if(n.value)return!1;p.value.splice(e,1),i("remove",e),y()}function v(){return p.value.find((e=>100!=e.progress))}function y(){var a;if(!v()){const s=e.multiple?p.value.map((e=>e.url)):null==(a=p.value[0])?void 0:a.url;i("update:modelValue",s),i("change",s)}}return{isDisabled:d,list:p,index:c,isAppend:f,check:v,choose:function(a){if(d.value)return!1;c.value=a;const s=void 0===c.value?e.limit-p.value.length:1;if(s<=0)return i("exceed",p.value),!1;o({sizeType:e.sizeType,sourceType:e.sourceType,count:s,success(a){a.tempFiles.forEach((async a=>{const s=function(e){let a={};void 0!==c.value?(a=p.value[c.value],a.progress=0,a.url=e):(a={uid:r(),url:e,progress:0},p.value.push(a));return a.uid}(a.path);function l(e){e?(m(s,{url:e,progress:100}),i("success",e,a)):t()}function t(e="图片地址错误"){i("error",e),g(p.value.findIndex((e=>e.uid==s)))}if(e.test)return l(a.path);if(e.action){u({url:e.action||"",filePath:a.path,name:e.name,header:e.headers,formData:e.data,success:e=>{const{data:a}=JSON.parse(e.data);l(a)},fail:t}).onProgressUpdate((e=>{i("progress",e)}))}else e.autoUpload?D(a,{onProgressUpdate:({progress:e})=>{m(s,{progress:e})}}).then(l).catch(t):i("upload",{file:a,done:l,fail:t,update:m,uid:s})}))}})},update:m,remove:g,parseRpx:w}}}),[["render",function(e,a,s,l,t,r){const o=S,u=R,C=i(n("cl-progress"),B),w=T;return p(),c(w,{class:A(["cl-upload-list",[{"is-disabled":e.isDisabled}]])},{default:d((()=>[(p(!0),f(m,null,g(e.list,((a,s)=>(p(),c(w,{class:"cl-upload",key:a.uid,style:v({height:e.parseRpx(e.size[0]),width:e.parseRpx(e.size[1])}),onClick:a=>e.choose(s)},{default:d((()=>[y(h(o,{class:"cl-upload__target",src:a.url,mode:e.imageMode},null,8,["src","mode"]),[[_,a.url]]),e.isDisabled?b("",!0):(p(),c(u,{key:0,class:"cl-upload__remove cl-icon-toast-error",onClick:x((a=>e.remove(s)),["stop"])},null,8,["onClick"])),a.progress<100?(p(),c(w,{key:1,class:"cl-upload__progress"},{default:d((()=>[h(C,{value:a.progress,"show-text":!1},null,8,["value"])])),_:2},1024)):b("",!0)])),_:2},1032,["style","onClick"])))),128)),e.isAppend?(p(),c(w,{key:0,class:"cl-upload",style:v({height:e.parseRpx(e.size[0]),width:e.parseRpx(e.size[1])}),onClick:a[0]||(a[0]=a=>e.choose())},{default:d((()=>[k(e.$slots,"default",{},(()=>[h(w,{class:"cl-upload__demo"},{default:d((()=>[h(u,{class:"cl-icon-camera-fill"}),e.text?(p(),c(u,{key:0,class:"text"},{default:d((()=>[z(j(e.text),1)])),_:1})):b("",!0)])),_:1})]))])),_:3},8,["style"])):b("",!0)])),_:3},8,["class"])}]]);export{U as _};