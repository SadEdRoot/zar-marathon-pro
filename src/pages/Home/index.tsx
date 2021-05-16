import React from 'react';

import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

import s from './Home.module.scss';
import Parallax from "../../components/Parallax";
import Heading from "../../components/Heading";



const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading HeaderSize={3}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>

          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button color={`yellow`} onClick={() => console.log("### Button down")}>
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
