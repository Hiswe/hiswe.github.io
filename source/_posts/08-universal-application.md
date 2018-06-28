---
title: Isomorphic application with React/Redux
description: 'A take on building an universal application with React/Redux that supports no-JS environment, authentication & i18n'
tags:
  - advanced
  - react
cover: cover.png
comments: false
categories:
  - nodejs
date: 2018-05-19 11:52:34
---

## Introduction

So I wanted to build an isomorphic/universal web-application…

This will be a **long document about the _how_ and the _why_**
The web-app was greatly influenced by this [Viktor Turskyi's post](http://blog.koorchik.com/isomorphic-react/).

Unlike most articles, I won't produce here any code example.
I will try to focus on **how different piece of code put together will solve building an universal applications** problems.

It's my first take on this kind of application, so I'm sure there are many flaws & rooms for improvement.  
But hey! we need a start in order to advance 🏃‍♀️

<!-- more -->

## prerequisite

You should have some notions with:

- [React](https://reactjs.org/)
  - what is a [Component](https://reactjs.org/docs/components-and-props.html)
  - what is a [High-Order Component (HoC)](https://reactjs.org/docs/components-and-props.html)
- [Redux](https://redux.js.org/)
  - what is a [store](https://redux.js.org/basics/store)
  - what is an [action](https://redux.js.org/basics/actions)
  - what is a [reducer](https://redux.js.org/basics/reducers)
  - how to use [react-redux](https://redux.js.org/basics/usage-with-react) to connect our React components to the store
- Some javascript tooling:
  - [Webpack](https://webpack.js.org/) for bundling our application
  - [BabelJs](http://babeljs.io/) for converting [React jsx](https://reactjs.org/docs/introducing-jsx.html) code to plain javascript

## purpose of server rendering

Server rendering seems a good idea for 2 main reasons:

- make our **first render quicker**
- **support no-JS environments**

For this we need to:

1.  grab the right components to render (using the [React methods for server rendering](https://reactjs.org/docs/react-dom-server.html))
    a non exiting route means rendering the 404 component
2.  make sure that the components have the right data to begin with.
3.  pass everything to the client
4.  after that the client will initialize and run as a [single page application](https://en.wikipedia.org/wiki/Single-page_application)

## the API

The web-application will interact with an API (`packages/api`) which will not be detailed here.
The only thing we need to know about the API is that:

- it's a REST like API (uses only GET & POST)
- communicates with JSON
- authenticates with a JSON Web Token (JWT)

this document will **only focus** on the `packages/web-app` folder

**Why no GraphQL?** [GraphQL](http://graphql.org/) seems to be a nice tech, but I simply didn't have time to dig into it.

## supported features & Tech

##### NOT USING _CREATE-REACT-APP_ OR _NEXT.JS_

I made this universal application to learn more about React.

- I wanted to know how things work, so I didn't use any frameworks like [next.js](https://github.com/zeit/next.js/) or [create-react-app](https://github.com/facebook/create-react-app) that will build things for me that I don't truly understand.
- I also wanted to make an exhaustive application: not a TODO app example.
  There are plenty of those already, It's good to begin with but whenever you want to build something more complex, you'll have a hard time stitching the pieces together.

##### FEATURES

In order to make it the most _real life_ example this web-app will:

- **mutualise all the code** we can
- support **authentication**
- support **Internationalization** (i18n)
- be **testable** (even if there isn't as much tests as I wanted 😨)
- should **work without JS** in the browser
  - I believe in progressive enhancement
  - while developing, this allows us to make API POST request without taking care about the redux actions.  
    Those can be created in a second time.
  - I will use `browser cookie` to store the JWT.  
    It's the only way to store informations on the browser without relying on Javascript.  
    Sadly a browser without JS & cookie is doomed 😔

##### TECH STACK

**React library**, among others, is a great way to **ensure** that **our applications is perfectly in sync with our** application **state**.  
So we can rely on it to **always render the proper thing** depending on the route/user actions/API queries.  
Thus, we will omit this part from this document (_i.e._ considering that changing the route/state will always render the right HTML)

Here are all the main modules used:

- **views**
  - [React 16.3](https://reactjs.org/)
- **routing**
  - [React router 4](https://reacttraining.com/react-router/)
  - [react-router-config 1](https://www.npmjs.com/package/react-router-config) for the universal support
- **application state**
  - [redux 4](https://redux.js.org/)
  - [redux thunk](https://www.npmjs.com/package/redux-thunk) for a better handling of asynchronous actions
  - [react redux](https://github.com/reactjs/react-redux) for a better integration with React
- **server**
  - [Koa 2](http://koajs.com/) (see [this post](https://hiswe.github.io/2018/07-from-express-to-koa/) about why I chose Koa)

## files

##### STRUCTURE

I tried to avoid nesting folders too deeply.  
I used [lerna](https://lernajs.io/) to have a clear separation between our API & the web-app.  
I may move to [yarn workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/) when it will leave its experimental status

Here are the main choices:

- **client**:
  - `root`: a single file to initialize the Redux-store, the router and hydrate our React application
- **server**
  - `root`: initializing our Koa app & the routing
  - `public`: all our compiled JS/CSS + some assets
- **shared**
  - `root`
    - isomorphic files
    - main HoC (will come to them later)
  - `redux-ducks`: all our Redux related code using the [ducks convention](https://github.com/erikras/ducks-modular-redux)
    This helps keeping all our Redux related code in one file
  - `[…components]`: organized by domain
    The `ui` are mostly presentational components  
     I could have used more external components

##### MUTUALIZATION

As for the version 1.1.0:

|  front |  server | shared front/client |
| -----: | ------: | ------------------: |
| 36 loc | 279 loc |            6476 loc |
|     1% |      4% |                 95% |

{% caption just write once %}
{% asset_img loc-chart.svg 300 260 "lines of code repartition pie chart 'lines of code repartition pie chart'" %}
{% endcaption %}

I don't expect this repartition to change much with futur versions.  
There should be:

- more & more code into the shared folder
- some small additions in server code (mainly for proxying POST fallback)

## building the applications

Using React with [JSX](https://reactjs.org/docs/introducing-jsx.html) makes the code easier to write and to maintain so:

- a building step is **required to convert JSX to regular JS**
- the most **popular solution** right now is the couple [Webpack](https://webpack.js.org/)/[Babel](http://babeljs.io/)
  - Webpack in version 4 since a while
    It promises to be simpler, but you will still find yourself adding some plugins/loaders at one point or another
  - as the latest version of Ava use babel 7, I picked it for my build process also.
    At this time (may 2018) it's in `beta 47` 😳 and working perfectly
    I can't thank enough all the people contributing to this project and I really hope that the final release will come soon
- since we have a build step, why not
  - use [ES2015 modules](https://ponyfoo.com/articles/es6-modules-in-depth)
  - **import our `scss` files directly in the components.**
    This is **totally optional** and could have been done in a classical way (like compiling a SCSS folder to a CSS file)
    But I found that it really **helps to isolate concerns about what your Component is about**
    Also it will make it easy to **keep the styles next to the markup** (no more back & forth from component folder to a scss folder)
- I **don't use `@babel/register` in my server code** because it might have a performance cost so:
  - **build also the server code with webpack**
    And that will also allow me to replace some files when needed
  - **don't build the code for tests**
    performance aren't an issue there and we can use `@babel/register` without worrying

##### SERVER

- don't want to bundle the `node_modules`: they are already accessible in nodeJS environment
  → done with [webpack-node-externals](https://www.npmjs.com/package/webpack-node-externals)
- want to always have access of source-map
  → done with the the [webpack banner-plugin](https://webpack.js.org/plugins/banner-plugin/) and the [source-map-support](https://www.npmjs.com/package/source-map-support) module
- ignore `.scss` requires
  → done with [babel-plugin-transform-require-ignore](https://www.npmjs.com/package/babel-plugin-transform-require-ignore)

##### CLIENT

- want to bundle the `node_modules` in a separate file
  → done with [webpack split-chunks-plugin](https://webpack.js.org/plugins/split-chunks-plugin/)
- want to bundle `.scss` in a `.css` separate file
  → done with [webpack extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin)
  The `@next version` is working fine with `webpack 4` but I should migrate to [webpack mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin) (here is [why](https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/749#issuecomment-374549467))

##### BUILD SUMMARY

{% caption processing & processing code & getting what we want %}
{% asset_img build.svg 900 640 "building flow 'building flow'" %}
{% endcaption %}

##### PARCEL JS SIDE-NOTE

On a side node [ParcelJs](https://parceljs.org/) seems very promising.  
As I see it, it's still too young (version 1 released on december 2017).
I'll wait a little bit for more documentation & tutorials, and surely try it on another side projet

## sharing the configuration

I use to manage my server configuration with [rc](https://www.npmjs.com/package/rc).  
I wanted to keep it that way but an isomorphic configuration [comes with some challenges](http://blog.koorchik.com/isomorphic-react/#Isomorphic_configuration).

To keep it versatile, I wanted to pass my configuration down to the client like this:

```
rc → server → client
```

Unlike Viktor Turskyi's solution, I replaced the config import with specific server/client files.
**This prevents mixing ES modules with Node's CommonJS modules syntax**

→ done with Webpack's [normal-module-replacement-plugin](https://webpack.js.org/plugins/normal-module-replacement-plugin/)

##### SERVER

```js
export { default } from "../server/config";
```

##### CLIENT

```js
export default window.__CONFIG__;
```

where `window.__CONFIG__` is passed by the server

##### DURING TEST

[AVA](https://github.com/avajs/ava) is used for testing.  
By default it uses babel to convert JSX. So I tried to keep it that way so → no Webpack.
This will make it easier to require a single component and test it.

So I just use my configuration's entry point as the test configuration: no need to replace it with webpack!  
I use the same babel configuration than the server's one to prevent including the SCSS 😀

##### CONFIGURATION SUMMARY

{% caption now we can configure our application without the need of rebuilding it! %}
{% asset_img configuration.svg 860 500 "configuration flow 'configuration flow'" %}
{% endcaption %}

## application flow summary

This is how the app behaves from the **first render** made by the **server** to the **subsequent client handling**

Here is a little bit of explanation:

- **symbols**
  - {% asset_img cookie-symbol.svg 16 16 "cookie symbol 'cookie symbol'" %} represents a cookie either read from a server request, or from the browser
  - {% asset_img jwt-symbol.svg 16 16 "JWT symbol 'JWT symbol'" %} represents a JWT which will be used for authentication between our web-application and the API
  - arrows between them represent reading/writing from/to the cookie
- **REACT-ROUTER** will mutualise all our pages routes
  - on the **server**: direct call to the API (either in GET or POST) will be manually proxied
  - this for supporting **no-JS** environment
  - this is done in the `server/routing-api-backup.js`
- **REDUX** will maintain our app state
  - I uses the [duck convention](https://github.com/erikras/ducks-modular-redux) to organize the code
  - API calls will be made in `redux actions`
- **ISO-FETCH** is a small wrapper around [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch)
  It will handle any Fetch request to the API
  Keep in mind that:
  - on the **server**: the cookie content will be provided by the server
  - on the **client**: it can read the browser's cookie content by itself

{% caption simple, right? %}
{% asset_img flow.svg 1240 1280 "application flow 'application flow'" %}
{% endcaption %}

## routing with React-Router & Redux

##### WHAT IS REACT-ROUTER

[React-router](https://reacttraining.com/react-router/) is, I think, the most common routing solution for React.
They have recently updated their library to the version 4.

There is a huge [shift of philosophy](https://reacttraining.com/react-router/core/guides/philosophy) between the previous versions and this one.
They call it _dynamic routing_ and it's very different from the classical way.

##### INTERFACING WITH THE SERVER

To interface nicely with our Koa server, we need something that:

1.  is more traditional & plays well with a server routing
2.  can be easily shared between the server/client

For that they have made a package named [react-router-config](https://www.npmjs.com/package/react-router-config).
It's still in beta but is already working as expected.

React Router Config mainly does 3 things:

- a way to define a **routing configuration**
- a method to **retrieve the component that match the route**
- give a way for the router to **give back informations to the server** (like not found & redirection) so we can serve the pages with right HTTP code.

##### GET REDUX ACTIONS FROM COMPONENTS

Like seen before, with react-router-config **it's easy to get which components to render.**

But we need a way to tell our server which data those components need.  
We will rely on Redux to maintain a coherent state.

What we **need is redux actions** that we **dispatch to our store** and redux will do his job.

But because it's an universal application:

- on the **server** we will need the **actions to be called _before_ instantiating our components**
  → this is solved by using a [static method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) on our components
- on the **client** we will need the **actions to be called in [componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount)**
- on **first rendering** we must **prevent the client to call the componentDidMount() actions**
  Calling them twice won't have a lot of side effects but making the same set of requests is inefficient…

The solution came again from [Viktor Turskyi's post](http://blog.koorchik.com/isomorphic-react/#Data_fetching) about data fetching.

We need to make a [HoC](https://reactjs.org/docs/higher-order-components.html) to take care of this.

It will:

1.  take as an input a `component` and an array of redux actions (`actionsCreators`)
2.  always add the authentication action (needed for the app to ensure the right display)
3.  return the `component` in the `render()`, passing in any `props`
4.  for the **server**: expose a static method named `fetchData` which will `dispatch` any `actions` of the `actionsCreators` array
5.  for the **client**: call `fetchData` in `componentDidMount`
6.  prevent the first call of `componentDidMount` (with a module variable named `SKIP_FIRST_COMPONENTDIDMOUNT`)

{% caption giving the possibility to fetch data before or after a component is instantiated  %}
{% asset_img page-fetch-actions.svg 900 510 "route fetch actions 'route fetch actions'" %}
{% endcaption %}

##### LIMITATIONS

The main issue of doing so is that we **need to call all the actions needed for all the children components in the top `page component`**

It would be nicer to declare all those actions on the concerned components and find a way to hoist & aggregate them to the page component.

##### SERVER FLOW SUMMARY

{% caption from server to client %}
{% asset_img server-rendering.svg 1020 520 "the server flow 'the server flow'" %}
{% endcaption %}

## isomorphic-fetch

One of the problem was to be able to send the JWT on any request.

- on the **client** we have **access to the browser cookies at any time**
  → no problems here
- on the **server** we have **access to the browser cookies only in Koa context**
  - `isomorphic-fetch` won't be able to grab them on its own
  - **we need to make possible to feed the JWT** to `isomorphic-fetch`
  - we have to keep in mind that `isomorphic-fetch` can be called in `redux-actions` so we need to pass the **JWT in redux-actions** also

##### FETCH SUMMARY

{% caption JWT is important %}
{% asset_img isomorphic-fetch.svg 450 375 "the isomorphic-fetch flow 'the isomorphic-fetch flow'" %}
{% endcaption %}

## authentication

This one is quite easy.

Authentication is handled by 2 [HoC](https://reactjs.org/docs/components-and-props.html):

1.  **public route** will redirect to private home if connected  
    → done in `authentication-forbidden.js`
2.  **private route** will redirect to login page if NOT connected
    → done in `authentication-required.js`

They have the same requirements:

1.  be **connected to the redux store** to check authentication
    → done with [react-redux](https://redux.js.org/basics/usage-with-react#presentational-and-container-components)
2.  be **connected to the react router** to access the redirection
    → done with [react-router-config](https://www.npmjs.com/package/react-router-config)
    On the **server** we also a provide a `serverContext` object
    (on the documentation they call it [staticContext](https://reacttraining.com/react-router/web/guides/server-rendering) but I find it more obvious to call it serverContext)
3.  the Component to render if everything's ok

And they will act in the same way:

1.  check `redux store` authentication status
2.  handle the redirection if needed
    on the server we will update update `serverContext` if a redirection happens.
    **This will help Koa to set the right HTTP status code when serving the page**
3.  OR render the Component if not redirection is necessary

##### AUTHENTICATION HOC FLOW

{% caption Auth made simple, I guess… %}
{% asset_img hoc-authentication.svg 1000 330 "the authentication hoc ordering 'the authentication hoc ordering'" %}
{% endcaption %}

## I18N with React-Intel

[React-Intel](https://github.com/yahoo/react-intl/wiki) fits my needs:

- formating numbers & prices
- formating dates
- providing translations

The documentation is quite good and the implementation straightforward.

We just need to:

- keep our current locale in the `Redux-Store` so we can change it dynamically
- wrap our application with the `<IntlProvider />` component
- define our `locales` files
- follow the guide to [server rendering](https://github.com/yahoo/react-intl/wiki#locale-data-in-nodejs)

What we can improve:

This simple take is **suitable for a small application** but may be **hard to maintain on a larger scale**.

- load asynchronously our `locales` files
  - right now all `locales` are bundled into the different applications
- have a way to extract our translation's keys from the application
  - a very interesting post was written by [Vlad Goran](https://blog.idagio.com/localisation-or-how-i-learned-to-stop-worrying-and-love-babel-plugin-react-intl-8eeb51d80d77) about extracting those keys with [babel-plugin-react-intl](https://github.com/yahoo/babel-plugin-react-intl) but [it doesn't seem to work with babel-7](https://github.com/yahoo/babel-plugin-react-intl/issues/122)

## adding React-Helmet

We still need to provide `<head>` and `<script>` tags.
In order to do so, and to keep most of the code on the shared folder, just use [React-Helmet](https://www.npmjs.com/package/react-helmet)

It will handle for us:

- the `<html>` tag
- the `<title>` tag
- any `<meta>` and `<stylesheet>`

I didn't put any `<script>` for a reason that I can't remember 😶

Since most of the HTML will be handled by React, on the server we won't need to write a lot of tags, thus we can use Javascript template strings instead of a regular template engine.

## the full chain of components

So from top to bottom this how our components fits together.
The main thing is that our **HoC won't change over time** so we just have to write our application without worrying about server/client, auth, i18n anymore!

{% caption React's Russian Doll %}
{% asset_img components-chaining.svg 850 1220 "how components chains to each other 'how components chains to each other'" %}
{% endcaption %}
