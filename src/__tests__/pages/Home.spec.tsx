import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Home from '../../pages/Home';
import water from '../../styles/themes/water';

describe('Home Page', () => {
  it('should render successfully', () => {
    const { debug } = render(
      <ThemeProvider theme={water}>
        <Home />
      </ThemeProvider>
    );

    debug();
  });
});
