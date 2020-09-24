import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';

import GitHubRepos from './components/GitHub/GitHubRepos';
import SearchBar from './components/SearchBar';
import ResultSelector from './components/ResultSelector';
import client from './apollo';

import SearchContextProvider from './contexts/SearchContext';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <SearchContextProvider>

          <div className="container">

            <h1>FlipGive Challenge</h1>
            <h2>Search for repositories</h2>
            <SearchBar />
            <ResultSelector />
            <GitHubRepos />
          </div>
        </SearchContextProvider>
      </ApolloProvider>
    </div>

  );
}

export default App;
