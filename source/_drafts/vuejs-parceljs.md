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

- Had some problem while building `.vue` files in production mode
- [doesn't support (yet) babel 7](https://github.com/parcel-bundler/parcel/issues/868)
