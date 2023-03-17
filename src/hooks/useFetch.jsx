import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.get(endpoint);
    setData(response.data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
    //es inportante el array vacio para no hacer peticiones infinitos []
  }, []);
  return data;
};

export default useFetch;
