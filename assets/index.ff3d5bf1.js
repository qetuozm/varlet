import{t as m}from"./shared.5973ad73.js";import{_ as $}from"./elevation.42ce02b4.js";import{q as A,b as z,o,c as t,a as l,n as p,f as v,m as F,A as y,B as C,l as i,t as c,r as P,x as U,H as E,d as S,h as r,w as _,W as I,X as T}from"./vendor.7d218dee.js";import{A as D}from"./AppType.2d728c69.js";import{u as L,a as B,_ as W,b as j,c as M,w as H}from"./en-US.c590db11.js";function q(e){return["linear","circle"].includes(e)}const X={mode:{type:String,default:"linear",validator:q},lineWidth:{type:[Number,String],default:4},color:{type:String},trackColor:{type:String},ripple:{type:Boolean,default:!1},value:{type:[Number,String],default:0},label:{type:Boolean,default:!1},size:{type:Number,default:40},rotate:{type:Number,default:0},track:{type:Boolean,default:!0}};const G=A({name:"VarProgress",inheritAttrs:!1,props:X,setup(e){const d=z(()=>{const s=m(e.value),h=s>100?100:s,u=s>100?100:Math.round(s);return{width:`${h}%`,roundValue:`${u}%`}}),g=z(()=>{const{size:s,lineWidth:h,value:u}=e,n=`0 0 ${s} ${s}`,a=m(u)>100?100:Math.round(m(u)),w=(s-m(h))/2,k=2*Math.PI*w,V=`${a/100*k}, ${k}`;return{viewBox:n,radius:w,strokeDasharray:V,perimeter:k,roundValue:`${a}%`}});return{linearProps:d,circleProps:g}}}),J={class:"var-progress"},K={key:0,class:"var-progress-linear"},O=["viewBox"],Q=["cx","cy","r","stroke-width"],R=["cx","cy","r","stroke-width"];function Y(e,d,g,s,h,u){return o(),t("div",J,[e.mode==="linear"?(o(),t("div",K,[l("div",y({class:"var-progress-linear__block",style:{height:`${e.lineWidth}px`}},e.$attrs),[e.track?(o(),t("div",{key:0,class:"var-progress-linear__background",style:p({background:e.trackColor})},null,4)):v("v-if",!0),l("div",{class:F(`var-progress-linear__certain${e.ripple?" var-progress-linear__ripple":""}`),style:p({background:e.color,width:e.linearProps.width})},null,6)],16),e.label?(o(),t("div",y({key:0,class:"var-progress-linear__label"},e.$attrs),[C(e.$slots,"default",{},()=>[i(c(e.linearProps.roundValue),1)])],16)):v("v-if",!0)])):v("v-if",!0),e.mode==="circle"?(o(),t("div",{key:1,class:"var-progress-circle",style:p({width:`${e.size}px`,height:`${e.size}px`})},[(o(),t("svg",{class:"var-progress-circle__svg",style:p({transform:`rotate(${e.rotate-90}deg)`}),viewBox:e.circleProps.viewBox},[e.track?(o(),t("circle",{key:0,class:"var-progress-circle__background",cx:e.size/2,cy:e.size/2,r:e.circleProps.radius,fill:"transparent","stroke-width":e.lineWidth,style:p({strokeDasharray:e.circleProps.perimeter,stroke:e.trackColor})},null,12,Q)):v("v-if",!0),l("circle",{class:"var-progress-circle__certain",cx:e.size/2,cy:e.size/2,r:e.circleProps.radius,fill:"transparent","stroke-width":e.lineWidth,style:p({strokeDasharray:e.circleProps.strokeDasharray,stroke:e.color})},null,12,R)],12,O)),e.label?(o(),t("div",y({key:0,class:"var-progress-circle__label"},e.$attrs),[C(e.$slots,"default",{},()=>[i(c(e.circleProps.roundValue),1)])],16)):v("v-if",!0)],4)):v("v-if",!0)])}var f=$(G,[["render",Y]]);f.install=function(e){e.component(f.name,f)};var Z={circle:"\u73AF\u5F62\u8FDB\u5EA6\u6761",style:"\u81EA\u5B9A\u4E49\u6837\u5F0F",basicUsage:"\u57FA\u672C\u4F7F\u7528",showLabel:"\u663E\u793A\u6807\u7B7E",hideTrack:"\u9690\u85CF\u8F68\u9053"},x={circle:"Circle Progress",basicUsage:"Basic Usage",style:"Custom Style",showLabel:"Show Label",hideTrack:"Hide Track"};const{add:N,use:ee,pack:se,packs:ye,merge:be}=L(),re=e=>{M(e),ee(e)};B("zh-CN",W);B("en-US",j);N("zh-CN",Z);N("en-US",x);const ae={name:"ProgressExample",components:{[f.name]:f,AppType:D},setup(){const e=P(0),d=P(0);return U(()=>{d.value=window.setInterval(()=>{e.value>=100?e.value=0:e.value+=20},1e3)}),H(re),E(()=>{window.clearInterval(d.value)}),{value:e,pack:se}}},b=e=>(I("data-v-6b72fea2"),e=e(),T(),e),le={class:"progress-demo"},oe=b(()=>l("div",{class:"space"},null,-1)),te={class:"progress-demo__basic"},ie={class:"progress-demo__label"},ne=i("success"),ce={class:"progress-demo__style"},de={class:"progress-demo__circle"},ue=b(()=>l("div",{class:"space"},null,-1)),pe=b(()=>l("div",{class:"space"},null,-1)),ve={class:"progress-demo__circle"};function _e(e,d,g,s,h,u){const n=S("app-type"),a=S("var-progress");return o(),t("div",le,[oe,l("div",te,[r(n,null,{default:_(()=>[i(c(s.pack.basicUsage),1)]),_:1}),r(a,{value:20,track:!1}),r(a,{value:s.value,track:!1},null,8,["value"]),r(a,{value:100,track:!1})]),l("div",ie,[r(n,null,{default:_(()=>[i(c(s.pack.showLabel),1)]),_:1}),r(a,{value:30,label:""}),r(a,{value:s.value,label:""},null,8,["value"]),r(a,{value:100,label:""},{default:_(()=>[ne]),_:1})]),l("div",ce,[r(n,null,{default:_(()=>[i(c(s.pack.style),1)]),_:1}),r(a,{value:30,"line-width":"8",color:"#ff9f00"}),r(a,{value:60,"line-width":"8",color:"#ff9f00","track-color":"#f5cb90"}),r(a,{value:80,ripple:"","line-width":"8",color:"#ff9f00","track-color":"#f5cb90"})]),r(n,null,{default:_(()=>[i(c(s.pack.circle),1)]),_:1}),l("div",de,[r(a,{mode:"circle",value:30,"line-width":"5",size:56}),ue,r(a,{mode:"circle",label:"",value:s.value,"line-width":"5",size:56},null,8,["value"]),pe,r(a,{mode:"circle",label:"",value:100,"line-width":"5",size:56})]),r(n,null,{default:_(()=>[i(c(s.pack.hideTrack),1)]),_:1}),l("div",ve,[r(a,{mode:"circle",value:50,size:56,track:!1})])])}var we=$(ae,[["render",_e],["__scopeId","data-v-6b72fea2"]]);export{we as default};
