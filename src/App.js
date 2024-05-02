// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SafraComponent from './components/SafraComponent';
import CustoProducaoComponent from './components/CustoProducaoComponent';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/safra" element={<SafraComponent />} />
        <Route exact path="/custo-producao" element={<CustoProducaoComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
