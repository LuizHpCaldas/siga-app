// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Importe a página HomePage
import SafraPage from './pages/SafraPage'; // Importe a página SafraPage
import NavBar from './components/NavBar'; // Importe o componente NavBar

const App = () => {
  return (
    <Router>
      <NavBar />
       {/* Renderize o componente NavBar aqui */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Página inicial */}
        <Route path="/safra" element={<SafraPage />} /> {/* Página de Safra */}
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
    </Router>
  );
};

export default App;
