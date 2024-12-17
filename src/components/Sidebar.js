import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo1 from '../assets/logo1.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo1} alt="Logo" className="logo-img" /> 
      </div>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/getting-started">Primeros Pasos</Link></li>
        <details>
          <summary>Para Ecommerce</summary>
          <ul>
            <li><Link to="/api-integration">Integración API</Link></li>
            <li><Link to="/qr-crypto">Generar QR Crypto</Link></li>
          </ul>
        </details>
        <li><Link to="/plugins-ecommerce">Plugins para Ecommerce</Link></li>
        <li><Link to="/resources">Recursos Adicionales</Link></li>
        <li><Link to="/faq">Preguntas Frecuentes</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
