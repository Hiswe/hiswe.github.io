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

<!-- Illustrations of a plate with apples -->

In the first part I said that the content contains your text.  
That was partially true: *It can also contain other HTML elements!*  

As example, if we want to describe in HTML a plate with 3 apples we can do something like:

[//]: # ( Don't use backtrick as it mess with further include_code )
{% codeblock lang:xml %}
<plate>
  <apple></apple>
  <apple></apple>
  <apple></apple>
</plate>
{% endcodeblock %}

Of course `plate` and `apple` are not proper elements ^^

### Parent & Children

This is developer's poetry 🌈 
We often refer of the *HTML elements containing the other* as *the parent* of *his children*  

In the example above:

- the parent will be the plate
- the children of the plate will be the apples

### A common mistake: not nesting properly

<!-- Illustrations of an a plate overlapping an apple -->

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

Indenting is made easy with a {% post_link 04-html-basic-part-1 a proper text editor %} like [Visual Studio Code](https://code.visualstudio.com/). 
It will also highlight HTML errors for you. Good guy 🤩

you can read [a more extensive article on indentation here](https://www.granneman.com/webdev/coding/formatting-and-indenting-your-html/)

## Adding an image: self-closing HTML element & attributes

<!-- Illustration ?? -->

Let move on and make our HTML more fun:  
Add an illustration (illustrations are good)

{% include_code lang:html 05-html-basic-part-2/02-image.html %}

### semantic of img

This one is easy:

- `img` stands for *im*a*g*e

Want an image? use `img` 🌆

### self-closing HTML elements

<!-- Illustration an HTML who doesn't to have children -->

Some HTML elements doesn't allow content.  
In the `img` element example, well… *an image is an image, what else do you want to add?*

### The anatomy of attributes

<!-- Illustration XRay of a tag -->

If we go on a deeper view, HTML elements can also have some properties that describe it.  
Following our plate/apple example, we might want to know more about the apples:

[//]: # ( Don't use backtrick as it mess with further include_code )
{% codeblock lang:xml %}
<plate>
  <apple skin="pink" taste="sugary" />
  <apple skin="blue" taste="sour" />
  <apple skin="soft-pink" taste="not so much" />
</plate>
{% endcodeblock %}

#### How to write an attributes

<!-- Illustration an attribute -->

- those properties are name ***attributes***
- those attributes are ***always on the starting tag***
- those attributes ***come*** more often ***in two parts***:
  - an ***attribute name***
  - an ***attribute value***
- we always write in `attributename="the content on my property"`  
  - Notice the * **equal sign** right after the attribute name*
  - The *equal sign **shouldn't be separate by space***  (`attributename = "the content on my property"` is wrong)
  - The *content* always come *surrounded by double quotes*

### The image src attribute

We need to tell the browser where he can find the image.  
The `src` attribute is simply that: where we can find the file.

#### beware of spaces and letter case

The browser take a deep care of respecting what you write. 
*He will even make a difference between [lowercase and uppercase](https://en.wikipedia.org/wiki/Letter_case)* so a file named `WOLF.jpg` and `wolf.jpg` are not similar to him.  
In the same ways, spaces can be a tricky thing so ***as a rule of thumb***:

- always name your files in lowercase
- replace spaces by `-`

**example:**

`My long Image name.jpg` is better written `my-long-image-name.jpg`

## The page title

The browser let's us specify the text that appear in the tab.  
We call it the page title.

In order to do this we need some adjustments:

{% include_code lang:html 05-html-basic-part-2/03-page-title.html %}

### Why <html\>, <head\> & <body\>?

<!-- Illustration: a man html webpage -->

Developers are poet 🌈 But they also like to keep things simple & stupid 👷‍♀   
If something is organized with `parent ➡️ children` relations, they will apply it everywhere.  

#### <html\>

Before we used to just put our content floating inside the text file.  

Now we put a single parent for everything: the `<html>` element.  
Just to make sure that nobody's left without a parent.

#### <head\>

In the `<head>` we will keep *everything that's invisible inside the webpage.*  

Look at it as your thought & identity.  
Important but less obvious than the rest.

#### <body\>

In the `<body>` we will keep *everything that's visible*.  
Our content :)

## wrapping up

pouic pouic

