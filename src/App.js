import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  WhatBlipSolutions,
  Header,
  Features,
} from "./containers";
import { Brand, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatBlipSolutions />
      <Footer />
    </div>
  );
};

export default App;
