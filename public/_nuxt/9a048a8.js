(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1089:function(t,e,n){"use strict";n(841)},1090:function(t,e,n){(e=n(16)(!1)).push([t.i,".text-editor[data-v-49531201]{width:100%}.card-container[data-v-49531201]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.button-actions[data-v-49531201]{min-width:175px;max-height:50px}.image-drop-container[data-v-49531201]{width:440px;height:100px;border:1px dashed #3483fa;border-radius:3px}.image-drop-container[data-v-49531201]:hover{border:2px solid #3483fa}.image-drop-container-after[data-v-49531201]{width:440px;height:100px}.image-drop-after[data-v-49531201]{width:90px;height:90px;border:1px dashed #3483fa;border-radius:3px}.image-drop-after[data-v-49531201]:hover{border:2px solid #3483fa}.image-drop-after span[data-v-49531201]{text-align:center;font-size:11px}.image-into[data-v-49531201]{width:90px;height:90px}.button-delete-image[data-v-49531201]{position:absolute}button[data-v-49531201]{min-width:175px;max-height:50px}button.button-go-back[data-v-49531201]{position:absolute;padding:10px!important;left:25px;top:25px;min-width:110px!important}",""]),t.exports=e},1185:function(t,e,n){"use strict";n.r(e);n(15),n(12),n(10),n(9),n(14);var o=n(4),r=(n(30),n(8)),c=n(21);n(87),n(13);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={name:"quill-example-nuxt",created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.description.length>0)){e.next=3;break}return e.next=3,fetch(t.description).then((function(t){return t.text()})).then((function(e){return t.content=e})).catch((function(t){return console.log("error",t)}));case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{descriptionContent:"",content:"",editorOption:{theme:"snow",modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block","image",{list:"ordered"},{list:"bullet"}]]}}}},methods:{onChangeUploadDescription:function(){this.$store.dispatch("addProduct/actionUploadDescription",{value:this.content,finish:this.product,id:this.productId})}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.d)({product:function(t){return t.addProduct.product},productId:function(t){return t.addProduct.product.id},description:function(t){return t.addProduct.product.description}}))},f=(n(1089),n(7)),h=n(23),v=n.n(h),x=n(511),m=n(693),w=n(724),O=n(191),j=n(682),k=n(480),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",{staticClass:"card-container d-flex pt-15 pb-15 pl-15 pr-15 flex-column align-center justify-center mt-15 mb-15"},[n("nuxt-link",{staticClass:"button-go-back ps-btn d-flex align-center",attrs:{tag:"button",to:"/vendor/add/images"}},[n("v-icon",[t._v("mdi-arrow-left ")]),t._v("\n            Go Back\n        ")],1),t._v(" "),n("v-spacer"),t._v(" "),n("h2",{staticClass:"mb-12"},[t._v("Description")]),t._v(" "),n("client-only",[n("quill-editor",{ref:"editor",staticClass:"text-editor mb-12",attrs:{options:t.editorOption},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"column"},[n("button",{staticClass:"ps-btn ps-btn--red button-actions"},[t._v("\n                    CANCEL\n                ")])]),t._v(" "),n("v-col",{staticClass:"column"},[n("nuxt-link",{attrs:{to:"/vendor/product-crud"}},[n("button",{staticClass:"ps-btn button-actions",on:{click:t.onChangeUploadDescription}},[t._v("\n                        FINISH\n                    ")])])],1)],1)],1)],1)}),[],!1,null,"49531201",null);e.default=component.exports;v()(component,{VCard:x.a,VCol:m.a,VContainer:w.a,VIcon:O.a,VRow:j.a,VSpacer:k.a})},841:function(t,e,n){var content=n(1090);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("2f0bbd3a",content,!0,{sourceMap:!1})}}]);