(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{462:function(t,d,e){var content=e(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(28).default)("3d57f0f3",content,!0,{sourceMap:!1})},512:function(t,d,e){"use strict";e(462)},513:function(t,d,e){var c=e(27)(!1);c.push([t.i,".product-class-container[data-v-43dd8d04]{margin:2rem 0}.product-class-inner-container[data-v-43dd8d04]{display:flex;flex-direction:column;justify-content:center}.product-class-wrap[data-v-43dd8d04]{text-align:center;cursor:pointer}.product-class-wrap.checked[data-v-43dd8d04]{border:3px solid #00afff;padding:18.5px}.product-class-wrap[data-v-43dd8d04]{border:1.5px solid #eee;padding:20px;margin:3px 0}.product-selection[data-v-43dd8d04]{display:flex;justify-content:center}.product-selection .product-check-icon>svg[data-v-43dd8d04]{margin-bottom:-8px;margin-right:4px}.product-class[data-v-43dd8d04]{margin-bottom:0;font-size:18px;font-weight:800;color:#00afff}.product-title[data-v-43dd8d04]{font-size:15px;font-weight:700;margin-bottom:0}.product-details[data-v-43dd8d04]{display:none;list-style:none;padding-left:0;color:#666;font-size:14px}.before-sale[data-v-43dd8d04]{color:#aaa;vertical-align:super;font-size:14px;text-decoration:line-through}.price[data-v-43dd8d04]{color:#00afff;font-size:27px}.price[data-v-43dd8d04],.unit[data-v-43dd8d04]{font-weight:700}.unit[data-v-43dd8d04]{font-size:15px}@media(min-width:540px){.product-info[data-v-43dd8d04]{display:flex;justify-content:space-evenly}.product-title[data-v-43dd8d04]{line-height:37px}}@media(min-width:768px){.product-class-inner-container[data-v-43dd8d04]{flex-direction:row}.product-class-wrap[data-v-43dd8d04]{margin:0 5px}.product-selection[data-v-43dd8d04]{flex-direction:column}.product-selection .product-check-icon>svg[data-v-43dd8d04]{margin:0}.product-class[data-v-43dd8d04]{margin-bottom:16px}.product-info[data-v-43dd8d04]{display:flex;flex-direction:column;justify-content:space-evenly}.product-details[data-v-43dd8d04]{display:block}.price-wrap[data-v-43dd8d04]{margin-top:1rem}}",""]),t.exports=c},532:function(t,d,e){"use strict";e.r(d);e(14),e(29),e(50),e(7),e(68);var c={name:"ProductClass",props:{value:{type:String,required:!0,default:function(){return"DELUXE"}}},data:function(){return{productClasses:[{class:"STANDARD",title:"기사/블로그형 백링크 20개",details:["최대 5개 키워드","3단계 피라미드 구조","고품질 기사형 백링크 20개","1,2 티어 420개","보고서 제공"],beforeSale:12e4,price:6e4,checked:!1},{class:"DELUXE",title:"기사/블로그형 백링크 40개",details:["최대 5개 키워드","3단계 피라미드 구조","고품질 기사형 백링크 40개","1,2 티어 840개","보고서 제공"],beforeSale:2e5,price:12e4,checked:!0},{class:"PRIMIUM",title:"기사/블로그형 백링크 60개",details:["최대 5개 키워드","3단계 피라미드 구조","고품질 기사형 백링크 60개","1,2 티어 1,260개","보고서 제공"],beforeSale:28e4,price:14e4,checked:!1}]}},methods:{selectClass:function(t){this.productClasses.forEach((function(d){return d.checked=d.class===t})),this.$emit("input",t)}},filters:{withComma:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},o=(e(512),e(38)),component=Object(o.a)(c,(function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("div",{staticClass:"product-class-container"},[e("div",{staticClass:"product-class-inner-container"},t._l(t.productClasses,(function(p){return e("div",{staticClass:"product-class-wrap",class:{checked:p.checked},on:{click:function(d){return d.stopPropagation(),t.selectClass(p.class)}}},[e("div",{staticClass:"product-selection"},[e("div",{staticClass:"product-check-icon"},[p.checked?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"#00afff",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),e("path",{attrs:{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}})]):e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"#ccc",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),e("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}})])]),e("p",{staticClass:"product-class"},[t._v(t._s(p.class))])]),e("div",{staticClass:"product-info"},[e("p",{staticClass:"product-title"},[t._v(t._s(p.title))]),e("ul",{staticClass:"product-details"},t._l(p.details,(function(d){return e("li",[t._v(t._s(d))])})),0),e("div",{staticClass:"price-wrap"},[e("span",{staticClass:"before-sale"},[t._v(t._s(t._f("withComma")(p.beforeSale)))]),e("span",{staticClass:"price"},[t._v(t._s(t._f("withComma")(p.price)))]),e("span",{staticClass:"unit"},[t._v("원")])])])])})),0)])}),[],!1,null,"43dd8d04",null);d.default=component.exports}}]);