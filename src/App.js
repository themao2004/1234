import React from 'react';
import MyNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CardSection from './components/CardSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <HeroSection />
      <CardSection />
      <Footer />
    </div>
  );
}

export default App;
