import React from 'react';
import './Header.css';
import logo2 from '../assets/logo2.png';

function Header() {
  return (
    <header className="header">
      <h1>Payroll Crypto API Documentation</h1>
      <div className="header-logo">
        <img src={logo2} alt="Logo" className="logo-img" />
      </div>
    </header>
  );
}

export default Header;
