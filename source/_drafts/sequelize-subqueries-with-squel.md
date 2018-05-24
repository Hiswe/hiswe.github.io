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

- define models
- define relations between those models
- retrieve those relations when accessing an instance.

But I find it hard to handle `COUNT` and `SUM` functions inside instances.  
I'm not really into writing `SQL` queries by own… 

And it's where [squel](https://hiddentao.com/squel/) can helps us!

<!-- more -->

Some knowledge int the sequelize APi will really help understanding this article 🤓

## the database

### models

we will have 2 models:

- basket
  - with a name
- items
  - with a name
  - with a price

__A basket will have many items__

So let's define our models using Sequelize:

{% include_code lang:js sequelize-subqueries-with-squel/01-database-configuration.js %}

### instances

And wwe will need our instance:




