// translation.js
import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const API_KEY = process.env.DEEPL_API_KEY;
const API_URL = "https://api-free.deepl.com/v2/translate";

async function translateText(text, sourceLang, targetLang) {
    const params = new URLSearchParams();
    params.append("auth_key", API_KEY);
    params.append("text", text);
    params.append("source_lang", sourceLang.toUpperCase());
    params.append("target_lang", targetLang.toUpperCase());

    const response = await fetch(API_URL, {
        method: "POST",
        body: params
    });

    const data = await response.json();
    return data.translations[0].text;
}

function extractHumanText(content) {
    const htmlText = [...content.matchAll(/>([^<]+)</g)].map(m => m[1].trim());
    const stringText = [...content.matchAll(/["'`](.*?)["'`]/g)].map(m => m[1]);

    return [...htmlText, ...stringText]
        .filter(t => t.length > 0 && /[a-zA-ZÀ-ÿ]/.test(t));
}

function replaceText(content, original, translated) {
    return content.replace(original, translated);
}

export async function translateFile(inputFile, sourceLang, targetLang) {
    const filePath = path.resolve(inputFile);
    let content = fs.readFileSync(filePath, "utf8");

    const texts = extractHumanText(content);
    console.log(`→ ${texts.length} segments détectés`);

    for (const segment of texts) {
        const translated = await translateText(segment, sourceLang, targetLang);
        content = replaceText(content, segment, translated);
    }

    const outputFile = filePath.replace(/(\.\w+)$/, `.${targetLang}$1`);
    fs.writeFileSync(outputFile, content, "utf8");

    console.log(`✔ Fichier traduit généré : ${outputFile}`);
}
