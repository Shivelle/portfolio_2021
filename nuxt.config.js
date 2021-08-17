import i18n from './config/i18n.js'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sarah Leidisch',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Web Entwicklung & Design' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/app.scss'
  ],

  buefy: {
    materialDesignIcons: false,
    materialDesignIconsHRef: '/'
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
    [
      'nuxt-i18n',
      {
        vueI18nLoader: true,
        strategy: 'prefix',
        defaultLocale: 'de',
        locales: [
          {
            code: 'en',
            name: 'English'
          },
          {
            code: 'de',
            name: 'Deutsch'
          }
        ],
        vueI18n: i18n,
        parsePages: false, // Disable babel parsing
        pages: {
          imprint: {
            de: '/impressum',
            en: '/imprint'
          },
          dataProtection: {
            de: '/datenschutz',
            en: '/data-protection'
          }
        }
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@luxdamore/nuxt-prune-html',
    '@nuxtjs/date-fns'
  ],

  pruneHtml: {
    enabled: false, // `true` in production
    hideGenericMessagesInConsole: false, // `false` in production
    hideErrorsInConsole: false, // deactivate the `console.error` method
    hookRenderRoute: true, // activate `hook:render:route`
    hookGeneratePage: true, // activate `hook:generate:page`
    selectors: [
      // CSS selectors to prune
      'link[rel="preload"][as="script"]',
      'script:not([type="application/ld+json"])'
    ],
    classesSelectorsToKeep: [], // disallow pruning of scripts with this classes, n.b.: each `classesSelectorsToKeep` is appended to every `selectors`, ex.: `link[rel="preload"][as="script"]:not(__classesSelectorsToKeep__)`
    link: [], // inject custom links, only if pruned
    script: [], // inject custom scripts, only if pruned
    htmlElementClass: null, // a string added as a class to the <html> element if pruned
    cheerio: {
      // the config passed to the `cheerio.load(__config__)` method
      xmlMode: false
    },
    types: [
      // it's possibile to add different rules for pruning
      'default-detect'
    ],

    // 👇🏻 Type: `default-detect`
    headerNameForDefaultDetection: 'user-agent', // The `header-key` base for `MobileDetection`, usage `request.headers[ headerNameForDefaultDetection ]`
    auditUserAgent: 'lighthouse', // prune if `request.header[ headerNameForDefaultDetection ]` match, could be a string or an array of strings
    isAudit: true, // remove selectors if match with `auditUserAgent`
    isBot: true, // remove selectors if is a bot
    ignoreBotOrAudit: false, // remove selectors in any case, not depending on Bot or Audit
    matchUserAgent: null, // prune if `request.header[ headerNameForDefaultDetection ]` match, could be a string or an array of strings

    // 👇🏻 Type: 'query-parameters'
    queryParametersToPrune: [
      // array of objects (key-value)
      // trigger the pruning if 'query-parameters' is present in `types` and at least one value is matched, ex. `/?prune=true`
      {
        key: 'prune',
        value: 'true'
      }
    ],
    queryParametersToExcludePrune: [], // same as `queryParametersToPrune`, exclude the pruning if 'query-parameters' is present in `types` and at least one value is matched, this priority is over than `queryParametersToPrune`

    // 👇🏻 Type: 'headers-exist'
    headersToPrune: [], // same as `queryParametersToPrune`, but it checks `request.headers`
    headersToExcludePrune: [], // same as `queryParamToExcludePrune`, but it checks `request.headers`, this priority is over than `headersToPrune`

    // Emitted events for callbacks methods
    onBeforePrune: null, // ({ result, [ req, res ] }) => {}, `req` and `res` are not available on `nuxt generate`
    onAfterPrune: null // ({ result, [ req, res ] }) => {}, `req` and `res` are not available on `nuxt generate`
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      remarkPlugins: [
        ['remark-emoji', { emoticon: true }]
      ]
    }
  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: 'test',
        maxSize: 256000
      }
    },
    html: {
      minify:
      {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    }
  }
}
