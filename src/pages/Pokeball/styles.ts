import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PokemonTable = styled.main`
  h1 {
    font-size: 24px;
    margin-bottom: 24px;
  }

  table {
    background: #fff;
    padding: 30px;
    border-radius: 4px;
  }

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const PokeballSummary = styled.aside`
  width: 100;
  background: #fff;
  padding: 30px;
  border-radius: 4px;
  height: 300px;

  h1 {
    margin-bottom: 24px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  button {
    width: 100%;
    background: #2c4458;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    margin-top: 32px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.2s;

    &:hover {
      background: ${lighten(0.05, '#2C4458')};
    }
  }

  hr {
    border-bottom: 1px solid #eee;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 24px;
  }
`;
