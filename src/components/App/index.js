import React from 'react';
import Header from 'src/components/Header';
import Search from 'src/components/Search';
import Message from 'src/components/Message';
import Results from 'src/components/Results';


const App = () => (
  <div className="app">
    <Header />
    <Search />
    <Message />
    <Results />
  </div>
);

export default App;
