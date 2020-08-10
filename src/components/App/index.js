import React, { useState } from 'react';
import Header from 'src/components/Header';
import Search from 'src/components/Search';
import Message from 'src/components/Message';
import Results from 'src/components/Results';

import data from 'src/data/repos';

import './style.scss';

const App = () => {
  const [ repos, setRepos ] = useState(data.items);
  return (
    <div className="app">
      <Header />
      <Search />
      <Message sentence="aucun repo" hasError />
      <Results repos={repos} />
    </div>
  );
};

export default App;
