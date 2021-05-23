import React from 'react';
import {navigate} from 'hookrouter';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Button from '../../components/Button';

import s from './Home.module.scss';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';
import {LinkEnum} from "../../routes";

const HomePage = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading size={1}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>

          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button
            color="green"
            onClick={() => navigate(LinkEnum.POKEDEX)}>
            See pokemons
          </Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>

      </Layout>
    </div>
  );
};

export default HomePage;
