import React from 'react';
import GithubProfile from './GithubProfile';
import GithubCharts from './GithubCharts';
import GithubRepos from './GithubRepos';
import GithubFooter from './GithubFooter';

const GithubResult = () => {
  return (
    <div>
      <GithubProfile/>
      <GithubCharts/>
      <GithubRepos/>
      <GithubFooter/>
    </div>
  );
}

export default GithubResult;