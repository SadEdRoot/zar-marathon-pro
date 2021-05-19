import React from 'react';
import Header from "../../components/Header";
import {A} from "hookrouter";
import cn from "classnames";
import s from './Pokedex.module.scss'

import pokemons from "./CardsData";
import PokemonCard from "../../components/PokemonCard";

interface PokedexProps {
  title?: string

}
const Pokedex: React.FC<PokedexProps> = ({title}) => {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.text}>
        800 Pokemons for you to choose your favorite
      </div>
      <div className={s.grid}>
        {
          pokemons.map(({name, img, stats,types}) => (
            <PokemonCard
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
