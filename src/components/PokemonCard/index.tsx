import React from 'react';
import Heading from "../Heading";

import s from './PokemonCard.module.scss';


interface PokeminCardProps {
  name: string
  img: string
  stats: {
    attack: number
    defense: number
  }
  types: string[]
}

const PokemonCard: React.FC<PokeminCardProps> = ({name, img, stats,types}) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size={4} className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>
              {stats.attack}
            </div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>
              {stats.defense}
            </div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {
            types.map((item) => (
                <span key={item} className={s.label}>{item}</span>
              ))
          }
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name as keyof JSX.ElementAttributesProperty} />
      </div>
    </div>
  );
};

export default PokemonCard;
