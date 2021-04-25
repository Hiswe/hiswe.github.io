---
title: Initiation au HTML avec Codepen
tags:
  - beginner
  - html
cover: cover.png
comments: false
lang: fr
description: Apprendre à créer une structure HTML avec Codepen
categories:
  - web
date: 2021-04-25 18:12:46
---

## Introduction

Comment se servir de Codepen pour apprendre et créer des croquis de page internet

<!-- more -->

## Quelques (brefs) rappels sur le web

Quand on veut afficher une page internet, on va rentrer dans son navigateur une adresse.

Le navigateur va alors demander à un autre ordinateur qui “vit” là (le serveur) de lui renvoyer les fichiers qui s'y trouvent.

Outre tout les fichiers d'images/vidéos/son qu'on va pouvoir avoir il en existe 3 types particuliers. Les fichiers&nbsp;:

- HTML
- CSS
- JavaScript (On abrège en JS presque tout le temps)

**Ce sont tous des fichiers texte.**  
C'est à dire&nbsp;:

- qu'ils sont composés de caractères lisibles par un être humain
- qu'ils peuvent s'ouvrir dans un éditeur de texte (pas comme Word mais presque !)

Vous pouvez retrouver une explication plus détaillée dans cet article : {% post_link 03-les-bases-du-web %}

### Rôle des fichiers HTML/CSS/JS

Si on devait comparer la construction d'une maison avec celle d'une page internet alors :

- le HTML va donner toute la description de la maison.  
  Par exemple&nbsp;: c'est une maison avec un salon, qui a une table et 4 chaises, etc.
- le CSS va donner tout ce qui est apparence.  
  Par exemple&nbsp;: Le salon fait 15m², il est peint de rose, la table est carré et les 4 chaises sont autour, etc.
- le JS va donner tout ce qui est comportements.  
  Par exemple&nbsp;: si on appui sur l'interrupteur du mur, la lumière s'allume

En terme technique :

- le HTML c'est le contenu
- le CSS, l'apparence
- le JS, les comportements

{% caption HTML : contenu, CSS : apparence, JS : comportements %}
{% asset_img web-page-file-types.svg 500 150 "des fichiers HTML, CSS et JS 'des fichiers HTML, CSS et JS'" %}
{% endcaption %}

### Le web : un espace inclusif et accessible

Le web a été designé dans cet état d'esprit.

- On doit pouvoir lire le contenu dans n'importe quelle langue (changement de direction pour l'arabe par exemple)
- On doit pouvoir accéder au contenu quand on est en situation de handicap (avec des technologies comme [voice-over](https://www.apple.com/fr/accessibility/))
- Enlever le plus de frein pour la création de contenu&nbsp;:
  - le code est lisible par un être humain
  - on n'a pas besoin de payer de licenses pour créer

## Codepen

[Copepen](https://codepen.io/about) est un environnement de développement web en ligne.  
Il permets de faciliter la création croquis de page internet !

Pour celà il suffit d'aller sur&nbsp;:

[https://codepen.io/pen/](https://codepen.io/pen/)

### L'interface

On va retrouver 4 zones&nbsp;:

- 3 de ces zones sont là où on va pouvoir coder notre HTML/CSS/JS
- la dernière est une prévisualisation en temps réel du rendu de notre code 🥳

### Configurer l'interface

Pour plus de confort on peut réorganiser l'espace de travail comme suit :

1. Mettre côte à côte le code et le rendu
   {% caption HTML : change view => premier icône %}
   {% asset_img codepen-change-editor-layout.png 420 190 "bouton changer de layout dans codepen 'bouton changer de layout dans codepen'" %}
   {% endcaption %}
2. Ne garder que la fenêtre HTML
   {% caption HTML menu => Maximize HTML editor %}
   {% asset_img codepen-maximize-html-editor.png 435 325 "bouton maximiser le bloc HTML 'bouton maximiser le bloc HTML'" %}
   {% endcaption %}

### Optionnel&nbsp;: enregistrer son travail

Il faut s'enregistrer depuis l'interface.  
Le bouton d'inscription se trouve tout en bas de la popup de connection !

## Créer une page du contenu

Pour l'exemple, on va essayer de raconter sa journée d'hier.  
Pour moi ça donnerait quelque chose comme :

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="Hiswe" data-slug-hash="poRGGzq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="plain-text">
  <span>See the Pen <a href="https://codepen.io/Hiswe/pen/poRGGzq">
  plain-text</a> by Hiswe (<a href="https://codepen.io/Hiswe">@Hiswe</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Pourquoi tout est sur une même ligne ?

{% caption Hey, je fais juste mon travail… %}
{% asset_img browser-rendering-text.svg 430 400 "le navigateur affichant le contenu textuel 'le navigateur affichant le contenu textuel'" %}
{% endcaption %}

On veut avoir un texte formaté, non ?  
Celà veut dire que pour avoir une meilleure expérience de lecture il nous faudrait :

- [des entêtes (article en anglais)](https://en.wikipedia.org/wiki/Headline)
- [de paragraphes](https://fr.wikipedia.org/wiki/Paragraphe)
- des listes
- Peut-être du formatage de texte comme du <b>gras</b> ou de l'<i>italique</i>.

**Là où dans Word, vous pouvez cliquer sur un bouton pour cela, en HTML, vous devez l'écrire pour que le navigateur Web le comprenne.**

Actuellement, vous avez une idée de comment ça doit être présenté mais le navigateur, lui, ne voit que du texte.  
En plus, _il va combiner les espaces multiples et ignorer les retours à la ligne_ 😇
(Et croyez-moi il faut ça pour votre propre bien)

### Disons au navigateur que nous voulons des entêtes et des paragraphes !

{% caption Ah OK! you want a heading & a paragraph! %}
{% asset_img browser-rendering-html.svg 430 450 "The browser rendering the example below 'The browser rendering the example below'" %}
{% endcaption %}

Nous devons mettre à jour notre code comme suit&nbsp;:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="Hiswe" data-slug-hash="NWdoorL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="basic-html-tagging">
  <span>See the Pen <a href="https://codepen.io/Hiswe/pen/NWdoorL">
  basic-html-tagging</a> by Hiswe (<a href="https://codepen.io/Hiswe">@Hiswe</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Que s'est-il passé ? les éléments HTML

**On vient juste de dire au navigateur quel type de contenu nous voulions** 😊  

#### Anatomie d'un élément HTML

{% caption vision au rayon X d'un élément HTML  %}
{% asset_img html-element-anatomy.svg 500 280 "2 éléments HTML détaillés '2 éléments HTML détaillés'" %}
{% endcaption %}

Un élément HTML est un _groupe qui a une signification_ (comme entête, paragraphe, liste…)  
C'est composé la plupart du temps:

- d'un **tag ouvrant** (`<h1>` & `<p>` dans notre exemple) toujours écrit de la façon suivant
  - le signe supérieur `<`
  - le nom du tag
  - le signe inférieur `>`
  - … ou pour le dire plus simplement : le nom du tag entouré de 2 chevrons
- le **contenu** (les différents textes)
- un **tag fermant** (`</h1>` & `</p>` dans notre cas) qui est comme notre tag ouvrant _mais_ :  
  ⚠️ **on ajoute un** `/` **après le signe supérieur !**

Vous pouvez en apprendre plus sur [l'article wikipedia )](https://en.wikipedia.org/wiki/HTML_element#Syntax) (en anglais)

#### Tags ouvrant et fermant 

C'est la manière que l'on a de dire au navigateur où un élément commence et fini.
Sans celà, aussi intelligent qu'il soit, il ne pourra pas deviner ce que vous aviez en tête quand vous avez écrit votre code.

**_Savoir écrire comme il faut un élément HTML est la chose la plus importante à comprendre à propos de l'HTML!_**

#### h1 & p

Comme dit précédemment, chaque élément HTML a un __sens__, donc :  

- `h1` représente un <b>h</b>eading de **1**<sup>er</sup> niveau
- `p` représente un <b>p</b>aragraph

Comme le HTML a été conçu par des américains, les abbreviation viennent de l'anglais
Vous pouvez voir la  [liste complète des éléments HTML ici](https://developer.mozilla.org/fr/docs/Web/HTML/Element)

### Mieux présenter une liste

On voit que l'on a encore des choses à améliorer&nbsp;:

- il manque des retours à la ligne
- la liste n'est pas jolie

Le code pourrait être amélioré comme suit&nbsp;:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="Hiswe" data-slug-hash="KKaJJrP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="html-tagging-improvement">
  <span>See the Pen <a href="https://codepen.io/Hiswe/pen/KKaJJrP">
  html-tagging-improvement</a> by Hiswe (<a href="https://codepen.io/Hiswe">@Hiswe</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

#### Signification des nouveaux éléments

On l'a déjà vu, __un élément HTML a un sens__:  

- `br` représente un <b>br</b>eak 
- `ul` représente une <b>u</b>norganized <b>l</b>ist (non-organisée car il n'y a pas d'ordre donné à cette liste, et donc elle s'affichera sans chiffres)
- `li` représente un <b>l</b>ist <b>i</b>tem

Et parce que nous voulions des retours chariots &  une liste, le choix évident était ce couple d'éléments 😎

### Tags auto fermants

{% caption Je suis un élément auto-fermant ! %}
{% asset_img auto-closing-tag.svg 300 140 "un élément HTML auto-fermant 'un élément HTML auto-fermant'" %} 
{% endcaption %}

Certain éléments HTML n'autorisent pas de contenu.
C'est le cas pour un retour chariot.
C'est aussi le cas pour une image par exemple ! Une image est une image, Qu'est-ce qu'on pourrait rajouter d'autre ?

Pour les écrire:

- ne faire  __qu'un seul tag__
- il doit  __finir par *<span class="u-c-accent">/</span>>*__

Et c'est tout 🤓

### Imbrication d'éléments HTML

{% caption enfants pommes contenue dans papa panier de fruits  %}
{% asset_img basket-of-apples.svg 410 180 "un panier de fruit avec 3 pommes 'un panier de fruit avec 3 pommes'" %} 
{% endcaption %}

Plus haut j'avais dit que le contenu serait votre texte.  
C'était vrai mais incomplet&nbsp;: __Il peut aussi contenir d'autres éléments HTML__  

Pour exemple, si on voulait décrire en HTML ce panier de fruit avec ses trois pommes on pourrait écrire quelque chose comme :

[//]: # ( Don't use backtick as it mess with further include_code )
{% codeblock lang:xml %}
<panier-de-fruit>
  <pomme></pomme>
  <pomme></pomme>
  <pomme></pomme>
</panier-de-fruit>
{% endcodeblock %}

Bien sûr `panier-de-fruit` et `pomme` ne sont pas des éléments HTML valides ⛔ 🗑 + 🍎
Ne les utilisez pas dans vos prochains projets ! 

### Parent & Enfant

C'est de la poésie de développeur 🌈 
On parle souvent __d'un élément HTML en contenant d'autres__ comme __d'un parent__ et de __ses enfants__  

Dans l'exemple du dessus&nbsp;:

- le parent serait le panier
- les enfants du panier seraient les pommes


### Une erreur facile à faire&nbsp;: ne pas imbriquer correctement les éléments

{% caption Le navigateur n'aime pas les éléments HTML dans un état quantique %}
{% asset_img intertwined-apple.svg 270 180 "une pomme piégée sur le rebord du panier 'une pomme piégée sur le rebord du panier'" %} 
{% endcaption %}

Il est important de comprendre que le navigateur doit savoir quand commence et s'arrête quelque chose.
Donc __si on ne respecte pas l'ordre d'ouverture et de fermeture__ cela pourra __créer des problèmes__.

Le navigateur est votre allié. Il essaiera de corriger vos erreurs mais peut-être pas comme vous le vouliez.

#### Ce code HTML n'est pas bon

[//]: # ( Don't use backtick as it mess with further include_code )
{% codeblock lang:html %}
<ul>
  <li>une pomme
</ul>
  </li>
{% endcodeblock %}

Le navigateur ne le comprendra pas&nbsp;: 

le `<li>` __commence *dans*__ le `<ul>` 
__*MAIS*__
Il __se ferme *en dehors*__ de son parent

#### La bonne manière de l'écrire

[//]: # ( Don't use backtick as it mess with further include_code )
{% codeblock lang:html %}
<ul>
  <li>une pomme</li>
</ul>
{% endcodeblock %}

## Conclusion

- le HTML c'est simplement du texte
- ça permets de hiérarchiser l'information
- celà s'écrit avec des balises HTML
- les tags s'écrivent avec des lettres entourées de chevrons
- les tags ont un sens

Si vous voulez plus d'information il y a [cet excellent article](https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics) de disponible&nbsp;!

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>