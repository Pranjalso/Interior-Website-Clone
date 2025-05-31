import React from 'react';
import Navbar from './Components/Navbar';
import { main } from 'framer-motion/client';
import Hero from './Components/Hero';
import Brand from './Components/Brand';
import Services from './Components/Services';
import Banner from './Components/Banner';
import Banner2 from './Components/Banner2';
import Testinomials from './Components/Testinomials';
import NewsLetter from './Components/NewsLetter';
import Footer from './Components/Footer';


const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Brand/>
      <Services/>
      <Banner/>
      <Banner2/>
      <Testinomials/>
      <NewsLetter/>
      <Footer/>
    </main>
  )
}

export default App;
