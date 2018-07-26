---
title: vue-the-cute-framework
cover: cover.png
comments: false
description:
tags:
categories:
---

## Introduction

Both [React 16](https://reactjs.org/) & [Vue 2](https://vuejs.org/) are javascript libraries that solve the same issue: writing components which are kept in sync with your application state.

Having used both of them lately here is my opinion on the main differences.

I'm not trying to convince anyone which one is better here, but more to describe how confortable I was while learning & using them.
When it's about making stuff, just choose the tools that you prefer.

**`[TL;DR]`** Vue feels more _webby_ and React more _tecky_

<small>If that means something</small> 🙃

<!-- more -->

## The main lib

### building considerations

Both those framework can be used by just dropping the lib in your webpage and start using it!  
That's really great! (I mean it)

That being said, using a **compilation step makes you sure that you can use everything the library can provide**.  
Those libraries try hard to make the life easier for everyone:

If they say there is a better way to use their framework, you can trust them.

Being a [Node.js](https://nodejs.org/en/)/[NPM](https://www.npmjs.com/) that wasn't a problem.
Both frameworks provide an easy way to bundle your code ([create-react-app](https://github.com/facebook/create-react-app) & [@vue/cli](https://www.npmjs.com/package/@vue/cli)) without getting an headache.

If you want an independent & still simple way to bundle them, you can try [parcel](https://parceljs.org/).
I tested it for my first side project with Vue and it was a real quick starter.

All this building intro for coming to…

### JSX/vue templates

If you're working in the web, you've probably heard (or are using) them.

They are both a way to write kind of HTML to will be compiled to Javascript.

This is how I will represent them on a JS/HTML scale:

{% caption Don't need to know about JS to write with Vue %}
{% asset_img jsx-vue-template.svg 340 140 "JSX/Vue proximity with HTML 'JSX/Vue proximity with HTML'" %}
{% endcaption %}

This is the same component written in:

#### JSX

```js
export function Foo(props) {
  const componentClasses = [`foo`];
  if (props.secondary) componentClasses.push(`foo--secondary`);
  return (
    <div className={componentClasses.join(` `)}>
      {props.bar && <h3 className={`foo__bar`}>{props.bar}</h3>}
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

But I found [JSX](https://reactjs.org/docs/introducing-jsx.html) more difficult to read and write:

- [Attributes are different](https://reactjs.org/docs/dom-elements.html#classname) than their HTML counterpart (`className` for `class`, [camelCase](https://en.wikipedia.org/wiki/Camel_case), etc.)
- no build in support for setting/un-setting classes (I end up using the [classnames](https://www.npmjs.com/package/classnames) module)
- no build-in solutions for having many part/slot to fill (for a better explanation about what I mean read [the Vue's slot doc](https://vuejs.org/v2/guide/components-slots.html))
- on a lower note, it's a good thing to be able to use regular javascript in your template but:
  - writing conditional is strange `{props.bar &&…}`
  - I don't like the look of the map function ending `))}`
  - …so yeah, it's mainly purely aesthetic

#### Vue JSX

But if JSX is your way to go, [Vue supports it!](https://vuejs.org/v2/guide/render-function.html#JSX)

## Building a web-app

React is only the _view part_ in the [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) pattern.
It isn't meant to do more than that.

**BUT**

Let's be honest: You will quickly need (at least):

- a router
- a state manager

React doesn't provide them out of the box & won't give you any advice about what to use.  
There are popular options around there:

## Tooling

## Some code
