(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{608:function(t,e,r){"use strict";(function(t){var n=r(1),o=(r(25),r(27),r(48),r(128),r(78),r(127),r(66),r(6),r(5),r(7),r(12),r(8),r(13),r(82));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=t.env.NUXT_APP_BASE_URL||"https://jettanalysis.com",f=t.env.NUXT_APP_FRONTEND_PORT||"",v="".concat(d).concat(f);e.a={name:"Profile",components:{},data:function(){return{receiveSms:!1,phoneNumber:""}},head:function(e){var title="유저 프로필";return{title:title,meta:(0,e.$seoMeta)({title:"".concat(title," | ").concat(t.env.NUXT_APP_SITE_NAME||"JETT Analysis"),url:"".concat(v).concat(this.$route.path),description:"유저 프로필 페이지입니다."},!1).concat([{hid:"robots",name:"robots",content:"noindex, nofollow"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"".concat(title," | JETT Analysis")}]),link:[{rel:"canonical",href:"".concat(v).concat(this.$route.path)}]}},created:function(){this.user||this.$router.push("/")},methods:{go:function(path){this.$router.push(path)},writePhoneNumber:function(t){var e=t.target.value.replace(/-/gi,"");if(!/^\d+&/.test(e)){var r=e.match(/\d/g);r&&(e=r.join(""))}if(e.length>11&&(e=e.substring(0,11)),e.length<=3)this.phoneNumber=e;else if(e.length<=7){var n=new RegExp("(\\d{3})(\\d{".concat(e.length-3,"})"));this.phoneNumber=e.replace(n,"$1-$2")}else{var o=new RegExp("(\\d{3})(\\d{4})(\\d{".concat(e.length-7,"})"));this.phoneNumber=e.replace(o,"$1-$2-$3")}this.$refs.phoneNumberField.value=this.phoneNumber}},computed:l(l({},Object(o.c)({user:"user/user"})),{},{providerType:function(){return this.user&&this.user.uid?"":"UNKNOWN"}})}}).call(this,r(124))},642:function(t,e,r){var content=r(709);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("adf57ce4",content,!0,{sourceMap:!1})},708:function(t,e,r){"use strict";r(642)},709:function(t,e,r){var n=r(17)(!1);n.push([t.i,".container[data-v-0265d540]{flex-direction:column}.container[data-v-0265d540],.profile-container[data-v-0265d540]{display:flex;justify-content:center}.profile-container[data-v-0265d540]{width:100%;margin:2rem 0 5rem}.profile-container .profile-inner-container[data-v-0265d540]{display:flex;flex-direction:column}.user-details table[data-v-0265d540]{background:#e9f8ff;border:1px solid transparent;border-radius:20px;padding:2rem 2.5rem;max-width:500px;margin:2rem 0}.user-details tr[data-v-0265d540]{line-height:50px}.user-details th[data-v-0265d540]{text-align:left;vertical-align:top}.details[data-v-0265d540]{margin-top:1.5rem}.details h2[data-v-0265d540],.sms-switch[data-v-0265d540]{margin-top:0}.description[data-v-0265d540]{font-size:12px;color:#777}.separater[data-v-0265d540]{margin:3rem 0}.detail-btn[data-v-0265d540]{width:100%;background:#00afff;color:#fff;padding:8px 0;border:1px solid transparent;border-radius:21px;margin-top:2rem}.save-profile[data-v-0265d540]{display:flex;justify-content:center}.phone-number-field[data-v-0265d540]{margin-top:10px;background:#fff;border:1px solid;border-radius:5px;height:35px;padding-left:10px}@media(min-width:768px){.profile-container[data-v-0265d540]{justify-content:space-evenly}.profile-container .profile-inner-container[data-v-0265d540]{width:100%;flex-direction:row;justify-content:space-evenly}.details[data-v-0265d540],.user-details .title[data-v-0265d540]{margin-top:0}.details[data-v-0265d540]{min-width:300px}}",""]),t.exports=n},769:function(t,e,r){"use strict";r.r(e);var n=r(608).a,o=(r(708),r(38)),c=r(57),l=r.n(c),d=r(478),f=r(462),v=r(631),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"jett-container"},[r("navigation-bar"),r("v-container",{staticClass:"container",staticStyle:{"min-height":"650px"}},[r("div",{staticClass:"profile-container"},[r("div",{staticClass:"profile-inner-container"},[r("div",{staticClass:"user-details"},[r("h2",{staticClass:"title"},[t._v("내 프로필")]),r("table",[r("colgroup",[r("col",{staticStyle:{width:"100px"}})]),r("tbody",[r("tr",[r("th",{attrs:{scope:"row"}},[r("label",[t._v("이름")])]),r("td",[t._v(t._s(t.user?t.user.displayName:"UNKOWN"))])]),r("tr",[r("th",{attrs:{scope:"row"}},[r("label",[t._v("이메일")])]),r("td",[t._v(t._s(t.user?t.user.email:"UNKOWN"))])]),r("tr",[r("th",{attrs:{scope:"row"}},[r("label",[t._v("휴대전화")])]),r("td",[t.user&&t.user.phoneNumber?r("span",[t._v(t._s(t.user.phoneNumber))]):r("input",{ref:"phoneNumberField",staticClass:"phone-number-field",attrs:{placeholder:"010-1234-5678"},domProps:{value:t.phoneNumber},on:{input:t.writePhoneNumber}}),r("v-switch",{staticClass:"sms-switch",attrs:{label:"문자 수신 여부",color:"#00afff",value:"문자 수신 여부","hide-details":""},model:{value:t.receiveSms,callback:function(e){t.receiveSms=e},expression:"receiveSms"}})],1)])])]),r("div",{staticClass:"save-profile"},[r("v-btn",{attrs:{text:"",color:"red"}},[t._v("프로필 저장")])],1)]),r("div",{staticClass:"details"},[r("div",{staticClass:"seo-report"},[r("h2",{staticClass:"title"},[t._v("SEO 보고서")]),r("div",{staticClass:"description"},[t._v("내가 구매한 서비스의 리포트를 확인하세요.")]),r("button",{staticClass:"detail-btn",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.go("/report")}}},[t._v("바로가기")])]),r("hr",{staticClass:"separater"}),r("div",{staticClass:"payment-history"},[r("h2",{staticClass:"title"},[t._v("결제 내역")]),r("div",{staticClass:"description"},[t._v("내가 결제한 내역을 확인하세요.")]),r("button",{staticClass:"detail-btn",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.go("/payment-history")}}},[t._v("바로가기")])])])])])]),r("page-footer")],1)}),[],!1,null,"0265d540",null);e.default=component.exports;l()(component,{NavigationBar:r(157).default,PageFooter:r(158).default}),l()(component,{VBtn:d.a,VContainer:f.a,VSwitch:v.a})}}]);