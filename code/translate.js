async function translateHtmlFile(file, targetLang) {
    const text = await file.text();                     // Lecture du fichier .html
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    const elements = doc.querySelectorAll("body *:not(script):not(style)");

    for (const el of elements) {
        if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
            const originalText = el.innerText.trim();

            if (originalText.length > 0) {
                const translated = await translateText(originalText, targetLang);
                el.innerText = translated;
            }
        }
    }

    return "<!DOCTYPE html>\n" + doc.documentElement.outerHTML;
}

async function translateText(text, targetLang) {
    const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            q: text,
            source: "auto",
            target: targetLang,
            format: "text"
        })
    });

    const data = await res.json();
    return data.translatedText;
}
