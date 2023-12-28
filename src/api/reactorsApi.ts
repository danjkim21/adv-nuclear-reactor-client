import { ReactorInterface } from '../types/reactors';
import axios from 'axios';

const API_URL = 'https://ardb.cyclic.app/api/';

export const getReactors = async (): Promise<ReactorInterface[]> => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

export const getReactorById = async (id: string): Promise<ReactorInterface> => {
  if (id === '') {
    throw new Error('Please enter a reactor name');
  }
  const response = await axios.get(`${API_URL}${id}`);
  return response.data;
};

export const getReactorByType = async (
  type: string
): Promise<ReactorInterface[]> => {
  const response = await axios.get(`${API_URL}categories/${type}`);
  return response.data;
};

export const getReactorTypes = async (): Promise<string[]> => {
  const response = await axios.get(`${API_URL}categories`);
  return response.data;
};
