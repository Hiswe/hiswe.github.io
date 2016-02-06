---
title: Vector basics
date: 2016-01-30 18:51:23
comments: false
tags:
- vector
- beginner
categories:
- drawing
---
## Introduction

### vector vs pixels

Pixel images are composed of a grid of colored square (fig.01)

{% asset_img pixel-example.png a pixel image and a zoom on it %} 

Vector are defined by shapes that are rendered by the computer (fig.02) 

{% asset_img vector-example.jpg a vector image and a zoom on it %} 

See [wikipedia](https://en.wikipedia.org/wiki/Vector_graphics) for more details

### why choose vector?

Vector are getting you a very clean render. Also it's easily editable.  
For some works like:

- Logo design
- Webdesign
- even illustrations

that can be great advantages.

<!-- more -->

## what is…

### …a shape?

- it's a whole composed of `many point`
- it can be left open or close
- each points will be linked by a `stroke`

{% asset_img shape-basic.svg an open and close path %} 

- path have a begin and an end (the red point)


### …a stroke? a point? 

- strokes are drawn automatically by the computer
- a stroke link two consecutives points together

{% asset_img point-basic.svg different states of points %} 

- points can have 0, 1 or 2 `handlers`.
- on the left side of fig.04, there is a shape where all points doensn't have handlers
- on the right side, the points are at the same place, but they had handlers attached to them

### …handlers?

- `handlers` are what make your path curvy (instead of straight)
- both handler can be :
	- *aligned* (fig.04 point A)
	- *breaked* (fig.04 point B)
	- *alone* (fig.04 point C)
- and can be any sized

## The mystery of strokes

As said before, strokes are determine by the 2 points that are on its end.

- a stroke will always take the shortest path to link 2 points
- handler are modificators of this behaviour 
- They “attract” the stroke (like some kind of “gravity force”)

{% asset_img handler-basic.svg handler explanation %} 

- So without handlers: no deviations
- with handlers: deviations
- the bigger the handler is, the more powerfull the deviation will be

## Styling

{% asset_img shape-style.svg different path %} 

- it accepts a `stroke` and and `fill` that can be styled differently (**fig.06 left)
- if the path is **open** the fill **only** will join the ends. (**fig.06 middle)
- shapes are always piled up (**fig.06 right)

## Softwares

Here is a short list of softwares you can use for editing vector graphics:

- [Affinity designer](https://affinity.serif.com/designer/)
- [Adobe Illustrator](http://www.adobe.com/products/illustrator.html)
- [Sketch](http://www.sketchapp.com/)
- [Inkscape](http://www.inkscape.org/)
- …

And many more of course :)

