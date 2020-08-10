import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './hooks/usePersistedState';

import water from './styles/themes/water';
import fire from './styles/themes/fire';

import GlobalStyle from './styles/global';
import Routes from './routes';

import Header from './components/Header';

import { PokeballProvider } from './hooks/pokeball';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', water);

  const toggleTheme = (): void => {
    setTheme(theme.title === 'water' ? fire : water);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <PokeballProvider>
          <BrowserRouter>
            <Header toggleTheme={toggleTheme} />
            <Routes />
          </BrowserRouter>
        </PokeballProvider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
