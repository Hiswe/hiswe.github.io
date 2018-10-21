---
title: Dealing with koa/nuxt caveats
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

- You will need to be familiar with Koa
- This should apply also for [React](https://reactjs.org/)/[Next.js](https://nextjs.org/)
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

## handling POST

Since one of our goal to be able to work without JS on the client side, we will need to write more.
Let say we want to be able to post a form.

- First we will use [koa-router](https://www.npmjs.com/package/koa-router) and [koa-body](https://www.npmjs.com/package/koa-body)
- Then with those we will able to handle our `POST` action
- And we might want to do a database call inside it (`doSomethingAsync` in the following)

{% include_code lang:js 13-koa-nuxt/03-koa-form.js %}

This is kind of ok:

- we can now post some data without JS activated
- redirect to `/` where Nuxt will handle the markup

But we should write an error middleware to be sure that if something went wrong, this will ne crash our application

{% include_code lang:js 13-koa-nuxt/04-koa-form-error.js %}
