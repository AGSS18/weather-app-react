//import logo from './logo.svg';
import React from "react";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer.js";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

function App() {
  return (
    <div className="App">
        <Search />
        <Weather />
        <Forecast />
        <Footer />
    </div>
  );
}

export default App;
