import { ReactorInterface } from '../types/reactors';

const API_URL = 'https://ardb.cyclic.app/api/';

export const getReactors = async (): Promise<ReactorInterface[]> => {
  const response = await fetch(`${API_URL}`);
  const data: ReactorInterface[] = await response.json();

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return data;
};

export const getReactorById = async (id: string): Promise<ReactorInterface> => {
  if (id === '') {
    throw new Error('Please enter a reactor name');
  }
  const response = await fetch(`${API_URL}${id}`);
  const data: ReactorInterface = await response.json();

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return data;
};

export const getReactorByType = async (
  type: string
): Promise<ReactorInterface[]> => {
  const response = await fetch(`${API_URL}categories/${type}`);
  const data: ReactorInterface[] = await response.json();

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return data;
};

export const getReactorTypes = async (): Promise<string[]> => {
  const response = await fetch(`${API_URL}categories`);
  const data: string[] = await response.json();

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return data;
};
