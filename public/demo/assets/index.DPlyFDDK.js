import{aI as o}from"./index-BsPE-n5_.js";function r({color:r,max:e,value:l}){if(o(r))return r;{const t=r.map(((l,t)=>o(l)?{color:l,value:(t+1)*(e/r.length)}:l)).sort(((o,r)=>o.value-r.value));for(let o=0;o<t.length;o++)if(t[o].value>=l)return t[o].color;return t[t.length-1].color}}export{r as g};
