// home.js
fetch("http://localhost:3000/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        file: "../francais/accueil.html",
        source: "fr",
        target: "en"
    })
})
.then(r => r.json())
.then(data => console.log("Réponse serveur :", data))
.catch(err => console.error("Erreur :", err));
