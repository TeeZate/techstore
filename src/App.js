import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import ProductsSection from './components/home/ProductsSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProductsSection />
      <Footer />
    </div>
  );
}

export default App;
