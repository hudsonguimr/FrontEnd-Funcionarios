import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import {
  FiCornerUpLeft,
  FiThumbsUp,
  FiThumbsDown,
  FiTrash2,
} from 'react-icons/fi';
import api from '../../services/api';

import { DetalhesFuncionario, Card, Botoes } from './estilo';

interface ParametrosRota {
  id: string;
}

interface Funcionario {
  nome: string;
  avatar: string;
  departamento: string;
  email: string;
  telefone: string;
  likes: string;
  dislikes: string;
}

const Detalhes: React.FC<RouteComponentProps<ParametrosRota>> = props => {
  const { match } = props;
  const { id } = match.params;

  const [funcionario, setFuncionario] = useState<Funcionario>();

  const carregarDadosFuncionarios = async () => {
    const dadosFuncionario = await api
      .get(`/Funcionarios/${id}`)
      .then(response => response.data);

    setFuncionario(dadosFuncionario);
  };

  const like = async (id_funcionario: string) => {
    const likes = await api
      .patch(`/Funcionarios/likes/${id_funcionario}`)
      .then(response => response.data);

    setFuncionario({ ...funcionario, ...likes });

    return true;
  };

  const dislike = async (id_funcionario: string) => {
    const dislikes = await api
      .patch(`/Funcionarios/dislikes/${id_funcionario}`)
      .then(response => response.data);

    setFuncionario({ ...funcionario, ...dislikes });

    return true;
  };

  const deletarFuncionario = async (id_funcionario: string) => {
    await api.delete(`/Funcionarios/${id_funcionario}`);
    return true;
  };

  useEffect(() => {
    carregarDadosFuncionarios();
  }, [id]);

  return (
    <>
      {funcionario !== undefined ? (
        <DetalhesFuncionario>
          <article>
            <Link to="/">
              <FiCornerUpLeft size={25} />
            </Link>
          </article>
          <Card>
            <h1>Novo funcionário</h1>
            <img
              src={`http://localhost:3333/arquivos/${funcionario.avatar}`}
              alt={`Foto de ${funcionario.nome}`}
            />
            <p>
              Nome:
              {` ${funcionario.nome}`}
            </p>

            <p>
              Departamento:
              {` ${funcionario.departamento}`}
            </p>
            <p>
              Email:
              {` ${funcionario.email}`}
            </p>
            <p>
              Telefone:
              {` ${funcionario.telefone}`}
            </p>

            <Botoes>
              <Link to="/">
                <FiTrash2
                  size={16}
                  style={{ color: 'red' }}
                  onClick={() => deletarFuncionario(id)}
                />
              </Link>
              <span>
                <FiThumbsUp size={16} onClick={() => like(id)} />
                {funcionario.likes}
              </span>
              <span>
                <FiThumbsDown size={16} onClick={() => dislike(id)} />
                {funcionario.dislikes}
              </span>
            </Botoes>
          </Card>
        </DetalhesFuncionario>
      ) : (
        'Carregando...'
      )}
    </>
  );
};

export default Detalhes;
