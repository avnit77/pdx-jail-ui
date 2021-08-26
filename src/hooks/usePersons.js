import { useState, useEffect } from 'react';
import { getPersons } from '../services/getPersons';
import { useLocation } from 'react-router-dom';

const usePersons = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const searchParamsString = searchParams.toString();
  const [persons, setPersons] = useState([]);

  const fetchPersons = (params) => {
    getPersons(params)
      .then(persons => {
        setPersons(persons);
      });
  };
  useEffect(() => {
    fetchPersons(searchParams);
  }, [searchParamsString]);
  return { persons };
};

export default usePersons;
