(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{322:function(t,e,n){"use strict";n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return m})),n.d(e,"a",(function(){return w})),n.d(e,"b",(function(){return O}));n(39);var o=n(340);function r(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return(t=Array()).concat.apply(t,[e].concat(o))}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var l="transition".concat(n.props.group?"-group":""),data={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(data.on.leave=r(data.on.leave,(function(t){var e=t.offsetTop,n=t.offsetLeft,o=t.offsetWidth,r=t.offsetHeight;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=o+"px",t.style.height=r+"px"})),data.on.afterLeave=r(data.on.afterLeave,(function(t){if(t&&t._transitionInitialStyles){var e=t._transitionInitialStyles,n=e.position,o=e.top,r=e.left,l=e.width,c=e.height;delete t._transitionInitialStyles,t.style.position=n||"",t.style.top=o||"",t.style.left=r||"",t.style.width=l||"",t.style.height=c||""}}))),n.props.hideOnLeave&&(data.on.leave=r(data.on.leave,(function(t){t._initialDisplay=t.style.display,t.style.display="none"})),data.on.afterLeave=r(data.on.afterLeave,(function(t){t&&(t.style.display=t._initialDisplay||"")}))),e(l,Object(o.a)(n.data,data),n.children)}}}function c(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,r){return n("transition",Object(o.a)(r.data,{props:{name:t},on:e}),r.children)}}}var f=n(4),d=n(14),v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",o="offset".concat(Object(d.t)(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(f.a)({transition:t.style.transition,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var r=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";var l="".concat(e[o],"px");e.style[n]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=l}))},afterEnter:l,enterCancelled:l,leave:function(t){t._initialStyle=Object(f.a)({transition:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[o],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),l(e)}function l(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}},y=(l("carousel-transition"),l("carousel-reverse-transition"),l("tab-transition"),l("tab-reverse-transition"),l("menu-transition"),l("fab-transition","center center","out-in")),h=(l("dialog-transition"),l("dialog-bottom-transition"),l("dialog-top-transition"),l("fade-transition")),m=(l("scale-transition"),l("scroll-x-transition"),l("scroll-x-reverse-transition"),l("scroll-y-transition"),l("scroll-y-reverse-transition"),l("slide-x-transition")),w=(l("slide-x-reverse-transition"),l("slide-y-transition"),l("slide-y-reverse-transition"),c("expand-transition",v())),O=c("expand-x-transition",v("",!0))},340:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));n(43),n(7),n(19),n(45),n(21),n(17),n(49),n(57),n(23),n(20),n(29),n(16),n(30);var o=n(4),r=n(9),l=(n(34),n(63),n(99),n(18),n(39),n(14));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,r=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw r}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var y=/;(?![^(]*\))/g,h=/:(.*)/;function m(style){var t,e={},n=d(style.split(y));try{for(n.s();!(t=n.n()).done;){var o=t.value.split(h),c=Object(r.a)(o,2),f=c[0],v=c[1];(f=f.trim())&&("string"==typeof v&&(v=v.trim()),e[Object(l.c)(f)]=v)}}catch(t){n.e(t)}finally{n.f()}return e}function w(){for(var t,e={},i=arguments.length;i--;)for(var n=0,o=Object.keys(arguments[i]);n<o.length;n++)switch(t=o[n]){case"class":case"directives":arguments[i][t]&&(e[t]=x(e[t],arguments[i][t]));break;case"style":arguments[i][t]&&(e[t]=O(e[t],arguments[i][t]));break;case"staticClass":if(!arguments[i][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":arguments[i][t]&&(e[t]=j(e[t],arguments[i][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][t])break;e[t]||(e[t]={}),e[t]=f(f({},arguments[i][t]),e[t]);break;default:e[t]||(e[t]=arguments[i][t])}return e}function O(t,source){return t?source?(t=Object(l.u)("string"==typeof t?m(t):t)).concat("string"==typeof source?m(source):source):t:source}function x(t,source){return source?t&&t?Object(l.u)(t).concat(source):source:t}function j(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},i=2;i--;){var e=i<0||arguments.length<=i?void 0:arguments[i];for(var n in e)e[n]&&(t[n]?t[n]=[].concat(e[n],t[n]):t[n]=e[n])}return t}},419:function(t,e,n){var content=n(468);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("35d7e6b9",content,!0,{sourceMap:!1})},467:function(t,e,n){"use strict";n(419)},468:function(t,e,n){var o=n(83)(!1);o.push([t.i,'.table-of-content[data-v-3c9d3d39]{margin-bottom:1.5rem;border:1px solid #ddd;border-radius:5px;padding:1rem}.table-of-content ul[data-v-3c9d3d39]{list-style:none}.table-of-content ul li[data-v-3c9d3d39]{position:relative}.table-of-content ul li a[data-v-3c9d3d39]{color:#000}.table-of-content ul li a[data-v-3c9d3d39]:hover{color:#07f}.table-of-content ul li[data-v-3c9d3d39]:before{content:" ";position:absolute;top:7px;margin-left:-15px;border:5px solid transparent;border-left-color:#aaa;border-radius:2px}.table-of-content .toc-title[data-v-3c9d3d39]{display:flex;justify-content:space-between}.table-of-content .more .more-btn[data-v-3c9d3d39]{line-height:36px;text-decoration:none;color:#00afff;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.table-of-content .more .more-btn[data-v-3c9d3d39]:hover{color:#07f;border-bottom:1px solid #07f}.table-of-content a[data-v-3c9d3d39]{text-decoration:none;color:#00afff}.table-of-content .toc2[data-v-3c9d3d39]{font-size:1.2rem}.table-of-content .toc3[data-v-3c9d3d39]{font-size:1rem;padding-left:1rem}',""]),t.exports=o},499:function(t,e,n){"use strict";n.r(e);n(20);var o={name:"TableOfContent",props:{toc:{type:Array,required:!0}},data:function(){return{more:!0}},computed:{tableOfContent:function(){return this.toc.filter((function(t){return t.depth>1&&t.depth<4}))}}},r=(n(467),n(74)),l=n(98),c=n.n(l),f=n(322),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"table-of-content"},[n("div",{staticClass:"toc-title"},[n("h2",[t._v("목차")]),n("div",{staticClass:"more"},[n("a",{staticClass:"more-btn",on:{click:function(e){t.more=!t.more}}},[t._v(t._s(t.more?"보기":"닫기"))])])]),n("v-expand-transition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:!t.more,expression:"!more"}]},t._l(t.tableOfContent,(function(link){return n("li",{key:link.id,class:{toc2:2===link.depth,toc3:3===link.depth}},[n("nuxt-link",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)])],1)}),[],!1,null,"3c9d3d39",null);e.default=component.exports;c()(component,{VExpandTransition:f.a})}}]);