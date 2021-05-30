import getUrlWithParamsConfig from "./getUrlWithParamsConfig";

describe('getUrlWithParamsConfig', () => {

  test('Должна принимать два агрумента getPokemons и пустой объект на выходе получить объект с полями', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {}
      },
      body: {}
    })
  });

  test('Должна принимать два агрумента getPokemons и объект c полем name на выходе получить объект с полями', () => {
    const url = getUrlWithParamsConfig('getPokemons', {name: 'Pikachu'});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {name: 'Pikachu'}
      },
      body: {}
    })
  });

  test('Должна принимать два агрумента getPokemon и {id: 25} на выходе получить объект с полями protocol, host, pathname и пустым query', () => {
    const url = getUrlWithParamsConfig('getPokemon', {id: 25});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {}
      },
      body: {}
    })
  });
});
