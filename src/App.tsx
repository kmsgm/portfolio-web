import { useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import ScrollUp from "./components/scrollup/ScrollUp";

function App() {
  const [language, setLanguage] = useState<string>("KOR");

  const handleOnClick = () => {
    if (language === "KOR") {
      setLanguage("ENG");
    } else {
      setLanguage("KOR");
    }
  };

  return (
    <>
      <Header language={language} handleOnClick={handleOnClick} />
      <main className="main">
        <Home language={language} />
        <About language={language} />
        <Projects language={language} />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
