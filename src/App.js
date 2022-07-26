import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  WhatBlipSolutions,
  Header,
  Features,
} from "./containers";
import { Brand, Contact, Navbar } from "./components";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import MainHeader from "./containers/mainHeader/MainHeader";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./secrets/firebaseConfig";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const App = () => {

  return (
    <BrowserRouter>
    <div className="App">
      
      <div className="gradient__bg">
        <Navbar />
        
        <Routes>

          <Route path="/" element={<MainHeader />}/> 
          <Route path="/contact" element={<Contact />}/> 
        </Routes>
        
      </div>
      
      <Footer />
    </div>
    </BrowserRouter>
  );
};

export default App;
