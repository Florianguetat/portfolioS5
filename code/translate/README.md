# Directory `/code/translate`

This directory contains the central translation logic for the website.

The only file in this directory is **`translation.js`**, which provides the function **`translatePage(sourceFile, targetLang)`**.

This function:

- Loads the original French HTML file from `../francais/` (for example `accueil.html`).
- Parses the HTML and extracts the plain text content from the `<body>`.
- Sends the text to the **MyMemory** translation API using the language pair `fr|<targetLang>`.
- Retrieves the translated text from the API response.
- Replaces the current page’s `<body>` content with the translated text inside an `<h1>` element.
- On error, logs the problem in the console and displays a **"Translation error"** message in the page body.

This script is used by the language-specific directories (such as `/code/deutsch` or `/code/português`) to dynamically translate the original French pages into the target language at runtime.
