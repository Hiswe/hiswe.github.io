---
title: from express to koa
cover: cover.png
comments: false
description:
tags:
- advanced
categories:
- nodejs
---

## Introduction

I want to explain here why I choose to move from [express.js](https://expressjs.com/) to [koa](https://koajs.com/) 

<!-- more -->

To understand this article you should know about:

- [javascript](https://developer.mozilla.org/bm/docs/Web/JavaScript)
  - what is [a promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  - how to write promises with [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [nodeJs](https://nodejs.org/en/) 
  - how to setup up a simple [express.js](https://expressjs.com/) server
  - what is an [express middleware](https://expressjs.com/en/guide/writing-middleware.html)

## TL;DR

With [NodeJS]() version 7 came the [support of `async/await` function](http://node.green/#ES2017-features-async-functions).  
Koa just plays more naturally with them ➡️ use Koa.

## Express

We will write a simple route that will:

- query a database to get some stuff
- pass the result to a second database call
- then send the final result as the response

### node style callbacks

We will use here the nodeJs style callback signature:  
A callback function with `error` as the first argument & `result` as the second.

{% include_code lang:js 07-from-express-to-koa/01-express-node-callback.js %}

So far so good. 
But luckily we our database object support also promises.

### promises

The following will do the same as the code above but:

- we achieved to flatten our code
- we don't duplicate anymore the error control

{% include_code lang:js 07-from-express-to-koa/01-express-promise.js %}

So far so good. 
But luckily since we use nodeJS >= 7 we can use async/await.

### async/await

The following will do the same as the code above but:

- we achieved to have a less cumbersome code
- we still don't duplicate the error control

{% include_code lang:js 07-from-express-to-koa/03-express-async-await.js %}

So far so good. 
But it will get a little messier if we add more routes

{% include_code lang:js 07-from-express-to-koa/04-express-async-multiple-routes.js %}

You see? 
We write again and again `try {} catch(error){ next(error) }`  
Not a big deal but quite boring at the end…
But luckily we can write a middleware for that 

### better async/await

So let's write our middleware: 

{% include_code lang:js 07-from-express-to-koa/05-express-async-middleware.js %}

A more detailed article about that was written by [Alex Bazhenov](https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016)

Finally lets use it in our code:

{% include_code lang:js 07-from-express-to-koa/06-express-async-with-middleware.js %}

So far so good. 
But we still have to write some boilerplate to handle that…  
Here comes KOA!

## KOA

### what is KOA?

to sum up: it's the same team behind express.js that have written a web framework using the recent additions in the Javascript language.
__At its core it's using promises with async/await__
You can find the [full introduction here](https://koajs.com/#introduction)

Setting up a server with Koa is very straightforward.
For the routing, as nothing is provided by default, we will use [koa-router](https://www.npmjs.com/package/koa-router)

### setting up the router and error middleware

This snippet should be enough:

{% include_code lang:js 07-from-express-to-koa/07-koa-boilerplate.js %}

### writing our routes

And this is how we will write our application code:

{% include_code lang:js 07-from-express-to-koa/08-koa-with-routes.js %}

which appears to me more leaner 😀

- no duplicated `try/catch`
- no need to write an async middleware
- no need to wrap all our route handlers into that middleware 

### Koa ecosystem

As for now, Koa hasn't as much middleware as express.js. 
This can be an issue in migrating.

But the *must have* middlewares are already here, and writing your own middleware is quite easy.
I never found myself in a situation where I couldn't achieve what I wanted to do with Koa.

So if you like `async/await` code style, give Koa a try 🙂
