import React, { useState } from 'react';
import axios from 'axios';
import Header from 'src/components/Header';
import Search from 'src/components/Search';
import Message from 'src/components/Message';
import Results from 'src/components/Results';

import data from 'src/data/repos';

import './style.scss';

const App = () => {
  const [repos, setRepos] = useState([]);

  const doSearch = () => {
    console.log('ici je vais faire ma recherche ');
    axios.get('https://api.github.com/search/repositories?q=react')
      .then((response) => {
        console.log(response);
        setRepos(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="app">
      <Header />
      <Search doSearch={doSearch} />
      <Message sentence="aucun repo" hasError />
      <Results repos={repos} />
    </div>
  );
};

export default App;
