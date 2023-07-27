import React from "react";
import "./styles/styles.scss";
import Header from "./layout/Header";
import Hero from "./components/Hero";
import Wudu from "./components/Wudu";
import Salah from "./components/Salah";
import Footer from "./layout/Footer";
import Basics from "./components/Basics";

function App() {
  return (
  <>
    <Header />
    <Hero />
    <Basics />
    <Wudu />
    <Salah />
    <Footer />
  </>
  );
}

export default App;
