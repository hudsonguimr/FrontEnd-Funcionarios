import React from 'react';

import { Funcionarios } from './estilo';

const Principal: React.FC = ({ children }) => {
  return (
    <>
      <h1>Funcionários</h1>

      <Funcionarios>{children}</Funcionarios>
    </>
  );
};

export default Principal;
