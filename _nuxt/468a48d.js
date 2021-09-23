(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{499:function(e,t,n){var content=n(535);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("3e5e7c68",content,!0,{sourceMap:!1})},534:function(e,t,n){"use strict";n(499)},535:function(e,t,n){var l=n(20)(!1);l.push([e.i,".order-sheet-container[data-v-24e2164f]{background:#fff;padding:30px 0 70px}.custom-keyword-combobox .v-chip.v-size--small[data-v-24e2164f]{padding-right:3px}.cancel-btn[data-v-24e2164f]{margin-left:2px}.sheet-inner-container[data-v-24e2164f]{width:100%;border:1px solid #ccc;padding:5rem 3rem;margin-right:auto;margin-left:auto;display:flex;flex-direction:column;align-items:center;text-align:center}.sheet-inner-container .sheet-title[data-v-24e2164f]{font-size:24px;font-weight:700;margin-bottom:0}.sheet-inner-container .sheet-desc[data-v-24e2164f]{color:#888}.field[data-v-24e2164f]{margin-bottom:3rem}.sheet-form[data-v-24e2164f]{margin-top:2rem;text-align:left;width:100%}.sheet-form .field-name[data-v-24e2164f]{font-weight:700;margin-bottom:0}.cautions[data-v-24e2164f]{list-style:square}.ordering[data-v-24e2164f]{text-align:center}@media(min-width:576px){.sheet-inner-container[data-v-24e2164f]{padding-right:10px;padding-left:10px}.sheet-inner-container .sheet-title[data-v-24e2164f]{font-size:36px;font-weight:700;margin-bottom:0}.radio-box[data-v-24e2164f]{flex-direction:row}}@media(min-width:540px){.sheet-inner-container[data-v-24e2164f]{max-width:540px}}@media(max-width:767.98px){.order-sheet-container[data-v-24e2164f]{border-bottom:1 solid #ccd3e8}}@media(min-width:768px){.order-sheet-container[data-v-24e2164f]{padding:40px 0 135px}.sheet-inner-container[data-v-24e2164f]{max-width:720px}}@media(min-width:992px){.sheet-inner-container[data-v-24e2164f]{max-width:960px}}@media(min-width:1200px){.sheet-inner-container[data-v-24e2164f]{max-width:1140px}}",""]),e.exports=l},570:function(e,t,n){"use strict";n.r(t);n(175),n(269);var l=n(61),r={name:"OrderSheet",components:{ValidationObserver:l.a,ValidationProvider:l.b},props:{sheetType:{type:String,required:!0,default:function(){return"SETTING_SEO"}}},data:function(){return{loading:!1,backlinkSheet:[{id:"name",type:"TEXT_FIELD",width:200,name:"입금자명",label:"ex) 홍길동",rules:"required|min:1|max:30",value:"",cautions:["결제는 계좌이체를 통해 진행됩니다. 빠른 입금확인을 위해 입금자명을 정확히 입력해주세요."]},{id:"email",type:"TEXT_FIELD",width:400,name:"이메일",label:"ex) jett.analysis@gmail.com",rules:"required|email|min:4|max:256",value:"",cautions:["결제완료 안내 및 결과 보고서를 전달 받을 이메일을 입력해주세요."]},{id:"url",type:"TEXT_FIELD",width:400,name:"사이트 URL",label:"ex) https://jettanalysis.com/diagnosis",rules:"required|url|min:4|max:256",value:"",cautions:["검색엔진에 노출되고자 하는 페이지 링크를 입력해주세요."]},{id:"keywords",type:"COMBOBOX",width:600,name:"키워드",label:"ex) 사이트 진단",rules:"required",hint:"키워드는 5개까지 설정 가능합니다.",value:["사이트 진단(지워주세요!)"],cautions:["검색엔진에 노출되고자 하는 검색어 키워드를 입력해주세요.",'띄어쓰기가 포함된 경우, 서로 다른 키워드로 인식됩니다. (ex. "사이트 진단"과 "사이트진단"은 서로 다른 키워드)']},{id:"productClass",type:"PRODUCT_CLASS_SELECT_BOX",name:"상품 선택",label:null,rules:null,value:null}],settingSEOSheet:[{id:"name",type:"TEXT_FIELD",width:200,name:"입금자명",label:"ex) 홍길동",rules:"required|min:1|max:30",value:"",cautions:["결제는 계좌이체를 통해 진행됩니다. 빠른 입금확인을 위해 입금자명을 정확히 입력해주세요."]},{id:"email",type:"TEXT_FIELD",width:400,name:"이메일",label:"ex) jett.analysis@gmail.com",rules:"required|email|min:4|max:256",value:"",cautions:["결제완료 안내 및 결과 보고서를 전달 받을 이메일을 입력해주세요."]},{id:"url",type:"TEXT_FIELD",width:400,name:"사이트 URL",label:"ex) https://jettanalysis.com",rules:"required|url|min:4|max:256",value:"",cautions:["검색엔진에 노출되고자 하는 페이지 링크를 입력해주세요."]},{id:"siteType",type:"SELECT",width:300,name:"사이트 종류",label:"ex) 워드프레스",rules:"required",value:"",items:["워드프레스","WIX","그누보드/제로보드","PHP 기반","ASP 기반","Node.js 기반","Java 기반","기타 프레임워크 또는 모름"],cautions:["사이트를 만들 때 사용한 툴 또는 프레임워크 종류를 선택해주세요."]},{id:"siteCapacity",type:"SELECT",width:300,name:"사이트 규모",label:"ex) 페이지 50개 이하",rules:"required",value:"",items:["페이지 50개 이하","페이지 50개 초과","페이지 100개 초과","모름"],cautions:["사이트의 규모에 따라 작업시간이 달라질 수 있습니다."]}]}},methods:{createAndSelectKeyword:function(e){var t=this;this.backlinkSheet.find((function(s){return"keywords"===s.id})).value.length>5&&this.$nextTick((function(){t.backlinkSheet.find((function(s){return"keywords"===s.id})).value.pop()}))},removeKeyword:function(e){var t=this.backlinkSheet.find((function(s){return"keywords"===s.id})).value.indexOf(e);console.log(t),t>-1&&this.backlinkSheet.find((function(s){return"keywords"===s.id})).value.splice(t,1)},submit:function(){console.log("submit!!")}},computed:{sheetName:function(){switch(this.sheetType){case"SETTING_SEO":return"사이트 SEO 최적화 설정";case"BACKLINK":return"고품질 기사형 백링크";default:return"알수 없음"}},selectedSheet:function(){switch(this.sheetType){case"SETTING_SEO":return this.settingSEOSheet;case"BACKLINK":return this.backlinkSheet;default:return[]}}}},o=(n(534),n(36)),d=n(48),c=n.n(d),m=n(385),h=n(514),f=n(587),v=n(696),x=n(568),w=n(541),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"order-sheet-container"},[n("div",{staticClass:"sheet-inner-container"},[n("div",{staticClass:"sheet-title"},[e._v(e._s(e.sheetName))]),n("p",{staticClass:"sheet-desc"},[e._v("하단의 주문서 작성 후 제출하기를 눌러주세요.")]),n("div",{staticClass:"sheet-form"},[n("validation-observer",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(t){var l=t.handleSubmit,r=t.reset;return[n("form",{on:{submit:function(t){return t.preventDefault(),l(e.submit)},reset:function(e){return e.preventDefault(),r.apply(null,arguments)}}},[n("v-col",[e._l(e.selectedSheet,(function(t){return[n("div",{staticClass:"field"},[n("p",{staticClass:"field-name"},[e._v(e._s(t.name))]),n("validation-provider",{attrs:{name:t.name,rules:t.rules},scopedSlots:e._u([{key:"default",fn:function(l){var r=l.errors;return["TEXT_FIELD"===t.type?n("v-text-field",{style:{width:t.width+"px"},attrs:{"error-messages":r,label:t.label,"single-line":""},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"field.value"}}):e._e(),"SELECT"===t.type?n("v-select",{style:{width:t.width+"px"},attrs:{items:t.items,"error-messages":r,label:t.label,"single-line":""},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"field.value"}}):e._e(),"COMBOBOX"===t.type?n("v-combobox",{staticClass:"custom-keyword-combobox",style:{width:t.width+"px"},attrs:{"small-chips":"",multiple:"","hide-selected":"",items:[],label:t.label,hint:t.hint,"persistent-hint":"","single-line":"","error-messages":r},on:{input:function(t){return e.createAndSelectKeyword(t)}},scopedSlots:e._u([{key:"selection",fn:function(t){var l=t.attrs,r=t.item,select=t.select,o=t.selected;return[n("v-chip",e._b({attrs:{small:"","input-value":o},on:{click:select}},"v-chip",l,!1),[n("strong",[e._v(e._s(r))]),n("v-btn",{staticClass:"cancel-btn",attrs:{"x-small":"",icon:"",color:"grey darken-4"},on:{click:function(t){return t.stopPropagation(),e.removeKeyword(r)}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),n("path",{attrs:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}})])])],1)]}}],null,!0),model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"field.value"}}):e._e()]}}],null,!0)}),n("ul",{staticClass:"cautions"},e._l(t.cautions,(function(t){return n("li",[e._v(e._s(t))])})),0)],1)]}))],2),n("v-col",{staticClass:"ordering"},[n("v-btn",{staticClass:"white--text",attrs:{loading:e.loading,color:"#00afff",type:"submit","x-large":"",rounded:"",width:"200"}},[e._v("제출하기")])],1)],1)]}}])})],1)])])}),[],!1,null,"24e2164f",null);t.default=component.exports;c()(component,{VBtn:m.a,VChip:h.a,VCol:f.a,VCombobox:v.a,VSelect:x.a,VTextField:w.a})}}]);