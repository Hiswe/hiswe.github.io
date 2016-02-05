---
layout: comparison
title: Creating vector images
tags:
- affinity deisgner
- adobe illustrator
categories:
- drawing
---

## Introduction

This will be a short tutorial about how to create simple vector drawings.

This small guide will cover 2 softwares:

- {% link Adobe Illustrator http://www.adobe.com/products/illustrator.html %} (AI – left)
- {% link Affinity Designer https://affinity.serif.com/designer/ %} (AD – right)

Talking about different softwares is I think, a good way to understand that they do the same thing: creating vectors.  
Choosing one upon another is more a matter of personal preference. 

### Prerequites

Knowing about what is a vector drawing of course :)  
I have made a small introduction {% post_link 01-vector-basics here %}

### What is it NOT about

Softwares are just tools.  
So it won't improve your drawing/design skills in any way.  
It will just allow you to express whatever you're able to do in another way.

### Keyboard shortcuts

For working right, you really need to learn some basic keyboard shortcuts.  
This will greatly improve your experience with the software and make things more natural.  

Of course you don't have to remeber everything :) Just the most common ones.

#### Mac/PC

In Illustrator (as AD is mac only) when I will talk about the key `CMD` you should replace it with `CTRL`

#### doing/undoing

Like in every software you can achieve those actions by pressing:

**undo**: `CMD` + `Z`  
**redo**: `SHIFT` + `CMD` + `Z`

## Interface

The folks from Affinity organized AD in almost the same way as AI.  
There is some differences of course, but globally things are the same.

{% split Illustrator | Affinity Designer %} 
{% asset_img zoning-illustrator.svg fig.01a Illustrator zoning %} 
---
{% asset_img zoning-designer.svg fig.01b Designer zoning %} 
{% endsplit %}

### Context properties…

…will change with the tools you use or the selection you have.  
It will provide the most common options you should need a this moment

### Toolbar

It's the same things as real tools, they are needed to do stuff.  
**One very important thing is** every tools has multiple powers.  
Those are unlocked by pressing additional keys (`CMD`  `ALT` `SHIFT`) while using them.

Of course, using a tool, is clicking on it to select it.

#### More tools!

When you see an arrow in the tool square, It means that by making a *long press on this tool*, you can *access to other tools*!

**MORE TOOLS IMAGE**

### Artboard(s)

This will be your main working zone. Details will be provided later on.

### Panels

A lot of stuff are placed here.  
It can be colors, layers and so on.  
Every panel can be grouped with `tabs`.

**TABS IMAGE**

And every panel as some options:

**OPTION ICON**

You can check it every time you want. Be curious :P

### Informations / Keyboards modificators help

{% split Illustrator | Affinity Designer %} 
- At the bottom, there is differents informations about the zoom level, which artboard are you working on and the current tool used.  
- When you use *modificator keys* (see [Toolbar](/#toolbar)) the current tool will change to reflect what you are going to do
---
- Every time a small description of what and how you can achieve with the tool you have selected.  
- They also list all the *modificator keys* you can use, and how they will change the behaviour of the current tool.
{% endsplit %}

## Moving

Working is always getting on different parts of your artwork.  
With a virtual paper, you have new ways to navigate inside your design.

### Hand & magnifying glass

{% split Illustrator | Affinity Designer %} 
{% asset_img move-zoom-illustrator.gif fig.01a Illustrator moving and zooming tool %} 
---
{% asset_img move-zoom-designer.gif fig.01b Designer moving and zooming tool %}
{% endsplit %}   

**move:** this is the *hand tool*. It will allow you to span around the working zone  
This by doing `click & drag`

**zoom:** this is the *magnifying glass tool*. It will allow you to be closer or farther of your design.  
`ALT` to dezoom.


### the better way

whatever tool you have selected those shortcusts works:

**move:** `SPACE` + click & drag  
**zoom/dezoom** `CMD` + `+` / `CMD` + `-`

## Artboard

Those are your working area.
It's like *custom sized sheets of paper* and you can have as many as you want.

### Exporting

Because vector drawing drawings are computed, you can generate a lot of different files type with those, including JPG (pixel), PDF and SVG (on of the most interoperable vector format)

Artboards helps you by cropping everything that's outside their boundaries.

## Creating shapes

We will cover here only one tool to create *custom shapes*.  The *pen tool*
*Predefined shapes* (like rectangles, ellipse and so on) usage is t think obvious.

There is of course other way to create shapes, but focusing on the *pen tool* is a good to way to know the core of making vector shapes.

### Making the shape

Select the `pen tool`

{% split Illustrator | Affinity Designer %} 
{% asset_img pen-tool-illustrator.gif fig.01a Illustrator pen tool %} 
---
{% asset_img pen-tool-designer.gif fig.01b Designer pen tool %} 
{% endsplit %}   


Then click on your artboard.  
Each click will make another point.  
If you `click & drag`, then you will create a point with handlers.

{% video pen-tool.m4v %}

To **close a path** click on the first point you have created (like in the above example).

### Editing the shape

You may to edit your object in 2 ways:

- move, rotate or scale the *whole object*
- edit the shape in itself

And there is 2 differents tools to accomplish this:

{% split Illustrator | Affinity Designer %} 
{% asset_img arrows-illustrator.gif fig.01a Illustrator pen tool %}   
*Black arrow*: named **selection tool**  
*White arrow*: named **direct selection tool**
---
{% asset_img arrows-designer.gif fig.01b Designer pen tool %} 
*Black arrow*: named **move tool**  
*White arrow*: named **node tool**
{% endsplit %}  

#### The black arrow 

will allow you to *select a whole path*.  
When a path is selected, you have a selection box around your object.  

{% video black-arrow-tool.m4v %}

- *moving:* `click & drag` from **inside** the shape
  - multiple can be made by pressing `SHIFT` and click on the shapes you want
- *rotating:*  `click & drag` from a **little further** from a corner. **the icon should change appreance**
- *resizing:*  `click & drag` from any point of selection box
- *constraint:* each transforms can be constrains (move on determined angles, scales proportionally…) by pushing `SHIFT` **while dragging**

#### The white arrow 

will allow you to *select a point* in a path.  
And also to modify the *handlers of a point* (if any).

{% video white-arrow-tool.m4v %}

You can move many points by selecting them with `SHIFT`.

There is some difference in behaviour in AD an AD: 

{% split In Illustrator | In Affinity Designer %} 
…selecting a shape with the *white arrow* will select all the points  
So be aware of your selection ^^
---
…the *white arrow* allow also to modifiy a `stroke`.   
Simply `Click & drag` on a stroke to reshape it.
{% endsplit %}  

#### pen tool (the return)

The *pen tool* has also abilities of editing a shape thanks to the *modificator keys*  
AD & AI treats it differently:

{% split In Illustrator | In Affinity Designer %} 
- **Adding a point** `click` on a path
- **Moving a point** `CMD` for getting in *white arrow mode* (`SHIFT` for multiple selection)
- **Removing a point** `click` on a point
- **Adding handlers to a point** `ALT` + `click & drag` on a point
- **Removing handlers of a point** `ALT` + `click` on a point
- **Breaking handlers** with selected point `ALT` + `click & drag` on an handler
---
- **Adding a point** `CMD` + `click` **on a stroke** to add a point
- **Moving a point** `click  & drag` **on a point** (`SHIFT` for multiple selection)
- **Removing a point** select points by `click` then press `DEL`
- **Adding handlers to a point** `click & drag` on a point (have to be on `Mode: pen` in the *context bar*)
- **Removing handlers of a point** selecting handlers and in the *context bar* click on `convert -> the type you want`
- **Breaking handlers** while `dragging an handler` click on `ALT`
- **Reshaping a stroke** `click & drag` on a stroke
{% endsplit %}  


## Styling shapes

fill & border

## About layers

you see all the objects you have
you can lock a layer by clicking on the checkbox next to the eye

{% asset_img fill-and-stroke.png %}
