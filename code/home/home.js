function redirectToLanguage(languageCode) {
  const urls = {
    '1': '../francais/accueil.html',
    '2': '../english/home.html',
    '3': '../italiano/iniziale.html',
    '4': '../espanol/inicio.html',
    '5': '../deutsch/startseite.html',
    '6': '../portugues/inicial.html'
  };

  window.location.href = urls[languageCode];
}
