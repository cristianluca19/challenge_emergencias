import { useQuery } from 'react-query';
import axios from 'axios';
import { ICharacter, IPeopleResponse } from '../type';

// Función para hacer la llamada a la API
const fetchPeople = async (): Promise<ICharacter[]> => {
  const { data } = await axios.get<IPeopleResponse>('https://swapi.dev/api/people');
  return data.results; 
};

// Custom hook usando React Query
export const usePeople = () => {
  return useQuery('people', fetchPeople);
};
