function redirectToLanguage(languageCode) {
    const urls = {
        '1': 'https://example.com/fr',
        '2': 'https://example.com/en',
        '3': 'https://example.com/it',
        '4': 'https://example.com/es',
        '5': 'https://example.com/de',
        '6': 'https://example.com/pt'
    };
    
    window.location.href = urls[languageCode];
}
