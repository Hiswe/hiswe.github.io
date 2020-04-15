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

## Before we begin

If you don't know anything about vector creation, you should read those two articles:

- {% post_link 01-vector-basics %}: explain what is a `vector` drawing
- {% post_link 02-vector-creation-basics %}: and some basic vector software usage

## Drawing the shapes

This image will be our starting point:

{% caption Meow %}
{% asset_img source.png 450 450 "A hand drawn tiny cat 'A hand drawn tiny cat'" %}
{% endcaption %}

To be efficient (aka. lazy), you need to **think about shapes** (that's all what vector illustration is about).  

And we can use the specificity of shapes:

- they can be  **closed**:
  this will be good for the body, the tail, the nose & the belly
- the can be **open**:
  this will be for everything else, including the legs.

So now you just to:

- pick a **stroke color** (I like a kind of pink like this #ff0078) 
- a **stroke size** (usually a little thinner than the sketch's pen)
- remove any fill (so we won't cover any part of our sketch)

And you can draw with the **pen tool**.

- keep the number of points as low as possible (easier to edit afterwards)
- don't try to be too precise because…
- …you will go over your path with the **white arrow** to adjust them if necessary

{% caption I'm traced %}
{% asset_img lineart.svg 450 450 "A hand drawn tiny cat with vector lines 'A hand drawn tiny cat with vector lines'" %}
{% endcaption %}

And this is the image without any background sketch:

{% caption I'm traced, and I lost my sketch! %}
{% asset_img lineart-2.svg 450 450 "A cat composed only of lines 'A cat composed only of lines'" %}
{% endcaption %}

That's _33%_ of the job done!

## Ordering shapes & coloring

While tracing without fill, it's hard to notice which shape is above the other.
By adding some basic colors, you will see where the overlaps are.

{% caption Ow noes! Me missing things! %}
{% asset_img basic-color.svg 450 450 "the vector drawing with some parts missing 'the vector drawing with some parts missing'" %}
{% endcaption %}

### Layer panel

All ordering can be done inside _the layer panel_ (on the right).
It's just a matter of dragging & dropping…

{% caption A very well organized layer panel 🌈 %}
{% asset_img layer-panel.png 330 300 "a well organized layer panel 'a well organized layer panel'" %}
{% endcaption %}

…and it can be a little bit boring.
So shortcuts to the rescue! (being lazy is learning shortcuts…)

{% caption Order fast 🏃‍♀️%}
{% asset_img ordering-shortcuts.png 436 281 "The arrange menu 'The arrange menu'" %}
{% endcaption %}

Just use and abuse `cmd + [` and `cmd + ]`.

### Groups & Path

If you look closely in the layer panel you will see that, next to the path names, there is between parenthesis more information. (And yeah by the way you can rename things by double clicking on them)

It's the **type of thing**

And so you see that you can put a path inside:

- another **path**
- or a **group**

The difference between the 2 is that  _everything inside a path will be cut to fit this parent._  
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

And now it's just a matter of adding stuff.  

{% caption The Mighty Meow %}
{% asset_img color-tweaking.svg 450 450 "A refined colored cat 'A refined colored cat'" %}
{% endcaption %}

## Wrapping up
