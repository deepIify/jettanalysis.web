(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{595:function(t,c,e){"use strict";(function(t){var n=e(10),r=(e(56),e(25),e(78),e(5),e(47),e(598)),d=e(599),o=e(600),l=e(601),h=e(156),v=t.env.NUXT_APP_BASE_URL||"https://jettanalysis.com",m=t.env.NUXT_APP_FRONTEND_PORT||"",f="".concat(v).concat(m);c.a={name:"Slug",components:{Author:r.default,TableOfContent:d.default,Comment:o.default,StickyShareBox:l.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function c(){var e,n,r,article;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return e=t.$content,n=t.params,r=t.error,article=null,c.prev=2,c.next=5,e("articles","wiki",n.slug).fetch();case 5:article=c.sent,c.next=11;break;case 8:c.prev=8,c.t0=c.catch(2),r(c.t0);case 11:return c.abrupt("return",{article:article});case 12:case"end":return c.stop()}}),c,null,[[2,8]])})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ko",{year:"numeric",month:"long",day:"numeric"})}},head:function(c){var e=c.$seoMeta;return{title:this.article.title,meta:[{hid:"keyword",name:"keyword",content:this.article.tags.join(",")}].concat(e({title:"".concat(this.article.title," | ").concat(t.env.NUXT_APP_SITE_NAME),url:"".concat(f,"/wiki/").concat(this.article.id),description:this.article.description,image:Object(h.e)(this.article.img)},!1)),link:[{rel:"canonical",href:"".concat(f).concat(this.$route.path)}]}},computed:{topFontColor:function(){return this.article&&this.article.color?this.article.color:"#ffffff"},topBackgroundColor:function(){return this.article&&this.article.backgroundColor?this.article.backgroundColor:"#00afff"},post:function(){return{id:this.article.slug,title:this.article.title,description:this.article.description,img:this.article.img}}}}}).call(this,e(106))},622:function(t,c,e){var content=e(697);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("587f4b81",content,!0,{sourceMap:!1})},623:function(t,c,e){var content=e(699);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("3035292b",content,!0,{sourceMap:!1})},696:function(t,c,e){"use strict";e(622)},697:function(t,c,e){var n=e(17)(!1);n.push([t.i,'table tr th[data-v-14d71c84]{padding:0;border:1px solid #ccc;text-align:center;font-weight:700}table tr td[data-v-14d71c84]{border:1px solid #ccc;padding:5px}table tr td.rightright[data-v-14d71c84]{background:#eee}table tr td h4[data-v-14d71c84]{margin:0;padding:0;font-weight:400}table[data-v-14d71c84]{margin-bottom:2em;width:100%}th[data-v-14d71c84]{border-bottom:2px solid #ccc;font-weight:700;text-align:left}td[data-v-14d71c84]{border-bottom:1px solid #ddd}caption[data-v-14d71c84],td[data-v-14d71c84],th[data-v-14d71c84]{padding:4px 10px 4px 0}caption[data-v-14d71c84]{background:#f1f1f1;padding:10px 0;margin-bottom:1em}td[data-v-14d71c84],th[data-v-14d71c84],tr[data-v-14d71c84]{vertical-align:middle}table .last[data-v-14d71c84]{padding-right:0}article .nuxt-content ul li>p[data-v-14d71c84]{margin:0}article .nuxt-content ul>li[data-v-14d71c84]{margin-bottom:15px}.css-66hu0x[data-v-14d71c84]{overflow:hidden;position:relative;color:#fff;text-align:center;transition:all .2s ease-in-out 0s;background-color:#407adf}.css-1pbu2z8[data-v-14d71c84]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.css-chky3p[data-v-14d71c84]{padding:45px 0}.css-1r8cg95[data-v-14d71c84]{font-size:28px;margin-bottom:25px}.css-5vc5y3[data-v-14d71c84]{display:flex;align-items:center;justify-content:center;margin-bottom:0!important}.css-5vc5y3 p[data-v-14d71c84]{margin-bottom:0;line-height:1.2;font-size:14px}.css-e00ba0[data-v-14d71c84]{position:relative;margin:-10px auto 0;max-width:600px}.css-e00ba0 .article-img[data-v-14d71c84]{border:1px solid transparent;border-radius:10px;position:relative;width:100%;height:auto}.css-e00ba0[data-v-14d71c84]:before{content:"";position:absolute;left:-100vw;right:-100vw;bottom:0;height:50%;background-color:#fff}.css-2lmhoi[data-v-14d71c84]{padding:22.5px 0!important}.css-1ricvn[data-v-14d71c84]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.tags[data-v-14d71c84]{margin:0 auto;padding-left:10px;padding-right:10px}.tags ul[data-v-14d71c84]{padding:0;list-style:none}.tags ul li[data-v-14d71c84]{display:inline;cursor:pointer;background:#eee;border:1px solid #ddd;border-radius:3px;margin-right:5px;padding:0 5px}@media(min-width:576px){.css-1pbu2z8[data-v-14d71c84],.css-1ricvn[data-v-14d71c84],.tags[data-v-14d71c84]{padding-right:10px;padding-left:10px}}@media(min-width:540px){.css-1pbu2z8[data-v-14d71c84],.css-1ricvn[data-v-14d71c84],.tags[data-v-14d71c84]{max-width:540px}}@media(min-width:768px){.css-1pbu2z8[data-v-14d71c84],.css-1ricvn[data-v-14d71c84],.tags[data-v-14d71c84]{max-width:720px}.css-chky3p[data-v-14d71c84]{padding:55px 0}.css-1r8cg95[data-v-14d71c84]{font-size:38px}.css-e00ba0[data-v-14d71c84]{margin-top:-15px}.css-2lmhoi[data-v-14d71c84]{padding:27.5px 0!important}}@media(min-width:992px){.css-1pbu2z8[data-v-14d71c84],.css-1ricvn[data-v-14d71c84],.tags[data-v-14d71c84]{max-width:730px}.css-chky3p[data-v-14d71c84]{padding:65px 0}.css-e00ba0[data-v-14d71c84]{margin-top:-20px}.css-2lmhoi[data-v-14d71c84]{padding:32.5px 0!important}}',""]),t.exports=n},698:function(t,c,e){"use strict";e(623)},699:function(t,c,e){var n=e(17),r=e(620),d=e(621),o=n(!1),l=r(d);o.push([t.i,".nuxt-content h2{font-weight:700;font-size:28px}.nuxt-content h3{font-weight:700;font-size:22px}.nuxt-content p{margin-bottom:20px}.icon.icon-link{background-image:url("+l+");display:inline-block;width:20px;height:20px;background-size:20px 20px}.icon.icon-link.small{width:14px;height:14px;background-size:14px 17px}",""]),t.exports=o},739:function(t,c,e){"use strict";e.r(c);var n=e(595).a,r=(e(696),e(698),e(45)),d=e(64),o=e.n(d),l=e(311),h=e(450),v=e(455),m=e(451),component=Object(r.a)(n,(function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{staticClass:"article-container"},[e("navigation-bar"),e("sticky-share-box",{attrs:{post:t.post}}),e("v-main",[e("article",[e("header",{staticClass:"css-66hu0x",style:{color:t.topFontColor,backgroundColor:t.topBackgroundColor}},[e("div",{staticClass:"css-1pbu2z8"},[e("div",{staticClass:"css-chky3p"},[e("h1",{staticClass:"css-1r8cg95"},[t._v(t._s(t.article.title))]),e("div",{staticClass:"css-5vc5y3"},[e("time",{staticClass:"updated",attrs:{datetime:"article.updatedAt"}}),e("p",[t._v(t._s(t.article.author.name)+" · "+t._s(t.formatDate(t.article.updatedAt))+" 업데이트")])])]),e("figure",{staticClass:"css-e00ba0"},[e("v-img",{staticClass:"article-img",attrs:{"lazy-src":"/images/placeholder.png",src:t.article.img,alt:t.article.title},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)])]),e("div",{staticClass:"css-2lmhoi"},[e("div",{staticClass:"css-1ricvn"},[e("table-of-content",{attrs:{toc:t.article.toc}}),e("div",{staticClass:"css-107jwiq",attrs:{id:"content"}},[e("nuxt-content",{attrs:{document:t.article}})],1)],1)]),e("div",{staticClass:"tags"},[e("ul",t._l(t.article.tags,(function(c){return e("li",[e("span",{staticClass:"icon icon-link small"}),t._v(t._s(c))])})),0)])]),e("comment",{attrs:{post:t.post}})],1),e("page-footer")],1)}),[],!1,null,"14d71c84",null);c.default=component.exports;o()(component,{NavigationBar:e(154).default,PageFooter:e(155).default}),o()(component,{VImg:l.a,VMain:h.a,VProgressCircular:v.a,VRow:m.a})}}]);