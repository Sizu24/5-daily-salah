import React from "react";
import "./styles/styles.scss";
import Header from "./layout/Header";
import Hero from "./components/Hero";
import Wudu from "./components/Wudu";
import Salah from "./components/Salah";
import Info from "./components/Info";
import Footer from "./layout/Footer";
import Basics from "./components/Basics";

function App() {
  return (
  <>
    <Header />
    <main>
      <Hero />
      <Basics />
      <Wudu />
      <Salah />
      <Info />
    </main>
    <Footer />
  </>
  );
}

export default App;
