(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1167:function(t,n,e){"use strict";e.r(n);var c=e(485),o=e(689),r=e(713),l={middleware:"authentication",components:{Shipping:e(776).a,Checkout:r.a,EditAddress:o.a,BreadCrumb:c.a},transition:"zoom",data:function(){return{breadCrumb:[{text:"Home",url:"/"},{text:"Shopping Cart",url:"/account/shopping-cart"},{text:"Shipping"}]}}},_=e(7),component=Object(_.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("section",{staticClass:"ps-page--my-account"},[n("bread-crumb",{attrs:{breadcrumb:this.breadCrumb}}),this._v(" "),n("shipping")],1)}),[],!1,null,"58f28866",null);n.default=component.exports},776:function(t,n,e){"use strict";var c={name:"Shipping",components:{ModuleOrderSummary:e(722).a}},o=e(7),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ps-checkout ps-section--shopping"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"ps-section__content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-8 col-lg-8 col-md-12 col-sm-12"},[e("div",{staticClass:"ps-block--shipping"},[e("div",{staticClass:"ps-block__panel"},[e("figure",[e("small",[t._v("Contact")]),t._v(" "),e("p",[t._v("test@gmail.com")]),t._v(" "),e("nuxt-link",{attrs:{to:"/account/checkout"}},[e("a",[t._v("Change")])])],1),t._v(" "),e("figure",[e("small",[t._v("Ship to")]),t._v(" "),e("p",[t._v("\n                                    2015 South Street, Midland, Texas\n                                ")]),t._v(" "),e("nuxt-link",{attrs:{to:"/account/checkout"}},[e("a",[t._v("Change")]),t._v("q\n                                ")])],1)]),t._v(" "),e("h4",[t._v("Shipping Method")]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"ps-block__footer"},[e("nuxt-link",{attrs:{to:"/account/checkout"}},[e("a",[e("i",{staticClass:"icon-arrow-left mr-2"}),t._v("\n                                    Return to information\n                                ")])]),t._v(" "),e("nuxt-link",{staticClass:"ps-btn",attrs:{to:"/account/payment"}},[t._v("\n                                Continue to payment\n                            ")])],1)])]),t._v(" "),e("div",{staticClass:"col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order"},[e("module-order-summary",{attrs:{shipping:!0}})],1)])])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"ps-section__header"},[n("h1",[this._v("Shipping Information")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"ps-block__panel"},[n("figure",[n("small",[this._v("\n                                    International Shipping\n                                ")]),this._v(" "),n("strong",[this._v("$20.00")])])])}],!1,null,"0386a508",null);n.a=component.exports}}]);