# Static blog

## launching

```
yarn
```

### release

```
yarn release
```

### dev

```
yarn start
```

### writing

```
yarn hexo new [layout] '<title>' --lang fr
```

- post (source/\_posts)
- page (source)
- draft (source/\_drafts)

#### creating a draft

```sh
yarn draft '<title>' --lang fr
```

#### converting a draft

```sh
yarn publish '<title>'
```

### converting videos

[vestride's gist](https://gist.github.com/Vestride/278e13915894821e1d6f)

```sh
# resize
ffmpeg -i source.mov -vf scale=720:-2 source-720.mov
# mp4
ffmpeg -an -i source-720.mov -vcodec h264 -acodec aac -strict -2 output.mp4
```

### social

#### validate twitter cards

https://cards-dev.twitter.com/validator

#### validate open graph

https://developers.facebook.com/tools/debug/sharing

### documentation

https://bluemix.github.io/en/2017/multilingual-blogging-with-Hexo/

## TODO

- better video player
- better sticky style https://developers.google.com/web/updates/2017/09/sticky-headers
- favicon
- comments
- critical css https://www.npmjs.com/package/critical
