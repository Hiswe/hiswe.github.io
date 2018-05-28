---
title: Isomorphic application with React/Redux
tags:
  - advanced
  - react
cover: cover.png
comments: false
description: universal application structure
categories:
  - nodejs
date: 2018-05-19 11:52:34
---


## Introduction

So I wanted to build an isomorphic/universal web-application…

This will be a __long document about the *how* and the *why*__
The web-app was greatly influenced by this [Viktor Turskyi's post](http://blog.koorchik.com/isomorphic-react/).

Unlike most articles, I won't produce here any code example.
I will try to focus on __how different piece of code put together will solve building an universal applications__ problems.

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

- make our __first render quicker__ 
- __support no-JS environments__

For this we need to:

1. grab the right components to render (using the [React methods for server rendering](https://reactjs.org/docs/react-dom-server.html))
    a non exiting route means rendering the 404 component
2. make sure that the components have the right data to begin with.
3. pass everything to the client
4. after that the client will initialize and run as a [single page application](https://en.wikipedia.org/wiki/Single-page_application)

## the API

The web-application will interact with an API (`packages/api`) which will not be detailed here.
The only thing we need to know about the API is that:

- it's a REST like API (uses only GET & POST)
- communicates with JSON
- authenticates with a JSON Web Token (JWT) 

this document will __only focus__ on the `packages/web-app` folder

__Why no GraphQL?__ [GraphQL](http://graphql.org/) seems to be a nice tech, but I simply didn't have time to dig into it.

## supported features & Tech

##### NOT USING *CREATE-REACT-APP* OR *NEXT.JS*

I made this universal application to learn more about React.

- I wanted to know how things work, so I didn't use any frameworks like [next.js](https://github.com/zeit/next.js/) or [create-react-app](https://github.com/facebook/create-react-app) that will build things for me that I don't truly understand.
- I also wanted to make an exhaustive application: not a TODO app example.
  There are plenty of those already, It's good to begin with but whenever you want to build something more complex, you'll have a hard time stitching the pieces together.

##### FEATURES

In order to make it the most *real life* example this web-app will:

- __mutualise all the code__ we can
- support __authentication__
- support __Internationalization__ (i18n)
- be __testable__ (even if there isn't as much tests as I wanted 😨)
- should __work without JS__ in the browser
  - I believe in progressive enhancement 
  - while developing, this allows us to make API POST request without taking care about the redux actions.  
    Those can be created in a second time.
  - I will use `browser cookie` to store the JWT.  
    It's the only way to store informations on the browser without relying on Javascript.  
    Sadly a browser without JS & cookie is doomed 😔

##### TECH STACK

__React library__, among others, is a great way to __ensure__ that __our applications is perfectly in sync with our__  application __state__.  
So we can rely on it to __always render the proper thing__ depending on the route/user actions/API queries.  
Thus, we will omit this part from this document (*i.e.* considering that changing the route/state will always render the right HTML)

Here are all the main modules used: 

- __views__ 
  - [React 16.3](https://reactjs.org/)
- __routing__ 
  - [React router 4](https://reacttraining.com/react-router/) 
  - [react-router-config 1](https://www.npmjs.com/package/react-router-config) for the universal support
- __application state__ 
  - [redux 4](https://redux.js.org/)
  - [redux thunk](https://www.npmjs.com/package/redux-thunk) for a better handling of asynchronous actions
  - [react redux](https://github.com/reactjs/react-redux) for a better integration with React
- __server__ 
  - [Koa 2](http://koajs.com/) (see [this post](https://hiswe.github.io/2018/07-from-express-to-koa/) about why I chose Koa)

## files

##### STRUCTURE

I tried to avoid nesting folders too deeply.  
I used [lerna](https://lernajs.io/) to have a clear separation between our API & the web-app.  
I may move to [yarn workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/) when it will leave its experimental status

Here are the main choices:

- __client__:
  - `root`: a single file to initialize the Redux-store, the router and hydrate our React application
- __server__
  - `root`: initializing our Koa app & the routing 
  - `public`: all our compiled JS/CSS + some assets
- __shared__
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

| front  | server  | shared front/client |
|   ---: |    ---: |                ---: |
| 36 loc | 279 loc | 6476 loc            |
| 1%     | 4%      | 95%                 |

{% caption just write once %}
{% asset_img loc-chart.svg 300 260 "lines of code repartition pie chart 'lines of code repartition pie chart'" %} 
{% endcaption %}

I don't expect this repartition to change much with futur versions.  
There should be: 

- more & more code into the shared folder
- some small additions in server code (mainly for proxying POST fallback)

## building the applications

Using React with [JSX](https://reactjs.org/docs/introducing-jsx.html) makes the code easier to write and to maintain so:

- a building step is __required to convert JSX to regular JS__
- the most __popular solution__ right now is the couple [Webpack](https://webpack.js.org/)/[Babel](http://babeljs.io/)
  - Webpack in version 4 since a while
    It promises to be simpler, but you will still find yourself adding some plugins/loaders at one point or another
  - as the latest version of Ava use babel 7, I picked it for my build process also.
    At this time (may 2018) it's in `beta 47` 😳 and working perfectly
    I can't thank enough all the people contributing to this project and I really hope that the final release will come soon
- since we have a build step, why not
  - use [ES2015 modules](https://ponyfoo.com/articles/es6-modules-in-depth)
  - __import our `scss` files directly in the components.__ 
    This is __totally optional__ and could have been done in a classical way (like compiling a SCSS folder to a CSS file)
    But I found that it really __helps to isolate concerns about what your Component is about__
    Also it will make it easy to __keep the styles next to the markup__ (no more back & forth from component folder to a scss folder)
- I __don't use `@babel/register` in my server code__ because it might have a performance cost so:
  - __build also the server code with webpack__
    And that will also allow me to replace some files when needed
  - __don't build the code for tests__
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
__This prevents mixing ES modules with Node's CommonJS modules syntax__

→ done with Webpack's [normal-module-replacement-plugin](https://webpack.js.org/plugins/normal-module-replacement-plugin/)

##### SERVER

```js
export { default } from '../server/config'
```

##### CLIENT

```js
export default window.__CONFIG__
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

This is how the app behaves from the __first render__ made by the __server__ to the __subsequent client handling__

Here is a little bit of explanation:

- __symbols__
  - {% asset_img cookie-symbol.svg 16 16 "cookie symbol 'cookie symbol'" %} represents a cookie either read from a server request, or from the browser
  - {% asset_img jwt-symbol.svg 16 16 "JWT symbol 'JWT symbol'" %}  represents a JWT which will be used for authentication between our web-application and the API
  - arrows between them represent reading/writing from/to the cookie
- __REACT-ROUTER__ will mutualise all our pages routes
  - on the __server__: direct call to the API (either in GET or POST) will be manually proxied
  - this for supporting __no-JS__ environment
  - this is done in the `server/routing-api-backup.js`
- __REDUX__ will maintain our app state
  - I uses the [duck convention](https://github.com/erikras/ducks-modular-redux) to organize the code
  - API calls will be made in `redux actions`
- __ISO-FETCH__ is a small wrapper around [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch)
  It will handle any Fetch request to the API
  Keep in mind that:
  - on the __server__: the cookie content will be provided by the server
  - on the __client__: it can read the browser's cookie content by itself

{% caption simple, right? %}
{% asset_img flow.svg 1240 1280 "application flow 'application flow'" %} 
{% endcaption %}

## routing with React-Router & Redux

##### WHAT IS REACT-ROUTER

[React-router](https://reacttraining.com/react-router/) is, I think, the most common routing solution for React.
They have recently updated their library to the version 4.

There is a huge [shift of philosophy](https://reacttraining.com/react-router/core/guides/philosophy) between the previous versions and this one.
They call it *dynamic routing* and it's very different from the classical way.  

##### INTERFACING WITH THE SERVER

To interface nicely with our Koa server, we need something that:

1. is more traditional & plays well with a server routing
2. can be easily shared between the server/client

For that they have made a package named [react-router-config](https://www.npmjs.com/package/react-router-config). 
It's still in beta but is already working as expected.

React Router Config mainly does 3 things: 

- a way to define a __routing configuration__
- a method to __retrieve the component that match the route__
- give a way for the router to __give back informations to the server__ (like not found & redirection) so we can serve the pages with right HTTP code.

##### GET REDUX ACTIONS FROM COMPONENTS

Like seen before, with react-router-config __it's easy to get which components to render.__

But we need a way to tell our server which data those components need.  
We will rely on Redux to maintain a coherent state.

What we __need is redux actions__ that we __dispatch to our store__ and redux will do his job. 

But because it's an universal application:

- on the __server__ we will need the __actions to be called *before* instantiating our components__ 
    → this is solved by using a [static method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) on our components
- on the __client__ we will need the __actions to be called in [componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount)__
- on __first rendering__ we must __prevent the client to call the componentDidMount() actions__
    Calling them twice won't have a lot of side effects but making the same set of requests is inefficient…

The solution came again from [Viktor Turskyi's post](http://blog.koorchik.com/isomorphic-react/#Data_fetching) about data fetching.

We need to make a [HoC](https://reactjs.org/docs/higher-order-components.html) to take care of this.

It will:

1. take as an input a `component` and an array of redux actions (`actionsCreators`)
2. always add the authentication action (needed for the app to ensure the right display)
3. return the `component` in the `render()`, passing in any `props`
4. for the __server__: expose a static method named `fetchData` which will `dispatch` any `actions` of the `actionsCreators` array
5. for the __client__: call `fetchData` in `componentDidMount`
6. prevent the first call of `componentDidMount` (with a module variable named `SKIP_FIRST_COMPONENTDIDMOUNT`)

{% caption giving the possibility to fetch data before or after a component is instantiated  %}
{% asset_img page-fetch-actions.svg 900 510 "route fetch actions 'route fetch actions'" %} 
{% endcaption %}

##### LIMITATIONS

The main issue of doing so is that we __need to call all the actions needed for all the children components in the top `page component`__  

It would be nicer to declare all those actions on the concerned components and find a way to hoist & aggregate them to the page component.

##### SERVER FLOW SUMMARY

{% caption from server to client %}
{% asset_img server-rendering.svg 1020 520 "the server flow 'the server flow'" %} 
{% endcaption %}

## isomorphic-fetch

One of the problem was to be able to send the JWT on any request.

- on the __client__ we have __access to the browser cookies at any time__
  → no problems here
- on the __server__ we have __access to the browser cookies only in Koa context__
  - `isomorphic-fetch` won't be able to grab them on its own
  - __we need to make possible to feed the JWT__ to `isomorphic-fetch`
  - we have to keep in mind that `isomorphic-fetch` can be called in `redux-actions` so we need to pass the __JWT in redux-actions__ also

##### FETCH SUMMARY

{% caption JWT is important %}
{% asset_img isomorphic-fetch.svg 450 375 "the isomorphic-fetch flow 'the isomorphic-fetch flow'" %} 
{% endcaption %}

## authentication

This one is quite easy.  
Authentication is handled by 2 [HoC](https://reactjs.org/docs/components-and-props.html)

1. __public route__ will redirect to private home if connected  
    `authentication-forbidden.js`
2. __private route__ will redirect to login page if not connected 
    `authentication-required.js`

They follow the same pattern:

1. need to be __connected to the redux store__ to check authentication 
    → done with [react-redux](https://redux.js.org/basics/usage-with-react#presentational-and-container-components)
2. need to be __connected to the react router__ to access the redirection
    → done with [react-router-config](https://www.npmjs.com/package/react-router-config)
    On the __server__ we also a procide a `serverContext` object
    (on the documentation they call it [staticContext](https://reacttraining.com/react-router/web/guides/server-rendering) but I find it more obvious with the name that I use)
3. will check `redux store` authentication
    - redirect if needed
      update `serverContext` if rendered on server side
      __this will be used to have the right HTTP status code when serving the application__
    - render component if everything's fine

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

- keep our current locale in the `Redux-Store` so we can change our locale dynamically
- wrap our application with the `<IntlProvider />` component
- define our locals files
- follow the guide to [server rendering](https://github.com/yahoo/react-intl/wiki#locale-data-in-nodejs)

What we can improve:

This simple take is __suitable for a small application__ but may be __hard to maintain on a larger scale__.

- load our `locales files` async
  - right now every locales are bundled
- have a way to extract our keys from the application
  - a very interesting post was written by [Vlad Goran](https://blog.idagio.com/localisation-or-how-i-learned-to-stop-worrying-and-love-babel-plugin-react-intl-8eeb51d80d77) about extracting with [babel-plugin-react-intl](https://github.com/yahoo/babel-plugin-react-intl) but [it doesn't seem to work with babel-7](https://github.com/yahoo/babel-plugin-react-intl/issues/122)

## adding React-Helmet

We still need to provide `<head>` and `<script>` tags.
In order to do so, and to keep most of the code on the shared folder, just use [React-Helmet](https://www.npmjs.com/package/react-helmet)

It will handle for us: 

- the `<html>` tag
- the `<title>` tag
- any `<meta>` and `<stylesheet>`

I didn't put any `<script>` for a reason that I can't remember 😶

Since almost any HTML is handled by React, on the server we don't need to write a lot of things, thus we can use Javascript template strings instead of any template engine
    
## the full chain of components

So from top to bottom this how our components fits together.
The main thing is that our __HoC won't change over time__ so we just have to write our application without worrying about server/client, auth, i18n anymore!

{% caption React's Russian Doll %}
{% asset_img components-chaining.svg 850 1220 "how components chains to each other 'how components chains to each other'" %} 
{% endcaption %}
