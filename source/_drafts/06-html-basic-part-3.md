---
title: html basic (part 3)
comments: false
tags:
  - beginner
  - html
categories:
  - web
---

## Introduction

In {% post_link 04-html-basic-part-1 the first %} and {% post_link 05-html-basic-part-2 the second %} part we've seen the basis of how to write an HTML document.

Now we're going to play with that and expand our HTML document.  
This will help us to learn more about HTML and how we can make it [accessible](https://en.wikipedia.org/wiki/Web_accessibility) for people with disabilities easily.

<!-- more -->

## Enhance with more HTML elements

### Add the author: `<address>` element

<!-- ILLUSTRATION a pretentious author -->

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

<!-- ILLUSTRATION a backpack guy-->

…but we can do more!

*The web is all about [links](https://en.wikipedia.org/wiki/Hyperlink)* and getting from one place to another!

So why not include a link to the author website where all his glorious contents live?

{% codeblock lang:html %}
<address>
  by    
  <a href="https://github.com/hiswe/">Hiswe</a>
</address>
{% endcodeblock %} 

As seen in {% post_link 05-html-basic-part-2 part 2 %} the `parent` (`<address>` here) can have many `children`.  
And *you can mix in any order text child with HTML element child* 

#### Semantic of `<a>` and `href`

<!-- ILLUSTRATION an anchor linking two pages -->

`<a>` stands for [anchor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

the `href` attribute refer to `hyperlink reference` (hyperlink is the technical way of saying link… 99% of the times, we just say link)

#### Why the browser is merging spaces for your own good

<!-- ILLUSTRATION the browser merging text -->

Even if we wrote the “by” and “Hiswe” on two lines with white-spaces before, *the output will be rendered on a single line.*

We have seen in {% post_link 04-html-basic-part-1 part one %} that the browser merges multiple spaces and ignore carriage return.  
This come handy here! This allow us to have a proper indentation in our code without worrying about the browser rendering 😇

But for a better understanding, we can write our code in that way:

{% codeblock lang:html %}
<address>by <a href="https://github.com/hiswe/">Hiswe</a></address>
{% endcodeblock %} 

In the end whatever way you're choosing this is only a matter of personal appreciation, the browser will output the content in the same way.

#### More semantic on the link

<!-- ILLUSTRATION an author with many many books smoking a pipe with heart-shaped smoke -->

Semantic is important, because:

- It will make your HTML *code more readable for you*
- It will allow a *better [screen reading](https://en.wikipedia.org/wiki/Screen_reading) experience* for disabled people. 
  In short: the computer will read the text and describe the context of this text. 
  As an example if you have an heading of first level `<h1>`, the screen reader will say:
  <q>heading of first level</q> and then read the content
  
We wrote a link, but what we really want to achieve, is describing an author.  
We already have the `<address>` element but we can add more on the link.

If we take a deeper look at this [HTML element documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), we can see that there is a `rel` attribute:

{% blockquote Mozilla Developer Network https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel rel attribute description %}
**rel**
Specifies the relationship of the target object to the link object.
{% endblockquote %}    

This documentation provides us a link of [the possible values of this rel attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types) and it says that *we can have an author value!*.  

Here's a lookup of our update:

{% codeblock lang:html %}
<address>by <a href="https://github.com/hiswe/" rel="author">Hiswe</a></address>
{% endcodeblock %} 

### Add some text formatting: `<br/>`, `<em>` & `<strong>`

<!-- ILLUSTRATION a dinosaur shooting lasers with sfx PEW PEW -->

Like a lazy cow 🐮, I will just give you the whole document, and we will go on any of the differences.

{% include_code lang:html 06-html-basic-part-3/01-full-story.html %}

#### Semantics of…

<!-- ILLUSTRATION HTML showing that it can do what word does -->

All those elements helps you achieving some basic text formating:

- `<br />` stands for *break*. Just a regular carriage return *__⏎__*
  Like the `<img />` element, it's a self-closing HTML elements.
  Y'know a break is just a break…
- `<em />` stands for *emphasis* – rendered by default in [italic](https://en.wikipedia.org/wiki/Italic_type#Usage)
- `<strong />` obvious strong is *strong* 🧐 – rendered by default in {% link bold https://en.wikipedia.org/wiki/Emphasis_(typography) %}

And after knowing that, it's just a matter of updating your HTML file and “voila!”.  

*HTML is easy* ✌️ *__It's applying the same recipe again and again:__*

- writing the content
- choosing the most fitting HTML elements if needed
- nest and indent everything in a good way

## But Sir! We have à `â€œwolf!â€` problem! 

<!-- ILLUSTRATION a worried guy -->

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

<!-- ILLUSTRATION the browser speaking different “cute” word: Thai, English, French & Emoji  -->

#### TL;DR

- Because it's not appearing in the content of our document, this element place is in the `<head>`
- `<meta>` stands for [metadata](https://en.wikipedia.org/wiki/Metadata)
- *just always add __<meta charset="utf-8" /\>__ in every HTML document __<head\>__ you create.*


#### Understanding metadata

<!-- ILLUSTRATION a photo with some metadata -->

Metadata are everything that isn't the content but that provide context upon it.

If we take a photo as an example, metadata would be:

- where the picture have been taken
- at what time 
- by who
- with which camera
- <i>etc.</i>

This will be used by softwares for:

- grouping all the photos taken at the same place, 
- grouping them by date or time range (every photos taken in the last month) 
- <i>etc.</i>

#### More details

The root problem, is [character encoding](https://en.wikipedia.org/wiki/Character_encoding). 

In a short, computers have evolved from supporting only a subset of english characters to all characters in the world (including emoji 💩).  
But the *web* is an open platform and *try to maintain compatibility with old documents*.

*__So you have to tell your browser that you use the most modern encoding.__*

If you want to have a better understanding of this subject, I recommend you this [short video on the subject](https://youtu.be/MijmeoH9LT4)

### <html lang="en"\>

<!-- ILLUSTRATION a webpage speaking with bubble containing an english flag -->

This is to indicate in which language the HTML document is written.  
It's good for accessibility (so he can know in which language he should read the document)

As a rule of thumb: *__always provide it__*.

### A developer 🌈 thing: `<!-- -->` comments

<!-- ILLUSTRATION A developer writing on the wall -->

Your eagle accurate sight 🦅 have spotted this strange HTML element in my previous example. 

This is a *__comment__, a very important thing in the developer's toolbox.*  
It's just this:

- text that will not appear in the browser…
- …but that stay in the code for helping us

You can see that as [post-it note](https://en.wikipedia.org/wiki/Post-it_note) for you.  
You can write everything inside it, just make sure that the content is properly enclosed in `<!--`  and `-->`

### The full code example

{% include_code lang:html 06-html-basic-part-3/02-with-meta.html %}

## Wrapping up

We have seen:

- how to choose semantic HTML elements to fill our needs from a [documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- how to make links to other webpages: `<a href="">`
- some vitals information for the web-page to display in a good way with `<html lang="en">` & `<meta charset="utf-8" />`

And this is all for the basic of HTML.  
Next we will see how to make our story nicer with [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

