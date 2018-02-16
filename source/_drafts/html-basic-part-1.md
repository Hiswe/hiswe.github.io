---
title: html basic (part 1)
tags:
  - beginner
comments: false
categories:
  - web
---

<!-- https://google.github.io/styleguide/htmlcssguide.html#Optional_Tags -->

## Introduction

As seen in {% post_link 03-basic-web-understanding %} the HTML file is the backbone of a webpage.  
The purpose of this post is to have a better understanding of those, and how you can write a simple one!

<!-- more -->

Like on the basic understanding, I will omit some stuff to keep it simple.  
As more posts will be published, we will clarify those 🤓

## What is an HTML file?

{% caption Getting to know each other %}
{% asset_img browser-guessing-files.svg 400 500 different steps of understanding it's an HTML file %} 
{% endcaption %}

It's a *text file*.

So we can just write some text on it and it will do the thing!

But for the browser to understand it's reading an HTML file we need two things:

- the *right file extension:* ***.html***
- a *small text at the top of the file* to indicate the content is really HTML.<br> This will be `<!DOCTYPE html>`  

### Hey! if it's text file, I can use Microsoft Word!

{% caption Guy, I can't understand you %}
{% asset_img browser-dont-understand-word.svg 400 190 A Word file speaking an incomprehensible language to a browser %} 
{% endcaption %}

In short: *you can't use Microsoft Word*

#### If you're interested about the reasons:

*Microsoft Word* (let's call it Word for now on) *produces **docx** files **not HTML*** files.

And *your browser can't understand Docx* files.
Even if, when looking at word document *it looks like only text, it isn't.*  
Word in its files store a lots of other informations! 

- the text in itself but also…
- the font styles you use (which font, the size, if it's bold or not)
- the images you embedded in
- and so on…

### Let's use a proper text editor

So we need another solution.  
Lucky for us there is a lot of alternative. And some are already on your computer!


#### On mac: TextEdit

- don't forget to have the `format > Make Plain Text` option checked

{% video textedit-create-html-file.mp4 %}

#### On Windows: Notepad

- don't forget to set `save as type` to `All Files (*.*)`

{% caption You need to specify ”save as type: All Files” %}
{% asset_img notepad@2x.png 978 556 A screenshot of Notepad %} 
{% endcaption %}

### What are the better alternatives (and they are free):

{% caption We're ok on every computers! %}
{% asset_img visual-studio-and-atom.svg 460 160 Atom & Visual Studio Code %} 
{% endcaption %}

- [Visual Studio Code](https://code.visualstudio.com/)
- [Atom](https://atom.io/)
- and a lot more…

So you can download and use one of them 👍

## Let's begin!

{% caption น่ารัก %}
{% asset_img baby-html.svg 150 160 A baby HTML file %} 
{% endcaption %}

Make a new file named `my-first-webpage.html` and save it somewhere.  
You can now type:

{% include_code lang:html 04-html-basic-part-1/my-first-webpage.html %}

And open it with your web browser! (or click on the `view raw` to have the final result)

### Why everything is on the same line?

<!-- illustration: a sad html file with a broken heart -->

You want to a formated article, right?  
It means having some:

- [headlines](https://en.wikipedia.org/wiki/Headline) 
- [paragraph](https://en.wikipedia.org/wiki/Paragraph) because reading a text without space is uncomfortable 
- Maybe some text formatting like bold and italic

*Where in Word you can click a button to this, in HTML you have to write it for the web browser to understand.*

### Let tell the browser we want a headline and paragraph

<!-- illustration: ??? -->

Let's update our example like this:

{% include_code lang:html 04-html-basic-part-1/my-improved-webpage.html %}

After saving reload, your browser aaand… It's done! 🥇 (ok it's still kind of ugly but we will address that later)

### But what happened?

<!-- illustration: ??? -->

*We just told the browser which type of content we want*

- `<h1>` is a way to indicate we want a *h*eading of *first* level 
- `<p>` is a way to indicate we want a *p*aragraph

#### What are those strange `<h1>` & `<p>`? ➡️  Tags!

<!-- illustration: anatomy of a tag-->
<!--  https://en.wikipedia.org/wiki/HTML_element#Syntax -->

Those are what we called: [`tags`]().
It's *the most important thing to understand about HTML*

- **tags** are the *base bricks to build an HTML document* 
- they define an [HTML element](https://en.wikipedia.org/wiki/HTML_element)
- they most often come by 2:
  - a starting tag `<p>`: to tell the browser where it starts
  - an ending tag `</p>`: to tell the browser where it ends


#### about metadata

- all the informations that are evolving around the main datas
- words: author…
- images: camera lens, position
