// import React from 'react';
import "./Home.css";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import Social from "./Social";

function Home() {
  return (
    <section className="hoeme section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img" />
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
