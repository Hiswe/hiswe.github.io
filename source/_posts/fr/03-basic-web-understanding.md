---
title: Compréhension sommaire du web
lang: fr
description: Apprendre comment on affiche une belle page internet après avoir tapé une adresse dans son navigateur
tags:
  - beginner
comments: false
categories:
  - web
date: 2021-04-24 16:54:00
cover: cover.png
---


## Introduction

Le but de cet article est de vous fournir une compréhension de base de ce qui permet de voir un site Web en tapant une adresse dans son navigateur.  
C'est une simplification de ce qui se passe dans la réalité, mais l'idée globale est ici 🙂 

<!-- more -->

## Terminologie 

### Internet 

C'est une manière de faire __parler des appareils électroniques entre eux__. 

[En lire plus sur internet](https://fr.wikipedia.org/wiki/Internet)

### De nombreux appareils

Même si ce sont tous des ordinateurs, nous pouvons différencier deux types d'appareils:

#### Le client

{% caption clients: Vos appareils électroniques de tout les jours ! %}
{% asset_img computer-and-phone.svg 350 200 "un ordinateur & un téléphone 'un ordinateur & un téléphone'" %} 
{% endcaption %}

C'est __votre appareil__ (ordinateur ou smartphone…). 

[//]: # ( need to suse {% link %} regular link doesn't handle well parenthesis )
{% link un article complete à propos des clients https://fr.wikipedia.org/wiki/Client_(informatique) %}

Il peut avoir un ou plusieurs __navigateurs internets installés__ pour accéder facilement à internet.

#### Le serveur

{% caption serveur: Ceux qui sont toujours là pour vous aider ! (ils ne dorment jamais 😶) %}
{% asset_img server.svg 220 160 un serveur %} 
{% endcaption %}

C'est un __ordinateur__ spécialisé pour __répondre à des requêtes__. 
Il a des logiciels dédiés qui sont lancés pour lui permettre de remplir cette fonction.
Ce sont plutôt les entreprises qui en possèdent.

[//]: # ( need to use {% link %} regular link doesn't handle well parenthesis )
{% link Un article complet sur les serveurs https://fr.wikipedia.org/wiki/Serveur_informatique %}

Petite remarque : Internet consiste à faire en sorte que les ordinateurs se parlent entre eux.
Vous pouvez donc transformer votre propre ordinateur en serveur si vous le souhaitez en installant des logiciels spécifiques !

### Le navigateur

{% caption Le navigateur: rends le web facile depuis les années 1990 %}
{% asset_img browser.svg 200 130 "un navigateur internet 'un navigateur internet'" %} 
{% endcaption %}

Un [navigateur](https://fr.wikipedia.org/wiki/Navigateur_web): C'est le logiciel que vous utilisez pour accéder à des pages internent.  

Voici quelques navigateurs connus:

- [Google Chrome](https://www.google.com/chrome/browser/desktop/index.html)
- [Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge)
- [Apple Safari](https://support.apple.com/downloads/safari)

Il va tout faire pour que vous ayez une belle représentation visuelle de ce que vous avez demandé.  
Ui, ça semble évidente mais c'est une des choses principale des ordinateurs : comment avec des [bits](https://fr.wikipedia.org/wiki/Bit) vous pouvez avoir un affichage interactif ✨ 

## Comment ça fonctionne

{% caption “Hey serveur! T'es là ?” %}
{% asset_img browser-ask-server.svg 525 200 "un navigateur demandant une ressource à un server 'un navigateur demandant une ressource à un server'" %} 
{% endcaption %}

Quand vous tapez une adresse dans le navigateur, le navigateur demandera au serveur ce qui se trouve à cet endroit. Si le serveur le trouve il vous le donnera en retour !.

La plupart du temps, vous souhaitez obtenir une page Web, mais cela peut être n'importe quoi: une image, de la musique, une vidéo, des documents pdf…

### Accéder à une page internet

{% caption C'est le HTML que tu m'as demandé ! %}
{% asset_img server-give-html.svg 525 200 "le serveur donne un fichier HTML 'le serveur donne un fichier HTML'" %} 
{% endcaption %}

Une __page internet__ est juste un __fichier de texte !__ 
On les appelle des  __fichiers html.__   
Si vous voulez plus de détail [il  y a beaucoup plus de détails ici](https://fr.wikipedia.org/wiki/Hypertext_Markup_Language)

### HTML

So HTML is a text file but a very specific kind of text file.
It's: 

- all the information you want to have but written in a specific way 
- all the information that the web-page need to be more friendly and helpful

### CSS, Javascript and other resources 

{% caption You also need CSS & JS %}
{% asset_img server-give-css-and-js.svg 525 200 "the server giving a CSS & a JS file 'the server giving a CSS & a JS file'" %} 
{% endcaption %}

The latter part is the HTML file telling the browser to ask the server for more files. 
Beside images/videos, there are also 2 domains where it needs more specific information: 

- for having a __nice presentation__: those are the __CSS__ text files
- for being __interactive__: those are the __Javascript__ text files

### The browser magic

{% caption It's awesome! A beautiful web-page!  %}
{% asset_img webbrowser-rendering.svg 480 400 "the browser rendering a web-page 'the browser rendering a web-page'" %} 
{% endcaption %}

And now, using all those text files, your browser will do the magic and finally show you an interactive display of the information you wanted to see!

## So…

{% caption Love! Love! Love! %}
{% asset_img browser-love.svg 260 140 "the browser surrounded by heart 'the browser surrounded by heart'" %} 
{% endcaption %}

__Love your browser and keep it up to date__ 😎

You know now that : 

- a website is mainly text files
- They are given to you by the server
- The main text file for a website is the HTML file

I will go into more details for all those files (HTML, CSS & Javascript) with comings posts.  

*[UPDATE]* {% post_link en/03-html-basic-part-1 here is the the first part of HTML document! %} 

Thanks to [xpac27](https://github.com/xpac27) for the corrections!
