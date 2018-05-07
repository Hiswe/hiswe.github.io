---
title: from express to koa
cover: cover.png
comments: false
description:
tags:
categories:
- nodejs
---

## Introduction

I want to explain here why I choose to move from [express.js](http://expressjs.com/) to [koa](https://koajs.com/) 

<!-- more -->

## TL;DR

With [NodeJS]() version 7 came the [support of `async/await` function](http://node.green/#ES2017-features-async-functions).  
Koa just plays more naturally with them ➡️ use Koa.

## express & asynchronous functions

### node style callbacks

- query a database to some stuff
- pass the result to a second database call
- then send the final result as the response

{% codeblock lang:javascript %}
app.get('/', (request, response, next) => {
  database.doStuff( (error, firstResult) => {
    // will send it the error middleware below
    if (error) return next(error);
    // we need another database call
    database.doAnotherStuff(firstResult, (error, finalResult) => {
      // will send it the error middleware below… again
      if (error) return next(error);
      // no error, send the result
      response.json(finalResult);
    });
  });
});

app.use(function errorMiddleware(error, request, response, next) {
  response.status(500);
  response.send(error);
});
{% endcodeblock %}

So far so good. 
But luckily we our database object support also promises.

### promises

The following will do the same as the code above but:

- we achieved to flatten our code
- we don't duplicate anymore the error control

```js
app.get('/', (request, response, next) => {
  database.doStuff()
  .then( firstResult => {
    return database.doAnotherStuff(firstResult);
  })
  .then( finalResult => {
    response.json(finalResult);
  })
  .catch( next ) 
});
app.use(function errorMiddleware(error, request, response, next) {
  response.status(500);
  response.send(error);
});
```

So far so good. 
But luckily since we use nodeJS >= 7 we can use async/await.

### async/await

```js
// declare an async function 
app.get('/', async (request, response, next) => {
  try {
    const firstResult = await database.doStuff();
    const finalResult = await database.doAnotherStuff(firstResult);
    response.json(finalResult);
  } catch( error ) {
    next( error )
  }
});
app.use(function errorMiddleware(error, request, response, next) {
  response.status(500);
  response.send(error);
});
```


