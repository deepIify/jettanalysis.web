(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{463:function(t,e,r){var content=r(479);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("50da162d",content,!0,{sourceMap:!1})},465:function(t,e,r){"use strict";r.r(e);r(25),r(5),r(47);var o=r(156),n={name:"ShareBox",props:{shareUrl:{type:String,required:!0},shareTwitter:{type:String,required:!0},shareFacebook:{type:String,required:!0},post:{type:Object,required:!0}},data:function(){return{snackbar:!1}},methods:{shareKakaoStory:function(){var t=this;Object(o.d)((function(){window.Kakao.Story.share({url:t.shareUrl,text:"".concat(t.post.title,"\n\n").concat(t.post.description)})}))},shareKakaoTalk:function(){var t=this;Object(o.d)((function(){window.Kakao.Link.sendCustom({templateId:60106,templateArgs:{thumbnail:t.post.img,title:t.post.title,description:t.post.description,path:t.post.id}})}))},copyToClipboard:function(){var t=this;this.$copyText(this.shareUrl).then((function(e){t.snackbar=!0}),(function(t){alert("복사에 실패했습니다.")}))}}},c=(r(478),r(45)),l=r(64),h=r.n(l),d=r(489),f=r(715),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"share"},[r("li",[r("a",{staticClass:"twitter",attrs:{href:t.shareTwitter,target:"_blank"}},[r("svg",{staticClass:"icon-twitter",attrs:{fill:"#219bcf",viewBox:"0 0 512 512",width:"24",height:"24"}},[r("path",{attrs:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])])]),r("li",[r("a",{staticClass:"facebook",attrs:{href:t.shareFacebook,target:"_blank"}},[r("svg",{staticClass:"icon-facebook",attrs:{fill:"#66679d",viewBox:"0 0 320 512",width:"24",height:"24"}},[r("path",{attrs:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])])]),r("li",[r("a",{staticClass:"kakao-story",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoStory.apply(null,arguments)}}},[r("svg",{attrs:{fill:"#f2d41e",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",viewBox:"0 0 1000 1000","xml:space":"preserve",width:"24",height:"24"}},[r("g",[r("g",{attrs:{transform:"translate(0.000000,511.000000) scale(0.100000,-0.100000)"}},[r("path",{attrs:{d:"M2743.4,4958.8c-75.2-27.3-140.1-51.2-143.5-51.2c-3.4,0-47.8-58.1-95.7-126.4l-85.4-129.8V2410V168.8l78.6-116.2c150.3-228.9,194.7-235.8,1332.4-235.8H4848l-23.9-177.7c-30.7-252.8-170.8-686.7-310.9-966.9c-208.4-410-444.1-714.1-919-1175.3c-252.8-245.9-457.8-471.5-457.8-498.8c0-109.3,116.2-259.6,792.6-1007.9c594.5-659.4,710.6-768.7,799.5-779c92.2-10.2,157.2,30.7,410,242.6C6200.9-3661.1,6973-2468.8,7324.9-1177.3c232.4,850.7,228.9,775.5,242.6,3440.4l13.7,2432.6l-105.9,123c-61.5,68.3-164,136.7-232.3,157.2c-78.6,20.5-908.8,34.2-2244.7,34.2C3242.2,5006.6,2856.1,4999.8,2743.4,4958.8z"}})])])])])]),r("li",[r("a",{staticClass:"kakao-talk",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoTalk.apply(null,arguments)}}},[r("svg",{attrs:{"enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.678 5.749-2.664 6.123 4.244 1.287.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399 0-5.19-5.373-9.398-12-9.398z",fill:"#3e2723"}}),r("g",{attrs:{fill:"#ffeb3b"}},[r("path",{attrs:{d:"m10.384 8.27c-.317-.893-1.529-.894-1.845-.001-.984 3.052-2.302 4.935-1.492 5.306 1.078.489 1.101-.611 1.359-1.1h2.111c.257.487.282 1.588 1.359 1.1.813-.371-.489-2.195-1.492-5.305zm-1.614 2.987.692-1.951.691 1.951z"}}),r("path",{attrs:{d:"m5.365 13.68c-1.198 0-.49-1.657-.692-4.742-.429-.074-1.76.297-1.76-.673 0-.371.305-.673.679-.673 2.518.18 4.224-.47 4.224.673 0 .987-1.275.59-1.76.673-.2 3.075.505 4.742-.691 4.742z"}}),r("path",{attrs:{d:"m13.154 13.579c-1.159 0-.454-1.565-.663-5.301 0-.91 1.413-.909 1.413 0v4.04c.669.089 2.135-.33 2.135.63-.001 1.007-1.576.503-2.885.631z"}}),r("path",{attrs:{d:"m19.556 13.38-1.624-2.137-.24.239v1.5c0 .38-.31.688-.693.688-1.203 0-.482-1.732-.692-5.392 0-.379.31-.688.692-.688 1.045 0 .594 1.478.692 2.166 1.96-1.873 1.913-2.072 2.316-2.072.556 0 .897.691.527 1.058l-1.578 1.567 1.704 2.243c.556.725-.555 1.556-1.104.828z"}})])])])]),r("li",[r("a",{staticClass:"clipboard",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.copyToClipboard.apply(null,arguments)}}},[r("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[r("path",{attrs:{d:"M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"}})])])]),r("v-snackbar",{attrs:{timeout:"1500","min-width":"210",width:"210",rounded:"pill",top:"",right:""},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[r("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v("닫기")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("복사되었습니다!")])],1)}),[],!1,null,"2a3538a6",null);e.default=component.exports;h()(component,{VBtn:d.a,VSnackbar:f.a})},478:function(t,e,r){"use strict";r(463)},479:function(t,e,r){var o=r(17)(!1);o.push([t.i,".share[data-v-2a3538a6]{margin-bottom:0;margin-top:auto;display:flex;padding-left:0;list-style:none}.share a[data-v-2a3538a6]{text-decoration:none}.share .twitter i[data-v-2a3538a6]{color:#219bcf}.share .twitter i[data-v-2a3538a6]:hover{color:#1a7aa3}.share .facebook i[data-v-2a3538a6]{color:#66679d}.share .facebook i[data-v-2a3538a6]:hover{color:#51527f}.share li+li[data-v-2a3538a6]{margin-left:10px}",""]),t.exports=o}}]);