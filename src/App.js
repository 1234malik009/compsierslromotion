import React from 'react';
import './App.css';
import MainContent from './components/MainContent';
import MainHeader from './components/MainHeader';
import GoogleTranslater from "./components/GoogleTranslator";

function App() {
    return (
        <div className='body'>
            <MainHeader/>
            <div style={{position:'absolute',right:'10px',top:'-20px'}}>
                <GoogleTranslater/>
            </div>
            <MainContent/>
        </div>
    );
}

export default App;
