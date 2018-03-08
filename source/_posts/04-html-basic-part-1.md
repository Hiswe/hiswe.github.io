---
title: html basic (part 1)
tags:
  - beginner
  - html
comments: false
categories:
  - web
date: 2018-02-20 09:57:44
cover: cover.png
---

## Introduction

As seen in {% post_link 03-basic-web-understanding %} the HTML file is the backbone of a webpage.  
The purpose of this post is to have a better understanding of those, and how you can write a simple one!

<!-- more -->

Like on the basic understanding, I will omit some stuff to keep it simple.  
As more posts will be published, we will clarify those 🤓

## Why HTML?

Every device (computer, mobile phone, TV…) has a web-browser. So it's the most universal language you can learn!

With it you can make:

- blog
- sales sites
- video games
- books
- and everything more

And also it can be read to people with disabilities! 

## What is an HTML file?

{% caption Getting to know each other %}
{% asset_img browser-guessing-files.svg 400 500 "different steps of understanding it is an HTML file 'different steps of understanding it is an HTML file'" %} 
{% endcaption %}

It's a *text file*.

So we can just write some text on it and it will do the thing!

But for the browser to understand it's reading an HTML file we need two things:

- the *right file extension:* ***.html***
- a *small text at the top of the file* to indicate the content is really HTML.<br> This will be `<!DOCTYPE html>`  

### Hey! if it's a text file, I can use Microsoft Word!

{% caption Guy, I can't understand you %}
{% asset_img browser-dont-understand-word.svg 400 190 "A Word file speaking an incomprehensible language to a browser 'A Word file speaking an incomprehensible language to a browser'" %} 
{% endcaption %}

In short: *you can't use Microsoft Word*

#### If you're interested about the reasons:

*Microsoft Word* (let's call it Word for now on) *produces **docx** files **not HTML*** files.

And *your browser can't understand Docx* files.
Even if, when looking at word document *it looks like only text, it isn't.*  

Word in its files stores a lots of other information! the text in itself but also the font styles you use (which font, the size, if it's bold or not), the images you use, etc.

### Let's use a proper text editor

So we need another solution.  
Luckily there is a lot of alternative, and some are already on your computer!

#### On mac: TextEdit

- don't forget to have the `format > Make Plain Text` option checked

{% video textedit-create-html-file.mp4 %}

#### On Windows: Notepad

- don't forget to set `save as type` to `All Files (*.*)`

{% caption You need to specify ”save as type: All Files” %}
{% asset_img notepad@2x.png 978 556 "A screenshot of the Notepad application 'A screenshot of the Notepad application'" %} 
{% endcaption %}

### What are the better alternatives (and they are free):

{% caption We're ok on every computers! %}
{% asset_img visual-studio-and-atom.svg 430 180 "Atom & Visual Studio Code 'Atom & Visual Studio Code'" %} 
{% endcaption %}

- [Visual Studio Code](https://code.visualstudio.com/)
- [Atom](https://atom.io/)
- and a lot more…

So you can download and use one of them 👍

## Let's begin!

{% caption น่ารัก %}
{% asset_img baby-html.svg 150 160 "A baby HTML file 'A baby HTML file'" %} 
{% endcaption %}

Make a new file named `my-first-webpage.html` and save it somewhere.  
You can now type:

{% include_code lang:html 04-html-basic-part-1/my-first-webpage.html %}

And open it with your web browser! (or click on the `view raw` to have the final result)

### Why is everything on the same line?

{% caption Hey, just doing my job… %}
{% asset_img browser-rendering-text.svg 430 400 "The browser rendering the previous example 'The browser rendering the previous example'" %} 
{% endcaption %}

You wanted to have a formated article, right?  
It means for a better reading experience having some:

- [headlines](https://en.wikipedia.org/wiki/Headline) 
- [paragraph](https://en.wikipedia.org/wiki/Paragraph)
- Maybe some text formatting like bold and italic

*Where in Word you can click a button to this, in HTML you have to write it for the web browser to understand.*  
Because right now, you *only wrote two lines of text*, and ***for him it's just some text***: **he merges multiple spaces and ignore carriage return** 😇 (and believe me, he's doing this for your own good)

### Let's tell the browser we want a headline and paragraph!

{% caption Ah ok! you want a heading & a paragraph! %}
{% asset_img browser-rendering-html.svg 430 450 "The browser rendering the example below 'The browser rendering the example below'" %} 
{% endcaption %}

We need to update our example like this:

{% include_code lang:html 04-html-basic-part-1/my-improved-webpage.html %}

After saving, __reload your browser__ aaand… It's done! 🥇  
ok it's still kind of ugly but we will address that on another post talking about [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets).

### But what happened? HTML elements

*We just told the browser which type of content we want* 😊

#### The anatomy of an HTML element

{% caption XRay vision of HTML elements  %}
{% asset_img html-element-anatomy.svg 500 280 "Two detailed HTML elements 'Two detailed HTML elements'" %} 
{% endcaption %}

An HTML Element is a **group having a semantic value** (like heading, paragraph, list…)  
It's composed most of the time by:

- a *starting tag* (`<h1>` & `<p>` in our example) always written by the * tag's name of the  surrounded by angle brackets*
- the *content* (your different texts)
- a *closing tag* (`</h1>` & `</p>` in our example) like the starting tag **but**:   
  ⚠️ *add an additional* `/` *after the first angle bracket!*

you can see more on this [wikipedia article](https://en.wikipedia.org/wiki/HTML_element#Syntax)

#### Starting and closing tags

That's how you tell the browser where an HTML element begin and stop.  
Without it, as clever as the browser is, he can't guess what you have in your mind when writing your HTML page.

***Writing properly an HTML element is the most important thing to understand about HTML!***

#### h1 & p

As told previously, any HTML carry a **semantic value**, so: 

- `h1` stands for *h*eading of *1*<sup>st</sup> level 
- `p` stands for *p*aragraph

You can view an [extensive list of HTML elements here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

## Wrapping up

Writing an HTML page is easy! 
Now you know how to:

- use a *proper text editor* to create and edit a HTML document
- what is a *HTML element*

But we have more to see on {% post_link 05-html-basic-part-2 the second part %}  to make it a little bit more complex ⚙️
