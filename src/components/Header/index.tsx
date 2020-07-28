import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logoImg from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="Catch N' Mall" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Minha pokebola</strong>
          <span>2 pokémon</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  )
}

export default Header;