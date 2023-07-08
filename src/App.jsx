import "./styles/styles.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Wudu from "./components/Wudu";
import Salah from "./components/Salah";
import Footer from "./components/Footer";
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
