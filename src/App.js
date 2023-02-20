import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar} from './components';
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
        <Brand/> 
        <WhatGPT3/> 
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
      </div>
      <Footer/>
    </div>
  )
}

export default App