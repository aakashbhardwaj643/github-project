import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GithubHome from './github/GithubHome';
import GithubResult from './github/GithubResult';
import GlobalStyle from '../GlobalStyles';

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <BrowserRouter>
        <Route path="/" exact>
          <GithubHome/>
        </Route>
        <Route path="/searchresult" exact>
          <GithubResult/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;