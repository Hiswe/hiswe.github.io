'use strict';

const path  = require( `path` )

// example:
//
// {% video my-video-name.m4v %}

hexo.extend.tag.register('video', function(args, content) {
  const videoName = args[0]
  if ( !videoName ) return ''
  const src      = path.join(this.path, videoName)
  return `
<div class="video-wrapper">
  <video src="/${src}" controls muted>
</div>
`
})
