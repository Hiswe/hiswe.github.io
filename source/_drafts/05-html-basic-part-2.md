---
title: html-basic-part-2
tags:
  - beginner
  - html
comments: false
categories:
  - web
---

## Introduction

With {% post_link 04-html-basic-part-1 %} we've seen how to:

- use a **proper text editor** to create and edit a HTML document
- what is a **HTML element**

Now we will see how to build more upon that!

<!-- more -->

### What can we improve?

- A more detailed article, like enumerate the toys
- Add an image
- Add a title to the page

<!-- 
https://gist.github.com/robedge/2044588
https://google.github.io/styleguide/htmlcssguide.html#Optional_Tags
https://leaverou.github.io/talks/intro/#slide90 
-->

## Enumerating toys: nesting HTML elements

<!-- Illustrations of toys -->

It could be nice if me make a list of toys 🐑  
Something like: 

[//]: # ( Don't use backtrick as it mess with further include_code )
{% codeblock lang:text %}
- a bunch of sheep
- a shepard
- a dinosaur
- a wolf
{% endcodeblock %}

How this translate to HTML?

{% include_code lang:html 05-html-basic-part-2/01-list.html %}

### semantic of ul & li

<!-- Illustrations of an HTML element containing other html elements -->

As seen before, *HTML elements carry a semantic value*:  

- `ul` stands for *u*organized *l*ist
- `li` stands for *l*ist *item*

So because we wanted a list of elements, the obvious choice was to use those elements 😎


### HTML element content

<!-- Illustrations box inside boxes -->

In the first part I said that the content contains your text.  
That was partially true: *It can also contain other HTML elements!*  

You can see this as putting boxes inside other boxes.

We often refer of the *HTML elements containing the other* as *the parent* of *his children*  
This is developer's poetry 🌈 

### A common mistake: not nesting properly

<!-- Illustrations of an HTML element overlapping another -->

What is very important to understand, is that the browser need to know where to start and where to stop.  
So *if we mess with the order of starting and closing tags* it can *lead to some problems*.

#### This HTML code is bad:

[//]: # ( Don't use backtrick as it mess with further include_code )
{% codeblock lang:html %}
<ul>
  <li>pouic pouic
</ul>
  </li>
{% endcodeblock %}

The browser won't understand it: 
the `<li>` *starts **inside*** the `<ul>` 
***BUT***
it *ends **outside*** his parent

#### This is the right way to write it:

[//]: # ( Don't use backtrick as it mess with further include_code )
{% codeblock lang:html %}
<ul>
  <li>pouic pouic</li>
</ul>
{% endcodeblock %}

### Why the spaces before `<li>`?

<!-- Illustration a rainbow of indentation -->

In order to prevent this problem, we use a convention:

  - just [indent](https://en.wikipedia.org/wiki/Indentation_style) the content
  - so we can see better what's *inside* what

***It's really important to indent well***: It will prevent you to do a lot of mistakes.  
…and it looks nicer (developer's poetry 🌈)

you can read [a more extensive article on indentation here](https://www.granneman.com/webdev/coding/formatting-and-indenting-your-html/)

## Adding an image: self-closing HTML element & attributes

<!-- Illustration ?? -->

Let move on and make our HTML more fun: Add an illustration (illustrations are good)

{% include_code lang:html 05-html-basic-part-2/02-image.html %}

### semantic of img

This one is easy:

- `img` stands for *im*a*g*e

Want an image? use `img` 😎

### self-closing HTML elements

<!-- Illustration an HTML who doesn't to have children -->

Some HTML elements doesn't allow content.  
In the `img` element example, well… *an image is an image, what else do you want to add?*

### The anatomy of starting tags: attributes

<!-- Illustration XRay of a tag -->

If we go in a deeper view, tags can also have some properties that describe it.
Imagine we have a HTML element for an apple. We may want to know which color is the apple


```html
<apple skin="green" taste="delicious"  price="0" />
```

But we write it differently 



<!-- 
#### about metadata

- all the informations that are evolving around the main datas
- words: author…
- images: camera lens, position 

-->
