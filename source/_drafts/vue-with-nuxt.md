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

I really like the framework [Vue.js](https://vuejs.org/).  
To use it, we have many bootstrapping tools:

- [Vue CLI 3](https://cli.vuejs.org/) the Standard Tooling for Vue.js Development
  The official solution to setup quickly a vue application.
- [ParcelJs](https://parceljs.org/) the Blazing fast, zero configuration web application bundler
  You can read {% post_link 11-parcel-with-vue in this post %} my own experience with it.
- [Nuxt](https://nuxtjs.org/) Universal Vue.js Applications

But which solution to choose?

**`[TL;DR]`** go with nuxt if you like:

- an easy setup
- [Convention over configuration](https://en.wikipedia.org/wiki/Convention_over_configuration)
- keeping the ability to move from a [Single-page application](https://en.wikipedia.org/wiki/Single-page_application) to a Universal Web application

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

Vue doesn't enforce any kind of structure but you'll need to stay organized.

If you use Vue CLI, it will create [this kind of structure](https://nuxtjs.org/guide/directory-structure):

- vue.config.js `vue configuration`
- 📁 src
  - main.js `your application entry point`
  - router.js `configuring routes`
  - App.vue `main Vue component`
  - 📁 assets `all static files`
  - 📁 components `other vue components`
  - 📁 store
    - index.js `your Vuex Store`

It's a good start, but you may want to separate page components from other components.

In Nuxt it's something like that:

- nuxt.config.js `nuxt configuration`
- 📁 static `all static files`
- 📁 pages `all page files`
- 📁 layouts `all layouts files` (a nuxt thingy thing that we will speak about later)
- 📁 store `your Vuex Store`
- 📁 plugins [Vue plugins](https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin)

It's a flatter structure with obvious names.
You don't have to think where to put things…

…and I don't like to think too much 😀

### commands

Both Vue CLI & Nuxt propose some commands to start coding:

[Nuxt commands](https://nuxtjs.org/guide/commands):

- `nuxt` Launch a development server on localhost:3000 with hot-reloading.
- `nuxt build` Build your application with webpack and minify the JS & CSS (for production).

## Prototyping & evolution

In my opinion the main advantage of Nuxt is how convenient is it to make a small prototype and build upon it until a first result.

Nuxt rely heavily on _convention over configuration_.
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

With Nuxt, this routing will look like this:

- 📁 pages
  - index.vue
  - foo.vue
  - 📁 bar
    - \_id.vue

Renaming a route is now just changing a file/folder name.

### store

The same goes with a standard Vuex Store:

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

Integrating more things from the Vue ecosystem is as simple as it is from a standard Vue application.
No real advantages here but the satisfaction of having all those regrouped in the `plugin` folder.

## One module to export them all

### Universal Web Application

## Ecosystem

### Progressive Web Application

## Conclusion

[Another article about Nuxt](https://medium.com/vue-mastery/10-reasons-to-use-nuxt-js-for-your-next-web-application-522397c9366b)
