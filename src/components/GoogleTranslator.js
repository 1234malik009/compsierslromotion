import React, { useEffect } from 'react';

function GoogleTranslater() {
  function getSelectedLanguage() {
    return localStorage.getItem('selectedLanguage') || 'en'; // Default to 'en' if not set
  }
  useEffect(() => {
    const selectedLanguage = getSelectedLanguage()
    // Load the Google Translate API script dynamically
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Define the callback function for initializing the translation widget
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
          {
            pageLanguage: selectedLanguage,
            includedLanguages: 'vi,ar,el,en,bn,zh,hi,ur,ne,tl,id,pa',
            autoDisplay: false,
          },
          'google-translate-widget' // The ID of the container element
      );
    };

    return () => {
      // Clean up by removing the script and the callback function
      document.body.removeChild(script);
      // Optionally, you can also remove the callback function
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
      <div id="google-translate-widget"></div>
  );
}

export default GoogleTranslater;
