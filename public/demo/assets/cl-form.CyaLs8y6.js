import{d as e,f as r,c as t,aa as n,a5 as a,S as i,a6 as s,a7 as l,o as u,a as o,w as f,b as d,r as c,q as p,t as m,G as v,p as y,n as h,i as g,y as b,k as q,l as w}from"./index-CzDL0q2O.js";import{g as O,u as x,p as j,i as F,e as _}from"./cl-page.DOOy25Dj.js";import{i as P}from"./isBoolean.B7PhcbKY.js";import{_ as E,u as A}from"./_plugin-vue_export-helper.DhhdjX9X.js";import{c as R}from"./cloneDeep.DqIkGiC_.js";function S(){return S=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},S.apply(this,arguments)}var $=/%[sdj%]/g,V=function(){};function k(e){if(!e||!e.length)return null;var r={};return e.forEach((function(e){var t=e.field;r[t]=r[t]||[],r[t].push(e)})),r}function C(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=1,a=r[0],i=r.length;if("function"==typeof a)return a.apply(null,r.slice(1));if("string"==typeof a){for(var s=String(a).replace($,(function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}break;default:return e}})),l=r[n];n<i;l=r[++n])s+=" "+l;return s}return a}function T(e,r){return null==e||(!("array"!==r||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"pattern"===e}(r)||"string"!=typeof e||e))}function B(e,r,t){var n=0,a=e.length;!function i(s){if(s&&s.length)t(s);else{var l=n;n+=1,l<a?r(e[l],i):t([])}}([])}function N(e,r,t,n){if(r.first){var a=new Promise((function(r,a){var i=function(e){var r=[];return Object.keys(e).forEach((function(t){r.push.apply(r,e[t])})),r}(e);B(i,t,(function(e){return n(e),e.length?a({errors:e,fields:k(e)}):r()}))}));return a.catch((function(e){return e})),a}var i=r.firstFields||[];!0===i&&(i=Object.keys(e));var s=Object.keys(e),l=s.length,u=0,o=[],f=new Promise((function(r,a){var f=function(e){if(o.push.apply(o,e),++u===l)return n(o),o.length?a({errors:o,fields:k(o)}):r()};s.forEach((function(r){var n=e[r];-1!==i.indexOf(r)?B(n,t,f):function(e,r,t){var n=[],a=0,i=e.length;function s(e){n.push.apply(n,e),++a===i&&t(n)}e.forEach((function(e){r(e,s)}))}(n,t,f)}))}));return f.catch((function(e){return e})),f}function W(e){return function(r){return r&&r.message?(r.field=r.field||e.fullField,r):{message:"function"==typeof r?r():r,field:r.field||e.fullField}}}function z(e,r){if(r)for(var t in r)if(r.hasOwnProperty(t)){var n=r[t];"object"==typeof n&&"object"==typeof e[t]?e[t]=S({},e[t],{},n):e[t]=n}return e}function D(e,r,t,n,a,i){!e.required||t.hasOwnProperty(e.field)&&!T(r,i||e.type)||n.push(C(a.messages.required,e.fullField))}var M={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},J={integer:function(e){return J.number(e)&&parseInt(e,10)===e},float:function(e){return J.number(e)&&!J.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(r){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"==typeof e&&!J.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&!!e.match(M.email)&&e.length<255},url:function(e){return"string"==typeof e&&!!e.match(M.url)},hex:function(e){return"string"==typeof e&&!!e.match(M.hex)}};var I={required:D,whitespace:function(e,r,t,n,a){(/^\s+$/.test(r)||""===r)&&n.push(C(a.messages.whitespace,e.fullField))},type:function(e,r,t,n,a){if(e.required&&void 0===r)D(e,r,t,n,a);else{var i=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(i)>-1?J[i](r)||n.push(C(a.messages.types[i],e.fullField,e.type)):i&&typeof r!==e.type&&n.push(C(a.messages.types[i],e.fullField,e.type))}},range:function(e,r,t,n,a){var i="number"==typeof e.len,s="number"==typeof e.min,l="number"==typeof e.max,u=r,o=null,f="number"==typeof r,d="string"==typeof r,c=Array.isArray(r);if(f?o="number":d?o="string":c&&(o="array"),!o)return!1;c&&(u=r.length),d&&(u=r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),i?u!==e.len&&n.push(C(a.messages[o].len,e.fullField,e.len)):s&&!l&&u<e.min?n.push(C(a.messages[o].min,e.fullField,e.min)):l&&!s&&u>e.max?n.push(C(a.messages[o].max,e.fullField,e.max)):s&&l&&(u<e.min||u>e.max)&&n.push(C(a.messages[o].range,e.fullField,e.min,e.max))},enum:function(e,r,t,n,a){e.enum=Array.isArray(e.enum)?e.enum:[],-1===e.enum.indexOf(r)&&n.push(C(a.messages.enum,e.fullField,e.enum.join(", ")))},pattern:function(e,r,t,n,a){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||n.push(C(a.messages.pattern.mismatch,e.fullField,r,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(r)||n.push(C(a.messages.pattern.mismatch,e.fullField,r,e.pattern))}}};function Z(e,r,t,n,a){var i=e.type,s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(T(r,i)&&!e.required)return t();I.required(e,r,n,s,a,i),T(r,i)||I.type(e,r,n,s,a)}t(s)}var G={string:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(T(r,"string")&&!e.required)return t();I.required(e,r,n,i,a,"string"),T(r,"string")||(I.type(e,r,n,i,a),I.range(e,r,n,i,a),I.pattern(e,r,n,i,a),!0===e.whitespace&&I.whitespace(e,r,n,i,a))}t(i)},method:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(T(r)&&!e.required)return t();I.required(e,r,n,i,a),void 0!==r&&I.type(e,r,n,i,a)}t(i)},number:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(""===r&&(r=void 0),T(r)&&!e.required)return t();I.required(e,r,n,i,a),void 0!==r&&(I.type(e,r,n,i,a),I.range(e,r,n,i,a))}t(i)},boolean:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(T(r)&&!e.required)return t();I.required(e,r,n,i,a),void 0!==r&&I.type(e,r,n,i,a)}t(i)},regexp:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(T(r)&&!e.required)return t();I.required(e,r,n,i,a),T(r)||I.type(e,r,n,i,a)}t(i)},integer:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(T(r)&&!e.required)return t();I.required(e,r,n,i,a),void 0!==r&&(I.type(e,r,n,i,a),I.range(e,r,n,i,a))}t(i)},float:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(T(r)&&!e.required)return t();I.required(e,r,n,i,a),void 0!==r&&(I.type(e,r,n,i,a),I.range(e,r,n,i,a))}t(i)},array:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(T(r,"array")&&!e.required)return t();I.required(e,r,n,i,a,"array"),T(r,"array")||(I.type(e,r,n,i,a),I.range(e,r,n,i,a))}t(i)},object:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(T(r)&&!e.required)return t();I.required(e,r,n,i,a),void 0!==r&&I.type(e,r,n,i,a)}t(i)},enum:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(T(r)&&!e.required)return t();I.required(e,r,n,i,a),void 0!==r&&I.enum(e,r,n,i,a)}t(i)},pattern:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(T(r,"string")&&!e.required)return t();I.required(e,r,n,i,a),T(r,"string")||I.pattern(e,r,n,i,a)}t(i)},date:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(T(r)&&!e.required)return t();var s;if(I.required(e,r,n,i,a),!T(r))s="number"==typeof r?new Date(r):r,I.type(e,s,n,i,a),s&&I.range(e,s.getTime(),n,i,a)}t(i)},url:Z,hex:Z,email:Z,required:function(e,r,t,n,a){var i=[],s=Array.isArray(r)?"array":typeof r;I.required(e,r,n,i,a,s),t(i)},any:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(T(r)&&!e.required)return t();I.required(e,r,n,i,a)}t(i)}};function U(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Y=U();function H(e){this.rules=null,this._messages=Y,this.define(e)}H.prototype={messages:function(e){return e&&(this._messages=z(U(),e)),this._messages},define:function(e){if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");var r,t;for(r in this.rules={},e)e.hasOwnProperty(r)&&(t=e[r],this.rules[r]=Array.isArray(t)?t:[t])},validate:function(e,r,t){var n=this;void 0===r&&(r={}),void 0===t&&(t=function(){});var a,i,s=e,l=r,u=t;if("function"==typeof l&&(u=l,l={}),!this.rules||0===Object.keys(this.rules).length)return u&&u(),Promise.resolve();if(l.messages){var o=this.messages();o===Y&&(o=U()),z(o,l.messages),l.messages=o}else l.messages=this.messages();var f={};(l.keys||Object.keys(this.rules)).forEach((function(r){a=n.rules[r],i=s[r],a.forEach((function(t){var a=t;"function"==typeof a.transform&&(s===e&&(s=S({},s)),i=s[r]=a.transform(i)),(a="function"==typeof a?{validator:a}:S({},a)).validator=n.getValidationMethod(a),a.field=r,a.fullField=a.fullField||r,a.type=n.getType(a),a.validator&&(f[r]=f[r]||[],f[r].push({rule:a,value:i,source:s,field:r}))}))}));var d={};return N(f,l,(function(e,r){var t,n=e.rule,a=!("object"!==n.type&&"array"!==n.type||"object"!=typeof n.fields&&"object"!=typeof n.defaultField);function i(e,r){return S({},r,{fullField:n.fullField+"."+e})}function s(t){void 0===t&&(t=[]);var s=t;if(Array.isArray(s)||(s=[s]),!l.suppressWarning&&s.length&&H.warning("async-validator:",s),s.length&&n.message&&(s=[].concat(n.message)),s=s.map(W(n)),l.first&&s.length)return d[n.field]=1,r(s);if(a){if(n.required&&!e.value)return s=n.message?[].concat(n.message).map(W(n)):l.error?[l.error(n,C(l.messages.required,n.field))]:[],r(s);var u={};if(n.defaultField)for(var o in e.value)e.value.hasOwnProperty(o)&&(u[o]=n.defaultField);for(var f in u=S({},u,{},e.rule.fields))if(u.hasOwnProperty(f)){var c=Array.isArray(u[f])?u[f]:[u[f]];u[f]=c.map(i.bind(null,f))}var p=new H(u);p.messages(l.messages),e.rule.options&&(e.rule.options.messages=l.messages,e.rule.options.error=l.error),p.validate(e.value,e.rule.options||l,(function(e){var t=[];s&&s.length&&t.push.apply(t,s),e&&e.length&&t.push.apply(t,e),r(t.length?t:null)}))}else r(s)}a=a&&(n.required||!n.required&&e.value),n.field=e.field,n.asyncValidator?t=n.asyncValidator(n,e.value,s,e.source,l):n.validator&&(!0===(t=n.validator(n,e.value,s,e.source,l))?s():!1===t?s(n.message||n.field+" fails"):t instanceof Array?s(t):t instanceof Error&&s(t.message)),t&&t.then&&t.then((function(){return s()}),(function(e){return s(e)}))}),(function(e){!function(e){var r,t,n,a=[],i={};for(r=0;r<e.length;r++)t=e[r],n=void 0,Array.isArray(t)?a=(n=a).concat.apply(n,t):a.push(t);a.length?i=k(a):(a=null,i=null),u(a,i)}(e)}))},getType:function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!G.hasOwnProperty(e.type))throw new Error(C("Unknown rule type %s",e.type));return e.type||"string"},getValidationMethod:function(e){if("function"==typeof e.validator)return e.validator;var r=Object.keys(e),t=r.indexOf("message");return-1!==t&&r.splice(t,1),1===r.length&&"required"===r[0]?G.required:G[this.getType(e)]||!1}},H.register=function(e,r){if("function"!=typeof r)throw new Error("Cannot register a validator by type, validator is not a function");G[e]=r},H.warning=V,H.messages=Y;const K=E(e({name:"cl-form-item",props:{prop:String,label:String,labelWidth:[String,Number],labelPosition:String,justify:String,rules:{type:Object,default:null},validateOnRuleChange:{type:Boolean,default:null},required:Boolean},setup(e){var u;const{proxy:o}=s(),f=O("cl-form",["form","rules","tips","labelWidth","labelPosition","justify","addField","removeField","validateOnRuleChange"],["clearValidate","onError","scrollTo"]),d=null==(u=e.prop)?void 0:u.replace(/\./g,"-"),c=r(),p=r(""),m=r(e.required||!1),v=t((()=>{var r;return e.labelPosition||(null==(r=f.value)?void 0:r.labelPosition)})),y=t((()=>{var r;return"top"==v.value?"auto":j(e.labelWidth||(null==(r=f.value)?void 0:r.labelWidth))})),h=t((()=>{var r;return`is-justify--${e.justify||(null==(r=f.value)?void 0:r.justify)}`})),g=t((()=>{var e;return"inner"==(null==(e=f.value)?void 0:e.tips)&&p.value}));let b=null;function q(){m.value?null==b||b.validate({[e.prop]:c.value},(e=>{p.value=e?e[0].message:""})):w()}function w(){p.value=""}return n((()=>{var r;return[null==(r=f.value)?void 0:r.rules,e.rules]}),(function(r){var t;if(!e.prop)return;const n=e.rules||(null==r?void 0:r[e.prop]);n&&(m.value||(m.value=!1,l(n)?n.forEach((e=>{e.required&&(m.value=e.required)})):m.value=n.required),b=new H({[e.prop]:n}),(P(e.validateOnRuleChange)?e.validateOnRuleChange:null==(t=f.value)?void 0:t.validateOnRuleChange)&&q())}),{immediate:!0,deep:!0}),n((()=>{var r,t;if(f.value){let n=null==(r=f.value)?void 0:r.form;return(null==(t=e.prop)?void 0:t.includes("."))?(e.prop.split(".").forEach((e=>{void 0!==n[e]&&(n=n[e])})),n):n[e.prop]}}),(e=>{c.value=e,q()}),{deep:!0}),n(f,(r=>{var t;r&&(null==(t=f.value)||t.addField(e.prop,e.rules))}),{immediate:!0}),a((()=>{var r;null==(r=f.value)||r.removeField(e.prop)})),{id:d,message:p,isRequired:m,labelWidth:y,labelPosition:v,justify:h,showMessage:g,validate:q,clearValidate:w,scrollTo:function(r){r==e.prop&&i().in(o).select(`#cl-form-item--${d}`).boundingClientRect((e=>{e&&o.$root.scrollTo(e.top)})).exec()},onError:function(r){const t=r.find((r=>r.field==e.prop));t&&(p.value=t.message)},...x()}}}),[["render",function(e,r,t,n,a,i){const s=g,l=b;return u(),o(s,{class:h(["cl-form-item",[`is-${e.labelPosition}`,{"is-error":!!e.message,"is-required":e.isRequired}]]),style:d([e.baseStyle]),id:`cl-form-item--${e.id}`,ref:"cl-form-item"},{default:f((()=>[e.label||e.$slots.label?(u(),o(s,{key:0,class:"cl-form-item__label",style:d({width:e.parseRpx(e.labelWidth)})},{default:f((()=>[c(e.$slots,"label",{},(()=>[p(m(e.label),1)]))])),_:3},8,["style"])):v("",!0),y(s,{class:"cl-form-item__container"},{default:f((()=>[y(s,{class:h(["cl-form-item__content",[e.justify]])},{default:f((()=>[c(e.$slots,"default")])),_:3},8,["class"]),e.$slots.append?(u(),o(s,{key:0,class:"cl-form-item__append"},{default:f((()=>[c(e.$slots,"append")])),_:3})):v("",!0)])),_:3}),c(e.$slots,"error",{message:e.message,error:!!e.message},(()=>[e.showMessage?(u(),o(l,{key:0,class:"cl-form-item__message"},{default:f((()=>[p(m(e.message),1)])),_:1})):v("",!0)]))])),_:3},8,["class","style","id"])}]]);const L=E(e({name:"cl-form",props:{modelValue:{type:Object,default:()=>({})},rules:Object,border:Boolean,disabled:Boolean,justify:String,tips:{type:String,default:"toast"},labelWidth:{type:[String,Number],default:150},labelPosition:{type:String,default:"left"},validateOnRuleChange:{type:Boolean,default:!1},scrollToError:{type:Boolean,default:!0}},emits:["update:modelValue","change","reset","clear"],setup(e,{emit:t}){const{proxy:a}=s(),{refs:i,setRefs:u}=A(),o=r([]),f=r({}),d=R(e.modelValue);n((()=>e.modelValue),(e=>{f.value=e}),{immediate:!0,deep:!0});const c=r({});function p(e){c.value=e||{}}function m(e,r){if(F(e))r(!0,[]);else{const t={};o.value.forEach((e=>{c.value[e]&&(t[e]=c.value[e])}));const n=new H(t),a=l(e)?e:[e],i={};a.forEach((e=>{let r=f.value;e&&(e.includes(".")?e.split(".").forEach((e=>{r=r[e]})):r=r[e],i[e]=r)})),n.validate(i,(e=>{r&&r(!e,e)}))}}function v(){(a.__children||[]).forEach((e=>{e.clearValidate()}))}return n((()=>e.rules),p,{immediate:!0,deep:!0}),{refs:i,setRefs:u,form:f,rules:c,setRules:p,validate:function(r){e.disabled||m(o.value,((t,n,s)=>{if(r&&r(t,n),!t){const{field:r,message:t}=n[0];switch(e.scrollToError&&a.__children.forEach((e=>{e.scrollTo(r)})),e.tips){case"toast":i.toast.open({message:t,icon:"cl-icon-toast-warning"});break;case"inner":a.__children.forEach((e=>{e.onError(n)}))}}}))},validateField:m,reset:function(){f.value=R(d),t("update:modelValue",f.value),t("reset"),v()},clear:function(){f.value={},t("update:modelValue",f.value),t("clear"),v()},clearValidate:v,addField:function(e,r){!o.value.find((r=>r==e))&&e&&(o.value.push(e),r&&(c.value[e]=r))},removeField:function(e){o.value.splice(o.value.indexOf(e),1)}}}}),[["render",function(e,r,t,n,a,i){const s=q(w("cl-toast"),_),l=g;return u(),o(l,{class:h(["cl-form",{"is-border":e.border}])},{default:f((()=>[c(e.$slots,"default"),y(s,{ref:e.setRefs("toast")},null,512)])),_:3},8,["class"])}]]);export{K as _,L as a};
