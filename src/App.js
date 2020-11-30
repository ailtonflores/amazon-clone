import React from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";

function App() {
  return (
    //BEM convention
    <div className="app">
      <h1>Hi Clevers Programmers, let's build the Amazon Store</h1>
    
    <Header />
    <Home />

    </div>
  );
}

export default App;
