(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{512:function(t,n,r){"use strict";r.r(n);var e={name:"DiagnosisSnackbar",data:function(){return{snackbar:!1}},props:{text:{type:String,required:!1,default:function(){return" 유효하지 않은 URL입니다!"}}},methods:{show:function(){this.snackbar=!0}}},c=r(45),o=r(64),l=r.n(o),f=r(488),w=r(717),component=Object(c.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-snackbar",{staticClass:"crawl-error",attrs:{timeout:"2500",rounded:"pill",width:"320","min-width":"320",top:"",color:"error"},scopedSlots:t._u([{key:"action",fn:function(n){var e=n.attrs;return[r("v-btn",t._b({attrs:{color:"#fff",text:""},on:{click:function(n){t.snackbar=!1}}},"v-btn",e,!1),[t._v("닫기")])]}}]),model:{value:t.snackbar,callback:function(n){t.snackbar=n},expression:"snackbar"}},[r("svg",{style:{"margin-bottom":"-3px"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#fff",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 6h2v8h-2v-8zm1 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"}})]),t._v(t._s(t.text))])}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:f.a,VSnackbar:w.a})}}]);