const fetchResumos = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/resumos');
      if (!response.ok) {
        throw new Error('Erro ao buscar resumos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export default fetchResumos;
  