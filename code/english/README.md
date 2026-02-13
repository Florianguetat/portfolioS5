# Directory `/code/english`

This directory contains the English version of the website.

## Content

This folder contains several HTML files with English filenames  
(translations of the original French filenames).

Each file corresponds to a specific page of the website in English.

## How it works

All files work according to the same principle:

```html
<script src="../translate/translation.js"></script>
<script>
  translatePage("accueil.html", "en");
</script>
```
### Explanation

- `translation.js` contains the central translation logic of the website.  
- The `translatePage()` function loads the original French page (e.g. `accueil.html`).  
- The second parameter `"en"` indicates that the content should be translated into English.  
- The filenames in this directory are the English equivalents of the original French files, but the internal reference remains the French source file.  

In this way, the technical structure of the website remains consistent, while the displayed content is adapted to the language.

## Purpose

This directory provides the complete English language version of the website.  
New pages can be added following the same principle.
