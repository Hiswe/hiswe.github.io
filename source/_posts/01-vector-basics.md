---
title: Vector basics
description: Learn what is a vector image and some basic concepts evolving around it
date: 2016-01-30 18:51:23
tags:
- vector
- beginner
categories:
- drawing
comments: false
---
## Introduction

### vector vs pixels

Pixel images are composed of a grid of colored square (fig.01)

{% caption when zoomed, we see squares %}
{% asset_img pixel-example.png a pixel image and a zoom on it %}
{% endcaption %}

Vector are defined by shapes that are rendered by the computer (fig.02) 

{% caption vectors can be zoomed without quality loss %}
{% asset_img vector-example.jpg a vector image and a zoom on it %} 
{% endcaption %}

See [wikipedia](https://en.wikipedia.org/wiki/Vector_graphics) for more details

### why choose vector?

Vector are getting you a very clean render. Also it's easily editable.  
For some works like:

- Logo design
- web-design
- even illustrations

that can be great advantages.

<!-- more -->

## what is…

### …a shape?

- it's a whole composed of `many point`
- it can be left open or close
- each points will be linked by a `stroke`

{% caption an open and close path %}
{% asset_img shape-basic.svg an open and close path %} 
{% endcaption %}

- path have a begin and an end (the red point)

### …a stroke? a point? 

- strokes are drawn automatically by the computer
- a stroke link two consecutive points together

{% caption point without and with handles %}
{% asset_img point-basic.svg different states of points %} 
{% endcaption %}

- points can have 0, 1 or 2 `handlers`.
- on the left side of fig.04, there is a shape where all points doesn't have handlers
- on the right side, the points are at the same place, but they had handlers attached to them

### …handlers?

- `handlers` are what make your path curvy (instead of straight)
- both handler can be :
	- __aligned__ (fig.04 point A)
	- __broken__ (fig.04 point B)
	- __alone__ (fig.04 point C)
- and can be any sized

## The mystery of strokes

As said before, strokes are determine by the 2 points that are on its end.

- a stroke will always take the shortest path to link 2 points
- handler are modifiers of this behavior 
- They “attract” the stroke (like some kind of “gravity force”)

{% caption handler explanation %}
{% asset_img handler-basic.svg handler explanation %} 
{% endcaption %}

- So without handlers: no deviations
- with handlers: deviations
- the bigger the handler is, the more powerful the deviation will be

## Styling

{% caption different path %}
{% asset_img shape-style.svg different path %} 
{% endcaption %}

- it accepts a `stroke` and and `fill` that can be styled differently (fig.06 left)
- if the path is *open* the fill *only* will join the ends. (fig.06 middle)
- shapes are always piled up (fig.06 right)

## Softwares

Here is a short list of softwares you can use for editing vector graphics:

- [Affinity designer](https://affinity.serif.com/designer/)
- [Adobe Illustrator](http://www.adobe.com/products/illustrator.html)
- [Sketch](http://www.sketchapp.com/)
- [Inkscape](http://www.inkscape.org/) (Free and Open Source)
- …

And many more of course :)

