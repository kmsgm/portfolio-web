/* eslint-disable no-console */
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';

import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import ScrollUp from './components/scrollup/ScrollUp';

// interface DataProps {
//   title: string;
//   subtitle: string;
//   description: string;
// }

// interface TotalDataProps {
//   home: DataProps;
//   about: DataProps;
// }

function App() {
  // const [data, setData] = useState<TotalDataProps>();
  // useEffect(() => {
  //   const fetchHomeData = async () => {
  //     try {
  //       const response = await axios.get('http://127.0.0.1:8000/api');
  //       setData(response.data);
  //     } catch (error: any) {
  //       toast.error(`${error.message}`);
  //     }
  //   };

  //   fetchHomeData();
  // }, []);

  // console.log(data?.home);
  // console.log(data?.about);

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
      {/* <Toaster /> */}
    </>
  );
}

export default App;
