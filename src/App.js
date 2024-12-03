import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
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
