'use strict';

hexo.extend.tag.register('split', (args, content) => {
  const titles        = args.join(' ').split(' | ')
  const leftTitle     = titles[0].trim()
  const rightTitle    = titles[1].trim()
  const contents      = content.split('---')
  const leftContent   = contents[0].trim()
  const rightContent  = contents[1].trim()

  return `
<dl class="split">
  <dt class="split__title split__title--first">${ leftTitle }</dt>
  <dd class="split__content split__content--first">
    ${ hexo.render.renderSync({text: leftContent, engine: 'markdown'}) }
  </dd>
  <dt  class="split__title split__title--second">${ rightTitle }</dt>
  <dd class="split__content split__content--second">
    ${ hexo.render.renderSync({text: rightContent, engine: 'markdown'}) }
  </dd>
</dl>`
}, {ends: true});
