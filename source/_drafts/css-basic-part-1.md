---
title: css basic (part 1)
cover: cover.png
comments: false
description:
tags:
  - beginner
  - html
categories:
  - web

---

## Introduction

As seen in {% post_link 06-html-basic-part-3 %} the HTML file is our web-page content.  
But right now it looks pretty ugly 🙁.

So now it's time to make this a little bit more beautiful 💄.

<!-- more -->

Before reading this, make sure you have some basic knowledge of HTML (see {% post_link 04-html-basic-part-1 previous posts %} )

## What's CSS?

<!-- an image of a drawing of a rainbow waterfall -->

[CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) stands for:

- **C**ascading
- **S**tyle
- **S**heets

It's a language that lets you specify how your browser will display the HTML content.

Each word has a very specific meaning that will be explained on the following posts.
But right now we will focus on the "style" part.

## Style

<!-- a fashion elements -->

So we've seen how to use <a href="{% post_path 05-html-basic-part-2 %}#The-anatomy-of-attributes">attributes</a> in HTML elements.

And guess what? **there is a style attribute** that allows us to style an HTML element!

So let use that to make our page nicer.
We want to:

- change all the font, but the title, to a [sans-serif one](https://en.wikipedia.org/wiki/Sans-serif)
- color our title
- color and make bigger the author's name so it can pop out more
- add a border to our image so it can stands out
- make the `“wolf”` shout more compelling by coloring the background and make the text bigger

This is how it looks like now…

<p data-height="550" data-theme-id="light" data-slug-hash="bjLXqv" data-default-tab="html,result" data-user="Hiswe" data-pen-title="basic-css (part-1) – original" class="codepen">See the Pen <a href="https://codepen.io/Hiswe/pen/bjLXqv/">basic-css (part-1) – original</a> by Hiswe (<a href="https://codepen.io/Hiswe">@Hiswe</a>) on <a href="https://codepen.io">CodePen</a>.</p>

… and that is looks like after!

<p data-height="550" data-theme-id="light" data-slug-hash="pZaXYV" data-default-tab="html,result" data-user="Hiswe" data-pen-title="basic-css (part-1) – style attribute" class="codepen">See the Pen <a href="https://codepen.io/Hiswe/pen/pZaXYV/">basic-css (part-1) – style attribute</a> by Hiswe (<a href="https://codepen.io/Hiswe">@Hiswe</a>) on <a href="https://codepen.io">CodePen</a>.</p>

<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### A note on Codepen

Previously we used <a href="{% post_path 04-html-basic-part-1 %}#What-are-the-better-alternatives-and-they-are-free">text editor</a> to edit code with a and this should be the way to go for your own code.

But web alternatives exists, mostly for prototyping and code sharing.

[Codepen](https://codepen.io/) provides those functionalities and makes me able to show you the code and the result side by side 🔡🏙
It will take care for us of setting the right `<html><head /><body /></html>` thing.

### Anatomy of a CSS style rule

<!-- x-ray of a paint bucket -->

The CSS part is the text contained in the style attribute value: `style="HERE ARE MY STYLE"`.
And this what we're going to analyze here.
