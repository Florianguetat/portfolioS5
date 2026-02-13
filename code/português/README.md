# Diretório `/code/português`

Este diretório contém a versão em português do site.

## Conteúdo

Nesta pasta encontram-se vários ficheiros HTML com nomes de ficheiros em português  
(traduções dos nomes de ficheiro originais em francês).

Cada ficheiro corresponde a uma página específica do site em língua portuguesa.

## Funcionamento

Todos os ficheiros funcionam segundo o mesmo princípio:

```html
<script src="../translate/translation.js"></script>
<script>
  translatePage("accueil.html", "pt");
</script>
```
### Explicação

**`translation.js`** contém a lógica central de tradução do site.  
A função **`translatePage()`** carrega a página francesa original (por exemplo, `accueil.html`).  
O segundo parâmetro `"pt"` indica que o conteúdo deve ser traduzido para português.  
Os nomes dos ficheiros neste diretório são as equivalências em português dos ficheiros franceses originais, mas a referência interna continua a ser o ficheiro fonte em francês.

Desta forma, a estrutura técnica do site permanece uniforme, enquanto o conteúdo apresentado é adaptado ao idioma.

## Objetivo

Este diretório disponibiliza a versão completa em língua portuguesa do site.  
Novas páginas podem ser adicionadas seguindo o mesmo princípio.
