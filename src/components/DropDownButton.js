// import React, { useEffect } from 'react';
// import LanguageContext from './../LanguageContext/LanguageContext';

// const googleTranslateElementInit = () => {
//   new window.google.translate.TranslateElement(
//     {
//       pageLanguage: 'en',
//       autoDisplay: false,
//     },
//     'google_translate_element'
//   );
// };

// const App = () => {
//   useEffect(() => {
//     var addScript = document.createElement('script');
//     addScript.setAttribute('src', 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
//     document.body.appendChild(addScript);
//   }, []);

//   const handleTranslateClick = () => {
//     googleTranslateElementInit(); // Call the initialization function when the div is clicked
//   };

//   return (<>

//     <button className='translate' id='google_translate_element'  onClick={handleTranslateClick}>
//       Choose Language..!
//     </button>
//   </>
    
//   );
// };

// export default App;
