---
title: testing the parcel bundler with vue
tags:
  - advanced
  - vue
cover: cover.png
comments: false
description: >-
  how the “Blazing fast, zero configuration web application bundler” is keeping
  its promise
categories:
  - web
  - nodejs
date: 2018-07-29 18:10:23
---

## Introduction

In this era of libraries needing a build step <small>(even if you can use them without it, c'mon it's better to do so)</small> I want to talk about the [parcel bundler](https://parceljs.org/).

The baseline is: **Blazing fast, zero configuration web application bundler**.

How this holds up?

<!-- more -->

## The history of bundling

I feel like it's important to know from where we came before talking about what Parcel is trying to solve.

That's my personal take about how we get there 🤓

[//]: # " need to suse {% link %} regular link doesn't handle well parenthesis "

1.  In the beginning, bundling wasn't a thing: just reference javascript/CSS files in your HTML and you were done (the good ol'days in a way (but damn I hated IE6))
2.  Then we began to take care of file sizes and we {% link minified them https://en.wikipedia.org/wiki/Minification_(programming) %} with non-JS tools ([Google Clojure compiler](https://developers.google.com/closure/compiler/) for example)
3.  Then we began to use [CSS preprocessor](https://drupalize.me/videos/what-css-preprocessor?p=1175) which add a lot of handy stuff (mainly variables, selector nesting & import) with non-JS tools ([Ruby-Sass](https://sass-lang.com/ruby-sass) for example)
4.  Then [node.js](https://nodejs.org/en/) came and we used its UNLIMITED POWER ⚡️ to handle dependencies & tooling
5.  Then [Browserify](http://browserify.org/) came and we began to bundle our Javascript that way:
    better dependencies management and the possibility to split our JS code in multiple files
6.  Then building tools like [Grunt](https://gruntjs.com/) or [Gulp](https://gulpjs.com/) let us coordinate all those build step together.
    It staid that way a couple of time…
7.  Then [React](https://reactjs.org/) appeared.
    Even if it was just one step further from previous frameworks (like [backbone](http://backbonejs.org/) or [angularJS](https://angularjs.org/)), the full component way of doing things made people want to bundle thing, not on a language basis, but on a component basis.
8.  Thus [webpack](https://webpack.js.org/) appeared.
    Doing an amazing job with the drawback of a sometime tricky [configuration](https://webpack.js.org/configuration/#options) (and the team is really pushing hard to solve this 💪).
9.  Then appeared [CLI](https://en.wikipedia.org/wiki/Command-line_interface) for each framework to simplify the use of webpack.
    Tools configuring tools to use other tools.
10. And recently **Parcel** appeared with a **no configuration promise**

It's not that we don't like simple stuff anymore (no one likes build steps), it's more that our needs _vs._ what the browser can natively do aren't matching:

- no [Javascript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) until recently
- no [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) until recently
- etc.
- also things that will never land in browsers like:
  - [JSX](https://reactjs.org/docs/introducing-jsx.html)
  - [Typescript](https://www.typescriptlang.org/)

And we still need to support legacy browsers.

I'm pretty sure it's still every dev's dream to use a thing that _just works_ in every situation (_“building”_ appeared in the famous [javascript fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4) post by [Eric Clemmons](https://medium.com/@ericclemmons)).

On a side note, the web-community is pushing forward for native tools.

After all:

- [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) is just [jQuery](https://jquery.com/)'s idea natively implemented
- [JS arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) is inspired by Coffeescript's [functions](https://coffeescript.org/#functions)
- JS modules, and CSS custom properties as talked before ⏪.

Maybe [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) will be the native solution's equivalent for React/Angular/Vue <small>(Even if I think they will stick because of how much other benefits they can provide)</small>

## Why bundling vue

If we look at the [vue's single file component](https://vuejs.org/v2/guide/single-file-components.html#ad) we can see that:

- **Templates** can be [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) or [Pug template](https://pugjs.org/api/getting-started.html)
- **Style** can be [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [PostCSS](https://postcss.org/), [less](http://lesscss.org/), [SASS/SCSS](https://sass-lang.com/) or [Stylus](http://stylus-lang.com/) with the support of [style scoping](https://vue-loader.vuejs.org/en/features/scoped-css.html) or not
- **Script** can be [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript) (with the support of the latest additions to the language with [babel](http://babeljs.io/)) or [typescript](https://www.typescriptlang.org/)

So it's a good candidate for testing Parcel's ability to bundle anything 😎

## Parcel

There isn't a lot of things to learn about Parcel.  
They said **simplicity** and simplicity it is: look at how [little options](https://parceljs.org/cli.html#options) there are!

Mainly (copied & trimmed from the official doc):

```js
const options = {
  outDir: "./dist", // The out directory to put the build files in, defaults to dist
  outFile: "index.html", // The name of the outputFile
  publicUrl: "./", // The url to server on, defaults to dist
  target: "browser" // browser/node/electron, defaults to browser
};
```

That's it.

I hope you're not afraid of the void 🌑.

## Main use

Just specify an entry file (either HTML, JS or CSS) and it will crawl all its dependencies and bundle them.
That's it.

You may have to install other [NPM packages](https://www.npmjs.com/) by I've found that Parcel tries to [install some of them for you](https://parceljs.org/hmr.html#automagically-installed-dependencies). That's such a good idea!

Also being able to run a [Hot Module Replacement](https://parceljs.org/hmr.html) server in development is quick way to start coding a web-application.

## Transform configuration

Parcel will pass down some configuration to the tools that it uses under the hood:

- [.babelrc](https://parceljs.org/transforms.html#babel) for babel
- [.posthtmlrc](https://parceljs.org/transforms.html#posthtml) for post html
- etc.

This can lead to some [strange issues](https://github.com/parcel-bundler/parcel/issues/1103#issuecomment-406483009) sometimes…

Also be aware that as for now (august 2018) [Parcel relies on Babel 6](https://github.com/parcel-bundler/parcel/issues/868) and not on [Babel 7](https://www.npmjs.com/package/@babel/core/v/7.0.0-beta.55) (still on beta but working fine)

That's a small common problem among the _“under the hood”_ solutions (CLI included), you never know what's going on before reading the `package.json` (or some github issues).

## Code splitting

Like every bundler, Parcel [supports it](https://parceljs.org/code_splitting.html).
They rely on [a future addition to the JS language](https://github.com/tc39/proposal-dynamic-import) to do so.
As it is in [stage 3](https://tc39.github.io/process-document/) the syntax won't change in the future and it's safe to use it now without thinking about refactoring due to specifications change after 👌

## Where simplicity breaks

I was able to set up a development vue application in an instant.
Every things that Vue supports seems to work seamlessly.

So that was a real time saver and a good entry point in Vue's ecosystem.

But the **promise of _“simplicity”_ as some drawbacks:**

- when you have a problem it's most likely you'll have to wait for a new version
- I had some problem with building & minifying `.vue` files in production mode

**When building from an html file:**

- Parcel can't simply ignore assets: a `manifest.webmanifest` file will be converted to `manifest.b01ff217.js`…
- [no PWA support](https://github.com/parcel-bundler/parcel/issues/301), and since every resource is parsed, you can't include a PWA file generated by [workbox](https://developers.google.com/web/tools/workbox/) (same as above)

I resolved myself to:

- write a simple `html` file for the dev (it was my entry point)
- write another production `html` file and shift my entry point to my JS file so that it doesn't parse my HTML code

## Things I didn't test

Bundling also a node.js application with it.
There is a [target](https://parceljs.org/cli.html#target) parameter for it. But I'm not sure if I can do variables or module replacement with it.

When I was building my {% post_link 08-universal-application universal web-application %} (bad idea, don't do it at home, use [next.js](https://nextjs.org/) or [nuxt](https://nuxtjs.org/)) I had to really refine my build configuration.
I don't know if it would have been possible by using Parcel only.

## Conclusion

**Parcel is very promising** and very young.
The team is doing an amazing job ❤️ and is pushing the bundling step in a good direction: simple and working 🎉.

**I won't advice it (yet) for big projects**. I think, for now, frameworks' CLI are more reliable.

BUT in the future, if I'll be able to use the same simple bundle tool for all my projects I'll go for it! (I'm a lazy 🐮 having to read yet another CLI doc isn't my stuff).

I hope they will keep up with developing this ambitious open source projects. Good game!
