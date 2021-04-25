// Nuxt 2 use ESM modules
export default {
  plugins: [
    // reference my plugin, so Nuxt will load it
    `@/plugins/i18n.js`,
  ],
}
