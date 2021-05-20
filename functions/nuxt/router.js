import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3f627686 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _64883168 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4ea38d80 = () => interopDefault(import('..\\pages\\search\\index.vue' /* webpackChunkName: "pages/search/index" */))
const _1687a29c = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _254025af = () => interopDefault(import('..\\pages\\account\\addresses.vue' /* webpackChunkName: "pages/account/addresses" */))
const _042a1c6e = () => interopDefault(import('..\\pages\\account\\checkout.vue' /* webpackChunkName: "pages/account/checkout" */))
const _6897b29c = () => interopDefault(import('..\\pages\\account\\compare.vue' /* webpackChunkName: "pages/account/compare" */))
const _d576e698 = () => interopDefault(import('..\\pages\\account\\edit-address.vue' /* webpackChunkName: "pages/account/edit-address" */))
const _5cc80498 = () => interopDefault(import('..\\pages\\account\\invoice-detail.vue' /* webpackChunkName: "pages/account/invoice-detail" */))
const _6f9df769 = () => interopDefault(import('..\\pages\\account\\invoices.vue' /* webpackChunkName: "pages/account/invoices" */))
const _2b2e3f14 = () => interopDefault(import('..\\pages\\account\\login.vue' /* webpackChunkName: "pages/account/login" */))
const _844fe39a = () => interopDefault(import('..\\pages\\account\\my-orders.vue' /* webpackChunkName: "pages/account/my-orders" */))
const _cdfe2d16 = () => interopDefault(import('..\\pages\\account\\notifications.vue' /* webpackChunkName: "pages/account/notifications" */))
const _ef10b95a = () => interopDefault(import('..\\pages\\account\\payment.vue' /* webpackChunkName: "pages/account/payment" */))
const _a4ee8936 = () => interopDefault(import('..\\pages\\account\\recent-viewed-product.vue' /* webpackChunkName: "pages/account/recent-viewed-product" */))
const _40f1dca6 = () => interopDefault(import('..\\pages\\account\\register.vue' /* webpackChunkName: "pages/account/register" */))
const _e207e39e = () => interopDefault(import('..\\pages\\account\\shipping.vue' /* webpackChunkName: "pages/account/shipping" */))
const _71cf9a72 = () => interopDefault(import('..\\pages\\account\\shopping-cart.vue' /* webpackChunkName: "pages/account/shopping-cart" */))
const _644991ad = () => interopDefault(import('..\\pages\\account\\user-information.vue' /* webpackChunkName: "pages/account/user-information" */))
const _d5c5fa70 = () => interopDefault(import('..\\pages\\account\\wishlist.vue' /* webpackChunkName: "pages/account/wishlist" */))
const _8d572fd6 = () => interopDefault(import('..\\pages\\blog\\blog-left-sidebar.vue' /* webpackChunkName: "pages/blog/blog-left-sidebar" */))
const _0451941d = () => interopDefault(import('..\\pages\\blog\\blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _00190488 = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _17e104f7 = () => interopDefault(import('..\\pages\\blog\\blog-small-thumbnail.vue' /* webpackChunkName: "pages/blog/blog-small-thumbnail" */))
const _d0aa42b0 = () => interopDefault(import('..\\pages\\home\\auto-part.vue' /* webpackChunkName: "pages/home/auto-part" */))
const _6fe12096 = () => interopDefault(import('..\\pages\\home\\electronic.vue' /* webpackChunkName: "pages/home/electronic" */))
const _ba41be6e = () => interopDefault(import('..\\pages\\home\\furniture.vue' /* webpackChunkName: "pages/home/furniture" */))
const _29a1f02f = () => interopDefault(import('..\\pages\\home\\market-place.vue' /* webpackChunkName: "pages/home/market-place" */))
const _43539194 = () => interopDefault(import('..\\pages\\home\\market-place-2.vue' /* webpackChunkName: "pages/home/market-place-2" */))
const _4361a915 = () => interopDefault(import('..\\pages\\home\\market-place-3.vue' /* webpackChunkName: "pages/home/market-place-3" */))
const _436fc096 = () => interopDefault(import('..\\pages\\home\\market-place-4.vue' /* webpackChunkName: "pages/home/market-place-4" */))
const _7fa871fc = () => interopDefault(import('..\\pages\\home\\organic.vue' /* webpackChunkName: "pages/home/organic" */))
const _47d34b76 = () => interopDefault(import('..\\pages\\home\\technology.vue' /* webpackChunkName: "pages/home/technology" */))
const _607cd707 = () => interopDefault(import('..\\pages\\page\\about-us.vue' /* webpackChunkName: "pages/page/about-us" */))
const _f8a1160a = () => interopDefault(import('..\\pages\\page\\blank.vue' /* webpackChunkName: "pages/page/blank" */))
const _37743ad4 = () => interopDefault(import('..\\pages\\page\\contact-us.vue' /* webpackChunkName: "pages/page/contact-us" */))
const _0dfe1b46 = () => interopDefault(import('..\\pages\\page\\faqs.vue' /* webpackChunkName: "pages/page/faqs" */))
const _fbdf45ba = () => interopDefault(import('..\\pages\\page\\page-404.vue' /* webpackChunkName: "pages/page/page-404" */))
const _99b63d92 = () => interopDefault(import('..\\pages\\post\\default.vue' /* webpackChunkName: "pages/post/default" */))
const _94461fa0 = () => interopDefault(import('..\\pages\\post\\detail-2.vue' /* webpackChunkName: "pages/post/detail-2" */))
const _9429f09e = () => interopDefault(import('..\\pages\\post\\detail-3.vue' /* webpackChunkName: "pages/post/detail-3" */))
const _940dc19c = () => interopDefault(import('..\\pages\\post\\detail-4.vue' /* webpackChunkName: "pages/post/detail-4" */))
const _545202d8 = () => interopDefault(import('..\\pages\\product\\affiliate.vue' /* webpackChunkName: "pages/product/affiliate" */))
const _50edfc35 = () => interopDefault(import('..\\pages\\product\\boxed.vue' /* webpackChunkName: "pages/product/boxed" */))
const _7a5ec1bc = () => interopDefault(import('..\\pages\\product\\countdown.vue' /* webpackChunkName: "pages/product/countdown" */))
const _79e5277e = () => interopDefault(import('..\\pages\\product\\extended.vue' /* webpackChunkName: "pages/product/extended" */))
const _1c5b4600 = () => interopDefault(import('..\\pages\\product\\full-content.vue' /* webpackChunkName: "pages/product/full-content" */))
const _555dc616 = () => interopDefault(import('..\\pages\\product\\groupped.vue' /* webpackChunkName: "pages/product/groupped" */))
const _710191c0 = () => interopDefault(import('..\\pages\\product\\on-sale.vue' /* webpackChunkName: "pages/product/on-sale" */))
const _09c7b004 = () => interopDefault(import('..\\pages\\product\\out-of-stock.vue' /* webpackChunkName: "pages/product/out-of-stock" */))
const _4e60aa27 = () => interopDefault(import('..\\pages\\product\\sidebar.vue' /* webpackChunkName: "pages/product/sidebar" */))
const _aecc1c92 = () => interopDefault(import('..\\pages\\shop\\shop-carousel.vue' /* webpackChunkName: "pages/shop/shop-carousel" */))
const _fee0b69a = () => interopDefault(import('..\\pages\\shop\\shop-categories.vue' /* webpackChunkName: "pages/shop/shop-categories" */))
const _6b6405d0 = () => interopDefault(import('..\\pages\\shop\\shop-fullwidth.vue' /* webpackChunkName: "pages/shop/shop-fullwidth" */))
const _6574ee55 = () => interopDefault(import('..\\pages\\shop\\shop-sidebar.vue' /* webpackChunkName: "pages/shop/shop-sidebar" */))
const _498fbb79 = () => interopDefault(import('..\\pages\\shop\\shop-sidebar-without-banner.vue' /* webpackChunkName: "pages/shop/shop-sidebar-without-banner" */))
const _6c89eec8 = () => interopDefault(import('..\\pages\\vendor\\become-a-vendor.vue' /* webpackChunkName: "pages/vendor/become-a-vendor" */))
const _77229404 = () => interopDefault(import('..\\pages\\vendor\\product-crud.vue' /* webpackChunkName: "pages/vendor/product-crud" */))
const _9102cba8 = () => interopDefault(import('..\\pages\\vendor\\store-list.vue' /* webpackChunkName: "pages/vendor/store-list" */))
const _66a49f5e = () => interopDefault(import('..\\pages\\vendor\\store-list-2.vue' /* webpackChunkName: "pages/vendor/store-list-2" */))
const _6ba81854 = () => interopDefault(import('..\\pages\\vendor\\vendor-register.vue' /* webpackChunkName: "pages/vendor/vendor-register" */))
const _339d24be = () => interopDefault(import('..\\pages\\vendor\\vendor-store.vue' /* webpackChunkName: "pages/vendor/vendor-store" */))
const _71dbd7a6 = () => interopDefault(import('..\\pages\\vendor\\add\\category.vue' /* webpackChunkName: "pages/vendor/add/category" */))
const _d5d36cc6 = () => interopDefault(import('..\\pages\\vendor\\add\\description.vue' /* webpackChunkName: "pages/vendor/add/description" */))
const _63191163 = () => interopDefault(import('..\\pages\\vendor\\add\\details.vue' /* webpackChunkName: "pages/vendor/add/details" */))
const _ac56f332 = () => interopDefault(import('..\\pages\\vendor\\add\\images.vue' /* webpackChunkName: "pages/vendor/add/images" */))
const _574e14b9 = () => interopDefault(import('..\\pages\\vendor\\add\\title.vue' /* webpackChunkName: "pages/vendor/add/title" */))
const _7de59cf6 = () => interopDefault(import('..\\pages\\vendor\\admin\\metrics.vue' /* webpackChunkName: "pages/vendor/admin/metrics" */))
const _eff8eefc = () => interopDefault(import('..\\pages\\vendor\\admin\\orders.vue' /* webpackChunkName: "pages/vendor/admin/orders" */))
const _527e2d19 = () => interopDefault(import('..\\pages\\vendor\\admin\\product-list.vue' /* webpackChunkName: "pages/vendor/admin/product-list" */))
const _88683902 = () => interopDefault(import('..\\pages\\vendor\\admin\\sales.vue' /* webpackChunkName: "pages/vendor/admin/sales" */))
const _36b93676 = () => interopDefault(import('..\\pages\\vendor\\admin\\shipments\\index.vue' /* webpackChunkName: "pages/vendor/admin/shipments/index" */))
const _d57ca4a2 = () => interopDefault(import('..\\pages\\vendor\\admin\\general\\_id.vue' /* webpackChunkName: "pages/vendor/admin/general/_id" */))
const _ee234344 = () => interopDefault(import('..\\pages\\vendor\\admin\\shipments\\_id.vue' /* webpackChunkName: "pages/vendor/admin/shipments/_id" */))
const _5f2a8026 = () => interopDefault(import('..\\pages\\vendor\\admin\\_id.vue' /* webpackChunkName: "pages/vendor/admin/_id" */))
const _0efe67df = () => interopDefault(import('..\\pages\\vendor\\update\\_id.vue' /* webpackChunkName: "pages/vendor/update/_id" */))
const _64d591a0 = () => interopDefault(import('..\\pages\\post\\_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _b77679f6 = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _4512e008 = () => interopDefault(import('..\\pages\\vendor\\_id.vue' /* webpackChunkName: "pages/vendor/_id" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _3f627686,
    name: "blog___en"
  }, {
    path: "/fr",
    component: _64883168,
    name: "index___fr"
  }, {
    path: "/search",
    component: _4ea38d80,
    name: "search___en"
  }, {
    path: "/shop",
    component: _1687a29c,
    name: "shop___en"
  }, {
    path: "/account/addresses",
    component: _254025af,
    name: "account-addresses___en"
  }, {
    path: "/account/checkout",
    component: _042a1c6e,
    name: "account-checkout___en"
  }, {
    path: "/account/compare",
    component: _6897b29c,
    name: "account-compare___en"
  }, {
    path: "/account/edit-address",
    component: _d576e698,
    name: "account-edit-address___en"
  }, {
    path: "/account/invoice-detail",
    component: _5cc80498,
    name: "account-invoice-detail___en"
  }, {
    path: "/account/invoices",
    component: _6f9df769,
    name: "account-invoices___en"
  }, {
    path: "/account/login",
    component: _2b2e3f14,
    name: "account-login___en"
  }, {
    path: "/account/my-orders",
    component: _844fe39a,
    name: "account-my-orders___en"
  }, {
    path: "/account/notifications",
    component: _cdfe2d16,
    name: "account-notifications___en"
  }, {
    path: "/account/payment",
    component: _ef10b95a,
    name: "account-payment___en"
  }, {
    path: "/account/recent-viewed-product",
    component: _a4ee8936,
    name: "account-recent-viewed-product___en"
  }, {
    path: "/account/register",
    component: _40f1dca6,
    name: "account-register___en"
  }, {
    path: "/account/shipping",
    component: _e207e39e,
    name: "account-shipping___en"
  }, {
    path: "/account/shopping-cart",
    component: _71cf9a72,
    name: "account-shopping-cart___en"
  }, {
    path: "/account/user-information",
    component: _644991ad,
    name: "account-user-information___en"
  }, {
    path: "/account/wishlist",
    component: _d5c5fa70,
    name: "account-wishlist___en"
  }, {
    path: "/blog/blog-left-sidebar",
    component: _8d572fd6,
    name: "blog-blog-left-sidebar___en"
  }, {
    path: "/blog/blog-list",
    component: _0451941d,
    name: "blog-blog-list___en"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _00190488,
    name: "blog-blog-right-sidebar___en"
  }, {
    path: "/blog/blog-small-thumbnail",
    component: _17e104f7,
    name: "blog-blog-small-thumbnail___en"
  }, {
    path: "/fr/blog",
    component: _3f627686,
    name: "blog___fr"
  }, {
    path: "/fr/search",
    component: _4ea38d80,
    name: "search___fr"
  }, {
    path: "/fr/shop",
    component: _1687a29c,
    name: "shop___fr"
  }, {
    path: "/home/auto-part",
    component: _d0aa42b0,
    name: "home-auto-part___en"
  }, {
    path: "/home/electronic",
    component: _6fe12096,
    name: "home-electronic___en"
  }, {
    path: "/home/furniture",
    component: _ba41be6e,
    name: "home-furniture___en"
  }, {
    path: "/home/market-place",
    component: _29a1f02f,
    name: "home-market-place___en"
  }, {
    path: "/home/market-place-2",
    component: _43539194,
    name: "home-market-place-2___en"
  }, {
    path: "/home/market-place-3",
    component: _4361a915,
    name: "home-market-place-3___en"
  }, {
    path: "/home/market-place-4",
    component: _436fc096,
    name: "home-market-place-4___en"
  }, {
    path: "/home/organic",
    component: _7fa871fc,
    name: "home-organic___en"
  }, {
    path: "/home/technology",
    component: _47d34b76,
    name: "home-technology___en"
  }, {
    path: "/page/about-us",
    component: _607cd707,
    name: "page-about-us___en"
  }, {
    path: "/page/blank",
    component: _f8a1160a,
    name: "page-blank___en"
  }, {
    path: "/page/contact-us",
    component: _37743ad4,
    name: "page-contact-us___en"
  }, {
    path: "/page/faqs",
    component: _0dfe1b46,
    name: "page-faqs___en"
  }, {
    path: "/page/page-404",
    component: _fbdf45ba,
    name: "page-page-404___en"
  }, {
    path: "/post/default",
    component: _99b63d92,
    name: "post-default___en"
  }, {
    path: "/post/detail-2",
    component: _94461fa0,
    name: "post-detail-2___en"
  }, {
    path: "/post/detail-3",
    component: _9429f09e,
    name: "post-detail-3___en"
  }, {
    path: "/post/detail-4",
    component: _940dc19c,
    name: "post-detail-4___en"
  }, {
    path: "/product/affiliate",
    component: _545202d8,
    name: "product-affiliate___en"
  }, {
    path: "/product/boxed",
    component: _50edfc35,
    name: "product-boxed___en"
  }, {
    path: "/product/countdown",
    component: _7a5ec1bc,
    name: "product-countdown___en"
  }, {
    path: "/product/extended",
    component: _79e5277e,
    name: "product-extended___en"
  }, {
    path: "/product/full-content",
    component: _1c5b4600,
    name: "product-full-content___en"
  }, {
    path: "/product/groupped",
    component: _555dc616,
    name: "product-groupped___en"
  }, {
    path: "/product/on-sale",
    component: _710191c0,
    name: "product-on-sale___en"
  }, {
    path: "/product/out-of-stock",
    component: _09c7b004,
    name: "product-out-of-stock___en"
  }, {
    path: "/product/sidebar",
    component: _4e60aa27,
    name: "product-sidebar___en"
  }, {
    path: "/shop/shop-carousel",
    component: _aecc1c92,
    name: "shop-shop-carousel___en"
  }, {
    path: "/shop/shop-categories",
    component: _fee0b69a,
    name: "shop-shop-categories___en"
  }, {
    path: "/shop/shop-fullwidth",
    component: _6b6405d0,
    name: "shop-shop-fullwidth___en"
  }, {
    path: "/shop/shop-sidebar",
    component: _6574ee55,
    name: "shop-shop-sidebar___en"
  }, {
    path: "/shop/shop-sidebar-without-banner",
    component: _498fbb79,
    name: "shop-shop-sidebar-without-banner___en"
  }, {
    path: "/vendor/become-a-vendor",
    component: _6c89eec8,
    name: "vendor-become-a-vendor___en"
  }, {
    path: "/vendor/product-crud",
    component: _77229404,
    name: "vendor-product-crud___en"
  }, {
    path: "/vendor/store-list",
    component: _9102cba8,
    name: "vendor-store-list___en"
  }, {
    path: "/vendor/store-list-2",
    component: _66a49f5e,
    name: "vendor-store-list-2___en"
  }, {
    path: "/vendor/vendor-register",
    component: _6ba81854,
    name: "vendor-vendor-register___en"
  }, {
    path: "/vendor/vendor-store",
    component: _339d24be,
    name: "vendor-vendor-store___en"
  }, {
    path: "/fr/account/addresses",
    component: _254025af,
    name: "account-addresses___fr"
  }, {
    path: "/fr/account/checkout",
    component: _042a1c6e,
    name: "account-checkout___fr"
  }, {
    path: "/fr/account/compare",
    component: _6897b29c,
    name: "account-compare___fr"
  }, {
    path: "/fr/account/edit-address",
    component: _d576e698,
    name: "account-edit-address___fr"
  }, {
    path: "/fr/account/invoice-detail",
    component: _5cc80498,
    name: "account-invoice-detail___fr"
  }, {
    path: "/fr/account/invoices",
    component: _6f9df769,
    name: "account-invoices___fr"
  }, {
    path: "/fr/account/login",
    component: _2b2e3f14,
    name: "account-login___fr"
  }, {
    path: "/fr/account/my-orders",
    component: _844fe39a,
    name: "account-my-orders___fr"
  }, {
    path: "/fr/account/notifications",
    component: _cdfe2d16,
    name: "account-notifications___fr"
  }, {
    path: "/fr/account/payment",
    component: _ef10b95a,
    name: "account-payment___fr"
  }, {
    path: "/fr/account/recent-viewed-product",
    component: _a4ee8936,
    name: "account-recent-viewed-product___fr"
  }, {
    path: "/fr/account/register",
    component: _40f1dca6,
    name: "account-register___fr"
  }, {
    path: "/fr/account/shipping",
    component: _e207e39e,
    name: "account-shipping___fr"
  }, {
    path: "/fr/account/shopping-cart",
    component: _71cf9a72,
    name: "account-shopping-cart___fr"
  }, {
    path: "/fr/account/user-information",
    component: _644991ad,
    name: "account-user-information___fr"
  }, {
    path: "/fr/account/wishlist",
    component: _d5c5fa70,
    name: "account-wishlist___fr"
  }, {
    path: "/fr/blog/blog-left-sidebar",
    component: _8d572fd6,
    name: "blog-blog-left-sidebar___fr"
  }, {
    path: "/fr/blog/blog-list",
    component: _0451941d,
    name: "blog-blog-list___fr"
  }, {
    path: "/fr/blog/blog-right-sidebar",
    component: _00190488,
    name: "blog-blog-right-sidebar___fr"
  }, {
    path: "/fr/blog/blog-small-thumbnail",
    component: _17e104f7,
    name: "blog-blog-small-thumbnail___fr"
  }, {
    path: "/fr/home/auto-part",
    component: _d0aa42b0,
    name: "home-auto-part___fr"
  }, {
    path: "/fr/home/electronic",
    component: _6fe12096,
    name: "home-electronic___fr"
  }, {
    path: "/fr/home/furniture",
    component: _ba41be6e,
    name: "home-furniture___fr"
  }, {
    path: "/fr/home/market-place",
    component: _29a1f02f,
    name: "home-market-place___fr"
  }, {
    path: "/fr/home/market-place-2",
    component: _43539194,
    name: "home-market-place-2___fr"
  }, {
    path: "/fr/home/market-place-3",
    component: _4361a915,
    name: "home-market-place-3___fr"
  }, {
    path: "/fr/home/market-place-4",
    component: _436fc096,
    name: "home-market-place-4___fr"
  }, {
    path: "/fr/home/organic",
    component: _7fa871fc,
    name: "home-organic___fr"
  }, {
    path: "/fr/home/technology",
    component: _47d34b76,
    name: "home-technology___fr"
  }, {
    path: "/fr/page/about-us",
    component: _607cd707,
    name: "page-about-us___fr"
  }, {
    path: "/fr/page/blank",
    component: _f8a1160a,
    name: "page-blank___fr"
  }, {
    path: "/fr/page/contact-us",
    component: _37743ad4,
    name: "page-contact-us___fr"
  }, {
    path: "/fr/page/faqs",
    component: _0dfe1b46,
    name: "page-faqs___fr"
  }, {
    path: "/fr/page/page-404",
    component: _fbdf45ba,
    name: "page-page-404___fr"
  }, {
    path: "/fr/post/default",
    component: _99b63d92,
    name: "post-default___fr"
  }, {
    path: "/fr/post/detail-2",
    component: _94461fa0,
    name: "post-detail-2___fr"
  }, {
    path: "/fr/post/detail-3",
    component: _9429f09e,
    name: "post-detail-3___fr"
  }, {
    path: "/fr/post/detail-4",
    component: _940dc19c,
    name: "post-detail-4___fr"
  }, {
    path: "/fr/product/affiliate",
    component: _545202d8,
    name: "product-affiliate___fr"
  }, {
    path: "/fr/product/boxed",
    component: _50edfc35,
    name: "product-boxed___fr"
  }, {
    path: "/fr/product/countdown",
    component: _7a5ec1bc,
    name: "product-countdown___fr"
  }, {
    path: "/fr/product/extended",
    component: _79e5277e,
    name: "product-extended___fr"
  }, {
    path: "/fr/product/full-content",
    component: _1c5b4600,
    name: "product-full-content___fr"
  }, {
    path: "/fr/product/groupped",
    component: _555dc616,
    name: "product-groupped___fr"
  }, {
    path: "/fr/product/on-sale",
    component: _710191c0,
    name: "product-on-sale___fr"
  }, {
    path: "/fr/product/out-of-stock",
    component: _09c7b004,
    name: "product-out-of-stock___fr"
  }, {
    path: "/fr/product/sidebar",
    component: _4e60aa27,
    name: "product-sidebar___fr"
  }, {
    path: "/fr/shop/shop-carousel",
    component: _aecc1c92,
    name: "shop-shop-carousel___fr"
  }, {
    path: "/fr/shop/shop-categories",
    component: _fee0b69a,
    name: "shop-shop-categories___fr"
  }, {
    path: "/fr/shop/shop-fullwidth",
    component: _6b6405d0,
    name: "shop-shop-fullwidth___fr"
  }, {
    path: "/fr/shop/shop-sidebar",
    component: _6574ee55,
    name: "shop-shop-sidebar___fr"
  }, {
    path: "/fr/shop/shop-sidebar-without-banner",
    component: _498fbb79,
    name: "shop-shop-sidebar-without-banner___fr"
  }, {
    path: "/fr/vendor/become-a-vendor",
    component: _6c89eec8,
    name: "vendor-become-a-vendor___fr"
  }, {
    path: "/fr/vendor/product-crud",
    component: _77229404,
    name: "vendor-product-crud___fr"
  }, {
    path: "/fr/vendor/store-list",
    component: _9102cba8,
    name: "vendor-store-list___fr"
  }, {
    path: "/fr/vendor/store-list-2",
    component: _66a49f5e,
    name: "vendor-store-list-2___fr"
  }, {
    path: "/fr/vendor/vendor-register",
    component: _6ba81854,
    name: "vendor-vendor-register___fr"
  }, {
    path: "/fr/vendor/vendor-store",
    component: _339d24be,
    name: "vendor-vendor-store___fr"
  }, {
    path: "/vendor/add/category",
    component: _71dbd7a6,
    name: "vendor-add-category___en"
  }, {
    path: "/vendor/add/description",
    component: _d5d36cc6,
    name: "vendor-add-description___en"
  }, {
    path: "/vendor/add/details",
    component: _63191163,
    name: "vendor-add-details___en"
  }, {
    path: "/vendor/add/images",
    component: _ac56f332,
    name: "vendor-add-images___en"
  }, {
    path: "/vendor/add/title",
    component: _574e14b9,
    name: "vendor-add-title___en"
  }, {
    path: "/vendor/admin/metrics",
    component: _7de59cf6,
    name: "vendor-admin-metrics___en"
  }, {
    path: "/vendor/admin/orders",
    component: _eff8eefc,
    name: "vendor-admin-orders___en"
  }, {
    path: "/vendor/admin/product-list",
    component: _527e2d19,
    name: "vendor-admin-product-list___en"
  }, {
    path: "/vendor/admin/sales",
    component: _88683902,
    name: "vendor-admin-sales___en"
  }, {
    path: "/vendor/admin/shipments",
    component: _36b93676,
    name: "vendor-admin-shipments___en"
  }, {
    path: "/fr/vendor/add/category",
    component: _71dbd7a6,
    name: "vendor-add-category___fr"
  }, {
    path: "/fr/vendor/add/description",
    component: _d5d36cc6,
    name: "vendor-add-description___fr"
  }, {
    path: "/fr/vendor/add/details",
    component: _63191163,
    name: "vendor-add-details___fr"
  }, {
    path: "/fr/vendor/add/images",
    component: _ac56f332,
    name: "vendor-add-images___fr"
  }, {
    path: "/fr/vendor/add/title",
    component: _574e14b9,
    name: "vendor-add-title___fr"
  }, {
    path: "/fr/vendor/admin/metrics",
    component: _7de59cf6,
    name: "vendor-admin-metrics___fr"
  }, {
    path: "/fr/vendor/admin/orders",
    component: _eff8eefc,
    name: "vendor-admin-orders___fr"
  }, {
    path: "/fr/vendor/admin/product-list",
    component: _527e2d19,
    name: "vendor-admin-product-list___fr"
  }, {
    path: "/fr/vendor/admin/sales",
    component: _88683902,
    name: "vendor-admin-sales___fr"
  }, {
    path: "/fr/vendor/admin/shipments",
    component: _36b93676,
    name: "vendor-admin-shipments___fr"
  }, {
    path: "/fr/vendor/admin/general/:id?",
    component: _d57ca4a2,
    name: "vendor-admin-general-id___fr"
  }, {
    path: "/fr/vendor/admin/shipments/:id",
    component: _ee234344,
    name: "vendor-admin-shipments-id___fr"
  }, {
    path: "/fr/vendor/admin/:id?",
    component: _5f2a8026,
    name: "vendor-admin-id___fr"
  }, {
    path: "/fr/vendor/update/:id?",
    component: _0efe67df,
    name: "vendor-update-id___fr"
  }, {
    path: "/vendor/admin/general/:id?",
    component: _d57ca4a2,
    name: "vendor-admin-general-id___en"
  }, {
    path: "/vendor/admin/shipments/:id",
    component: _ee234344,
    name: "vendor-admin-shipments-id___en"
  }, {
    path: "/fr/post/:id?",
    component: _64d591a0,
    name: "post-id___fr"
  }, {
    path: "/fr/product/:id?",
    component: _b77679f6,
    name: "product-id___fr"
  }, {
    path: "/fr/vendor/:id?",
    component: _4512e008,
    name: "vendor-id___fr"
  }, {
    path: "/vendor/admin/:id?",
    component: _5f2a8026,
    name: "vendor-admin-id___en"
  }, {
    path: "/vendor/update/:id?",
    component: _0efe67df,
    name: "vendor-update-id___en"
  }, {
    path: "/post/:id?",
    component: _64d591a0,
    name: "post-id___en"
  }, {
    path: "/product/:id?",
    component: _b77679f6,
    name: "product-id___en"
  }, {
    path: "/vendor/:id?",
    component: _4512e008,
    name: "vendor-id___en"
  }, {
    path: "/",
    component: _64883168,
    name: "index___en"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
