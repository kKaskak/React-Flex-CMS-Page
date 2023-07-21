import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Privacy, Contact, Pricing } from "./containers";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (value) => {
    setInputValue(value);
  };
  return (
    <div className={`App`}>
      <div className="gradient__bg">
        <Routes>
          <Route
            path="/"
            element={<Home onButtonClick={handleButtonClick} />}
          />
          <Route
            path="/contact"
            element={<Contact inputValue={inputValue} />}
          />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
