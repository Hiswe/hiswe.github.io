---
title: html basic (part 1)
tags:
  - beginner
comments: false
categories:
  - web
---

<!-- https://google.github.io/styleguide/htmlcssguide.html#Optional_Tags -->

## Introduction

As seen in {% post_link 03-basic-web-understanding %} the backbone of a webpage is the HTML file.  
The purpose of this post is to have a better understanding of those, and how you can write a simple one!

<!-- more -->

Like on the basic understanding, there are in this post some simplifications or shortcuts.  
As more posts will be published, we will clarify those 🤓


## What is an HTML file?

<!-- illustration: a happy webpage with a question mark -->

It's a *text file*.

So we can just write some text on it and it will do the thing!

But for the browser to understand it's an HTML file we need to things:

- the *right file extension: .html*
- a *small text at the top of the file* to indicate the content is really HTML.<br> This will be `<!DOCTYPE html>`  

### Hey! if it's text file, I can use Microsoft Word!

<!-- illustration: a perplex webbrowser looking at a Microsoft Word file -->

In short: *you can't use Microsoft Word*

#### If you're interested about the reasons:

*Microsoft Word* (let's call it Word for now on) *produces docx files not HTML* files.

And *your browser can't understand Docx* files.
Even if, when you look at word document *it looks like only text, it isn't.*  
Word in its files store a lots of other informations! 

- the text in itself but also…
- the font styles you use (which font, the size, if it's bold or not)
- the images you embedded in
- and so on…

#### What you can use instead (and they are free):

<!-- illustration: Happy VSC & Atom icons -->

- [Visual Studio Code](https://code.visualstudio.com/)
- [Atom](https://atom.io/)
- and a lot more…

So you can download them and use one of them 👍

## Let's begin!

<!-- illustration: a baby HTML file -->

Make a new file named `my-first-webpage.html` and save it somewhere.  
You can now type:

{% include_code lang:html 04-html-basic-part-1/my-first-webpage.html %}

And open it with your web browser!

### Why everything is on the same line?

<!-- illustration: a sad html file with a broken heart -->

The desired output is a formated article, right?  
It means having some:

- [headlines](https://en.wikipedia.org/wiki/Headline) 
- [paragraph](https://en.wikipedia.org/wiki/Paragraph) because reading a text without space is uncomfortable 
- Maybe some text formatting like bold and italic

*Where in Word you can click a button to this, in HTML you have to write it for the web browser to understand.*

### Let tell the browser we want a headline and paragraph

<!-- illustration: ??? -->

Let's update our example like this:

{% include_code lang:html 04-html-basic-part-1/my-improved-webpage.html %}

After saving reload, your browser aaand… It's done! 🥇

### But what happened?


#### about metadata

- all the informations that are evolving around the main datas
- words: author…
- images: camera lens, position
