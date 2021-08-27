export const getDetentions = (params) => {
  return fetch(`https://jail-data-pdx.herokuapp.com/api/v1/detentions?${params.toString()}`)
    .then(res => res.json());
};

export const getDetention = (id) => {
  return fetch(`https://jail-data-pdx.herokuapp.com/api/v1/detentions/${id}`)
    .then(res => res.json());
};
