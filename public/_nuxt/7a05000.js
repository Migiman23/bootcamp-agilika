(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1148:function(t,e,c){"use strict";c.r(e);var n=c(485),r={name:"Addresses",components:{AccountLinks:c(205).a},data:function(){return{accountLinks:[{text:"Account Information",url:"/account/user-information",icon:"icon-user"},{text:"Notifications",url:"/account/notifications",icon:"icon-alarm-ringing"},{text:"Invoices",url:"/account/invoices",icon:"icon-papers"},{text:"Address",url:"/account/addresses",icon:"icon-map-marker",active:!0},{text:"Recent Viewed Product",url:"/account/recent-viewed-product",icon:"icon-store"},{text:"Wishlist",url:"/account/wishlist",icon:"icon-heart"}]}}},o=c(7),l={components:{Addresses:Object(o.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("section",{staticClass:"ps-my-account ps-page--account"},[c("div",{staticClass:"container"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-4"},[c("div",{staticClass:"ps-section__left"},[c("aside",{staticClass:"ps-widget--account-dashboard"},[t._m(0),t._v(" "),c("div",{staticClass:"ps-widget__content"},[c("AccountLinks",{attrs:{links:t.accountLinks}})],1)])])]),t._v(" "),c("div",{staticClass:"col-lg-8"},[c("div",{staticClass:"ps-section--account-setting"},[c("div",{staticClass:"ps-section__content"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-md-6 col-12"},[c("figure",{staticClass:"ps-block--address"},[c("figcaption",[t._v("\n                                        Billing address\n                                    ")]),t._v(" "),c("div",{staticClass:"ps-block__content"},[c("p",[t._v("\n                                            You Have Not Set Up This Type Of\n                                            Address Yet.\n                                        ")]),t._v(" "),c("nuxt-link",{attrs:{to:"/account/edit-address"}},[c("a",[t._v("Edit")])])],1)])]),t._v(" "),c("div",{staticClass:"col-md-6 col-12"},[c("figure",{staticClass:"ps-block--address"},[c("figcaption",[t._v("\n                                        Shipping address\n                                    ")]),t._v(" "),c("div",{staticClass:"ps-block__content"},[c("p",[t._v("\n                                            You Have Not Set Up This Type Of\n                                            Address Yet.\n                                        ")]),t._v(" "),c("nuxt-link",{attrs:{to:"/account/edit-address"}},[c("a",[t._v("Edit")])])],1)])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ps-widget__header"},[e("img",{attrs:{src:"/img/users/3.jpg"}}),this._v(" "),e("figure",[e("figcaption",[this._v("Hello")]),this._v(" "),e("p",[this._v("username@gmail.com")])])])}],!1,null,"1f785e1c",null).exports,BreadCrumb:n.a},transition:"zoom",middleware:"authentication",data:function(){return{breadCrumb:[{text:"Home",url:"/"},{text:"Addresses"}]}}},d=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"ps-page--my-account"},[e("bread-crumb",{attrs:{breadcrumb:this.breadCrumb}}),this._v(" "),e("addresses")],1)}),[],!1,null,"3cefd938",null);e.default=d.exports},485:function(t,e,c){"use strict";var n={name:"BreadCrumb",props:{breadcrumb:{type:Array,default:[]},layout:{type:String,default:""}}},r=c(7),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"ps-breadcrumb"},[c("div",{class:"fullwidth"===t.layout?"ps-container":"container"},[c("ul",{staticClass:"breadcrumb"},[t._l(t.breadcrumb,(function(e){return[e.url?c("li",{key:e.text},[c("nuxt-link",{attrs:{to:e.url}},[c("a",[t._v(t._s(e.text))])])],1):c("li",[t._v(t._s(e.text))])]}))],2)])])}),[],!1,null,"41971152",null);e.a=component.exports}}]);