---
title: css basic (part 1)
lang: en
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

As seen in {% post_link en/06-html-basic-part-3 %} the HTML file is our web-page content.  
But right now it looks pretty ugly 🙁.

So now it's time to make this a little bit more beautiful 💄.

<!-- more -->

Before reading this, make sure you have some basic knowledge of HTML (see {% post_link en/04-html-basic-part-1 previous posts %} )

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

And guess what? **there is a style attribute** that allows us to style an HTML element with CSS code!

So let's use that to make our page nicer.
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

Previously we used <a href="{% post_path 04-html-basic-part-1 %}#What-are-the-better-alternatives-and-they-are-free">text editor</a> to edit code and this should be the way to go for your own code.

But web alternatives exists, mostly for prototyping and code sharing.

[Codepen](https://codepen.io/) provides those functionalities and makes me able to show you the code and the result side by side 🔡🏙
It will take care for us of setting the right `<html><head /><body /></html>` thing.

### Anatomy of a CSS style rule

<!-- x-ray of a paint bucket -->

The CSS part is the text contained in the style attribute value: `style="HERE ARE MY STYLE"`.
And that's what we're going to analyze here.  
For example let's dig into `color: DeepPink;`

We can see that it's structured in 4 parts:

[//]: # " need to suse {% link %} regular link doesn't handle well parenthesis "

- the **rule name**
- the rule name & value are **separated with a {% link colon https://en.wikipedia.org/wiki/Colon_(punctuation) %}** `:`
- the **rule value**
- after the value **you need to put a {% link semicolon https://en.wikipedia.org/wiki/Semicolon %}** `;`

**A CSS rule is always written in that way.**

### Why is that way?

Like any programming language, it's always about making the link between the human developer and the machine.

So we have:

- a **human part**: the _name_ & the _value_
- a **machine part**: the _colon_ & the _semicolon_
  - the _column_ will helps the computer differentiate between the _name_ & the _value_
  - the _semicolon_ will helps the computer differentiate among different CSS rules

Like with the HTML, your <a href="{% post_path 03-basic-web-understanding %}#The-Browser">browser</a> will do its best to read the CSS.

**_If there's a problem it will just ignore it._**

So in order for your styles to work, **It's crucial to pay attention to your colon & semicolon.**

### What those CSS rules means?

<!-- a paint bucket at school -->

If we list all the rules we have used, we have:

```css
* {
  /* the color of the text */
  color: SteelBlue;
  /* the size of the font */
  font-size: 20px;
  /* the type of font we're using */
  font-family: sans-serif;
  /* the border thickness */
  border-width: 10px;
  /* the border… color! */
  border-color: LightSkyBlue;
  /* how the border should be displayed: plain or dotted or something else */
  border-style: solid;
  /* the obvious background color */
  background-color: LightSkyBlue;
}
```

We can see that:

- a CSS rule `name` can be composed of one or multiple words
- if a CSS rule `name` is made of **multiple words** they **_MUST_ be separated by [hyphens](https://en.wikipedia.org/wiki/Hyphen-minus)**

### Why those values?

You can't put anything you want on the `values`.

**_Every CSS rules expects a certain type of CSS values._**

- for anything relating to **colors** (`color`, `border-color`, `background-color`…), you need to **provide a [color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)**
- for anything relating to **size** (`font-size`, `border-width`…), you need to **provide a [length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length)**
  <!-- https://developer.mozilla.org/en-US/docs/Web/CSS/font-family -->
- for anything relating to **size** (`font-size`, `border-width`…), you need to **provide a [length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length)**

**It's important to know that all this values can come in multiple formats.**

For example:

- a _color_ can be written as a [color name](https://www.quackit.com/css/color/charts/css_color_names_chart.cfm) (like `LightSkyBlue`) or as an [hexadecimal value](https://en.wikipedia.org/wiki/Web_colors) (like `#87CEFA`), and so on…
  <small>(don't worry about the hexadecimal thing, you don't need to learn or understand them, as it will be most of the time be provided by a [colorpicker](https://www.quackit.com/css/color/tools/css_color_picker.cfm))</small>
- a _size_ can be written in `px` (pixels), in `em` ({% link a typographic measure https://en.wikipedia.org/wiki/Em_(typography) %}) and so on…

### How we can do better?

<!-- someone writing on the black board: I won't repeat myself -->

We repeat a lot of things there…

But developer have a saying which is [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself): **don't repeat yourself.**

It's good because:

- it's less to write
- it's less error prone

## The <style> HTML element

## The <style> HTML element
