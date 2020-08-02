import React, { useState, useEffect } from 'react';
import {
  MdShoppingCart,
  MdNavigateBefore,
  MdNavigateNext,
} from 'react-icons/md';

import axios from 'axios';

import { usePokeball } from '../../hooks/PokeballContext';

import { Content, PokemonList, Pagination } from './styles';

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
  const [currentPageURL, setCurrentPageURL] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [nextPageURL, setNextPageURL] = useState('');
  const [previousPageURL, setPreviousPageURL] = useState('');
  const [page, setPage] = useState(1);
  const { handleCapturePokemon } = usePokeball();

  useEffect(() => {
    setLoading(true);
    async function loadPokemon(): Promise<void> {
      try {
        const apiResponse = await axios.get(currentPageURL);
        const { next, previous, results } = apiResponse.data;
        setNextPageURL(next);
        setPreviousPageURL(previous);
        const pokemonList: Pokemon[] = await Promise.all(
          results.map(
            async (item: PokeAPIResponse): Promise<Pokemon> => {
              const res = await axios.get(item.url);
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
        setPokemon(pokemonList);
        setLoading(false);
      } catch (err) {
        // Tratar a exceção
        console.log(err);
      }
    }
    loadPokemon();
  }, [currentPageURL]);

  const goToNextPage = (): void => {
    setPage(page + 1);
    setCurrentPageURL(nextPageURL);
  };

  const goToPreviousPage = (): void => {
    setPage(page - 1);
    setCurrentPageURL(previousPageURL);
  };

  return (
    <>
      <Content>
        <h1>Pokémon</h1>
        <Pagination>
          <div>
            {previousPageURL && (
              <button type="button" onClick={goToPreviousPage}>
                <MdNavigateBefore size={24} />
              </button>
            )}
            <span>Página {page}</span>
            {nextPageURL && (
              <button type="button" onClick={goToNextPage}>
                <MdNavigateNext size={24} />
              </button>
            )}
          </div>
        </Pagination>
      </Content>
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

              <button type="button" onClick={() => handleCapturePokemon(p)}>
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
