// import React from 'react';
import "./Home.css";
import Info from "./Info";
import ScrollDown from "./ScrollDown";
import Social from "./Social";

function Home() {
  return (
    <section className="hoeme section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img" />
          <Info />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
