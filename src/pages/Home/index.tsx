import React, { useState, useEffect } from 'react';
import seedrandom from 'seedrandom';
import { Icon } from '@iconify/react';
import pokeballIcon from '@iconify/icons-gg/pokemon';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import axios from 'axios';
import { formatPrice } from '../../util/format';
import { usePokeball } from '../../hooks/PokeballContext';

import {
  Container,
  Content,
  NavigationHeader,
  PokemonList,
  Pagination,
} from './styles';

interface PokeAPIResponse {
  url: string;
}

interface PokemonType {
  type: {
    name: string;
  };
}
interface Pokemon {
  id: number;
  name: string;
  sprite: string;
  types: string[];
  price: number;
  priceFormatted: string;
  amount: number;
  subtotal: number;
  subtotalFormatted: string;
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
              const { id, name, sprites, types: pokeTypes } = res.data;
              const sprite = sprites.front_default;
              const types = pokeTypes.map((t: PokemonType) => t.type.name);
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
                types,
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
    <Container>
      <NavigationHeader>
        <h1>Pokémon</h1>
        <Pagination>
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
        </Pagination>
      </NavigationHeader>

      <Content>
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
    </Container>
  );
};

export default Home;
