import React from 'react';
import {Footer, Blogs, Possibility, Features, WhatGPT3, Header } from './containers';
import {CAT, Brand, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CAT />
        <Blogs />
        <Footer />
    </div>
  )
}

export default App 