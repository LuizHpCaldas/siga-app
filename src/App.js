// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Importe a página HomePage
import SafraPage from './pages/SafraPage'; // Importe a página SafraPage
import NavBar from './components/NavBar'; // Importe o componente NavBar
import MovimentacoesComponent from './components/MovimentacoesComponent';

const App = () => {
  return (
    <Router>
      <NavBar />
       {/* Renderize o componente NavBar aqui */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Página inicial */}
        <Route path="/safra" element={<SafraPage />} /> {/* Página de Safra */}
        <Route path="/movimentacoes" element={<MovimentacoesComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
