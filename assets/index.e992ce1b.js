var F=Object.defineProperty,U=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var i=(e,a,o)=>a in e?F(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,v=(e,a)=>{for(var o in a||(a={}))y.call(a,o)&&i(e,o,a[o]);if(m)for(var o of m(a))k.call(a,o)&&i(e,o,a[o]);return e},V=(e,a)=>U(e,b(a));import{C as f}from"./index.e45b023e.js";import{A as z}from"./AppType.2d728c69.js";import{u as c,a as g,_ as E,b as h,c as j,w as S}from"./en-US.c590db11.js";import{_ as A}from"./elevation.42ce02b4.js";import{p as N,_ as D,d as B,o as w,c as _,h as u,w as t,F as I,W as T,X as x,l as p,t as r,a as M}from"./vendor.7d218dee.js";import"./index.728f5949.js";import"./shared.5973ad73.js";import"./elements.412991f3.js";import"./index.40559b3e.js";import"./provide.195ac409.js";import"./components.81bffda1.js";var L={basicUsage:"\u57FA\u672C\u4F7F\u7528",range:"\u8BBE\u7F6E\u53D6\u503C\u8303\u56F4",step:"\u8BBE\u7F6E\u6B65\u957F",toFixed:"\u4FDD\u7559\u5C0F\u6570",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",lazyChange:"\u5F02\u6B65\u53D8\u66F4",size:"\u8BBE\u7F6E\u5C3A\u5BF8",validate:"\u5B57\u6BB5\u6821\u9A8C",validateMessage:"\u8BF7\u9009\u62E9\u5927\u4E8E5\u7684\u503C"},R={basicUsage:"Basic Usage",range:"Set the value range",step:"Set step",toFixed:"Decimal length",disabled:"Disabled",readonly:"Readonly",lazyChange:"Asynchronous change",size:"Set size",validate:"Validate",validateMessage:"Please select a value greater than 5"};const{add:C,use:P,pack:W,packs:te,merge:pe}=c(),X=e=>{j(e),P(e)};g("zh-CN",E);g("en-US",h);C("zh-CN",L);C("en-US",R);const q={name:"CounterExample",components:{[f.name]:f,AppType:z},setup(){const e=N({value:0,value2:0,value3:0,value4:0,value5:0,value6:0,value7:0,value8:0,value9:0}),a=(o,d)=>{setTimeout(()=>{d(o)},500)};return S(X),V(v({pack:W},D(e)),{handleBeforeChange:a})}},G=e=>(T("data-v-53edbf6a"),e=e(),x(),e),H=G(()=>M("div",{class:"space"},null,-1));function J(e,a,o,d,K,O){const n=B("app-type"),s=B("var-counter");return w(),_(I,null,[u(n,null,{default:t(()=>[p(r(d.pack.basicUsage),1)]),_:1}),u(s,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[p(r(d.pack.range),1)]),_:1}),u(s,{min:0,max:5,modelValue:e.value2,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value2=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[p(r(d.pack.step),1)]),_:1}),u(s,{step:10,modelValue:e.value3,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value3=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[p(r(d.pack.toFixed),1)]),_:1}),u(s,{"decimal-length":1,modelValue:e.value4,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value4=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[p(r(d.pack.size),1)]),_:1}),u(s,{"input-text-size":"18px","input-width":"50px","button-size":"36px",modelValue:e.value5,"onUpdate:modelValue":a[4]||(a[4]=l=>e.value5=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[p(r(d.pack.disabled),1)]),_:1}),u(s,{disabled:"",modelValue:e.value6,"onUpdate:modelValue":a[5]||(a[5]=l=>e.value6=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[p(r(d.pack.readonly),1)]),_:1}),u(s,{readonly:"",modelValue:e.value7,"onUpdate:modelValue":a[6]||(a[6]=l=>e.value7=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[p(r(d.pack.lazyChange),1)]),_:1}),u(s,{"lazy-change":"",modelValue:e.value8,"onUpdate:modelValue":a[7]||(a[7]=l=>e.value8=l),onBeforeChange:d.handleBeforeChange},null,8,["modelValue","onBeforeChange"]),u(n,null,{default:t(()=>[p(r(d.pack.validate),1)]),_:1}),u(s,{rules:[l=>l>5||d.pack.validateMessage],modelValue:e.value9,"onUpdate:modelValue":a[8]||(a[8]=l=>e.value9=l)},null,8,["rules","modelValue"]),H],64)}var re=A(q,[["render",J],["__scopeId","data-v-53edbf6a"]]);export{re as default};
