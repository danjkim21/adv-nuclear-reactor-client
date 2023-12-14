import { ReactorInterface } from '../types/reactors';

const API_URL = 'https://ardb.cyclic.app/api/';

export const getReactors = async () => {
  const response = await fetch(`${API_URL}`);
  const data: ReactorInterface[] = await response.json();

  return data;
};

export const getReactorById = async (id: string) => {
  const response = await fetch(`${API_URL}${id}`);
  const data: ReactorInterface = await response.json();

  return data;
};

export const getReactorByType = async (type: string) => {
  const response = await fetch(`${API_URL}categories/${type}`);
  const data: ReactorInterface[] = await response.json();

  return data;
};

export const getReactorTypes = async () => {
  const response = await fetch(`${API_URL}categories`);
  const data: string[] = await response.json();

  return data;
};
