import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';

import GitHubRepos from './components/GitHub/GitHubRepos';
import SearchBar from './components/SearchBar';
import ResultSelector from './components/ResultSelector';
import client from './apollo';

import SearchContextProvider from './contexts/SearchContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <SearchContextProvider>
          <Header />
          <div className="container">


            <SearchBar />
            <ResultSelector />
            <GitHubRepos />
          </div>
          <Footer />
        </SearchContextProvider>
      </ApolloProvider>
    </div>

  );
}

export default App;
