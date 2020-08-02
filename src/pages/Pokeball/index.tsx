import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { usePokeball } from '../../hooks/PokeballContext';

import { Container, PokemonTable, PokeballSummary, Total } from './styles';

const Pokeball: React.FC = () => {
  const { capturedPokemon } = usePokeball();

  return (
    <Container>
      <PokemonTable>
        <h1 id="my-pokeball">Minha Pokebola</h1>
        <table>
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
                  <strong>{p.name}</strong>
                  <span>円129,90</span>
                </td>
                <td>
                  <div>
                    <button type="button">
                      <MdRemoveCircleOutline size={20} color="#2C4458" />
                    </button>
                    <input type="number" readOnly value={2} />
                    <button type="button">
                      <MdAddCircleOutline size={20} color="#2C4458" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>R$259,80</strong>
                </td>
                <td>
                  <button type="button">
                    <MdDelete size={20} color="#2C4458" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </PokemonTable>
      <PokeballSummary>
        <h1>Pokémon capturados</h1>
        <div>
          <span>2 pokémon</span>
          <span>円259,80</span>
        </div>
        <div>
          <span>Transferência</span>
          <span>円100,00</span>
        </div>
        <hr />
        <Total>
          <span>TOTAL</span>
          <strong>円359,80</strong>
        </Total>
        <hr />
        <button type="button">FINALIZAR CAPTURA</button>
      </PokeballSummary>
    </Container>
  );
};

export default Pokeball;
