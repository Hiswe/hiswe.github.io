---
title: 'Vue, the webby framework'
tags:
  - advanced
  - react
  - vue
cover: cover.png
comments: false
description: A small overview of Vue compared to React
categories:
  - web
date: 2018-07-27 18:15:01
---


## Introduction

Both [React 16](https://reactjs.org/) & [Vue 2](https://vuejs.org/) are javascript libraries that solve the same issue: writing components which are kept in sync with your application state.

Having used both of them lately, here is my opinion on the main differences.

I'm not trying to convince anyone which one is better here, but more to describe how confortable I was while learning & using them.
When it's about making stuff, just choose your preferred tool.

**`[TL;DR]`** Vue feels more _webby_ and React more _tecky_ <small>(If that means something 🙃)</small>
And coming from a web-developer background, I feel using Vue is more natural for me.

<!-- more -->

## The main lib

### building considerations

Both those framework can be used by just dropping the lib in your webpage and start using it!  
That's really great! (I mean it 👍)

That being said, using a **compilation step makes you sure that you can use everything the library can provide** (like [single file components](https://vuejs.org/v2/guide/single-file-components.html) for vue and [JSX](https://reactjs.org/docs/introducing-jsx.html) for React)

Those libraries try their best to make things simple for the developpers:

**If they say there is a better way to use their framework, you can trust them.**

Both frameworks provide an easy way to bundle your code without getting an headache:

- [create-react-app](https://github.com/facebook/create-react-app) for React
- [@vue/cli](https://www.npmjs.com/package/@vue/cli) For vue

For using them, you just need to have [Node.js](https://nodejs.org/en/) installed on your computer 🤖

If you want an independent & still simple way to bundle them, you can try [parcel](https://parceljs.org/).
I tested it for my first side project with Vue and it was a real quick starter.

All this building intro get us to…

### JSX/vue templates

If you're working in the web, you've probably heard (or are using) them.

They are both a way to write a kind of HTML that will be compiled to Javascript.

This is how I will represent them on a JS/HTML scale:

{% caption Don't need to be a javascript expert to write with Vue %}
{% asset_img jsx-vue-template.svg 700 280 "JSX/Vue proximity with HTML 'JSX/Vue proximity with HTML'" %}
{% endcaption %}

This is the same component written in:

#### JSX

```js
import React from "react";

export function Foo(props) {
  const componentClasses = [`foo`];
  if (props.secondary) componentClasses.push(`foo--secondary`);
  if (props.className) componentClasses.push(props.className);
  return (
    <div className={componentClasses.join(` `)}>
      {props.bar && <h3 className="foo__bar">{props.bar}</h3>}
      <ul className="foo__list">
        {props.entries.map(entry => (
          <li key={entry.id}>
            <h6>{entry.title}</h6>
            <p>{entry.content}</p>
          </li>
        ))}
      </ul>
      {props.children}
    </div>
  );
}
```

#### Vue template

```html
<template>
  <div v-bind:class="{foo: true, 'foo--secondary': secondary}">
    <h3 v-if="bar">{{bar}}</h3>
    <ul class="foo__list">
      <li v-for="entry in entries" v-bind:key="entry.id" >
        <h6>{{entry.title}}</h6>  
        <p>{{entry.content}}</p>  
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
```

I found [JSX](https://reactjs.org/docs/introducing-jsx.html) more difficult to read and write:

- [Attributes are different](https://reactjs.org/docs/dom-elements.html#classname) than their HTML counterpart (`className` for `class`, [camelCase](https://en.wikipedia.org/wiki/Camel_case) attributes, etc.)
- no build in **support for setting/un-setting classes** (I end up using the [classnames](https://www.npmjs.com/package/classnames) module)
- no build in support for **passing down HTML classes** from a parent to its child components
- no build-in solutions for **having many part/slot to fill** (for a better explanation about what I'm talking about, read [the Vue's slot doc](https://vuejs.org/v2/guide/components-slots.html))
- **but most importantly design patterns**: while learning React and writing JSX, I've found myself spending a lot of time learning how to write a clean conditional, what is a render prop, how you can use them…
- on a lower note, it's a good thing to be able to use regular javascript in your template but:
  - writing conditional is strange `{props.bar &&…}`
  - I don't like the look of the map function ending `))}`
  - …so yeah, it's mainly purely aesthetic 🌈

#### Vue with JSX

But if JSX is your way to go, [Vue supports it!](https://vuejs.org/v2/guide/render-function.html#JSX)

#### Vue with Pug

I've been using [Pug](https://pugjs.org/api/getting-started.html) ([ex-Jade](https://github.com/pugjs/pug#rename-from-jade)) template engine for a very long time now.  
I'm still using it: I'm found of the simple syntax (I hate writing closing tags 😤).
It makes me write/refactore my markup quicker.

Being able to use it with Vue is so nice!

#### Root node handling

Both those frameworks need a [single root element](https://vuejs.org/v2/guide/components.html#A-Single-Root-Element) for every components.

But React allows it _NOT_ to be renderer, thanks to [React.Fragment](https://reactjs.org/docs/react-api.html#reactfragment).

That is a thing that I missed when working with Vue… even if it's not that important (but I really like to keep my markup as simple as possible 🛁)

## Styling components

Because it's all markup, you can still make a global CSS file and include it on your application.  
That will work.

But keeping your component styles near your component markup make a lot of sense:

- no need to go back and forth from a `style` folder
- you have a better overview of your component style perimeter

in React there are [many](https://javascriptplayground.com/css-modules-webpack-react/), [many](https://github.com/tuchk4/awesome-css-in-js#libraries) solutions. I won't address here the merit or not of CSS-in-JS.
My point is more: You have to choose one thing.

I went with importing a [SCSS](https://sass-lang.com/) file in my components:

```js
import React from "react";

import "./foo.scss";

export function Foo(props) {
  return (
    <dl className="foo">
      <dt className="foo__title">foo</dt>
      <dd className="foo__content">bar</dd>
    </dl>
  );
}
```

In Vue they provide a way to style in the same file it with a [load of options](https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors)

```html
<template>
  <dl class="foo">
    <dt class="foo__title">foo</dt>
    <dd class="foo__content">bar</dd>
  </dl>
</template>

<style lang="scss" scoped>
.foo {
  background: white;

  &__title {
    font-size: 2rem;
  }
  &__content {
    font-size: 1.5rem;
    line-height: 1.5;
  }
}
</style>
```

I really like that: my styles are just sitting next to my markup 😎
And also [scoped styles](https://vuejs.org/v2/guide/comparison.html#Component-Scoped-CSS) just works out of the box if you need them! ✨

## Components logic

That's the heart of every component.

### writing Components

In React writing a component can take [2 forms](https://reactjs.org/docs/components-and-props.html#functional-and-class-components):

- functional component
- Class component

Class components can inherit from:

- [React.Component](https://reactjs.org/docs/react-api.html#reactcomponent)
- [React.PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent)

there is a subtle difference between the two that I won't detail here

```jsx
import React from "react";

export default class Foo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
    // we need to be sure that the context of handleClick
    // won't be change by the event handling
    this.handleClick = this.handleClick.bind(this)
  },
  handleClick() {
    // setState method is inherited
    // and is asynchronous
    this.setState((prevState, props) => {
      return {counter: prevState.counter + 1};
    });
  },
  render() {
    return (
      <div className="foo" onClick={this.handleClick}>
        {this.state.counter}
      </div>
    )
  }
}
```

[Vue component](https://vuejs.org/v2/guide/components.html) are just an object with [many options](https://vuejs.org/v2/api/#Options-Data)

```html
<template>
  <div class="foo" v-on:click="handleClick">
    {{counter}}
  </div>
</template>

<script>
export default {
  name: `foo`,
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    handleClick() {
      this.counter = this.counter + 1;
    }
  }
};
</script>
```

You won't need to take care about bindings or `this` in your template.
Also **I like how the framework let us update the state in a simple way.**

It may looks like more code to write, but I found it more obvious to read:
Need a computed property? write this in the `computed` key of your component

And if you're a fan of [functional components](https://vuejs.org/v2/guide/render-function.html#Functional-Components) Vue supports them.

### referencing components

This may be the only thing that I found strange in Vue.

In React, referencing a component is just using a Javascript `import`:

```jsx
import React from "React";

import Foo from "./foo";
import Bar from "./bar";

export default function Baz(props) {
  return (
    <div className="baz">
      <p>Hello Foo & Bar!</p>
      <Foo />
      <Bar />
    </div>
  );
}
```

in Vue JS you'll have to [register the components](https://vuejs.org/v2/guide/components-registration.html) in your application.

This can be done globally or locally.

```js
import Vue from "vue";

import Foo from "./foo";

// global registration
Vue.component(`foo`, Foo);
```

```html
<template>
  <div class="baz">
    <p>Hello Foo & Bar!</p>
    <foo></foo>
    <bar></bar>
  </div>
</template>

<script>
import Bar from "./bar";

export default {
  name: `baz`,
  // register locally
  components: {
    bar: Bar
  }
};
</script>
```

It kind of feels weird at first, but not having to import your UI components again and again save you some time.

## Building a web-app

Those library are mostly the _view part_ in the [MV\*](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) pattern.
They also support a state management per component ([react state](https://reactjs.org/docs/state-and-lifecycle.html) & [vue data](https://vuejs.org/v2/guide/instance.html#Data-and-Methods)) which is very handy.
In this case React come with a little bit more with [react context](https://reactjs.org/docs/context.html) that allows you to share data across components in an elegant way.

**BUT**

Let's be honest: You will quickly need (at least):

- **a router**: for navigation
- **a state manager**: centralize and manage your application state in a single source of truth (the application store)

The React's team doesn't provide any of those & won't give you any advice about what to use.
For that there is some popular options out there.
<small>N.B. I didn't make any real research about how popular they are, so that's mostly my feeling… guess you'll have to go it with even if I'm wrong 😐</small>.

On the contrary, Vue's team provides some official packages.
You still can use other packages but when learning, it's a good thing to know that you can start with the official ones.

**So here's my list of the most common solutions to fulfill those needs:**

- [react-router](https://reacttraining.com/react-router/)/[vue-router](https://router.vuejs.org/guide/)
- [redux](https://redux.js.org/)/[vuex](https://router.vuejs.org/guide/)

### routing

They both work in a pretty straightforward way.

The main difference is that, if one of your React components needs to access the router, you'll have to wrap them in the [withRouter function](https://reacttraining.com/react-router/web/api/withRouter).

In Vue the router will be available in every component (`this.$router` && `this.$route`).
That's one less thing to take care of.

### application store

Redux is:

- framework agnostic ❤️
- working only with [immutable data](https://www.sitepoint.com/immutability-javascript/)
- very focused on what it's doing (kind of not supporting [asynchronous actions](https://redux.js.org/advanced/async-actions) out of the box. <small>possible though… just need to write more code than expected</small>)

You can use it without installing more packages, but I find it better to use libraries to help me with that:

- [react-redux](https://redux.js.org/basics/usage-with-react) will make Redux plays more nicely with React
- [immutable-js](https://facebook.github.io/immutable-js/) prevents you from accidentally mutate your state
- [redux-thunk](https://github.com/reduxjs/redux-thunk) handle async actions in a more friendly way

So when you're starting, that's a lot to learn.

On the contrary, Vuex just handle all those things for you:

- already integrated with Vue
- no need immutable data
- handle [async code](https://vuex.vuejs.org/guide/actions.html)

#### accessing the store from a component

In React, passing properties can be made with [high order components](https://reactjs.org/docs/higher-order-components.html)
It's the way that react-redux is sharing the state with your components.

I have found myself writing of lot of things like that:

```jsx
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "./actions";

function Foo(props) {
  return (
    <button class="foo" onClick={props.toggleStatus}>
      {props.status}
    </button>
  );
}
function mapState2props(state) {
  return {
    status: state.status
  };
}
function mapDispatch2props(dispatch) {
  return bindActionCreators(
    {
      toggleStatus: actions.toggleStatus
    },
    dispatch
  );
}
export default connect(
  mapState2props,
  mapDispatch2props
)(Foo);
```

Whereas in Vue, the state is always accessible from any components:

```html
<template>
  <button class="foo" v-on:click="{toggleStatus}">
    {{status}}
  </button>
</template>
```

```js
export default {
  name: `foo`,
  computed: {
    status() {
      return this.$store.state.status;
    }
  },
  methods: {
    toggleStatus() {
      this.$store.commit(`toggleStatus`);
    }
  }
};
```

Vuex also provide helper functions to write this in a nicer way ([mapState](https://vuex.vuejs.org/api/#mapstate) & [mapMutations](https://vuex.vuejs.org/api/#mapmutations) to name a few)

It's two different ways of doing the same thing, but I was happy to avoid writing wrapper function anymore and to have a build-in way of handling async actions without searching for another module.

## A note on documentation

React and Vue have a good documentation.

You need a little time to learn how React's documentation is structured, but when you get it, it's ok.

For Vue, I really don't know how to explain this feeling but in a way I find it too complete 🤨.
Maybe I would like to have a big summary of everything that Vue has to offer, because sometimes you just need a small reminder of what is supported, and how to use it.

## Conclusion

React is freedom. They just provide you a minimal thing that works perfectly for what it was created for.

You can have to:

- Learn a bunch of (useful) concepts like High Order Functions, Immutable, Render props…
- Choose some of the many modules that will help you make your application
- Learn how to use them
- Tight them altogether

Vue is more like: “Oh, you're a web-developer, let's write some HTML, CSS & JS together”

- you feel familiar
- writing a component is just writing a javascript object
- the team provides you some must-have modules
- those modules integrate quickly in your application
- …but you're still free to
  - find other modules
  - code the way you prefer

Again it isn't about rating those libraries.
They are both crafted with care by very skilled peoples.

But as a web-developer I like webby things… And for me, Vue looks like more webby, and less about coding patterns & code philosophy.
