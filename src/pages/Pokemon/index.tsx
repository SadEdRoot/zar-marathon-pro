import React from 'react';
import Heading from "../../components/Heading";

import s from './Pokemon.module.scss'


export interface PokemonProps {
  id: string | number
}
const Pokemon: React.FC<PokemonProps> = ({id}) => {
  const data = {
      "name_clean": "bulbasaur",
      "abilities": [
        "overgrow",
        "chlorophyll"
      ],
      "stats": {
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "special-attack": 65,
        "special-defense": 65,
        "speed": 45
      },
      "types": [
        "grass",
        "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      "name": "bulbasaur",
      "base_experience": 64,
      "height": 7,
      "id": 1,
      "is_default": true,
      "order": 1,
      "weight": 69
    };

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
              <img src={data.img} alt={data.name} />
            <div className={s.labelWrap}>
              {
                data.types.map((item) => (
                  <span key={item} className={s.label}>{item}</span>
                ))
              }
            </div>
          </div>
          <div className={s.cardData}>
            <Heading size={3} className={s.titleName}>
              {data.name}
            </Heading>
            <div>Generation 1</div>
            <div className={s.idWrap}>{data.id}</div>
            <div className={s.abilities}>
              Abilities
            </div>
            <div className={s.status}>
              Healthy Points
              1000000
              <div  className={s.healthBar}></div>
              <div>
                Experience
                1000000
                <div  className={s.expBar}></div>
              </div>
            </div>
            <div className={s.stats}>
              <div className={s.statItem}>
                <div className={s.statValue}>
                  {data.stats.attack}
                </div>
                Defence
              </div>
              <div className={s.statItem}>
                <div className={s.statValue}>
                  {data.stats.attack}
                </div>
                Attack
              </div>
              <div className={s.statItem}>
                <div className={s.statValue}>
                  {data.stats.attack}
                </div>
                Sp Attack
              </div>
              <div className={s.statItem}>
                <div className={s.statValue}>
                  {data.stats.attack}
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
