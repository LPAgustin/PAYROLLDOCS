import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo1 from '../assets/logo1.png';

function Sidebar() {
  // Estado para controlar la visibilidad del sidebar
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      {/* Botón Hamburguesa */}
      <button className="hamburger" onClick={() => setIsActive(!isActive)}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isActive ? 'active' : ''}`}>
        <div className="sidebar-logo">
          <img src={logo1} alt="Logo" className="logo-img" />
        </div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/getting-started">Primeros Pasos</Link>
          </li>
          <li>
            <Link to="/api-integration">Integración de API</Link>
          </li>
          <li>
            <Link to="/qr-crypto">QR Crypto</Link>
          </li>
          <li>
            <Link to="/resources">Recursos</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
