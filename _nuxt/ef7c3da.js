(window.webpackJsonp=window.webpackJsonp||[]).push([[37,26,27],{440:function(t,e,n){var content=n(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("c3c6c082",content,!0,{sourceMap:!1})},445:function(t,e,n){"use strict";n(9),n(13),n(16),n(17);var o=n(2),r=(n(54),n(68),n(29),n(12),n(30),n(50),n(406),n(6),n(26),n(407),n(408),n(410),n(411),n(412),n(413),n(414),n(415),n(416),n(417),n(418),n(419),n(420),n(28),n(11),n(399),n(0)),c=n(173),d=n(3);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],v=["start","end","center"];function x(t,e){return m.reduce((function(n,o){return n[t+Object(d.q)(o)]=e(),n}),{})}var h=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},w=x("align",(function(){return{type:String,default:null,validator:h}})),y=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},k=x("justify",(function(){return{type:String,default:null,validator:y}})),C=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},j=x("alignContent",(function(){return{type:String,default:null,validator:C}})),O={align:Object.keys(w),justify:Object.keys(k),alignContent:Object.keys(j)},S={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,n){var o=S[t];if(null!=n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return(o+="-".concat(n)).toLowerCase()}}var z=new Map;e.a=r.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},w),{},{justify:{type:String,default:null,validator:y}},k),{},{alignContent:{type:String,default:null,validator:C}},j),render:function(t,e){var n=e.props,data=e.data,r=e.children,d="";for(var l in n)d+=String(n[l]);var f=z.get(d);return f||function(){var t,e;for(e in f=[],O)O[e].forEach((function(t){var o=n[t],r=_(e,t,o);r&&f.push(r)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(o.a)(t,"align-".concat(n.align),n.align),Object(o.a)(t,"justify-".concat(n.justify),n.justify),Object(o.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),z.set(d,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),r)}})},473:function(t,e,n){"use strict";n(440)},474:function(t,e,n){var o=n(20)(!1);o.push([t.i,'a[data-v-3875fdfb]{text-decoration:none;color:#000}.css-xyedk8[data-v-3875fdfb]{position:relative;overflow:hidden;padding-bottom:57.6px;padding-top:43.2px}.feature-image[data-v-3875fdfb]{width:100%}.css-xyedk8[data-v-3875fdfb]:after{content:"";display:block;position:absolute;bottom:0;left:0;right:0;background-color:#f7f9ff;height:345px}.css-1isgq23[data-v-3875fdfb]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.css-1etpwf[data-v-3875fdfb]{max-width:750px;margin:0 auto;position:relative;cursor:pointer}.css-iu3tgu[data-v-3875fdfb]{position:relative;z-index:2;text-align:center;border:1px solid #e6e6e6;background-color:#fff;padding:35px 20px}.css-k2w90m[data-v-3875fdfb]{color:#00afff;text-transform:uppercase;font-weight:700;font-size:17px;margin-bottom:15px}.css-1tlyyhw[data-v-3875fdfb]{font-size:29px;margin-bottom:20px}.css-1tlyyhw a[data-v-3875fdfb]{color:#000}.css-8yi3qm[data-v-3875fdfb]{margin:0 auto;max-width:430px;font-size:1rem}.css-1n3a0vm[data-v-3875fdfb]{border-radius:20px;margin:40px 0 0;overflow:hidden}@media(min-width:576px){.css-1isgq23[data-v-3875fdfb]{padding-right:10px;padding-left:10px}}@media(min-width:540px){.css-1isgq23[data-v-3875fdfb]{max-width:540px}}@media(min-width:768px){.css-xyedk8[data-v-3875fdfb]{padding-bottom:86.4px;padding-top:57.6px}.css-1isgq23[data-v-3875fdfb]{max-width:720px}.css-iu3tgu[data-v-3875fdfb]{padding:60px 55px}.css-k2w90m[data-v-3875fdfb]{margin-bottom:20px}.css-1tlyyhw[data-v-3875fdfb]{font-size:35px;margin-bottom:25px}.css-8yi3qm[data-v-3875fdfb]{font-size:1.125rem}.css-1n3a0vm[data-v-3875fdfb]{margin:45px 0 0}}@media(min-width:992px){.css-1isgq23[data-v-3875fdfb]{max-width:960px}}@media(min-width:1200px){.css-1isgq23[data-v-3875fdfb]{max-width:1140px}}',""]),t.exports=o},479:function(t,e,n){var content=n(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("7ccd983c",content,!0,{sourceMap:!1})},481:function(t,e,n){"use strict";n.r(e);var o={name:"Feature",props:["to","type","title","desc","imageUrl"],methods:{go:function(){this.to?this.$router.push(this.to):this.$emit("onFeatureClick")}}},r=(n(473),n(36)),c=n(48),d=n.n(c),l=n(266),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"css-xyedk8"},[n("div",{staticClass:"css-1isgq23"},[n("div",{staticClass:"css-1etpwf",on:{click:t.go}},[n("div",{staticClass:"css-iu3tgu"},[n("p",{staticClass:"css-k2w90m"},[t._v(t._s(t.type))]),n("h3",{staticClass:"css-1tlyyhw"},[t._v(t._s(t.title))]),n("div",{staticClass:"css-8yi3qm"},[n("p",[t._v(t._s(t.desc))])]),n("v-img",{staticClass:"feature-image",attrs:{src:t.imageUrl}})],1)])])])}),[],!1,null,"3875fdfb",null);e.default=component.exports;d()(component,{VImg:l.a})},506:function(t,e,n){"use strict";n(479)},507:function(t,e,n){var o=n(20)(!1);o.push([t.i,".css-gi099c[data-v-166ccd18]{overflow:hidden;position:relative;padding-top:1rem;padding-bottom:1rem}.css-13j9vq9[data-v-166ccd18]{display:flex;justify-content:center;margin-bottom:0;margin-top:0}",""]),t.exports=o},515:function(t,e,n){"use strict";n.r(e);n(506);var o=n(36),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"css-gi099c"},[e("figure",{staticClass:"css-13j9vq9"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"115px",height:"18px",viewBox:"0 0 115 18",version:"1.1"}},[e("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{id:"Asset-8",transform:"translate(0.000000, 4.000000)",stroke:"#00afff","stroke-width":"8"}},[e("path",{attrs:{id:"Path",d:"M0,0 C11.5,0 11.5,10 23,10 C34.5,10 34.5,0 46,0 C57.5,0 57.5,10 69,10 C80.5,10 80.5,0 92,0 C103.5,0 103.5,10 115,10"}})])])])])])}),[],!1,null,"166ccd18",null);e.default=component.exports},535:function(t,e,n){var content=n(609);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("7ddf4c23",content,!0,{sourceMap:!1})},608:function(t,e,n){"use strict";n(535)},609:function(t,e,n){var o=n(20)(!1);o.push([t.i,'.top-container[data-v-024461c1]{overflow:hidden;background-image:linear-gradient(180deg,#fff 10%,#eef0f7);background-repeat:repeat-x}.inner-container[data-v-024461c1]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.css-79elbk[data-v-024461c1]{position:relative}.css-1k9xznr[data-v-024461c1]{display:flex;flex-wrap:wrap;margin-right:-10px;margin-left:-10px}.css-8p4et2[data-v-024461c1]{position:relative;width:100%;min-height:1px;padding-right:10px;padding-left:10px}.page-title[data-v-024461c1]{line-height:1.3;font-weight:800;font-size:32px;max-width:235px;margin:20px 0 calc(100% - 70px);font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}.recommend-conainer[data-v-024461c1]{color:#1d2b35;background-color:#fff;border-radius:6px;border:1px solid #ccd3e8;font-size:1rem;padding:25px;display:none}.recommend[data-v-024461c1]{position:relative;line-height:1.6}.recommend[data-v-024461c1],.recommend p[data-v-024461c1]{margin-bottom:0}.recommend cite[data-v-024461c1]{font-style:normal;display:block;margin-top:10px;font-weight:400;text-transform:none;font-size:1rem}.main-image-container[data-v-024461c1]{position:relative;width:100%;min-height:1px;padding-right:10px;padding-left:10px;position:static;display:flex;justify-content:flex-end;align-items:flex-end;min-height:0}.figure-image[data-v-024461c1]{right:0;margin:0;bottom:107px;overflow:hidden}.figure-image .main-image[data-v-024461c1]{width:100vw;margin-bottom:0;height:auto}.css-ld04yu[data-v-024461c1]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.css-1py7eya[data-v-024461c1]{color:#1d2b35;background-color:#fff;border-radius:6px;border:1px solid #ccd3e8;font-size:1rem;padding:25px}.css-1ptfann[data-v-024461c1]{position:relative;line-height:1.6}.css-1ptfann[data-v-024461c1],.css-1ptfann p[data-v-024461c1]{margin-bottom:0}.css-1ptfann cite[data-v-024461c1]{font-style:normal;display:block;margin-top:10px;font-weight:400;text-transform:none;font-size:1rem}@media(min-width:576px){.inner-container[data-v-024461c1]{padding-right:6px;padding-left:10px}.css-ld04yu[data-v-024461c1]{padding-right:10px;padding-left:10px}}@media(min-width:540px){.inner-container[data-v-024461c1]{max-width:540px}.page-title[data-v-024461c1]{max-width:340px;margin:20px 0 150px}.figure-image[data-v-024461c1]{right:0;bottom:135px}.figure-image .main-image[data-v-024461c1]{width:100%;max-width:270px}.css-ld04yu[data-v-024461c1]{max-width:540px}}@media(max-width:767.98px){.css-1py7eya[data-v-024461c1],.recommend-conainer[data-v-024461c1]{margin-top:50px}}@media(min-width:768px){.inner-container[data-v-024461c1]{max-width:720px}.page-title[data-v-024461c1]{font-size:48px;max-width:440px;margin:55px 0 40px}.recommend-conainer[data-v-024461c1]{max-width:335px;display:block}.figure-image[data-v-024461c1]{right:-25px;bottom:-7px;transform:translateY(-10rem)}.figure-image .main-image[data-v-024461c1]{max-width:365px;margin-bottom:0}.css-ld04yu[data-v-024461c1]{max-width:720px;display:none}.css-1py7eya[data-v-024461c1]{max-width:335px}}@media(max-width:991.98px){.figure-image[data-v-024461c1]{position:absolute}}@media(min-width:992px){.inner-container[data-v-024461c1]{max-width:960px}.css-8p4et2[data-v-024461c1]{flex:0 0 58.33333%;max-width:58.33333%}.page-title[data-v-024461c1]{max-width:550px;margin:75px 0 40px}.recommend-conainer[data-v-024461c1]{max-width:495px}.main-image-container[data-v-024461c1]{flex:0 0 41.66667%;max-width:41.66667%}.figure-image[data-v-024461c1]{transform:translateY(-10rem)}.figure-image .main-image[data-v-024461c1]{max-width:520px;margin-top:0}.css-ld04yu[data-v-024461c1]{max-width:960px}.css-1py7eya[data-v-024461c1]{max-width:495px}.css-1ptfann[data-v-024461c1]{padding-left:70px}}@media(min-width:1200px){.inner-container[data-v-024461c1]{max-width:1140px}.css-8p4et2[data-v-024461c1]{padding-left:30px}.page-title[data-v-024461c1]{font-size:46px}.recommend-conainer[data-v-024461c1]{max-width:505px}.figure-image[data-v-024461c1]{margin:0;transform:translateY(-10rem)}.css-ld04yu[data-v-024461c1]{max-width:1140px}.css-1py7eya[data-v-024461c1]{max-width:505px}}.call-container[data-v-024461c1]{position:relative;padding:18px 0}@media(min-width:768px){.call-container[data-v-024461c1]{margin-top:110px}}@media(min-width:992px){.call-container[data-v-024461c1]{margin-top:40px;max-width:495px}}@media(min-width:1200px){.call-container[data-v-024461c1]{max-width:505px}}.call-container[data-v-024461c1]:before{content:"";position:absolute;z-index:2;width:200vw;left:-50vw;top:0;display:block;height:1px;background-color:#ccd3e8}@media(min-width:992px){.call-container[data-v-024461c1]:before{display:none}}.call-container[data-v-024461c1]:after{content:"";position:absolute;z-index:1;display:block;width:200vw;left:-50vw;top:0;bottom:0;background-color:#eef0f7}@media(min-width:768px)and (max-width:991px){.call-container[data-v-024461c1]:after{opacity:.9}}@media(min-width:992px){.call-container[data-v-024461c1]:after{display:none}}.call-inner-container[data-v-024461c1]{position:relative;z-index:3}.caller-list[data-v-024461c1]{position:relative;margin-bottom:0;padding-left:0;list-style:none}.caller-list-item[data-v-024461c1]{margin-bottom:0;padding:0}.caller-input[data-v-024461c1]{display:block;width:100%;height:3.7875rem;padding:1.05rem 1.2rem;font-family:Inter;font-weight:400;line-height:1.4;color:#000;background-color:#fff;background-clip:padding-box;border-radius:6px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);transition:background-color .2s ease-in-out,border-color .2s ease-in-out,box-shadow .2s ease-in-out;font-size:11.25px;font-size:1.125rem;border:1px solid #ccd3e8;font-family:"Inter"}.caller-input[data-v-024461c1]::-ms-expand{background-color:transparent;border:0}.caller-input[data-v-024461c1]:focus{color:#000;background-color:#fff;border-color:#00d07e;outline:0;box-shadow:none}.caller-input[data-v-024461c1]::-moz-placeholder{color:#a5a5a5;opacity:1}.caller-input[data-v-024461c1]:-ms-input-placeholder{color:#a5a5a5;opacity:1}.caller-input[data-v-024461c1]::placeholder{color:#a5a5a5;opacity:1}.caller-input[data-v-024461c1]:disabled,.caller-input[readonly][data-v-024461c1]{background-color:#e6e6e6;opacity:1}.caller-btn[data-v-024461c1]{font-size:1.125rem;margin:0;font-weight:700;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;padding:1.05rem 1.2rem;font-size:1.5rem;line-height:1.4;transition:all .2s ease-in-out;display:inline-flex;align-items:center;justify-content:center;font-style:normal;white-space:normal;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;cursor:pointer;text-transform:none;font-weight:600;min-height:3.7875rem;outline:none;border-radius:6px;top:0;right:0;min-width:170px;color:#fff;background-color:#00afff;border:1px solid #00afff;width:100%}.caller-btn:disabled[disabled][data-v-024461c1]{cursor:not-allowed}.caller-btn[data-v-024461c1]:active,.caller-btn[data-v-024461c1]:hover{background-color:#07f;border-color:#07f}@media(max-width:767.98px){.caller-btn[data-v-024461c1]{width:100%;margin-top:10px}}',""]),t.exports=o},639:function(t,e,n){"use strict";n.r(e);n(29);var o=n(132),r=n(133),c=n(515),d=n(481),l=n(90),f="".concat("https://jettanalysis.com").concat(""),m={name:"Index",components:{NavigationBar:o.default,PageFooter:r.default,Separater:c.default,Feature:d.default,Logo:l.default},head:function(t){var title="검색엔진 최적화 전략 가이드";return{title:title,meta:(0,t.$seoMeta)({title:"".concat(title," | ").concat("JETT Analysis"),url:"".concat(f),description:"이제 검색엔진 최적화는 저희에게 맡기세요! Jett Analysis는 다양한 검색엔진 최적화 전략과 팁을 제공합니다."},!1).concat({hid:"naver-site-verification",name:"naver-site-verification",content:"0e358a0869dfa65f24120c168925d9b1d706c353"}),link:[{rel:"canonical",href:"".concat(f).concat(this.$route.path)}]}},methods:{counsel:function(){this.$router.push("/counsel")}}},v=(n(608),n(36)),x=n(48),h=n.n(x),w=n(266),y=n(390),k=n(137),C=n(445),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jett-container"},[n("navigation-bar"),n("v-main",[n("section",[n("div",{staticClass:"top-container"},[n("div",{staticClass:"inner-container"},[n("div",{staticClass:"css-79elbk"},[n("div",{staticClass:"css-1k9xznr"},[n("div",{staticClass:"css-8p4et2"},[n("h1",{staticClass:"page-title"},[t._v("검색엔진 최적화, 상위노출을 꿈꾸신다면? "),n("br"),t._v(" 제트와 상담하세요")]),n("div",{staticClass:"recommend-conainer"},[n("div",{staticClass:"recommend"},[n("blockquote",{staticClass:"recommend-block"},[n("p",[t._v("무료로 제공되는 검색엔진 최적화 사이트 진단, 다양한 정보와 팁들을 확인하세요")]),n("cite",[t._v("데이터 분석 기반 마케팅 에이전시, "),n("br"),t._v(" JETT Analysis")])])])]),n("div",{staticClass:"call-container"},[n("div",{staticClass:"call-inner-container"},[n("div",{staticClass:"aweber-form-body"},[n("button",{staticClass:"caller-btn e1fw58rm0",attrs:{type:"button",role:"button"},on:{click:t.counsel}},[t._v("상담하기")])])])])]),n("div",{staticClass:"main-image-container"},[n("div",{staticClass:"figure-image"},[n("v-img",{staticClass:"main-image",attrs:{"lazy-src":"/images/placeholder.png",src:"https://jettanalysis.com/images/main01.png",alt:"검색엔진 최적화 - JETT Analysis"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)])])])])]),n("div",{staticClass:"css-ld04yu"},[n("div",{staticClass:"css-1py7eya"},[n("blockquote",{staticClass:"css-1ptfann"},[n("p",[t._v("“무료로 제공되는 검색엔진 최적화 사이트 진단과 다양한 팁들을 얻을 수 있습니다.”")]),n("cite",[t._v("데이터 분석 기반 마케팅 에이전시, JETT Analysis")])])])])]),n("section",[n("feature",{attrs:{to:"/diagnosis",type:"SITE DIAGNOSIS",title:"진단: 당신의 사이트를 무료로 진단해보세요!",desc:"검색 엔진 최적화를 위한 온 페이지 사이트 진단을 해보고 사이트의 문제점을 파악해보세요.",imageUrl:"/images/site-diagnosis.png"}})],1),n("section",[n("separater")],1),n("section",[n("feature",{attrs:{to:"/blog",type:"BLOG: SEO TIPS",title:"2021년 검색엔진 최적화 완벽 가이드",desc:"효과적이고 확실한 SEO 전략 및 팁을 확인해보세요.",imageUrl:"/images/site-diagnosis.png"}})],1)]),n("page-footer")],1)}),[],!1,null,"024461c1",null);e.default=component.exports;h()(component,{NavigationBar:n(132).default,Feature:n(481).default,Separater:n(515).default,PageFooter:n(133).default}),h()(component,{VImg:w.a,VMain:y.a,VProgressCircular:k.a,VRow:C.a})}}]);