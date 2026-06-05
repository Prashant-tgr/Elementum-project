import { useState } from 'react'
import "./App.css"

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Progress from "./components/Progress";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";


function App() {
 

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Progress/>
      <Services/>
      <Testimonials/>
      <Newsletter/>
      


    </>
  )
}

export default App;
