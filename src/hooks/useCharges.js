import { getCharges } from '../services/getCharges';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useCharges = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const option = searchParams.get('option');
  const [charges, setCharges] = useState([]);

  useEffect(() => {
    if(option) {
      getCharges(option)
        .then((res) => {
          setCharges(res);
        });
    }
  }, [option]);
  return charges;
};

export default useCharges;
