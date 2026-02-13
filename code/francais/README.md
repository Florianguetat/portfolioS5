# Répertoire `/code/francais`

Ce répertoire contient **toutes les pages HTML de référence en français** du site web.

Ces fichiers jouent un double rôle :
- ils constituent la **version française** visible du site ;
- ils servent de **source principale** pour la traduction automatique vers les autres langues.

---

## Contenu

Le répertoire comprend plusieurs fichiers HTML, chacun correspondant à une page spécifique du site (par exemple : page d’accueil, pages de contenu, etc.).

Ces fichiers sont considérés comme la **source d’origine** :  
les autres langues (allemand, anglais, espagnol, italien, portugais, etc.) se basent sur ces pages pour générer leur contenu traduit.

---

## Rôle dans la traduction

Les scripts des répertoires de langues (par exemple `/code/deutsch`, `/code/english`, etc.) utilisent le fichier de traduction commun situé dans `/code/translate/translation.js`.

Pour chaque page traduite, le mécanisme est le suivant :

1. Le script de traduction charge la page HTML correspondante dans ce répertoire `francais/`  
   (par exemple `accueil.html`).
2. Il extrait le texte de la page française.
3. Il envoie ce texte à l’API de traduction (MyMemory).
4. Il injecte le texte traduit dans la page de la langue cible.

Ainsi, **les fichiers de ce dossier sont le point de départ de toutes les traductions**.

---

## Objectif

Le répertoire `/code/francais` garantit qu’il existe :
- une **base unique, cohérente et maintenable** pour le contenu ;
- une **référence claire** pour toutes les autres versions linguistiques du site.

Toute modification de contenu doit d’abord être effectuée dans ce répertoire,  
afin que les traductions générées restent à jour et cohérentes avec la version française.
