import React from 'react';
import styled from 'styled-components';
import { GithubSquare } from '@styled-icons/fa-brands/GithubSquare';
import GithubSearch from './GithubSearch';

const Home = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled(GithubSquare)`
  color: #A3D4E7;
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 50px;
  }
`;

const Title = styled.h1`
  color: #A3D4E7;
  font-size: 3.5rem;
  margin: 0 0 1rem 0;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

const GithubHome = () => {
  return (
    <Home>
      <Logo/>
      <Title>Github Analytics</Title>
      <GithubSearch/>
    </Home>
  );
}

export default GithubHome;