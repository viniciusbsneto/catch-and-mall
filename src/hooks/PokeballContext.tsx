import React, { createContext, useState, useContext, useEffect } from 'react';
import produce from 'immer';

import { formatPrice } from '../util/format';

interface Pokemon {
  id: number;
  name: string;
  sprite: string;
  price: number;
  priceFormatted: string;
  amount: number;
  subtotal: number;
  subtotalFormatted: string;
}

interface PokeballContextData {
  capturedPokemon: Pokemon[];
  shippingValue: number;
  shippingValueFormatted: string;
  totalFormatted: string;
  totalWithShippingFormatted: string;
  handleCapturePokemon(newPokemon: Pokemon): void;
  handleReleaseFromPokeball(id: number): void;
  updateAmountSubTotal(id: number, amount: number): void;
}

const PokeballContext = createContext<PokeballContextData>(
  {} as PokeballContextData
);

const PokeballProvider: React.FC = ({ children }) => {
  const [totalFormatted, setTotalFormatted] = useState('');
  const [shippingValue, setShippingValue] = useState(100);
  const [shippingValueFormatted, setShippingValueFormatted] = useState(
    formatPrice(100)
  );
  const [totalWithShippingFormatted, setTotalWithShippingFormatted] = useState(
    ''
  );
  const [capturedPokemon, setCapturedPokemon] = useState<Pokemon[]>(() => {
    const pokeball = localStorage.getItem('@CatchAndMall:pokeball');

    if (pokeball) {
      return JSON.parse(pokeball);
    }

    return [];
  });

  useEffect(() => {
    const newTotal = capturedPokemon.reduce(
      (totalValue: number, pokemon: Pokemon): number => {
        return totalValue + pokemon.price * pokemon.amount;
      },
      0
    );
    setTotalFormatted(formatPrice(newTotal));
    setTotalWithShippingFormatted(formatPrice(newTotal + shippingValue));
  }, [capturedPokemon, shippingValue]);

  useEffect(() => {
    localStorage.setItem(
      '@CatchAndMall:pokeball',
      JSON.stringify(capturedPokemon)
    );
  }, [capturedPokemon]);

  const handleCapturePokemon = (newPokemon: Pokemon): void => {
    setCapturedPokemon(
      produce(capturedPokemon, draft => {
        const pokemonIndex = draft.findIndex(p => p.id === newPokemon.id);

        if (pokemonIndex >= 0) {
          draft[pokemonIndex].amount += 1;
          draft[pokemonIndex].subtotal =
            draft[pokemonIndex].price * draft[pokemonIndex].amount;
          draft[pokemonIndex].subtotalFormatted = formatPrice(
            draft[pokemonIndex].subtotal
          );
        } else {
          draft.push({
            ...newPokemon,
            amount: 1,
            subtotal: newPokemon.price,
            subtotalFormatted: formatPrice(newPokemon.price),
          });
        }
      })
    );
  };

  const handleReleaseFromPokeball = (id: number): void => {
    setCapturedPokemon(
      produce(capturedPokemon, draft => {
        const pokemonIndex = draft.findIndex(p => p.id === id);

        if (pokemonIndex >= 0) {
          draft.splice(pokemonIndex, 1);
        }
      })
    );
  };

  const updateAmountSubTotal = (id: number, amount: number): void => {
    if (amount <= 0) {
      return;
    }

    setCapturedPokemon(
      produce(capturedPokemon, draft => {
        const pokemonIndex = draft.findIndex(p => p.id === id);

        if (pokemonIndex >= 0) {
          draft[pokemonIndex].amount = amount;
          draft[pokemonIndex].subtotal = draft[pokemonIndex].price * amount;
          draft[pokemonIndex].subtotalFormatted = formatPrice(
            draft[pokemonIndex].subtotal
          );
        }
      })
    );
  };

  return (
    <PokeballContext.Provider
      value={{
        capturedPokemon,
        shippingValue,
        shippingValueFormatted,
        totalFormatted,
        totalWithShippingFormatted,
        handleCapturePokemon,
        handleReleaseFromPokeball,
        updateAmountSubTotal,
      }}
    >
      {children}
    </PokeballContext.Provider>
  );
};

function usePokeball(): PokeballContextData {
  const context = useContext(PokeballContext);

  if (!context) {
    throw new Error('usePokeball must be used within a PokeballProvider');
  }

  return context;
}

export { PokeballProvider, usePokeball };
