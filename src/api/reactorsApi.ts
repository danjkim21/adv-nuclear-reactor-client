const API_URL = 'https://ardb.cyclic.app/api/';

export const getReactors = async () => {
  const response = await fetch(`${API_URL}`);
  const data = await response.json();

  return data;
};
