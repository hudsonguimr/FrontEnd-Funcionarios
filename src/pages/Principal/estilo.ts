import styled from 'styled-components';

export const Home = styled.main`
  min-height: 100vh;
  display: flex;
  background: #4e305e;
`;

export const Dashboard = styled.div`
  position: relative;
  min-height: 100vh;
  background: #4e305e;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    position: absolute;
    color: #ffffff;
    right: -15px;
  }
`;

export const Titulo = styled.h1`
  color: #ffffff;

  font-size: 32px;
`;

export const Opcoes = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 50%;

  a {
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;

    border: 1px solid #ffffff;
    padding: 0.2rem 0.4rem;
    border-radius: 0.2rem;
    min-width: 205px;
    text-align: center;
  }

  a + a {
    margin-top: 14px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  h1 {
    margin: 30px 0;
    margin-right: 225px;

    color: #ffffff;
  }
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-height: 45%;
  border-radius: 16px;

  background: #ffffff;

  p {
    font-size: 18px;
    font-weight: bold;
    color: black;
    width: 400px;
  }

  input {
    font-size: 14px;
    height: 27px;
    padding: 2px;
    width: 100%;
    border: 1px solid;
    border-radius: 4px;
    outline: none;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
  }

  button {
    font-size: 14px;
    font-weight: bold;
    padding: 7px 11px;
    width: 50%;
    border-radius: 6px;
    background: #4e305e;
    cursor: pointer;
    color: #ffffff;
  }

  article strong {
    height: 10px;
    color: red;
    padding: 4px;
  }
`;
