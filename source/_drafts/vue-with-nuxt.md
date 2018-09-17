---
title: Going Vue with Nuxt
cover: cover.png
comments: false
description: why use nuxt instead of “vanilla” Vue
tags:
  - advanced
  - vue
categories:
  - web
---

## Introduction

The [Vue.js](https://vuejs.org/) is a solid option for building web applications.  
To use it, we have two major bootstrapping tools:

- [Vue CLI 3](https://cli.vuejs.org/) _the Standard Tooling for Vue.js Development_
  The official solution to setup quickly a vue application.
- [Nuxt](https://nuxtjs.org/) _Universal Vue.js Applications_
  Yeah, we will talk about that.

But what is Nuxt?

**`[TL;DR]`**

- A tool to setup your Vue application quickly
- Some [convention over configuration](https://en.wikipedia.org/wiki/Convention_over_configuration) to make you write less
- The ability to move from a [Single-page application (SPA)](https://en.wikipedia.org/wiki/Single-page_application) to a Universal Web application

<!-- more -->

### installation

Nuxt provides two ways to [install the module](https://nuxtjs.org/guide/installation)

- with vue-cli
- a basic `npm install nuxt` or `yarn add nuxt` if you're a [yarn](https://yarnpkg.com/en/) person, create some folders and add some modules if you want to [use pre-processors](https://nuxtjs.org/faq/pre-processors#how-to-use-pre-processors-)

I prefer the latter as it doesn't rely on any global dependency… and it's also a good way to integrate it to an existing project.

For a web application, I always add:

- [Vue Router](https://router.vuejs.org/guide/)
- [Vuex Store](https://vuex.vuejs.org/guide/)
- [Vue I18N](https://kazupon.github.io/vue-i18n/)

I'm 100% sure that at one point or another I will need them.

Having the internationalization being done as soon as possible doesn't demand a lot of extra efforts and prevents me the boring task of including later (going file by file and adding the i18n calls & keys…)

### application structure

Vue doesn't enforce any kind of structure but we all like & need to stay organized.

If you use Vue CLI, it will create this kind of structure:

- vue.config.js `vue configuration`
- 📁 src
  - main.js `your application entry point`
  - router.js `configuring routes`
  - App.vue `main Vue component`
  - 📁 assets `all static files`
  - 📁 components `other vue components`
  - 📁 store
    - index.js `your Vuex Store`

[In this article](https://medium.com/@koreus/vue-js-there-and-back-again-in-1-5-years-756c1582aa96#5aea) about a Vue experience in 1.5 year, they discuss a bit about the component's folder structure.
They want for creating a `pages` sub-folder.

Nuxt will require something [like that](https://nuxtjs.org/guide/directory-structure):

- nuxt.config.js `nuxt configuration`
- 📁 static `all static files`
- 📁 pages `all page files`
- 📁 layouts `all layouts files` (a nuxt thingy thing that we will speak about later)
- 📁 store `your Vuex Store`
- 📁 plugins [Vue plugins](https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin)

It's a flatter structure with obvious names.
The `pages` folder is already here waiting for you!

### commands

Both Vue CLI & Nuxt propose useful commands to start coding.
I'll just speak about the main ones. They both serve the same purpose:

- make a quick development server to start coding
- build for production

Vue CLI use [vue-cli-service](https://cli.vuejs.org/guide/cli-service.html) which is a local package to launch the magic.

- `vue-cli-service serve` development server
- `vue-cli-service build` build for production

Nuxt has the equivalent [commands](https://nuxtjs.org/guide/commands).
No need to install an additional module 👍

- `nuxt` development server
- `nuxt build` build for production

I usually make the same [npm scripts](https://docs.npmjs.com/misc/scripts) aliases across all my projects:

```json
{
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build"
  }
}
```

After that I can do `yarn dev` to start coding & `yarn build` to export.
Those commands will stay independent of what the application is using underneath.

## Small Nuxt overview

Nuxt relies in some part in _convention over configuration_.
By creating files, Nuxt will take care of integrating them in your Vue application's.

Here are the main domains where it shines.

### routing

In a standard Vue application you'll need to manually configure the router.
This how the `router.js` usually looks like:

```js
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/foo',
      name: 'foo',
      // needed for webpack's code splitting
      component: () => import(/* webpackChunkName: "foo" */ './views/Foo.vue'),
    },
    {
      path: '/bar/:id',
      name: 'bar',
      component: () => import(/* webpackChunkName: "bar" */ './views/Bar.vue'),
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
})
```

This has some drawbacks when refactoring.
If you want to rename a route, you'll have to:

- rename the component
- modify the `router.js` file
  - change the component import
  - change the route name

With Nuxt, this routing will look like this:

- 📁 pages
  - index.vue
  - foo.vue
  - 📁 bar
    - \_id.vue

Renaming a route is now just changing a file/folder name.
And you have the code splitting out of the box.

### store

The same goes with a standard Vuex store:

```js
import Vue from 'vue'
import Vuex from 'vuex'

import * as foo from './foo'
import * as bar from './bar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    foo,
    bar,
  },
  plugins: [],
})
```

And as you've guessed in Nuxt it just follows the same principles as for the routing:

- 📁 store
  - foo.js
  - bar.js

With the same advantages as the routing.
Still, there is the [classic mode](https://nuxtjs.org/guide/vuex-store#classic-mode) if you want to do it by yourself.

### a note on layouts

Nuxt provides a way to handle [many page layout](https://nuxtjs.org/guide/views#layouts) in a breeze.

I think most of the time you'll stick with the basic:

- `layouts/default.vue`
- `layouts/error.vue`

If you want to achieve this in a regular Vue application, you'll have to do it manually by wrapping every page components inside the desired layout component… which will bloat a little bit your code.

So _not a must have_ but definitively a nice addition 🏅.

### plugins (like vue I18N)

Integrating more things from the Vue ecosystem is similar to what it is in a standard Vue application.

This is well [documented here](https://nuxtjs.org/guide/plugins).

For example, create a `i18n.js` file in the `plugin` folder…

```js
import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { en, fr } from '~/locales'

Vue.use(VueI18n)

export default nuxtContext => {
  const { app } = nuxtContext
  app.i18n = new VueI18n({
    fallbackLocale: `en`,
    messages: { en, fr },
  })
}
```

…and update the `nuxt.config.js`…

```js
{
  build: {
    // this is to bundle the library inside the `vendor` bundle
    vendor: [`vue-i18n`]
  },
  plugins: [
    // reference my plugin, so Nuxt will load it
    `@/plugins/i18n.js`,
  ],
}
```

…and you can use `$t('my-i18n0key')` inside your app!

As for now, Nuxt doesn't support a `convention over configuration` pattern for plugin 😐.
So you'll have to write some boilerplate code, that would be mostly unlikely to change in the future.

**But what in fact looks like an unnecessary configuration serves in fact a very important purpose.**

Nuxt allows us to build `universal web applications`.
This means that it should be able to bundle your code:

- for the browser
- for the server

If you're only targeting the browser (SPA), you don't have to worry about it.
**But if you're running the code on the server, you don't want it to break because of the use of some browser API**.

Nuxt allows that with a [small additional configuration](https://nuxtjs.org/guide/plugins#client-side-only).

```js
plugins: [
  `@/plugins/i18n.js`,
  // remove Server Side Rendering from this specific file
  { src: `@/plugins/browser.js`, ssr: false },
]
```

This will remove the `browser.js` file from the server bundle, and we're now assured that it won't error because of a missing `window` object 😅

## Prototyping & evolution

In my opinion the main advantage of Nuxt is how convenient it is to make a small prototype and build upon it until a first result.
While being sure that we can make it evolve in any direction in the future.

### single page application

Writing a SPA makes you able to build quite quickly a small app and give anyone the opportunity to play with it in almost real conditions.

You can make a simple static API by putting some JSON files inside the `static` folder.
And you can persist your application's state by using the [local storage api](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage) with [vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate)

Hosting solutions like [firebase](https://firebase.google.com/), [netlify](https://www.netlify.com/) or [github pages](https://pages.github.com/) provide a way to share your application for a free cost.

### universal web application

And now that you're satisfied with your prototype, you can push it further by integrating it to a Node server.
Nuxt provides some templates to see how integration works many frameworks:

- [express template](https://github.com/nuxt-community/express-template)
- [koa template](https://github.com/nuxt-community/koa-template)

I'll use Koa 🐨

In a `server/index.js` file:

```js
const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const { Nuxt, Builder } = require('nuxt')

startServer()

async function startServer() {
  const app = new Koa()
  const HOST = process.env.HOST || `127.0.0.1`
  const PORT = process.env.PORT || 3000

  app.use(async function handleError(ctx, next) {
    try {
      await next()
    } catch (err) {
      ctx.status = err.statusCode || err.status || 500
      ctx.body = err
    }
  })

  //----- integrate a server API

  const apiRouter = new Router({ prefix: `/api` })

  apiRouter.get(`/foo`, async ctx => {
    ctx.body = { foo: `foo nuxt example` }
  })
  apiRouter.get(`/bar/:id`, async ctx => {
    const { id } = req.params
    ctx.body = { bar: `bar ${id}` }
  })
  apiRouter.post(`/bar/:id`, koaBody(), async ctx => {
    const { id } = req.params
    ctx.body = { bar: `bar ${id} is updated!` }
  })

  app.use(apiRouter.routes())
  app.use(apiRouter.allowedMethods())

  //----- NUXT

  const config = require('../nuxt.config.js')
  config.dev = !(app.env === `production`)

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false
    ctx.req.ctx = ctx
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(PORT, HOST, function endInit() {
    console.log(`APP Server is listening on ${HOST}:${PORT}`)
  })
}
```

In the `package.json` you can add this script:

```json
{
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "serve": "node server/index.js"
  }
}
```

And minus updating your store's actions to point to your new API, you're done.
No need to modify other parts of your Vue application.

## And also…

This post isn't an exhaustive list of what Nuxt can offer you.
Here's a quick list of other things that it provides:

- A solution for handling [HTML meta tags](https://nuxtjs.org/guide/views#html-head) comes with Nuxt ([vue-meta](https://www.npmjs.com/package/vue-meta))
- [Page transitions](https://nuxtjs.org/api/pages-transition)
- [Loading Progress Bar](https://nuxtjs.org/api/configuration-loading)
- A great choice of [modules](https://github.com/nuxt-community/awesome-nuxt#official) thanks to the nuxt community.
  Those provide a good way to integrate some popular libraries (like [Axios](https://github.com/nuxt-community/axios-module) for example)
- hooks ([asyncData](https://nuxtjs.org/api/) & [fetch](https://nuxtjs.org/api/pages-fetch)) to get async data both browser & server side
- documentation is good
- etc.

## Conclusion

Nuxt doesn't have a beautiful GUI 😶 but it's a very clever piece of code that makes me feel more productive while building an website or application.

I've made a [small repo](https://github.com/Hiswe/nuxt-universal-application) with almost what I've been talking about in this post.

You have [this article](https://medium.com/vue-mastery/10-reasons-to-use-nuxt-js-for-your-next-web-application-522397c9366b) if you want another take on the subject and also a [list of tutorials](https://github.com/nuxt-community/awesome-nuxt#tutorials) if want to!
