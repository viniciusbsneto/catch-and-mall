import styled from 'styled-components';
import { lighten } from 'polished';

export const Content = styled.main`
  width: 90%;
  max-width: 1120px;
  margin: 64px auto;
`;

export const PokeballWrapper = styled.div`
  display: flex;

  @media (max-width: 1096px) {
    flex-direction: column;
  }
`;

export const PokemonTable = styled.table`
  flex: 1;
  background: #fff;
  padding: 30px;
  border-radius: 4px;
  margin-right: 120px;
  margin-top: 32px;

  thead {
    th {
      color: #999;
      text-align: left;
      padding: 12px;
    }

    @media (max-width: 680px) {
      display: none;
    }
  }

  tbody {
    tr {
      @media (max-width: 680px) {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #eee;
      }
    }

    td {
      padding: 12px;
      border-bottom: 1px solid #eee;

      img {
        height: 100px;
      }

      strong {
        color: #333;
        display: block;
        text-transform: capitalize;
      }

      span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;

        @media (max-width: 680px) {
          display: none;
        }
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

      @media (max-width: 680px) {
        border: none;
        align-self: center;
      }
    }
  }

  @media (max-width: 1096px) {
    width: 100%;
  }
`;

export const PokeballSummary = styled.aside`
  width: 360px;
  height: 300px;
  background: #fff;
  padding: 30px;
  border-radius: 4px;

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
    background: ${props => props.theme.colors.button};
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

  @media (max-width: 1132px) {
    height: 330px;
  }

  @media (max-width: 1096px) {
    margin-top: 16px;
    width: 100%;
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
