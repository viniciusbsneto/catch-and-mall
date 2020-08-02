import React, { createContext, useState, useContext } from 'react';

interface Pokemon {
  id: number;
  name: string;
  sprite: string;
}

interface PokeballContextData {
  capturedPokemon: Pokemon[];
  shippingValue?: number;
  handleCapturePokemon(newPokemon: Pokemon): void;
}

const PokeballContext = createContext<PokeballContextData>(
  {} as PokeballContextData
);

const PokeballProvider: React.FC = ({ children }) => {
  const [capturedPokemon, setCapturedPokemon] = useState<Pokemon[]>(() => {
    const pokeball = localStorage.getItem('@CatchAndMall:pokeball');

    if (pokeball) {
      return JSON.parse(pokeball);
    }

    return [];
  });

  const handleCapturePokemon = (newPokemon: Pokemon): void => {
    setCapturedPokemon([...capturedPokemon, newPokemon]);
    localStorage.setItem(
      '@CatchAndMall:pokeball',
      JSON.stringify(capturedPokemon)
    );
  };

  return (
    <PokeballContext.Provider value={{ capturedPokemon, handleCapturePokemon }}>
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
