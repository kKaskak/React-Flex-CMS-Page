import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Privacy, Contact } from "./containers";
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
        </Routes>
      </div>
    </div>
  );
};

export default App;
