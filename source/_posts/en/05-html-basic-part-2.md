---
title: html basic (part 2)
lang: en
description: 'Learn more about writing HTML: nesting HTML element and achieving a more complex web-page'
tags:
  - beginner
  - html
categories:
  - web
date: 2018-03-01 10:13:24
cover: cover.png
comments: false
---

## Introduction

With {% post_link 04-html-basic-part-1 %} we've seen how to:

- use a *proper text editor* to create and edit a HTML document
- what is a *HTML element*

Now we will see how to build more upon that!

<!-- more -->

### What can we improve?

- A more detailed article, like enumerate the toys
- Add an image
- Add a title to the page

## Enumerating toys: nesting HTML elements

{% caption An amazing cast %}
{% asset_img toys.svg 500 170 "a sheppard, a sheep, a wolf and an dinosaur 'a sheppard, a sheep, a wolf and an dinosaur'" %} 
{% endcaption %}

It could be nice if we make a list of toys 🐑  
Something like: 

[//]: # ( Don't use backtick as it mess with further include_code )
{% codeblock lang:text %}
- a bunch of sheep
- a shepherd
- a dinosaur
- a wolf
{% endcodeblock %}

How this translate to HTML?

{% include_code lang:html 05-html-basic-part-2/01-list.html %}

### Semantic of ul & li

As seen before, __HTML elements carry a semantic value__:  

- `ul` stands for __u__norganized __l__ist (unorganized because it's bullet points and not a numeric value)
- `li` stands for __l__ist __item__

So because we wanted a list of elements, the obvious choice was to use those elements 😎


### HTML element content

{% caption Yummy child apples inside daddy basket %}
{% asset_img basket-of-apples.svg 410 180 "a basket with 3 apples 'a basket with 3 apples'" %} 
{% endcaption %}

In the first part I said that the content contains your text.  
That was partially true: __It can also contain other HTML elements!__  

As example, if we want to describe in HTML a basket with 3 apples we can do something like:

[//]: # ( Don't use backtick as it mess with further include_code )
{% codeblock lang:xml %}
<basket>
  <apple></apple>
  <apple></apple>
  <apple></apple>
</basket>
{% endcodeblock %}

Of course `basket` and `apple` are not proper HTML elements ⛔ 🗑 + 🍎
Don't use them in your HTML code. 

### Parent & Children

This is developer's poetry 🌈 
We often refer to the __HTML elements containing the other__ as __the parent__ of __his children__  

In the example above:

- the parent will be the basket
- the children of the basket will be the apples

### A common mistake: not nesting properly

{% caption Browser doesn't like HTML elements in a quantum state %}
{% asset_img intertwined-apple.svg 270 180 "an apple stuck in the border of a basket 'an apple stuck in the border of a basket'" %} 
{% endcaption %}

What is very important to understand, is that the browser need to know where to start and where to stop.  
So __if we mess with the order of starting and closing tags__ it can __lead to some problems:__

Your browser is an amazing thing. He will try to fix it for you, but maybe not in the way you intended.

#### So this HTML code is bad:

[//]: # ( Don't use backtick as it mess with further include_code )
{% codeblock lang:html %}
<ul>
  <li>a dinosaur
</ul>
  </li>
{% endcodeblock %}

The browser won't understand it: 
the `<li>` __starts *inside*__ the `<ul>` 
__*BUT*__
it __ends *outside*__ his parent

#### This is the right way to write it:

[//]: # ( Don't use backtick as it mess with further include_code )
{% codeblock lang:html %}
<ul>
  <li>a dinosaur</li>
</ul>
{% endcodeblock %}

### Why the spaces before `<li>`?

{% caption Spaces are helping you to read, always %}
{% asset_img indentation.svg 500 260 "a nested kitchen, table, basket & apples separated by spaces 'a nested kitchen, table, basket & apples separated by spaces'" %} 
{% endcaption %}

In order to prevent this problem, we use a convention:

  - just [indent](https://en.wikipedia.org/wiki/Indentation_style) the content
  - so we can see better what's __inside__ what

__*It's really important to indent well*__: It will prevent you to do a lot of mistakes.  
…and it looks nicer (developer's poetry 🌈)

Indenting is made easy with a {% post_link 04-html-basic-part-1 a proper text editor %} like [Visual Studio Code](https://code.visualstudio.com/). 
It will also highlight HTML errors for you. Good guy 🤩

## Adding an image: self-closing HTML element & attributes

{% caption Hey, I need U ❤️ %}
{% asset_img browser-needing-a-picture.svg 300 140 "a browser taking a picture with his tiny hands 'a browser taking a picture with his tiny hands'" %} 
{% endcaption %}

Let's move on and make our HTML more fun:  
Add an illustration (illustrations are good)

{% include_code lang:html 05-html-basic-part-2/02-image.html %}

### Semantic of img

This one is easy:

[//]: # ( Have some issue on the rendering, resort to write HTML )
- `img` stands for __im__a<strong>g</strong>e

Want an image? use `img` 🌆

### Self-closing HTML elements

{% caption What is it? %}
{% asset_img what-is-this.svg 320 210 "a picture looking perplexedly at a text 'a picture looking perplexedly at a text'" %} 
{% endcaption %}

Some HTML elements don't need content.  
In the `img` element example, well… __an image is an image, what else do you want to add?__

to write them:

- just make __only 1 tag__
- have to __finish with *<span class="u-c-accent">/</span>>*__

{% caption I'm a self-closed HTML element! %}
{% asset_img auto-closing-tag.svg 300 140 "a HTML element with a self-closed tag 'a HTML element with a self-closed tag'" %} 
{% endcaption %}

### The anatomy of attributes

{% caption Yummy apples can come in all sort of kind %}
{% asset_img basket-of-colored-apples.svg 270 180 "a basket with 3 apples of different kind 'a basket with 3 apples of different kind'" %} 
{% endcaption %}

If we go on a deeper view, HTML elements can also have some properties that describe it.  
Following our basket/apple example, we might want to know more about the apples:

[//]: # ( Don't use backtick as it mess with further include_code )
{% codeblock lang:xml %}
<basket>
  <apple skin="pink" taste="sugary" />
  <apple skin="blue" taste="sour" />
  <apple skin="soft-pink" taste="not so much" />
</basket>
{% endcodeblock %}

#### How to write an attributes

{% caption XRay the tag %}
{% asset_img anatomy-of-an-attribute.svg 480 280 "a description of a tag 'a description of a tag'" %} 
{% endcaption %}

- those properties are named __*attributes*__
- those attributes are __*always on the starting tag*__
- those attributes __*come*__ more often __*in two parts*__:
  - an __*attribute name*__: a text *without* space
  - an __*attribute value*__: a text that can contain space
- we always write it that way: `attribute-name="the content on my property"`  
  - Notice the __*equal sign* right after the attribute name__
  - The __equal sign *shouldn't be separate by space*__  (`attribute-name = "the content on my property"` is wrong)
  - The __content__ always come __surrounded by double quotes__

### The image src attribute

__The `src` attribute stands for *source*__

Some information like the one for an image, can't be included in the HTML document.  
We need to tell the browser where to find them.  

The `src` attribute is simply that: where we can find the file containing the data of my image!

#### Beware of spaces and letter case

{% caption Don't mess with the wolves %}
{% asset_img wolf-vs-wolf.svg 460 180 "two wolfs' picture, which are written one in lowercase & the other in uppercase 'two wolfs' picture, which are written one in lowercase & the other in uppercase'" %} 
{% endcaption %}

The browser takes a deep care of respecting what you write. 
__He will even make a difference between [lowercase and uppercase](https://en.wikipedia.org/wiki/Letter_case)__ so a file named `WOLF.jpg` and `wolf.jpg` are not similar to him.  
In the same ways, spaces can be a tricky thing so __*as a rule of thumb*__:

- __always name your files in lowercase__
- __replace spaces by `-` in the name__

*example:*

`My long Image name.jpg` is better written `my-long-image-name.jpg`

## The page title

{% caption There is a title here %}
{% asset_img website-title.svg 220 160 "The browser tab is named “wolf story” 'The browser tab is named “wolf story”'" %} 
{% endcaption %}

The browser let's us specify the text that appear in the tab.  
We call it the page title.

In order to do this we need some adjustments:

{% include_code lang:html 05-html-basic-part-2/03-page-title.html %}

### Why <html\>, <head\> & <body\>?

{% caption You can't see no brain… But read my story! %}
{% asset_img head-and-body.svg 380 280 "a HTML file with a brain, having a “wolf story” book open in front of him 'a HTML file with a brain, having a “wolf story” book open in front of him'" %} 
{% endcaption %}

Developers are poet 🌈 But like poetry there is some conventions: like keeping things simple & stupid 👷‍♀   
If something is organized with `parent ➡️ children` relations, then we should apply it everywhere, no exceptions allowed.

#### <html\>

Before, we used to just put our content, floating inside the HTML file.  

Now we put a single parent for everything: the `<html>` element, just to make sure that nobody's left without a parent.  
And we called it `<html>` because it's what we're writing right?

#### <head\>

In the `<head>` we will keep __everything that's invisible inside the webpage.__  

Look at it as your thought & identity.  
Important but less obvious than the rest.

#### <body\>

In the `<body>` we will keep __everything that's visible__.  
Our content 📘

## wrapping up

We have seen:

- More HTML elements and their associated semantic
- That we can nest HTML elements inside each other
- That HTML elements can have attributes
- How to write everything in a clean way
- A more pertinent organization of the HTML page

It's still ugly, but before digging into that ([CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)), we will make some short improvements in the story… in {% post_link 06-html-basic-part-3 the part 3! %}

