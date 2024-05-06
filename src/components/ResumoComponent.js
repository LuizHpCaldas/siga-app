import axios from 'axios';
import React, { useState, useEffect } from 'react';
import fetchResumos from '../services/ResumoService';

const ResumoComponent = () => {
  const [resumos, setResumos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchResumos();
        setResumos(data);
      } catch (error) {
        console.error('Erro ao buscar resumos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Resumos</h2>
      <ul>
        {resumos.map((resumo) => (
          <li key={resumo.id}>{resumo.titulo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumoComponent;
