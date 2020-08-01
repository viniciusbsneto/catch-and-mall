import React, { useContext } from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import CartContext from '../../context/CartContext';

import { Container, PokemonTable, PokeballSummary, Total } from './styles';

const Cart: React.FC = () => {
  const { products } = useContext(CartContext);

  return (
    <Container>
      <ul>
        {products.map(product => (
          <>
            <li key={product.name}>{product.name}</li>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="Bulbasaur"
            />
          </>
        ))}
      </ul>
      <PokemonTable>
        <h1>Minha Pokebola</h1>
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
            <tr>
              <td>
                <img
                  src="https://super.abril.com.br/wp-content/uploads/2018/07/57113eb00e2163161501025cpokemon21.jpeg"
                  alt="Pidgey"
                />
              </td>
              <td>
                <strong>Pidgey</strong>
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

            <tr>
              <td>
                <img
                  src="https://super.abril.com.br/wp-content/uploads/2018/07/57113eb00e2163161501025cpokemon21.jpeg"
                  alt="Pidgey"
                />
              </td>
              <td>
                <strong>Pidgey</strong>
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

            <tr>
              <td>
                <img
                  src="https://super.abril.com.br/wp-content/uploads/2018/07/57113eb00e2163161501025cpokemon21.jpeg"
                  alt="Pidgey"
                />
              </td>
              <td>
                <strong>Pidgey</strong>
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

            <tr>
              <td>
                <img
                  src="https://super.abril.com.br/wp-content/uploads/2018/07/57113eb00e2163161501025cpokemon21.jpeg"
                  alt="Pidgey"
                />
              </td>
              <td>
                <strong>Pidgey</strong>
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

            <tr>
              <td>
                <img
                  src="https://super.abril.com.br/wp-content/uploads/2018/07/57113eb00e2163161501025cpokemon21.jpeg"
                  alt="Pidgey"
                />
              </td>
              <td>
                <strong>Pidgey</strong>
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

            <tr>
              <td>
                <img
                  src="https://super.abril.com.br/wp-content/uploads/2018/07/57113eb00e2163161501025cpokemon21.jpeg"
                  alt="Pidgey"
                />
              </td>
              <td>
                <strong>Pidgey</strong>
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
          <span>Incubação</span>
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

export default Cart;
