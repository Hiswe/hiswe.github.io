---
title: Vectorize simple drawings images
description: Learn how vectorize a sketch
comments: false
tags:
  - affinity designer
  - vector
  - beginner
categories:
  - drawing
---

## Introduction

This will simply show you a little step-by-step to transform a sketch into a vector image!

Even if the example will use {% link Affinity Designer https://affinity.serif.com/designer/ %}, the process could be applied to any vector software!

<!-- more -->

## Before we begin…

If you don't know anything about vector creation, you should read those two articles:

- {% post_link 01-vector-basics %}:  explain what is a `vector` drawing 
- {% post_link 02-vector-creation-basics %}: and some basic vector software usage

And if you're ready, just continue the reading thingy 🤓 

## Drawing the shapes

The following image will be our starting point:

{% caption Meow %}
{% asset_img source.png 450 450 "A hand drawn tiny cat 'A hand drawn tiny cat'" %}
{% endcaption %}

### Shape thinking

To be efficient (aka. lazy), you need to **think about shapes** (that's all what vector illustration is about).  

And we can use the specificity of shapes:

- they can be  **closed**:
  this will be good for the body, the tail, the nose & the belly
- the can be **open**:
  this will be for everything else, including the legs.

### Comfortable line style

To keep easy the tracing part we will use a basic style: 

- pick a **stroke color**: I usually go with a pink #ff0078 to contrast with the line art 
- a **stroke size**: usually a little thinner than the sketch's pen
- **remove any fill**: so we won't cover any part of our sketch

{% caption The appearance should look like this %}
{% asset_img base-style-appearance.png 326 96 "base style with stroke and no fill 'base style with stroke and no fill'" %}
{% endcaption %}

### Drawing time

And now you can draw with the **pen tool**.

- keep the number of points as low as possible. It will be easier to edit afterwards.
- don't try to be too precise because…
- …you will go over your path with the **white arrow** to adjust them if necessary

### Edit with the Node Tool (white arrow)

It's very easy to use the pen tool to make some shapes.  
You can try to be as accurate as you want in the first attempt or, you can be quick & dirty.  
Then you can refine with the white arrow tool (aka. Node Tool).

{% video path-editing.mp4 %}

With the Node tool you can:

- convert any point to sharp/smooth (inside the top context bar).
  I often use that to “reset” a point if I've made some edit that I don't like.
- adjust all handlers (keep `alt` pressed if you want to break the handler)
- add (or remove) some points

And then:

{% caption I'm traced %}
{% asset_img lineart-big.svg 900 450 "A hand drawn tiny cat with vector lines 'A hand drawn tiny cat with vector lines'" %}
{% endcaption %}

TADDAAAA! ✨

### Straight to curved path

One thing that I really like, is that Affinity make it easy to convert straight path to curves.

In order to do that you will:

- activate the `white-arrow` (the shortcut is the `a` key)
- select your path
- go hover your straigth section
- drag & drop when your satisfied.

{% video white-arrow-curve-path.mp4 %}

## Ordering shapes & coloring

While tracing without fill, it's hard to notice which shape is above the other.
By adding some basic colors, you will see where the overlaps are.

{% caption Ow noes! Me missing things! %}
{% asset_img basic-color.svg 450 450 "the vector drawing with some parts missing 'the vector drawing with some parts missing'" %}
{% endcaption %}

### Layer panel

All ordering can be done inside _the layer panel_ (on the right).
You will have to drag & drop to re-organize.

{% video ordering-grouping.mp4 %}

In the video you can notice may things. 

You can **rename things by double clicking on them.**  
When you drag, there is **2 positions of the drop-zone**:

1. takes **all the width: _this is moving_**
2. **begin after a path preview: _this nesting_**

More on this on the next Section 🔜

The end result could be something like that:

{% caption A very well organized layer panel 🌈 %}
{% asset_img layer-panel.png 330 300 "a well organized layer panel 'a well organized layer panel'" %}
{% endcaption %}

### Groups & Path

If you look closely in the layer panel you will see that, next to the path names, there is between parenthesis more information.

It's the **type of thing**

And so you see that you can put a path inside:

- another **path**
- or a **group**

**This can be done when dragging if the dropzone begin after the preview.**

**_If a path is inside another one it will be cut to fit his parent_**.
Grouping is just to be well organized, and move things together with ease. 

And so with with all this mighty knowledge we can:

- group all the part of the face
- put the the belly inside the body, to make sure it doesn't spill out outside
- and so on!

{% caption Flat but OK! %}
{% asset_img grouping-reordering.svg 450 450 "A flat colored decent cat 'A flat colored decent cat'" %}
{% endcaption %}

### “X-Ray” outline mode

Sometimes you might feel overwhelm by the paths, and just loose the sight of them! 👀  
It's where the outline view mode can spark you some joy.

This will help figure out if you're missing some path…  
…and will help you select anything easily!

{% caption Outline mode with cmd + Y %}
{% asset_img outline-mode-toggle.png 435 204 "the menu to get the outline mode 'the menu to get the outline mode'" %}
{% endcaption %}

Learning the shortcut (`cmd + Y`) will help you going back and forth those 2 view modes.

{% caption The cat in outline: Ugly but useful %}
{% asset_img outline-view.png 379 379 "the cat in outline view 'the cat in outline view'" %}
{% endcaption %}

## Refining

And now if you want, you can add stuff:  

- keep your path in order
- **to make some easy inner shadows, create path inside other paths!**
  you even have a shortcut in top-right to place your next path inside another!
  {% asset_img insert-inside.png 171 68 "Insert inside shortcut 'Insert inside shortcut'" %}

And so this can be your final result 😽

{% caption The Mighty Meow %}
{% asset_img color-tweaking.svg 450 450 "A refined colored cat 'A refined colored cat'" %}
{% endcaption %}

## Wrapping up
