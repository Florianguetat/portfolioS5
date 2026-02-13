// translation.js

async function translatePage(sourceFile, targetLang) {
  try {
    // 1. Charger le fichier source (ex : accueil.html)
    const response = await fetch(`../francais/${sourceFile}`);
    const htmlText = await response.text();

    // 2. Extraire le texte brut (ex : "Bonjour")
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, "text/html");
    const originalText = doc.body.innerText.trim();

    // 3. Appeler l’API de traduction MyMemory
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(originalText)}&langpair=fr|${targetLang}`;
    const translationResponse = await fetch(apiUrl);
    const translationData = await translationResponse.json();

    const translatedText = translationData.responseData.translatedText;

    // 4. Injecter la traduction dans la page courante
    document.body.innerHTML = `<h1>${translatedText}</h1>`;

  } catch (error) {
    console.error("Erreur dans translation.js :", error);
    document.body.innerHTML = "<h1>Translation error</h1>";
  }
}
