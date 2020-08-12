import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  padding: 32px 0;
  background: ${props => props.theme.colors.header};
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 150px;
  }

  div {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 380px) {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 600px) {
    img {
      height: 80px;
    }
  }

  @media (max-width: 320px) {
    img {
      height: 40px;
    }
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
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-right: 10px;

    strong {
      color: #fff;
      font-size: 16px;

      @media (max-width: 455px) {
        text-align: center;
      }
    }

    span {
      font-size: 14px;
      color: #ddd;
    }
  }
`;
