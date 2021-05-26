import React from 'react';
import Heading from "../Heading";

import s from './PokemonCard.module.scss';
import {PokemonsInt} from "../../interface/pokemon";


interface PokeminCardProps {
  data: PokemonsInt
}

const PokemonCard: React.FC<PokeminCardProps> = ({data}) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size={4} className={s.titleName}>
          {data.name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>
              {data.stats.attack}
            </div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>
              {data.stats.defense}
            </div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {
            data.types.map((item) => (
                <span key={item} className={s.label}>{item}</span>
              ))
          }
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={data.img} alt={data.name as keyof JSX.ElementAttributesProperty} />
      </div>
    </div>
  );
};

export default PokemonCard;
