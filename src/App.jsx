import React from "react";
import "./styles/styles.scss";
import Header from "./layout/Header";
import Hero from "./layout/Hero/";
import Wudu from "./components/Wudu/Wudu";
import Salah from "./components/Salah/Salah";
import Info from "./components/Info/Info";
import Footer from "./layout/Footer";
import Basics from "./components/Basics/Basics";

import { ThemeProvider } from "./components/Salah/ThemeContext";
console.log("Bismillahir rahmanir rahim");

function App() {
  return (
  <ThemeProvider>
    <Header />
    <main>
      <Hero />
      <Basics />
      <Wudu />
      <Salah />
      <Info />
    </main>
    <Footer />
  </ThemeProvider>
  );
}

export default App;
