import React, {useState} from 'react';
import s from './Pokedex.module.scss'

import PokemonCard from "../../components/PokemonCard";
import useData from "../../hook/getData";
import {IPokemon} from "../../interface/pokemon";
import useDebounce from "../../hook/useDebounce";

interface IQuery {
  name?: string
}

const Pokedex: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 1000)

  const {
    data,
    isLoading,
    isError
  } = useData<IPokemon>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state:IQuery) => ({
      ...state,
      name: e.target.value,
    }))
  }

  if (isError) {
    return <div>Something happened...</div>
  }

  return (
    <div className={s.root}>
      <div className={s.text}>
        {!isLoading && data && data.total} Pokemons for you to choose your favorite
      </div>
      <div>
        <input className={s.search} type="text" value={searchValue} onChange={handleSearchChange} placeholder="Encuentra tu pokémon..."/>
      </div>
      <div className={s.grid}>
        {
          !isLoading && data && data.pokemons.map((pokemonData) => (
            <PokemonCard
              key={pokemonData.id}
              data={pokemonData}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Pokedex;
