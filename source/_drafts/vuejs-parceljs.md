---
title: using parcel bundler for vue
cover: cover.png
comments: false
description:
tags:
categories:
---

## Introduction

In this era of libraries needing a build step <small>(even if you can use them without, but c'mon it's better to do it)</small> I want to talk about the [parcel bundler](https://parceljs.org/).

The baseline is: `Blazing fast, zero configuration web application bundler`.

How is doing?

<!-- more -->

## Bundling history & state

That's my personal take of how I lived this evolution 🤓

[//]: # " need to suse {% link %} regular link doesn't handle well parenthesis "

1.  In the beginning, bundling wasn't a thing: just reference javascript/CSS files in your HTML and you were done.
2.  Then we began to take care of files sizes and we {% link minified https://en.wikipedia.org/wiki/Minification_(programming) %} those files with non-JS tools
3.  Then we began to use [CSS preprocessor](https://drupalize.me/videos/what-css-preprocessor?p=1175) which add a lot of handy stuff (mainly variables, selector nesting & import) with with non-JS tools (Ruby-Sass for example)
4.  Then [node.js](https://nodejs.org/en/) came and we used its power to handle dependencies & tooling
5.  Then [Browserify](http://browserify.org/) came and we begin to bundle our Javascript that way.
6.  Then building tools like [Grunt](https://gruntjs.com/) & [Gulp](https://gulpjs.com/) let us coordinate all those build step.
    It staid that way a couple of years.
7.  Then [React](https://reactjs.org/) appeared.
    Even if it was just one step further from previous frameworks (like [backbone](http://backbonejs.org/) & [angularJS](https://angularjs.org/)), the full component way of doing things made people want to bundle thing, not per language, but per component.
8.  Then [webpack](https://webpack.js.org/) appeared. Doing an amazing job with the drawback of a sometime tricky configuration (and the team is really pushing hard to solve this 💪)
9.  Then appeared [CLI](https://en.wikipedia.org/wiki/Command-line_interface) for each framework to simplify the use of webpack
10. And recently **Parcel** appeared with a **no configuration promise**

It's not that we don't like simple stuff anymore (no one likes build steps), it's more that our needs _vs._ what we can possibly do were in our disfavor:

- no [Javascript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) until recently
- no [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) until recently
- etc.
- also things that will never part of the language like:
  - [JSX](https://reactjs.org/docs/introducing-jsx.html)
  - [Typescript](https://www.typescriptlang.org/)

And we still need to support legacy browsers.

So I think it's still every dev's dream to use a thing that _just works_ in every situation.

## why bundling vue

If we look at the [single file component](https://vuejs.org/v2/guide/single-file-components.html#ad) we can see that:

- **Templates** can be [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) or [Pug](https://pugjs.org/api/getting-started.html)
- **Style** can be [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [PostCSS](https://postcss.org/), [less](http://lesscss.org/), [SASS/SCSS](https://sass-lang.com/) or [Stylus](http://stylus-lang.com/) with the support of [style scoping](https://vue-loader.vuejs.org/en/features/scoped-css.html) or not
- **Script** can be [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript) (with the support of the latest additions to the language with [babel](http://babeljs.io/)) or [typescript](https://www.typescriptlang.org/)

So it's a good candidate for being bundled 😎

## parcel

There isn't a lot of things to learn about Parcel.  
They said **simplicity** and simplicity it is: look at how [little options](https://parceljs.org/cli.html#options) there are!

But that comes with less customization possibility.

## main use

Just specify a main file (either HTML, JS or CSS) and it will crawl all the dependencies and bundle them.
That's it.

You may have to install other dependencies by I've found that Parcel tries to [install some of them for you](https://parceljs.org/hmr.html#automagically-installed-dependencies). That's such a good idea!

Also being able to run a [Hot Module Replacement](https://parceljs.org/hmr.html) server in dev is quick way to start coding a web-application.

## transform configuration

Parcel delegates a lot of fine tuning configuration to the tools it uses under the hood:

- [.babelrc](https://parceljs.org/transforms.html#babel) for babel
- [.posthtmlrc](https://parceljs.org/transforms.html#posthtml) for post html
- etc.

This can lead to some [strange issues](https://github.com/parcel-bundler/parcel/issues/1103#issuecomment-406483009) sometimes…

Also be aware that as for now (august 2018) [Parcel relies on Babel 6](https://github.com/parcel-bundler/parcel/issues/868) and not on [Babel 7](https://www.npmjs.com/package/@babel/core/v/7.0.0-beta.55) (still on beta but working fine)

## code splitting

Like every bundler, Parcel [supports it](https://parceljs.org/code_splitting.html).
They rely on [a future addition to the JS language](https://github.com/tc39/proposal-dynamic-import) to do so.
As it is in [stage 3](https://tc39.github.io/process-document/) the syntax won't change in the future and it's safe to use it now without thinking about refactoring due to specifications change after 👌

## where simplicity breaks

I was able to set up a development vue application in an instant.
Every things that Vue supports seems to work seamlessly.

So that was a real time saver and a good entry point in Vue's ecosystem.

But the **promise of “simplicity” as some drawbacks**

- when you have a problem it's most likely you'll have to wait for a new version
- had some problem with building & minifying `.vue` files in production mode

**when building from an html file:**

- can't simply ignore assets: a `manifest.webmanifest` file will be converted to `manifest.b01ff217.js`…
- [no PWA support](https://github.com/parcel-bundler/parcel/issues/301), and since every resource is parsed, you can't include a PWA file generated by [workbox](https://developers.google.com/web/tools/workbox/)

I resolved myself to:

- write a simple `html` file for the dev (it was my entry point)
- write another production `html` file and shift my entry point to my JS file so that it doesn't parse my HTML code

## things I didn't test

bundling also a node.js application with it.
There is a [target](https://parceljs.org/cli.html#target) parameter for it. But I'm not sure if I can do variables or module replacement with it.

## conclusion

Parcel is very promising and very young.
The team is doing an amazing job and is pushing the bundling step in a good direction: simple and just work.

I won't advice it (yet) for big projects. Usually the frameworks CLI are more reliable.

BUT in the future, if I'll be able to use the same simple bundle tool for all my projects I'll go for it.

I hope they will keep the great job, even if doing ambitious open source projects like this can be painful 😶
