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

in {% post_link 04-html-basic-part-1 the first %} and {% post_link 05-html-basic-part-2 the second part %} we've seen the basis of how to write an HTML document.

Now we're going to play with that and expand our HTML document.  
This will help us to learn more about HTML and how we can make it [accessible](https://en.wikipedia.org/wiki/Web_accessibility) for people with disabilities easily.

<!-- more -->

## Enhance with more HTML elements

### Add the author – <address\> element

<!-- ILLUSTRATION a pretentious author -->

Why not showing who wrote this amazing piece of art?

If we look which [HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) seems the most appropriate, we can see that `<address>` seems the right one.

{% blockquote Mozilla Developer Network https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address address element description %}
The HTML <address\> element indicates that the enclosed HTML provides contact information for a person or people, or for an organization
{% endblockquote %}

So we can add it right after our title:

{% codeblock lang:html %}
<h1>The Boy Who Cried Wolf</h1>
<address>by Hiswe</address>
{% endcodeblock %} 

Which seems to be good enough.

### Add a link to the author page – <a\> element

<!-- ILLUSTRATION a backpack guy-->

But we can do more!  

*The web is all about [links](https://en.wikipedia.org/wiki/Hyperlink)* and getting from one place to another!

So why not include a link to the author website were all his glorious contents live?

{% codeblock lang:html %}
<address>
  by    
  <a href="https://github.com/hiswe/">Hiswe</a>
</address>
{% endcodeblock %} 

As seen in {% post_link 05-html-basic-part-2 part 2 %} the `parent` (address here) can have many `children`.  
And *you can mix in any order text child with HTML element child* 

#### Semantic of <a\> and href

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

In the end whatever way you're choosing this is only a matter of appreciation, the browser will output it in the same way.

#### More semantic on the link

<!-- ILLUSTRATION an author with many many books smoking a pipe with heart-shaped smoke -->

Semantic is important, because:

- It will make your HTML code more readable for you
- It will allow a better [screen reading](https://en.wikipedia.org/wiki/Screen_reading) experience for disabled people. 
  In short: the computer will read the text and describe the context of this text. 
  As an example if you have an heading of first level `<h1>`, the screen-reader will say:
  <q>heading of first level</q> and then read the content
  
We wrote a link, but what we really want to achieve, is describing an author.  
We have already an `<address>` tag but we can add more on the link.

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

### Add some text formatting – <br\>, <em\> & <strong\>

<!-- ILLUSTRATION a dinosaur shooting lasers with sfx PIOU PIOU -->

Like a lazy cow 🐮, I will just give you the whole documents, And we will go on amy of the differences.

{% include_code lang:html 06-html-basic-part-3/01-full-story.html %}

#### Semantics of…

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

## But Sir! We have à *â€œwolf!â€* problem! 

Your eyesight is as accurate as an eagle 🦅

We do have a problem but the good news is that it can be fixed very easily.

We have to modify our document like this:

{% codeblock lang:html %}
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Wolf Story</title>
  <!-- the rest of our content… -->
{% endcodeblock%}

### Character encoding – <meta charset /\>

#### TL;DR

*just always add __<meta charset="utf-8" /\>__ in every HTML document __<head\>__ you create.*

#### More details

The root problem, is [character encoding](https://en.wikipedia.org/wiki/Character_encoding). 

In a short, computers have evolved from supporting only a subset of english characters to all characters in the world (including emojis 💩).  
But the *web* is an open platform and *try to maintain compatibility with old documents*.

So you have to tell your browser, that you use the most modern encoding.

If you want to have a better understanding of this, I recommend you short [brief video on the subject](https://youtu.be/MijmeoH9LT4)

### <html lang="en"\>

This is to indicate in which language the HTML document is written.  
It's good for: 

- accessibility
- browser rendering: If a language like <i>arabic</i> or <i>hebrew</i> is provided, the text will be rendereg going from *right to left* instead of the classic *left to right* 


## Developpers things

- comments
