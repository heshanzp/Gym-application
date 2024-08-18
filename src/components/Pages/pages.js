import React from "react";
import '../../App.css'
import Hero from '../../components/Hero/Hero'
import Programs from '../../components/Programs/Programs'
import Reasons from '../../components/Reasons/Reasons'
import Plans from '../../components/Plans/Plans'
import Testimonials from '../../components/Testimonials/Testimonials'
import Join from '../../components/Join/Join'
import Footer from '../../components/Join/Join'

// import './App.css';
// import Hero from './components/Hero/Hero';
// import Programs from './components/Programs/Programs';
// import Reasons from './components/Reasons/Reasons';
// import Plans from './components/Plans/Plans';
// import Testimonials from './components/Testimonials/Testimonials';
// import Join from './components/Join/Join';
// import Footer from './components/Footer/Footer';

const Pages = () => {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Join/>
          <Footer/>

    </div>
  );
};

export default Pages