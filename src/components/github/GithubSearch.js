import React from 'react';
import { useEffect, useRef } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { fetchProfile, fetchLanguages, fetchRepos, sessionClear} from '../../actions';

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 100%;
`;

const Input = styled.input`
  padding: 0.5rem;
  background: #04124E;
  max-width: 400px;
  border-radius: 3px;
  font-size: 1.5rem;
  font-family: inherit;
  border: none;
  color: #fff;
  text-align: center;
  margin-bottom: 1.5rem;

  &:focus {
    outline: none;
  }
`;

const Error = styled.div`
  color: red;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  margin: auto;
  display: block;
  background: #020025;
  font-size: 1.5rem;
  color: #A3D4E7;
  transition: 0.3s ease-out;
  padding: 5px 20px;
  border: 3px solid #A3D4E7;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const GithubSearch = (props) => {
  const inputE1 = useRef(null);

  useEffect(() => {
    inputE1.current.focus();
  });

  const onFormSubmit = (formValues) => {
    props.sessionClear();
    props.fetchProfile(formValues.search);
    props.fetchLanguages(formValues.search);
    props.fetchRepos(formValues.search);
    props.history.push("/searchresult");
  }

  const renderError = ({ error, touched }) => {
    if(touched && error) {
      return <Error>{error}</Error>;
    }
  }

  const renderInput = ({ input, meta }) => {
    return (
      <Form>
        <Input ref={inputE1} {...input} autoComplete="off"/>
        {renderError(meta)}
      </Form>
    );
  }

  return (
    <div>
      <form onSubmit={props.handleSubmit(onFormSubmit)}>
        <Field name="search" component={renderInput} label="Enter Your Username"/>
        <Button>Search</Button>
      </form>
    </div>
  );
}

const validate = formValues => {
  const errors = {};

  if(!formValues.search) {
    errors.search = "You must enter a username";
  }

  return errors;
}

const formWrapped = reduxForm({
  form: 'searchResult',
  validate
})(GithubSearch);

export default withRouter(connect(null, { fetchProfile, fetchLanguages, fetchRepos, sessionClear })(formWrapped));