---
title: Nuxt PWA
cover: cover.png
comments: false
description:
tags:
categories:
---

## Introduction

TBD

<!-- more -->

### about PWA integration

[Progressive Web Application](https://en.wikipedia.org/wiki/Progressive_Web_Apps) is a set of technology that can make your app load faster and feels more native on mobile.

There is the [pwa-module](https://pwa.nuxtjs.org/) for it! 🎉
Thanks to that it will:

- generate the [webmanifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) file
- generate the needed icons
- generate the [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker) with [workbox](https://developers.google.com/web/tools/workbox/)

Just don't forget to set the right [cache-control](https://developers.google.com/web/tools/workbox/guides/service-worker-checklist#cache-control_of_your_service_worker_file) for your service worker file 🤓

Everything can be deactivate/configurable in your `nuxt.config.js`

As I wanted more control about my `service worker` (like having a [reload prompt](https://developers.google.com/web/tools/workbox/guides/advanced-recipes)) I've decided to stop the `pwa-module` for generating it, and roll my own [workbox-build](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build)
