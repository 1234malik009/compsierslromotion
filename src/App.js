import React from 'react';
import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import DropdownButton from 'antd/es/dropdown/dropdown-button';



function App() {
  return (
  <div className='body'>
          <Header/>
          <Banner/>
          
  </div>   
  );
}

export default App;
