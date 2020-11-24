import styled from 'styled-components';

export const Card = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 16px;
  background: #30475e;
  border-radius: 1rem;
  color: #ffffff;
  font-weight: bold;

  section {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      display: flex;
      justify-content: left;
      a {
        text-decoration: none;
        color: #ffffff;
      }

      p {
        max-width: 150px;
      }
    }
  }

  section span {
    font-size: 14px;
  }

  span + span {
    margin-left: 10px;
  }
`;
