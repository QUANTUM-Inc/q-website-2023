import axios from 'axios';
require('dotenv').config();

const makeLangRoutes = (routes, paramName) =>
  routes.map(route => ({
    ...route,
    path: `/:${paramName}${route.path}`.replace(/\/$/, ''),
    name: `${paramName}-${route.name}`
  }))


const GAID = 'UA-136944646-1'
const GAcode = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GAID}');`


export default {
  render: {
    static: { maxAge: 3600 }
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push(...makeLangRoutes(routes, 'lang'));
    },
    middleware: ['lang'],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {};
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
          position = { x: 0, y: 0 }
        }
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position;
      }
    },
  },
  /// mode: 'universal', //非推奨

  //target: 'static',
  //サーバーからの応答（API）が必要
  target: 'server',
  //クライアントサイドで描画
  ssr: false,

  head: {
    title: 'quantum',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'quantumは、発想から実装まで、事業開発の全てを活動領域とし、 新しいプロダクトやサービスを創り出すスタートアップスタジオです。'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'quantumは、発想から実装まで、事業開発の全てを活動領域とし、 新しいプロダクトやサービスを創り出すスタートアップスタジオです。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://quantum.ne.jp/images/ogp.jpg'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: 'quantum, QUANTUM, クオンタム, Startup Stduio, スタートアップスタジオ, スタートアップ・スタジオ, Be a Founder'
      },
      {
        hid: 'include',
        property: 'include'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400&family=Roboto:wght@300&display=swap'

      }
    ],
    script: [
      {
        hid: 'GAsrc',
        src: 'https://www.googletagmanager.com/gtag/js?id=' + GAID
      },
      {
        hid: 'GAcode',
        innerHTML: GAcode
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'GAsrc': ['innerHTML'],
      'GAcode': ['innerHTML']
    }
  },

  loading: '~/components/Loading.vue',
  loadingIndicator: {
    name: 'pulse',
    color: '#fff',
    background: '#fff'
  },

  //共通で読み込むCSS
  css: [
    'normalize.css/normalize.css',
    '~/assets/css/style.scss',
  ],
  styleResources: {
    scss: [
      '~/assets/css/vars.scss',
      '~/assets/css/_mixin.scss',
    ]
  },

  plugins: [
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: '~/plugins/vue-scrollto', ssr: false },
    { src: '~/plugins/disqus' },
    { src: '~/plugins/mixins' },
    {src: '~/plugins/langLink'},
    //{ src: '~/plugins/vue-js-modal', ssr: false },
  ],

  buildModules: [
    '@nuxt/postcss8',
  ],

  modules: ['@nuxtjs/axios',
    ['@nuxtjs/pwa', { meta: false }],
    // '@nuxtjs/sitemap',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-gtag',
      {
        id: 'UA-136944646-1',
        config: {
          send_page_view: true
        },
        debug: false
      }
    ],

    [
      '@nuxtjs/dotenv',
      { filename: `.env_${process.env.NODE_ENV}` }
    ],
    '@/modules/hook/generate',
    '@nuxtjs/tailwindcss'
  ],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },

  axios: {},

  build: {
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ];
      }
    },
    extractCSS: true,
    filenames: {
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[name].css?[contenthash]',
      chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[name].js?[contenthash]',
      vendors: ({ isDev }) => isDev ? '[name].js' : 'js/[name].js',
      app: ({ isDev }) => isDev ? '[name].js' : 'js/[name].js?[contenthash]',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[path][name].[ext]?[contenthash]',
    }
  },

  sitemap: {
    hostname: 'https://quantum.ne.jp/',
    path: '/sitemap.xml',
    sitemaps: [
      {
        path: '/sitemap-projects.xml',
        routes: async () => {
          const { data } = await axios.get(process.env.WORDPRESS_API_URL + '/wp/v2/projects', {
            params: {per_page: 10000, _embed: null  },
            timeout: 100000
          }).catch(err => { throw new Error(err.message)});
          return data.map(article => ({
            url: (article.lang === 'en' ? '/en/' : '/') + `projects/${article.id}`,
            lastmod: article.modified
          }));
        }
      },

    ]
  },

  generate: {
    fallback: true,
    async routes() {
      return Promise.all([
        '/en',
        '/en/contact',
        '/en/release',
        '/en/factsheet',
        '/en/qletter',
        '/en/whoweare',
        '/en/whatwedo',
        '/en/careers',
        '/en/collective',
        '/en/projects',
        '/en/policies',
        '/en/qletter/complete',
        '/en/qletter/unsubscribe',
        '/en/contact/complete',
        '/en/topics',
      ])
    }
    /*async routes() {
      let projects = await axios.get(process.env.WORDPRESS_API_URL + '/wp/v2/projects', {
          params: {
            per_page: 10000,
            orderby: 'date',
            order: 'desc',
            nolayout: 1
          },
          timeout: 100000
        })
        .then(res => {
          return res.data.map(post => {
            let dir = post.lang === 'en' ? '/en/' : '/'
            return {
              route: dir +'projects/' + post.slug,
              slug: post.slug,
              payload: post
            };
          });
        });

      return Promise.all([projects]).then(values => {
        return [...values[0]/!*`, ...values[1], ...values[2], ...values[3]*!/];
      });
    }*/
  }
};
