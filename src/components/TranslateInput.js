import React, { useEffect, useState } from 'react';
import { Input } from 'antd';

function Translation() {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    useEffect(() => {
        function googleTranslateElementInit() {
            new window.google.translate.TranslateElement(
                { pageLanguage: 'en', includedLanguages: 'es' },
                'google_translate_element'
            );
        }

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = `
      function googleTranslateElementInit() {
        new google.translate.TranslateElement(
          { pageLanguage: 'en', includedLanguages: 'es' },
          'google_translate_element'
        );
      }
    `;
        document.head.appendChild(script);

        const translateScript = document.createElement('script');
        translateScript.type = 'text/javascript';
        translateScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.head.appendChild(translateScript);

        return () => {
            document.head.removeChild(script);
            document.head.removeChild(translateScript);
        };
    }, []);

    const handleInputChange = (e) => {
        const text = e.target.value;
        setInputText(text);

        // Translate the input text and set it as the translatedText
        window.google.translate.translate({ q: text, source: 'en', target: 'es' }, (response) => {
            setTranslatedText(response.translatedText);
        });
    };

    return (
        <div>
            <h1>Translation App</h1>
            <div id="google_translate_element"></div>
            <Input
                placeholder="Type text to translate"
                value={inputText}
                onChange={handleInputChange}
            />
            <div>
                <h2>Translated Text:</h2>
                <p>{translatedText}</p>
            </div>
        </div>
    );
}

export default Translation;
