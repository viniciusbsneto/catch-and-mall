import React, { useState, useEffect, useContext } from 'react';
import seedrandom from 'seedrandom';
import { Icon } from '@iconify/react';
import pokeballIcon from '@iconify/icons-gg/pokemon';

import axios from 'axios';
import { ThemeContext } from 'styled-components';
import { formatPrice } from '../../util/format';
import { usePokeball } from '../../hooks/pokeball';

import { Content, NavigationHeader, PokemonList } from './styles';

interface PokeAPIResponse {
  pokemon: {
    url: string;
  };
}

interface Pokemon {
  id: number;
  name: string;
  sprite: string;
  price: number;
  priceFormatted: string;
  amount: number;
  subtotal: number;
  subtotalFormatted: string;
}

const Home: React.FC = () => {
  const [pokemonState, setPokemonState] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const { handleCapturePokemon } = usePokeball();
  const { title } = useContext(ThemeContext);

  useEffect(() => {
    setLoading(true);
    async function loadPokemon(): Promise<void> {
      try {
        const apiResponse = await axios.get(
          `https://pokeapi.co/api/v2/type/${title}`
        );
        const { pokemon } = apiResponse.data;

        const pokemonList: Pokemon[] = await Promise.all(
          pokemon.map(
            async (item: PokeAPIResponse): Promise<Pokemon> => {
              const res = await axios.get(item.pokemon.url);
              const { id, name, sprites } = res.data;
              const sprite = sprites.front_default;
              const rng = seedrandom(name);
              const price = rng() * 100;
              const priceFormatted = formatPrice(price);
              const amount = 0;
              const subtotal = price * amount;
              const subtotalFormatted = formatPrice(subtotal);
              const newPokemon = {
                id,
                name,
                sprite,
                price,
                priceFormatted,
                amount,
                subtotal,
                subtotalFormatted,
              };
              return newPokemon;
            }
          )
        );
        setPokemonState(pokemonList);
        setLoading(false);
      } catch (err) {
        throw new Error(
          `could not load Pokémon from https://pokeapi.co/api/v2/type/${title}`
        );
      }
    }
    loadPokemon();
  }, [title]);

  return (
    <>
      <NavigationHeader>
        <h1>Pokémon</h1>
      </NavigationHeader>

      <Content>
        {loading ? (
          <span>Carregando...</span>
        ) : (
          <PokemonList>
            {pokemonState.map(p => (
              <li key={p.id}>
                <img src={p.sprite} alt={p.name} />
                <strong>{p.name}</strong>
                <span>{p.priceFormatted}</span>
                <button type="button" onClick={() => handleCapturePokemon(p)}>
                  <div>
                    <Icon icon={pokeballIcon} height="22" color="white" />
                  </div>
                  <span>CAPTURAR POKÉMON</span>
                </button>
              </li>
            ))}
          </PokemonList>
        )}
      </Content>
    </>
  );
};

export default Home;
