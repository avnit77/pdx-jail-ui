import { useState, useEffect } from 'react';
import { getTotalCurrentDetentions } from '../services/dataFetch';

const useTotalCurrentDetentions = () => {
  const [data, setData] = useState(NaN);

  const fetchTotalCurrentDetentions = () => {
    getTotalCurrentDetentions()
      .then(setData);
  };
  useEffect(fetchTotalCurrentDetentions, []);
  return { data };
};

export default useTotalCurrentDetentions;
