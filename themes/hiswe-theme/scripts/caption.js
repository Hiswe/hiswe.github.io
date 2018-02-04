`use strict`

// {% caption pouic clapou %}
// {% asset_img pixel-example.png a pixel image and a zoom on it %}
// {% endcaption %}

hexo.extend.tag.register('caption', function(args, content) {
  const figcaption = args.join(` `)
  return `
<figure class="image-container">
  ${ hexo.render.renderSync({text: content, engine: 'markdown'}) }
  <figcaption class="image-container__caption">${ figcaption }</figcaption>
</figure>
`
}, {ends: true})
