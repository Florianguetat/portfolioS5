# Directorio `/code/español`

Este directorio contiene la versión en español del sitio web.

## Contenido

En esta carpeta se encuentran varios archivos HTML con nombres de archivo en español  
(traducciones de los nombres de archivo originales en francés).

Cada archivo corresponde a una página específica del sitio web en idioma español.

## Funcionamiento

Todos los archivos funcionan según el mismo principio:

```html
<script src="../translate/translation.js"></script>
<script>
  translatePage("accueil.html", "es");
</script>
```
### Explicación

- `translation.js` contiene la lógica central de traducción del sitio web.  
- La función `translatePage()` carga la página original en francés (por ejemplo, `accueil.html`).  
- El segundo parámetro `"es"` indica que el contenido debe traducirse al español.  
- Los nombres de archivo de este directorio son las equivalencias en español de los archivos originales en francés, pero la referencia interna sigue siendo el archivo fuente en francés.  

De este modo, la estructura técnica del sitio web se mantiene uniforme, mientras que el contenido mostrado se adapta al idioma.

## Propósito

Este directorio proporciona la versión completa en español del sitio web.  
Se pueden añadir nuevas páginas siguiendo el mismo principio.
