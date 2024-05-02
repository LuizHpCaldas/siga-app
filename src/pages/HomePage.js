import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSeedling, FaMoneyBillAlt, FaUser, FaCog } from 'react-icons/fa'; // Importe os ícones necessários
import logo from '../assets/logo.png.png';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="nav-buttons">
        <Link to="/" className="nav-button">
          <FaHome className="icon" />
          Home
        </Link>
        <Link to="/safras" className="nav-button">
          <FaSeedling className="icon" />
          Safras
        </Link>
        <Link to="/custos-producao" className="nav-button">
          <FaMoneyBillAlt className="icon" />
          Custos de Produção
        </Link>
        <Link to="/usuarios" className="nav-button">
          <FaUser className="icon" />
          Usuários
        </Link>
        <Link to="/configuracoes" className="nav-button">
          <FaCog className="icon" />
          Configurações
        </Link>
      </div>
    </nav>
  );
};

export default HomePage;
