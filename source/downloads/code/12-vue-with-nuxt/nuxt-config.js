module.exports = {
  build: {
    // this is to bundle the library inside the `vendor` bundle
    vendor: [`vue-i18n`],
  },
  plugins: [
    // reference my plugin, so Nuxt will load it
    `@/plugins/i18n.js`,
  ],
}
