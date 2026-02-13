# Directory `/code/italiano`

Questa directory contiene la versione italiana del sito web.

## Contenuto

In questa cartella si trovano diversi file HTML con nomi di file in italiano  
(traduzioni dei nomi di file originali in francese).

Ogni file corrisponde a una specifica pagina del sito web in lingua italiana.

## Funzionamento

Tutti i file funzionano secondo lo stesso principio:

```html
<script src="../translation.js"></script>
<script>
  translatePage("accueil.html", "it");
</script>
```
### Spiegazione

- `translation.js` contiene la logica centrale di traduzione del sito web.  
- La funzione `translatePage()` carica la pagina originale in francese (ad esempio `accueil.html`).  
- Il secondo parametro `"it"` indica che il contenuto deve essere tradotto in italiano.  
- I nomi dei file in questa directory sono gli equivalenti italiani dei file originali francesi, ma il riferimento interno rimane il file sorgente francese.  

In questo modo, la struttura tecnica del sito web rimane uniforme, mentre il contenuto visualizzato viene adattato alla lingua.

## Scopo

Questa directory fornisce la versione completa in lingua italiana del sito web.  
È possibile aggiungere nuove pagine seguendo lo stesso principio.
