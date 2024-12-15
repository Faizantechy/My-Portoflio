import React from 'react';
import HeroSection from './HeroSection';
import About from './About';
import Experience from './Experience';
import MyServices from './MyServices';
import MyLatestWork from './MyLatestWork';
import Contact from './Contact';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <About />
      <Experience />
      <MyServices />
      <MyLatestWork />
      <Contact/>

      <Footer/>
    </div>
  );
};

export default Layout;
