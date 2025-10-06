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
import SinglePortfolio from './pages/SinglePortfolio';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// ✅ Layout Wrapper Component
function LayoutWrapper({ children }) {
  const location = useLocation();

  // ✅ Define admin routes here
  const adminRoutes = ['/admin', '/addportfolio' , '/AddPortfolio'];

  // ✅ Check if current path starts with any admin route
  const isAdminPage = adminRoutes.some(path => location.pathname.startsWith(path));

  return (
    <>
      {/* Header & Footer ko admin pages me hide karo */}
      {!isAdminPage && <Header />}
      <div className="flex-1">{children}</div>
      {!isAdminPage && <Footer />}
    </>
  );
}


// ✅ Main App Component
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/addportfolio" element={<Admin />} />
            <Route path="/singleportfolio/:id" element={<SinglePortfolio />} />
          </Routes>
        </LayoutWrapper>
      </div>
    </BrowserRouter>
  );
}

export default App;
