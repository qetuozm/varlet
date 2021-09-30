var E=Object.defineProperty;var b=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var m=(a,e,n)=>e in a?E(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,i=(a,e)=>{for(var n in e||(e={}))l.call(e,n)&&m(a,n,e[n]);if(b)for(var n of b(e))g.call(e,n)&&m(a,n,e[n]);return a};import{r as h,x as T,H as C}from"./vendor.7d218dee.js";var p={dialogTitle:"\u63D0\u793A",dialogConfirmButtonText:"\u786E\u8BA4",dialogCancelButtonText:"\u53D6\u6D88",actionSheetTitle:"\u8BF7\u9009\u62E9",listLoadingText:"\u52A0\u8F7D\u4E2D",listFinishedText:"\u6CA1\u6709\u66F4\u591A\u4E86",listErrorText:"\u52A0\u8F7D\u5931\u8D25",pickerTitle:"\u8BF7\u9009\u62E9",pickerConfirmButtonText:"\u786E\u8BA4",pickerCancelButtonText:"\u53D6\u6D88",monthDictionary:{"01":{name:"\u4E00\u6708",abbr:"\u4E00\u6708"},"02":{name:"\u4E8C\u6708",abbr:"\u4E8C\u6708"},"03":{name:"\u4E09\u6708",abbr:"\u4E09\u6708"},"04":{name:"\u56DB\u6708",abbr:"\u56DB\u6708"},"05":{name:"\u4E94\u6708",abbr:"\u4E94\u6708"},"06":{name:"\u516D\u6708",abbr:"\u516D\u6708"},"07":{name:"\u4E03\u6708",abbr:"\u4E03\u6708"},"08":{name:"\u516B\u6708",abbr:"\u516B\u6708"},"09":{name:"\u4E5D\u6708",abbr:"\u4E5D\u6708"},"10":{name:"\u5341\u6708",abbr:"\u5341\u6708"},"11":{name:"\u5341\u4E00\u6708",abbr:"\u5341\u4E00\u6708"},"12":{name:"\u5341\u4E8C\u6708",abbr:"\u5341\u4E8C\u6708"}},weekDictionary:{0:{name:"\u661F\u671F\u65E5",abbr:"\u65E5"},1:{name:"\u661F\u671F\u4E00",abbr:"\u4E00"},2:{name:"\u661F\u671F\u4E8C",abbr:"\u4E8C"},3:{name:"\u661F\u671F\u4E09",abbr:"\u4E09"},4:{name:"\u661F\u671F\u56DB",abbr:"\u56DB"},5:{name:"\u661F\u671F\u4E94",abbr:"\u4E94"},6:{name:"\u661F\u671F\u516D",abbr:"\u516D"}},selected:"\u4E2A\u88AB\u9009\u62E9",paginationItem:"\u6761",paginationPage:"\u9875",paginationJump:"\u524D\u5F80"};function D(){const a={},e=h({}),n=(u,o)=>{o.lang=u,a[u]=o},t=u=>{if(!a[u])return console.warn(`The ${u} does not exist. You can mount a language package using the add method`),{};e.value=a[u]};return{packs:a,pack:e,add:n,use:t,merge:(u,o)=>{if(!a[u]){console.warn(`The ${u} does not exist. You can mount a language package using the add method`);return}a[u]=i(i({},a[u]),o),t(u)}}}const{packs:N,pack:A,add:F,use:f,merge:k}=D();F("zh-CN",p);f("zh-CN");function w(){const[,a,e]=window.location.hash.split("/");return{language:a,menuName:e}}var c;(function(a){a[a.TITLE=1]="TITLE",a[a.COMPONENT=2]="COMPONENT",a[a.DOCUMENTATION=3]="DOCUMENTATION"})(c||(c={}));function s(){const{href:a}=window.location,e=a.slice(a.indexOf("?"));return new URLSearchParams(e)}function L(a,e="mobile"){const n=()=>{var r;const t=e==="mobile"?(r=s().get("language"))!=null?r:"zh-CN":w().language;a(t)};d(n),n()}function O(a){const e=()=>{var t;const n=(t=s().get("platform"))!=null?t:"mobile";a(n)};d(e),e()}function d(a){T(()=>{window.addEventListener("hashchange",a),window.addEventListener("popstate",a)}),C(()=>{window.removeEventListener("hashchange",a),window.removeEventListener("popstate",a)})}var v={dialogTitle:"Hint",dialogConfirmButtonText:"Confirm",dialogCancelButtonText:"Cancel",actionSheetTitle:"Select One",listLoadingText:"Loading",listFinishedText:"No more",listErrorText:"Load fail",pickerTitle:"Pick it",pickerConfirmButtonText:"Confirm",pickerCancelButtonText:"Cancel",monthDictionary:{"01":{name:"January",abbr:"JAN"},"02":{name:"February",abbr:"FEB"},"03":{name:"March",abbr:"MAR"},"04":{name:"April",abbr:"APR"},"05":{name:"May",abbr:"MAY"},"06":{name:"June",abbr:"JUN"},"07":{name:"July",abbr:"JUL"},"08":{name:"August",abbr:"AUG"},"09":{name:"September",abbr:"SEP"},"10":{name:"October",abbr:"OCT"},"11":{name:"November",abbr:"NOV"},"12":{name:"December",abbr:"DEC"}},weekDictionary:{0:{name:"Sunday",abbr:"S"},1:{name:"Monday",abbr:"M"},2:{name:"Tuesday",abbr:"T"},3:{name:"Wednesday",abbr:"W"},4:{name:"Thursday",abbr:"T"},5:{name:"Friday",abbr:"F"},6:{name:"Saturday",abbr:"S"}},selected:" selected",paginationItem:"",paginationPage:"page",paginationJump:"Go to"};export{p as _,F as a,v as b,f as c,O as d,A as p,D as u,L as w};
