---
title: Les bases du web
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

Donc le HTML est juste un fichier texte, mais un type de fichier spécifique.

C'est : 

- Tout le contenu que vous voulez écrire mais formatter d'une manière très spécifique. 
- Toutes les autres informations supplémentaires nécessaire pour que celà s'affiche de manière plus belle.

### CSS, Javascript (JS) et les autres ressources 

{% caption Vous avex aussi besoin de CSS et de JS %}
{% asset_img server-give-css-and-js.svg 525 200 "le serveur transmettant des fichiers CSS & JS 'le serveur transmettant des fichiers CSS & JS'" %} 
{% endcaption %}

Dans les informations supplémentaires on va retrouver une liste de fichiers supplémentaires à demander au serveur. 
En plus des images/vidéos, il y a aussi deux domaines précis où l'on a besoin de plus d'informations : 

- pour avoir une __jolie présentation__ : ce sera donné par les informations contenue dans les fichiers textes de type  __CSS__
- pour avoir un contenu __interactif__ : ce sera donné par les informations contenue dans les fichiers textes de type __Javascript__ (on abrège souvent en JS)

### La magie du navigateur

{% caption Wow ! Ça c'est de la page web !  %}
{% asset_img webbrowser-rendering.svg 480 400 "le navigateur rendant une page internet 'le navigateur rendant une page internet'" %} 
{% endcaption %}

Et donc, avec l'ensemble de ces fichiers textes (HTML, CSS & JS), le navigateur jouera de sa magie et offrira à vous et aux autres utilisateurs un bel affichage intéractif des informations que vous voulez voir ! 

## Pour résumer

{% caption Love! Love! Love! %}
{% asset_img browser-love.svg 260 140 "le navigateur entouré d'amour 'le navigateur entouré d'amour'" %} 
{% endcaption %}

__Aimez votre navigateur !__  (et gardez le à jour 😎)

Vous savez maintenant : 

- qu'un site internet est un ensemble de fichiers texte
- ils vous sont fournis par le serveur
- le fichier principal d'une page web est un fichier HTML

Vous pouvez retrouver plus de détail à propos du HTML dans cet article : {% post_link 04-html-basic-part-1 %} 
