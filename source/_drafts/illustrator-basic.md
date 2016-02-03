---
layout: comparison
title: Creating vector images
tags:
categories:
- drawing
---

## Introduction

Here will be a short tutorial about how to create simple vector drawings.

This guide will cover 2 softwares:

1. Adobe Illustrator (AI – left)
2. Affinity Designer (AD – right)

## Interface

The folks from Affinity organized AD in almost the same way as AI.  
There is some differences of course, but globally things are almost the same.

- {% asset_img zoning-illustrator.svg fig.01a Illustrator zoning %} 
- {% asset_img zoning-designer.svg fig.01b Designer zoning %} 

### Context properties…

…will change with the tools you use or the selection you have.  
It will provide the most common options you should need a this moment

### Artboard(s)

This will be your main working zone.  Detailed will be provided later on.

### Panels

a lot of stuff are placed here

## Illustrator basics

### moving

- **move:** `space` + click & drag
- **zoom/dezoom** `ctrl` + `+` / `ctrl` + `-`

### doing/undoing

- **undo**: `ctrl` + `z`
- **redo**: `shift` + `ctrl` + `z`

### artboard

- Your working area. 
- That will crop everything outside on the export.

### what is a path ?

- a path is composed of `many points`
- each point van have `handlers`
- `handlers` are what make your path curvy (instead of straight)

it accepts a `stroke` and and `fill` that can be styled deifferently

you can combine **close path** with the `path finder` tool

#### tools

- **select tool**: a whole path selection (select a shape)
- **direct select tool**: select a *point*
	- you can select one or many points
	- a select point will be filled (instead of hollow) 
- **pen tool**: create (or change) a path.
- **reshape tool** (under scale tool)

**smart guides**


##### pen tool

- create point: click
- create a point with handler: click + drag
- add/modifiy handlers: `alt`
- select a point: `ctrl`

##### scissor tool (beyond rubber)

- can split a path in 2 parts


## layers

- you see all the objects you have
- you can lock a layer by clicking on the checkbox next to the eye


## making shapes

- fill & border
- pen tool (straith vs curves)

{% asset_img fill-and-stroke.png %}
