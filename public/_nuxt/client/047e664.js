(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1165:function(t,e,n){"use strict";n.r(e);var l=n(686),o=n(678),r=n(730),c=n(687),_=n(731),d=n(206),v={name:"BlogSmallThumbnail",components:{PostSmallThumbnail:_.a,PostHorizontal:c.a,Sidebar:r.a,Pagination:o.a},data:function(){return{blogPosts:d.posts}}},m=n(7),C={transition:"zoom",components:{BlogSmallThumbnail:Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ps-blog--sidebar"},[n("div",{staticClass:"ps-blog__left"},[t._l(t.blogPosts,(function(t){return n("PostSmallThumbnail",{key:t.id,attrs:{post:t}})})),t._v(" "),n("Pagination")],2),t._v(" "),n("div",{staticClass:"ps-blog__right"},[n("Sidebar")],1)])}),[],!1,null,"27b5c03f",null).exports,BreadCrumb2:l.a},data:function(){return{breadCrumb:[{text:"Home",url:"/"},{text:"Our Press"}]}}},f=Object(m.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ps-page--blog"},[n("div",{staticClass:"container"},[n("div",{staticClass:"ps-page__header"},[n("h1",[t._v("Our Press")]),t._v(" "),n("bread-crumb2",{attrs:{breadcrumb:t.breadCrumb}})],1),t._v(" "),n("blog-small-thumbnail")],1)])}),[],!1,null,"93c3a392",null);e.default=f.exports},678:function(t,e,n){"use strict";var l={name:"Pagination"},o=n(7),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ps-pagination"},[n("ul",{staticClass:"pagination"},[n("li",{staticClass:"active"},[n("a",{attrs:{href:"#"}},[t._v("1")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v("2")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v("3")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v("\n                Next Page\n                "),n("i",{staticClass:"icon-chevron-right"})])])])])}],!1,null,"59c112be",null);e.a=component.exports},686:function(t,e,n){"use strict";var l={name:"BreadCrumb2",props:{breadcrumb:{type:Array,default:[]},layout:{type:String,default:""}}},o=n(7),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ps-breadcrumb--2"},[n("ul",{staticClass:"breadcrumb"},[t._l(t.breadcrumb,(function(e){return[e.url?n("li",{key:e.text},[n("nuxt-link",{attrs:{to:e.url}},[n("a",[t._v(t._s(e.text))])])],1):n("li",[t._v(t._s(e.text))])]}))],2)])}),[],!1,null,"3426e94b",null);e.a=component.exports},687:function(t,e,n){"use strict";var l={props:{post:{type:Object,default:{}}}},o=n(7),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"ps-post ps-post--horizontal"},[n("div",{staticClass:"ps-post__thumbnail"},[n("nuxt-link",{staticClass:"ps-post__overlay",attrs:{to:"/blog/"+t.post.id}}),t._v(" "),n("img",{attrs:{src:t.post.thumbnail,alt:t.post.title}})],1),t._v(" "),n("div",{staticClass:"ps-post__content"},[n("div",{staticClass:"ps-post__top"},[n("div",{staticClass:"ps-post__meta"},t._l(t.post.categories,(function(e){return n("nuxt-link",{key:e.id,attrs:{to:"/blog"}},[t._v("\n                    "+t._s(e.text)+"\n                ")])})),1),t._v(" "),n("nuxt-link",{staticClass:"ps-post__title",attrs:{to:"/blog/"+t.post.id}},[t._v("\n                "+t._s(t.post.title)+"\n            ")]),t._v(" "),t._m(0)],1),t._v(" "),n("p",[t._v("\n            December 17, 2019 by\n            "),n("nuxt-link",{attrs:{to:"/blog"}},[t._v("\n                drfurion\n            ")])],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ps-post__desc"},[n("p",[t._v("\n                    Lorem ipsum dolor sit amet, dolor siterim consectetur\n                    adipiscing elit. Phasellus duio faucibus est sed…\n                ")])])}],!1,null,null,null);e.a=component.exports},730:function(t,e,n){"use strict";var l=n(206),o={name:"Sidebar",data:function(){return{blogCategories:l.categories,blogTags:l.categories,recentPosts:l.recentPosts}}},r=n(7),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[t._m(0),t._v(" "),n("aside",{staticClass:"widget widget--blog widget--categories"},[n("h3",{staticClass:"widget__title"},[t._v("Categories")]),t._v(" "),n("div",{staticClass:"widget__content"},[n("ul",t._l(t.blogCategories,(function(e){return n("li",{key:e.id},[n("nuxt-link",{attrs:{to:"/blog"}},[t._v("\n                        "+t._s(e.text)+"\n                    ")])],1)})),0)])]),t._v(" "),n("aside",{staticClass:"widget widget--blog widget--recent-post"},[n("h3",{staticClass:"widget__title"},[t._v("Recent Posts")]),t._v(" "),n("div",{staticClass:"widget__content"},[t.recentPosts.length>0?t._l(t.recentPosts,(function(e){return n("nuxt-link",{key:e.id,attrs:{to:"/post/"+e.id}},[t._v("\n                    "+t._s(e.title)+"\n                ")])})):n("p",[t._v("No post.")])],2)]),t._v(" "),n("aside",{staticClass:"widget widget--blog widget--recent-comments"},[n("h3",{staticClass:"widget__title"},[t._v("Recent Comments")]),t._v(" "),n("div",{staticClass:"widget__content"},[n("p",[n("nuxt-link",{attrs:{to:"/blog"}},[n("a",{staticClass:"author"},[t._v("drfurion")])]),t._v("\n                on\n                "),n("nuxt-link",{attrs:{to:"/blog"}},[n("a",[t._v(" Dashboard")])])],1),t._v(" "),n("p",[n("nuxt-link",{attrs:{to:"/blog"}},[n("a",{staticClass:"author"},[t._v("logan")])]),t._v("\n                on\n                "),n("nuxt-link",{attrs:{to:"/blog"}},[n("a",[t._v(" Rayban Rounded Sunglass Brown Color")])])],1),t._v(" "),n("p",[n("nuxt-link",{attrs:{to:"/blog"}},[n("a",{staticClass:"author"},[t._v("logan")])]),t._v("\n                on\n                "),n("nuxt-link",{attrs:{to:"/blog"}},[n("a",[t._v(" Sound Intone I65 Earphone White Version")])])],1),t._v(" "),n("p",[n("nuxt-link",{attrs:{to:"/blog"}},[n("a",{staticClass:"author"},[t._v("logan")])]),t._v("\n                on\n                "),n("nuxt-link",{attrs:{to:"/blog"}},[n("a",[t._v(" Sleeve Linen Blend Caro Pane Shirt")])])],1)])]),t._v(" "),n("aside",{staticClass:"widget widget--blog widget--tags"},[n("h3",{staticClass:"widget__title"},[t._v("Popular Tags")]),t._v(" "),n("div",{staticClass:"widget__content"},t._l(t.blogCategories,(function(e){return n("nuxt-link",{key:e.id,attrs:{to:"/blog"}},[t._v("\n                "+t._s(e.text)+"\n            ")])})),1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"widget widget--blog widget--search"},[n("form",{staticClass:"ps-form--widget-search",attrs:{action:"do_action",method:"get"}},[n("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."}}),t._v(" "),n("button",[n("i",{staticClass:"icon-magnifier"})])])])}],!1,null,"d0701be6",null);e.a=component.exports},731:function(t,e,n){"use strict";var l={props:{post:{type:Object,default:{}}}},o=n(7),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"ps-post ps-post--small-thumbnail"},[n("div",{staticClass:"ps-post__thumbnail"},[n("nuxt-link",{staticClass:"ps-post__overlay",attrs:{to:"/blog/"+t.post.id}}),t._v(" "),n("img",{attrs:{src:t.post.thumbnail,alt:t.post.title}}),t._v(" "),t.post.badge?n("div",{staticClass:"ps-post__badge"},[n("i",{staticClass:"{post.badge}"})]):t._e()],1),t._v(" "),n("div",{staticClass:"ps-post__content"},[n("div",{staticClass:"ps-post__top"},[n("div",{staticClass:"ps-post__meta"},t._l(t.post.categories,(function(e){return n("nuxt-link",{key:e.id,attrs:{to:"/blog"}},[t._v("\n                    "+t._s(e.text)+"\n                ")])})),1),t._v(" "),n("nuxt-link",{staticClass:"ps-post__title",attrs:{to:"/blog/"+t.post.id}},[t._v("\n                "+t._s(t.post.title)+"\n            ")]),t._v(" "),t._m(0)],1),t._v(" "),n("p",[t._v("\n            December 17, 2019 by\n            "),n("nuxt-link",{attrs:{to:"/blog"}},[t._v("\n                drfurion\n            ")])],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ps-post__desc"},[n("p",[t._v("\n                    Lorem ipsum dolor sit amet, dolor siterim consectetur\n                    adipiscing elit. Phasellus duio faucibus est sed…\n                ")])])}],!1,null,null,null);e.a=component.exports}}]);