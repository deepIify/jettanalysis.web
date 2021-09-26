(window.webpackJsonp=window.webpackJsonp||[]).push([[7,16,17,18,19,38],{463:function(t,e,n){var content=n(479);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("50da162d",content,!0,{sourceMap:!1})},465:function(t,e,n){"use strict";n.r(e);n(25),n(5),n(47);var o=n(156),r={name:"ShareBox",props:{shareUrl:{type:String,required:!0},shareTwitter:{type:String,required:!0},shareFacebook:{type:String,required:!0},post:{type:Object,required:!0}},data:function(){return{snackbar:!1}},methods:{shareKakaoStory:function(){var t=this;Object(o.d)((function(){window.Kakao.Story.share({url:t.shareUrl,text:"".concat(t.post.title,"\n\n").concat(t.post.description)})}))},shareKakaoTalk:function(){var t=this;Object(o.d)((function(){window.Kakao.Link.sendCustom({templateId:60106,templateArgs:{thumbnail:t.post.img,title:t.post.title,description:t.post.description,path:t.post.id}})}))},copyToClipboard:function(){var t=this;this.$copyText(this.shareUrl).then((function(e){t.snackbar=!0}),(function(t){alert("복사에 실패했습니다.")}))}}},c=(n(478),n(45)),l=n(64),d=n.n(l),h=n(489),m=n(715),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"share"},[n("li",[n("a",{staticClass:"twitter",attrs:{href:t.shareTwitter,target:"_blank"}},[n("svg",{staticClass:"icon-twitter",attrs:{fill:"#219bcf",viewBox:"0 0 512 512",width:"24",height:"24"}},[n("path",{attrs:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])])]),n("li",[n("a",{staticClass:"facebook",attrs:{href:t.shareFacebook,target:"_blank"}},[n("svg",{staticClass:"icon-facebook",attrs:{fill:"#66679d",viewBox:"0 0 320 512",width:"24",height:"24"}},[n("path",{attrs:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])])]),n("li",[n("a",{staticClass:"kakao-story",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoStory.apply(null,arguments)}}},[n("svg",{attrs:{fill:"#f2d41e",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",viewBox:"0 0 1000 1000","xml:space":"preserve",width:"24",height:"24"}},[n("g",[n("g",{attrs:{transform:"translate(0.000000,511.000000) scale(0.100000,-0.100000)"}},[n("path",{attrs:{d:"M2743.4,4958.8c-75.2-27.3-140.1-51.2-143.5-51.2c-3.4,0-47.8-58.1-95.7-126.4l-85.4-129.8V2410V168.8l78.6-116.2c150.3-228.9,194.7-235.8,1332.4-235.8H4848l-23.9-177.7c-30.7-252.8-170.8-686.7-310.9-966.9c-208.4-410-444.1-714.1-919-1175.3c-252.8-245.9-457.8-471.5-457.8-498.8c0-109.3,116.2-259.6,792.6-1007.9c594.5-659.4,710.6-768.7,799.5-779c92.2-10.2,157.2,30.7,410,242.6C6200.9-3661.1,6973-2468.8,7324.9-1177.3c232.4,850.7,228.9,775.5,242.6,3440.4l13.7,2432.6l-105.9,123c-61.5,68.3-164,136.7-232.3,157.2c-78.6,20.5-908.8,34.2-2244.7,34.2C3242.2,5006.6,2856.1,4999.8,2743.4,4958.8z"}})])])])])]),n("li",[n("a",{staticClass:"kakao-talk",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoTalk.apply(null,arguments)}}},[n("svg",{attrs:{"enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.678 5.749-2.664 6.123 4.244 1.287.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399 0-5.19-5.373-9.398-12-9.398z",fill:"#3e2723"}}),n("g",{attrs:{fill:"#ffeb3b"}},[n("path",{attrs:{d:"m10.384 8.27c-.317-.893-1.529-.894-1.845-.001-.984 3.052-2.302 4.935-1.492 5.306 1.078.489 1.101-.611 1.359-1.1h2.111c.257.487.282 1.588 1.359 1.1.813-.371-.489-2.195-1.492-5.305zm-1.614 2.987.692-1.951.691 1.951z"}}),n("path",{attrs:{d:"m5.365 13.68c-1.198 0-.49-1.657-.692-4.742-.429-.074-1.76.297-1.76-.673 0-.371.305-.673.679-.673 2.518.18 4.224-.47 4.224.673 0 .987-1.275.59-1.76.673-.2 3.075.505 4.742-.691 4.742z"}}),n("path",{attrs:{d:"m13.154 13.579c-1.159 0-.454-1.565-.663-5.301 0-.91 1.413-.909 1.413 0v4.04c.669.089 2.135-.33 2.135.63-.001 1.007-1.576.503-2.885.631z"}}),n("path",{attrs:{d:"m19.556 13.38-1.624-2.137-.24.239v1.5c0 .38-.31.688-.693.688-1.203 0-.482-1.732-.692-5.392 0-.379.31-.688.692-.688 1.045 0 .594 1.478.692 2.166 1.96-1.873 1.913-2.072 2.316-2.072.556 0 .897.691.527 1.058l-1.578 1.567 1.704 2.243c.556.725-.555 1.556-1.104.828z"}})])])])]),n("li",[n("a",{staticClass:"clipboard",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.copyToClipboard.apply(null,arguments)}}},[n("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[n("path",{attrs:{d:"M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"}})])])]),n("v-snackbar",{attrs:{timeout:"1500","min-width":"210",width:"210",rounded:"pill",top:"",right:""},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v("닫기")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("복사되었습니다!")])],1)}),[],!1,null,"2a3538a6",null);e.default=component.exports;d()(component,{VBtn:h.a,VSnackbar:m.a})},478:function(t,e,n){"use strict";n(463)},479:function(t,e,n){var o=n(17)(!1);o.push([t.i,".share[data-v-2a3538a6]{margin-bottom:0;margin-top:auto;display:flex;padding-left:0;list-style:none}.share a[data-v-2a3538a6]{text-decoration:none}.share .twitter i[data-v-2a3538a6]{color:#219bcf}.share .twitter i[data-v-2a3538a6]:hover{color:#1a7aa3}.share .facebook i[data-v-2a3538a6]{color:#66679d}.share .facebook i[data-v-2a3538a6]:hover{color:#51527f}.share li+li[data-v-2a3538a6]{margin-left:10px}",""]),t.exports=o},505:function(t,e,n){"use strict";(function(t){n(25),n(65),n(34),n(5),n(47);var o=n(77),r=n(465),c=t.env.NUXT_APP_BASE_URL||"https://jettanalysis.com",l=t.env.NUXT_APP_FRONTEND_PORT||"",d="".concat(c).concat(l);e.a={name:"Comment",props:{post:{type:Object,required:!0}},components:{ValidationObserver:o.a,ValidationProvider:o.b,ShareBox:r.default},data:function(){return{comments:[{},{}],isCommentLoading:!0,username:"",password:"",showPassword:!1,content:"",loading:!1,attrs:{class:"mb-6",boilerplate:!1,elevation:0},snackbar:!1}},mounted:function(){var t=this;this.$fire.firestore.collection(this.post.id).get().then((function(e){t.comments=e.docs.map((function(t){return t.data()})),t.isCommentLoading=!1}))},methods:{submit:function(){var t=this,e={username:this.username,password:this.password,content:this.content,created_at:(new Date).getTime()};this.loading=!0,this.$fire.firestore.collection(this.post.id).add(e).then((function(){t.loading=!1,t.comments.push(e),t.resetCommentForm()})).catch((function(e){t.loading=!1,alert("댓글 등록에 실패했습니다.")}))},resetCommentForm:function(){this.username="",this.password="",this.content=""},userColor:function(time){switch(Number(time)%8){case 0:return"#855c47";case 1:return"#7a8547";case 2:return"#475085";case 3:return"#7d4785";case 4:return"#477085";case 5:return"#474b85";case 6:return"#7d8547";case 7:return"#478549"}},shareKakaoStory:function(){window.Kakao.Story.share({url:this.shareUrl,text:"".concat(this.post.title,"\n\n").concat(this.post.description)})},shareKakaoTalk:function(){window.Kakao.Link.sendCustom({templateId:60106,templateArgs:{thumbnail:this.post.img,title:this.post.title,description:this.post.description,path:this.post.id}})},copyToClipboard:function(){var t=this;this.$copyText(this.shareUrl).then((function(e){t.snackbar=!0}),(function(t){alert("복사에 실패했습니다.")}))}},computed:{commentCount:function(){return this.comments?this.comments.length:0},shareUrl:function(){return"".concat(d,"/").concat(this.post.id)},shareTwitter:function(){return"https://twitter.com/share?text=".concat(this.post.title,"&url=").concat(this.shareUrl,"&via=jettanalysis")},shareFacebook:function(){return"https://www.facebook.com/sharer/sharer.php?u=".concat(this.shareUrl)}},filters:{filterFirstChar:function(t){return t?t.toUpperCase().charAt(0):""},toDateTime:function(t){if(!t)return"";var e=new Date(Number(t)),n=function(t){return 1==="".concat(t).length?"0".concat(t):t};return"".concat(e.getFullYear(),".").concat(n(e.getMonth()+1),".").concat(n(e.getDate())," ").concat(n(e.getHours()),":").concat(n(e.getMinutes()))}}}}).call(this,n(106))},506:function(t,e,n){"use strict";(function(t){n(25),n(5),n(47);var o=n(156),r=t.env.NUXT_APP_BASE_URL||"https://jettanalysis.com",c=t.env.NUXT_APP_FRONTEND_PORT||"",l="".concat(r).concat(c);e.a={props:{post:{type:Object,required:!0}},data:function(){return{snackbar:!1}},methods:{shareTwitter:function(){window.open(this.twiterSharingUrl,"twitter-share","width=800,height=500")},shareFacebook:function(){window.open(this.facebookSharingUrl,"facebook-share","width=800,height=500")},shareKakaoStory:function(){var t=this;Object(o.d)((function(){window.Kakao.Story.share({url:t.shareUrl,text:"".concat(t.post.title,"\n\n").concat(t.post.description)})}))},shareKakaoTalk:function(){var t=this;Object(o.d)((function(){window.Kakao.Link.sendCustom({templateId:60106,templateArgs:{thumbnail:t.post.img,title:t.post.title,description:t.post.description,path:t.post.id}})}))},copyToClipboard:function(){var t=this;this.$copyText(this.shareUrl).then((function(e){t.snackbar=!0}),(function(t){alert("복사에 실패했습니다.")}))}},computed:{shareUrl:function(){return"".concat(l,"/").concat(this.post.id)},twiterSharingUrl:function(){return"https://twitter.com/share?text=".concat(this.post.title,"&url=").concat(this.shareUrl,"&via=jettanalysis")},facebookSharingUrl:function(){return"https://www.facebook.com/sharer/sharer.php?u=".concat(this.shareUrl)}}}}).call(this,n(106))},542:function(t,e,n){var content=n(588);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("5e47d5dd",content,!0,{sourceMap:!1})},543:function(t,e,n){var content=n(590);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("dfe7e59e",content,!0,{sourceMap:!1})},544:function(t,e,n){var content=n(592);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("30c44c39",content,!0,{sourceMap:!1})},545:function(t,e,n){var content=n(594);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("210eb5ba",content,!0,{sourceMap:!1})},587:function(t,e,n){"use strict";n(542)},588:function(t,e,n){var o=n(17)(!1);o.push([t.i,'.table-of-content[data-v-41d1448d]{margin-bottom:1.5rem;border:1px solid #ddd;border-radius:5px;padding:1rem}.table-of-content ul[data-v-41d1448d]{list-style:none}.table-of-content ul li[data-v-41d1448d]{position:relative}.table-of-content ul li a[data-v-41d1448d]{color:#000}.table-of-content ul li a[data-v-41d1448d]:hover{color:#07f}.table-of-content ul li[data-v-41d1448d]:before{content:" ";position:absolute;top:7px;margin-left:-15px;border:5px solid transparent;border-left-color:#aaa;border-radius:2px}.table-of-content .toc-title[data-v-41d1448d]{display:flex;justify-content:space-between}.table-of-content .toc-title h2[data-v-41d1448d]{margin-top:0}.table-of-content .more .more-btn[data-v-41d1448d]{line-height:36px;text-decoration:none;color:#00afff;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.table-of-content .more .more-btn[data-v-41d1448d]:hover{color:#07f;border-bottom:1px solid #07f}.table-of-content a[data-v-41d1448d]{text-decoration:none;color:#00afff}.table-of-content .toc2[data-v-41d1448d]{font-size:1.2rem}.table-of-content .toc3[data-v-41d1448d]{font-size:1rem;padding-left:1rem}',""]),t.exports=o},589:function(t,e,n){"use strict";n(543)},590:function(t,e,n){var o=n(17)(!1);o.push([t.i,'#comments[data-v-cacc3c7a]{display:flex;justify-content:space-between;border-bottom:1px solid #ebebeb;padding:25px 0}.comment-size-progress[data-v-cacc3c7a]{margin-right:7.5px}.comments-title[data-v-cacc3c7a]{font-size:14px;display:flex;line-height:1;align-items:center;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";margin-bottom:0!important}.comments-title span[data-v-cacc3c7a]{color:#00afff;font-size:36px;font-weight:700;padding-right:10px}.comments-container[data-v-cacc3c7a]{padding:22.5px 0!important}.comments-inner-container[data-v-cacc3c7a]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.comments[data-v-cacc3c7a]{list-style:none;padding-left:0;margin:1rem 0}.comments-wrapper[data-v-cacc3c7a]{margin-bottom:1.75rem;word-wrap:break-word}.comments-author-photo[data-v-cacc3c7a]{width:48px;height:48px;margin-right:16px;line-height:48px;text-align:center;font-weight:700;color:#fff;font-size:14px;text-transform:uppercase}.comments-author-data[data-v-cacc3c7a]{flex-grow:1;min-width:1px}.comments-author-name[data-v-cacc3c7a]{font-weight:700}.comments-author-metadata[data-v-cacc3c7a],.comments-author-name[data-v-cacc3c7a]{line-height:22.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.comments-author-metadata[data-v-cacc3c7a]{font-size:10px}.comments-socials[data-v-cacc3c7a]{display:block;position:absolute;top:0;right:0;display:flex}.comments-link[data-v-cacc3c7a]{display:block;width:1.75rem;height:1.75rem;background:#f7f7f7;display:flex;justify-content:center;align-items:center;fill:#24292e}.comment-form[data-v-cacc3c7a]{margin:25px 0;padding-top:1rem}@media(min-width:576px){.comments-inner-container[data-v-cacc3c7a]{padding-right:10px;padding-left:10px}}@media(min-width:540px){.comments-inner-container[data-v-cacc3c7a]{max-width:540px}}@media(min-width:768px){.comments-inner-container[data-v-cacc3c7a]{max-width:720px}.comments-container[data-v-cacc3c7a]{padding:27.5px 0!important}}@media(min-width:992px){.comments-inner-container[data-v-cacc3c7a]{max-width:730px}}',""]),t.exports=o},591:function(t,e,n){"use strict";n(544)},592:function(t,e,n){var o=n(17)(!1);o.push([t.i,".comments-author{display:flex;margin-bottom:1.75rem;position:relative}",""]),t.exports=o},593:function(t,e,n){"use strict";n(545)},594:function(t,e,n){var o=n(17)(!1);o.push([t.i,".css-1isgq23[data-v-deedf504]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.share-btn[data-v-deedf504]{cursor:pointer}.css-72kctk[data-v-deedf504]{display:none}@media(min-width:576px){.css-1isgq23[data-v-deedf504]{padding-right:10px;padding-left:10px}}@media(min-width:540px){.css-1isgq23[data-v-deedf504]{max-width:540px}}@media(min-width:768px){.css-1isgq23[data-v-deedf504]{max-width:720px}}@media(min-width:992px){.css-1isgq23[data-v-deedf504]{max-width:960px}.css-72kctk[data-v-deedf504]{display:block;position:fixed;z-index:1;background-color:#fff;border:1px solid #ebebeb;border-radius:5px;padding:15px 2px 10px;text-align:center;top:140px;width:60px}.css-72kctk ul[data-v-deedf504]{list-style:none;padding:0;margin:0}.css-72kctk ul li a[data-v-deedf504]{display:inline-flex;align-items:center;justify-content:center;width:33px;height:33px;font-size:24px}.css-72kctk ul li a svg[data-v-deedf504]{max-width:26px;height:100%;max-height:26px;pointer-events:none}.css-72kctk ul li a svg.icon-twitter[data-v-deedf504]{fill:#219bcf}.css-72kctk ul li a svg.icon-twitter[data-v-deedf504]:hover{fill:#1d8bba}.css-72kctk ul li a svg.icon-facebook[data-v-deedf504]{fill:#66679d}.css-72kctk ul li a svg.icon-facebook[data-v-deedf504]:hover{fill:#5b5c8d}}@media(min-width:1200px){.css-1isgq23[data-v-deedf504]{max-width:1140px}.css-72kctk ul li a[data-v-deedf504]{font-size:26px;width:50px;height:50px}.css-72kctk[data-v-deedf504]{width:75px}}",""]),t.exports=o},598:function(t,e,n){"use strict";n.r(e);var o={props:{author:{type:Object,required:!0}}},r=n(45),c=n(64),l=n.n(c),d=n(311),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"author-container"},[n("v-img",{attrs:{src:t.author.img}}),n("div",{staticClass:"author"},[n("h4",[t._v("Author")]),n("p",[t._v(t._s(t.author.name))]),n("p",[t._v(t._s(t.author.bio))])])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VImg:d.a})},599:function(t,e,n){"use strict";n.r(e);n(7);var o={name:"TableOfContent",props:{toc:{type:Array,required:!0}},data:function(){return{more:!0}},computed:{tableOfContent:function(){return this.toc?this.toc.filter((function(t){return t.depth>1&&t.depth<4})):[]}}},r=(n(587),n(45)),c=n(64),l=n.n(c),d=n(208),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"table-of-content"},[n("div",{staticClass:"toc-title"},[n("h2",[t._v("목차")]),n("div",{staticClass:"more"},[n("a",{staticClass:"more-btn",on:{click:function(e){t.more=!t.more}}},[t._v(t._s(t.more?"열기":"접기"))])])]),n("v-expand-transition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:!t.more,expression:"!more"}]},t._l(t.tableOfContent,(function(link){return n("li",{key:link.id,class:{toc2:2===link.depth,toc3:3===link.depth}},[n("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#"+link.id},expression:"{el: `#${link.id}`}"}],attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)])],1)}),[],!1,null,"41d1448d",null);e.default=component.exports;l()(component,{VExpandTransition:d.a})},600:function(t,e,n){"use strict";n.r(e);var o=n(505).a,r=(n(589),n(591),n(45)),c=n(64),l=n.n(c),d=n(489),h=n(449),m=n(717),f=n(715),v=n(602),w=n(718),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comments-container"},[n("div",{staticClass:"comments-inner-container"},[n("div",{attrs:{id:"comments"}},[n("p",{staticClass:"comments-title"},[n("span",[t._v(t._s(t.commentCount))]),t._v(" 댓글")]),n("share-box",{attrs:{post:t.post,shareUrl:t.shareUrl,shareTwitter:t.shareTwitter,shareFacebook:t.shareFacebook}})],1),n("ul",{staticClass:"comments"},t._l(t.comments,(function(e,o){return n("li",{key:o,staticClass:"comment-item"},[n("v-skeleton-loader",t._b({attrs:{loading:t.isCommentLoading,type:"list-item-avatar-two-line, paragraph"}},"v-skeleton-loader",t.attrs,!1),[n("div",{staticClass:"comment-wrapper"},[n("div",{staticClass:"comments-author"},[n("div",{staticClass:"comments-author-photo",style:{backgroundColor:t.userColor(e.created_at)}},[t._v(t._s(t._f("filterFirstChar")(e.username)))]),n("div",{staticClass:"comments-author-data"},[n("div",{staticClass:"comments-author-name"},[t._v(t._s(e.username))]),n("div",{staticClass:"comments-author-metadata"},[n("time",{attrs:{datetime:e.create_at}},[t._v(t._s(t._f("toDateTime")(e.created_at)))])])])]),n("p",{staticClass:"comments-content"},[t._v(t._s(e.content))])])])],1)})),0),n("div",{staticClass:"comment-form"},[n("validation-observer",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var o=e.handleSubmit,r=e.reset;return[n("form",{on:{submit:function(e){return e.preventDefault(),o(t.submit)},reset:function(t){return t.preventDefault(),r.apply(null,arguments)}}},[n("v-col",[n("validation-provider",{attrs:{name:"이름",rules:"required|min:1|max:30"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("v-text-field",{staticClass:"mb-3",attrs:{"error-messages":o,label:"이름",outlined:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})]}}],null,!0)}),n("validation-provider",{attrs:{name:"비밀번호",rules:"required|min:4|max:20"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("v-text-field",{staticClass:"mb-3",attrs:{autocomplete:"new-password","error-messages":o,label:"비밀번호",outlined:"",type:t.showPassword?"text":"password"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})]}}],null,!0)}),n("validation-provider",{attrs:{name:"내용",rules:"required|min:1|max:1500"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("v-textarea",{attrs:{label:"내용","error-messages":o,outlined:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})]}}],null,!0)})],1),n("v-col",[n("v-btn",{staticClass:"white--text",attrs:{loading:t.loading,color:"#00afff",type:"submit",large:""}},[t._v("등록")])],1)],1)]}}])})],1)]),n("v-snackbar",{attrs:{timeout:"1500","min-width":"210",width:"210",rounded:"pill",top:"",right:""},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v("닫기")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("복사되었습니다!")])],1)}),[],!1,null,"cacc3c7a",null);e.default=component.exports;l()(component,{ShareBox:n(465).default}),l()(component,{VBtn:d.a,VCol:h.a,VSkeletonLoader:m.a,VSnackbar:f.a,VTextField:v.a,VTextarea:w.a})},601:function(t,e,n){"use strict";n.r(e);var o=n(506).a,r=(n(593),n(45)),c=n(64),l=n.n(c),d=n(489),h=n(715),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"entry-sticky-shares-wrap css-1isgq23"},[n("div",{staticClass:"entry-sticky-shares css-72kctk"},[n("ul",{staticClass:"entry-shares"},[n("li",[n("a",{staticClass:"share-btn",attrs:{href:t.twiterSharingUrl,target:"_blank"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareTwitter.apply(null,arguments)}}},[n("svg",{staticClass:"icon-twitter",attrs:{viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])])]),n("li",[n("a",{staticClass:"share-btn",attrs:{href:t.facebookSharingUrl,target:"_blank"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareFacebook.apply(null,arguments)}}},[n("svg",{staticClass:"icon-facebook",attrs:{viewBox:"0 0 320 512"}},[n("path",{attrs:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])])]),n("li",[n("a",{staticClass:"share-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoStory.apply(null,arguments)}}},[n("svg",{attrs:{fill:"#f2d41e",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",viewBox:"0 0 1000 1000","xml:space":"preserve",width:"24",height:"24"}},[n("g",[n("g",{attrs:{transform:"translate(0.000000,511.000000) scale(0.100000,-0.100000)"}},[n("path",{attrs:{d:"M2743.4,4958.8c-75.2-27.3-140.1-51.2-143.5-51.2c-3.4,0-47.8-58.1-95.7-126.4l-85.4-129.8V2410V168.8l78.6-116.2c150.3-228.9,194.7-235.8,1332.4-235.8H4848l-23.9-177.7c-30.7-252.8-170.8-686.7-310.9-966.9c-208.4-410-444.1-714.1-919-1175.3c-252.8-245.9-457.8-471.5-457.8-498.8c0-109.3,116.2-259.6,792.6-1007.9c594.5-659.4,710.6-768.7,799.5-779c92.2-10.2,157.2,30.7,410,242.6C6200.9-3661.1,6973-2468.8,7324.9-1177.3c232.4,850.7,228.9,775.5,242.6,3440.4l13.7,2432.6l-105.9,123c-61.5,68.3-164,136.7-232.3,157.2c-78.6,20.5-908.8,34.2-2244.7,34.2C3242.2,5006.6,2856.1,4999.8,2743.4,4958.8z"}})])])])])]),n("li",[n("a",{staticClass:"share-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoTalk.apply(null,arguments)}}},[n("svg",{attrs:{"enable-background":"new 0 0 24 24",height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.678 5.749-2.664 6.123 4.244 1.287.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399 0-5.19-5.373-9.398-12-9.398z",fill:"#3e2723"}}),n("g",{attrs:{fill:"#ffeb3b"}},[n("path",{attrs:{d:"m10.384 8.27c-.317-.893-1.529-.894-1.845-.001-.984 3.052-2.302 4.935-1.492 5.306 1.078.489 1.101-.611 1.359-1.1h2.111c.257.487.282 1.588 1.359 1.1.813-.371-.489-2.195-1.492-5.305zm-1.614 2.987.692-1.951.691 1.951z"}}),n("path",{attrs:{d:"m5.365 13.68c-1.198 0-.49-1.657-.692-4.742-.429-.074-1.76.297-1.76-.673 0-.371.305-.673.679-.673 2.518.18 4.224-.47 4.224.673 0 .987-1.275.59-1.76.673-.2 3.075.505 4.742-.691 4.742z"}}),n("path",{attrs:{d:"m13.154 13.579c-1.159 0-.454-1.565-.663-5.301 0-.91 1.413-.909 1.413 0v4.04c.669.089 2.135-.33 2.135.63-.001 1.007-1.576.503-2.885.631z"}}),n("path",{attrs:{d:"m19.556 13.38-1.624-2.137-.24.239v1.5c0 .38-.31.688-.693.688-1.203 0-.482-1.732-.692-5.392 0-.379.31-.688.692-.688 1.045 0 .594 1.478.692 2.166 1.96-1.873 1.913-2.072 2.316-2.072.556 0 .897.691.527 1.058l-1.578 1.567 1.704 2.243c.556.725-.555 1.556-1.104.828z"}})])])])]),n("li",[n("a",{staticClass:"share-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.copyToClipboard.apply(null,arguments)}}},[n("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[n("path",{attrs:{d:"M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"}})])])])])]),n("v-snackbar",{attrs:{timeout:"1500","min-width":"210",width:"210",rounded:"pill",top:"",right:""},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v("닫기")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("복사되었습니다!")])],1)}),[],!1,null,"deedf504",null);e.default=component.exports;l()(component,{VBtn:d.a,VSnackbar:h.a})},620:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},621:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBjbGFzcz0iaGVyb2ljb24tdWkiIGQ9Ik0xMS4wMyA4aDMuOTRsMS4wNi00LjI0YTEgMSAwIDEgMSAxLjk0LjQ4TDE3LjAzIDhIMjBhMSAxIDAgMCAxIDAgMmgtMy40N2wtMSA0SDE4YTEgMSAwIDEgMSAwIDJoLTIuOTdsLTEuMDYgNC4yNWExIDEgMCAxIDEtMS45NC0uNDlsLjk0LTMuNzZIOS4wM2wtMS4wNiA0LjI1YTEgMSAwIDEgMS0xLjk0LS40OUw2Ljk3IDE2SDRhMSAxIDAgMCAxIDAtMmgzLjQ3bDEtNEg2YTEgMSAwIDAgMSAwLTJoMi45N2wxLjA2LTQuMjRhMSAxIDAgMSAxIDEuOTQuNDhMMTEuMDMgOHptLS41IDJsLTEgNGgzLjk0bDEtNGgtMy45NHoiLz48L3N2Zz4="}}]);