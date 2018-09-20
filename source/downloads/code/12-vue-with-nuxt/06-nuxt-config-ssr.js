module.exports = {
  plugins: [
    `@/plugins/i18n.js`,
    // remove Server Side Rendering (SSR) from this specific file
    { src: `@/plugins/browser.js`, ssr: false },
  ],
}
