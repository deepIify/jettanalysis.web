(window.webpackJsonp=window.webpackJsonp||[]).push([[32,28,29],{329:function(t,e,n){var content=n(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("401b89b0",content,!0,{sourceMap:!1})},330:function(t,e,n){"use strict";n.r(e);n(39),n(16),n(49);var o={name:"ShareBox",props:{shareUrl:{type:String,required:!0},shareTwitter:{type:String,required:!0},shareFacebook:{type:String,required:!0},post:{type:Object,required:!0}},data:function(){return{snackbar:!1}},methods:{shareKakaoStory:function(){this.$kakao.Story.share({url:this.shareUrl,text:"".concat(this.post.title,"\n\n").concat(this.post.description)})},shareKakaoTalk:function(){this.$kakao.Link.sendCustom({templateId:60106,templateArgs:{thumbnail:this.post.img,title:this.post.title,description:this.post.description,path:this.post.id}})},copyToClipboard:function(){var t=this;this.$copyText(this.shareUrl).then((function(e){t.snackbar=!0}),(function(t){alert("복사에 실패했습니다.")}))}}},r=(n(338),n(76)),c=n(98),d=n.n(c),m=n(498),l=n(412),h=n(395),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"share"},[n("li",[n("a",{staticClass:"twitter",attrs:{href:t.shareTwitter,target:"_blank"}},[n("svg",{staticClass:"icon-twitter",attrs:{fill:"#219bcf",viewBox:"0 0 512 512",width:"24",height:"24"}},[n("path",{attrs:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])])]),n("li",[n("a",{staticClass:"facebook",attrs:{href:t.shareFacebook,target:"_blank"}},[n("svg",{staticClass:"icon-facebook",attrs:{fill:"#66679d",viewBox:"0 0 320 512",width:"24",height:"24"}},[n("path",{attrs:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])])]),n("li",[n("a",{staticClass:"kakao-story",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoStory.apply(null,arguments)}}},[n("svg",{attrs:{fill:"#f2d41e",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",viewBox:"0 0 1000 1000","xml:space":"preserve",width:"24",height:"24"}},[n("g",[n("g",{attrs:{transform:"translate(0.000000,511.000000) scale(0.100000,-0.100000)"}},[n("path",{attrs:{d:"M2743.4,4958.8c-75.2-27.3-140.1-51.2-143.5-51.2c-3.4,0-47.8-58.1-95.7-126.4l-85.4-129.8V2410V168.8l78.6-116.2c150.3-228.9,194.7-235.8,1332.4-235.8H4848l-23.9-177.7c-30.7-252.8-170.8-686.7-310.9-966.9c-208.4-410-444.1-714.1-919-1175.3c-252.8-245.9-457.8-471.5-457.8-498.8c0-109.3,116.2-259.6,792.6-1007.9c594.5-659.4,710.6-768.7,799.5-779c92.2-10.2,157.2,30.7,410,242.6C6200.9-3661.1,6973-2468.8,7324.9-1177.3c232.4,850.7,228.9,775.5,242.6,3440.4l13.7,2432.6l-105.9,123c-61.5,68.3-164,136.7-232.3,157.2c-78.6,20.5-908.8,34.2-2244.7,34.2C3242.2,5006.6,2856.1,4999.8,2743.4,4958.8z"}})])])])])]),n("li",[n("a",{staticClass:"kakao-talk",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoTalk.apply(null,arguments)}}},[n("svg",{attrs:{"enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.678 5.749-2.664 6.123 4.244 1.287.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399 0-5.19-5.373-9.398-12-9.398z",fill:"#3e2723"}}),n("g",{attrs:{fill:"#ffeb3b"}},[n("path",{attrs:{d:"m10.384 8.27c-.317-.893-1.529-.894-1.845-.001-.984 3.052-2.302 4.935-1.492 5.306 1.078.489 1.101-.611 1.359-1.1h2.111c.257.487.282 1.588 1.359 1.1.813-.371-.489-2.195-1.492-5.305zm-1.614 2.987.692-1.951.691 1.951z"}}),n("path",{attrs:{d:"m5.365 13.68c-1.198 0-.49-1.657-.692-4.742-.429-.074-1.76.297-1.76-.673 0-.371.305-.673.679-.673 2.518.18 4.224-.47 4.224.673 0 .987-1.275.59-1.76.673-.2 3.075.505 4.742-.691 4.742z"}}),n("path",{attrs:{d:"m13.154 13.579c-1.159 0-.454-1.565-.663-5.301 0-.91 1.413-.909 1.413 0v4.04c.669.089 2.135-.33 2.135.63-.001 1.007-1.576.503-2.885.631z"}}),n("path",{attrs:{d:"m19.556 13.38-1.624-2.137-.24.239v1.5c0 .38-.31.688-.693.688-1.203 0-.482-1.732-.692-5.392 0-.379.31-.688.692-.688 1.045 0 .594 1.478.692 2.166 1.96-1.873 1.913-2.072 2.316-2.072.556 0 .897.691.527 1.058l-1.578 1.567 1.704 2.243c.556.725-.555 1.556-1.104.828z"}})])])])]),n("li",[n("a",{staticClass:"clipboard",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.copyToClipboard.apply(null,arguments)}}},[n("v-icon",[t._v("mdi-link-variant")])],1)]),n("v-snackbar",{attrs:{timeout:"1500","min-width":"210",width:"210",rounded:"pill",top:"",right:""},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v("닫기")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("복사되었습니다!")])],1)}),[],!1,null,"ea3e9cd4",null);e.default=component.exports;d()(component,{VBtn:m.a,VIcon:l.a,VSnackbar:h.a})},335:function(t,e,n){var content=n(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("63c9496b",content,!0,{sourceMap:!1})},336:function(t,e,n){var o=n(74)(!1);o.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=o},338:function(t,e,n){"use strict";n(329)},339:function(t,e,n){var o=n(74)(!1);o.push([t.i,".share[data-v-ea3e9cd4]{margin-bottom:0;margin-top:auto;display:flex;padding-left:0;list-style:none}.share a[data-v-ea3e9cd4]{text-decoration:none}.share .twitter i[data-v-ea3e9cd4]{color:#219bcf}.share .twitter i[data-v-ea3e9cd4]:hover{color:#1a7aa3}.share .facebook i[data-v-ea3e9cd4]{color:#66679d}.share .facebook i[data-v-ea3e9cd4]:hover{color:#51527f}.share li+li[data-v-ea3e9cd4]{margin-left:10px}",""]),t.exports=o},360:function(t,e,n){var content=n(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("394fa141",content,!0,{sourceMap:!1})},395:function(t,e,n){"use strict";var o=n(4),r=(n(156),n(50),n(65),n(335),n(358)),c=n(322),d=n(157),m=n(333),l=n(332),h=n(155),v=n(14),f=n(40);e.a=Object(h.a)(r.a,c.a,m.a,Object(l.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:d.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,o=t.insetFooter,r=t.left,c=t.right,d=t.top;return{paddingBottom:Object(v.d)(n+footer+o),paddingLeft:this.app?Object(v.d)(r):void 0,paddingRight:this.app?Object(v.d)(c):void 0,paddingTop:Object(v.d)(e+d)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(f.e)("auto-height",this),0==this.timeout&&Object(f.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(v.j)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(o.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(v.j)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:r.a.options.computed.classes.call(this),style:r.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},396:function(t,e,n){var content=n(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("bd30a354",content,!0,{sourceMap:!1})},397:function(t,e,n){var content=n(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("5eab6db7",content,!0,{sourceMap:!1})},406:function(t,e,n){"use strict";n.r(e);n(39);var o=n(330),r="".concat("https://jettanalysis.com").concat(""),c={name:"TopBanner",components:{ShareBox:o.default},props:{title:{type:String,required:!0},desc:{type:String,required:!0},buttonOnly:{type:Boolean,required:!0},inputOption:{type:Object,required:!1},tooltipText:{type:String,required:!1},buttonText:{type:String,required:!0},type:{type:String,required:!1,default:function(){return"NO"}}},data:function(){return{activeTooltip:!1,activeInput:!1,url:"",post:{id:"diagnosis",title:"JETT 사이트 진단하기",description:"내 사이트가 SEO 최적화 조건에 맞는지 진단해보세요!",img:"https://jettanalysis.com/images/jett-analysis-w-2000.png"}}},methods:{inputUrl:function(t){this.activeInput||(this.activeInput=!this.activeInput),this.url=t.target.value},onSubmit:function(t){t.preventDefault();/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(this.url)&&(this.activeInput=!0,this.$emit("onButtonClick",this.url))}},computed:{shareUrl:function(){return"".concat(r,"/diagnosis")},shareTwitter:function(){return"https://twitter.com/share?text=사이트 진단&url=".concat(this.shareUrl,"&via=jettanalysis")},shareFacebook:function(){return"https://www.facebook.com/sharer/sharer.php?u=".concat(this.shareUrl)}}},d=(n(415),n(76)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"css-za4qqw"},[n("div",{staticClass:"css-17ia555"},[n("h1",{staticClass:"css-1bk7ox4"},[t._v(t._s(t.title))]),n("div",{staticClass:"css-70qvj9"},[t._m(0),n("div",{staticClass:"css-1c7u7ph"},[n("p",[t._v(t._s(t.desc))])])]),n("div",{staticClass:"css-2thhi1"},[n("div",{staticClass:"css-79elbk"},[t.buttonOnly?n("div",{staticClass:"aweber-form-body"},[n("button",{staticClass:"caller-btn without-input e1fw58rm0",attrs:{type:"button",role:"button"},on:{click:function(e){return t.$emit("onButtonClick")}}},[t._v(t._s(t.buttonText))])]):n("div",{staticClass:"caller"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("div",{staticClass:"aweber-form-body"},[n("ul",{staticClass:"css-1vd0gw5"},[n("li",{staticClass:"aweber-form-field form-group css-1pkbgp8"},[n("div",{staticClass:"aweber-input-container aweber-input-container-email",attrs:{id:"aweber-field-email"}},[n("input",{class:{"css-1lj1a3e":!t.activeInput,"css-q5hbwx":t.activeInput},attrs:{id:"form-item-email",name:t.inputOption.name,type:t.inputOption.type,placeholder:t.inputOption.placeholder,required:""},domProps:{value:t.url},on:{focus:function(e){t.activeTooltip=!0},blur:function(e){t.activeTooltip=!1},input:t.inputUrl}})])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.activeTooltip,expression:"activeTooltip"}],staticClass:"tooltip fade bs-tooltip-top show css-17qfe8v",attrs:{role:"tooltip","x-placement":"top"}},[n("div",{staticClass:"arrow css-ht3ahn"}),n("div",{staticClass:"tooltip-inner css-rj3kn9"},[t._v(t._s(t.tooltipText))])])])]),n("div",{staticClass:"aweber-form-footer left"},[n("button",{staticClass:"caller-btn with-input e1fw58rm0",attrs:{disabled:t.inputOption.isProcessing,type:"submit",role:"button"}},[t.inputOption.isProcessing?[n("div",{staticClass:"loader"},[t._v("Loading...")])]:[t._v(t._s(t.buttonText))]],2)])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:"diagnosis"===t.type,expression:'type === "diagnosis"'}],staticClass:"share-box-wrapper"},[n("div",{staticClass:"share-box"},[n("div",{staticClass:"share-title"},[t._v("공유하기")]),n("share-box",{attrs:{post:t.post,shareTwitter:t.shareTwitter,shareFacebook:t.shareFacebook,shareUrl:t.shareUrl}})],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"css-ium0zo"},[e("picture",[e("source",{attrs:{srcset:"https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400-300x300.webp 300w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400-150x150.webp 150w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400.webp 414w",sizes:"(max-width: 300px) 100vw, 300px",type:"image/webp"}}),e("img",{staticClass:"css-1a2v9hb",attrs:{src:"https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400.jpg",srcset:"https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400-300x300.jpg 300w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400-150x150.jpg 150w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400.jpg 414w",sizes:"(max-width: 300px) 100vw, 300px",alt:"meeB57W6_400x400",loading:"lazy"}})])])}],!1,null,"26603dd4",null);e.default=component.exports;installComponents(component,{ShareBox:n(330).default})},415:function(t,e,n){"use strict";n(360)},416:function(t,e,n){var o=n(74)(!1);o.push([t.i,'.css-za4qqw[data-v-26603dd4]{background-image:linear-gradient(180deg,#fff 10%,#eef0f7);padding:60px 0 70px}.css-17ia555[data-v-26603dd4]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto;display:flex;flex-direction:column;align-items:center;text-align:center}.css-1bk7ox4[data-v-26603dd4]{margin-bottom:40px;font-size:32px}.css-70qvj9[data-v-26603dd4]{display:flex;align-items:center}.css-ium0zo[data-v-26603dd4]{width:75px;min-width:75px;height:75px;border-radius:50%;overflow:hidden;border:2px solid #d6d6d6;margin-bottom:0;margin-right:20px}.css-1a2v9hb[data-v-26603dd4]{max-width:100%;height:auto}.css-1c7u7ph[data-v-26603dd4]{text-align:left;line-height:1.6;max-width:330px}.css-1c7u7ph strong[data-v-26603dd4]{font-weight:600}.css-1c7u7ph[data-v-26603dd4] :last-child{margin-bottom:0!important}.css-2thhi1[data-v-26603dd4]{width:100%;margin:35px 0 0;max-width:460px}.css-1vd0gw5[data-v-26603dd4],.css-79elbk[data-v-26603dd4]{position:relative}.css-1vd0gw5[data-v-26603dd4]{margin-bottom:0;padding-left:0;list-style:none}.css-1pkbgp8[data-v-26603dd4]{margin-bottom:0;padding:0}.css-1lj1a3e[data-v-26603dd4]{display:block;width:100%;height:3.7875rem;padding:1.05rem 1.2rem;font-family:Inter;font-weight:400;line-height:1.4;color:#000;background-color:#fff;background-clip:padding-box;border-radius:6px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);transition:background-color .2s ease-in-out,border-color .2s ease-in-out,box-shadow .2s ease-in-out;font-size:11.25px;font-size:1.125rem;border:1px solid #ccd3e8;font-family:"Inter"}.css-1lj1a3e[data-v-26603dd4]::-ms-expand{background-color:transparent;border:0}.css-1lj1a3e[data-v-26603dd4]:focus{color:#000;background-color:#fff;border-color:#00afff;outline:0;box-shadow:none}.css-1lj1a3e[data-v-26603dd4]::-moz-placeholder{color:#a5a5a5;opacity:1}.css-1lj1a3e[data-v-26603dd4]:-ms-input-placeholder{color:#a5a5a5;opacity:1}.css-1lj1a3e[data-v-26603dd4]::placeholder{color:#a5a5a5;opacity:1}.css-1lj1a3e[data-v-26603dd4]:disabled,.css-1lj1a3e[readonly][data-v-26603dd4]{background-color:#e6e6e6;opacity:1}.css-q5hbwx[data-v-26603dd4]{display:block;width:calc(100% - 162px);height:3.7875rem;padding:1.05rem 1.2rem;font-weight:400;line-height:1.4;background-clip:padding-box;border:1px solid #00afff;border-radius:6px;box-shadow:inset 0 1px 1px rgba(0,0,0,.08);transition:background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s,box-shadow .2s ease-in-out 0s;font-size:1.125rem;font-family:Inter;position:relative}.css-q5hbwx[data-v-26603dd4],.css-q5hbwx[data-v-26603dd4]:focus{color:#000;background-color:#fff}.css-q5hbwx[data-v-26603dd4]:focus{border-color:#00afff;outline:0;box-shadow:none}.caller-btn[data-v-26603dd4]{margin:0;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;padding:1.05rem 1.2rem;font-size:1.125rem;line-height:1.4;transition:all .2s ease-in-out;display:inline-flex;align-items:center;justify-content:center;font-style:normal;white-space:normal;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;cursor:pointer;text-transform:none;font-weight:600;min-height:3.7875rem;outline:none;border-radius:6px;top:0;right:0;min-width:170px;color:#fff;background-color:#00afff;border:1px solid #00afff}.caller-btn[data-v-26603dd4]:active,.caller-btn[data-v-26603dd4]:hover{background-color:#07f;border-color:#07f}.caller-btn:disabled[disabled][data-v-26603dd4]{cursor:not-allowed;background-color:#00afff;border-color:#00afff}.loader[data-v-26603dd4],.loader[data-v-26603dd4]:after{border-radius:50%;width:25px;height:25px}.loader[data-v-26603dd4]{font-size:10px;position:relative;text-indent:-9999em;border:4px solid hsla(0,0%,100%,.2);border-left-color:#fff;transform:translateZ(0);-webkit-animation:load8-data-v-26603dd4 1.1s linear infinite;animation:load8-data-v-26603dd4 1.1s linear infinite}@-webkit-keyframes load8-data-v-26603dd4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes load8-data-v-26603dd4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.css-17qfe8v[data-v-26603dd4]{top:calc(-100% + -.4rem);z-index:1}.css-17qfe8v[data-v-26603dd4],.css-ht3ahn[data-v-26603dd4]{position:absolute;left:0;right:0;margin:0 auto}.css-ht3ahn[data-v-26603dd4]{display:block;bottom:-.4rem;width:0;height:0;border-left:.4rem solid transparent;border-right:.4rem solid transparent;border-top:.4rem solid #000}.css-rj3kn9[data-v-26603dd4]{max-width:200px;margin:0 auto;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:6px;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif;font-style:normal;font-weight:400;line-height:1.8;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word}.share-box-wrapper[data-v-26603dd4]{margin-top:2rem}.share-box[data-v-26603dd4]{justify-content:center;display:flex;padding:1rem;background:#fff;border:1px solid #ebebeb;border-radius:5px;width:250px;margin:0 auto;position:relative}.share-title[data-v-26603dd4]{position:absolute;left:10px;top:-10px;font-size:14px;padding:0 .3rem;border-left:1px;border-right:1px;border-top:0;border-bottom:0;background:#fff;border-style:solid;border-radius:2px;border-color:#ebebeb;font-weight:700}@media(min-width:576px){.css-17ia555[data-v-26603dd4]{padding-right:10px;padding-left:10px}}@media(min-width:540px){.css-17ia555[data-v-26603dd4]{max-width:540px}}@media(max-width:767.98px){.css-za4qqw[data-v-26603dd4]{border-bottom:1 solid #ccd3e8}.caller-btn[data-v-26603dd4]{width:100%;margin-top:10px}}@media(min-width:768px){.css-17ia555[data-v-26603dd4]{max-width:720px}.css-za4qqw[data-v-26603dd4]{padding:90px 0 135px}.css-1bk7ox4[data-v-26603dd4]{font-size:48px}.css-ium0zo[data-v-26603dd4]{margin-right:30px}.css-2thhi1[data-v-26603dd4]{margin:45px 0 0}.caller-btn.with-input[data-v-26603dd4]{position:absolute}.caller-btn.without-input[data-v-26603dd4]{width:100%}}@media(min-width:992px){.css-17ia555[data-v-26603dd4]{max-width:960px}}@media(min-width:1200px){.css-17ia555[data-v-26603dd4]{max-width:1140px}}',""]),t.exports=o},431:function(t,e,n){"use strict";n(396)},432:function(t,e,n){var o=n(74)(!1);o.push([t.i,'a[data-v-aa0c72de]{text-decoration:none;transition:all .2s ease-in-out 0s}.article-img[data-v-aa0c72de]{width:100%;margin-bottom:2rem}.css-u5p2ag[data-v-aa0c72de]{padding:25px 0 35px}.css-79elbk[data-v-aa0c72de],.css-u5p2ag[data-v-aa0c72de]{position:relative}.css-1izrdyl[data-v-aa0c72de]{font-size:28px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;cursor:pointer;margin-bottom:25px;color:#000;transition:color .5s}.css-1izrdyl[data-v-aa0c72de]:focus,.css-1izrdyl[data-v-aa0c72de]:hover{color:#bb4a03}.css-1a2v9hb[data-v-aa0c72de]{max-width:100%;height:auto}.css-1d7x0cs[data-v-aa0c72de]{display:flex;align-items:center;justify-content:flex-start;margin-bottom:30px}.css-1d7x0cs p[data-v-aa0c72de]{margin-bottom:0;line-height:1.2;font-size:14px}.css-qyxjlf[data-v-aa0c72de]{margin-bottom:0;width:35px;height:35px;border-radius:50%;overflow:hidden;margin-right:15px}.css-12m1dn8[data-v-aa0c72de]{font-family:"Georgia",serif}.css-12m1dn8 p[data-v-aa0c72de]{margin-bottom:1.2rem}.css-12m1dn8 figure[data-v-aa0c72de]{margin-bottom:1.3rem}.css-12m1dn8 img[data-v-aa0c72de]{width:100%}.css-12m1dn8[data-v-aa0c72de] :last-child{margin-bottom:0!important}.css-12m1dn8 p>img[data-v-aa0c72de]{width:auto}.css-12m1dn8 .backlinko-image img[data-v-aa0c72de]{display:inline-block;width:100%}.css-12m1dn8 .backlinko-image.backlinko-has-border img[data-v-aa0c72de]{border:4px solid #ccc}.css-12m1dn8 .backlinko-image.img-circle img[data-v-aa0c72de]{border-radius:50%!important}.css-12m1dn8 .alignnone[data-v-aa0c72de]{margin-left:0;margin-right:0;max-width:100%;height:auto}.css-12m1dn8 .aligncenter[data-v-aa0c72de]{display:block;margin:1rem auto;height:auto}.css-12m1dn8 .alignleft[data-v-aa0c72de],.css-12m1dn8 .alignright[data-v-aa0c72de]{margin-bottom:1rem;height:auto}.css-12m1dn8 .backlinko-image__centered-image img[data-v-aa0c72de]{margin:0 auto!important}.css-12m1dn8 .backlinko-image__img-explicit-no-border:not(.backlinko-has-border) img[data-v-aa0c72de]{border:0!important;border-radius:0!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-xs-up img[data-v-aa0c72de]{margin-top:-1rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-xs-up img[data-v-aa0c72de]{margin-top:-1.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-xs-up img[data-v-aa0c72de]{margin-top:-2rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-xs-up img[data-v-aa0c72de]{margin-top:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-xs-up img[data-v-aa0c72de]{margin-top:-2.75rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-3-xs-up img[data-v-aa0c72de]{margin-top:-3rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-xs-up img[data-v-aa0c72de]{margin-top:-4.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-0 img[data-v-aa0c72de]{margin-bottom:0!important}.css-12m1dn8 .backlinko-image__img-border-radius-4 img[data-v-aa0c72de],.css-12m1dn8 .visual>img[data-v-aa0c72de]{border:0!important;border-radius:.25rem!important}.css-12m1dn8 .backlinko-image__img-hub-rounded img[data-v-aa0c72de],.css-12m1dn8 .backlinko-image__rounded img[data-v-aa0c72de]{border:0!important;border-radius:.5rem!important}.css-12m1dn8 .backlinko-image__screenshot img[data-v-aa0c72de]{outline:none!important;margin:0 auto!important;border:4px solid #ccc;border-radius:0!important}.css-12m1dn8 .backlinko-image__visual-chart img[data-v-aa0c72de]{outline:none!important;margin:0 auto!important;border:0!important;border-radius:.3rem!important}.css-12m1dn8 .backlinko-image__bg-white img[data-v-aa0c72de]{background-color:#fff!important}.css-12m1dn8 .backlinko-image__bg-light-gray-lighter img[data-v-aa0c72de]{background-color:#f8f8f8!important}.css-12m1dn8 .backlinko-image__bg-light-gray-darker img[data-v-aa0c72de]{background-color:#f4f4f4!important}.css-3872h1[data-v-aa0c72de]{align-items:center;margin-top:1.5rem}.css-toegfy[data-v-aa0c72de]{font-size:14px;display:flex;line-height:1;align-items:center;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";margin-bottom:0!important}.css-toegfy span[data-v-aa0c72de]{color:#00afff;font-size:36px;font-weight:700;padding-right:10px}.css-13xd08w[data-v-aa0c72de]{display:inline-flex;align-items:center;justify-content:center;font-style:normal;white-space:normal;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;cursor:pointer;text-transform:none;font-weight:600;min-height:3.7875rem;color:#fff;background-color:#00afff;border-color:#00afff;width:100%;border-radius:6px}.css-13xd08w[data-v-aa0c72de]:active,.css-13xd08w[data-v-aa0c72de]:hover,.css-13xd08w[data-v-aa0c72de]:link,.css-13xd08w[data-v-aa0c72de]:visited{color:#fff;-webkit-text-decoration:none;text-decoration:none}.css-13xd08w[data-v-aa0c72de]:hover{background:#07f;border-color:#07f}@media(min-width:540px){.css-12m1dn8 .alignright[data-v-aa0c72de]{float:right;margin-left:1rem}.css-12m1dn8 .alignleft[data-v-aa0c72de]{float:left;margin-left:1rem}.css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-sm-up img[data-v-aa0c72de]{margin-top:-1.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-sm-up img[data-v-aa0c72de]{margin-top:-1rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-sm-up img[data-v-aa0c72de]{margin-top:-2rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-sm-up img[data-v-aa0c72de]{margin-top:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-sm-up img[data-v-aa0c72de]{margin-top:-2.75rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-3-sm-up img[data-v-aa0c72de]{margin-top:-3rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-sm-up img[data-v-aa0c72de]{margin-top:-4.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-1-sm-up img[data-v-aa0c72de]{margin-bottom:-1rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-sm-up img[data-v-aa0c72de]{margin-bottom:-2rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-point-5-sm-up img[data-v-aa0c72de]{margin-bottom:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-3-sm-up img[data-v-aa0c72de]{margin-bottom:-3rem!important}}@media(min-width:768px){.css-u5p2ag[data-v-aa0c72de]{padding:35px 0 55px}.css-1izrdyl[data-v-aa0c72de]{font-size:38px}.css-toegfy[data-v-aa0c72de]{margin-right:30px}.css-12m1dn8 .backlinko-image.alignleft-md-up[data-v-aa0c72de]{float:left;margin-left:1rem}.css-12m1dn8 .backlinko-image.alignright-md-up[data-v-aa0c72de]{float:right;margin-left:1rem}.css-12m1dn8 .backlinko-image__img-mt-minus-1-md-up img[data-v-aa0c72de]{margin-top:-1rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-md-up img[data-v-aa0c72de]{margin-top:-1.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-md-up img[data-v-aa0c72de]{margin-top:-2rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-md-up img[data-v-aa0c72de]{margin-top:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-md-up img[data-v-aa0c72de]{margin-top:-2.75rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-3-md-up img[data-v-aa0c72de]{margin-top:-3rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-md-up img[data-v-aa0c72de]{margin-top:-4.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-1-md-up img[data-v-aa0c72de]{margin-bottom:-1rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-md-up img[data-v-aa0c72de]{margin-bottom:-2rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-point-5-md-up img[data-v-aa0c72de]{margin-bottom:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-3-md-up img[data-v-aa0c72de]{margin-bottom:-3rem!important}.css-3872h1[data-v-aa0c72de]{display:flex;margin-top:2rem}}@media(min-width:992px){.css-u5p2ag[data-v-aa0c72de]{padding:50px 0}.css-12m1dn8 .backlinko-image__img-mt-minus-1-lg-up img[data-v-aa0c72de]{margin-top:-1rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-lg-up img[data-v-aa0c72de]{margin-top:-1.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-lg-up img[data-v-aa0c72de]{margin-top:-2rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-lg-up img[data-v-aa0c72de]{margin-top:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-lg-up img[data-v-aa0c72de]{margin-top:-2.75rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-3-lg-up img[data-v-aa0c72de]{margin-top:-3rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-lg-up img[data-v-aa0c72de]{margin-top:-4.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-1-lg-up img[data-v-aa0c72de]{margin-bottom:-1rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-lg-up img[data-v-aa0c72de]{margin-bottom:-2rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-point-5-lg-up img[data-v-aa0c72de]{margin-bottom:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-3-lg-up img[data-v-aa0c72de]{margin-bottom:-3rem!important}}',""]),t.exports=o},433:function(t,e,n){"use strict";n(397)},434:function(t,e,n){var o=n(74)(!1);o.push([t.i,".css-15j7bd7 .post+.post>div{border-top:1px solid #e6e6e6}.css-15j7bd7 article:last-of-type>div:last-of-type{border-bottom:1px solid #e6e6e6}@media(min-width:576px){.css-15j7bd7{padding-right:10px;padding-left:10px}}@media(min-width:540px){.css-15j7bd7{max-width:540px}}@media(min-width:768px){.css-15j7bd7{padding-bottom:50px;max-width:720px}}@media(min-width:992px){.css-15j7bd7{padding-top:20px;padding-bottom:90px;max-width:850px}.css-15j7bd7 article{padding:0 60px;margin-top:20px}.css-15j7bd7 article:first-child{margin-top:0}}",""]),t.exports=o},492:function(t,e,n){"use strict";n.r(e);n(39);var o={name:"ArticlePreview",props:{type:{type:String,required:!0},article:{type:Object,required:!0}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ko",{year:"numeric",month:"long",day:"numeric"})}},computed:{link:function(){return this.article?"/".concat(this.type,"/").concat(this.article.slug):""},excerpt:function(){return this.article,""}}},r=(n(431),n(433),n(76)),c=n(98),d=n.n(c),m=n(523),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"post"},[n("div",{staticClass:"css-u5p2ag"},[n("header",{staticClass:"css-79elbk"},[n("div",[n("router-link",{attrs:{to:t.link}},[n("h2",{staticClass:"css-1izrdyl"},[t._v(t._s(t.article.title))])]),n("div",{staticClass:"css-1d7x0cs"},[n("time",{staticClass:"updated",attrs:{datetime:t.article.updatedAt}}),n("p",[t._v(t._s(t.article.author.name)+" · "+t._s(t.formatDate(t.article.updatedAt))+" 업데이트")])])],1)]),n("div",{staticClass:"css-12m1dn8"},[n("v-img",{staticClass:"article-img",attrs:{src:t.article.img}}),n("nuxt-content",{attrs:{document:t.article.excerpt}})],1),n("footer",{staticClass:"css-3872h1"},[n("router-link",{staticClass:"css-13xd08w",attrs:{to:t.link}},[t._v("이어서 읽기")])],1)])])}),[],!1,null,"aa0c72de",null);e.default=component.exports;d()(component,{VImg:m.a})},530:function(t,e,n){var content=n(561);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("fc9d7868",content,!0,{sourceMap:!1})},560:function(t,e,n){"use strict";n(530)},561:function(t,e,n){var o=n(74)(!1);o.push([t.i,".wrap[data-v-7d11731e]{font-size:1.125rem;background-color:#fff;overflow-x:hidden}.css-15j7bd7[data-v-7d11731e]{width:100%;margin-right:auto;margin-left:auto;padding:30px 20px 35px}",""]),t.exports=o},604:function(t,e,n){"use strict";n.r(e);var o=n(5),r=(n(51),n(41),n(406)),c=n(492),d={name:"Blog",components:{TopBanner:r.default,ArticlePreview:c.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("articles","blog").only(["title","body","excerpt","img","slug","author","updatedAt"]).sortBy("createdAt","desc").fetch();case 3:return(o=e.sent).map((function(article){article.excerpt={body:article.excerpt}})),e.abrupt("return",{articles:o});case 6:case"end":return e.stop()}}),e)})))()},methods:{counsel:function(){window.open("https://open.kakao.com/me/jett","_blank").focus()}}},m=(n(560),n(76)),l=n(98),h=n.n(l),v=n(505),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jett-container"},[n("navigation-bar"),n("div",{staticClass:"wrap"},[n("section",[n("top-banner",{attrs:{title:"다양한 SEO 전략을 얻으세요!",desc:"다양한 SEO 전략과 팁으로 솔루션 상담을 받을 수 있습니다!",buttonOnly:!0,buttonText:"상담하기"},on:{onButtonClick:t.counsel}})],1),n("v-main",[n("div",{staticClass:"css-15j7bd7"},[t._l(t.articles,(function(article){return[n("article-preview",{attrs:{type:"blog",article:article}})]}))],2)])],1),n("page-footer")],1)}),[],!1,null,"7d11731e",null);e.default=component.exports;h()(component,{NavigationBar:n(341).default,TopBanner:n(406).default,PageFooter:n(342).default}),h()(component,{VMain:v.a})}}]);