(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{403:function(t,e,n){var content=n(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("218eae55",content,!0,{sourceMap:!1})},431:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return l})),n.d(e,"d",(function(){return c}));n(75);var o={DESKTOP:{TITLE:{MIN:200,MAX:580},DESC:{MIN:400,MAX:1e3}},MOBILE:{TITLE:{MIN:200,MAX:550},DESC:{MIN:400,MAX:990}}},r=function(){var t=document.createElement("div"),e=document.createElement("a"),n=document.createElement("span");return t.id="pixel-helper",t.style.visibility="hidden",e.id="title-helper",e.style.fontSize="20px",e.style.fontFamily="arial, sans-serif",e.style.whiteSpace="nowrap",e.style.lineHeight="1.3",n.id="desc-helper",n.style.fontSize="14px",n.style.fontFamily="font-family: arial, sans-serif",n.style.whiteSpace="nowrap",n.style.lineHeight="1.57",t.appendChild(e),t.appendChild(n),t},l=function(t,text){var e=document.querySelector("#".concat(function(t){switch(t){case"TITLE":return"title-helper";case"DESC":return"desc-helper"}}(t)));e.innerText=text;var n=e.offsetWidth;return e.innerText="",n},c=function(t,e,n){if(!document.querySelector("#pixel-helper")){var c=r();document.body.appendChild(c)}var h=function(t,e){switch(e){case!0:switch(t){case"TITLE":return o.MOBILE.TITLE;case"DESC":return o.MOBILE.DESC}case!1:switch(t){case"TITLE":return o.DESKTOP.TITLE;case"DESC":return o.DESKTOP.DESC}}}(t,n),text="";if(1===e.length)for(var v=e[0],i=0;i<v.length;i+=1){if(l(t,text)>h.MAX)return"".concat(text,"...");text+=v.charAt(i)}else for(var d=0;d<e.length;d+=1){if(l(t,text)>h.MAX)return"".concat(text,"...");text+="".concat(e[d]," ")}return text.trim()}},436:function(t,e,n){"use strict";n(11);var o=n(3);function r(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),function(t){var e=t.touchstartX,n=t.touchendX,o=t.touchstartY,r=t.touchendY;t.offsetX=n-e,t.offsetY=r-o,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&n<e-16&&t.left(t),t.right&&n>e+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&r<o-16&&t.up(t),t.down&&r>o+16&&t.down(t))}(e)}function l(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return function(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}(t,e)},touchend:function(t){return r(t,e)},touchmove:function(t){return function(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}(t,e)}}}var c={inserted:function(t,e,n){var r=e.value,c=r.parent?t.parentElement:t,h=r.options||{passive:!0};if(c){var v=l(e.value);c._touchHandlers=Object(c._touchHandlers),c._touchHandlers[n.context._uid]=v,Object(o.m)(v).forEach((function(t){c.addEventListener(t,v[t],h)}))}},unbind:function(t,e,n){var r=e.value.parent?t.parentElement:t;if(r&&r._touchHandlers){var l=r._touchHandlers[n.context._uid];Object(o.m)(l).forEach((function(t){r.removeEventListener(t,l[t])})),delete r._touchHandlers[n.context._uid]}}};e.a=c},446:function(t,e,n){"use strict";n(403)},447:function(t,e,n){var o=n(20)(!1);o.push([t.i,".preview-container[data-v-6ce47336]{text-align:left;padding:20px;border:2px solid #eee;border-radius:5px;margin-top:16px;overflow:auto}.preview-container .preview-box[data-v-6ce47336]{width:570px}.preview-container .preview-box .desktop-snippet-url[data-v-6ce47336]{color:#5f6368;display:inline;font-size:14px;font-weight:400;line-height:21.98px;list-style-image:none;list-style-position:outside;list-style-type:none;text-align:left;word-wrap:break-word;zoom:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.preview-container .preview-box .desktop[data-v-6ce47336]{cursor:pointer;font-family:arial,sans-serif;font-size:13px;font-weight:400;line-height:20.41px;margin-bottom:4px;color:#3c4043}.preview-container .desktop-title[data-v-6ce47336]{margin-bottom:3px;font-family:arial,sans-serif;font-size:20px}.preview-container a[data-v-6ce47336]{color:#1a0dab;cursor:pointer;display:inline-block;font-family:Roboto,HelveticaNeue,Arial,sans-serif;font-size:20px;height:26px;line-height:26px;text-decoration:none;width:auto}.preview-container a[data-v-6ce47336],.preview-container span[data-v-6ce47336]{font-weight:400;list-style-image:none;list-style-position:outside;list-style-type:none;text-align:left;zoom:1}.preview-container span[data-v-6ce47336]{color:#5f6368;display:inline;font-size:14px;line-height:21.98px;word-wrap:break-word}.preview-container .desktop-meta-description-text[data-v-6ce47336]{font-family:arial,sans-serif}.preview-container .mobile-preview-box[data-v-6ce47336]{font-family:Roboto,HelveticaNeue,Arial,sans-serif;box-shadow:0 1px 6px rgba(32,33,36,.28);border-radius:8px;border-bottom:1px hidden #fff;padding:12px 16px;width:375px;margin:0 auto}.preview-container .mobile-preview-box .mobile[data-v-6ce47336]{display:flex}.preview-container .mobile-preview-box .mobile .favicon[data-v-6ce47336]{margin-right:6px;margin-top:3px}.preview-container .mobile-preview-box .mobile .desktop-snippet-url[data-v-6ce47336]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;margin-bottom:5px}.preview-container .mobile-preview-box .mobile-title[data-v-6ce47336]{white-space:normal}.preview-container .device-switch[data-v-6ce47336]{margin-top:0;padding-top:0;margin-bottom:16px;padding-bottom:4px}@media(max-width:990px){.preview-box[data-v-6ce47336]{position:relative;background-color:#fff;box-sizing:border-box;border-radius:2px;border-bottom:1px hidden #fff;margin:0;padding-top:11px}.desktop-title[data-v-6ce47336]{line-height:20px;word-wrap:break-word;font-size:16px;margin-right:16px}.meta-desciption[data-v-6ce47336]{margin:0 16px 11px 0}}",""]),t.exports=o},456:function(t,e,n){"use strict";n.r(e);n(30),n(56);var o=n(431),r={name:"GooglePreview",props:{url:{type:String,required:!0},title:{type:Object,required:!0},date:{type:String,default:"2021. 01. 01."},description:{type:Object,required:!0},favicon:{type:String,required:!0}},data:function(){return{isMobile:!1}},methods:{ellipsis:function(t,text){return text?Object(o.d)(t,text.split(" "),this.isMobile):""}},computed:{faviconUrl:function(){return this.favicon?this.favicon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABs0lEQVR4AWL4//8/RRjO8Iucx+noO0MWUDo16FYABMGP6ZfUcRnWtm27jVPbtm3bttuH2t3eFPcY9pLz7NxiLjCyVd87pKnHyqXyxtCs8APd0rnyxiu4qSeA3QEDrAwBDrT1s1Rc/OrjLZwqVmOSu6+Lamcpp2KKMA9PH1BYXMe1mUP5qotvXTywsOEEYHXxrY+3cqk6TMkYpNr2FeoY3KIr0RPtn9wQ2unlA+GMkRw6+9TFw4YTwDUzx/JVvARj9KaedXRO8P5B1Du2S32smzqUrcKGEyA+uAgQjKX7zf0boWHGfn71jIKj2689gxp7OAGShNcBUmLMPVjZuiKcA2vuWHHDCQxMCz629kXAIU4ApY15QwggAFbfOP9DhgBJ+nWVJ1AZAfICAj1pAlY6hCADZnveQf7bQIwzVONGJonhLIlS9gr5mFg44Xd+4S3XHoGNPdJl1INIwKyEgHckEhgTe1bGiFY9GSFBYUwLh1IkiJUbY407E7syBSFxKTszEoiE/YdrgCEayDmtaJwCI9uu8TKMuZSVfSa4BpGgzvomBR/INhLGzrqDotp01ZR8pn/1L0JN9d9XNyx0AAAAAElFTkSuQmCC"}}},l=(n(446),n(36)),c=n(48),h=n.n(c),v=n(539),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview-container"},[n("div",{staticClass:"switch"},[n("v-switch",{staticClass:"device-switch",attrs:{label:"모바일",color:"#00afff","hide-details":""},model:{value:t.isMobile,callback:function(e){t.isMobile=e},expression:"isMobile"}})],1),t.isMobile?n("div",{staticClass:"mobile-preview-box"},[n("div",{staticClass:"mobile"},[n("img",{staticClass:"favicon",attrs:{width:"16",height:"16",src:t.faviconUrl,alt:"favicon"}}),n("span",{staticClass:"desktop-snippet-url"},[t._v(t._s(t.url))])]),n("a",{staticClass:"mobile-title"},[t._v(t._s(t.ellipsis("TITLE",t.title.self)))]),n("div",{staticClass:"meta-desciption"},[n("span",{staticClass:"desktop-snippet-date"},[t._v(t._s(t.date)+" — ")]),n("span",{staticClass:"desktop-meta-description-text"},[t._v(t._s(t.ellipsis("DESC",t.description.self)))])])]):n("div",{staticClass:"preview-box"},[n("div",{staticClass:"desktop"},[n("span",{staticClass:"desktop-snippet-url"},[t._v(t._s(t.url))])]),n("a",{staticClass:"desktop-title"},[t._v(t._s(t.ellipsis("TITLE",t.title.self)))]),n("div",{staticClass:"meta-desciption"},[n("span",{staticClass:"desktop-snippet-date"},[t._v(t._s(t.date)+" — ")]),n("span",{staticClass:"desktop-meta-description-text"},[t._v(t._s(t.ellipsis("DESC",t.description.self)))])])])])}),[],!1,null,"6ce47336",null);e.default=component.exports;h()(component,{VSwitch:v.a})},464:function(t,e,n){var content=n(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("2e2bc7da",content,!0,{sourceMap:!1})},465:function(t,e,n){var o=n(20)(!1);o.push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=o},466:function(t,e,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("beda1088",content,!0,{sourceMap:!1})},467:function(t,e,n){var o=n(20)(!1);o.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;width:36px;height:14px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{width:18px;height:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;width:44px;top:calc(50% - 12px);left:-3px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),t.exports=o},539:function(t,e,n){"use strict";n(12),n(9),n(13),n(16),n(11),n(17);var o=n(94),r=n(2),l=(n(177),n(464),n(466),n(6),n(62),n(452)),c=n(180),h=n(0),v=h.a.extend({name:"rippleable",directives:{ripple:c.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),d=n(3),f=h.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:d.f}}}),m=n(44);function w(t){t.preventDefault()}var _=Object(m.a)(l.a,v,f).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=l.a.options.methods.genLabel.call(this);return label?(label.data.on={click:w},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:w},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),x=n(436),y=n(393),C=n(137),A=["title"];function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=_.extend({name:"v-switch",directives:{Touch:x.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return E(E({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,A));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",E(E({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",E({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",E({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(y.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(C.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===d.l.left&&this.isActive||t.keyCode===d.l.right&&!this.isActive)&&this.onChange()}}})}}]);