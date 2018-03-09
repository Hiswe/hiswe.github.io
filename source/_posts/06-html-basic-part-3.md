---
title: html basic (part 3)
description: 'Learn even more about writing HTML: semantic in HTML, encoding & meta elements'
tags:
  - beginner
  - html
comments: false
categories:
  - web
cover: cover.png
date: 2018-03-08 12:02:58
---

## Introduction

In {% post_link 04-html-basic-part-1 the first %} and {% post_link 05-html-basic-part-2 the second %} part we've seen the basis of how to write an HTML document.

Now we're going to play with that and expand our HTML document.  
This will help us to learn more about HTML and how we can easily make it more [accessible](https://en.wikipedia.org/wiki/Web_accessibility) for people with disabilities.

<!-- more -->

## Enhance with more HTML elements

### Add the author: `<address>` element

{% caption A very inspired author %}
{% asset_img author.svg 400 240 "a writer posing with a pen 'a writer posing with a pen'" %} 
{% endcaption %}

Why not showing who wrote this amazing piece of art? (short answer: me)

If we look which [HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) seems the most appropriate, we can see that `<address>` seems the right one.

{% blockquote Mozilla Developer Network https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address address element description %}
The HTML <address\> element indicates that the enclosed HTML provides contact information for a person or people, or for an organization
{% endblockquote %}

So we can add it right after our title:

{% codeblock lang:html %}
<h1>The Boy Who Cried Wolf</h1>
<address>by Hiswe</address>
{% endcodeblock %} 

Which seems to be good enough…

### Add a link to the author page: `<a>` element

{% caption Exploring the web %}
{% asset_img backpacker.svg 500 240 "a backpacker going from a website to another 'a backpacker going from a website to another'" %} 
{% endcaption %}

…but we can do more!

__The web is all about [links](https://en.wikipedia.org/wiki/Hyperlink)__ and getting from one place to another!

So why not include a link to the author website where all his glorious contents live?

{% codeblock lang:html %}
<address>
  by    
  <a href="https://github.com/hiswe/">Hiswe</a>
</address>
{% endcodeblock %} 

As seen in {% post_link 05-html-basic-part-2 part 2 %} the `parent` (`<address>` here) can have many `children`.  
And __you can mix in any order text child with HTML element child__ 

#### Semantic of `<a>` and `href`

{% caption This how we bound! %}
{% asset_img anchor.svg 500 180 "an anchor going from a website to another 'an anchor going from a website to another'" %} 
{% endcaption %}

`<a>` stands for [anchor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

the `href` attribute refer to `hyperlink reference` (hyperlink is the technical way of saying link… 99% of the times, we just say link)

#### Why the browser is merging spaces for your own good

{% caption FUUUUUSION! %}
{% asset_img merging-white-space.svg 500 200 "the browser merging two white spaces 'the browser merging two white spaces'" %}
{% endcaption %}

Even if we wrote the “by” and “Hiswe” on two lines with white-spaces before, __the output will be rendered on a single line.__

We have seen in {% post_link 04-html-basic-part-1 part one %} that __*the browser merges multiple spaces and ignore carriage return.*__
This come handy here! This __allow us to have a proper indentation in our code without worrying about the browser rendering__ 😇

But for a better understanding, we can write our code in that way:

{% codeblock lang:html %}
<address>by <a href="https://github.com/hiswe/">Hiswe</a></address>
{% endcodeblock %} 

In the end whatever way you're choosing this is only a matter of personal appreciation, the browser will output the content in the same way.

#### More semantic on the link

{% caption I'm an artist… and this is my humble home %}
{% asset_img author-home.svg 350 250 "A writer in his house surrounded by books 'A writer in his house surrounded by books'" %}
{% endcaption %}

__Semantic is important, because:__

- It will make your __HTML code more readable for you__
- It will allow a __better [screen reading](https://en.wikipedia.org/wiki/Screen_reading) experience__ for disabled people. 
  In short: the computer will read the text and describe the context of this text. 
  As an example if you have an heading of first level `<h1>`, the screen reader will say:
  <q>heading of first level</q> and then read the content
  
We wrote a link, but what we really want to achieve, is __describing an author__.  
We already have the `<address>` element but we can add more on the link.

If we take a deeper look at this [HTML element documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), we can see that there is a __`rel` attribute:__

{% blockquote Mozilla Developer Network https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel rel attribute description %}
*rel*
Specifies the relationship of the target object to the link object.
{% endblockquote %}    

This documentation provides us a link of [the possible values of this rel attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types) and it says that __we can have an author value!__.  

Here's a lookup of our update:

{% codeblock lang:html %}
<address>by <a href="https://github.com/hiswe/" rel="author">Hiswe</a></address>
{% endcodeblock %} 

### Add some text formatting: `<br/>`, `<em>` & `<strong>`


{% caption PEW! PEW! %}
{% asset_img laser-dino.svg 320 200 "A dinosaur firing laser beams with his eyes 'A dinosaur firing laser beams with his eyes'" %}
{% endcaption %}

Like a lazy cow 🐮, I will just give you the whole document, and we will go on any of the differences.

{% include_code lang:html 06-html-basic-part-3/01-full-story.html %}

#### Semantics of…

{% caption I can write in so many ways! %}
{% asset_img bold-and-italic.svg 400 300 "A web-browser writing bold and italic on a blackboard 'A web-browser writing bold and italic on a blackboard'" %}
{% endcaption %}

All those elements helps you achieving some basic text formating:

- `<br />` stands for __break__. Just a regular carriage return __*⏎*__
  Like the `<img />` element, it's a self-closing HTML elements.
  Y'know a break is just a break…
- `<em />` stands for __emphasis__ – rendered by default in [italic](https://en.wikipedia.org/wiki/Italic_type#Usage)
- `<strong />` obvious strong is __strong__ 💪 – rendered by default in {% link bold https://en.wikipedia.org/wiki/Emphasis_(typography) %}

And after knowing that, it's just a matter of updating your HTML file and “voila!”.  

__HTML is easy__ ✌️ __*It's applying the same recipe again and again:*__

- __*writing* the content__
- __*choosing* the most fitting *HTML elements* if needed__
- __*nest and indent everything* in a good way__

## But Sir! We have à `â€œwolf!â€` problem! 

{% caption â€œwolf!â€, â€œwolf!â€ everywhere! %}
{% asset_img we-have-a-problem.svg 270 240 "A worried man standing in front of many strange text 'A worried man standing in front of many strange text'" %}
{% endcaption %}

Your eyesight is as accurate as an eagle 🦅

We do have a problem but the good news is that it can be fixed very easily.

We just have to modify our document like this:

{% codeblock lang:html %}
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Wolf Story</title>
  <!-- the rest of our content… -->
{% endcodeblock%}

### Character encoding: `<meta charset="utf-8" />`

{% caption So many characters used around the globe! %}
{% asset_img speaking-different-language.svg 350 250 "A browser speaking the “cute” word in english, french, thai and japanese 'A browser speaking the “cute” word in english, french, thai and japanese'" %}
{% endcaption %}

#### TL;DR

- Because it's __not really part of the content of our document content__, this __element place is in the `<head>`__
- `<meta>` stands for [metadata](https://en.wikipedia.org/wiki/Metadata)
- __just always add *<meta charset="utf-8" /\>* in every HTML document *<head\>* you create.__

#### Understanding metadata

{% caption Real life metadata %}
{% asset_img in-paris-with-love.svg 460 220 "A polaroid with some text written at the bottom: the metadata 'A polaroid with some text written at the bottom: the metadata'" %}
{% endcaption %}

__Metadata__ are everything that __isn't the content but__ that __provide context__ upon it.

If we take a photo as an example, metadata would be:

- where the picture have been taken
- at what time 
- by who
- with which camera
- <i>etc.</i>

As example, this can be used by softwares to:

- group all the photos taken at the same place, 
- group them by date or time range (every photos taken in the last month) 
- <i>etc.</i>

#### More details

The root problem, is [character encoding](https://en.wikipedia.org/wiki/Character_encoding). 

In a short, computers have evolved from supporting only a subset of english characters to all characters in the world (including emoji 💩).  
But __the web__ is an open platform and __try to maintain compatibility with old documents__.

__*So you have to tell your browser that you use the most modern encoding.*__

If you want to have a better understanding of this subject, I recommend you this [short video on the subject](https://youtu.be/MijmeoH9LT4)

### <html lang="en"\>

{% caption How do you do my dear fellow? %}
{% asset_img browser-speaking-english.svg 420 220 "A browser speaking an Union Jack flag 'A browser speaking an Union Jack flag'" %}
{% endcaption %}

This is to indicate in which language the HTML document is written.  
It's good for accessibility (so he can know in which language he should read the document)

As a rule of thumb: __*always provide it*__.

## A developer 🌈 thing: `<!-- comments -->` 

{% caption Please! Don't forget! %}
{% asset_img remember-the-milk.svg 420 220 "A computer speaking a post-it note to a person 'A computer speaking a post-it note to a person'" %}
{% endcaption %}

Your eagle accurate sight 🦅 have spotted this strange HTML element in my previous example: 

{% codeblock lang:html %}
<!-- the rest of our content… -->
{% endcodeblock%}

This is a __*comment*, a very important thing in the developer's toolbox.__  
It's just this:

- __text that will not appear in the browser__…
- …__but that stay in the code for helping us__

You can see that as [post-it note](https://en.wikipedia.org/wiki/Post-it_note) for you.  
You can write everything inside it, just make sure that the content is properly enclosed in `<!--`  and `-->`

## The full code example

{% include_code lang:html 06-html-basic-part-3/02-with-meta.html %}

## Wrapping up

We have seen:

- how to choose semantic HTML elements to fill our needs from a [documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- how to make links to other webpages: `<a href="">`
- some vitals information for the web-page to display properly with `<html lang="en">` & `<meta charset="utf-8" />`
- what is a comment in a dev perspective

__Getting better at writing HTML is only knowing which HTML element should be used & with which attribute.__

And this is all for the basic of HTML.  
Next we will see how to make our story nicer with [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

### Bonus: a simple HTML template

{% codeblock lang:html %}
<!DOCTYPE html>
<!-- Change lang to your own language -->
<html lang="en">
  <head>
    <!-- Always put this for a good character encoding -->
    <meta charset="utf-8" />
    <!-- This will appear as the text in the browser tab -->
    <title>Webpage's title</title>
  </head>
  <body>
    <!-- Here go the content -->
  </body>
</html>
{% endcodeblock%}
