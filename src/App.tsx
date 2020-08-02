import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import { PokeballProvider } from './hooks/PokeballContext';

const App: React.FC = () => (
  <>
    <PokeballProvider>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </PokeballProvider>
    <GlobalStyle />
  </>
);

export default App;
