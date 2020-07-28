import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { PokemonList } from './styles';

const Home: React.FC = () => {
  return ( 
    <>
      <h1>Pokémon</h1>
      <PokemonList>
        <li>
          <img src="https://super.abril.com.br/wp-content/uploads/2018/07/57113eb00e2163161501025cpokemon21.jpeg" alt="Pidgey" />
          <strong>Pokémon com título muito grande que quebra em várias linhas</strong>
          <span>円129,90</span>

          <button type="button">
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>CAPTURAR POKÉMON</span>
          </button>
        </li>

        <li>
          <img src="https://super.abril.com.br/wp-content/uploads/2018/07/57113eb00e2163161501025cpokemon21.jpeg" alt="Pidgey" />
          <strong>Pidgey</strong>
          <span>円129,90</span>

          <button type="button">
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>CAPTURAR POKÉMON</span>
          </button>
        </li>

        <li>
          <img src="https://super.abril.com.br/wp-content/uploads/2018/07/57113eb00e2163161501025cpokemon21.jpeg" alt="Pidgey" />
          <strong>Pidgey</strong>
          <span>円129,90</span>

          <button type="button">
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>CAPTURAR POKÉMON</span>
          </button>
        </li>

        <li>
          <img src="https://super.abril.com.br/wp-content/uploads/2018/07/57113eb00e2163161501025cpokemon21.jpeg" alt="Pidgey" />
          <strong>Pidgey</strong>
          <span>円129,90</span>

          <button type="button">
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>CAPTURAR POKÉMON</span>
          </button>
        </li>

        <li>
          <img src="https://super.abril.com.br/wp-content/uploads/2018/07/57113eb00e2163161501025cpokemon21.jpeg" alt="Pidgey" />
          <strong>Pidgey</strong>
          <span>円129,90</span>

          <button type="button">
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>CAPTURAR POKÉMON</span>
          </button>
        </li>

        <li>
          <img src="https://super.abril.com.br/wp-content/uploads/2018/07/57113eb00e2163161501025cpokemon21.jpeg" alt="Pidgey" />
          <strong>Pidgey</strong>
          <span>円129,90</span>

          <button type="button">
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>CAPTURAR POKÉMON</span>
          </button>
        </li>
      </PokemonList>
    </>
  );
}

export default Home;