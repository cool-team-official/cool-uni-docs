import{V as a,z as s,ap as e,aq as t,ar as o,as as r,at as n,X as c,A as i,ag as u,Z as p}from"./index-BvXgjcLf.js";async function d(i,u){const{onProgressUpdate:p,onTask:d}=u||{},{mode:l,type:f}=await a.base.comm.uploadMode(),{user:m}=s(),h="local"==l,k=e()+"_"+(i.name||t(i.path)),b=h?k:o("app",r().format("YYYY-MM-DD"),k);return new Promise(((s,e)=>{function t({host:a,preview:t,data:r}){const c={...r,key:b},u=n({url:a,filePath:i.path,name:"file",header:h?{Authorization:m.token}:{},formData:c,success(r){if(h){const{code:a,data:t,message:o}=JSON.parse(r.data);1e3==a?s(t):e(o)}else s(o(t||a,c.key))},fail(a){e(a)}});d&&d(u),p&&u.onProgressUpdate(p)}h?t({host:c.baseUrl+"/app/base/comm/upload"}):a.base.comm.upload("aws"==f?{key:b}:{}).then((a=>{switch(f){case"cos":t({host:a.url,data:a.credentials});break;case"oss":t({host:a.host,data:{OSSAccessKeyId:a.OSSAccessKeyId,policy:a.policy,signature:a.signature}});break;case"qiniu":t({host:a.uploadUrl,preview:a.publicDomain,data:{token:a.token}});break;case"aws":t({host:a.url,data:a.fields})}})).catch(e)}))}function l(){const a=i({});return{refs:a,setRefs:function(s){return e=>{a[s]=e}}}}function f(){return{router:u,service:a,upload:d,storage:p,...l()}}const m=(a,s)=>{const e=a.__vccOpts||a;for(const[t,o]of s)e[t]=o;return e};export{m as _,l as a,d as b,f as u};
