(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1175:function(t,e,o){"use strict";o.r(e);var n=o(485),r=o(672),l=o(673),c=o(716),h={name:"post-detail-4",components:{PostDetailSidebar:o(782).a,PostDetailDefault:c.a,RelatedPosts:l.a,PostComments:r.a,BreadCrumb:n.a},transition:"zoom",data:function(){return{breadCrumb:[{text:"Home",url:"/"},{text:"Blog Detail"}]}}},v=o(7),component=Object(v.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ps-page--blog"},[e("div",{staticClass:"container"},[e("div",{staticClass:"ps-blog--sidebar reverse"},[e("div",{staticClass:"ps-blog__left"},[e("post-detail-sidebar")],1),this._v(" "),e("div",{staticClass:"ps-blog__right"},[e("sidebar-post")],1)])])])}),[],!1,null,"0bb2ee2f",null);e.default=component.exports},485:function(t,e,o){"use strict";var n={name:"BreadCrumb",props:{breadcrumb:{type:Array,default:[]},layout:{type:String,default:""}}},r=o(7),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ps-breadcrumb"},[o("div",{class:"fullwidth"===t.layout?"ps-container":"container"},[o("ul",{staticClass:"breadcrumb"},[t._l(t.breadcrumb,(function(e){return[e.url?o("li",{key:e.text},[o("nuxt-link",{attrs:{to:e.url}},[o("a",[t._v(t._s(e.text))])])],1):o("li",[t._v(t._s(e.text))])]}))],2)])])}),[],!1,null,"41971152",null);e.a=component.exports},662:function(t,e,o){"use strict";var n={props:{post:{type:Object,default:{}}}},r=o(7),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"ps-post"},[o("div",{staticClass:"ps-post__thumbnail"},[o("nuxt-link",{staticClass:"ps-post__overlay",attrs:{to:"/post/"+t.post.id}}),t._v(" "),o("img",{attrs:{src:t.post.thumbnail,alt:t.post.title}})],1),t._v(" "),o("div",{staticClass:"ps-post__content"},[o("div",{staticClass:"ps-post__meta"},t._l(t.post.categories,(function(e){return o("nuxt-link",{key:e.id,attrs:{to:"/blog"}},[t._v("\n                "+t._s(e.text)+"\n            ")])})),1),t._v(" "),o("nuxt-link",{staticClass:"ps-post__title",attrs:{to:"/post/"+t.post.id}},[t._v("\n            "+t._s(t.post.title)+"\n        ")]),t._v(" "),o("p",[t._v("\n            December 17, 2019 by\n            "),o("nuxt-link",{attrs:{to:"/blog"}},[t._v("\n                drfurion\n            ")])],1)],1)])}),[],!1,null,null,null);e.a=component.exports},670:function(t){t.exports=JSON.parse('{"a":[{"id":"3","title":"Products Necessery For Mom","thumbnail":"/img/blog/grid/2.jpg","type":"normal","categories":[{"id":"4","text":"Life style"}]},{"id":"4","title":"Home Interior: Modern Style 2017","thumbnail":"/img/blog/grid/3.jpg","type":"normal","categories":[{"id":"4","text":"Life style"}]},{"id":"5","title":"DeerCo – A New Look About Startup In Product Manufacture Field7","thumbnail":"/img/blog/grid/4.jpg","type":"normal","badge":"icon-picture","categories":[{"id":"2","text":"Entertaiment"}]}]}')},672:function(t,e,o){"use strict";var n={name:"PostComments"},r=o(7),component=Object(r.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ps-post-comments"},[o("h3",[t._v("4 Comments")]),t._v(" "),o("div",{staticClass:"ps-block--comment"},[o("div",{staticClass:"ps-block__thumbnail"},[o("img",{attrs:{src:"http://1.gravatar.com/avatar/af7935f33b10cec23f77b8d9717641df?s=70&d=mm&r=g",alt:"martfury"}})]),t._v(" "),o("div",{staticClass:"ps-block__content"},[o("h5",[t._v("Jason bradley"),o("small",[t._v("MARCH 12, 2013 AT 1:17 PM")])]),t._v(" "),o("p",[t._v("\n                Cras id nulla at metus congue auctor. Suspendisse auctor\n                dictum orci quis interdum. Nullam et eleifend metus. Integer\n                in est orci. Duis hendrerit ex metus, vel tempor sem aliquet\n                nec. Donec ornare hend rerit bibendum.\n            ")]),t._v(" "),o("a",{staticClass:"ps-block__reply",attrs:{href:"#"}},[t._v("\n                Reply\n            ")])])]),t._v(" "),o("div",{staticClass:"ps-block--comment"},[o("div",{staticClass:"ps-block__thumbnail"},[o("img",{attrs:{src:"http://2.gravatar.com/avatar/b2c1febfd11117eef66c351c1d4c10f1?s=70&d=mm&r=g",alt:"martfury"}})]),t._v(" "),o("div",{staticClass:"ps-block__content"},[o("h5",[t._v("Jared Erickson"),o("small",[t._v("MARCH 12, 2013 AT 1:17 PM")])]),t._v(" "),o("p",[t._v("\n                Ut tellus ligula, interdum a interdum ut, egestas ut ipsum.\n                Vivamus viverra consequat ipsum, nec auctor dolor eleifend\n                sit amet. Nulla cursus fringilla metus a dictum\n            ")]),t._v(" "),o("a",{staticClass:"ps-block__reply",attrs:{href:"#"}},[t._v("\n                Reply\n            ")]),t._v(" "),o("div",{staticClass:"ps-block--comment"},[o("div",{staticClass:"ps-block__thumbnail"},[o("img",{attrs:{src:"http://2.gravatar.com/avatar/25df3939b2e33bd19783411afd5bc6e3?s=70&d=mm&r=g",alt:"martfury"}})]),t._v(" "),o("div",{staticClass:"ps-block__content"},[o("h5",[t._v("\n                        Chris Ames"),o("small",[t._v("MARCH 14, 2013 AT 8:01 AM")])]),t._v(" "),o("p",[t._v("\n                        Duis aute irure dolor in reprehenderit in voluptate\n                        velit esse cillum dolore eu fugiat nulla pariatur.\n                        Excepteur sint occaecat cupidatat non proident, sunt\n                        in culpa qui officia deserunt mollit anim id est\n                        laborum.\n                    ")]),t._v(" "),o("a",{staticClass:"ps-block__reply",attrs:{href:"#"}},[t._v("\n                        Reply\n                    ")])])])])]),t._v(" "),o("form",{staticClass:"ps-form--post-comment",attrs:{action:"do_action",method:"post"}},[o("h3",[t._v("Leave a comment")]),t._v(" "),o("div",{staticClass:"form-group"},[o("textarea",{staticClass:"form-control",attrs:{rows:"8",placeholder:"Your comment *",required:""}})]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 "},[o("div",{staticClass:"form-group"},[o("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Your name*"}})])]),t._v(" "),o("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 "},[o("div",{staticClass:"form-group"},[o("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"your email*"}})])]),t._v(" "),o("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "},[o("div",{staticClass:"form-group"},[o("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"your website"}})])])]),t._v(" "),o("div",{staticClass:"form-group submit"},[o("button",{staticClass:"ps-btn"},[t._v("Post Comment")])])])])}],!1,null,"f49df8ba",null);e.a=component.exports},673:function(t,e,o){"use strict";var n=o(670),r={name:"RelatedPosts",components:{PostGrid:o(662).a},data:function(){return{posts:n.a}}},l=o(7),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ps-related-posts"},[e("h3",[this._v("Related Posts")]),this._v(" "),e("div",{staticClass:"row"},this._l(this.posts,(function(t){return e("div",{key:t.id,staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"},[e("post-grid",{attrs:{post:t}})],1)})),0)])}),[],!1,null,"43cf071c",null);e.a=component.exports},684:function(t,e,o){"use strict";o.r(e),e.default=o.p+"img/2.76ea159.jpg"},685:function(t,e,o){"use strict";o.r(e),e.default=o.p+"img/3.9a58d62.jpg"},686:function(t,e,o){"use strict";o.r(e),e.default=o.p+"img/4.d68bcc5.jpg"},716:function(t,e,o){"use strict";var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[this._v("\n                Harman Kadon Onyx Studio Mini, "),e("br"),this._v("\n                Reviews & Experiences\n            ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",{staticClass:"ps-blockquote"},[e("p",[this._v("\n                    “When you think ‘I know’ and ‘it is,’ you have the\n                    illusion of knowing, the illusion of certainty, and then\n                    you’re mindless”\n                ")]),this._v(" "),e("span",{staticClass:"ps-blockquote__author"},[this._v("\n                    JELLY CRISTIANA\n                ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "},[e("img",{staticClass:"mb-30",attrs:{src:o(684),alt:"martfury"}})]),this._v(" "),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 "},[e("img",{staticClass:"mb-30",attrs:{src:o(685),alt:"martfury"}})]),this._v(" "),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 "},[e("img",{staticClass:"mb-30",attrs:{src:o(686),alt:"martfury"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Welsh novelist Sarah Waters sums it up eloquently")]),this._v(" "),e("li",[this._v("\n                    In their classic book, Creativity in Business, based on\n                    a popular course they co-taught\n                ")]),this._v(" "),e("li",[this._v("Novelist and screenwriter Steven Pressfield")]),this._v(" "),e("li",[this._v("\n                    A possible off-the-wall idea or solution appears like a\n                    blip and disappears without us even realizing\n                ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n                The short answer is yes. "),e("strong",[this._v("According to Kross")]),this._v("\n                , when you think of yourself as another person, it allows\n                you give yourself more objective, helpful feedback.\n            ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ps-post__footer"},[o("p",{staticClass:"ps-post__tags"},[t._v("\n                Tags:"),o("a",{attrs:{href:"#"}},[t._v("business")]),t._v(" "),o("a",{attrs:{href:"#"}},[t._v("technology")])]),t._v(" "),o("div",{staticClass:"ps-post__social"},[o("a",{staticClass:"facebook",attrs:{href:"#"}},[o("i",{staticClass:"fa fa-facebook"})]),t._v(" "),o("a",{staticClass:"twitter",attrs:{href:"#"}},[o("i",{staticClass:"fa fa-twitter"})]),t._v(" "),o("a",{staticClass:"google",attrs:{href:"#"}},[o("i",{staticClass:"fa fa-google-plus"})]),t._v(" "),o("a",{staticClass:"linkedin",attrs:{href:"#"}},[o("i",{staticClass:"fa fa-linkedin"})]),t._v(" "),o("a",{staticClass:"pinterest",attrs:{href:"#"}},[o("i",{staticClass:"fa fa-pinterest"})])])])}],r={name:"PostDetailDefault"},l=o(7),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ps-post--detail"},[o("div",{staticClass:"ps-post__header"},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("p",[t._v("\n                December 17/ 2017 / By drfurion / in\n                "),o("nuxt-ink",{attrs:{to:"/blog"}},[t._v("\n                    Life Style\n                ")]),t._v(" "),o("nuxt-ink",{attrs:{to:"/blog"}},[t._v("\n                    Others\n                ")])],1)])]),t._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"ps-post__content"},[o("h4",[t._v("\n                On the off chance that you have an escalated stop, mull over\n                a short taking a gander at outing. This especially is shrewd\n                in urban areas with brilliant open transportation decisions.\n            ")]),t._v(" "),o("p",[t._v("\n                Today most people get on average 4 to 6 hours of exercise\n                every day, and make sure that everything they put in their\n                mouths is not filled with sugars or preservatives, but they\n                pay no attention to their mental health, no vacations, not\n                even the occasional long weekend. All of this for hopes of\n                one day getting that big promotion.This response is\n                important for our ability to learn from mistakes, but it\n                also gives rise to self-criticism, because it is part of the\n                threat-protection system. In other words, what keeps us safe\n                can go too far, and keep us too safe. In fact, it can\n                trigger self-censoring. Coven try is a city with a thousand\n                years of history that has plenty to offer the visiting\n                tourist. Located in the heart of Warwickshire. One morning,\n                when Gregor Samsa woke from troubled dreams, he found\n                himself transformed in his bed into a horrible vermin. He\n                lay on his armour-like back, and if he lifted his head a\n                little he could see his brown belly, slightly domed and\n                divided by arches into stiff sections.\n            ")]),t._v(" "),t._m(1),t._v(" "),o("p",[t._v("\n                That immediately brought to mind one of my fondest memories,\n                involving my daughter when she was just a toddler of one:\n                taking her with me on the short walk to check the mail. I\n                live in a small enclave of homes in which all the mailboxes\n                are together in a central location, less than a minute’s\n                walk from my front door\n            ")]),t._v(" "),t._m(2),t._v(" "),o("h4",[t._v("Defaulting to Mindfulness: The Third Person Effect")]),t._v(" "),o("p",[t._v("\n                Cray post-ironic plaid, Helvetica keffiyeh tousled Carles\n                banjo before they sold out blog photo booth Marfa semiotics\n                Truffaut. Mustache Schlitz next level blog Williamsburg,\n                deep v typewriter tote bag Banksy +1 literally.\n            ")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),o("h4",[t._v("Recommended Items")]),t._v(" "),o("p",[t._v("\n                Both of these assumptions, of course, could be entirely\n                false. Self-censoring is firmly rooted in our experiences\n                with mistakes in the past and not the present\n            ")]),t._v(" "),o("RecommendProducts")],1),t._v(" "),t._m(5)])])}),n,!1,null,"3b495387",null);e.a=component.exports},782:function(t,e,o){"use strict";var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ps-post--detail sidebar"},[n("div",{staticClass:"ps-post__header"},[n("h1",[t._v("\n            Harman Kadon Onyx Studio Mini, "),n("br"),t._v("\n            Reviews & Experiences\n        ")]),t._v(" "),n("p",[t._v("\n            December 17/ 2017 / By drfurion / in"),n("a",{attrs:{href:"blog-list.html"}},[t._v("Life Style")]),t._v(" "),n("a",{attrs:{href:"blog-list.html"}},[t._v("Others")])])]),t._v(" "),n("div",{staticClass:"ps-post__content"},[n("h4",[t._v("\n            On the off chance that you have an escalated stop, mull over a\n            short taking a gander at outing. This especially is shrewd in\n            urban areas with brilliant open transportation decisions.\n        ")]),t._v(" "),n("p",[t._v("\n            Today most people get on average 4 to 6 hours of exercise every\n            day, and make sure that everything they put in their mouths is\n            not filled with sugars or preservatives, but they pay no\n            attention to their mental health, no vacations, not even the\n            occasional long weekend. All of this for hopes of one day\n            getting that big promotion.This response is important for our\n            ability to learn from mistakes, but it also gives rise to\n            self-criticism, because it is part of the threat-protection\n            system. In other words, what keeps us safe can go too far, and\n            keep us too safe. In fact, it can trigger self-censoring. Coven\n            try is a city with a thousand years of history that has plenty\n            to offer the visiting tourist. Located in the heart of\n            Warwickshire. One morning, when Gregor Samsa woke from troubled\n            dreams, he found himself transformed in his bed into a horrible\n            vermin. He lay on his armour-like back, and if he lifted his\n            head a little he could see his brown belly, slightly domed and\n            divided by arches into stiff sections.\n        ")]),t._v(" "),n("blockquote",{staticClass:"ps-blockquote"},[n("p",[t._v("\n                “When you think ‘I know’ and ‘it is,’ you have the illusion\n                of knowing, the illusion of certainty, and then you’re\n                mindless”\n            ")]),t._v(" "),n("span",{staticClass:"ps-blockquote__author"},[t._v("JELLY CRISTIANA")])]),t._v(" "),n("p",[t._v("\n            That immediately brought to mind one of my fondest memories,\n            involving my daughter when she was just a toddler of one: taking\n            her with me on the short walk to check the mail. I live in a\n            small enclave of homes in which all the mailboxes are together\n            in a central location, less than a minute’s walk from my front\n            door\n        ")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "},[n("img",{staticClass:"mb-30",attrs:{src:o(684),alt:"martfury"}})]),t._v(" "),n("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 "},[n("img",{staticClass:"mb-30",attrs:{src:o(685),alt:"martfury"}})]),t._v(" "),n("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 "},[n("img",{staticClass:"mb-30",attrs:{src:o(686),alt:"martfury"}})])]),t._v(" "),n("h4",[t._v("Defaulting to Mindfulness: The Third Person Effect")]),t._v(" "),n("p",[t._v("\n            Cray post-ironic plaid, Helvetica keffiyeh tousled Carles banjo\n            before they sold out blog photo booth Marfa semiotics Truffaut.\n            Mustache Schlitz next level blog Williamsburg, deep v typewriter\n            tote bag Banksy +1 literally.\n        ")]),t._v(" "),n("ul",[n("li",[t._v("Welsh novelist Sarah Waters sums it up eloquently")]),t._v(" "),n("li",[t._v("\n                In their classic book, Creativity in Business, based on a\n                popular course they co-taught\n            ")]),t._v(" "),n("li",[t._v("Novelist and screenwriter Steven Pressfield")]),t._v(" "),n("li",[t._v("\n                A possible off-the-wall idea or solution appears like a blip\n                and disappears without us even realizing\n            ")])]),t._v(" "),n("p",[t._v("\n            The short answer is yes. "),n("strong",[t._v("According to Kross")]),t._v(",\n            when you think of yourself as another person, it allows you give\n            yourself more objective, helpful feedback.\n        ")]),t._v(" "),n("h4",[t._v("Recommended Items")]),t._v(" "),n("p",[t._v("\n            Both of these assumptions, of course, could be entirely false.\n            Self-censoring is firmly rooted in our experiences with mistakes\n            in the past and not the present\n        ")])]),t._v(" "),n("div",{staticClass:"ps-post__footer"},[n("p",{staticClass:"ps-post__tags"},[t._v("\n            Tags:"),n("a",{attrs:{href:"#"}},[t._v("business")]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("technology")])]),t._v(" "),n("div",{staticClass:"ps-post__social"},[n("a",{staticClass:"facebook",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-facebook"})]),t._v(" "),n("a",{staticClass:"twitter",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-twitter"})]),t._v(" "),n("a",{staticClass:"google",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-google-plus"})]),t._v(" "),n("a",{staticClass:"linkedin",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-linkedin"})]),t._v(" "),n("a",{staticClass:"pinterest",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-pinterest"})])])])])}],r={name:"PostDetailSidebar"},l=o(7),component=Object(l.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),n,!1,null,"e2a18350",null);e.a=component.exports}}]);