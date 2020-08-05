import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  padding: auto 0;
  background: ${props => props.theme.colors.header};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 150px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Pokeball = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 32px;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
      font-size: 16px;
    }

    span {
      font-size: 14px;
      color: #ddd;
    }
  }
`;
