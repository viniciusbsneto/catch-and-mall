import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Pokeball } from './styles';

import logoImg from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="Catch N' Mall" />
      </Link>

      <Pokeball to="/pokeball">
        <div>
          <strong>Minha pokebola</strong>
          <span>2 pokémon</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Pokeball>
    </Container>
  );
};

export default Header;
