(window.webpackJsonp=window.webpackJsonp||[]).push([[39,29],{344:function(t,e,n){var content=n(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("452c100a",content,!0,{sourceMap:!1})},379:function(t,e,n){var content=n(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("bd30a354",content,!0,{sourceMap:!1})},380:function(t,e,n){var content=n(423);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("5eab6db7",content,!0,{sourceMap:!1})},389:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,required:!0},desc:{type:String,required:!0},buttonOnly:{type:Boolean,required:!0},inputOption:{type:Object,required:!1},tooltipText:{type:String,required:!1},buttonText:{type:String,required:!0}},data:function(){return{activeTooltip:!1,activeInput:!1,url:""}},methods:{inputUrl:function(t){this.activeInput||(this.activeInput=!this.activeInput),this.url=t.target.value},onInvalid:function(t){t.target.setCustomValidity("유효한 URL 형식이 아닙니다.")},onSubmit:function(t){t.preventDefault();/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(this.url)&&(this.activeInput=!0,this.$emit("onButtonClick",this.url))}}},r=(n(400),n(74)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"css-za4qqw"},[n("div",{staticClass:"css-17ia555"},[n("h1",{staticClass:"css-1bk7ox4"},[t._v(t._s(t.title))]),n("div",{staticClass:"css-70qvj9"},[t._m(0),n("div",{staticClass:"css-1c7u7ph"},[n("p",[t._v(t._s(t.desc))])])]),n("div",{staticClass:"css-2thhi1"},[n("div",{staticClass:"css-79elbk"},[t.buttonOnly?n("div",{staticClass:"aweber-form-body"},[n("button",{staticClass:"caller-btn without-input e1fw58rm0",attrs:{type:"button",role:"button"}},[t._v(t._s(t.buttonText))])]):n("div",{staticClass:"caller"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("div",{staticClass:"aweber-form-body"},[n("ul",{staticClass:"css-1vd0gw5"},[n("li",{staticClass:"aweber-form-field form-group css-1pkbgp8"},[n("div",{staticClass:"aweber-input-container aweber-input-container-email",attrs:{id:"aweber-field-email"}},[n("input",{class:{"css-1lj1a3e":!t.activeInput,"css-q5hbwx":t.activeInput},attrs:{id:"form-item-email",name:t.inputOption.name,type:t.inputOption.type,placeholder:t.inputOption.placeholder,required:"",pattern:"[Hh][Tt][Tt][Pp][Ss]?://(?:(?:[a-zA-Z¡-￿0-9]+-?)*[a-zA-Z¡-￿0-9]+)(?:.(?:[a-zA-Z¡-￿0-9]+-?)*[a-zA-Z¡-￿0-9]+)*(?:.(?:[a-zA-Z¡-￿]{2,}))(?::d{2,5})?(?:/[^s]*)?"},domProps:{value:t.url},on:{focus:function(e){t.activeTooltip=!0},blur:function(e){t.activeTooltip=!1},input:t.inputUrl,invalid:t.onInvalid}})])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.activeTooltip,expression:"activeTooltip"}],staticClass:"tooltip fade bs-tooltip-top show css-17qfe8v",attrs:{role:"tooltip","x-placement":"top"}},[n("div",{staticClass:"arrow css-ht3ahn"}),n("div",{staticClass:"tooltip-inner css-rj3kn9"},[t._v(t._s(t.tooltipText))])])])]),n("div",{staticClass:"aweber-form-footer left"},[n("button",{staticClass:"caller-btn with-input e1fw58rm0",attrs:{disabled:t.inputOption.isProcessing,type:"submit",role:"button"}},[t.inputOption.isProcessing?[n("div",{staticClass:"loader"},[t._v("Loading...")])]:[t._v(t._s(t.buttonText))]],2)])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"css-ium0zo"},[e("picture",[e("source",{attrs:{srcset:"https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400-300x300.webp 300w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400-150x150.webp 150w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400.webp 414w",sizes:"(max-width: 300px) 100vw, 300px",type:"image/webp"}}),e("img",{staticClass:"css-1a2v9hb",attrs:{src:"https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400.jpg",srcset:"https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400-300x300.jpg 300w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400-150x150.jpg 150w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400.jpg 414w",sizes:"(max-width: 300px) 100vw, 300px",alt:"meeB57W6_400x400",loading:"lazy"}})])])}],!1,null,"3e8395dc",null);e.default=component.exports},400:function(t,e,n){"use strict";n(344)},401:function(t,e,n){var o=n(83)(!1);o.push([t.i,'.css-za4qqw[data-v-3e8395dc]{background-image:linear-gradient(180deg,#fff 10%,#eef0f7);padding:60px 0 70px}.css-17ia555[data-v-3e8395dc]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto;display:flex;flex-direction:column;align-items:center;text-align:center}.css-1bk7ox4[data-v-3e8395dc]{margin-bottom:40px;font-size:32px}.css-70qvj9[data-v-3e8395dc]{display:flex;align-items:center}.css-ium0zo[data-v-3e8395dc]{width:75px;min-width:75px;height:75px;border-radius:50%;overflow:hidden;border:2px solid #d6d6d6;margin-bottom:0;margin-right:20px}.css-1a2v9hb[data-v-3e8395dc]{max-width:100%;height:auto}.css-1c7u7ph[data-v-3e8395dc]{text-align:left;line-height:1.6;max-width:330px}.css-1c7u7ph strong[data-v-3e8395dc]{font-weight:600}.css-1c7u7ph[data-v-3e8395dc] :last-child{margin-bottom:0!important}.css-2thhi1[data-v-3e8395dc]{width:100%;margin:35px 0 0;max-width:460px}.css-1vd0gw5[data-v-3e8395dc],.css-79elbk[data-v-3e8395dc]{position:relative}.css-1vd0gw5[data-v-3e8395dc]{margin-bottom:0;padding-left:0;list-style:none}.css-1pkbgp8[data-v-3e8395dc]{margin-bottom:0;padding:0}.css-1lj1a3e[data-v-3e8395dc]{display:block;width:100%;height:3.7875rem;padding:1.05rem 1.2rem;font-family:Inter;font-weight:400;line-height:1.4;color:#000;background-color:#fff;background-clip:padding-box;border-radius:6px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);transition:background-color .2s ease-in-out,border-color .2s ease-in-out,box-shadow .2s ease-in-out;font-size:11.25px;font-size:1.125rem;border:1px solid #ccd3e8;font-family:"Inter"}.css-1lj1a3e[data-v-3e8395dc]::-ms-expand{background-color:transparent;border:0}.css-1lj1a3e[data-v-3e8395dc]:focus{color:#000;background-color:#fff;border-color:#00afff;outline:0;box-shadow:none}.css-1lj1a3e[data-v-3e8395dc]::-moz-placeholder{color:#a5a5a5;opacity:1}.css-1lj1a3e[data-v-3e8395dc]:-ms-input-placeholder{color:#a5a5a5;opacity:1}.css-1lj1a3e[data-v-3e8395dc]::placeholder{color:#a5a5a5;opacity:1}.css-1lj1a3e[data-v-3e8395dc]:disabled,.css-1lj1a3e[readonly][data-v-3e8395dc]{background-color:#e6e6e6;opacity:1}.css-q5hbwx[data-v-3e8395dc]{display:block;width:100%;height:3.7875rem;padding:1.05rem 1.2rem;font-weight:400;line-height:1.4;background-clip:padding-box;border:1px solid #00afff;border-radius:6px;box-shadow:inset 0 1px 1px rgba(0,0,0,.08);transition:background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s,box-shadow .2s ease-in-out 0s;font-size:1.125rem;font-family:Inter;position:relative}.css-q5hbwx[data-v-3e8395dc],.css-q5hbwx[data-v-3e8395dc]:focus{color:#000;background-color:#fff}.css-q5hbwx[data-v-3e8395dc]:focus{border-color:#00afff;outline:0;box-shadow:none}.caller-btn[data-v-3e8395dc]{margin:0;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;padding:1.05rem 1.2rem;font-size:1.125rem;line-height:1.4;transition:all .2s ease-in-out;display:inline-flex;align-items:center;justify-content:center;font-style:normal;white-space:normal;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;cursor:pointer;text-transform:none;font-weight:600;min-height:3.7875rem;outline:none;border-radius:6px;top:0;right:0;min-width:170px;color:#fff;background-color:#00afff;border:1px solid #00afff}.caller-btn[data-v-3e8395dc]:active,.caller-btn[data-v-3e8395dc]:hover{background-color:#07f;border-color:#07f}.caller-btn:disabled[disabled][data-v-3e8395dc]{cursor:not-allowed;background-color:#00afff;border-color:#00afff}.loader[data-v-3e8395dc],.loader[data-v-3e8395dc]:after{border-radius:50%;width:25px;height:25px}.loader[data-v-3e8395dc]{font-size:10px;position:relative;text-indent:-9999em;border:4px solid hsla(0,0%,100%,.2);border-left-color:#fff;transform:translateZ(0);-webkit-animation:load8-data-v-3e8395dc 1.1s linear infinite;animation:load8-data-v-3e8395dc 1.1s linear infinite}@-webkit-keyframes load8-data-v-3e8395dc{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes load8-data-v-3e8395dc{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.css-17qfe8v[data-v-3e8395dc]{top:calc(-100% + -.4rem);z-index:1}.css-17qfe8v[data-v-3e8395dc],.css-ht3ahn[data-v-3e8395dc]{position:absolute;left:0;right:0;margin:0 auto}.css-ht3ahn[data-v-3e8395dc]{display:block;bottom:-.4rem;width:0;height:0;border-left:.4rem solid transparent;border-right:.4rem solid transparent;border-top:.4rem solid #000}.css-rj3kn9[data-v-3e8395dc]{max-width:200px;margin:0 auto;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:6px;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif;font-style:normal;font-weight:400;line-height:1.8;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word}@media(min-width:576px){.css-17ia555[data-v-3e8395dc]{padding-right:10px;padding-left:10px}}@media(min-width:540px){.css-17ia555[data-v-3e8395dc]{max-width:540px}}@media(max-width:767.98px){.css-za4qqw[data-v-3e8395dc]{border-bottom:1 solid #ccd3e8}.caller-btn[data-v-3e8395dc]{width:100%;margin-top:10px}}@media(min-width:768px){.css-17ia555[data-v-3e8395dc]{max-width:720px}.css-za4qqw[data-v-3e8395dc]{padding:90px 0 135px}.css-1bk7ox4[data-v-3e8395dc]{font-size:48px}.css-ium0zo[data-v-3e8395dc]{margin-right:30px}.css-2thhi1[data-v-3e8395dc]{margin:45px 0 0}.caller-btn.with-input[data-v-3e8395dc]{position:absolute}.caller-btn.without-input[data-v-3e8395dc]{width:100%}}@media(min-width:992px){.css-17ia555[data-v-3e8395dc]{max-width:960px}}@media(min-width:1200px){.css-17ia555[data-v-3e8395dc]{max-width:1140px}}',""]),t.exports=o},420:function(t,e,n){"use strict";n(379)},421:function(t,e,n){var o=n(83)(!1);o.push([t.i,'a[data-v-aa0c72de]{text-decoration:none;transition:all .2s ease-in-out 0s}.article-img[data-v-aa0c72de]{width:100%;margin-bottom:2rem}.css-u5p2ag[data-v-aa0c72de]{padding:25px 0 35px}.css-79elbk[data-v-aa0c72de],.css-u5p2ag[data-v-aa0c72de]{position:relative}.css-1izrdyl[data-v-aa0c72de]{font-size:28px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;cursor:pointer;margin-bottom:25px;color:#000;transition:color .5s}.css-1izrdyl[data-v-aa0c72de]:focus,.css-1izrdyl[data-v-aa0c72de]:hover{color:#bb4a03}.css-1a2v9hb[data-v-aa0c72de]{max-width:100%;height:auto}.css-1d7x0cs[data-v-aa0c72de]{display:flex;align-items:center;justify-content:flex-start;margin-bottom:30px}.css-1d7x0cs p[data-v-aa0c72de]{margin-bottom:0;line-height:1.2;font-size:14px}.css-qyxjlf[data-v-aa0c72de]{margin-bottom:0;width:35px;height:35px;border-radius:50%;overflow:hidden;margin-right:15px}.css-12m1dn8[data-v-aa0c72de]{font-family:"Georgia",serif}.css-12m1dn8 p[data-v-aa0c72de]{margin-bottom:1.2rem}.css-12m1dn8 figure[data-v-aa0c72de]{margin-bottom:1.3rem}.css-12m1dn8 img[data-v-aa0c72de]{width:100%}.css-12m1dn8[data-v-aa0c72de] :last-child{margin-bottom:0!important}.css-12m1dn8 p>img[data-v-aa0c72de]{width:auto}.css-12m1dn8 .backlinko-image img[data-v-aa0c72de]{display:inline-block;width:100%}.css-12m1dn8 .backlinko-image.backlinko-has-border img[data-v-aa0c72de]{border:4px solid #ccc}.css-12m1dn8 .backlinko-image.img-circle img[data-v-aa0c72de]{border-radius:50%!important}.css-12m1dn8 .alignnone[data-v-aa0c72de]{margin-left:0;margin-right:0;max-width:100%;height:auto}.css-12m1dn8 .aligncenter[data-v-aa0c72de]{display:block;margin:1rem auto;height:auto}.css-12m1dn8 .alignleft[data-v-aa0c72de],.css-12m1dn8 .alignright[data-v-aa0c72de]{margin-bottom:1rem;height:auto}.css-12m1dn8 .backlinko-image__centered-image img[data-v-aa0c72de]{margin:0 auto!important}.css-12m1dn8 .backlinko-image__img-explicit-no-border:not(.backlinko-has-border) img[data-v-aa0c72de]{border:0!important;border-radius:0!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-xs-up img[data-v-aa0c72de]{margin-top:-1rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-xs-up img[data-v-aa0c72de]{margin-top:-1.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-xs-up img[data-v-aa0c72de]{margin-top:-2rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-xs-up img[data-v-aa0c72de]{margin-top:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-xs-up img[data-v-aa0c72de]{margin-top:-2.75rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-3-xs-up img[data-v-aa0c72de]{margin-top:-3rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-xs-up img[data-v-aa0c72de]{margin-top:-4.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-0 img[data-v-aa0c72de]{margin-bottom:0!important}.css-12m1dn8 .backlinko-image__img-border-radius-4 img[data-v-aa0c72de],.css-12m1dn8 .visual>img[data-v-aa0c72de]{border:0!important;border-radius:.25rem!important}.css-12m1dn8 .backlinko-image__img-hub-rounded img[data-v-aa0c72de],.css-12m1dn8 .backlinko-image__rounded img[data-v-aa0c72de]{border:0!important;border-radius:.5rem!important}.css-12m1dn8 .backlinko-image__screenshot img[data-v-aa0c72de]{outline:none!important;margin:0 auto!important;border:4px solid #ccc;border-radius:0!important}.css-12m1dn8 .backlinko-image__visual-chart img[data-v-aa0c72de]{outline:none!important;margin:0 auto!important;border:0!important;border-radius:.3rem!important}.css-12m1dn8 .backlinko-image__bg-white img[data-v-aa0c72de]{background-color:#fff!important}.css-12m1dn8 .backlinko-image__bg-light-gray-lighter img[data-v-aa0c72de]{background-color:#f8f8f8!important}.css-12m1dn8 .backlinko-image__bg-light-gray-darker img[data-v-aa0c72de]{background-color:#f4f4f4!important}.css-3872h1[data-v-aa0c72de]{align-items:center;margin-top:1.5rem}.css-toegfy[data-v-aa0c72de]{font-size:14px;display:flex;line-height:1;align-items:center;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";margin-bottom:0!important}.css-toegfy span[data-v-aa0c72de]{color:#00afff;font-size:36px;font-weight:700;padding-right:10px}.css-13xd08w[data-v-aa0c72de]{display:inline-flex;align-items:center;justify-content:center;font-style:normal;white-space:normal;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;cursor:pointer;text-transform:none;font-weight:600;min-height:3.7875rem;color:#fff;background-color:#00afff;border-color:#00afff;width:100%;border-radius:6px}.css-13xd08w[data-v-aa0c72de]:active,.css-13xd08w[data-v-aa0c72de]:hover,.css-13xd08w[data-v-aa0c72de]:link,.css-13xd08w[data-v-aa0c72de]:visited{color:#fff;-webkit-text-decoration:none;text-decoration:none}.css-13xd08w[data-v-aa0c72de]:hover{background:#07f;border-color:#07f}@media(min-width:540px){.css-12m1dn8 .alignright[data-v-aa0c72de]{float:right;margin-left:1rem}.css-12m1dn8 .alignleft[data-v-aa0c72de]{float:left;margin-left:1rem}.css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-sm-up img[data-v-aa0c72de]{margin-top:-1.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-sm-up img[data-v-aa0c72de]{margin-top:-1rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-sm-up img[data-v-aa0c72de]{margin-top:-2rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-sm-up img[data-v-aa0c72de]{margin-top:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-sm-up img[data-v-aa0c72de]{margin-top:-2.75rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-3-sm-up img[data-v-aa0c72de]{margin-top:-3rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-sm-up img[data-v-aa0c72de]{margin-top:-4.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-1-sm-up img[data-v-aa0c72de]{margin-bottom:-1rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-sm-up img[data-v-aa0c72de]{margin-bottom:-2rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-point-5-sm-up img[data-v-aa0c72de]{margin-bottom:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-3-sm-up img[data-v-aa0c72de]{margin-bottom:-3rem!important}}@media(min-width:768px){.css-u5p2ag[data-v-aa0c72de]{padding:35px 0 55px}.css-1izrdyl[data-v-aa0c72de]{font-size:38px}.css-toegfy[data-v-aa0c72de]{margin-right:30px}.css-12m1dn8 .backlinko-image.alignleft-md-up[data-v-aa0c72de]{float:left;margin-left:1rem}.css-12m1dn8 .backlinko-image.alignright-md-up[data-v-aa0c72de]{float:right;margin-left:1rem}.css-12m1dn8 .backlinko-image__img-mt-minus-1-md-up img[data-v-aa0c72de]{margin-top:-1rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-md-up img[data-v-aa0c72de]{margin-top:-1.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-md-up img[data-v-aa0c72de]{margin-top:-2rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-md-up img[data-v-aa0c72de]{margin-top:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-md-up img[data-v-aa0c72de]{margin-top:-2.75rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-3-md-up img[data-v-aa0c72de]{margin-top:-3rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-md-up img[data-v-aa0c72de]{margin-top:-4.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-1-md-up img[data-v-aa0c72de]{margin-bottom:-1rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-md-up img[data-v-aa0c72de]{margin-bottom:-2rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-point-5-md-up img[data-v-aa0c72de]{margin-bottom:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-3-md-up img[data-v-aa0c72de]{margin-bottom:-3rem!important}.css-3872h1[data-v-aa0c72de]{display:flex;margin-top:2rem}}@media(min-width:992px){.css-u5p2ag[data-v-aa0c72de]{padding:50px 0}.css-12m1dn8 .backlinko-image__img-mt-minus-1-lg-up img[data-v-aa0c72de]{margin-top:-1rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-lg-up img[data-v-aa0c72de]{margin-top:-1.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-lg-up img[data-v-aa0c72de]{margin-top:-2rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-lg-up img[data-v-aa0c72de]{margin-top:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-lg-up img[data-v-aa0c72de]{margin-top:-2.75rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-3-lg-up img[data-v-aa0c72de]{margin-top:-3rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-lg-up img[data-v-aa0c72de]{margin-top:-4.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-1-lg-up img[data-v-aa0c72de]{margin-bottom:-1rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-lg-up img[data-v-aa0c72de]{margin-bottom:-2rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-point-5-lg-up img[data-v-aa0c72de]{margin-bottom:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-3-lg-up img[data-v-aa0c72de]{margin-bottom:-3rem!important}}',""]),t.exports=o},422:function(t,e,n){"use strict";n(380)},423:function(t,e,n){var o=n(83)(!1);o.push([t.i,".css-15j7bd7 .post+.post>div{border-top:1px solid #e6e6e6}.css-15j7bd7 article:last-of-type>div:last-of-type{border-bottom:1px solid #e6e6e6}@media(min-width:576px){.css-15j7bd7{padding-right:10px;padding-left:10px}}@media(min-width:540px){.css-15j7bd7{max-width:540px}}@media(min-width:768px){.css-15j7bd7{padding-bottom:50px;max-width:720px}}@media(min-width:992px){.css-15j7bd7{padding-top:20px;padding-bottom:90px;max-width:850px}.css-15j7bd7 article{padding:0 60px;margin-top:20px}.css-15j7bd7 article:first-child{margin-top:0}}",""]),t.exports=o},452:function(t,e,n){"use strict";n.r(e);n(39);var o={name:"ArticlePreview",props:{type:{type:String,required:!0},article:{type:Object,required:!0}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ko",{year:"numeric",month:"long",day:"numeric"})}},computed:{link:function(){return this.article?"/".concat(this.type,"/").concat(this.article.slug):""},excerpt:function(){return this.article,""}}},r=(n(420),n(422),n(74)),d=n(98),m=n.n(d),c=n(459),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"post"},[n("div",{staticClass:"css-u5p2ag"},[n("header",{staticClass:"css-79elbk"},[n("div",[n("router-link",{attrs:{to:t.link}},[n("h2",{staticClass:"css-1izrdyl"},[t._v(t._s(t.article.title))])]),n("div",{staticClass:"css-1d7x0cs"},[n("time",{staticClass:"updated",attrs:{datetime:t.article.updatedAt}}),n("p",[t._v(t._s(t.article.author.name)+" · "+t._s(t.formatDate(t.article.updatedAt))+" 업데이트")])])],1)]),n("div",{staticClass:"css-12m1dn8"},[n("v-img",{staticClass:"article-img",attrs:{src:t.article.img}}),n("nuxt-content",{attrs:{document:t.article.excerpt}})],1),n("footer",{staticClass:"css-3872h1"},[n("router-link",{staticClass:"css-13xd08w",attrs:{to:t.link}},[t._v("이어서 읽기")])],1)])])}),[],!1,null,"aa0c72de",null);e.default=component.exports;m()(component,{VImg:c.a})},502:function(t,e,n){var content=n(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("5774db1f",content,!0,{sourceMap:!1})},550:function(t,e,n){"use strict";n(502)},551:function(t,e,n){var o=n(83)(!1);o.push([t.i,".wrap[data-v-037624fd]{font-size:1.125rem;background-color:#fff;overflow-x:hidden}.css-15j7bd7[data-v-037624fd]{width:100%;margin-right:auto;margin-left:auto;padding:30px 20px 35px}",""]),t.exports=o},613:function(t,e,n){"use strict";n.r(e);var o=n(5),r=(n(51),n(41),n(389)),d=n(452),m={name:"Wiki",components:{TopBanner:r.default,ArticlePreview:d.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("articles","wiki").only(["title","body","excerpt","img","slug","author","updatedAt"]).sortBy("createdAt","desc").fetch();case 3:return(o=e.sent).map((function(article){article.excerpt={body:article.excerpt}})),e.abrupt("return",{articles:o});case 6:case"end":return e.stop()}}),e)})))()}},c=(n(550),n(74)),l=n(98),f=n.n(l),v=n(468),component=Object(c.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jett-container"},[n("navigation-bar"),n("div",{staticClass:"wrap"},[n("section",[n("top-banner",{attrs:{title:"다양한 SEO 전략을 얻으세요!",desc:"다양한 SEO 전략과 팁으로 솔루션 상담을 받을 수 있습니다!",buttonOnly:!0,buttonText:"상담하기"}})],1),n("v-main",[n("div",{staticClass:"css-15j7bd7"},[t._l(t.articles,(function(article){return[n("article-preview",{attrs:{type:"wiki",article:article}})]}))],2)])],1),n("page-footer")],1)}),[],!1,null,"037624fd",null);e.default=component.exports;f()(component,{NavigationBar:n(326).default,TopBanner:n(389).default,PageFooter:n(327).default}),f()(component,{VMain:v.a})}}]);