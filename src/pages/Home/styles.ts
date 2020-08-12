import styled from 'styled-components';
import { lighten } from 'polished';

export const NavigationHeader = styled.div`
  width: 90%;
  max-width: 1120px;
  margin: 64px auto 0;
  display: flex;
  align-items: center;
`;

export const Content = styled.main`
  width: 90%;
  max-width: 1120px;
  margin: 32px auto 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 20px;
  list-style: none;
  flex: 1;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      width: 200px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
      text-transform: capitalize;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: ${props => props.theme.colors.button};
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${props => lighten(0.05, props.theme.colors.button)};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
