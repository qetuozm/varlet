(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[2328],{2328:(e,r,l)=>{"use strict";l.d(r,{Z:()=>k});var n=l(7875),a=l(349),t={class:"var-slider"},o={class:"var-slider__track"},i=l(641),s=l(9838),u=l(9347),d=l(4268),c=l(8442),b={modelValue:{type:[Number,Array],default:0},step:{type:[Number,String],default:1},range:{type:Boolean,default:!1},labelVisible:{type:String,default:"normal",validator:function(e){return["always","normal","never"].includes(e)}},activeColor:{type:String},trackColor:{type:String},thumbColor:{type:String},labelColor:{type:String},labelTextColor:{type:String},trackHeight:{type:[String,Number]},thumbSize:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rules:{type:Array},onChange:{type:Function},onStart:{type:Function},onEnd:{type:Function},"onUpdate:modelValue":{type:Function}},v=l(2588),m=(0,n.aZ)({name:"VarSlider",components:{[v.Z.name]:v.Z},props:b,setup(e){var{bindForm:r,form:l}=(0,u.cI)(),{errorMessage:a,validateWithTrigger:t,validate:o,resetValidation:b}=(0,s.V$)(),v=(0,i.iH)(null),m=(0,i.iH)(0),p=(0,i.iH)(!1),h=(0,i.qj)({startPosition:0,currentLeft:0,active:!1,percentValue:0}),g=(0,i.qj)({startPosition:0,currentLeft:0,active:!1,percentValue:0}),f=(0,n.Fl)((()=>m.value/100*(0,c.He)(e.step))),k=(0,n.Fl)((()=>"always"===e.labelVisible||"never"!==e.labelVisible&&h.active)),_=(0,n.Fl)((()=>"always"===e.labelVisible||"never"!==e.labelVisible&&g.active)),y=(0,n.Fl)((()=>{var{activeColor:r,range:l,modelValue:n}=e,a=l&&(0,c.kJ)(n)?Math.abs(n[0]-n[1]):n,t=l&&(0,c.kJ)(n)?Math.min(n[0],n[1]):0;return{width:"".concat(a,"%"),left:"".concat(t,"%"),background:r}})),x=(0,n.Fl)((()=>e.disabled||(null==l?void 0:l.disabled.value))),V=(0,n.Fl)((()=>e.readonly||(null==l?void 0:l.readonly.value))),w=(r,l)=>{var a,o,i,s=[],{step:u,range:d,modelValue:b,onChange:v}=e,m=(0,c.He)(u),p=Math.round(r/f.value)*m;(1===l?(a=h.percentValue,h.percentValue=p/m,d&&(0,c.kJ)(b)&&(s=[p,b[1]])):(a=g.percentValue,g.percentValue=p/m,d&&(0,c.kJ)(b)&&(s=[b[0],p])),a!==p)&&(d?(null==v||v(s),null===(o=e["onUpdate:modelValue"])||void 0===o||o.call(e,s)):(null==v||v(p),null===(i=e["onUpdate:modelValue"])||void 0===i||i.call(e,p)),(0,n.Y3)((()=>t(["onChange"],"onChange",e.rules,e.modelValue))))},z=r=>{var{range:l,modelValue:n,onEnd:a}=e;if(!x.value&&!V.value){var t=[],o=1===r?h:g;o.currentLeft=o.percentValue*f.value,o.active=!1;var i=o.percentValue;l&&(0,c.kJ)(n)&&(t=1===r?[i,n[1]]:[n[0],i]),l?null==a||a(t):null==a||a(i),p.value=!1}},S=()=>{var r=(0,c.He)(e.step);return isNaN(r)?(console.warn('[Varlet] Slider: type of prop "step" should be Number'),!1):r<1||r>100?(console.warn('[Varlet] Slider: "step" should be >= 0 and <= 100'),!1):parseInt("".concat(e.step),10)===r||(console.warn('[Varlet] Slider: "step" should be an Integer'),!1)},C=()=>{var{range:r,modelValue:l}=e;return r&&!(0,c.kJ)(l)?(console.error('[Varlet] Slider: "modelValue" should be an Array'),!1):!r&&(0,c.kJ)(l)?(console.error('[Varlet] Slider: "modelValue" should be a Number'),!1):!(r&&(0,c.kJ)(l)&&l.length<2&&(console.error('[Varlet] Slider: "modelValue" should have two value'),1))},W=(r=e.modelValue,l=(0,c.He)(e.step))=>{e.range&&(0,c.kJ)(r)?(h.percentValue=r[0]/l,g.percentValue=r[1]/l,h.currentLeft=h.percentValue*f.value,g.currentLeft=g.percentValue*f.value):(0,c.hj)(r)&&(h.currentLeft=r/l*f.value)};return(0,n.YP)([()=>e.modelValue,()=>e.step],(([e,r])=>{S()&&C()&&!p.value&&W(e,(0,c.He)(r))})),(0,n.YP)(m,(()=>W())),(0,n.bv)((()=>{S()&&C()&&(m.value=v.value.offsetWidth)})),null==r||r({reset:()=>{var r,l=e.range?[0,0]:0;null===(r=e["onUpdate:modelValue"])||void 0===r||r.call(e,l),b()},validate:()=>o(e.rules,e.modelValue),resetValidation:b}),{sliderEl:v,thumbProps1:h,thumbProps2:g,showLabel1:k,showLabel2:_,getFillStyle:y,isDisabled:x,errorMessage:a,start:(r,l)=>{var n;m.value||(m.value=v.value.offsetWidth),x.value||V.value||(null===(n=e.onStart)||void 0===n||n.call(e),p.value=!0,1===l?h.startPosition=r.touches[0].clientX:g.startPosition=r.touches[0].clientX)},move:(e,r)=>{var l;x.value||V.value||!p.value||(1===r?(h.active=!0,l=e.touches[0].clientX-h.startPosition+h.currentLeft):(g.active=!0,l=e.touches[0].clientX-g.startPosition+g.currentLeft),l<=0?l=0:l>=m.value&&(l=m.value),w(l,r))},end:z,click:r=>{if(!x.value&&!V.value&&!r.target.closest(".var-slider__thumb")){var l=r.clientX-(0,d.IS)(r.currentTarget),n=(r=>{if(!e.range)return 1;var l=h.percentValue*f.value,n=g.percentValue*f.value;return Math.abs(r-l)<=Math.abs(r-n)?1:2})(l);w(l,n),z(n)}}}}}),p=l(6062),h=l.n(p),g=l(2101);h()(g.Z,{insert:"head",singleton:!1}),g.Z.locals,m.render=function(e,r,l,i,s,u){var d=(0,n.up)("var-form-details");return(0,n.wg)(),(0,n.j4)("div",t,[(0,n.Wm)("div",{class:["var-slider-block",[e.isDisabled?"var-slider__disable":null,e.errorMessage?"var-slider__error":null]],style:{height:"".concat(3*e.thumbSize,"px"),margin:"0 ".concat(e.thumbSize/2,"px")},ref:"sliderEl",onClick:r[9]||(r[9]=(...r)=>e.click&&e.click(...r))},[(0,n.Wm)("div",o,[(0,n.Wm)("div",{class:"var-slider__track-background",style:{background:e.trackColor,height:e.trackHeight+"px"}},null,4),(0,n.Wm)("div",{class:"var-slider__track-fill",style:e.getFillStyle},null,4)]),(0,n.Wm)("div",{class:"var-slider__thumb",style:{left:"".concat(e.range?e.modelValue[0]:e.modelValue,"%"),zIndex:e.thumbProps1.active?1:null},onTouchstart:r[1]||(r[1]=r=>e.start(r,1)),onTouchmove:r[2]||(r[2]=r=>e.move(r,1)),onTouchend:r[3]||(r[3]=r=>e.end(1)),onTouchcancel:r[4]||(r[4]=r=>e.end(1))},[(0,n.WI)(e.$slots,"button",{currentValue:e.range?e.modelValue[0]:e.modelValue},(()=>[(0,n.Wm)("div",{class:"var-slider__thumb-block",style:{background:e.thumbColor,height:e.thumbSize+"px",width:e.thumbSize+"px"}},null,4),(0,n.Wm)("div",{class:["var-slider__thumb-ripple",[e.thumbProps1.active?"var-slider__thumb-ripple-active":null]],style:{background:e.thumbColor,height:e.thumbSize?e.thumbProps1.active?3*e.thumbSize+"px":"0px":null,width:e.thumbSize?e.thumbProps1.active?3*e.thumbSize+"px":"0px":null}},null,6),(0,n.Wm)("div",{class:["var-slider__thumb-label",[e.showLabel1?"var-slider__thumb-label-active":null]],style:{background:e.labelColor,color:e.labelTextColor,height:2*e.thumbSize+"px",width:2*e.thumbSize+"px"}},[(0,n.Wm)("span",null,(0,a.zw)(e.range?e.modelValue[0]:e.modelValue),1)],6)]))],36),e.range?((0,n.wg)(),(0,n.j4)("div",{key:0,class:"var-slider__thumb",style:{left:"".concat(e.range&&e.modelValue[1],"%"),zIndex:e.thumbProps2.active?1:null},onTouchstart:r[5]||(r[5]=r=>e.start(r,2)),onTouchmove:r[6]||(r[6]=r=>e.move(r,2)),onTouchend:r[7]||(r[7]=r=>e.end(2)),onTouchcancel:r[8]||(r[8]=r=>e.end(2))},[(0,n.WI)(e.$slots,"button",{currentValue:e.range&&e.modelValue[1]},(()=>[(0,n.Wm)("div",{class:"var-slider__thumb-block",style:{background:e.thumbColor,height:e.thumbSize+"px",width:e.thumbSize+"px"}},null,4),(0,n.Wm)("div",{class:["var-slider__thumb-ripple",[e.thumbProps2.active?"var-slider__thumb-ripple-active":null]],style:{background:e.thumbColor,height:e.thumbSize?e.thumbProps2.active?3*e.thumbSize+"px":"0px":null,width:e.thumbSize?e.thumbProps2.active?3*e.thumbSize+"px":"0px":null}},null,6),(0,n.Wm)("div",{class:["var-slider__thumb-label",[e.showLabel2?"var-slider__thumb-label-active":null]],style:{background:e.labelColor,color:e.labelTextColor,height:2*e.thumbSize+"px",width:2*e.thumbSize+"px"}},[(0,n.Wm)("span",null,(0,a.zw)(e.range&&e.modelValue[1]),1)],6)]))],36)):(0,n.kq)("v-if",!0)],6),(0,n.Wm)(d,{"error-message":e.errorMessage,class:"var-slider__form","var-slider-cover":""},null,8,["error-message"])])};var f=m;f.install=function(e){e.component(f.name,f)};var k=f},2101:(e,r,l)=>{"use strict";var n=l(2609),a=l.n(n)()((function(e){return e[1]}));a.push([e.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n:root {\n  --form-details-error-color: var(--color-danger);\n  --form-details-length-color: #888;\n  --form-details-margin-top: 6px;\n  --form-details-font-size: 12px;\n  --form-details-message-margin-right: 4px;\n}\n.var-form-details-enter-from,\n.var-form-details-leave-to {\n  opacity: 0;\n  margin-top: 2px !important;\n}\n.var-form-details-enter-active,\n.var-form-details-leave-active {\n  transition: 0.2s all var(--cubic-bezier);\n}\n.var-form-details {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--form-details-font-size);\n  margin-top: var(--form-details-margin-top);\n}\n.var-form-details__message {\n  flex-grow: 1;\n  color: var(--form-details-error-color);\n  margin-right: var(--form-details-message-margin-right);\n  -webkit-user-select: none;\n          user-select: none;\n  text-align: left;\n}\n.var-form-details__length {\n  flex-shrink: 0;\n  color: var(--form-details-length-color);\n  -webkit-user-select: none;\n          user-select: none;\n  text-align: right;\n}\n:root {\n  --slider-error-color: var(--color-danger);\n  --slider-track-background: #bdbdbd;\n  --slider-track-fill-background: var(--color-primary);\n  --slider-thumb-block-background: var(--color-primary);\n  --slider-thumb-ripple-background: var(--color-primary);\n  --slider-thumb-label-background: var(--color-primary);\n  --slider-thumb-label-font-size: var(--font-size-sm);\n}\n.var-slider {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.var-slider-block {\n  display: flex;\n  align-items: center;\n  position: relative;\n  flex: 1;\n  -webkit-user-select: none;\n          user-select: none;\n  height: 36px;\n  margin: 0 6px;\n}\n.var-slider__disable {\n  -webkit-filter: opacity(0.6);\n          filter: opacity(0.6);\n}\n.var-slider__track {\n  width: 100%;\n  align-items: center;\n  position: relative;\n}\n.var-slider__track-background {\n  width: 100%;\n  height: 2px;\n  background: var(--slider-track-background);\n}\n.var-slider__track-fill {\n  position: absolute;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-color: var(--slider-track-fill-background);\n}\n.var-slider__thumb {\n  position: absolute;\n}\n.var-slider__thumb-block {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--slider-thumb-block-background);\n}\n.var-slider__thumb-ripple {\n  position: absolute;\n  width: 0;\n  z-index: -1;\n  height: 0;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  opacity: 0.3;\n  background: var(--slider-thumb-ripple-background);\n  transition: 0.3s var(--cubic-bezier);\n}\n.var-slider__thumb-ripple-active {\n  width: 36px;\n  height: 36px;\n}\n.var-slider__thumb-label {\n  height: 24px;\n  width: 24px;\n  background-color: var(--slider-thumb-label-background);\n  display: flex;\n  align-items: center;\n  border: none;\n  justify-content: center;\n  color: #fff;\n  border-radius: 50% 50% 0;\n  bottom: 60%;\n  -webkit-user-select: none;\n          user-select: none;\n  position: absolute;\n  left: 45%;\n  transition: 0.3s var(--cubic-bezier);\n  font-size: var(--slider-thumb-label-font-size);\n  overflow: hidden;\n  transform: translateY(0) translateY(0) translateX(-50%) rotate(45deg) scale(0);\n}\n.var-slider__thumb-label span {\n  transform: rotate(-45deg);\n}\n.var-slider__thumb-label-active {\n  transform: translateY(-50%) translateX(-50%) rotate(45deg) scale(1);\n}\n.var-slider__error .var-slider__track-background {\n  background-color: var(--slider-error-color) !important;\n  -webkit-filter: opacity(0.25);\n          filter: opacity(0.25);\n}\n.var-slider__error .var-slider__track-fill {\n  background-color: var(--slider-error-color) !important;\n}\n.var-slider__error .var-slider__thumb-block {\n  background-color: var(--slider-error-color) !important;\n}\n.var-slider__error .var-slider__thumb-ripple {\n  background-color: var(--slider-error-color) !important;\n}\n.var-slider__error .var-slider__thumb-label {\n  background-color: var(--slider-error-color) !important;\n}\n.var-slider__form[var-slider-cover] {\n  margin: 0;\n}\n",""]),r.Z=a}}]);