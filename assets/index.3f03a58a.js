import{A as f}from"./AppType.2d728c69.js";import{I as p}from"./index.728f5949.js";import{C as u}from"./index.380d94ba.js";import{u as h,a as m,_ as k,b as w,c as C,w as F}from"./en-US.c590db11.js";import{_ as v}from"./elevation.42ce02b4.js";import{d,o as x,c as b,a as r,h as e,w as o,F as B,l as t,t as c}from"./vendor.7d218dee.js";import"./shared.5973ad73.js";import"./elements.412991f3.js";var U={basicUsage:"\u57FA\u672C\u4F7F\u7528",showIcon:"\u663E\u793A\u56FE\u6807",showDesc:"\u663E\u793A\u63CF\u8FF0",showBorder:"\u663E\u793A\u8FB9\u6846",content:"\u8FD9\u662F\u5355\u5143\u683C",description:"\u63CF\u8FF0"},j={basicUsage:"Basic Usage",showIcon:"Show Icon",showDesc:"Show Description",showBorder:"Show Border",content:"This is Cell",description:"Description"};const{add:_,use:N,pack:S,packs:M,merge:O}=h(),g=i=>{C(i),N(i)};m("zh-CN",k);m("en-US",w);_("zh-CN",U);_("en-US",j);const A={name:"CellExample",components:{[u.name]:u,[p.name]:p,AppType:f},setup(){return F(g),{pack:S}}};function D(i,E,I,n,y,z){const s=d("app-type"),a=d("var-cell"),l=d("var-icon");return x(),b(B,null,[r("div",null,[e(s,null,{default:o(()=>[t(c(n.pack.basicUsage),1)]),_:1}),e(a,null,{default:o(()=>[t(c(n.pack.content),1)]),_:1}),e(a,null,{default:o(()=>[t(c(n.pack.content),1)]),_:1})]),r("div",null,[e(s,null,{default:o(()=>[t(c(n.pack.showIcon),1)]),_:1}),e(a,{icon:"fire",title:n.pack.content},{extra:o(()=>[e(l,{name:"information"})]),_:1},8,["title"]),e(a,{icon:"fire",title:n.pack.content},{extra:o(()=>[e(l,{name:"information"})]),_:1},8,["title"])]),r("div",null,[e(s,null,{default:o(()=>[t(c(n.pack.showDesc),1)]),_:1}),e(a,{icon:"fire",title:n.pack.content,desc:n.pack.description},{extra:o(()=>[e(l,{name:"information"})]),_:1},8,["title","desc"]),e(a,{title:n.pack.content,desc:n.pack.description},null,8,["title","desc"])]),r("div",null,[e(s,null,{default:o(()=>[t(c(n.pack.showBorder),1)]),_:1}),e(a,{border:""},{default:o(()=>[t(c(n.pack.content),1)]),_:1}),e(a,{border:""},{default:o(()=>[t(c(n.pack.content),1)]),_:1})])],64)}var P=v(A,[["render",D]]);export{P as default};
