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
To use it, we have many bootstrapping tools:

- [Vue CLI 3](https://cli.vuejs.org/) _the Standard Tooling for Vue.js Development_
  The official solution to setup quickly a vue application.
- [Nuxt](https://nuxtjs.org/) _Universal Vue.js Applications_
- [ParcelJs](https://parceljs.org/) _the Blazing fast, zero configuration web application bundler_
  You can read {% post_link 11-parcel-with-vue in this post %} my own experience with it.

But which solution to choose?

**`[TL;DR]`** go with nuxt if you like:

- an easy setup
- [Convention over configuration](https://en.wikipedia.org/wiki/Convention_over_configuration)
- keeping the ability to move from a [Single-page application (SPA)](https://en.wikipedia.org/wiki/Single-page_application) to a Universal Web application

<!-- more -->

### installation

Nuxt provides two ways to [install the module](https://nuxtjs.org/guide/installation)

- with vue-cli
- a basic `npm install nuxt` or `yarn add nuxt` if you're a [yarn](https://yarnpkg.com/en/) person

I prefer the latter as it doesn't rely on any global dependency… and it's also a good way to integrate it to an existing project.

For a web application, I always add:

- [Vue Router](https://router.vuejs.org/guide/)
- [Vuex Store](https://vuex.vuejs.org/guide/)
- [Vue I18N](https://kazupon.github.io/vue-i18n/)

I'm 100% sure that at one point or another I will need them.

Having the internationalization being done as soon as possible doesn't add a lot of additional effort and prevents me the boring task of including later (going file by file and adding the i18n calls & keys…)

### application structure

Vue doesn't enforce any kind of structure but we all like to stay organized, right?

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

In Nuxt it will be something [like that](https://nuxtjs.org/guide/directory-structure):

- nuxt.config.js `nuxt configuration`
- 📁 static `all static files`
- 📁 pages `all page files`
- 📁 layouts `all layouts files` (a nuxt thingy thing that we will speak about later)
- 📁 store `your Vuex Store`
- 📁 plugins [Vue plugins](https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin)

It's a flatter structure with obvious names.
I like the clear separation of `pages components` and `components` .

### commands

Both Vue CLI & Nuxt propose useful commands to start coding.
I'll just speak about the main ones and they both have the same purpose:

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

After that I can do `yarn dev` to start coding & `yarn build` to export. Those commands will stay independent of what the application is using underneath.

## Small Nuxt overview

Nuxt relies heavily on _convention over configuration_.
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

…and update the `nuxt.config.js`.

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

This is more boilerplate than expected and doesn't follow the `convention over configuration` pattern 😐
But once integrated, it's mostly unlikely that you would modify it.

**What in fact looks like an unnecessary configuration serves in fact a very important purpose.**

Nuxt allows us to build `universal web applications`.
This means that it should be able to bundle your code:

- for the browser
- for the server

If you're only targeting the browser (SPA), you don't have to worry about it.
**But if you're willing run the code on the server, you don't want it to break because of the use of some browser API**.

Nuxt allows that with a [small additional configuration](https://nuxtjs.org/guide/plugins#client-side-only).

```js
plugins: [
  `@/plugins/i18n.js`,
  // remove Server Side Rendering from this specific file
  { src: `@/plugins/browser.js`, ssr: false },
]
```

This will remove my `browser.js` file from the server bundle, and now I'm assured that it won't error because of a missing `window` object 😅

## Prototyping & evolution

In my opinion the main advantage of Nuxt is how convenient it is to make a small prototype and build upon it until a first result.
When creating anything, I want to be assured that I can make my application evolutes in any direction without being concerned about how I can make it grows.

### Single Page Application

This can be a good start.
It makes you able to prototype any application and give anyone the opportunity to play with it in almost real conditions.

You can make a simple static API by putting some JSON files inside the `static` folder.
And You can persist your application's state by using the [local storage api](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage) with [vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate)

Hosting solutions like [firebase](https://firebase.google.com/), [netlify](https://www.netlify.com/) or [github pages](https://pages.github.com/) provide a way to share your application for a free cost.

Also thanks the nuxt community, there is a great choice of [modules](https://github.com/nuxt-community/awesome-nuxt#official) to make you develop faster.

### about PWA integration

[Progressive Web Application](https://en.wikipedia.org/wiki/Progressive_Web_Apps) is a set of technology that can make your app load faster and feels more native on mobile.

There is the [pwa-module](https://pwa.nuxtjs.org/) for it! 🎉
Thanks to that it will:

- generate the [webmanifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) file
- generate the needed icons
- generate the [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker) with [workbox](https://developers.google.com/web/tools/workbox/)

Just don't forget to set the right [cache-control](https://developers.google.com/web/tools/workbox/guides/service-worker-checklist#cache-control_of_your_service_worker_file) for your service worker file 🤓

Everything can be deactivate/configurable in your `nuxt.config.js`

As I wanted more control about my `service worker` (like having a [reload prompt](https://developers.google.com/web/tools/workbox/guides/advanced-recipes)) I've decided to stop the `pwa-module` for generating it, and roll my own [workbox-build](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build)

### Universal Web Application

And now that you're satisfied with your prototype, you can push it further by integrating it to a Node server.
Nuxt provides some templates to see how integration works many frameworks:

- [express template](https://github.com/nuxt-community/express-template)
- [koa template](https://github.com/nuxt-community/koa-template)

I'll use Koa 🐨

In a `server/index.js` file:

```js
import Koa from 'koa'
import Router from 'koa-router'
import koaBody from 'koa-body'
import { Nuxt, Builder } from 'nuxt'

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
      ctx.body = {
        code: ctx.status,
        reason: err.message,
        stacktrace: err.stacktrace || err.stack,
      }
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
    ctx.respond = false // Mark request as handled for Koa
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(PORT, HOST, function endInit() {
    console.log(`APP Server is listening on ${HOST}:${PORT}`)
  })
}
```

## Conclusion

[Another article about Nuxt](https://medium.com/vue-mastery/10-reasons-to-use-nuxt-js-for-your-next-web-application-522397c9366b)
