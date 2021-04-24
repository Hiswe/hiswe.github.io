---
title: Creating vector images
lang: en
description: Learn how to make a vector image with Affinity Designer or Adobe Illustrator
tags:
  - affinity designer
  - adobe illustrator
  - vector
  - beginner
comments: false
categories:
  - drawing
date: 2016-02-06 16:14:44
---

## Introduction

This will be a short tutorial about how to create simple vector drawings.

This small guide will cover 2 softwares:

- {% link Adobe Illustrator http://www.adobe.com/products/illustrator.html %} (AI – left)
- {% link Affinity Designer https://affinity.serif.com/designer/ %} (AD – right)

Talking about different softwares is, I think, a good way to understand that they do the same thing: creating vectors.  
Choosing one upon another is more a matter of personal preference. 

<!-- more -->

### Prerequisites

Knowing about what is a vector drawing of course :)  
I have made a small introduction {% post_link en/01-vector-basics here %}

### What is it NOT about

Softwares are just tools.  
So it won't improve your drawing/design skills in any way.  
It will just allow you to express whatever you're able to do in another way.

### Keyboard shortcuts

For working right, you really need to learn some basic keyboard shortcuts.  
This will greatly improve your experience with the software and make things more natural.  

Of course you don't have to remember everything :) Just the most common ones.

#### Mac/PC

In Illustrator (as AD is mac only) when I will talk about the key `CMD` you should replace it with `CTRL`

#### doing/undoing

Like in every software you can achieve those actions by pressing:

*undo*: `CMD` + `Z`  
*redo*: `SHIFT` + `CMD` + `Z`

## Interface

The folks from Affinity organized AD in almost the same way as AI.  
There is some differences of course, but globally things are the same.

{% split Illustrator | Affinity Designer %} 
{% asset_img zoning-illustrator.svg Illustrator zoning %} 
---
{% asset_img zoning-designer.svg Designer zoning %} 
{% endsplit %}

### Context properties…

…will change with the tools you use or the selection you have.  
It will provide the most common options you should need a this moment

### Toolbar

It's the same things as real tools, they are needed to do stuff.  
*One very important thing is* every tools has multiple powers.  
Those are unlocked by pressing additional keys (`CMD`  `ALT` `SHIFT`) while using them.

Of course, using a tool, is clicking on it to select it.

#### More tools!

When you see an arrow in the tool square, It means that by making a __long press on this tool__, you can __access other tools!__

<!-- **MORE TOOLS IMAGE** -->

### Artboard(s)

This will be your main working zone. Details will be provided later on.

### Panels

A lot of stuff are placed here.  
It can be colors, layers and so on.  
Every panel can be grouped with `tabs`.

<!-- **TABS IMAGE** -->

And every panel as some options:

<!-- **OPTION ICON** -->

You can check it every time you want. Be curious :P

### Information / Keyboards modifications help

{% split Illustrator | Affinity Designer %} 
- At the bottom, there is different information about the zoom level, which artboard are you working on and the current tool used.  
- When you use __modification keys__ (see [Toolbar](/#toolbar)) the current tool will change to reflect what you are going to do
---
- Every time a small description of what and how you can achieve with the tool you have selected.  
- They also list all the __modification keys__ you can use, and how they will change the behavior of the current tool.
{% endsplit %}

## Moving

Working is always getting on different parts of your artwork.  
With a virtual paper, you have new ways to navigate inside your design.

### Hand & magnifying glass

{% split Illustrator | Affinity Designer %} 
{% asset_img move-zoom-illustrator.gif Illustrator moving and zooming tool %} 
---
{% asset_img move-zoom-designer.gif Designer moving and zooming tool %}
{% endsplit %}   

*move:* this is the __hand tool__. It will allow you to span around the working zone  
This by doing `click & drag`

*zoom:* this is the __magnifying glass tool__. It will allow you to be closer or farther of your design.  
`ALT` to unzoom.


### the better way

whatever tool you have selected those shortcuts works:

*move:* `SPACE` + `click & drag`  
*zoom/unzoom* `CMD` + `+` / `CMD` + `-`

## Artboard

Those are your working area.
It's like __custom sized sheets of paper__ and you can have as many as you want.

I won't cover it here, and stick to the default preset: 1 artboard.

## Creating shapes

We will cover here only one tool to create __custom shapes__:  the __pen tool.__  
__Predefined shapes__ (like rectangles, ellipse and so on) usage is I think obvious.

There is of course other way to create shapes, but focusing on the __pen tool__ is a good to way to know the core of making vector shapes.

### Making the shape

- Select the `pen tool`

{% split Illustrator | Affinity Designer %} 
{% asset_img pen-tool-illustrator.gif Illustrator pen tool %} 
---
{% asset_img pen-tool-designer.gif Designer pen tool %} 
{% endsplit %}   


- Then click on your artboard.  
- Each click will make another point.  
- If you `click & drag`, then you will create a point with handlers.

{% video pen-tool.m4v %}

To *close a path* click on the first point you have created (like in the above example).

### Editing the shape

You may to edit your object in 2 ways:

- move, rotate or scale the __whole object__
- edit the shape in itself

And there is 2 different tools to accomplish this:

{% split Illustrator | Affinity Designer %} 
{% asset_img arrows-illustrator.gif Illustrator pen tool %}   
__Black arrow__: named *selection tool*  
__White arrow__: named *direct selection tool*
---
{% asset_img arrows-designer.gif Designer pen tool %} 
__Black arrow__: named *move tool*  
__White arrow__: named *node tool*
{% endsplit %}  

#### The black arrow 

will allow you to __select a whole path__.  
When a path is selected, you have a selection box around your object.  

{% video black-arrow-tool.m4v %}

- __moving:__ `click & drag` from *inside* the shape
  - multiple can be made by pressing `SHIFT` and click on the shapes you want
- __rotating:__  `click & drag` from a *little further* from a corner. *the icon should change appearance*
- __resizing:__  `click & drag` from any point of selection box
- __constraint:__ each transforms can be constrains (move on determined angles, scales proportionally…) by pushing `SHIFT` *while dragging*

#### The white arrow 

will allow you to __select a point__ in a path.  
And also to modify the __handlers of a point__ (if any).

{% video white-arrow-tool.m4v %}

You can move many points by selecting them with `SHIFT`.

There is some difference in behavior in AD an AD: 

{% split In Illustrator | In Affinity Designer %} 
…selecting a shape with the __white arrow__ will select all the points  
So __be aware of your selection__.
---
…the __white arrow__ allow also to modify a `stroke`.   
Simply `Click & drag` on a stroke to reshape it.
{% endsplit %}  

#### pen tool (the return)

The __pen tool__ has also abilities of editing a shape thanks to the __modification keys__  
AD & AI treats it differently:

{% split In Illustrator | In Affinity Designer %} 
__Adding a point:__   
`click` on a path
__Moving a point:__
`CMD` for getting in *white arrow mode* (`SHIFT` for multiple selection)
__Removing a point:__ 
`click` on a point
__Adding handlers to a point:__
`ALT` + `click & drag` on a point
__Removing handlers of a point:__ 
`ALT` + `click` on a point
__Breaking handlers__ 
with selected point `ALT` + `click & drag` on an handler
---
__Adding a point:__ 
`CMD` + `click` *on a stroke* to add a point
__Moving a point:__ 
`click  & drag` *on a point* (`SHIFT` for multiple selection)
__Removing a point:__ 
select points by `click` then press `DEL`
__Adding handlers to a point:__ 
`click & drag` on a point (have to be on `Mode: pen` in the __context bar__)
__Removing handlers of a point:__ 
selecting handlers and in the __context bar__ click on `convert -> the type you want`
__Breaking handlers:__ 
while `dragging an handler` click on `ALT`
__Reshaping a stroke:__ 
`click & drag` on a stroke
{% endsplit %}  

## Styling shapes

### Colors

__After having a shape selected__, fill & border can be styled in the color panel:

{% split Illustrator | Affinity Designer %} 
{% asset_img color-panel-illustrator.png Illustrator pen tool %}   
---
{% asset_img color-panel-designer.png Designer pen tool %} 
{% endsplit %}  

- __What you are styling appears above the other one__.  
- `click` to select between border & fill.  
- `double click` to open a more detailed color panel.

{% video fill-stroke-color.m4v %}

### Stroke

You can also __modify the size of the stroke__ by tweaking on the __context properties__.

{% split In Illustrator | In Affinity Designer %} 
All the stroke properties are put next to each another.
You can also access a stroke panel by clicking on the *stroke link*
---
by clicking on the __stroke line__, a panel will open with all the options you need
{% endsplit %}  

## Exporting an artwork

Because vector drawing drawings are computed, you can generate a lot of different files type with those, including JPG (pixel), PDF and SVG (one of the most interoperable vector format)

__Artboards helps you by cropping everything that's outside their boundaries.__

{% split In Illustrator | In Affinity Designer %} 
- __In the menu__: File -> Export
- Choose the format (JPEG is good for showing to anybody)
- __check the Use Artboards checkbox__
- `click` export
---
- __In the menu__: File -> Export
- Choose the format
- `click` export
{% endsplit %}  

## Conclusion

There is of course more to see like:

- layers
- Combining shapes
- effects
- …

Affinity provides a lot of great tutorials [here](https://affinity.serif.com/tutorials/designer/)

