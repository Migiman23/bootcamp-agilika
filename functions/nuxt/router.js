import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4eb454ad = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _508bbbfa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _f94a419a = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _5f2631fe = () => interopDefault(import('../pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _5435eb30 = () => interopDefault(import('../pages/account/addresses.vue' /* webpackChunkName: "pages/account/addresses" */))
const _352a11f0 = () => interopDefault(import('../pages/account/checkout.vue' /* webpackChunkName: "pages/account/checkout" */))
const _0f8ce5ab = () => interopDefault(import('../pages/account/compare.vue' /* webpackChunkName: "pages/account/compare" */))
const _4bcd7d4a = () => interopDefault(import('../pages/account/edit-address.vue' /* webpackChunkName: "pages/account/edit-address" */))
const _3416249b = () => interopDefault(import('../pages/account/invoice-detail.vue' /* webpackChunkName: "pages/account/invoice-detail" */))
const _b245d0e0 = () => interopDefault(import('../pages/account/invoices.vue' /* webpackChunkName: "pages/account/invoices" */))
const _35b1eca2 = () => interopDefault(import('../pages/account/login.vue' /* webpackChunkName: "pages/account/login" */))
const _6e7cf2ec = () => interopDefault(import('../pages/account/my-orders.vue' /* webpackChunkName: "pages/account/my-orders" */))
const _227a6ca4 = () => interopDefault(import('../pages/account/notifications.vue' /* webpackChunkName: "pages/account/notifications" */))
const _675f3b68 = () => interopDefault(import('../pages/account/payment.vue' /* webpackChunkName: "pages/account/payment" */))
const _d2b15ac4 = () => interopDefault(import('../pages/account/recent-viewed-product.vue' /* webpackChunkName: "pages/account/recent-viewed-product" */))
const _7830fccd = () => interopDefault(import('../pages/account/register.vue' /* webpackChunkName: "pages/account/register" */))
const _7389a350 = () => interopDefault(import('../pages/account/shipping.vue' /* webpackChunkName: "pages/account/shipping" */))
const _70dd0aaa = () => interopDefault(import('../pages/account/shopping-cart.vue' /* webpackChunkName: "pages/account/shopping-cart" */))
const _10d59ad4 = () => interopDefault(import('../pages/account/user-information.vue' /* webpackChunkName: "pages/account/user-information" */))
const _6747ba22 = () => interopDefault(import('../pages/account/wishlist.vue' /* webpackChunkName: "pages/account/wishlist" */))
const _4cbf43bc = () => interopDefault(import('../pages/blog/blog-left-sidebar.vue' /* webpackChunkName: "pages/blog/blog-left-sidebar" */))
const _3daa06c4 = () => interopDefault(import('../pages/blog/blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _4c37d216 = () => interopDefault(import('../pages/blog/blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _381033f0 = () => interopDefault(import('../pages/blog/blog-small-thumbnail.vue' /* webpackChunkName: "pages/blog/blog-small-thumbnail" */))
const _2c552ea9 = () => interopDefault(import('../pages/home/auto-part.vue' /* webpackChunkName: "pages/home/auto-part" */))
const _6ea1c058 = () => interopDefault(import('../pages/home/electronic.vue' /* webpackChunkName: "pages/home/electronic" */))
const _378970ca = () => interopDefault(import('../pages/home/furniture.vue' /* webpackChunkName: "pages/home/furniture" */))
const _fdd3d6e4 = () => interopDefault(import('../pages/home/market-place.vue' /* webpackChunkName: "pages/home/market-place" */))
const _e35fcb9a = () => interopDefault(import('../pages/home/market-place-2.vue' /* webpackChunkName: "pages/home/market-place-2" */))
const _e3439c98 = () => interopDefault(import('../pages/home/market-place-3.vue' /* webpackChunkName: "pages/home/market-place-3" */))
const _e3276d96 = () => interopDefault(import('../pages/home/market-place-4.vue' /* webpackChunkName: "pages/home/market-place-4" */))
const _3107b97a = () => interopDefault(import('../pages/home/organic.vue' /* webpackChunkName: "pages/home/organic" */))
const _4693eb38 = () => interopDefault(import('../pages/home/technology.vue' /* webpackChunkName: "pages/home/technology" */))
const _74e2ccf4 = () => interopDefault(import('../pages/page/about-us.vue' /* webpackChunkName: "pages/page/about-us" */))
const _d7a44a48 = () => interopDefault(import('../pages/page/blank.vue' /* webpackChunkName: "pages/page/blank" */))
const _c1c14cda = () => interopDefault(import('../pages/page/contact-us.vue' /* webpackChunkName: "pages/page/contact-us" */))
const _611af545 = () => interopDefault(import('../pages/page/faqs.vue' /* webpackChunkName: "pages/page/faqs" */))
const _31bbc0bc = () => interopDefault(import('../pages/page/page-404.vue' /* webpackChunkName: "pages/page/page-404" */))
const _4f7209da = () => interopDefault(import('../pages/post/default.vue' /* webpackChunkName: "pages/post/default" */))
const _b9964826 = () => interopDefault(import('../pages/post/detail-2.vue' /* webpackChunkName: "pages/post/detail-2" */))
const _b97a1924 = () => interopDefault(import('../pages/post/detail-3.vue' /* webpackChunkName: "pages/post/detail-3" */))
const _b95dea22 = () => interopDefault(import('../pages/post/detail-4.vue' /* webpackChunkName: "pages/post/detail-4" */))
const _afcee456 = () => interopDefault(import('../pages/product/affiliate.vue' /* webpackChunkName: "pages/product/affiliate" */))
const _95f8e49c = () => interopDefault(import('../pages/product/boxed.vue' /* webpackChunkName: "pages/product/boxed" */))
const _63b5668e = () => interopDefault(import('../pages/product/countdown.vue' /* webpackChunkName: "pages/product/countdown" */))
const _63d2c8e1 = () => interopDefault(import('../pages/product/extended.vue' /* webpackChunkName: "pages/product/extended" */))
const _2a037de3 = () => interopDefault(import('../pages/product/full-content.vue' /* webpackChunkName: "pages/product/full-content" */))
const _81828350 = () => interopDefault(import('../pages/product/groupped.vue' /* webpackChunkName: "pages/product/groupped" */))
const _25f8b7fd = () => interopDefault(import('../pages/product/on-sale.vue' /* webpackChunkName: "pages/product/on-sale" */))
const _176fe7e7 = () => interopDefault(import('../pages/product/out-of-stock.vue' /* webpackChunkName: "pages/product/out-of-stock" */))
const _0357d064 = () => interopDefault(import('../pages/product/sidebar.vue' /* webpackChunkName: "pages/product/sidebar" */))
const _759e29f4 = () => interopDefault(import('../pages/shop/shop-carousel.vue' /* webpackChunkName: "pages/shop/shop-carousel" */))
const _5964f37c = () => interopDefault(import('../pages/shop/shop-categories.vue' /* webpackChunkName: "pages/shop/shop-categories" */))
const _3ca7933e = () => interopDefault(import('../pages/shop/shop-fullwidth.vue' /* webpackChunkName: "pages/shop/shop-fullwidth" */))
const _2afbe1b4 = () => interopDefault(import('../pages/shop/shop-sidebar.vue' /* webpackChunkName: "pages/shop/shop-sidebar" */))
const _669682f0 = () => interopDefault(import('../pages/shop/shop-sidebar-without-banner.vue' /* webpackChunkName: "pages/shop/shop-sidebar-without-banner" */))
const _b467278a = () => interopDefault(import('../pages/vendor/become-a-vendor.vue' /* webpackChunkName: "pages/vendor/become-a-vendor" */))
const _2d29352a = () => interopDefault(import('../pages/vendor/product-crud.vue' /* webpackChunkName: "pages/vendor/product-crud" */))
const _00ca40d9 = () => interopDefault(import('../pages/vendor/store-list.vue' /* webpackChunkName: "pages/vendor/store-list" */))
const _1cab4084 = () => interopDefault(import('../pages/vendor/store-list-2.vue' /* webpackChunkName: "pages/vendor/store-list-2" */))
const _036e7149 = () => interopDefault(import('../pages/vendor/vendor-register.vue' /* webpackChunkName: "pages/vendor/vendor-register" */))
const _5899d42b = () => interopDefault(import('../pages/vendor/vendor-store.vue' /* webpackChunkName: "pages/vendor/vendor-store" */))
const _69c43abb = () => interopDefault(import('../pages/vendor/add/category.vue' /* webpackChunkName: "pages/vendor/add/category" */))
const _a2aa1f62 = () => interopDefault(import('../pages/vendor/add/description.vue' /* webpackChunkName: "pages/vendor/add/description" */))
const _ed3e3dd6 = () => interopDefault(import('../pages/vendor/add/details.vue' /* webpackChunkName: "pages/vendor/add/details" */))
const _574a0f16 = () => interopDefault(import('../pages/vendor/add/images.vue' /* webpackChunkName: "pages/vendor/add/images" */))
const _676bae2a = () => interopDefault(import('../pages/vendor/add/title.vue' /* webpackChunkName: "pages/vendor/add/title" */))
const _dce492f8 = () => interopDefault(import('../pages/vendor/admin/metrics.vue' /* webpackChunkName: "pages/vendor/admin/metrics" */))
const _1d4b0534 = () => interopDefault(import('../pages/vendor/admin/orders.vue' /* webpackChunkName: "pages/vendor/admin/orders" */))
const _3964476a = () => interopDefault(import('../pages/vendor/admin/product-list.vue' /* webpackChunkName: "pages/vendor/admin/product-list" */))
const _1badeee6 = () => interopDefault(import('../pages/vendor/admin/sales.vue' /* webpackChunkName: "pages/vendor/admin/sales" */))
const _173c419d = () => interopDefault(import('../pages/vendor/admin/shipments/index.vue' /* webpackChunkName: "pages/vendor/admin/shipments/index" */))
const _5db91558 = () => interopDefault(import('../pages/vendor/admin/general/_id.vue' /* webpackChunkName: "pages/vendor/admin/general/_id" */))
const _55380745 = () => interopDefault(import('../pages/vendor/admin/shipments/_id.vue' /* webpackChunkName: "pages/vendor/admin/shipments/_id" */))
const _0249d07b = () => interopDefault(import('../pages/vendor/admin/_id.vue' /* webpackChunkName: "pages/vendor/admin/_id" */))
const _a3548d7a = () => interopDefault(import('../pages/vendor/update/_id.vue' /* webpackChunkName: "pages/vendor/update/_id" */))
const _69be2953 = () => interopDefault(import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _469a8fc2 = () => interopDefault(import('../pages/product/_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _5da7b1fb = () => interopDefault(import('../pages/vendor/_id.vue' /* webpackChunkName: "pages/vendor/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _4eb454ad,
    name: "blog___en"
  }, {
    path: "/fr",
    component: _508bbbfa,
    name: "index___fr"
  }, {
    path: "/search",
    component: _f94a419a,
    name: "search___en"
  }, {
    path: "/shop",
    component: _5f2631fe,
    name: "shop___en"
  }, {
    path: "/account/addresses",
    component: _5435eb30,
    name: "account-addresses___en"
  }, {
    path: "/account/checkout",
    component: _352a11f0,
    name: "account-checkout___en"
  }, {
    path: "/account/compare",
    component: _0f8ce5ab,
    name: "account-compare___en"
  }, {
    path: "/account/edit-address",
    component: _4bcd7d4a,
    name: "account-edit-address___en"
  }, {
    path: "/account/invoice-detail",
    component: _3416249b,
    name: "account-invoice-detail___en"
  }, {
    path: "/account/invoices",
    component: _b245d0e0,
    name: "account-invoices___en"
  }, {
    path: "/account/login",
    component: _35b1eca2,
    name: "account-login___en"
  }, {
    path: "/account/my-orders",
    component: _6e7cf2ec,
    name: "account-my-orders___en"
  }, {
    path: "/account/notifications",
    component: _227a6ca4,
    name: "account-notifications___en"
  }, {
    path: "/account/payment",
    component: _675f3b68,
    name: "account-payment___en"
  }, {
    path: "/account/recent-viewed-product",
    component: _d2b15ac4,
    name: "account-recent-viewed-product___en"
  }, {
    path: "/account/register",
    component: _7830fccd,
    name: "account-register___en"
  }, {
    path: "/account/shipping",
    component: _7389a350,
    name: "account-shipping___en"
  }, {
    path: "/account/shopping-cart",
    component: _70dd0aaa,
    name: "account-shopping-cart___en"
  }, {
    path: "/account/user-information",
    component: _10d59ad4,
    name: "account-user-information___en"
  }, {
    path: "/account/wishlist",
    component: _6747ba22,
    name: "account-wishlist___en"
  }, {
    path: "/blog/blog-left-sidebar",
    component: _4cbf43bc,
    name: "blog-blog-left-sidebar___en"
  }, {
    path: "/blog/blog-list",
    component: _3daa06c4,
    name: "blog-blog-list___en"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _4c37d216,
    name: "blog-blog-right-sidebar___en"
  }, {
    path: "/blog/blog-small-thumbnail",
    component: _381033f0,
    name: "blog-blog-small-thumbnail___en"
  }, {
    path: "/fr/blog",
    component: _4eb454ad,
    name: "blog___fr"
  }, {
    path: "/fr/search",
    component: _f94a419a,
    name: "search___fr"
  }, {
    path: "/fr/shop",
    component: _5f2631fe,
    name: "shop___fr"
  }, {
    path: "/home/auto-part",
    component: _2c552ea9,
    name: "home-auto-part___en"
  }, {
    path: "/home/electronic",
    component: _6ea1c058,
    name: "home-electronic___en"
  }, {
    path: "/home/furniture",
    component: _378970ca,
    name: "home-furniture___en"
  }, {
    path: "/home/market-place",
    component: _fdd3d6e4,
    name: "home-market-place___en"
  }, {
    path: "/home/market-place-2",
    component: _e35fcb9a,
    name: "home-market-place-2___en"
  }, {
    path: "/home/market-place-3",
    component: _e3439c98,
    name: "home-market-place-3___en"
  }, {
    path: "/home/market-place-4",
    component: _e3276d96,
    name: "home-market-place-4___en"
  }, {
    path: "/home/organic",
    component: _3107b97a,
    name: "home-organic___en"
  }, {
    path: "/home/technology",
    component: _4693eb38,
    name: "home-technology___en"
  }, {
    path: "/page/about-us",
    component: _74e2ccf4,
    name: "page-about-us___en"
  }, {
    path: "/page/blank",
    component: _d7a44a48,
    name: "page-blank___en"
  }, {
    path: "/page/contact-us",
    component: _c1c14cda,
    name: "page-contact-us___en"
  }, {
    path: "/page/faqs",
    component: _611af545,
    name: "page-faqs___en"
  }, {
    path: "/page/page-404",
    component: _31bbc0bc,
    name: "page-page-404___en"
  }, {
    path: "/post/default",
    component: _4f7209da,
    name: "post-default___en"
  }, {
    path: "/post/detail-2",
    component: _b9964826,
    name: "post-detail-2___en"
  }, {
    path: "/post/detail-3",
    component: _b97a1924,
    name: "post-detail-3___en"
  }, {
    path: "/post/detail-4",
    component: _b95dea22,
    name: "post-detail-4___en"
  }, {
    path: "/product/affiliate",
    component: _afcee456,
    name: "product-affiliate___en"
  }, {
    path: "/product/boxed",
    component: _95f8e49c,
    name: "product-boxed___en"
  }, {
    path: "/product/countdown",
    component: _63b5668e,
    name: "product-countdown___en"
  }, {
    path: "/product/extended",
    component: _63d2c8e1,
    name: "product-extended___en"
  }, {
    path: "/product/full-content",
    component: _2a037de3,
    name: "product-full-content___en"
  }, {
    path: "/product/groupped",
    component: _81828350,
    name: "product-groupped___en"
  }, {
    path: "/product/on-sale",
    component: _25f8b7fd,
    name: "product-on-sale___en"
  }, {
    path: "/product/out-of-stock",
    component: _176fe7e7,
    name: "product-out-of-stock___en"
  }, {
    path: "/product/sidebar",
    component: _0357d064,
    name: "product-sidebar___en"
  }, {
    path: "/shop/shop-carousel",
    component: _759e29f4,
    name: "shop-shop-carousel___en"
  }, {
    path: "/shop/shop-categories",
    component: _5964f37c,
    name: "shop-shop-categories___en"
  }, {
    path: "/shop/shop-fullwidth",
    component: _3ca7933e,
    name: "shop-shop-fullwidth___en"
  }, {
    path: "/shop/shop-sidebar",
    component: _2afbe1b4,
    name: "shop-shop-sidebar___en"
  }, {
    path: "/shop/shop-sidebar-without-banner",
    component: _669682f0,
    name: "shop-shop-sidebar-without-banner___en"
  }, {
    path: "/vendor/become-a-vendor",
    component: _b467278a,
    name: "vendor-become-a-vendor___en"
  }, {
    path: "/vendor/product-crud",
    component: _2d29352a,
    name: "vendor-product-crud___en"
  }, {
    path: "/vendor/store-list",
    component: _00ca40d9,
    name: "vendor-store-list___en"
  }, {
    path: "/vendor/store-list-2",
    component: _1cab4084,
    name: "vendor-store-list-2___en"
  }, {
    path: "/vendor/vendor-register",
    component: _036e7149,
    name: "vendor-vendor-register___en"
  }, {
    path: "/vendor/vendor-store",
    component: _5899d42b,
    name: "vendor-vendor-store___en"
  }, {
    path: "/fr/account/addresses",
    component: _5435eb30,
    name: "account-addresses___fr"
  }, {
    path: "/fr/account/checkout",
    component: _352a11f0,
    name: "account-checkout___fr"
  }, {
    path: "/fr/account/compare",
    component: _0f8ce5ab,
    name: "account-compare___fr"
  }, {
    path: "/fr/account/edit-address",
    component: _4bcd7d4a,
    name: "account-edit-address___fr"
  }, {
    path: "/fr/account/invoice-detail",
    component: _3416249b,
    name: "account-invoice-detail___fr"
  }, {
    path: "/fr/account/invoices",
    component: _b245d0e0,
    name: "account-invoices___fr"
  }, {
    path: "/fr/account/login",
    component: _35b1eca2,
    name: "account-login___fr"
  }, {
    path: "/fr/account/my-orders",
    component: _6e7cf2ec,
    name: "account-my-orders___fr"
  }, {
    path: "/fr/account/notifications",
    component: _227a6ca4,
    name: "account-notifications___fr"
  }, {
    path: "/fr/account/payment",
    component: _675f3b68,
    name: "account-payment___fr"
  }, {
    path: "/fr/account/recent-viewed-product",
    component: _d2b15ac4,
    name: "account-recent-viewed-product___fr"
  }, {
    path: "/fr/account/register",
    component: _7830fccd,
    name: "account-register___fr"
  }, {
    path: "/fr/account/shipping",
    component: _7389a350,
    name: "account-shipping___fr"
  }, {
    path: "/fr/account/shopping-cart",
    component: _70dd0aaa,
    name: "account-shopping-cart___fr"
  }, {
    path: "/fr/account/user-information",
    component: _10d59ad4,
    name: "account-user-information___fr"
  }, {
    path: "/fr/account/wishlist",
    component: _6747ba22,
    name: "account-wishlist___fr"
  }, {
    path: "/fr/blog/blog-left-sidebar",
    component: _4cbf43bc,
    name: "blog-blog-left-sidebar___fr"
  }, {
    path: "/fr/blog/blog-list",
    component: _3daa06c4,
    name: "blog-blog-list___fr"
  }, {
    path: "/fr/blog/blog-right-sidebar",
    component: _4c37d216,
    name: "blog-blog-right-sidebar___fr"
  }, {
    path: "/fr/blog/blog-small-thumbnail",
    component: _381033f0,
    name: "blog-blog-small-thumbnail___fr"
  }, {
    path: "/fr/home/auto-part",
    component: _2c552ea9,
    name: "home-auto-part___fr"
  }, {
    path: "/fr/home/electronic",
    component: _6ea1c058,
    name: "home-electronic___fr"
  }, {
    path: "/fr/home/furniture",
    component: _378970ca,
    name: "home-furniture___fr"
  }, {
    path: "/fr/home/market-place",
    component: _fdd3d6e4,
    name: "home-market-place___fr"
  }, {
    path: "/fr/home/market-place-2",
    component: _e35fcb9a,
    name: "home-market-place-2___fr"
  }, {
    path: "/fr/home/market-place-3",
    component: _e3439c98,
    name: "home-market-place-3___fr"
  }, {
    path: "/fr/home/market-place-4",
    component: _e3276d96,
    name: "home-market-place-4___fr"
  }, {
    path: "/fr/home/organic",
    component: _3107b97a,
    name: "home-organic___fr"
  }, {
    path: "/fr/home/technology",
    component: _4693eb38,
    name: "home-technology___fr"
  }, {
    path: "/fr/page/about-us",
    component: _74e2ccf4,
    name: "page-about-us___fr"
  }, {
    path: "/fr/page/blank",
    component: _d7a44a48,
    name: "page-blank___fr"
  }, {
    path: "/fr/page/contact-us",
    component: _c1c14cda,
    name: "page-contact-us___fr"
  }, {
    path: "/fr/page/faqs",
    component: _611af545,
    name: "page-faqs___fr"
  }, {
    path: "/fr/page/page-404",
    component: _31bbc0bc,
    name: "page-page-404___fr"
  }, {
    path: "/fr/post/default",
    component: _4f7209da,
    name: "post-default___fr"
  }, {
    path: "/fr/post/detail-2",
    component: _b9964826,
    name: "post-detail-2___fr"
  }, {
    path: "/fr/post/detail-3",
    component: _b97a1924,
    name: "post-detail-3___fr"
  }, {
    path: "/fr/post/detail-4",
    component: _b95dea22,
    name: "post-detail-4___fr"
  }, {
    path: "/fr/product/affiliate",
    component: _afcee456,
    name: "product-affiliate___fr"
  }, {
    path: "/fr/product/boxed",
    component: _95f8e49c,
    name: "product-boxed___fr"
  }, {
    path: "/fr/product/countdown",
    component: _63b5668e,
    name: "product-countdown___fr"
  }, {
    path: "/fr/product/extended",
    component: _63d2c8e1,
    name: "product-extended___fr"
  }, {
    path: "/fr/product/full-content",
    component: _2a037de3,
    name: "product-full-content___fr"
  }, {
    path: "/fr/product/groupped",
    component: _81828350,
    name: "product-groupped___fr"
  }, {
    path: "/fr/product/on-sale",
    component: _25f8b7fd,
    name: "product-on-sale___fr"
  }, {
    path: "/fr/product/out-of-stock",
    component: _176fe7e7,
    name: "product-out-of-stock___fr"
  }, {
    path: "/fr/product/sidebar",
    component: _0357d064,
    name: "product-sidebar___fr"
  }, {
    path: "/fr/shop/shop-carousel",
    component: _759e29f4,
    name: "shop-shop-carousel___fr"
  }, {
    path: "/fr/shop/shop-categories",
    component: _5964f37c,
    name: "shop-shop-categories___fr"
  }, {
    path: "/fr/shop/shop-fullwidth",
    component: _3ca7933e,
    name: "shop-shop-fullwidth___fr"
  }, {
    path: "/fr/shop/shop-sidebar",
    component: _2afbe1b4,
    name: "shop-shop-sidebar___fr"
  }, {
    path: "/fr/shop/shop-sidebar-without-banner",
    component: _669682f0,
    name: "shop-shop-sidebar-without-banner___fr"
  }, {
    path: "/fr/vendor/become-a-vendor",
    component: _b467278a,
    name: "vendor-become-a-vendor___fr"
  }, {
    path: "/fr/vendor/product-crud",
    component: _2d29352a,
    name: "vendor-product-crud___fr"
  }, {
    path: "/fr/vendor/store-list",
    component: _00ca40d9,
    name: "vendor-store-list___fr"
  }, {
    path: "/fr/vendor/store-list-2",
    component: _1cab4084,
    name: "vendor-store-list-2___fr"
  }, {
    path: "/fr/vendor/vendor-register",
    component: _036e7149,
    name: "vendor-vendor-register___fr"
  }, {
    path: "/fr/vendor/vendor-store",
    component: _5899d42b,
    name: "vendor-vendor-store___fr"
  }, {
    path: "/vendor/add/category",
    component: _69c43abb,
    name: "vendor-add-category___en"
  }, {
    path: "/vendor/add/description",
    component: _a2aa1f62,
    name: "vendor-add-description___en"
  }, {
    path: "/vendor/add/details",
    component: _ed3e3dd6,
    name: "vendor-add-details___en"
  }, {
    path: "/vendor/add/images",
    component: _574a0f16,
    name: "vendor-add-images___en"
  }, {
    path: "/vendor/add/title",
    component: _676bae2a,
    name: "vendor-add-title___en"
  }, {
    path: "/vendor/admin/metrics",
    component: _dce492f8,
    name: "vendor-admin-metrics___en"
  }, {
    path: "/vendor/admin/orders",
    component: _1d4b0534,
    name: "vendor-admin-orders___en"
  }, {
    path: "/vendor/admin/product-list",
    component: _3964476a,
    name: "vendor-admin-product-list___en"
  }, {
    path: "/vendor/admin/sales",
    component: _1badeee6,
    name: "vendor-admin-sales___en"
  }, {
    path: "/vendor/admin/shipments",
    component: _173c419d,
    name: "vendor-admin-shipments___en"
  }, {
    path: "/fr/vendor/add/category",
    component: _69c43abb,
    name: "vendor-add-category___fr"
  }, {
    path: "/fr/vendor/add/description",
    component: _a2aa1f62,
    name: "vendor-add-description___fr"
  }, {
    path: "/fr/vendor/add/details",
    component: _ed3e3dd6,
    name: "vendor-add-details___fr"
  }, {
    path: "/fr/vendor/add/images",
    component: _574a0f16,
    name: "vendor-add-images___fr"
  }, {
    path: "/fr/vendor/add/title",
    component: _676bae2a,
    name: "vendor-add-title___fr"
  }, {
    path: "/fr/vendor/admin/metrics",
    component: _dce492f8,
    name: "vendor-admin-metrics___fr"
  }, {
    path: "/fr/vendor/admin/orders",
    component: _1d4b0534,
    name: "vendor-admin-orders___fr"
  }, {
    path: "/fr/vendor/admin/product-list",
    component: _3964476a,
    name: "vendor-admin-product-list___fr"
  }, {
    path: "/fr/vendor/admin/sales",
    component: _1badeee6,
    name: "vendor-admin-sales___fr"
  }, {
    path: "/fr/vendor/admin/shipments",
    component: _173c419d,
    name: "vendor-admin-shipments___fr"
  }, {
    path: "/fr/vendor/admin/general/:id?",
    component: _5db91558,
    name: "vendor-admin-general-id___fr"
  }, {
    path: "/fr/vendor/admin/shipments/:id",
    component: _55380745,
    name: "vendor-admin-shipments-id___fr"
  }, {
    path: "/fr/vendor/admin/:id?",
    component: _0249d07b,
    name: "vendor-admin-id___fr"
  }, {
    path: "/fr/vendor/update/:id?",
    component: _a3548d7a,
    name: "vendor-update-id___fr"
  }, {
    path: "/vendor/admin/general/:id?",
    component: _5db91558,
    name: "vendor-admin-general-id___en"
  }, {
    path: "/vendor/admin/shipments/:id",
    component: _55380745,
    name: "vendor-admin-shipments-id___en"
  }, {
    path: "/fr/post/:id?",
    component: _69be2953,
    name: "post-id___fr"
  }, {
    path: "/fr/product/:id?",
    component: _469a8fc2,
    name: "product-id___fr"
  }, {
    path: "/fr/vendor/:id?",
    component: _5da7b1fb,
    name: "vendor-id___fr"
  }, {
    path: "/vendor/admin/:id?",
    component: _0249d07b,
    name: "vendor-admin-id___en"
  }, {
    path: "/vendor/update/:id?",
    component: _a3548d7a,
    name: "vendor-update-id___en"
  }, {
    path: "/post/:id?",
    component: _69be2953,
    name: "post-id___en"
  }, {
    path: "/product/:id?",
    component: _469a8fc2,
    name: "product-id___en"
  }, {
    path: "/vendor/:id?",
    component: _5da7b1fb,
    name: "vendor-id___en"
  }, {
    path: "/",
    component: _508bbbfa,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
