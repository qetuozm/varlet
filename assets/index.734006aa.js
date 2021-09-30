var x=Object.defineProperty;var i=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var v=(e,a,u)=>a in e?x(e,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[a]=u,b=(e,a)=>{for(var u in a||(a={}))y.call(a,u)&&v(e,u,a[u]);if(i)for(var u of i(a))F.call(a,u)&&v(e,u,a[u]);return e};import{I as h}from"./index.f013a88b.js";import{B as V}from"./index.743d106c.js";import{I as f}from"./index.728f5949.js";import{A as C}from"./AppType.2d728c69.js";import{u as j,a as k,_ as B,b as E,c as I,w as A}from"./en-US.c590db11.js";import{_}from"./elevation.42ce02b4.js";import{p as T,_ as M,d as m,o as N,c as S,h as l,w as p,F as w,W as D,X as z,l as r,t,a as L}from"./vendor.7d218dee.js";import"./provide.195ac409.js";import"./components.81bffda1.js";import"./shared.5973ad73.js";import"./index.40559b3e.js";import"./index.c3bfc59b.js";import"./elements.412991f3.js";var P={basicUsage:"\u57FA\u672C\u4F7F\u7528",plainMode:"\u6734\u7D20\u6A21\u5F0F",textarea:"\u6587\u672C\u57DF",maxlength:"\u6700\u5927\u957F\u5EA6",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",clearable:"\u53EF\u6E05\u9664",displayIcon:"\u663E\u793A\u56FE\u6807",validate:"\u5B57\u6BB5\u6821\u9A8C",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",maxMessage:"\u6587\u672C\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E6",clearableText:"\u53EF\u6E05\u9664\u6587\u672C"},R={basicUsage:"Basic Usage",plainMode:"Plain Mode",textarea:"Textarea",maxlength:"Maxlength",disabled:"Disabled",readonly:"Readonly",clearable:"Clearable",displayIcon:"Display Icon",validate:"Validate",placeholder:"Please enter text",maxMessage:"Text length must be greater than 6",clearableText:"Clearable Text"};const{add:g,use:W,pack:U,packs:te,merge:me}=j(),X=e=>{I(e),W(e)};k("zh-CN",B);k("en-US",E);g("zh-CN",P);g("en-US",R);const q={name:"InputExample",components:{[h.name]:h,[V.name]:V,[f.name]:f,AppType:C},setup(){const e=T({value:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:""});return A(a=>{X(a),e.value5=U.value.clearableText}),b({pack:U},M(e))}},G=e=>(D("data-v-5e0e34ce"),e=e(),z(),e),H=G(()=>L("div",{style:{height:"40px"}},null,-1));function J(e,a,u,o,K,O){const n=m("app-type"),s=m("var-input"),c=m("var-icon");return N(),S(w,null,[l(n,{class:"pb"},{default:p(()=>[r(t(o.pack.basicUsage),1)]),_:1}),l(s,{placeholder:o.pack.placeholder,modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=d=>e.value=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[r(t(o.pack.plainMode),1)]),_:1}),l(s,{hint:!1,line:!1,placeholder:o.pack.placeholder,modelValue:e.value7,"onUpdate:modelValue":a[1]||(a[1]=d=>e.value7=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[r(t(o.pack.textarea),1)]),_:1}),l(s,{placeholder:o.pack.placeholder,textarea:"",modelValue:e.value2,"onUpdate:modelValue":a[2]||(a[2]=d=>e.value2=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[r(t(o.pack.maxlength),1)]),_:1}),l(s,{placeholder:o.pack.placeholder,maxlength:10,modelValue:e.value8,"onUpdate:modelValue":a[3]||(a[3]=d=>e.value8=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[r(t(o.pack.disabled),1)]),_:1}),l(s,{placeholder:o.pack.placeholder,disabled:"",modelValue:e.value3,"onUpdate:modelValue":a[4]||(a[4]=d=>e.value3=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[r(t(o.pack.readonly),1)]),_:1}),l(s,{placeholder:o.pack.placeholder,readonly:"",modelValue:e.value4,"onUpdate:modelValue":a[5]||(a[5]=d=>e.value4=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[r(t(o.pack.clearable),1)]),_:1}),l(s,{placeholder:o.pack.placeholder,clearable:"",modelValue:e.value5,"onUpdate:modelValue":a[6]||(a[6]=d=>e.value5=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[r(t(o.pack.displayIcon),1)]),_:1}),l(s,{placeholder:o.pack.placeholder,modelValue:e.value6,"onUpdate:modelValue":a[7]||(a[7]=d=>e.value6=d)},{"prepend-icon":p(()=>[l(c,{class:"prepend-icon",name:"plus"})]),"append-icon":p(()=>[l(c,{class:"append-icon",name:"minus"})]),_:1},8,["placeholder","modelValue"]),l(n,null,{default:p(()=>[r(t(o.pack.validate),1)]),_:1}),l(s,{placeholder:o.pack.placeholder,rules:[d=>d.length>6||o.pack.maxMessage],modelValue:e.value9,"onUpdate:modelValue":a[8]||(a[8]=d=>e.value9=d)},null,8,["placeholder","rules","modelValue"]),H],64)}var ce=_(q,[["render",J],["__scopeId","data-v-5e0e34ce"]]);export{ce as default};
