//import logo from './logo.svg';
import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer.js";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Monterrey"/>
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;
