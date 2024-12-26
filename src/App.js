import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import APIIntegration from './pages/APIIntegration';
import QRCrypto from './pages/QRCrypto';
import PluginsEcommerce from './pages/PluginsEcommerce';
import Resources from './pages/Resources';
import FAQ from './pages/FAQ';
import './App.css';

function App() {
  const isMobile = window.innerWidth <= 768; // Detecta si el ancho es de un dispositivo móvil

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          {/* Renderiza el header solo si no es móvil */}
          {!isMobile && <Header />}
          <Routes>
            {/* Redirige a "Inicio" por defecto */}
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/api-integration" element={<APIIntegration />} />
            <Route path="/qr-crypto" element={<QRCrypto />} />
            <Route path="/plugins-ecommerce" element={<PluginsEcommerce />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
