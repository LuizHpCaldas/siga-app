import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import EstoqueComponent from '../components/EstoqueComponent';
import MovimentacoesComponent from '../components/MovimentacoesComponent';
import HistoricoItensComponent from '../components/HistoricoItensComponent';
import '../styles/SafraPage.css'; // Importe seu arquivo de estilos
import { FaWarehouse, FaExchangeAlt, FaHistory } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const SafraPage = () => {
  return (
    <div>
      <h1>Safra</h1>
      <nav className="tab-menu">
      <ul className="nav-links">
  <li>
    <Link to="/safra/estoque">
      <FaWarehouse className="icon" />
      Estoque
    </Link>
  </li>
  <li>
    <Link to="/safra/movimentacoes">
      <FaExchangeAlt className="icon" />
      Movimentações
    </Link>
  </li>
  <li>
    <Link to="/safra/historico-itens">
      <FaHistory className="icon" />
      Histórico de Itens
    </Link>
  </li>
</ul>
      </nav>
      <Routes>
        <Route path="/safra/estoque" element={<EstoqueComponent />} />
        <Route path="/safra/movimentacoes" element={<MovimentacoesComponent />} />
        <Route path="/safra/historico-itens" element={<HistoricoItensComponent />} />
      </Routes>
    </div>
  );
};

export default SafraPage;
