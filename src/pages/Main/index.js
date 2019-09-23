import React from 'react';
import { Container, Form, SubmitButton } from './style';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

const Main = () => (
  <Container>
    <h1>
      <FaGithubAlt />
      Repositorios
    </h1>
    <Form>
      <input type="text" placeholder="Adcione um repositorio" />
      <SubmitButton disabled>
        <FaPlus color="#fff" size={14} />
      </SubmitButton>
    </Form>
  </Container>
);
export default Main;
