import React from 'react';
import { Link } from 'react-router-dom';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { usePokeball } from '../../hooks/PokeballContext';

import {
  Container,
  Content,
  PokeballWrapper,
  PokemonTable,
  PokeballSummary,
  Total,
  PokeballEmpty,
} from './styles';

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

const Pokeball: React.FC = () => {
  const {
    capturedPokemon,
    shippingValueFormatted,
    totalFormatted,
    totalWithShippingFormatted,
    handleReleaseFromPokeball,
    updateAmountSubTotal,
  } = usePokeball();

  const increment = (pokemon: Pokemon): void => {
    updateAmountSubTotal(pokemon.id, pokemon.amount + 1);
  };

  const decrement = (pokemon: Pokemon): void => {
    updateAmountSubTotal(pokemon.id, pokemon.amount - 1);
  };

  return (
    <Container>
      <Content>
        <h1>Minha Pokebola</h1>
        {capturedPokemon ? (
          <PokeballWrapper>
            <PokemonTable>
              <thead>
                <tr>
                  <th />
                  <th>POKÉMON</th>
                  <th>QTD</th>
                  <th>SUBTOTAL</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {capturedPokemon.map(p => (
                  <tr key={p.id}>
                    <td>
                      <img src={p.sprite} alt={p.name} />
                    </td>
                    <td>
                      <strong>
                        {p.id}. {p.name}
                      </strong>
                      <span>{p.priceFormatted}</span>
                    </td>
                    <td>
                      <div>
                        <button type="button">
                          <MdRemoveCircleOutline
                            size={20}
                            color="#2C4458"
                            onClick={() => decrement(p)}
                          />
                        </button>
                        <input type="number" readOnly value={p.amount} />
                        <button type="button">
                          <MdAddCircleOutline
                            size={20}
                            color="#2C4458"
                            onClick={() => increment(p)}
                          />
                        </button>
                      </div>
                    </td>
                    <td>
                      <strong>{p.subtotalFormatted}</strong>
                    </td>
                    <td>
                      <button type="button">
                        <MdDelete
                          size={20}
                          color="#2C4458"
                          onClick={() => handleReleaseFromPokeball(p.id)}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </PokemonTable>

            <PokeballSummary>
              <h1>Pokémon capturados</h1>
              <div>
                <span>
                  {capturedPokemon.reduce((total, pokemon) => {
                    return total + pokemon.amount;
                  }, 0)}
                  pokémon
                </span>
                <span>{totalFormatted}</span>
              </div>
              <div>
                <span>Frete</span>
                <span>{shippingValueFormatted}</span>
              </div>
              <hr />
              <Total>
                <span>TOTAL</span>
                <strong>{totalWithShippingFormatted}</strong>
              </Total>
              <hr />
              <button type="button">FINALIZAR CAPTURA</button>
            </PokeballSummary>
          </PokeballWrapper>
        ) : (
          <PokeballEmpty>
            <strong>Você ainda não capturou nenhum pokémon</strong>
            <Link to="/">Voltar para a página inicial.</Link>
          </PokeballEmpty>
        )}
      </Content>
    </Container>
  );
};

export default Pokeball;
