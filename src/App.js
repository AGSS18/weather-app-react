import React from "react";
import Weather from "./Weather";
import Footer from "./Footer.js";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';


function App() {

  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Monterrey"/>
        <p className="note"><em>**To change units click °C or °F**</em></p>
        <Footer />
      </div>
    </div>
  );
}

export default App;
