# Home Directory

This directory contains the main language selection page of the website.

It allows users to choose their preferred language before being redirected to the corresponding localized version of the site.

## Files

### `home.html`
The main entry page for language selection.

- Displays a list of available languages.
- Loads the associated CSS for styling.
- Loads the JavaScript file that handles redirection logic.

### `home.css`
Provides the layout and visual styling for the language selection page.

> Note: The styling is subject to change as the project evolves.

### `home.js`
Handles the redirection logic.

When a user clicks on a language button, the `redirectToLanguage(languageCode)` function redirects them to the appropriate localized home page.

Each language corresponds to a specific subdirectory:
- French
- English
- Italian
- Spanish
- German
- Portuguese

All language-specific directories are located one level above this directory, inside `/code`.

Additional languages may be added in the future. 

## Purpose

This directory acts as the central gateway to all translated versions of the website.  
It ensures users can quickly access the version of the site in their preferred language.
