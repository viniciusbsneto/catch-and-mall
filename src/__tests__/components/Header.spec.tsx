import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import water from '../../styles/themes/water';
import { PokeballProvider } from '../../hooks/pokeball';
import Header from '../../components/Header';

const toggleTheme = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Pokeball Page', () => {
  it('should render successfully', () => {
    const { debug } = render(
      <ThemeProvider theme={water}>
        <PokeballProvider>
          <Header toggleTheme={toggleTheme} />
        </PokeballProvider>
      </ThemeProvider>
    );

    debug();
  });
});
