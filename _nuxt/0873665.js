(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{384:function(e,t,r){"use strict";var n=r(387);t.a=n.a},398:function(e,t,r){"use strict";r.d(t,"c",(function(){return m})),r.d(t,"d",(function(){return v})),r.d(t,"e",(function(){return y})),r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return w}));r(29);var n=r(178);function o(){for(var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(e=Array()).concat.apply(e,[t].concat(n))}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",r=arguments.length>2?arguments[2]:void 0;return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:r},origin:{type:String,default:t}},render:function(t,r){var l="transition".concat(r.props.group?"-group":""),data={props:{name:e,mode:r.props.mode},on:{beforeEnter:function(e){e.style.transformOrigin=r.props.origin,e.style.webkitTransformOrigin=r.props.origin}}};return r.props.leaveAbsolute&&(data.on.leave=o(data.on.leave,(function(e){var t=e.offsetTop,r=e.offsetLeft,n=e.offsetWidth,o=e.offsetHeight;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=t+"px",e.style.left=r+"px",e.style.width=n+"px",e.style.height=o+"px"})),data.on.afterLeave=o(data.on.afterLeave,(function(e){if(e&&e._transitionInitialStyles){var t=e._transitionInitialStyles,r=t.position,n=t.top,o=t.left,l=t.width,c=t.height;delete e._transitionInitialStyles,e.style.position=r||"",e.style.top=n||"",e.style.left=o||"",e.style.width=l||"",e.style.height=c||""}}))),r.props.hideOnLeave&&(data.on.leave=o(data.on.leave,(function(e){e._initialDisplay=e.style.display,e.style.display="none"})),data.on.afterLeave=o(data.on.afterLeave,(function(e){e&&(e.style.display=e._initialDisplay||"")}))),t(l,Object(n.a)(r.data,data),r.children)}}}function c(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:e,functional:!0,props:{mode:{type:String,default:r}},render:function(r,o){return r("transition",Object(n.a)(o.data,{props:{name:e},on:t}),o.children)}}}var d=r(1),f=r(3),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t?"width":"height",n="offset".concat(Object(f.q)(r));return{beforeEnter:function(e){e._parent=e.parentNode,e._initialStyle=Object(d.a)({transition:e.style.transition,overflow:e.style.overflow},r,e.style[r])},enter:function(t){var o=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";var l="".concat(t[n],"px");t.style[r]="0",t.offsetHeight,t.style.transition=o.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((function(){t.style[r]=l}))},afterEnter:l,enterCancelled:l,leave:function(e){e._initialStyle=Object(d.a)({transition:"",overflow:e.style.overflow},r,e.style[r]),e.style.overflow="hidden",e.style[r]="".concat(e[n],"px"),e.offsetHeight,requestAnimationFrame((function(){return e.style[r]="0"}))},afterLeave:o,leaveCancelled:o};function o(t){e&&t._parent&&t._parent.classList.remove(e),l(t)}function l(e){var t=e._initialStyle[r];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[r]=t),delete e._initialStyle}},m=(l("carousel-transition"),l("carousel-reverse-transition"),l("tab-transition"),l("tab-reverse-transition"),l("menu-transition"),l("fab-transition","center center","out-in")),v=(l("dialog-transition"),l("dialog-bottom-transition"),l("dialog-top-transition"),l("fade-transition")),y=(l("scale-transition"),l("scroll-x-transition"),l("scroll-x-reverse-transition"),l("scroll-y-transition"),l("scroll-y-reverse-transition"),l("slide-x-transition")),_=(l("slide-x-reverse-transition"),l("slide-y-transition"),l("slide-y-reverse-transition"),c("expand-transition",h())),w=c("expand-x-transition",h("",!0))},405:function(e,t,r){var content=r(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("cf87dc84",content,!0,{sourceMap:!1})},406:function(e,t,r){var n=r(18)(!1);n.push([e.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{-webkit-animation-play-state:paused;animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),e.exports=n},413:function(e,t,r){var content=r(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("1b5d20bc",content,!0,{sourceMap:!1})},433:function(e,t,r){"use strict";r(11),r(9),r(13),r(16),r(10),r(17);var n=r(1),o=(r(46),r(270),r(405),r(398)),l=r(107),c=r(69),d=r(177),f=r(407),h=r(55),m=r(3),v=r(37);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var _=Object(v.a)(c.a,Object(d.b)(["absolute","fixed","top","bottom"]),f.a,h.a);t.a=_.extend({name:"v-progress-linear",directives:{intersect:l.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(m.d)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(m.d)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e;return e={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(e,this.isReversed?"right":"left",Object(m.d)(this.normalizedValue,"%")),Object(n.a)(e,"width",Object(m.d)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),e},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o.d:o.e},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(m.d)(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var slot=Object(m.j)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect().width;this.internalValue=e.offsetX/t*100}},onObserve:function(e,t,r){this.isVisible=r},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){return e("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(m.d)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},442:function(e,t,r){"use strict";r(413)},443:function(e,t,r){var n=r(18)(!1);n.push([e.i,"#seo-score[data-v-f1e3598c]{background:#fff;border-radius:4px;box-shadow:0 1px 3px 0 hsla(0,0%,56.1%,.16);margin-bottom:24px}.summary-card-body[data-v-f1e3598c]{padding:0;zoom:1}.report-card .ant-card-body[data-v-f1e3598c]{padding:0}.card-header[data-v-f1e3598c]{padding:16px 24px;border-bottom:1px solid #e8e8e8;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center}.card-meta[data-v-f1e3598c]{margin:-4px 0;zoom:1}.card-meta-detail[data-v-f1e3598c]{overflow:hidden}.card-meta-title[data-v-f1e3598c]{font-size:20px;font-weight:600;margin:0!important}.card-meta-description[data-v-f1e3598c],.card-meta-title[data-v-f1e3598c]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.card-meta-description[data-v-f1e3598c]{font-size:13px;line-height:normal;color:rgba(0,0,0,.45)}.summary-graph[data-v-f1e3598c]{display:flex;align-items:center;flex-wrap:wrap;padding:24px}.summary-graph-wrapper[data-v-f1e3598c]{display:flex;flex-direction:column;align-items:center;margin-right:24px}.summary-graph-total[data-v-f1e3598c]{width:140px;height:140px;margin-right:0;margin-bottom:10px}.summary-graph-split[data-v-f1e3598c]{width:auto;flex:1 1 0%}.progress-item[data-v-f1e3598c]{margin-bottom:24px}.progress-label[data-v-f1e3598c]{font-size:16px}@media(max-width:768px){#seo-score[data-v-f1e3598c]{margin-bottom:16px}.card-header[data-v-f1e3598c]{padding:16px;background:#fafafa}.card-meta[data-v-f1e3598c]{width:100%}.card-meta-detail[data-v-f1e3598c]{overflow:hidden}.summary-graph[data-v-f1e3598c]{padding:16px 24px}.summary-graph-wrapper[data-v-f1e3598c]{width:100%}.summary-graph-total[data-v-f1e3598c]{margin:auto}.summary-graph-split[data-v-f1e3598c]{width:100%;flex:initial}.register-modal[data-v-f1e3598c]{margin:2rem 0 1rem}}",""]),e.exports=n},469:function(e,t,r){"use strict";r.r(t);r(271);var n={name:"score",props:{score:{type:Object,required:!0}},data:function(){return{tab:null}},methods:{counsel:function(){window.open("https://open.kakao.com/me/jett","_blank").focus()}},computed:{sumOfScore:function(){return this.score.head.failed+this.score.head.warning+this.score.head.passed},failed:function(){return Math.round(this.score.head.failed/this.sumOfScore*100)},warning:function(){return Math.round(this.score.head.warning/this.sumOfScore*100)},passed:function(){return Math.round(this.score.head.passed/this.sumOfScore*100)},percentage:function(){return Math.round(this.score.body.total.self/this.score.body.total.max*100)},meta:function(){return Math.round(this.score.body.meta.self/this.score.body.meta.max*100)},quality:function(){return Math.round(this.score.body.quality.self/this.score.body.quality.max*100)},structure:function(){return Math.round(this.score.body.structure.self/this.score.body.structure.max*100)},link:function(){return Math.round(this.score.body.link.self/this.score.body.link.max*100)}}},o=(r(442),r(36)),l=r(49),c=r.n(l),d=r(389),f=r(139),h=r(433),m=r(604),v=r(621),y=r(620),_=r(603),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"summary",attrs:{id:"seo-score"}},[r("div",{staticClass:"summary-card-body"},[r("div",{staticClass:"card-header"},[r("div",{staticClass:"card-meta"},[r("div",{staticClass:"card-meta-detail"},[r("div",{staticClass:"card-meta-title"},[e._v(e._s(e.score.head.url))]),r("div",{staticClass:"card-meta-description"},[e._v("페이지 검색엔진 최적화 점수")])])])]),r("div",{staticClass:"summary-graph"},[r("div",{staticClass:"summary-graph-wrapper"},[r("div",{staticClass:"summary-graph-total"},[r("v-progress-circular",{attrs:{rotate:-90,size:140,width:15,value:e.percentage,color:"#00afff"}},[e._v(e._s(e.percentage))])],1),r("div",{staticClass:"register-modal"},[r("v-btn",{staticClass:"white--text",attrs:{color:"#00afff","x-large":"",rounded:""},on:{click:e.counsel}},[e._v("상담하기")])],1)]),r("div",{staticClass:"summary-graph-split"},[r("v-tabs",{attrs:{color:"#00afff"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab",[e._v("전체")]),r("v-tab",[e._v("종류 별")])],1),r("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab-item",[r("div",{staticClass:"progress-item"},[r("span",{staticClass:"progress-label"},[r("strong",[e._v(e._s(e.score.head.failed))]),e._v(" 치명")]),r("div",{staticClass:"dignosis-progress"},[r("v-progress-linear",{attrs:{color:"#f63842",height:"20",rounded:""},model:{value:e.failed,callback:function(t){e.failed=t},expression:"failed"}},[r("strong",[e._v(e._s(e.failed)+"%")])])],1)]),r("div",{staticClass:"progress-item"},[r("span",{staticClass:"progress-label"},[r("strong",[e._v(e._s(e.score.head.warning))]),e._v(" 경고")]),r("div",{staticClass:"dignosis-progress"},[r("v-progress-linear",{attrs:{color:"#ffab00",height:"20",rounded:""},model:{value:e.warning,callback:function(t){e.warning=t},expression:"warning"}},[r("strong",[e._v(e._s(e.warning)+"%")])])],1)]),r("div",{staticClass:"progress-item"},[r("span",{staticClass:"progress-label"},[r("strong",[e._v(e._s(e.score.head.passed))]),e._v(" 통과")]),r("div",{staticClass:"dignosis-progress"},[r("v-progress-linear",{attrs:{color:"#34bc6e",height:"20",rounded:""},model:{value:e.passed,callback:function(t){e.passed=t},expression:"passed"}},[r("strong",[e._v(e._s(e.passed)+"%")])])],1)])]),r("v-tab-item",[r("div",{staticClass:"progress-item"},[r("span",{staticClass:"progress-label"},[r("strong",[e._v("메타 명세서")])]),r("div",{staticClass:"dignosis-progress"},[r("v-progress-linear",{attrs:{color:"#00afff",height:"20",rounded:""},model:{value:e.meta,callback:function(t){e.meta=t},expression:"meta"}},[r("strong",{staticClass:"white--text"},[e._v(e._s(e.meta)+"%")])])],1)]),r("div",{staticClass:"progress-item"},[r("span",{staticClass:"progress-label"},[r("strong",[e._v("페이지 품질")])]),r("div",{staticClass:"dignosis-progress"},[r("v-progress-linear",{attrs:{color:"#00afff",height:"20",rounded:""},model:{value:e.quality,callback:function(t){e.quality=t},expression:"quality"}},[r("strong",{staticClass:"white--text"},[e._v(e._s(e.quality)+"%")])])],1)]),r("div",{staticClass:"progress-item"},[r("span",{staticClass:"progress-label"},[r("strong",[e._v("페이지 구조")])]),r("div",{staticClass:"dignosis-progress"},[r("v-progress-linear",{attrs:{color:"#00afff",height:"20",rounded:""},model:{value:e.structure,callback:function(t){e.structure=t},expression:"structure"}},[r("strong",{staticClass:"white--text"},[e._v(e._s(e.structure)+"%")])])],1)]),r("div",{staticClass:"progress-item"},[r("span",{staticClass:"progress-label"},[r("strong",[e._v("링크 구조")])]),r("div",{staticClass:"dignosis-progress"},[r("v-progress-linear",{attrs:{color:"#00afff",height:"20",rounded:""},model:{value:e.link,callback:function(t){e.link=t},expression:"link"}},[r("strong",{staticClass:"white--text"},[e._v(e._s(e.link)+"%")])])],1)])])],1)],1)])])])}),[],!1,null,"f1e3598c",null);t.default=component.exports;c()(component,{VBtn:d.a,VProgressCircular:f.a,VProgressLinear:h.a,VTab:m.a,VTabItem:v.a,VTabs:y.a,VTabsItems:_.a})}}]);