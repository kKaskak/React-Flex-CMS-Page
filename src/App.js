import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Privacy, Contact } from "./containers";

import "./App.css";

const App = () => {
  return (
    <div className={`App`}>
      <div className="gradient__bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
