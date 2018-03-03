---
title: 06-html-basic-part-3
comments: false
tags:
  - beginner
  - html
categories:
  - web
---

## Introduction

in {% post_link 04-html-basic-part-1 the first %} and {% post_link 05-html-basic-part-2 the second part %} we've seen the basis of how to write an HTML document.

Now we're going to play with that and expand our story.  
This will help us to learn more about [accessibility](https://en.wikipedia.org/wiki/Web_accessibility)

<!-- more -->

## Enhance your text with more HTML elements

### Add the author – <address\> element

<!-- ILLUSTRATION a pretentious author -->

Why not showing who write this amazing piece of art?

If we look which HTML element seems the more appropriate, we can see that `<address\>` seems the right one.

{% blockquote Mozilla Developer Network https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address address element description %}
The HTML <address\> element indicates that the enclosed HTML provides contact information for a person or people, or for an organization
{% endblockquote %}

So we can add right after our title:

{% codeblock lang:xml %}
<h1>The Boy Who Cried Wolf</h1>
<address>by Hiswe</address>
{% endcodeblock %} 

Which seems to be good enough.

### Add a link to the author page – <a\> element

<!-- ILLUSTRATION a pretentious author showing his house -->

But we can do more!  
Why not also include a link to his website were all his glorious contents live!

{% codeblock lang:xml %}
<address>
  by    
  <a href="https://github.com/hiswe/">Hiswe</a>
</address>
{% endcodeblock %} 

As seen in {% post_link 05-html-basic-part-2 part 2 %} the `parent` (address here) can have many `children`.  
And *you can __mix__ in any order __text__ child with __HTML element__ child* 

#### Why everything on the same line?

For a better understanding, our example below can be also written in this way:

<!-- ILLUSTRATION the browser merging text -->

{% codeblock lang:xml %}
<address>by <a href="https://github.com/hiswe/">Hiswe</a></address>
{% endcodeblock %} 


#### semantic of <a\> and href

<a\> stands for [anchor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

the `href` attribute refer to `hyperlink reference`

<!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a -->

<!-- rel="author" -->

{% include_code lang:html 06-html-basic-part-3/01-author.html %}

- em
- strong
- quote
- trigger reader mode

## A better accessibility

- html lang
- encoding

## Developpers things

- comments
