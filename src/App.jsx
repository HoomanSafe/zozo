import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Tokenomics from "./Components/Tokenomics";
import Map from "./Components/Map";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-black text-white font-secondary min-h-screen w-full">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
