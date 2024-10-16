import { ReactNode } from "react";

export type ICharacter = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
  }
  
  export type IPeopleResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: ICharacter[];
  }

  // En este type los asigne con "any" a 3 propiedades porque era complejo tipar el motion y no queria perder tiempo en eso
  export type IMotionBoxProps = {
    children: ReactNode; 
    initial?: any;
    animate?: any; 
    transition?: any; 
    className?: string;
  }

  export type IHomeProps = {
    characters: ICharacter[];
  }

  export type ICardDetailProps = {
    character: ICharacter;
    checked: boolean;
  }

  export type IFilm = {
    title: string;
    episode_id: number;
    release_date: string;
  }
  
  export type IPlanet = {
    name: string;
  }

  export type IVehicle = {
    name: string;
    model: string;
    max_atmosphering_speed: string;
    vehicle_class: string;
  }
  