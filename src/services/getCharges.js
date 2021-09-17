export const getCharges = (option) => {
  return fetch(
    `https://jail-data-pdx.herokuapp.com/api/v1/countChargesBy${option}`
  ).then((res) => res.json());
};

//to do: move services to context wrapper
