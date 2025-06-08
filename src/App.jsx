import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

// Import all pages
import Home from './pages/Home';
import About from './pages/About';
import Accessories from './pages/Accessories';
// import Branch from './pages/Branch';
import Contact from './pages/Contact';
import Showroom from './pages/Showroom';
import SearchHeader from './Components/SearchHeader';
import Footer from './Components/Footer';

// Layout component with shared UI
const Layout = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <SearchHeader />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="accessories" element={<Accessories />} />
        
          <Route path="contact" element={<Contact />} />
          <Route path="showroom" element={<Showroom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
