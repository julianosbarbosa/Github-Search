import React, { Component } from 'react';
import { Container, Form, SubmitButton } from './style';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  handleInputChanges = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmitForm = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    const { newRepo, repositories } = this.state;
    const response = await api.get(`/repos/${newRepo}`);
    const data = { name: response.data.full_name };
    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });

    console.log(response.data);
  };

  render() {
    const { newRepo, loading } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositorios
        </h1>
        <Form onSubmit={this.handleSubmitForm}>
          <input
            type="text"
            placeholder="Adcione um repositorio"
            onChange={this.handleInputChanges}
            value={newRepo}
          />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaPlus color="#fff" size={14} />
            )}
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

export default Main;
