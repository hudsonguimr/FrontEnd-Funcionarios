import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Funcionario from '../../components/Funcionario';

import Listagem from '../../components/Listagem';
import { Home, Dashboard, Titulo, Opcoes, Menu, Formulario } from './estilo';

interface IFuncionario {
  id: string;
  nome: string;
  dislikes: string;
  likes: string;
}

const Principal: React.FC = () => {
  const [page, setPage] = useState(0);
  const [funcionarios, setFuncionarios] = useState<IFuncionario[]>();

  // ESTADOS DO FORMULARIO
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [departamento, setDepartamento] = useState<string>('');
  const [funcao, setFuncao] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [avatar, setAvatar] = useState<File[]>();

  const [mensagemErro, setMensagemErro] = useState(false);

  const carregarFuncionarios = async (): Promise<void> => {
    const todosFuncionarios = await api
      .get('/Funcionarios')
      .then(response => response.data);

    setFuncionarios(todosFuncionarios);
  };

  const adicionarAvatar = (event: ChangeEvent<HTMLInputElement>): boolean => {
    if (event.target.files === null || event.target.files === undefined) {
      return false;
    }

    setAvatar(Array.from(event.target.files));
    return true;
  };

  const enviarFormulario = async (event: FormEvent) => {
    event.preventDefault();

    const dadosFormulario = new FormData();

    if (nome && email && departamento && funcao && telefone && avatar) {
      dadosFormulario.append('nome', nome);
      dadosFormulario.append('email', email);
      dadosFormulario.append('departamento', departamento);
      dadosFormulario.append('funcao', funcao);
      dadosFormulario.append('telefone', telefone);

      dadosFormulario.append('avatar', avatar[0]);

      await api
        .post('/Funcionarios', dadosFormulario)
        .then(response => {
          window.location.href = `/novo/${response.data.id}`;
        })
        .catch(err => {
          setMensagemErro(true);
        });
    } else {
      setMensagemErro(true);
    }
  };

  useEffect(() => {
    carregarFuncionarios();
  }, []);

  return (
    <Home>
      <Dashboard style={{ width: '20%' }}>
        <Titulo>Início</Titulo>
        <Opcoes>
          <Link to="/" onClick={() => setPage(0)}>
            Listar todos os funcionários
          </Link>
          <Link to="/" onClick={() => setPage(1)}>
            Cadastrar Funcionário
          </Link>
        </Opcoes>
      </Dashboard>
      <Menu style={{ width: '80%' }}>
        {page === 0 ? (
          <Listagem>
            {funcionarios && funcionarios.length > 0
              ? funcionarios.map(func => {
                  return (
                    <Funcionario
                      key={func.id}
                      id={func.id}
                      nome={func.nome}
                      dislikes={func.dislikes}
                      likes={func.likes}
                    />
                  );
                })
              : 'Não há funcionários cadastrados!'}
          </Listagem>
        ) : (
          <Formulario onSubmit={enviarFormulario}>
            <div>
              <p>Nome:</p>
              <input
                type="text"
                placeholder="Digite o seu nome"
                value={nome}
                onChange={event => setNome(event.target.value)}
              />
            </div>

            <div>
              <p>Email:</p>
              <input
                type="text"
                placeholder="Digite o seu email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>

            <div>
              <p>Departamento:</p>
              <input
                type="text"
                placeholder="Digite o seu departamento"
                value={departamento}
                onChange={event => setDepartamento(event.target.value)}
              />
            </div>

            <div>
              <p>Função:</p>
              <input
                type="text"
                placeholder="Digite a sua função"
                value={funcao}
                onChange={event => setFuncao(event.target.value)}
              />
            </div>

            <div>
              <p>Telefone:</p>
              <input
                type="text"
                placeholder="Digite o seu telefone"
                value={telefone}
                onChange={event => setTelefone(event.target.value)}
              />
            </div>

            <div>
              <p>Foto</p>
              <input type="file" onChange={adicionarAvatar} />
            </div>

            {mensagemErro ? (
              <article>
                <strong>Verifique o preenchimento dos campos!</strong>
              </article>
            ) : (
              ''
            )}

            <button type="submit">Cadastrar</button>
          </Formulario>
        )}
      </Menu>
    </Home>
  );
};

export default Principal;
