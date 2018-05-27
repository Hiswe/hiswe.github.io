---
title: sub-queries in sequelize with squel
tags:
  - advanced
cover: cover.png
comments: false
categories:
  - nodejs
date: 2018-05-27 10:48:58
description:
---

## Introduction

If you want to handle a SQL Database in [NodeJS](https://nodejs.org/en/), you may want to use [Sequelize](http://docs.sequelizejs.com/).  

It's a nice ORM with a promise based API that makes it easy to:

- defines models
- defines relations between those models
- retrieves those relations when accessing an instance.

But I find it hard to handle `COUNT` and `SUM` functions inside instances even 
after [reading issues, trying without success to find the Sequelize way®](https://github.com/sequelize/sequelize/issues/222).  
Nothing was working for me 😭

And so this is the story of how I solved it with [squel](https://hiddentao.com/squel/), a SQL query generator

<!-- more -->

- Some knowledge into the sequelize API will really helps understanding this article 🤓
- the server's framework used is [Koa](https://koajs.com/)
- I've put together a [little repository](https://github.com/Hiswe/sequelize-example) containing a working example

## the database

### models

we will have 2 models:

- basket
  - with a name
- items
  - with a name
  - with a price

__A basket will have many items__

So let's [define our models using Sequelize](https://github.com/Hiswe/sequelize-example/blob/master/index.js#L59-L91):

{% include_code lang:js 09-sequelize-subqueries-with-squel/01-database-configuration.js %}

### instances

And we will need [to define our instance](https://github.com/Hiswe/sequelize-example/blob/master/index.js#L125-L165):

{% include_code lang:js 09-sequelize-subqueries-with-squel/02-instance-configuration.js %}

## expected result

- the number of items inside the basket
- the total price of the basket

So something like this:

{% include_code lang:json 09-sequelize-subqueries-with-squel/03-expected-result.json %}

## doing this server side

It should be quite simple:

- query the basket with his items
- process everything to have the right informations

{% include_code lang:js 09-sequelize-subqueries-with-squel/04-server-processing.js %}

you can find the [equivalent code in the demo](https://github.com/Hiswe/sequelize-example/blob/master/router.js#L20-L36).

But it's a work that can be done on the Database right?
So better doing it there.

## the SQL sub-query

In order to have this done with our Database, we need Sequelize to generate something like this in the query:

{% include_code lang:sql 09-sequelize-subqueries-with-squel/05-sub-query.sql %}

We could have written this manually but we have NodeJS by our side, and it's full eco-system.

Se let's go for [squel](https://www.npmjs.com/package/squel) which does just this: write SQL in a more JS way.

## Interfacing Squel with Sequelize

According [Sequelize documentation](http://docs.sequelizejs.com/manual/tutorial/querying.html#attributes) this is how we can define custom attributes:

{% include_code lang:js 09-sequelize-subqueries-with-squel/06-sequelize-sub-queries-documentation-example.js %}

The main goal here will be to generate the right query for the computed attribute

### squel configuration & caveats

- we must configure squel to support postgres Database
- even if there is a lot of [escaping options](https://hiddentao.com/squel/api.html#cls_defaultquerybuilderoptions) __I didn't find one that cover all the use case__
    Postgres will fail with `WHERE (item.basketId = basket.id)`
    → we should format it like this `WHERE ("item"."basketId" = "basket"."id")`
- enclose our result with parenthesis because Sequelize won't do it for us
    → `(…our query) AS "itemsCount"`

All those can be done quite easily with a few helpers:

{% include_code lang:js 09-sequelize-subqueries-with-squel/07-squel-configuration.js %}

Minoring some slight differences this is the [equivalent code in the demo](https://github.com/Hiswe/sequelize-example/blob/master/router.js#L42-L52).

I'm using [Sequelize.static()](http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#static-method-literal) but I'm not sure it's necessary. It just prevents Sequelize from escaping the query string.


### putting things together

And that will be our final code:

{% include_code lang:js 09-sequelize-subqueries-with-squel/08-sequelize-with-squel.js %}

and the [related part in the demo](https://github.com/Hiswe/sequelize-example/blob/master/router.js#L54-L85)

## further notes

### find our WHERE query

I'm not a SQL expert so how to write our `WHERE` query?

- configure Sequelize to output the SQL queries in the console
- make Sequelize fetch a model with his relations
- look at your logs
- copy/paste the interesting parts 

### build a sub-query generator

Writing all the squel code can be cumbersome.
But we can just make a function that will do that for us:

{% include_code lang:js 09-sequelize-subqueries-with-squel/09-squel-generator.js %}

the [related code in the demo](https://github.com/Hiswe/sequelize-example/blob/master/router.js#L87-L119)

## conclusion

Sequelize is a very fine piece of code. For 95% of the time it will just work as expected.
For the 5 other percent you can write raw SQL queries 🤓 or use squel to do it for you 🤪

By doing so we have removed the burden of processing the Sequelize result in our server 😎
