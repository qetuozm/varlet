var te=Object.defineProperty,ne=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var L=(e,t,n)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))re.call(t,n)&&L(e,n,t[n]);if(x)for(var n of x(t))se.call(t,n)&&L(e,n,t[n]);return e},S=(e,t)=>ne(e,oe(t));import{E as ie,G as ce,x as ae,H as le,g as ue,q as E,r as T,y as de,o as h,k as pe,m as p,n as he,I as me,z as fe,d as ye,c as y,B as g,f as v,a as $,h as ge,l as P,t as R,p as I}from"./vendor.7d218dee.js";const Ce=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Ce();const Se="Varlet",ve="var",Ne="localhost",ze=8080,Ue="VARLET",be="https://varlet.gitee.io/varlet-ui/varlet_icon.png",we="zh-CN",ke={style:"./highlight.css"},xe={baidu:"https://hm.baidu.com/hm.js?5c628ce58967c90ff4dd9c8803d930fa"},Le=!0,Ee={menu:[{text:{"zh-CN":"\u5F00\u53D1\u6307\u5357","en-US":"Developer guide"},type:1},{text:{"zh-CN":"\u57FA\u672C\u4ECB\u7ECD","en-US":"Basic Introduce"},doc:"home",type:3},{text:{"zh-CN":"\u5FEB\u901F\u5F00\u59CB","en-US":"Quickstart"},doc:"quickstart",type:3},{text:{"zh-CN":"\u6309\u9700\u5F15\u5165","en-US":"Import on demand"},doc:"importOnDemand",type:3},{text:{"zh-CN":"\u6D4F\u89C8\u5668\u9002\u914D","en-US":"Browser Adaptation"},doc:"browserAdaptation",type:3},{text:{"zh-CN":"\u56FD\u9645\u5316","en-US":"Locale"},doc:"locale",type:3},{text:{"zh-CN":"\u5F00\u53D1\u5DE5\u5177\u652F\u6301","en-US":"IDE Code Support"},doc:"ide",type:3},{text:{"zh-CN":"\u7EC4\u4EF6\u5E93\u5FEB\u901F\u6210\u578B\u5DE5\u5177","en-US":"Components Library Tools"},doc:"cli",type:3},{text:{"zh-CN":"\u5F00\u6E90\u6307\u5357","en-US":"Open Source Guide"},doc:"openSourceGuide",type:3},{text:{"zh-CN":"\u57FA\u7840\u7EC4\u4EF6","en-US":"Basic Components"},type:1},{text:{"zh-CN":"StyleProvider \u6837\u5F0F\u5B9A\u5236","en-US":"StyleProvider"},doc:"style-provider",type:2},{text:{"zh-CN":"Button \u6309\u94AE","en-US":"Button"},doc:"button",type:2},{text:{"zh-CN":"Cell \u5355\u5143\u683C","en-US":"Cell"},doc:"cell",type:2},{text:{"zh-CN":"Icon \u56FE\u6807","en-US":"Icon"},doc:"icon",type:2},{text:{"zh-CN":"Image \u56FE\u7247","en-US":"Image"},doc:"image",type:2},{text:{"zh-CN":"Loading \u52A0\u8F7D","en-US":"Loading"},doc:"loading",type:2},{text:{"zh-CN":"Chip \u7EB8\u7247","en-US":"Chip"},doc:"chip",type:2},{text:{"zh-CN":"Badge \u5FBD\u6807","en-US":"Badge"},doc:"badge",type:2},{text:{"zh-CN":"Elevation \u6D77\u62D4\u6548\u679C","en-US":"Elevation"},doc:"styles",type:2},{text:{"zh-CN":"\u5C55\u793A\u7EC4\u4EF6","en-US":"Display Components"},type:1},{text:{"zh-CN":"Skeleton \u9AA8\u67B6\u5C4F","en-US":"Skeleton"},doc:"skeleton",type:2},{text:{"zh-CN":"Collapse \u62D3\u5C55\u9762\u677F","en-US":"Collapse"},doc:"collapse",type:2},{text:{"zh-CN":"Layout \u5E03\u5C40","en-US":"Layout"},doc:"row",type:2},{text:{"zh-CN":"Sticky \u7C98\u6027\u5E03\u5C40","en-US":"Sticky"},doc:"sticky",type:2},{text:{"zh-CN":"Progress \u8FDB\u5EA6\u6761","en-US":"Progress"},doc:"progress",type:2},{text:{"zh-CN":"List \u65E0\u9650\u6EDA\u52A8\u5217\u8868","en-US":"List"},doc:"list",type:2},{text:{"zh-CN":"Swipe \u8F6E\u64AD","en-US":"Swipe"},doc:"swipe",type:2},{text:{"zh-CN":"Steps \u6B65\u9AA4\u6761","en-US":"Steps"},doc:"steps",type:2},{text:{"zh-CN":"ImagePreview \u56FE\u7247\u9884\u89C8","en-US":"ImagePreview"},doc:"image-preview",type:2},{text:{"zh-CN":"Card \u5361\u7247","en-US":"Card"},doc:"card",type:2},{text:{"zh-CN":"Divider \u5206\u5272\u7EBF","en-US":"Divider"},doc:"divider",type:2},{text:{"zh-CN":"Table \u8868\u683C","en-US":"Table"},doc:"table",type:2},{text:{"zh-CN":"\u5BFC\u822A\u7EC4\u4EF6","en-US":"Navigation Components"},type:1},{text:{"zh-CN":"Tabs \u9009\u9879\u5361","en-US":"Tabs"},doc:"tabs",type:2},{text:{"zh-CN":"IndexBar \u7D22\u5F15\u680F","en-US":"IndexBar"},doc:"index-bar",type:2},{text:{"zh-CN":"AppBar \u5BFC\u822A\u680F","en-US":"AppBar"},doc:"app-bar",type:2},{text:{"zh-CN":"\u529F\u80FD\u6307\u4EE4","en-US":"Functional Directives"},type:1},{text:{"zh-CN":"Ripple \u6C34\u6CE2\u6307\u4EE4","en-US":"Ripple"},doc:"ripple",type:2},{text:{"zh-CN":"Lazy \u61D2\u52A0\u8F7D","en-US":"Lazy"},doc:"lazy",type:2},{text:{"zh-CN":"\u53CD\u9988\u7EC4\u4EF6","en-US":"Action Components"},type:1},{text:{"zh-CN":"Snackbar \u6D88\u606F\u6761","en-US":"Snackbar"},doc:"snackbar",type:2},{text:{"zh-CN":"ActionSheet \u52A8\u4F5C\u9762\u677F","en-US":"ActionSheet"},doc:"action-sheet",type:2},{text:{"zh-CN":"Dialog \u5BF9\u8BDD\u6846","en-US":"Dialog"},doc:"dialog",type:2},{text:{"zh-CN":"PullRefresh \u4E0B\u62C9\u5237\u65B0","en-US":"PullRefresh"},doc:"pull-refresh",type:2},{text:{"zh-CN":"Popup \u5F39\u51FA\u5C42","en-US":"Popup"},doc:"popup",type:2},{text:{"zh-CN":"Pagination \u5206\u9875","en-US":"Pagination"},doc:"pagination",type:2},{text:{"zh-CN":"Menu \u83DC\u5355","en-US":"Menu"},doc:"menu",type:2},{text:{"zh-CN":"BackTop \u56DE\u5230\u9876\u90E8","en-US":"BackTop"},doc:"back-top",type:2},{text:{"zh-CN":"Countdown \u5012\u8BA1\u65F6","en-US":"Countdown"},doc:"countdown",type:2},{text:{"zh-CN":"Picker \u591A\u5217\u9009\u62E9\u5668","en-US":"Picker"},doc:"picker",type:2},{text:{"zh-CN":"DatePicker \u65E5\u671F\u9009\u62E9\u5668","en-US":"DatePicker"},doc:"date-picker",type:2},{text:{"zh-CN":"TimePicker \u65F6\u95F4\u9009\u62E9\u5668","en-US":"TimePicker"},doc:"time-picker",type:2},{text:{"zh-CN":"\u8868\u5355\u7EC4\u4EF6","en-US":"Form Components"},type:1},{text:{"zh-CN":"Form \u8868\u5355","en-US":"Form"},doc:"form",type:2},{text:{"zh-CN":"Input \u8F93\u5165\u6846","en-US":"Input"},doc:"input",type:2},{text:{"zh-CN":"Select \u9009\u62E9\u6846","en-US":"Select"},doc:"select",type:2},{text:{"zh-CN":"Radio \u5355\u9009\u6846","en-US":"Radio"},doc:"radio-group",type:2},{text:{"zh-CN":"Checkbox \u590D\u9009\u6846","en-US":"Checkbox"},doc:"checkbox-group",type:2},{text:{"zh-CN":"Counter \u8BA1\u6570\u5668","en-US":"Counter"},doc:"counter",type:2},{text:{"zh-CN":"Switch \u5F00\u5173","en-US":"Switch"},doc:"switch",type:2},{text:{"zh-CN":"Slider \u6ED1\u5757","en-US":"slider"},doc:"slider",type:2},{text:{"zh-CN":"Rate \u8BC4\u5206","en-US":"Rate"},doc:"rate",type:2},{text:{"zh-CN":"Uploader \u6587\u4EF6\u4E0A\u4F20","en-US":"Uploader"},doc:"uploader",type:2}],redirect:"/home",title:{"zh-CN":"Varlet \u9762\u5411Vue3\u7684Material\u98CE\u683C\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93","en-US":"Material design mobile components built for Vue3"},header:{i18n:{"zh-CN":"\u4E2D\u6587","en-US":"English"},github:"https://github.com/haoziqaq/varlet"}},Te={redirect:"/home",title:{"zh-CN":"Varlet \u9762\u5411Vue3\u7684Material\u98CE\u683C\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93","en-US":"Material design mobile components built for Vue3"},header:{i18n:{"zh-CN":"\u4E2D\u6587","en-US":"English"}}},$e={"color-primary":"#1d92e9","color-link":"#00c48f","color-type":"#00c48f","color-progress":"#1d92e9","color-progress-track":"#fff","color-side-bar":"#3a7afe","color-side-bar-active-background":"#3a7afe1a","color-app-bar":"#3a7afe","color-mobile-cell-hover":"#3a7afe","color-mobile-cell-hover-background":"#3a7afe1a","color-pc-language-active":"#3a7afe","color-pc-language-active-background":"#edf5ff","color-mobile-language-active":"#3a7afe","color-mobile-language-active-background":"#edf5ff"};var ht={name:Se,namespace:ve,host:Ne,port:ze,title:Ue,logo:be,defaultLanguage:we,highlight:ke,analysis:xe,useMobile:Le,pc:Ee,mobile:Te,themes:$e},A=(e,t)=>{for(const[n,o]of t)e[n]=o;return e};const C=e=>e==null?0:l(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e,e):Pe(e)?Number(e):e,l=e=>typeof e=="string",Pe=e=>typeof e=="boolean",B=e=>typeof e=="number",Re=e=>/^(http)|(\.*\/)/.test(e);function Ie(e){const t=/([^-])([A-Z])/g;return e.replace(t,"$1-$2").replace(t,"$1-$2").toLowerCase()}function mt(e){const{left:t}=e.getBoundingClientRect();return t+(document.body.scrollLeft||document.documentElement.scrollLeft)}function ft(e){const{top:t}=e.getBoundingClientRect();return t+(document.body.scrollTop||document.documentElement.scrollTop)}const O=e=>l(e)&&e.endsWith("rem"),Ae=e=>l(e)&&e.endsWith("px")||B(e),Be=e=>l(e)&&e.endsWith("%"),_=e=>l(e)&&e.endsWith("vw"),V=e=>l(e)&&e.endsWith("vh"),Oe=e=>{if(B(e))return e;if(Ae(e))return+e.replace("px","");if(_(e))return+e.replace("vw","")*window.innerWidth/100;if(V(e))return+e.replace("vh","")*window.innerHeight/100;if(O(e)){const t=+e.replace("rem",""),n=window.getComputedStyle(document.documentElement).fontSize;return t*parseFloat(n)}return l(e)?C(e):0},_e=e=>e==null?null:Be(e)||_(e)||V(e)||O(e)?e:`${Oe(e)}px`;function Ve(e){return Object.entries(e).reduce((t,[n,o])=>{const r=n.startsWith("--")?n:`--${Ie(n)}`;return t[r]=o,t},{})}function yt(e,t){return Array.isArray(t)?t.reduce((n,o)=>(n[o]=e[o],n),{}):e[t]}function Fe(e){const t=ie(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}function gt(e,t={},n={}){const o={setup(){return()=>ce(e,d(d({},t),n))}},{unmount:r}=Fe(o);return{unmountInstance:r}}function De(e={}){const t=Ve(e);Object.entries(t).forEach(([n,o])=>document.documentElement.style.setProperty(n,o))}function Me(e){return e.replace(/-(\w)/g,(t,n)=>n.toUpperCase())}function Ct(e){return Me(e).replace(e.charAt(0),e.charAt(0).toUpperCase())}function Xe(){const[,e,t]=window.location.hash.split("/");return{language:e,menuName:t}}function St(){return/Android|webOS|iPhone|iPod|BlackBerry|Pad/i.test(navigator.userAgent)}var F;(function(e){e[e.TITLE=1]="TITLE",e[e.COMPONENT=2]="COMPONENT",e[e.DOCUMENTATION=3]="DOCUMENTATION"})(F||(F={}));function vt(){return window.self!==window.top}function Nt(e={}){return Object.keys(e).reduce((t,n)=>{const o=e[n];return o&&(t[n]=o),t},{})}function D(){const{href:e}=window.location,t=e.slice(e.indexOf("?"));return new URLSearchParams(t)}function zt(e,t="mobile"){const n=()=>{var r;const o=t==="mobile"?(r=D().get("language"))!=null?r:"zh-CN":Xe().language;e(o)};M(n),n()}function Ut(e){const t=()=>{var o;const n=(o=D().get("platform"))!=null?o:"mobile";e(n)};M(t),t()}function M(e){ae(()=>{window.addEventListener("hashchange",e),window.addEventListener("popstate",e)}),le(()=>{window.removeEventListener("hashchange",e),window.removeEventListener("popstate",e)})}function bt(e){const t=ue(e,"themes",{});Object.keys(t).forEach(n=>{const o=t[n];De({[`--site-config-${n}`]:o})})}const Ye="ontouchstart"in window;let N=!1,u;const X=e=>e==="mousedown",We=e=>e==="mousemove",z=e=>e==="mouseup",qe=e=>X(e)||!u||u&&!u.dispatchEvent;function He(e,t,n){const{clientX:o,clientY:r,screenX:i,screenY:s,pageX:a,pageY:c}=n;this.identifier=t,this.target=e,this.clientX=o,this.clientY=r,this.screenX=i,this.screenY=s,this.pageX=a,this.pageY=c}function Ke(e){const t=U();return t.push(new He(u,1,e)),t}function U(){const e=[];return e.item=function(t){return this[t]||null},e}function Y(e){const{type:t}=e;return z(t)?U():Ke(e)}function je(e,t){const{altKey:n,ctrlKey:o,metaKey:r,shiftKey:i}=t,s=document.createEvent("Event");s.initEvent(e,!0,!0),s.altKey=n,s.ctrlKey=o,s.metaKey=r,s.shiftKey=i,s.touches=Y(t),s.targetTouches=Y(t),s.changedTouches=U(),u.dispatchEvent(s)}function b(e,t){const{type:n,target:o}=e;N=X(n)?!0:z(n)?!1:N,!(We(n)&&!N)&&(qe(n)&&(u=o),je(t,e),z(n)&&(u=null))}function Ge(){window.addEventListener("mousedown",e=>b(e,"touchstart"),!0),window.addEventListener("mousemove",e=>b(e,"touchmove"),!0),window.addEventListener("mouseup",e=>b(e,"touchend"),!0)}Ye||Ge();const Qe="modulepreload",W={},Ze="./",wt=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${Ze}${o}`,o in W)return;W[o]=!0;const r=o.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":Qe,r||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),r)return new Promise((a,c)=>{s.addEventListener("load",a),s.addEventListener("error",c)})})).then(()=>t())},Je={name:{type:String},size:{type:[Number,String]},color:{type:String},namespace:{type:String,default:"var-icon"},transition:{type:[Number,String],default:0},onClick:{type:Function}};const et=E({name:"VarSiteIcon",props:Je,setup(e){const t=T(""),n=T(!1);return de(()=>e.name,async(r,i)=>{const{transition:s}=e;if(i==null||C(s)===0){t.value=r;return}n.value=!0,await fe(),setTimeout(()=>{i!=null&&(t.value=r),n.value=!1},C(s))},{immediate:!0}),{nextName:t,shrinking:n,isURL:Re,toNumber:C,toSizeUnit:_e}}});function tt(e,t,n,o,r,i){return h(),pe(me(e.isURL(e.name)?"img":"i"),{class:p(["var-site-icon",[`${e.namespace}--set`,e.isURL(e.name)?"var-site-icon__image":`${e.namespace}-${e.nextName}`,e.shrinking?"var-site-icon--shrinking":null]]),style:he({color:e.color,transition:`all ${e.toNumber(e.transition)}ms`,width:e.isURL(e.name)?e.toSizeUnit(e.size):null,height:e.isURL(e.name)?e.toSizeUnit(e.size):null,fontSize:e.toSizeUnit(e.size)}),src:e.isURL(e.name)?e.nextName:null,onClick:e.onClick},null,8,["class","style","src","onClick"])}var m=A(et,[["render",tt]]);m.install=function(e){e.component(m.name,m)};const nt={title:{type:[Number,String]},icon:{type:String},desc:{type:String},border:{type:Boolean,default:!1},iconClass:{type:String},titleClass:{type:String},descClass:{type:String},extraClass:{type:String}};const ot=E({name:"VarSiteCell",components:{[m.name]:m},props:nt}),rt={class:"var-site-cell__content"};function st(e,t,n,o,r,i){const s=ye("var-site-icon");return h(),y("div",{class:p(["var-site-cell",[e.border?"var-site-cell--border":null]])},[e.$slots.icon||e.icon?(h(),y("div",{key:0,class:p(["var-site-cell__icon",[e.iconClass?e.iconClass:null]])},[g(e.$slots,"icon",{},()=>[ge(s,{class:"var-site--flex",name:e.icon},null,8,["name"])])],2)):v("v-if",!0),$("div",rt,[$("div",{class:p(["var-site-cell__title",[e.titleClass?e.titleClass:null]])},[g(e.$slots,"default",{},()=>[P(R(e.title),1)])],2),e.$slots.desc||e.desc?(h(),y("div",{key:0,class:p(["var-site-cell__desc",[e.descClass?e.descClass:null]])},[g(e.$slots,"desc",{},()=>[P(R(e.desc),1)])],2)):v("v-if",!0)]),e.$slots.extra?(h(),y("div",{key:1,class:p(["var-site-cell__extra",[e.extraClass?e.extraClass:null]])},[g(e.$slots,"extra")],2)):v("v-if",!0)],2)}var w=A(ot,[["render",st]]);w.install=function(e){e.component(w.name,w)};const q={locks:{},zIndex:2e3,touchmoveForbid:!0};I(q);var H=I(q);const K=250;function it(e){const{zIndex:t,position:n}=window.getComputedStyle(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden",n==="static"&&(e.style.position="relative"),t==="auto"&&(e.style.zIndex="1")}function ct(e,t){const{top:n,left:o}=e.getBoundingClientRect(),{clientWidth:r,clientHeight:i}=e,s=Math.sqrt(r**2+i**2)/2,a=s*2,c=t.touches[0].clientX-o,f=t.touches[0].clientY-n,Q=(r-s*2)/2,Z=(i-s*2)/2,J=c-s,ee=f-s;return{x:J,y:ee,centerX:Q,centerY:Z,size:a}}function j(e){const t=this._ripple;if(t.removeRipple(),t.disabled||t.tasker)return;const n=()=>{var f;t.tasker=null;const{x:o,y:r,centerX:i,centerY:s,size:a}=ct(this,e),c=document.createElement("div");c.classList.add("var-site-ripple"),c.style.opacity="0",c.style.transform=`translate(${o}px, ${r}px) scale3d(.3, .3, .3)`,c.style.width=`${a}px`,c.style.height=`${a}px`,c.style.backgroundColor=(f=t.color)!=null?f:"currentColor",c.dataset.createdAt=String(performance.now()),it(this),this.appendChild(c),window.setTimeout(()=>{c.style.transform=`translate(${i}px, ${s}px) scale3d(1, 1, 1)`,c.style.opacity=".25"},20)};t.tasker=window.setTimeout(n,60)}function k(){const e=this._ripple,t=()=>{const n=this.querySelectorAll(".var-site-ripple");if(!n.length)return;const o=n[n.length-1],r=K-performance.now()+Number(o.dataset.createdAt);setTimeout(()=>{o.style.opacity="0",setTimeout(()=>{var i;return(i=o.parentNode)==null?void 0:i.removeChild(o)},K)},r)};e.tasker?setTimeout(t,60):t()}function G(){const e=this._ripple;!e.touchmoveForbid||(e.tasker&&window.clearTimeout(e.tasker),e.tasker=null)}function at(e,t){var n,o,r;e._ripple=S(d({tasker:null},(n=t.value)!=null?n:{}),{touchmoveForbid:(r=(o=t.value)==null?void 0:o.touchmoveForbid)!=null?r:H.touchmoveForbid,removeRipple:k.bind(e)}),e.addEventListener("touchstart",j,{passive:!0}),e.addEventListener("touchmove",G,{passive:!0}),e.addEventListener("dragstart",k,{passive:!0}),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0})}function lt(e){e.removeEventListener("touchstart",j),e.removeEventListener("touchmove",G),e.removeEventListener("dragstart",k),document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple)}function ut(e,t){var n,o,r;e._ripple=S(d(d({},e._ripple),(n=t.value)!=null?n:{}),{touchmoveForbid:(r=(o=t.value)==null?void 0:o.touchmoveForbid)!=null?r:H.touchmoveForbid,tasker:null})}const kt={mounted:at,unmounted:lt,updated:ut,install(e){e.directive("ripple",this)}};export{w as C,m as I,F as M,kt as R,A as _,wt as a,Ct as b,ht as c,H as d,_e as e,ft as f,Xe as g,mt as h,St as i,vt as j,Ut as k,gt as m,yt as p,Nt as r,bt as s,C as t,zt as w};
