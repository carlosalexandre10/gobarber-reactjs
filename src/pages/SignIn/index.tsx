import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  function handleLogin() {
    console.log('a');
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <Link to="teste">Esqueci minha senha</Link>
        </form>

        <Link to="cadastro">
          <FiLogIn /> Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
