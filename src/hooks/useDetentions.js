import { useState, useEffect } from 'react';
import { getDetentions } from '../services/getDetentions';
import { useLocation } from 'react-router-dom';

const useDetentions = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const searchParamsString = searchParams.toString();
  const [detentions, setDetentions] = useState([]);

  const fetchDetentions = (params) => {
    getDetentions(params)
      .then(detentions => {
        setDetentions(detentions);
      });
  };
  useEffect(() => fetchDetentions(searchParams), [searchParamsString]);
  return { detentions };
};

export default useDetentions;
