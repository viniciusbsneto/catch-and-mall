import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Icon } from '@iconify/react';
import pokeballIcon from '@iconify/icons-gg/pokemon';

import logoImg from '../../assets/images/logo.svg';

import { Container, Content, Pokeball } from './styles';

import { usePokeball } from '../../hooks/pokeball';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { capturedPokemon } = usePokeball();
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logoImg} alt="Catch N' Mall" />
        </Link>

        <div>
          <Switch
            onChange={toggleTheme}
            checked={title === 'water'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            onColor={colors.button}
            offColor={shade(0.15, colors.header)}
          />
          <Pokeball to="/pokeball">
            <div>
              <strong>Minha pokebola</strong>
              <span>{capturedPokemon.length} pokémon</span>
            </div>
            <Icon icon={pokeballIcon} height="58" color="#FFF" />
          </Pokeball>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
