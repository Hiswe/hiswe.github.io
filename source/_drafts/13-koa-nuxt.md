---
title: Writing koa/nuxt applications
cover: cover.png
comments: false
description:
tags:
categories:
---

## Introduction

You're ready to make your new application.
You take [Vue 2](https://vuejs.org/) as your framework

But you want your application to be:

- fast
- bulletproof

So you decide to make a {% post_link 12-vue-with-nuxt Universal Web Application %} with [Nuxt 2](https://nuxtjs.org/) & [Koa 2](https://koajs.com/)
It will:

- fasten the first rendering
- be able to run without JS activated on the client side

<!-- more -->

**Notes:**

- You will need to be familiar with Koa/Nuxt
- I have {% post_link 07-from-express-to-koa detailed here %} why I prefer to work with Koa instead of express

## Shaped for express

Because [express.js](https://expressjs.com/) is the most commonly used Node.js server framework, most of the UWA frameworks `render function` are shaped for it.

This means that in express, [Nuxt integration came out of the box](https://github.com/nuxt/create-nuxt-app/blob/master/template/server/index-express.js).
You just need to call it like any express middleware:

{% include_code lang:js 13-koa-nuxt/01-express-middleware.js %}

Since we wants to use Koa, we will need to make our own middleware.
No need to think a lot since this has already been solved but the [nuxt community](https://github.com/nuxt/create-nuxt-app/blob/master/template/server/index-koa.js)

{% include_code lang:js 13-koa-nuxt/02-koa-middleware.js %}

This will work perfectly if you're only interested server rendering

## Handling POST

Since one of our goal is to be able to work without JS on the client side, we'll need to add more code.
Let say we want to be able to post a form.

- First we will use [koa-router](https://www.npmjs.com/package/koa-router) and [koa-body](https://www.npmjs.com/package/koa-body)
- Then with those we will able to handle our `POST` action
- And we might want to do a database call inside it (`doSomethingAsync` in the example)

{% include_code lang:js 13-koa-nuxt/03-koa-form.js %}

This is kind of ok:

- we can now post some data without JS activated
- redirect to `/` where Nuxt will handle the markup

But we should write an error middleware to be sure that if something went wrong, this will not crash our application

{% include_code lang:js 13-koa-nuxt/04-koa-form-error.js %}

This is ok but a bit rough: we should send back some data validation to the user form.

## Handling Server data in Nuxt

In order to display any validation in the Nuxt application we will need to:

- persist data between our post route and the redirection
- pass those data down to the Nuxt application
- do something with it

### Koa-session

The most common way to handle data between routes is with sessions.
We'll use [koa-session](https://www.npmjs.com/package/koa-session) for this.

The [installation guide](https://www.npmjs.com/package/koa-session#example) is pretty self explanatory.
This will add a `ctx.session` object where we can pass any kind of information.

Here is the different steps we have to make:

- Validate our form
- Add the validation to the session
- Pass it to Nuxt
  - Because Nuxt doesn't use the Koa `ctx` but use `req` & `res`, copy our session information into those objects.
  - This will be done in a Koa middleware just before the nuxt-rendering middleware
- Integrate it in the Nuxt application by either using:
  - a [Nuxt middleware](https://nuxtjs.org/examples/middleware/)
  - the [nuxtServerInit](https://nuxtjs.org/guide/vuex-store#the-nuxtserverinit-action) for Vuex integration
    The example will use that
- Do what we want in our Vue components with those

{% include_code lang:js 13-koa-nuxt/05-validation.js %}

In the _store/index.js_

{% include_code lang:js 13-koa-nuxt/06-vuex-store.js %}

And that's it, we now have a store updated with our server validation.
Use [the mapState helper](https://vuex.vuejs.org/guide/state.html#the-mapstate-helper) in our Vue component to access it.

### Koa-session caveats

Right now, we set the validation on our POST route, and never update it again.
This means that if the use reload the form, _the application will still display the last validation result._
This isn't right, we should clear this once displayed.

This should be easy by updating our Koa middleware that link our session to nuxt

{% include_code lang:js 13-koa-nuxt/07-naive-validation-clearing.js %}

**But this won't work**
