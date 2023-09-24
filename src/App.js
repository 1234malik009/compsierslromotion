import React from 'react';
import './App.css';
import MainContent from './components/MainContent';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className='body'>
        <MainHeader />
        <MainContent/>
    </div>   
  );
}

export default App;
