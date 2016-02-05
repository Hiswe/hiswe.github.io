'use strict';

hexo.extend.tag.register('split', function(args, content) {
  var titles        = args.join(' ').split(' | ');
  var leftTitle     = titles[0].trim();
  var rightTitle    = titles[1].trim();
  var contents      = content.split('---');
  var leftContent   = contents[0].trim();
  var rightContent  = contents[1].trim();

  return [
      '<dl class="split">'
    , '   <dt>' + leftTitle + '</dt>'
    , '   <dd>' + hexo.render.renderSync({text: leftContent, engine: 'markdown'}) + '</dd>'
    , '   <dt>' + rightTitle + '</dt>'
    , '   <dd>' + hexo.render.renderSync({text: rightContent, engine: 'markdown'}) + '</dd>'
    , '</dl>'

  ].join('\n');
}, {ends: true});
