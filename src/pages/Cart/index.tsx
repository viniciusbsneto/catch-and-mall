import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, PokemonTable, Total } from './styles';

const Cart: React.FC = () => {
  return (
    <Container>
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
          <tr>
            <td>
              <img src="https://super.abril.com.br/wp-content/uploads/2018/07/57113eb00e2163161501025cpokemon21.jpeg" alt="Pidgey" />
            </td>
            <td>
              <strong>Pidgey</strong>
              <span>R$129,90</span>
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
              <button>
                <MdDelete size={20} color="#2C4458" />
              </button>
            </td>
          </tr>
        </tbody>
      </PokemonTable>

      <footer>
        <button type="button">FINALIZAR CAPTURA</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$259,80</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;