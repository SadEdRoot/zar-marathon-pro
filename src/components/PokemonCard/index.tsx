import React from 'react';
import Heading from "../Heading";

import s from './PokemonCard.module.scss';

interface PokeminCardProps {
  name: string
  img: string
}

const PokemonCard: React.FC<PokeminCardProps> = ({name, img}) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size={4} className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>
              52
            </div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>
              43
            </div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>Fire</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img}  />
      </div>
    </div>
  );
};

export default PokemonCard;
