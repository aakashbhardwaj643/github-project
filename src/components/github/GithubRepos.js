import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { GitRepoForked } from '@styled-icons/boxicons-regular/GitRepoForked';
import { Star } from '@styled-icons/boxicons-regular/Star';
import { Folder } from '@styled-icons/boxicons-regular/Folder';

const ReposSection = styled.section`
  max-height: 100%;
  max-width: 80%;
  margin: 0 auto;
  padding-bottom: 50px;
`;

const RepoCard = styled.div`
  background: #F0F3F4;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(255, 255, 255, 25%);
  transition: 0.1s ease-in;

  &:hover {
    transform: scale(1.01, 1.01);
  }
`;

const RepoContent = styled.div`
  width: 90%;
  margin-bottom: 1rem; 
`;

const RepoLink = styled.a`
  color: #04124E;

  &:hover {
    opacity: 0.8;
  }
`;

const Repos = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Select = styled.select`
  font-size: 14px;
  border: none;
  width: 120px;
  background: #F0F3F4;
  padding: 10px 0;
  font-size: 1.2rem;
`;

const Options = styled.div`
 margin: 100px 0;
 display: flex;
 align-items: center;
 justify-content: center;

 @media screen and (max-width: 720px) {
   flex-direction: column;
 }
`;

const Label = styled.label`
  color: #A3D4E7;
  margin: 0 10px;
  font-size: 1.5rem;

  @media screen and (max-width: 720px) {
    margin-bottom: 20px;
  }
`;

const Forks = styled.div`
  display: flex;
  align-items: center;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
`;
const Size = styled.div`
  display: flex;
  align-items: center;
`;

const ForkIcon = styled(GitRepoForked)`
  width: 1.2rem;
`;

const StarIcon = styled(Star)`
  width: 1.2rem;
`;
const SizeIcon = styled(Folder)`
  width: 1.2rem;
`;

const GithubRepos = (props) => {
  const repos = [];
  let maxSizeRepos;
  let repoLength;
  let mostStarredRepos;
  let maxForkRepos;
  let renderStarInput;
  let renderSizeInput;
  let renderForkInput;

  if(props.repos) {
    props.repos.forEach(repo => {
      repos.push(repo);
    });
    repoLength = repos.length - 1 < 8 ? repos.length : 8;

    repos.sort((a, b) => b.watchers - a.watchers);
    mostStarredRepos = repos.slice(0, repoLength);

    repos.sort((a, b) => b.size - a.size);
    maxSizeRepos = repos.slice(0, repoLength);

    repos.sort((a, b) => b.forks - a.forks);
    maxForkRepos = repos.slice(0, repoLength);

    renderStarInput = mostStarredRepos.map(repo => {
      return (
        <RepoCard 
          as={motion.div} 
          initial = {{opacity: 0}} 
          animate = {{opacity: 1}} 
          transition = {{duration: 1}} 
          key={repo.node_id}
        >
          <RepoContent>
            <h4>Repository</h4>
            <h2><RepoLink target="_blank" href={`${repo.html_url}`}>{repo.name}</RepoLink></h2>
            <p>{`Languages: ${repo.language !== null ? repo.language : `Not Available`}`}</p>
            <Forks>
              <ForkIcon/>
              <span>{repo.forks}</span>
            </Forks>
            <Stars>
              <StarIcon/>
              <span>{repo.watchers}</span>
            </Stars>
            <Size>
              <SizeIcon/>
              <span>{`${repo.size} KB`}</span>
            </Size>
          </RepoContent>
        </RepoCard>
      );
    });

    renderSizeInput = maxSizeRepos.map(repo => {
      return (
        <RepoCard
          as={motion.div} 
          initial = {{opacity: 0}} 
          animate = {{opacity: 1}} 
          transition = {{duration: 1}} 
          key={repo.node_id}
        >
          <RepoContent>
            <h4>Repository</h4>
            <h2><RepoLink target="_blank" href={`${repo.html_url}`}>{repo.name}</RepoLink></h2>
            <p>{`Languages: ${repo.language !== null ? repo.language : `Not Available`}`}</p>
            <Forks>
              <ForkIcon/>
              <span>{repo.forks}</span>
            </Forks>
            <Stars>
              <StarIcon/>
              <span>{repo.watchers}</span>
            </Stars>
            <Size>
              <SizeIcon/>
              <span>{`${repo.size} KB`}</span>
            </Size>
          </RepoContent>
        </RepoCard>
      );
    });

    renderForkInput = maxForkRepos.map(repo => {
      return (
        <RepoCard
          as={motion.div} 
          initial = {{opacity: 0}} 
          animate = {{opacity: 1}} 
          transition = {{duration: 1}} 
          key={repo.node_id}
        >
          <RepoContent>
            <h4>Repository</h4>
            <h2><RepoLink rel="noopener noreferrer" target="_blank" href={`${repo.html_url}`}>{repo.name}</RepoLink></h2>
            <p>{`Languages: ${repo.language !== null ? repo.language : `Not Available`}`}</p>
            <Forks>
              <ForkIcon/>
              <span>{repo.forks}</span>
            </Forks>
            <Stars>
              <StarIcon/>
              <span>{repo.watchers}</span>
            </Stars>
            <Size>
              <SizeIcon/>
              <span>{`${repo.size} KB`}</span>
            </Size>
          </RepoContent>
        </RepoCard>
      );
    });
  }

  const renderInput = (e) => {
    if(e.target.value === "size") {
      setRepositories(renderSizeInput);
    } else if(e.target.value ==="stars") {
      setRepositories(renderStarInput);
    } else {
      setRepositories(renderForkInput);
    }
  };

  const [repositories, setRepositories] = useState(renderSizeInput);

  const renderFinalInput = () => {
    if(!props.errors[0]) {
      return (
        <div>
          <Options>
            <Label htmlFor="select">Sort repositories By:</Label>
            <Select name="select" defaultValue="stars" onChange={e => renderInput(e)}>
              <option value="size">Size</option>
              <option value="stars">Stars</option>
              <option value="forks">Forks</option>
            </Select>
          </Options>
          <Repos>
            {repositories ? repositories : renderStarInput}
          </Repos>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  return (
    <ReposSection>
      {renderFinalInput()}
    </ReposSection>
  );
};

const mapStateToProps = (state) => {
  return { repos: state.stats[0], errors: state.errors };
};

export default connect(mapStateToProps)(GithubRepos);