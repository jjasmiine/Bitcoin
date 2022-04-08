import React from "react";
import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import Featured from './components/Featured'
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <About />
      <Footer />
    </div>
  );
}

export default App;
