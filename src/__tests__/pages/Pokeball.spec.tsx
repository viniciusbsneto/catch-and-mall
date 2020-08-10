import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Pokeball from '../../pages/Pokeball';
import water from '../../styles/themes/water';
import { PokeballProvider } from '../../hooks/pokeball';

describe('Pokeball Page', () => {
  it('should render successfully', () => {
    const { debug } = render(
      <ThemeProvider theme={water}>
        <PokeballProvider>
          <Pokeball />
        </PokeballProvider>
      </ThemeProvider>
    );

    debug();
  });
});
