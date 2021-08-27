export const getPersons = (params) => {
  return fetch(`https://jail-data-pdx.herokuapp.com/api/v1/persons?${params.toString()}`)
    .then(res => res.json());
};
