---
title: Going Vue with Nuxt
tags:
  - advanced
  - vue
cover: cover.png
comments: false
description: why use nuxt instead of “vanilla” Vue
categories:
  - web
date: 2018-09-19 18:56:58
---

## Introduction

[Vue.js](https://vuejs.org/) is a solid option for building web applications.  
To use it we have two major tools:

- [Vue CLI 3](https://cli.vuejs.org/) _the Standard Tooling for Vue.js Development_
  The official solution to setup quickly a vue application.
- [Nuxt](https://nuxtjs.org/) _Universal Vue.js Applications_
  Yeah, we will talk about that.

But how Nuxt differs from a Standard Vue Application?

**`[TL;DR]`**

- A different tool to setup your Vue application
- Some [convention over configuration](https://en.wikipedia.org/wiki/Convention_over_configuration)
- The ability to move from a [Single-page application (SPA)](https://en.wikipedia.org/wiki/Single-page_application) to a [Universal Web application](http://www.acuriousanimal.com/2016/08/10/universal-applications.html)

<!-- more -->

### installation

Nuxt provides two [installation's ways](https://nuxtjs.org/guide/installation):

- with vue-cli
- a basic `npm install nuxt` or `yarn add nuxt` if you're a [yarn](https://yarnpkg.com/en/) person, create some folders and add some modules if you want to [use pre-processors](https://nuxtjs.org/faq/pre-processors#how-to-use-pre-processors-)

I prefer the latter as it doesn't rely on any global dependency… and it's also a good way to integrate Nuxt to an existing project.

For a web application, I always add:

- [Vue Router](https://router.vuejs.org/guide/)
- [Vuex Store](https://vuex.vuejs.org/guide/)
- [Vue I18N](https://kazupon.github.io/vue-i18n/)

I'm 100% sure that at one point or another I will need them.

Having the internationalization being done as soon as possible doesn't demand a lot of extra efforts and prevents me the boring task of including it later (going file by file and adding the i18n calls & keys…)

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
  - 📁 views `your pages components`
  - 📁 store
    - index.js `your Vuex Store`

Nuxt will require something [like that](https://nuxtjs.org/guide/directory-structure):

- nuxt.config.js `nuxt configuration`
- 📁 static `all static files`
- 📁 pages `all page files`
- 📁 layouts `all layouts files` (a nuxt thingy thing that we will speak about later)
- 📁 store `your Vuex Store`
- 📁 plugins [Vue plugins](https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin)

It's a flatter structure with obvious names.

{% caption I ❤️ folders %}
{% asset_img structure.svg 600 285 "Comparison between Vue & Nuxt file structure 'Comparison between Vue & Nuxt file structure'" %}
{% endcaption %}

### commands

Both Vue CLI & Nuxt propose a bunch of useful commands.
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

{% include_code lang:json 12-vue-with-nuxt/npm-script.json %}

After that, I can do `yarn dev` to start coding & `yarn build` to export.
Those commands will stay independent of whatever the application is using underneath.

## Small Nuxt overview

Nuxt relies in some part in _convention over configuration_.
By creating files, Nuxt will take care of integrating them in your Vue application's.

Here are the main domains where it shines.

### routing

In a standard Vue application you'll need to manually configure the router.
This how the `router.js` usually looks like:

{% include_code lang:js 12-vue-with-nuxt/vue-router.js %}

This has some drawbacks when refactoring.
If you want to rename a route, you'll have to:

- rename the component
- modify the `router.js` file
  - change the route name
  - change the component import
  - change the webpack chunk name

With Nuxt, this routing will look like this:

- 📁 pages
  - index.vue
  - foo.vue
  - 📁 bar
    - \_id.vue

**Renaming a route is now just changing a file/folder name.**
And you have the **page code splitting out of the box.**

{% caption Who does not like todo lists? %}
{% asset_img routing.svg 700 285 "a Vue todo list longer than the Nuxt one 'a Vue todo list longer than the Nuxt one'" %}
{% endcaption %}

### store

The same goes with a standard Vuex store:

{% include_code lang:js 12-vue-with-nuxt/vuex-store.js %}

And as you've guessed in Nuxt it just follows the same principles as for the routing:

- 📁 store
  - foo.js
  - bar.js

With the same advantages as the routing.
Still, there is a [classic mode](https://nuxtjs.org/guide/vuex-store#classic-mode) if you want to have more control over it.

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

{% include_code lang:js 12-vue-with-nuxt/nuxt-plugin.js %}

…and update the `nuxt.config.js`…

{% include_code lang:js 12-vue-with-nuxt/nuxt-config.js %}

…and you can use `$t('my-i18n0key')` inside your app!

As for now, Nuxt doesn't support a `convention over configuration` pattern for plugins' integration 😐 so you'll have to write some boilerplate code.
On the bright side this code is unlikely to change in the future.

**But what in fact looks like an unnecessary configuration serves in fact a very important purpose.**

Nuxt allows us to build `universal web applications`.
This means that it should be able to bundle your code:

- for the browser
- for the server

If you're only targeting the browser (SPA), you don't have to worry about it.
**But if you're running the code on the server, you don't want it to break because of the use of some browser API**.

{% caption window killed me! %}
{% asset_img node-error.svg 300 240 "Node.js being killed by window 'Node.js being killed by window'" %}
{% endcaption %}

Nuxt prevents that with a [small additional configuration](https://nuxtjs.org/guide/plugins#client-side-only).

{% include_code lang:js 12-vue-with-nuxt/nuxt-config-ssr.js %}

Now `browser.js` will be removed from the server bundle, and we're assured that our code won't `throw` because of a missing `window` object in the NodeJs environment 😅

## Prototyping & evolution

{% caption that escalated quickly %}
{% asset_img evolution.svg 650 285 "a people playing blocks until he build a castle 'a people playing blocks until he build a castle'" %}
{% endcaption %}

In my opinion the main advantage of Nuxt is how convenient it is to make a small prototype and build upon it until a first result.
While being sure that we can make it evolve in any direction in the future.

### single page application

Writing a SPA makes you able to build quite quickly a small app and give anyone the opportunity to play with it in almost real conditions.

You can make a simple static API by putting some JSON files inside the `static` folder and you can persist your application's state by using the [local storage api](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage) with [vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate)

Hosting solutions like [firebase](https://firebase.google.com/), [netlify](https://www.netlify.com/) or [github pages](https://pages.github.com/) provide a way to share your application for a free cost.

### universal web application

And now that you're satisfied with your prototype, you can push it further by integrating it to a Node server.
Nuxt provides some templates to see how integration works many frameworks:

- [express template](https://github.com/nuxt-community/express-template)
- [koa template](https://github.com/nuxt-community/koa-template)

I'll use Koa 🐨

In a `server/index.js` file:

{% include_code lang:js 12-vue-with-nuxt/nuxt-koa.js %}

In the `package.json` you can add this script:

{% include_code lang:json 12-vue-with-nuxt/server-script.json %}

And minus updating your store's actions to point to your new API, you're done.
No need to modify other parts of your Vue application.

## And also…

This post isn't an exhaustive list of what Nuxt can offer you.
Here's a quick list of other things that it provides:

- out of the box [HTML meta tags](https://nuxtjs.org/guide/views#html-head) with [vue-meta](https://www.npmjs.com/package/vue-meta)
- out of the box [Page transitions](https://nuxtjs.org/api/pages-transition)
- out of the box [Loading Progress Bar](https://nuxtjs.org/api/configuration-loading)
- out of the box [asyncData](https://nuxtjs.org/api/) & [fetch](https://nuxtjs.org/api/pages-fetch) hooks.  
  This gives a way to get async data on the server before rendering the markup
- a good documentation
- a great choice of [modules](https://github.com/nuxt-community/awesome-nuxt#official) thanks to the nuxt community.
  Those provide a good way to integrate some popular libraries (like [Axios](https://github.com/nuxt-community/axios-module) for example)
- etc.

## Conclusion

Nuxt doesn't have a beautiful GUI 😶 but it's a very clever piece of code that makes me feel more productive while building a website or an application.

I've made a [small demo repository](https://github.com/Hiswe/nuxt-universal-application) with almost the same code as used in this post.

If you want to learn more, here are some useful links I've came across recently:

- [7 Frontend Architecture Lessons From Nuxt.js](https://zendev.com/2018/09/17/frontend-architecture-lessons-from-nuxt-js.html) by [Kevin Ball](https://zendev.com/authors/kball.html)
  A good analysis on how Nuxt can help you
- [10 reasons to use Nuxt.js for your next web application](https://medium.com/vue-mastery/10-reasons-to-use-nuxt-js-for-your-next-web-application-522397c9366b) by [Derick Sozo
  ](https://medium.com/@dericksozo)
  Another analysis about the strong points of nuxt
- [Vue.js — There and Back Again in 1.5 years](https://medium.com/@koreus/vue-js-there-and-back-again-in-1-5-years-756c1582aa96) by [Coreus](https://medium.com/@koreus).
  It's not about nuxt, but it talk about living in the long term with a Vue Application.  
  There is also a small part about [component/views folder structure](https://medium.com/@koreus/vue-js-there-and-back-again-in-1-5-years-756c1582aa96#5aea) that resonates with what I'm talking about.
- A [list of tutorials](https://github.com/nuxt-community/awesome-nuxt#tutorials) gathered by [Nuxt community](https://github.com/nuxt-community)
