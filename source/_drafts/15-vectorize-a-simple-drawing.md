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

## Start: drawing the shapes

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

And this is the image without any image

{% caption I'm traced, and I lost my sketch! %}
{% asset_img lineart-2.svg 450 450 "A cat composed only of lines 'A cat composed only of lines'" %}
{% endcaption %}

That's _33%_ of the job done!

## Middle: Ordering shapes & coloring

While tracing without fill, it's hard to notice which shape is upon the other.
By adding some basic colors, you will see where the overlaps are.

{% caption Ow noes! Me missing things! %}
{% asset_img basic-color.svg 450 450 "the vector drawing with some parts missing 'the vector drawing with some parts missing'" %}
{% endcaption %}

To ease you ordering there is some tricks:

**You can switch to a _outline view mode_**

This will help figure out if you're missing some path…  
…and will help you select anything easily!

{% caption Outline mode with cmd + Y %}
{% asset_img outline-mode-toggle.png 435 204 "the menu to get the outline mode 'the menu to get the outline mode'" %}
{% endcaption %}

Learning the shortcut (`cmd + Y`) will help you going back and forth those 2 view modes.

{% caption The cat in outline: Ugly but useful %}
{% asset_img outline-view.png 379 379 "the cat in outline view 'the cat in outline view'" %}
{% endcaption %}

**Ordering will be _in the layer panel_**

{% caption A very well organized layer panel 🌈 %}
{% asset_img layer-panel.png 330 300 "a well organized layer panel 'a well organized layer panel'" %}
{% endcaption %}

{% caption Flat but OK! %}
{% asset_img grouping-reordering.svg 450 450 "A flat colored decent cat 'A flat colored decent cat'" %}
{% endcaption %}

## End: Refining

{% caption The Mighty Meow %}
{% asset_img color-tweaking.svg 450 450 "A refined colored cat 'A refined colored cat'" %}
{% endcaption %}
