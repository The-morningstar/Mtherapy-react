import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Call from "./components/Call";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Call />
      <Footer />
    </>
  );
}

export default App;
