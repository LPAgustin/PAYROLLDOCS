import React from 'react';
import './Header.css';
import logo2 from '../assets/logo2.png'; // Asegúrate de tener el logo en esta ruta

function Header({ isSidebarCollapsed }) {
  return (
    <header className={`header ${isSidebarCollapsed ? 'collapsed-sidebar' : ''}`}>
      <div className="header-content">
        <h1 className="header-title">Payroll Crypto API Documentation</h1>
        <img src={logo2} alt="Whapy Logo" className="header-logo" />
      </div>
    </header>
  );
}

export default Header;
