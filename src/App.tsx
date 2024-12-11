import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reservations from './components/Reservations';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <Reservations />
    </div>
  );
}

export default App;