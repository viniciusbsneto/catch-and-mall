import React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '@iconify/react';
import pokeballIcon from '@iconify/icons-gg/pokemon';

import { Container, Pokeball } from './styles';

import logoImg from '../../assets/images/logo.svg';

import { usePokeball } from '../../hooks/PokeballContext';

const Header: React.FC = () => {
  const { capturedPokemon } = usePokeball();

  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="Catch N' Mall" />
      </Link>

      <Pokeball to="/pokeball">
        <div>
          <strong>Minha pokebola</strong>
          <span>{capturedPokemon.length} pokémon</span>
        </div>
        <Icon icon={pokeballIcon} height="52" color="#FFF" />
      </Pokeball>
    </Container>
  );
};

export default Header;
