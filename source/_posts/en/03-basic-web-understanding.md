---
title: basic web understanding
lang: en
description: Learn how you have a nice web-page after typing an address in your web-browser
tags:
  - beginner
comments: false
categories:
  - web
date: 2018-02-07 12:56:47
cover: cover.png
---


## Introduction

The purpose of this post is to provide you with a basic understanding of what makes it possible to see a website by typing its address.
It's a simplification of what happens in reality, but the main ideas are here 🙂

<!-- more -->

## Terminology 

### Internet 

It's a way of making __devices talking to each other__. 

[an extensive article about internet](https://en.wikipedia.org/wiki/Internet)

### Many devices

Even if they are all computers we can differentiate two types of devices:

#### The client

{% caption clients: your everyday devices! %}
{% asset_img computer-and-phone.svg 350 200 "a computer & a phone 'a computer & a phone'" %} 
{% endcaption %}

It's __your device__ (laptop or smartphone…). 

[//]: # ( need to suse {% link %} regular link doesn't handle well parenthesis )
{% link an extensive article about the client https://en.wikipedia.org/wiki/Client_(computing) %}

It has one or many __browsers installed on it__ to easily access the internet.

#### The server

{% caption server: the ones always there to help you! (they never sleep 😶) %}
{% asset_img server.svg 220 160 a server %} 
{% endcaption %}

It's a __computer__ specialized in __answering request__. 
It has some special software running on it to behave that way.
Usually you don't own one.

[//]: # ( need to suse {% link %} regular link doesn't handle well parenthesis )
{% link an extensive article about the server https://en.wikipedia.org/wiki/Server_(computing) %}

On a small note, Internet is about making computers talk to each other. 
So you can transform your own computer in a server if you want by installing those specific software!

### The Browser

{% caption The browser: making your web easier since 1990 %}
{% asset_img browser.svg 200 130 "a web browser 'a web browser'" %} 
{% endcaption %}

A [browser](https://en.wikipedia.org/wiki/Web_browser): It's the software you use to access an internet page.
Some common browsers are:
- [Google Chrome](https://www.google.com/chrome/browser/desktop/index.html)
- [Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge)
- [Apple Safari](https://support.apple.com/downloads/safari)

It will do a lot for you so that you can have a graphical representation of what you're asking for.  
Yep, it seems obvious but that's the main thing about computers: how with [bits](https://en.wikipedia.org/wiki/Bit) you can have an interactive display ✨ 

## How does it works

{% caption “Hey server! what do you have there?” %}
{% asset_img browser-ask-server.svg 525 200 "a web browser asking resources to a server 'a web browser asking resources to a server'" %} 
{% endcaption %}

When you type an address in the browser, the browser will ask the server what is at that location for him to get.

Most of the time you want to get a web-page, but it can be anything: an image, sound, video, pdf documents…

### getting a web-page

{% caption Here is the html you asked for! %}
{% asset_img server-give-html.svg 525 200 "the server giving a HTML file 'the server giving a HTML file'" %} 
{% endcaption %}

A __web-page__ is just a __text file!__ we call it __html file__… You can read [a lot more about HTML](https://en.wikipedia.org/wiki/HTML)

### HTML

So HTML is a text file but a very specific kind of text file.
It's: 

- all the information you want to have but written in a specific way 
- all the information that the web-page need to be more friendly and helpful

### CSS, Javascript and other resources 

{% caption You also need CSS & JS %}
{% asset_img server-give-css-and-js.svg 525 200 "the server giving a CSS & a JS file 'the server giving a CSS & a JS file'" %} 
{% endcaption %}

The latter part is the HTML file telling the browser to ask the server for more files. 
Beside images/videos, there are also 2 domains where it needs more specific information: 

- for having a __nice presentation__: those are the __CSS__ text files
- for being __interactive__: those are the __Javascript__ text files

### The browser magic

{% caption It's awesome! A beautiful web-page!  %}
{% asset_img webbrowser-rendering.svg 480 400 "the browser rendering a web-page 'the browser rendering a web-page'" %} 
{% endcaption %}

And now, using all those text files, your browser will do the magic and finally show you an interactive display of the information you wanted to see!

## So…

{% caption Love! Love! Love! %}
{% asset_img browser-love.svg 260 140 "the browser surrounded by heart 'the browser surrounded by heart'" %} 
{% endcaption %}

__Love your browser and keep it up to date__ 😎

You know now that : 

- a website is mainly text files
- They are given to you by the server
- The main text file for a website is the HTML file

I will go into more details for all those files (HTML, CSS & Javascript) with comings posts.  

*[UPDATE]* {% post_link en/03-html-basic-part-1 here is the the first part of HTML document! %} 

Thanks to [xpac27](https://github.com/xpac27) for the corrections!
