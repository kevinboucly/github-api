import React from 'react';
import Header from 'src/components/Header';
import Search from 'src/components/Search';
import Message from 'src/components/Message';
import Results from 'src/components/Results';

import data from 'src/data/repos';

import './style.scss';

const App = () => (
  <div className="app">
    <Header />
    <Search />
    <Message sentence="aucun repo" hasError />
    <Results repos={data.items} />
  </div>
);

export default App;
