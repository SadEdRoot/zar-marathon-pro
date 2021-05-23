import React, {useEffect, useState} from 'react';
import s from './Pokedex.module.scss'

import PokemonCard from "../../components/PokemonCard";
import req from "../../utils/request";


const usePokemons = () => {
  const [data, setData] = useState<DataInt>({count: 0, limit: 0, offset: 0, pokemons: [], total: 0});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const result = await req('getPokemons');
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getPokemons()
  }, []);

  return {
    data,
    isLoading,
    isError
  }
}

interface PokemonsInt {
  'name_clean': string
  'abilities': string[]
  'stats': {
    "hp": number
    "attack": number
    "defense": number
    "special-attack": number
    "special-defense": number
    "speed": number
  }
  'types': string[]
  'img': string
  'name': string
  'base_experience': number
  'height': number
  'id': number
  'is_default': boolean
  'order': number
  'weight': number
}

interface DataInt {
  "total": number
  "count": number
  "offset": number
  "limit": number
  "pokemons": PokemonsInt[]
}



const Pokedex: React.FC = () => {
  const {
    data,
    isLoading,
    isError
  } = usePokemons()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Something happened...</div>
  }

  return (
    <div className={s.root}>
      <div className={s.text}>
        {data.total} Pokemons for you to choose your favorite
      </div>
      <div className={s.grid}>
        {
          data.pokemons.map(({name, img, stats,types, id}) => (
            <PokemonCard
              key={id}
              name={name}
              img={img}
              stats={stats}
              types={types}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Pokedex;
