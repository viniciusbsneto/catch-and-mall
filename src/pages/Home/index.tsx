import React, { useState, useEffect } from 'react';
import { MdShoppingCart } from 'react-icons/md';

import api from '../../services/api';

import { PokemonList } from './styles';

interface PokeAPIResponse {
  url: string;
}
interface Pokemon {
  id: number;
  name: string;
  sprite: string;
}

const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function loadPokemon(): Promise<void> {
      try {
        const apiResponse = await api.get('pokemon');
        const { results } = apiResponse.data;
        const pokemonList: Pokemon[] = await Promise.all(
          results.map(
            async (item: PokeAPIResponse): Promise<Pokemon> => {
              const res = await api.get(item.url);
              const { id, name, sprites } = res.data;
              const sprite = sprites.front_default;
              const newPokemon = {
                id,
                name,
                sprite,
              };
              return newPokemon;
            }
          )
        );
        setPokemon([...pokemon, ...pokemonList]);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    loadPokemon();
  }, []);

  return (
    <>
      <h1>Pokémon</h1>
      {loading ? (
        <span>Carregando...</span>
      ) : (
        <PokemonList>
          {pokemon.map(p => (
            <li key={p.id}>
              <img src={p.sprite} alt={p.name} />
              <strong>
                {p.id}. {p.name}
              </strong>
              <span>円129,90</span>

              <button type="button">
                <div>
                  <MdShoppingCart size={16} color="#FFF" /> 3
                </div>
                <span>CAPTURAR POKÉMON</span>
              </button>
            </li>
          ))}
        </PokemonList>
      )}
    </>
  );
};

export default Home;
