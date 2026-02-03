function redirectToLanguage(languageCode) {
  const urls = {
    '1': '../francais/accueil.html',
    '2': '../english/home.html',
    '3': '../italiano/iniziale.html',
    '4': '../español/inicio.html',
    '5': '../deutsch/startseite.html',
    '6': '../português/inicial.html'
  };

  window.location.href = urls[languageCode];
}
