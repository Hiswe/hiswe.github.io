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


Le but est de comprendre l'écriture du HTML :

- Vous allez voir ce qu'est le HTML
- Vous allez apprendre à vous servir d'un éditeur de code en ligne 
- Vous utiliserez le logiciel web codepen pour apprendre et créer un croquis de page internet

<!-- more -->

## Rappels sur le web

<!-- TODO: insérer une image de navigateur -->

### Navigateur & adresse

{% caption Des navigateurs : Edge, Chrome & Firefox  %}
{% asset_img browsers.svg 500 150 "Edge, Chrome & Firefox logos 'Edge, Chrome & Firefox logos'" %} 
{% endcaption %}


- Le navigateur web est le logiciel qui permet d'afficher une page internet.
- Une adresse est un texte qui commence par `http://` 

Pour afficher une page internet, on rentre l'adresse dans son navigateur.

Le navigateur va alors demander à un autre ordinateur qui se trouve à cette adresse (le serveur) de lui renvoyer les fichiers qui s'y trouvent.

{% caption Là où vit google  %}
{% asset_img browser-detail.png 630 300 "Navigateur affichant google.fr 'Capture Navigateur affichantaffiche google.fr'" %} 
{% endcaption %}



En plus de tous les fichiers d'images/vidéos/son qui existent, il en existe 3 types particuliers.  
Les fichiers&nbsp;:

- _HTML_
- _CSS_
- _JavaScript_ (On abrège en JS presque tout le temps)

**Ce sont tous des fichiers texte.**  

C'est à dire&nbsp;:

- qu'ils sont composés de caractères lisibles par un être humain
- qu'ils peuvent s'ouvrir dans un éditeur de texte (pas comme Word mais presque !)

Vous pouvez retrouver une explication plus détaillée dans cet article : {% post_link 03-les-bases-du-web %}

### HTML, CSS et JS

Si on devait comparer la construction d'une maison avec celle d'une page internet, alors :

- [le fichier HTML](https://fr.wikipedia.org/wiki/Hypertext_Markup_Language) _va décrire la maison._  
  Par exemple&nbsp;: c'est une maison avec un salon qui a une table et 4 chaises, etc.
- [le fichier CSS](https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade) _va décrire son apparence._  
  Par exemple&nbsp;: Le salon fait 15m², il est peint de blanc, la table est carrée et les 4 chaises sont autour, etc.
- [le fichier JS](https://fr.wikipedia.org/wiki/JavaScript) _va décrire les actions et leurs conséquences._  
  Par exemple&nbsp;: si on appuie sur l'interrupteur du mur du salon, la lumière s'allume, etc.

Pour résumer :

- _HTML_ = **contenu**
- _CSS_ = **apparence**
- _JS_ = **comportements**

{% caption contenu, apparence & comportements %}
{% asset_img web-page-file-types.svg 500 150 "des fichiers HTML, CSS et JS 'des fichiers HTML, CSS et JS'" %}
{% endcaption %}

### Le web : un espace inclusif et accessible

Le web a été conçu avec cet état d'esprit.

- On doit pouvoir lire le contenu dans n'importe quelle langue (changement de direction pour l'arabe par exemple)
- On doit pouvoir accéder au contenu quand on est en situation de handicap (avec des technologies comme [voice-over](https://www.apple.com/fr/accessibility/))
- Il faut avoir le moins possible de freins pour créer du contenu&nbsp;:
  - le code doit être lisible par un être humain
  - il n'y a pas de frais pour commencer à écrire du code
  - Il existe des outils gratuits qui peuvent nous aider

## Codepen

[Codepen](https://codepen.io/about) est un environnement gratuit de développement web en ligne.  
Il permet de faciliter la création de croquis de page internet.

Allez sur&nbsp;:

[https://codepen.io/pen/](https://codepen.io/pen/)

#### L'interface

On va retrouver 4 zones&nbsp;:

- les 3 premières zones sont pour le code (HTML/CSS/JS)
- la quatrième est une prévisualisation en temps réel du rendu de notre code 🥳

#### Configurer l'interface

Pour plus de confort, on peut réorganiser l'espace de travail comme suit :

1. Mettre côte à côte le code et le rendu
   {% caption HTML : change view => premier icône %}
   {% asset_img codepen-change-editor-layout.png 420 190 "bouton changer de layout dans codepen 'bouton changer de layout dans codepen'" %}
   {% endcaption %}
2. Ne garder que la fenêtre HTML
   {% caption HTML menu => Maximize HTML editor %}
   {% asset_img codepen-maximize-html-editor.png 435 325 "bouton maximiser le bloc HTML 'bouton maximiser le bloc HTML'" %}
   {% endcaption %}

#### Enregistrer son travail (optionnel)

Il faut s'inscrire depuis l'interface.  
Le bouton d'inscription se trouve tout en bas de la popup de connection.

## Créer une page du contenu

Pour l'exemple, on va essayer de raconter sa journée d'hier.  
Pour moi ça donnerait quelque chose comme :

```
Mon dimanche dernier

C'était une belle journée de printemps.  
Je me suis levé vers 9h00 du matin. 
Après un café je suis sorti me promener pour profiter de la chaleur de cette journée ensoleillée

De retour de ma balade au parc j'ai mangé :

- une salade à la feta, aux olives noires et aux tomates cerises
- une ginger beer
- une glace à la vanille et aux amandes

Et pour la suite, ça reste à écrire !
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="Hiswe" data-slug-hash="poRGGzq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="plain-text">
  <span>See the Pen <a href="https://codepen.io/Hiswe/pen/poRGGzq">
  plain-text</a> by Hiswe (<a href="https://codepen.io/Hiswe">@Hiswe</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Tout sur une même ligne ?

{% caption Hey, je fais juste mon travail… %}
{% asset_img browser-rendering-text.svg 430 400 "le navigateur affichant le contenu textuel 'le navigateur affichant le contenu textuel'" %}
{% endcaption %}

On veut avoir un texte formaté, non ?  
Cela veut dire que pour avoir une meilleure expérience de lecture il nous faudrait :

- [des entêtes (article en anglais)](https://en.wikipedia.org/wiki/Headline)
- [dse paragraphes](https://fr.wikipedia.org/wiki/Paragraphe)
- [des retours à la ligne](https://fr.wikipedia.org/wiki/Retour_chariot)
- des listes

**Dans Word, pour formatter un texte, vous cliquez sur des boutons.**  
**En HTML, vous devez écrire le format que vous attendez pour que le navigateur le comprenne.**

Actuellement, vous avez une idée de comment cela doit être présenté, mais le navigateur, lui, ne voit que du texte.  
En plus, _il va combiner les espaces multiples et ignorer les retours à la ligne_ 😇
(On verra plus tard pourquoi il fait comme ceci)

### Les éléments HTML

C'est grâce à eux qu'on va faire comprendre au navigateur comment un contenu doit être mis en page.  
Ce sont des petites boîtes dans lesquelles on va mettre notre contenu, pour bien l'identifier.

#### Anatomie d'un élément HTML

{% caption vision au rayon X d'un élément HTML  %}
{% asset_img html-element-anatomy.svg 500 280 "2 éléments HTML détaillés '2 éléments HTML détaillés'" %}
{% endcaption %}

Un élément HTML est un _groupe qui a une signification_ (comme entête, paragraphe, liste…)  
C'est composé la plupart du temps:

- d'un **tag ouvrant** (`<h1>` & `<p>` dans notre exemple) toujours écrit de la façon suivante
  - le signe supérieur `<`
  - le nom du tag
  - le signe inférieur `>`
  - … ou pour le dire plus simplement : le nom du tag entouré de 2 *chevrons*
- le **contenu** (les différents textes)
- un **tag fermant** (`</h1>` & `</p>` dans notre cas) qui est comme notre tag ouvrant _mais_ :  
  ⚠️ **on ajoute un** `/` **après le signe supérieur !**


{% caption Où trouver les chevrons sur un clavier français %}
{% asset_img keyboard-fr.png 750 520 "Le positionnement des chevrons sur un clavier français 'Le positionnement des chevrons sur un clavier français'" %}
{% endcaption %}

#### Tags ouvrant et fermant 

C'est la manière qu'on utilise pour dire au navigateur où un élément commence et où il finit.
Sans cela, aussi intelligent qu'il soit, il ne pourra pas deviner ce que vous aviez en tête quand vous avez écrit votre code.

**_Savoir écrire comme il faut un élément HTML est la chose la plus importante à comprendre à propos de l'HTML!_**

#### h1 & p

Comme dit précédemment, chaque élément HTML a un __sens__, donc :  

- `h1` représente un <b>h</b>eading (entête) de **1**<sup>er</sup> niveau
- `p` représente un <b>p</b>aragraph

Comme le HTML a été conçu par des américains, les abréviations viennent de l'anglais.
Vous pouvez voir la  [liste complète des éléments HTML ici](https://developer.mozilla.org/fr/docs/Web/HTML/Element)

{% caption Ah OK! tu veux un entête et des paragraphes&nbsp;! %}
{% asset_img browser-rendering-html.svg 430 450 "rendu de navigateur 'rendu de navigateur'" %}
{% endcaption %}

### Entête

Nous devons mettre à jour notre code comme suit&nbsp;:

1. **On va avant notre première ligne ajouter le texte  `<h1>`** 
2. **PUIS mettre un `</h1>` à la fin de la ligne**


<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="Hiswe" data-slug-hash="NWdoorL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="basic-html-tagging">
  <span>See the Pen <a href="https://codepen.io/Hiswe/pen/NWdoorL">
  basic-html-tagging</a> by Hiswe (<a href="https://codepen.io/Hiswe">@Hiswe</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

On voit que notre titre est bien mis en valeur&nbsp;!

### paragraphes

Il ne nous reste plus qu'à faire pareil pour les paragraphes&nbsp;:  
Il faut donc entourer chaque partie par des `<p>` et `</p>`. (on s'occupera de la liste plus tard)

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="Hiswe" data-slug-hash="bGgXwBJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="basic-html-tagging">
  <span>See the Pen <a href="https://codepen.io/Hiswe/pen/bGgXwBJ">
  basic-html-tagging</a> by Hiswe (<a href="https://codepen.io/Hiswe">@Hiswe</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Améliorer son contenu

Il y a encore des choses à améliorer&nbsp;:

- il manque des retours à la ligne
- la liste n'est pas jolie

### br, ul et li

On l'a déjà vu, __un élément HTML a un sens__:  

- `br` représente un <b>br</b>eak
- `ul` représente une <b>u</b>norganized <b>l</b>ist (non-organisée car il n'y a pas d'ordre donné à cette liste, et donc elle s'affichera sans chiffres)
- `li` représente un <b>l</b>ist <b>i</b>tem

Et parce que nous voulions des retours à la ligne &  une liste, le choix évident était ce couple d'éléments 😎

### br : un tag auto-fermant

{% caption Je suis un élément auto-fermant ! %}
{% asset_img auto-closing-tag.svg 300 140 "un élément HTML auto-fermant 'un élément HTML auto-fermant'" %} 
{% endcaption %}

Certains éléments HTML n'autorisent pas de contenu.
C'est le cas pour un retour à la ligne.
C'est aussi le cas pour une image par exemple ! Une image est une image, Qu'est-ce qu'on pourrait rajouter d'autre ?

Pour les écrire:

- ne faire  __qu'un seul tag__
- il doit  __finir par *<span class="u-c-accent">/</span>>*__

Dans notre cas, on écrira : **`<br />`**

On peut donc les rajouter _à l'intérieur des paragraphes_ à chaque fin de ligne où la suivante doit se trouver en dessous 🤓

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="Hiswe" data-slug-hash="WNRVGRq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="html-tagging-improvement-line-break">
  <span>See the Pen <a href="https://codepen.io/Hiswe/pen/WNRVGRq">
  html-tagging-improvement-line-break</a> by Hiswe (<a href="https://codepen.io/Hiswe">@Hiswe</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### ul, li : Imbrication d'éléments HTML

{% caption enfants pommes contenues dans papa panier de fruits  %}
{% asset_img basket-of-apples.svg 410 180 "un panier de fruit avec 3 pommes 'un panier de fruit avec 3 pommes'" %} 
{% endcaption %}

Plus haut nous avons vu que le contenu serait le texte.  
C'était vrai mais incomplet&nbsp;: __Il peut aussi contenir d'autres éléments HTML__  

Pour exemple, si on voulait décrire en HTML ce panier de fruits avec ses trois pommes on pourrait écrire quelque chose comme :

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

### Parent & enfants

C'est de la poésie de développeur 🌈 
On parle souvent __d'un élément HTML qui en contient d'autres__ comme __d'un parent__ et de __ses enfants__  

Dans l'exemple du dessus&nbsp;:

- le parent est le panier
- les enfants du panier sont les pommes

On peut considérer que chaque élément HTML est comme une boîte qui peut contenir d'autres boîtes.

Dans notre cas on a besoin :

1. d'une première grosse boîte qui va dire que c'est une liste (`<ul>` tout le contenu de notre liste `</ul>`)
2. de petites sous-boîtes, qui sont seront chacun des éléments de la liste (`<li>` un élément de la liste `</li>`)

Ce qui donne :

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="Hiswe" data-slug-hash="KKaJJrP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="html-tagging-improvement">
  <span>See the Pen <a href="https://codepen.io/Hiswe/pen/KKaJJrP">
  html-tagging-improvement</a> by Hiswe (<a href="https://codepen.io/Hiswe">@Hiswe</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Une erreur facile à faire : mal imbriquer ses éléments

{% caption Le navigateur n'aime pas les éléments HTML dans un état quantique %}
{% asset_img intertwined-apple.svg 270 180 "une pomme piégée sur le rebord du panier 'une pomme piégée sur le rebord du panier'" %} 
{% endcaption %}

Il est important de comprendre que le navigateur doit savoir quand commence et s'arrête quelque chose.
Donc __si on ne respecte pas l'ordre d'ouverture et de fermeture__,  cela peut __créer des problèmes__.

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
Il __se ferme *en dehors*__ de son parent.

Pour le dire autrement, la boîte `<li>` est à la fois dans ET hors de la boîte `<ul>` 🙃

#### La bonne manière de l'écrire

[//]: # ( Don't use backtick as it mess with further include_code )
{% codeblock lang:html %}
<ul>
  <li>une pomme</li>
</ul>
{% endcodeblock %}

### Rajouter des espace (l'indentation)

{% caption Les espace vous aident à mieux lire %}
{% asset_img indentation.svg 500 260 "comparaison entre un contenu non indenté & indenté  'comparaison entre un contenu non indenté & indenté '" %} 
{% endcaption %}

Pour éviter ce problème il y a cette petite technique :

  - Il faut [indenter](https://fr.wikipedia.org/wiki/Style_d%27indentation) le contenu (rajouter des espace)
  - Cela permets de repérer visuellement qui est l'enfant de quel parent.


On évitera ainsi certaines erreurs, et notre code sera plus agréable à regarder (les développeurs ont un côté artistique 🌈).

**C'est pour cette raison que le navigateur ignorait les espaces et les retours à la ligne&nbsp;:** pour nous permettre d'indenter notre code HTML sans que cela apparaisse dans le rendu du navigateur.

## Conclusion

- Un fichier HTML, c'est du texte
- il permet d'organiser l'information de notre page internet
- il s'écrit avec des éléments HTML
- ces éléments ont un sens (titre, paragraphe…)
- chaque éléments s'écrit avec des tags (`<h1>Mon titre</h1>`)
- les tags s'écrivent avec des lettres entourées de chevrons  (`<h1>`, `<p>`, `<ul>`…)

Si vous voulez plus d'informations il y a [cet excellent article](https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics) de disponible&nbsp;!

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>