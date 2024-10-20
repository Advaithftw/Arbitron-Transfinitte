import React, { useRef } from 'react';
import "./App.css";
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";
import { CTA, Brand, Navbar } from "./components";

function App() {
  const ctaRef = useRef(null); 

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      
      <Possibility ctaRef={ctaRef} /> 
      <Features />
      <CTA ref={ctaRef} /> 
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
