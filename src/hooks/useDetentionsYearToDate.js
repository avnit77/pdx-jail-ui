import { useState, useEffect } from 'react';
import { getDetentionsYearToDate } from '../services/dataFetch';

const useDetentionsYearToDate = () => {
  const [data, setData] = useState(NaN);

  const fetchDetentionsYearToDate = () => {
    getDetentionsYearToDate()
      .then(setData);
  };
  useEffect(fetchDetentionsYearToDate, []);
  return { data };
};

export default useDetentionsYearToDate;
