'use strict';

var pathFn  = require('path');
var _       = require('lodash');

hexo.extend.tag.register('video', function(args, content) {
  var videoName = args[0];
  if (!videoName) return '';
  var path      = pathFn.join(this.path, videoName);
  // should use lodash templates
  return [
    '<div class="video-wrapper">',
    '  <video src="/' + path + '" controls>',
    '</div>',
  ].join('\n')
});
