---
title: vue with parcel
cover: cover.png
comments: false
description:
tags:
categories:
---

## Introduction

TBD

<!-- more -->

## vueJs

### good things

- More “webby” syntax
- Single file components out off the box
  - support ≠ languages out of the box (scss, typescript…)
  - support scoped styles out of the box
- Possibility to declare global variables inside the Vue instance:
    No more wrapping in `connect` or `router` HoC in order to access those

### migrating from React

- Have an official router
- Less Javascript:
  - Have to declare all dependencies on a component (vs just make an import)
  - Have to declare all accessibles props (vs just make an import)

### haven't tested yet

- server rendering

## parcelJS

### the good part

- they keep the promise of “simplicity”
- very good for developing a single page application
- like the auto installation of missing dependencies

### Some issues

- they keep the promise of “simplicity”
  - when you have a problem it's most likely you'll have to wait a new version
- had some problem with building & minifying `.vue` files in production mode
- [doesn't support (yet) babel 7](https://github.com/parcel-bundler/parcel/issues/868)
- when building from an html file
  - can't simply ignore assets: a `manifest.json` will be converted to `manifest.b01ff217.js`…
  - no PWA support, and since every ressource is parsed can't include a dumb pwa file
