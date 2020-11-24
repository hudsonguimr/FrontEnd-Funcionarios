import styled from 'styled-components';

export const DetalhesFuncionario = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  article {
    position: absolute;
    top: 210px;
    left: 405px;

    a {
      text-decoration: none;
      margin-left: 30px;
      color: #ffffff;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border-radius: 8px;

  height: 40%;
  width: 40%;
  background: #4e305e;
  h1 {
    margin-bottom: 10px;
  }

  p {
    padding: 2px 4px;
    font-weight: bold;
  }

  p + p {
    margin-top: 4px;
  }

  &:hover {
    border: 2px solid #5c6e91;
  }
`;

export const Botoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  background: #222831;

  a,
  span {
    font-weight: bold;
    font-size: 14px;
    color: #ffffff;
    text-decoration: none;
    padding: 2px 4px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2px;

    svg {
      margin: 0 2px;
      cursor: pointer;
    }
  }
`;
