# `/code` Directory

This directory contains all the source code for the multilingual website, including  
the French reference pages, translated versions, the language selection homepage,  
and the shared translation logic.

It is the core of the project’s structure and handles both **content** and **language switching**.

---

## Structure

The `/code` directory is organized into several subdirectories:

- `francais/`  
  Contains the original French HTML pages.  
  These files act as the **reference source** for all translations and are also used as the French-language version of the website.

- `deutsch/`  
  Contains the German version of the website.  
  Each HTML file corresponds to a French source page and uses the shared translation logic.

- `english/`  
  Contains the English version of the website.

- `espanols/`  
  Contains the Spanish version of the website.

- `italiano/`  
  Contains the Italian version of the website.

- `portugûes/`  
  Contains the Portuguese version of the website.

Each language directory (except `francais/`) includes:
- Localized HTML files.
- A `README.md` describing how the translation mechanism works for that language.

- `home/`  
  Contains the language selection page:
  - `home.html` – main entry page to choose a language.  
  - `home.css` – styling for the language selection interface.  
  - `home.js` – handles redirection to the selected language version.

- `translate/`  
  Contains the shared translation script:
  - `translation.js` – defines the `translatePage(sourceFile, targetLang)` function used by the language-specific directories to load and translate French source pages at runtime.

---

## How It Works

The general workflow is:

1. The user first visits the **home** language selection page (`/code/home/home.html`), where they can choose their preferred language.
2. Based on the selected language, the user is redirected to the corresponding language directory (e.g. `/code/english/`, `/code/deutsch/`, etc.).
3. In each translated directory, the pages use the shared `translation.js` script from `/code/translate` to:
   - Load the original French HTML file from `/code/francais/`.
   - Send its text content to the MyMemory translation API.
   - Inject the translated text into the current page.

This approach keeps **one single French source of truth** while generating localized content dynamically for each target language.

---

## Purpose

The `/code` directory provides:

- A clear separation between **source content** (`francais/`),  
  **localized views** (language-specific folders),  
  and **infrastructure** (`home/` and `translate/`).
- A scalable structure where new languages can be added by:
  - Creating a new language directory.
  - Adding corresponding HTML files.
  - Reusing the existing translation logic in `/code/translate`.

It is the central backbone of the multilingual website.
