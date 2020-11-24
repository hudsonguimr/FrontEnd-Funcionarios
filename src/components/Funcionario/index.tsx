import React from 'react';

import { Link } from 'react-router-dom';

import { FiChevronsRight } from 'react-icons/fi';
import { Card } from './estilo';

interface IFuncionario {
  id: string;
  nome: string;
  dislikes: string;
  likes: string;
}

const Funcionario: React.FC<IFuncionario> = ({ id, nome, likes, dislikes }) => {
  return (
    <Card>
      <section>
        <p>{` ${nome}`}</p>
      </section>
      <section>
        <span>
          Likes:
          {likes}
        </span>
        <span>
          Dislikes:
          {dislikes}
        </span>
        <span>
          <Link to={`/detalhes/${id}`}>
            <FiChevronsRight size={25} />
          </Link>
        </span>
      </section>
    </Card>
  );
};

export default Funcionario;
