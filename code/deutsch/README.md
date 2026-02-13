# Verzeichnis `/code/deutsch`

Dieses Verzeichnis enthält die deutsche Version der Website.

## Inhalt

In diesem Ordner befinden sich mehrere HTML-Dateien mit deutschen Dateinamen  
(Übersetzungen der ursprünglichen französischen Dateinamen).

Jede Datei entspricht einer bestimmten Seite der Website in deutscher Sprache.

## Funktionsweise

Alle Dateien funktionieren nach dem gleichen Prinzip:

```html
<script src="../translation/translation.js"></script>
<script>
  translatePage("accueil.html", "de");
</script>
```
### Erklärung

- `translation.js` enthält die zentrale Übersetzungslogik der Website.  
- Die Funktion `translatePage()` lädt die ursprüngliche französische Seite (z. B. `accueil.html`).  
- Der zweite Parameter `"de"` gibt an, dass der Inhalt ins Deutsche übersetzt werden soll.  
- Die Dateinamen in diesem Verzeichnis sind die deutschen Entsprechungen der französischen Originaldateien, die interne Referenz bleibt jedoch die französische Quelldatei.  

Auf diese Weise bleibt die technische Struktur der Website einheitlich, während der angezeigte Inhalt sprachlich angepasst wird.

## Zweck

Dieses Verzeichnis stellt die vollständige deutsche Sprachversion der Website bereit.  
Neue Seiten können nach demselben Prinzip hinzugefügt werden.
