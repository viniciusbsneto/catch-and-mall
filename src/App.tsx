import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import CartContext from './context/CartContext';

const App: React.FC = () => (
  <>
    <CartContext.Provider
      value={{
        products: [
          {
            name: 'Bulbasaur',
            imageURL:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          },
        ],
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </CartContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
