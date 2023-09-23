import React from 'react';
import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import Posts from './Posts/posts'




function App() {
  return (
  <div className='body'>
          <Header/>
          <Banner/>
          <Posts/>
          
          
  </div>   
  );
}

export default App;
