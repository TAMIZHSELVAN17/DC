import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Import all pages
import Home from './pages/Home';
import About from './pages/About';
import Accessories from './pages/Accessories';
import Branch from './pages/Branch';
import Contact from './pages/Contact'
import Showroom from './pages/Showroom';
import SearchHeader from './Components/SearchHeader';
import Footer from './Components/Footer';




const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <SearchHeader />
        <Navbar />
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/branch" element={<Branch />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/showroom" element={<Showroom />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
