import { useState, useEffect } from 'react';
import { getDetention } from '../services/getDetentions';

const useDetention = () => {
  const [detention, setDetention] = useState();
  const detentionId = detention && detention._id;

  const fetchDetention = (id) => {
    if(id) {
      getDetention(id)
        .then(detention => {
          setDetention(detention);
        });
    }
  };
  useEffect(() => fetchDetention(detentionId), [detentionId]);
  return { detention, fetchDetention };
};

export default useDetention;
