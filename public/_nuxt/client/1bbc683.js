(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1190:function(t,e,r){"use strict";r.r(e);r(15),r(12),r(10),r(9),r(13),r(29);var n=r(8),o=r(3),c=r(21),d=r(498),l=r(725),h=r(727),f=r(708),m=r(709),v=r(710),_=r(864),O=r(863);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y={components:{ShopSidebarBanner:r(862).a,LayoutShopSidebar:O.a,ShopSidebarBestSeller:_.a,ShopCategories:v.a,ShopBrands:m.a,ShopBanner:f.a,ShopWidget:h.a,LayoutShop:l.a,BreadCrumb:d.a},transition:function(){return"fadeIn"},data:function(){return{breadCrumb:[{text:"Home",url:"/"},{text:"Shop Sidebar"}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.d)({collections:function(t){return t.collection.collections},categories:function(t){return t.product.categories},brands:function(t){return t.product.brands}})),created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={_start:1,_limit:12},n=["shop_best_sale_items","shop-recommend-items"],e.next=4,t.$store.dispatch("collection/getCollectionsBySlugs",n);case 4:return e.sent,e.next=7,t.$store.dispatch("product/getProducts",r);case 7:return e.sent,e.next=10,t.$store.dispatch("product/getProductBrands",r);case 10:return e.sent,e.next=13,t.$store.dispatch("product/getProductCategories",r);case 13:e.sent;case 14:case"end":return e.stop()}}),e)})))()}},j=r(7),component=Object(j.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("bread-crumb",{attrs:{breadcrumb:t.breadCrumb}}),t._v(" "),r("div",{staticClass:"ps-page--shop",attrs:{id:"shop-sidebar"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"ps-layout--shop"},[r("div",{staticClass:"ps-layout__left"},[null!==t.categories&&null!==t.brands?r("shop-widget"):t._e()],1),t._v(" "),r("div",{staticClass:"ps-layout__right"},[t._m(0),t._v(" "),null!==t.collections?r("layout-shop-sidebar"):t._e()],1)])])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ps-page__header"},[r("h1",{staticClass:"text-uppercase"},[t._v("Shop Sidebar")])])}],!1,null,"bdcb31dc",null);e.default=component.exports}}]);