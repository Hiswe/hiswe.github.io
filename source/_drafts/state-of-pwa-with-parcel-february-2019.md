---
title: State of PWA with Parcel, february 2019
cover: cover.png
comments: false
description: How the Parcel bundler plays now with PWA
categories:
  - web
tags:
  - advanced
---

## Introduction

In the mid 2018 I have played with Parcel to build a [VueJs](https://vuejs.org/) [Progressive Web Application](https://en.wikipedia.org/wiki/Progressive_Web_Apps) (PWA).
At the moment there were some quirks to do so.  
Reworking on it, I can tell how it compares with [Webpack](https://webpack.js.org/) and the work the Parcel's team have done to improve the experience.

<!-- more -->

## Reminders

If you're already familiar with the title, you can skip this part 🥳.

### Progressive Web Application (PWA)

To be very very short a PWA is a website that use a certain set of web technologies in order to be  used like a regular iOS/Android application.

To dig a little more into it:

- it's not restricted to mobile device
- it's not restricted to any framework, it just needs to use web technologies
- it allows offline support
- it allows notifications
- and many other things…

It needs:

- that you're hosting your website in HTTPS
- a browser that supports the [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) 
- a [webmanifest file](https://developer.mozilla.org/en-US/docs/Web/Manifest): a JSON file that provides informations about your web-application
- a [service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API): a Javascript file that uses the SW Api to do stuff (yeah “stuff”, coz you can do many many things) 

You can write the latter in your preferred text editor, but…

### …workbox

is a [tool developped & maintained by Google](https://developers.google.com/web/tools/workbox/) to help you write the service worker file.

Even if you can come up with your own SW file, I personaly prefer to use tools that streamline my process and prevents me for doing silly errors.

If you haven't yet, try it. Documentation is good and the tool is easy to use.
And mostly: Workbox really helps.

### ParcelJS 1.11.0

It's the _Blazing fast, zero configuration web application bundler._
It helps people to compile things in web technologies (HTML, CSS & JS)

It means to be a simpler alternative to webpack (that has the same purpose, and whose main critic is to be hard to configure).

You can check  {% post_link 11-parcel-with-vue this post about Parcel %} if you want more informations. (Yeah, self promotion 😎)

## How was it with Parcel in mid-2018

The main principle of Parcel is that it will parse your application entry point, follow any file path within it, and compile/optimise/hash them.
It can be almost anything (see the [asset types](https://en.parceljs.org/getting_started.html) in the doc!), so HTML, CSS, JS, images, JSON… ANYTHING!

So this is good & fine, but it can be a problems as Parcel tends to be too greedy (being too greedy is bad).

To have a PWA we need to (in order): 

_**1.**_ have some application icons 
_**2.**_ have a `manifest.webmanifest` file 
_**3.**_ build our HTML/JS/CSS/assets
• our HTML should reference the manifest with a `<link rel="manifest" href="/manifest.webmanifest">`
• our future service worker should be called in our JS file
```js
if (`serviceWorker` in navigator) {
  window.addEventListener(`load`, () => {
    navigator.serviceWorker.register(`/my-application-service-worker.js`)
  })
}
```
_**4.**_ build our service worker with Workbox that will cache any of the assets needed for the application
_**5.**_ …and that's it 🎉

But at this time Parcel would have:

- followed our manifest link and converted it to a js file 😨
- followed our service worker'registration and breaks because it doesn't exist yet 😰
- and so 😱

In order to avoid that you would have to:

- avoid your HTML file as an enrty point (so compile only the JS/CSS)
- come with another simplified HTML file to use the Parcel dev server
- generate the service worker with [workbox-build](https://developers.google.com/web/tools/workbox/guides/generate-service-worker/workbox-build)
- create a different production HTML that:
  - reference the manifest file
  - have a script tag that install our service worker (this way it won't be parsed by Parcel)
  
## manifest.webmanifest

### with webpack

In the Webpack lore it exists the [webpack-pwa-manifest](https://www.npmjs.com/package/webpack-pwa-manifest) plugin which will take care of:

- creating icons
- creating the manifest file
- injecting it into the HTML
- take care of old proprietary tags in iOS if needed

and this is AWESOOOOME.

### with Parcel

It now supports NOT to parse/modify your manifest file, which was a real bummer in previous versions.

Coming up with your own manifest file is not a problem per se. It's just a small JSON file that won't change a lot over time.
As for the icons, I've found the [node-image-resizer](https://www.npmjs.com/package/node-image-resizer) that will help you generate the different app icons sizes. And because it uses [jimp](https://www.npmjs.com/package/jimp) under the hood, you won't be bothered to install any external dependencies (like GraphicMagic).

So event if it's less “plug and play” than using webpack, it's now way better than not using your HTML file as an entry point (mostly for the dev server).
I would like to see a webpack-pwa-manifest alternatives but coming with my own will stay on my list of opensource projet to do that I know I won't find the time to make but it could be helpful to build 😔

## service worker

### with webpack

Google developps & maintain the [workbox-webpack-plugin](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#top_of_page) that lets you generate a worker file.

On `inject mode` it has some nice additions which are:

- injecting the workbox library for you
- generating a separate precache manifest file (I find it cleaner to have all those path away from the “real” service worker code)

### with Parcel

There is the [parcel-plugin-sw-cache](https://github.com/mischnic/parcel-plugin-sw-cache#readme) which works quite well.
There isn't the workbox-webpack-plugin nice additions but it dœs the job.
Also, the configuration depends on the `package.json` so it may be less flexible than a JS' webpack configuration.

But to prevent the “too greedy“ behavior of Parcel you have to use a [small twist](https://github.com/parcel-bundler/parcel/issues/2080) to register your service worker without Parcel noticing it:

```js
// this way Parcel won't check `my-application-service-worker.js`
const swName = `/my-application-service-worker.js`; 
navigator.serviceWorker.register(swName);
```

## Conclusion

Webpack propose a smoother experience due to the more mature ecosystem it has, but working with Parcel to build a PWA is a way smoother experience than it was. Goog Game Parcel! 🏆

The main small invonvenience is to generate the different application icons… which isn't that bad.

You can find the web applications here:

- [Thailpha](https://github.com/hiswe/thailpha) which uses webpack
- [Thaime](https://github.com/hiswe/thaime) which uses Parcel
