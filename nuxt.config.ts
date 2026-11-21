export default defineNuxtConfig({
  compatibilityDate: '2026-11-01',
  devtools: { enabled: false },

  css: [
    '@fontsource-variable/nunito',
    '~/assets/css/tokens.css',
    '~/assets/css/base.css',
    '~/assets/css/components.css',
    '~/assets/css/forms.css',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'en-GB' },
      titleTemplate: (title) => (title ? `${title} — Squarewave Digital` : 'Squarewave Digital'),
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#FAFAFA' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/img/logo.png' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // Listen on IPv4 as well: on Windows the default binds ::1 only, which
  // refuses tools that resolve localhost to 127.0.0.1.
  devServer: { host: '127.0.0.1', port: 3000 },

  // Static marketing site: everything is prerendered at build time.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
})
