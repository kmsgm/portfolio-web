// import React from 'react';
import "./Home.css";
import Info from "./Info";
import ScrollDown from "./ScrollDown";
import Social from "./Social";
import { TranslationProps } from "../../interface/interface";

function Home({ language }: TranslationProps) {
  return (
    <section className="hoeme section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img" />
          <Info language={language} />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
