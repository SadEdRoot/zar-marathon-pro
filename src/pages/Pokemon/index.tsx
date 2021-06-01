import React from 'react';
import Heading from "../../components/Heading";

import s from './Pokemon.module.scss'
import useData from "../../hook/getData";
import {PokemonsInt} from "../../interface/pokemon";


export interface PokemonProps {
  id: string | number
}
const Pokemon: React.FC<PokemonProps> = ({id}) => {
  const {data, isLoading } = useData<PokemonsInt>('getPokemon', {id});

  if (isLoading) {
    return (<>Loading ...</>)
  }


  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <button type="button" className={s.close}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="35.4683" height="9.21254" rx="3" transform="matrix(0.705326 0.708883 -0.705326 0.708883 6.5 0.328125)" fill="#212121"/>
            <rect width="35.4683" height="9.21254" rx="3" transform="matrix(-0.705326 0.708883 -0.705326 -0.708883 31.5156 6.53125)" fill="#212121"/>
          </svg>
        </button>
        <div className={s.card}>
          <div className={s.cardPicture}>

              <img src={data && data.img || ''} alt={data && data.name || 'Not found'} />
            <div className={s.labelWrap}>
              {data && data.types.map((item) => (
                  <span key={item} className={s.label}>{item}</span>
                ))}
            </div>
          </div>
          <div className={s.cardData}>
            <Heading size={3} className={s.titleName}>
              {data && data.name}
            </Heading>
            <div>Generation 1</div>
            <div className={s.idWrap}>{data && data.id}</div>
            <div className={s.abilities}>
              Abilities
            </div>
            <div className={s.status}>
              Healthy Points
              1000000
              <div  className={s.healthBar} />
              <div>
                Experience
                1000000
                <div  className={s.expBar} />
              </div>
            </div>
            <div className={s.stats}>
              <div className={s.statItem}>
                <div className={s.statValue}>
                  {data && data.stats.attack}
                </div>
                Defence
              </div>
              <div className={s.statItem}>
                <div className={s.statValue}>
                  {data && data.stats.attack}
                </div>
                Attack
              </div>
              <div className={s.statItem}>
                <div className={s.statValue}>
                  {data && data.stats.attack}
                </div>
                Sp Attack
              </div>
              <div className={s.statItem}>
                <div className={s.statValue}>
                  {data && data.stats.attack}
                </div>
                Sp Defence
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
