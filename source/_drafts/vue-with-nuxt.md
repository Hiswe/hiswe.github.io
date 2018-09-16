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

In my opinion the main advantage of Nuxt is how convenient is it to make a small prototype and build upon it until a first result.
When building anything, I want to be assured that I can make my application evolutes in any direction without being worried about it's future needs.

### Single Page Application

This always a good start. It makes you able to do quick prototypes and give anybody the opportunity to play with it.

### Universal Web Application

## Ecosystem

### Progressive Web Application

## Conclusion

[Another article about Nuxt](https://medium.com/vue-mastery/10-reasons-to-use-nuxt-js-for-your-next-web-application-522397c9366b)
