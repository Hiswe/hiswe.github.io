---
title: Writing koa/nuxt applications
tags:
  - advanced
  - vue
cover: cover.png
comments: false
description: How we can integrate Nuxt in a Koa server
categories:
  - web
date: 2018-10-23 11:58:37
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

- You will need to be familiar with Koa/Nuxt.
- Be aware that both Nuxt and Koa use the concepts of `context (ctx)` & `middleware`.
  I've tried to differentiate them as much as I could in the following post, but if you're confused reread carefully and try to sort it out 😅
- You can find a working example of what I'm talking next in the [koa-nuxt-example repository](https://github.com/Hiswe/koa-nuxt-example)

## Shaped for express

Because [express.js](https://expressjs.com/) is the most commonly used Node.js server framework, most of the UWA frameworks `render function` are shaped for it.

This means that in express, [Nuxt integration came out of the box](https://github.com/nuxt/create-nuxt-app/blob/master/template/server/index-express.js).
You just need to call it like any express middleware:

{% include_code lang:js 13-koa-nuxt/01-express-middleware.js %}

Since we wants to use Koa, we will need to make our own middleware.
No need to think a lot about integration since this has already been solved but the [nuxt community](https://github.com/nuxt/create-nuxt-app/blob/master/template/server/index-koa.js)

{% include_code lang:js 13-koa-nuxt/02-koa-middleware.js %}

This will work perfectly if you're only interested in server rendering.

## Handling POST

Let say we want to be able to post a form.

- First we will install/use [koa-router](https://www.npmjs.com/package/koa-router) and [koa-body](https://www.npmjs.com/package/koa-body)
- Then with those we will be able to handle our `POST` action
- And we might want to do a database call inside it (`doSomethingAsync` in the example)

{% include_code lang:js 13-koa-nuxt/03-koa-form.js %}

This is kind of ok:

- we can now post some data
- redirect to `/` where Nuxt will handle the markup

JSON response can be added by later by

- checking what the request `Content-Type` header (`ctx.is('application/json')`)
- don't redirect
- send back the appropriate response

## Handling errors

We should write an error middleware.  
It will make sure that if something went wrong, our application won't crash.
To catch all the things, it will be our first middleware.

{% include_code lang:js 13-koa-nuxt/04-koa-form-error.js %}

So now if anything throw (DB call, JSON parsing…) we will serve a page with the error printed.

## Handling Server data with Nuxt

We also should send back some data validation to the user form.

{% caption Oh no! %}
{% asset_img validation.svg 500 250 "a form field with a validation error 'a form field with a validation error'" %}
{% endcaption %}

In order to display any validation in the Nuxt application we will need to:

- persist data between our post route and the redirection
- pass those data down to the Nuxt application
- do something with it

### Koa-session

The most common way to handle data between routes is with sessions.
We'll use [koa-session](https://www.npmjs.com/package/koa-session) for this.

The [installation guide](https://www.npmjs.com/package/koa-session#example) is pretty self explanatory.
This will add a `ctx.session` object where we can pass any kind of information.

Here is the different steps to follow:

- Validate our form
- Add the validation to the session
- Pass it to Nuxt
  - Because Nuxt doesn't use the Koa `ctx` but use `req` & `res`, copy our session information into those objects.
  - This will be done in a Koa middleware just before the nuxt-rendering middleware
- Integrate it in the Nuxt application by either using:
  - a [Nuxt middleware](https://nuxtjs.org/guide/routing#middleware)
  - the [nuxtServerInit](https://nuxtjs.org/guide/vuex-store#the-nuxtserverinit-action) for Vuex integration
    Right now let's start with `nuxtServerInit`.
- …and since now all is in the Vue realm now, just use our Vue Components.

{% include_code lang:js 13-koa-nuxt/05-validation.js %}

In the _store/index.js_

{% include_code lang:js 13-koa-nuxt/06-vuex-store.js %}

And that's it, we now have a Vuex store updated with our server validation.
Use [the mapState helper](https://vuex.vuejs.org/guide/state.html#the-mapstate-helper) in our Vue component to access it.

### Can't set headers after they are sent

Right now, we set the validation on our POST route, and never update it again.

It means that the validation will be kept until the user send a good form.
So if the user change page and go back to the form, _the application will still display the last validation result._
This isn't right, we should clear this once displayed.

This should be easy by updating our Koa middleware that link our session to nuxt.

{% include_code lang:js 13-koa-nuxt/07-naive-validation-clearing.js %}

**But this won't work**

You'll find in the server logs a `Can't set headers after they are sent`.
The problem comes from the `nuxtMiddleware` & how it bypasses the regular Koa flow.

Usually we set a `ctx.body` and all the previous middleware will continue their work.

{% caption regular flow %}
{% asset_img regular-flow.svg 500 400 "regular koa flow 'regular koa flow'" %}
{% endcaption %}

But that's what happen here

{% caption koa-nuxt flow %}
{% asset_img nuxt-flow.svg 555 400 "koa-nuxt flow 'koa-nuxt flow'" %}
{% endcaption %}

To fix that we need to make sure that our headers are set before the Nuxt middleware.

### autoCommit: false to the rescue

Koa-session lets us send the headers manually with [the manuallyCommit() method](https://www.npmjs.com/package/koa-session#sessionmanuallycommit)

So we have to refactor our server code like this:

{% include_code lang:js 13-koa-nuxt/08-manually-commit.js %}

This will solve our problem ❤️.
We just have now to remember calling `manuallyCommit()` every time we update the session… 😶

## Displaying all errors with Nuxt

There is one last thing we have to handle.
Right now our `handleError` middleware will make Koa show the error.
But in Nuxt we can have an [error layout](https://nuxtjs.org/guide/views#error-page) and we should take advantage of it.

To do this we'll need to modify our `handleError` middleware:

- set the error to the `ctx.req` object (Nuxt still only work with `req` & `res`)
- call Nuxt to render the page inside our `handleError` middleware
- [write a Nuxt middleware](https://nuxtjs.org/guide/routing#middleware) that will render the error page by calling [nuxtContext.error](https://nuxtjs.org/api/context)

{% include_code lang:js 13-koa-nuxt/09-koa-nuxt-error.js %}

And for the Nuxt part:

- create a `middleware/handle-server-errors.js` file
- reference it in the `nuxt.config.js`

{% include_code lang:js 13-koa-nuxt/10-nuxt-error-middleware.js %}

## Conclusion

Making Nuxt working with Koa isn't as smooth as with Express.
Still I prefer {% post_link 07-from-express-to-koa working with Koa %}, and with a little more boilerplate everything's fine.

I'm sure there is room for improvements, but it's working for me.
The downside is mainly more boilerplate code and handling session updates manually.

_Most of the code here isn't necessary if_

- you just want some basic server rendering
- you don't need to support any kind of session

_Supporting asynchronous code should be easy_

- Koa is build around that
- [nuxtServerInit](https://nuxtjs.org/guide/vuex-store#the-nuxtserverinit-action) supports [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- the same goes for [nuxt middleware](https://nuxtjs.org/guide/routing#middleware)

…and as said before you can find a full example [here](https://github.com/Hiswe/koa-nuxt-example)

💚 Nuxt
