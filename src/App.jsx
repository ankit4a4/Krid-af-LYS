import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

import { ToastContainer } from 'react-toastify';
import SinglePortfolio from './pages/SinglePortfolio';


function LayoutWrapper({ children }) {
  const location = useLocation();

  // check if current route is admin page
  const isAdminPage = location.pathname === '/admin';

  return (
    <>
      {!isAdminPage && <Header />}
      <div className="flex-1">{children}</div>
      {!isAdminPage && <Footer />}
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <ToastContainer />
        <LayoutWrapper>
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/singleportfolio/:id" element={<SinglePortfolio />} />
          </Routes>
        </LayoutWrapper>
      </div>
    </BrowserRouter>
  );
}

export default App;
