---
title: the state of pwa with parcel on february 2019
cover: cover.png
comments: false
description: How the Parcel bundler plays now with PWA
tags:
  - web
categories:
---

## Introduction

In the mid 2018 I have played with Parcel to build a [VueJs](https://vuejs.org/) [Progressive Web Application](https://en.wikipedia.org/wiki/Progressive_Web_Apps) (PWA).
At the moment there were some quirks to do so.  
Reworking on it, I've seen the evolutions, and feels how it compares with [Webpack](https://webpack.js.org/).

<!-- more -->

## Reminders

If you're already familiar with the title, you can skip this part 🥳.

### Progressive Web Application (PWA)

To be very very short a PWA is a website that use a certain set of web technologies. 
It allows your application to be installed on a mobile OS (iOS/Android) and appear like a regular application.

To dig a little more into it:

- it's not restricted to mobile device
- it's not restricted to any framework, it just needs to use web technologies
- it allows offline support
- it allows notifications
- and many other things…

It needs:

- that you'r hosting your website in HTTPS
- a browser that supports the [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) 
- a [webmanifest file](https://developer.mozilla.org/en-US/docs/Web/Manifest): a JSON file that provides informations about your web-application
- a [service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API): a Javascript file that use the SW Api to do stuff (yeah “stuff”, coz you can do many many things) 

You can all write those your preferred text editor, but…

### …workbox

is a [tool developped & maintained by Google](https://developers.google.com/web/tools/workbox/) to help you write the service worker file.

Even if you can come up with your own SW file, I always prefer to use tools that streamline the process and prevents me for doing silly errors.

If you haven't yet, try it. Documentation is good and the tool is easy to use.
And mostly: Workbox really helps.

### ParcelJS 1.11.0

It's the _Blazing fast, zero configuration web application bundler._
It helps people to compile things in web technologies (HTML, CSS & JS)

It means to be a simpler alternative to webpack (that has the same purpose, and whose main critic is to be hard to configure)

I've written {% post_link 11-parcel-with-vue an article about Parcel %} if you want more informations.

## How was it with Parcel in mid-2018

The main principle of Parcel is that it will parse your application entry point, follow any links within it, and compile/optimise/hash them.
It can be almost anything (see the [asset types](https://en.parceljs.org/getting_started.html) in the doc!), so HTML, CSS, JS, images, JSON… ANYTHING!

So this is good & fine, but it can be a problems as Parcel tends to be too greedy  (being too greedy is bad)

In order to have a PWA we need to (in order): 

1. have a `manifest.webmanifest` file & some icons 
2. build our HTML/JS/CSS/assets
  - our HTML should reference the manifest with a `<link rel="manifest" href="/manifest.webmanifest">`
  - our future service worker should be called in our JS file
    ```js
    if (`serviceWorker` in navigator) {
      window.addEventListener(`load`, () => {
        navigator.serviceWorker.register(`/my-application-service-worker.js`)
      })
    }
    ``` 
3. build our service worker with Workbox that will cache any of the assets needed for the application
4. …and that's it 🎉

But at this time Parcel would have:

- followed our manifest link and converted it to a js file 😨
- followed our service worker file and breaks because it doesn't exist yet 😰
- and so 😱

In order to avoid that you would have to:

- avoid your HTML file as an enrty point (so compile only the JS/CSS)
- generate the service worker with [workbox-build](https://developers.google.com/web/tools/workbox/guides/generate-service-worker/workbox-build)
- create your custom HTML file that:
  - reference the manifest file
  - have a script tag that install our service worker (this way it won't be parsed by Parcel)
  
