module.exports = {
    head: {
        titleTemplate: 'MarkTech',
        title: 'MarkTech',
        mode: 'universal',
        target: 'server',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'MarkTech'
            }
        ],
        link: [
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext'
            }
        ]
    },

    env: {
        firebaseApiKey: process.env.API_KEY,
        firebaseAuthDomain: process.env.AUTH_DOMAIN,
        firebaseProjectId: process.env.PROJECT_ID,
        firebaseStorageBucket: process.env.STORAGE_BUCKET,
        firebaseMessagingSenderId: process.env.MESSAGING_SENDER_ID,
        firebaseAppId: process.env.APP_ID
    },

    css: [
        'swiper/dist/css/swiper.css',
        '~/static/fonts/Linearicons/Font/demo-files/demo.css',
        '~/static/fonts/font-awesome/css/font-awesome.css',
        '~/static/css/bootstrap.min.css',
        '~/assets/scss/style.scss',
        'quill/dist/quill.core.css',
        'quill/dist/quill.snow.css',
        'quill/dist/quill.bubble.css'
    ],

    plugins: [
        { src: '~plugins/vueliate.js', ssr: false },
        { src: '~/plugins/swiper-plugin.js', ssr: false },
        { src: '~/plugins/vue-notification.js', ssr: false },
        { src: '~/plugins/axios.js', ssr: false },
        { src: '~/plugins/lazyLoad.js', ssr: false },
        { src: '~/plugins/firebase.js', ssr: false },
        { src: '~/plugins/quill.js', ssr: false },
    ],

    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/style-resources',
        'cookie-universal-nuxt'
    ],

    styleResources: {
        scss: './assets/scss/env.scss'
    },

    modules: ['@nuxtjs/axios', 'nuxt-i18n'],

    i18n: {
        locales: [
            { code: 'en', file: 'en.json' },
            { code: 'fr', file: 'fr.json' }
        ],
        lazy: true,
        defaultLocale: 'en',
        langDir: 'lang/locales/'
    },

    router: {
        linkActiveClass: '',
        linkExactActiveClass: 'active'
    },

    server: {
        port: 4002,
        host: 'localhost'
    },
    build: {
        extend(config, ctx) {
            config.module.rules.push({
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            });
        },
        extractCss: true,
        babel: {
            presets: ({ isServer }) => [
                [
                    '@nuxt/babel-preset-app',
                    {
                        targets: isServer
                            ? { node: '10.21.0' }
                            : { browsers: ['defaults'] }
                    }
                ]
            ]
        }
    },
};
