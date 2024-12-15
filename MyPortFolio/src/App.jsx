import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import About from './components/About';
import MyServices from './components/MyServices';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <NavBar /> {/* Always visible */}

      <Routes>
        <Route path="/" element={<Layout />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/services" element={<MyServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Layout />} /> 


      </Routes>
    </div>
  );
};

export default App;
