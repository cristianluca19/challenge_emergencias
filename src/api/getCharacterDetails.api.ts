import { useQuery } from 'react-query';
import axios from 'axios';
import { IFilm, IPlanet, IVehicle} from '../type';

// Función para traer el planeta
const fetchPlanet = async (planetUrl: string): Promise<IPlanet> => {
  const { data } = await axios.get<IPlanet>(planetUrl);
  return { name: data.name };
};

// Función para traer las películas
const fetchFilms = async (filmUrls: string[]): Promise<IFilm[]> => {
  const films = await Promise.all(
    filmUrls.map(async (filmUrl) => {
      const { data } = await axios.get<IFilm>(filmUrl);
      return { title: data.title, episode_id: data.episode_id, release_date: data.release_date };
    })
  );
  return films || [];
};

// Función para traer los vehículos
const fetchVehicles = async (vehicleUrls: string[]): Promise<IVehicle[]> => {
  const vehicles = await Promise.all(
    vehicleUrls.map(async (vehicleUrl) => {
      const { data } = await axios.get<IVehicle>(vehicleUrl);
      return { name: data.name, model: data.model, max_atmosphering_speed: data.max_atmosphering_speed, vehicle_class: data.vehicle_class};
    })
  );
  return vehicles || [];
};

// Función para traer las naves estelares
const fetchStarships = async (starshipUrls: string[]): Promise<IVehicle[]> => {
  const starships = await Promise.all(
    starshipUrls.map(async (starshipUrl) => {
      const { data } = await axios.get<IVehicle>(starshipUrl);
      return { name: data.name, model: data.model, max_atmosphering_speed: data.max_atmosphering_speed, vehicle_class: data.vehicle_class};
    })
  );
  return starships || [];
};

// Hook combinado que trae toda la información
export const useCharacterDetails = (character: any) => {
  return useQuery(['characterDetails', character.url], async () => {
    const [planet, films, vehicles, starships] = await Promise.all([
      fetchPlanet(character.homeworld),     
      fetchFilms(character.films),           
      fetchVehicles(character.vehicles),     
      fetchStarships(character.starships),   
    ]);

    // Retornamos toda la data junta
    return { planet, films, vehicles, starships };
  });
};
