(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{334:function(t,e,n){var content=n(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("63c9496b",content,!0,{sourceMap:!1})},335:function(t,e,n){var o=n(74)(!1);o.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=o},394:function(t,e,n){"use strict";var o=n(4),r=(n(155),n(50),n(65),n(334),n(357)),c=n(321),l=n(156),h=n(332),d=n(331),v=n(154),f=n(14),k=n(40);e.a=Object(v.a)(r.a,c.a,h.a,Object(d.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:l.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,o=t.insetFooter,r=t.left,c=t.right,l=t.top;return{paddingBottom:Object(f.d)(n+footer+o),paddingLeft:this.app?Object(f.d)(r):void 0,paddingRight:this.app?Object(f.d)(c):void 0,paddingTop:Object(f.d)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(k.e)("auto-height",this),0==this.timeout&&Object(k.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(f.j)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(o.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(f.j)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:r.a.options.computed.classes.call(this),style:r.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},404:function(t,e,n){var content=n(479);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("64675577",content,!0,{sourceMap:!1})},478:function(t,e,n){"use strict";n(404)},479:function(t,e,n){var o=n(74)(!1);o.push([t.i,".css-1isgq23[data-v-70f2f067]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.share-btn[data-v-70f2f067]{cursor:pointer}.css-72kctk[data-v-70f2f067]{display:none}@media(min-width:576px){.css-1isgq23[data-v-70f2f067]{padding-right:10px;padding-left:10px}}@media(min-width:540px){.css-1isgq23[data-v-70f2f067]{max-width:540px}}@media(min-width:768px){.css-1isgq23[data-v-70f2f067]{max-width:720px}}@media(min-width:992px){.css-1isgq23[data-v-70f2f067]{max-width:960px}.css-72kctk[data-v-70f2f067]{display:block;position:fixed;z-index:1;background-color:#fff;border:1px solid #ebebeb;border-radius:5px;padding:15px 2px 10px;text-align:center;top:140px;width:60px}.css-72kctk ul[data-v-70f2f067]{list-style:none;padding:0;margin:0}.css-72kctk ul li a[data-v-70f2f067]{display:inline-flex;align-items:center;justify-content:center;width:33px;height:33px;font-size:24px}.css-72kctk ul li a svg[data-v-70f2f067]{max-width:26px;height:100%;max-height:26px;pointer-events:none}.css-72kctk ul li a svg.icon-twitter[data-v-70f2f067]{fill:#219bcf}.css-72kctk ul li a svg.icon-twitter[data-v-70f2f067]:hover{fill:#1d8bba}.css-72kctk ul li a svg.icon-facebook[data-v-70f2f067]{fill:#66679d}.css-72kctk ul li a svg.icon-facebook[data-v-70f2f067]:hover{fill:#5b5c8d}}@media(min-width:1200px){.css-1isgq23[data-v-70f2f067]{max-width:1140px}.css-72kctk ul li a[data-v-70f2f067]{font-size:26px;width:50px;height:50px}.css-72kctk[data-v-70f2f067]{width:75px}}",""]),t.exports=o},496:function(t,e,n){"use strict";n.r(e);n(39),n(16),n(49);var o="".concat("https://jettanalysis.com").concat(""),r={props:{post:{type:Object,required:!0}},data:function(){return{snackbar:!1}},methods:{shareTwitter:function(){window.open(this.twiterSharingUrl,"twitter-share","width=800,height=500")},shareFacebook:function(){window.open(this.facebookSharingUrl,"facebook-share","width=800,height=500")},shareKakaoStory:function(){this.$kakao.Story.share({url:this.shareUrl,text:"".concat(this.post.title,"\n\n").concat(this.post.description)})},shareKakaoTalk:function(){this.$kakao.Link.sendCustom({templateId:60106,templateArgs:{thumbnail:this.post.img,title:this.post.title,description:this.post.description,path:this.post.id}})},copyToClipboard:function(){var t=this;this.$copyText(this.shareUrl).then((function(e){t.snackbar=!0}),(function(t){alert("복사에 실패했습니다.")}))}},computed:{shareUrl:function(){return"".concat(o,"/").concat(this.post.id)},twiterSharingUrl:function(){return"https://twitter.com/share?text=".concat(this.post.title,"&url=").concat(this.shareUrl,"&via=jettanalysis")},facebookSharingUrl:function(){return"https://www.facebook.com/sharer/sharer.php?u=".concat(this.shareUrl)}}},c=(n(478),n(76)),l=n(98),h=n.n(l),d=n(497),v=n(411),f=n(394),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"entry-sticky-shares-wrap css-1isgq23"},[n("div",{staticClass:"entry-sticky-shares css-72kctk"},[n("ul",{staticClass:"entry-shares"},[n("li",[n("a",{staticClass:"share-btn",attrs:{href:t.twiterSharingUrl,target:"_blank"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareTwitter.apply(null,arguments)}}},[n("svg",{staticClass:"icon-twitter",attrs:{viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])])]),n("li",[n("a",{staticClass:"share-btn",attrs:{href:t.facebookSharingUrl,target:"_blank"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareFacebook.apply(null,arguments)}}},[n("svg",{staticClass:"icon-facebook",attrs:{viewBox:"0 0 320 512"}},[n("path",{attrs:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])])]),n("li",[n("a",{staticClass:"share-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoStory.apply(null,arguments)}}},[n("svg",{attrs:{fill:"#f2d41e",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",viewBox:"0 0 1000 1000","xml:space":"preserve",width:"24",height:"24"}},[n("g",[n("g",{attrs:{transform:"translate(0.000000,511.000000) scale(0.100000,-0.100000)"}},[n("path",{attrs:{d:"M2743.4,4958.8c-75.2-27.3-140.1-51.2-143.5-51.2c-3.4,0-47.8-58.1-95.7-126.4l-85.4-129.8V2410V168.8l78.6-116.2c150.3-228.9,194.7-235.8,1332.4-235.8H4848l-23.9-177.7c-30.7-252.8-170.8-686.7-310.9-966.9c-208.4-410-444.1-714.1-919-1175.3c-252.8-245.9-457.8-471.5-457.8-498.8c0-109.3,116.2-259.6,792.6-1007.9c594.5-659.4,710.6-768.7,799.5-779c92.2-10.2,157.2,30.7,410,242.6C6200.9-3661.1,6973-2468.8,7324.9-1177.3c232.4,850.7,228.9,775.5,242.6,3440.4l13.7,2432.6l-105.9,123c-61.5,68.3-164,136.7-232.3,157.2c-78.6,20.5-908.8,34.2-2244.7,34.2C3242.2,5006.6,2856.1,4999.8,2743.4,4958.8z"}})])])])])]),n("li",[n("a",{staticClass:"share-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoTalk.apply(null,arguments)}}},[n("svg",{attrs:{"enable-background":"new 0 0 24 24",height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.678 5.749-2.664 6.123 4.244 1.287.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399 0-5.19-5.373-9.398-12-9.398z",fill:"#3e2723"}}),n("g",{attrs:{fill:"#ffeb3b"}},[n("path",{attrs:{d:"m10.384 8.27c-.317-.893-1.529-.894-1.845-.001-.984 3.052-2.302 4.935-1.492 5.306 1.078.489 1.101-.611 1.359-1.1h2.111c.257.487.282 1.588 1.359 1.1.813-.371-.489-2.195-1.492-5.305zm-1.614 2.987.692-1.951.691 1.951z"}}),n("path",{attrs:{d:"m5.365 13.68c-1.198 0-.49-1.657-.692-4.742-.429-.074-1.76.297-1.76-.673 0-.371.305-.673.679-.673 2.518.18 4.224-.47 4.224.673 0 .987-1.275.59-1.76.673-.2 3.075.505 4.742-.691 4.742z"}}),n("path",{attrs:{d:"m13.154 13.579c-1.159 0-.454-1.565-.663-5.301 0-.91 1.413-.909 1.413 0v4.04c.669.089 2.135-.33 2.135.63-.001 1.007-1.576.503-2.885.631z"}}),n("path",{attrs:{d:"m19.556 13.38-1.624-2.137-.24.239v1.5c0 .38-.31.688-.693.688-1.203 0-.482-1.732-.692-5.392 0-.379.31-.688.692-.688 1.045 0 .594 1.478.692 2.166 1.96-1.873 1.913-2.072 2.316-2.072.556 0 .897.691.527 1.058l-1.578 1.567 1.704 2.243c.556.725-.555 1.556-1.104.828z"}})])])])]),n("li",[n("a",{staticClass:"share-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.copyToClipboard.apply(null,arguments)}}},[n("v-icon",[t._v("mdi-link-variant")])],1)])])]),n("v-snackbar",{attrs:{timeout:"1500","min-width":"210",width:"210",rounded:"pill",top:"",right:""},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v("닫기")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("복사되었습니다!")])],1)}),[],!1,null,"70f2f067",null);e.default=component.exports;h()(component,{VBtn:d.a,VIcon:v.a,VSnackbar:f.a})}}]);