---
title: sub-queries in sequelize with squel
cover: cover.png
comments: false
description:
tags:
  - advanced
categories:
  - nodejs
---

## Introduction

If you want to handle a SQL Database in [NodeJS](https://nodejs.org/en/), you may want to use [Sequelize](http://docs.sequelizejs.com/).  

It's a nice ORM with a promise based API that makes it easy to:

- defines models
- defines relations between those models
- retrieves those relations when accessing an instance.

But I find it hard to handle `COUNT` and `SUM` functions inside instances even 
after [reading issues trying to find the Sequelize way®](https://github.com/sequelize/sequelize/issues/222).  
Nothing was working for me 😭

I'm not really into writing `SQL` queries by own… 

And it's where [squel](https://hiddentao.com/squel/) can helps us!

<!-- more -->

Some knowledge into the sequelize API will really helps understanding this article 🤓

## the database

### models

we will have 2 models:

- basket
  - with a name
- items
  - with a name
  - with a price

__A basket will have many items__

So let's [define our models using Sequelize](https://github.com/Hiswe/sequelize-example/blob/master/index.js#L59-L86):

{% include_code lang:js sequelize-subqueries-with-squel/01-database-configuration.js %}

### instances

And we will need [to define our instance](https://github.com/Hiswe/sequelize-example/blob/master/index.js#L117-L134):

{% include_code lang:js sequelize-subqueries-with-squel/02-instance-configuration.js %}

## what we want

- the number of items inside the basket
- the total price of the basket

So something like this:

{% include_code lang:json sequelize-subqueries-with-squel/03-expected-result.json %}


