import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSeedling, FaMoneyBillAlt, FaUser, FaCog } from 'react-icons/fa';
import '../styles/NavBar.css';
import logo from '../assets/logo.png.png'; // Verifique se o caminho do arquivo da logo está correto

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Links para as diferentes seções */}
      <ul className="nav-buttons">
        <li>
          <Link to="/" className="nav-button">
            <FaHome className="icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/safra" className="nav-button">
            <FaSeedling className="icon" />
            Safra
          </Link>
        </li>
        <li>
          <Link to="/movimentacoes" className="nav-button">
            <FaMoneyBillAlt className="icon" />
            Movimentações
          </Link>
        </li>
        <li>
          <Link to="/perfil" className="nav-button">
            <FaUser className="icon" />
            Perfil
          </Link>
        </li>
        <li>
          <Link to="/configuracoes" className="nav-button">
            <FaCog className="icon" />
            Configurações
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
