// home.js
import { translateFile } from "./translation.js";

const inputFile = "accueil.html";
const sourceLang = "fr";
const targetLang = "en";

translateFile(inputFile, sourceLang, targetLang)
    .then(() => console.log("Traduction terminée"))
    .catch(err => console.error("Erreur :", err));
