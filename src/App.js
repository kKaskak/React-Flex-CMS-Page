import React, { useState, useEffect } from "react";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";

import { CTA, Brand, Navbar } from "./components";
import "./App.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const checkDocumentLoaded = () => {
      setIsLoaded(true);
    };
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      checkDocumentLoaded();
    } else {
      document.addEventListener("DOMContentLoaded", checkDocumentLoaded);
    }
    return () => {
      document.removeEventListener("DOMContentLoaded", checkDocumentLoaded);
    };
  }, []);

  return (
    <div className={`App ${isLoaded ? "loaded" : ""}`}>
      <div className="gradient__bg">
        <Navbar />
        {isLoaded && (
          <>
            <Header />
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
          </>
        )}
      </div>
      {isLoaded && <Footer />}
    </div>
  );
};

export default App;
