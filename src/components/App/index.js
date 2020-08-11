import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from 'src/components/Header';
import Search from 'src/components/Search';
import Message from 'src/components/Message';
import Results from 'src/components/Results';

import data from 'src/data/repos';

import './style.scss';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('Veuillez saisir une recherce');
  const [hasError, setHasError] = useState(false);
  const [messageIsVisible, setMessageIsVisible] = useState(true);

  const doSearch = () => {
    console.log('ici je vais faire ma recherche ');
    setLoading(true);
    setMessage('recherche en cour');
    setHasError(false);
    setMessageIsVisible(true);
    axios.get(`https://api.github.com/search/repositories?q=${searchedValue}`)
      .then((response) => {
        console.log(response);
        setRepos(response.data.items);
        if (response.data.items.length === 0) {
          setMessage('aucun résultat');
          setHasError(true);
          setMessageIsVisible(true);
        }
        else {
          setMessage(`${response.data.items.length} premier résultats de ${response.data.total_count} résultats`);
          setHasError(false);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    console.log('une timeout de 3 secondes est créé');

    const timerID = setTimeout(() => {
      setMessageIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timerID);
    };
    //
  }, [message]);


  return (
    <div className="app">
      <Header />
      <Search
        doSearch={doSearch}
        searchedValue={searchedValue}
        setSearchedValue={setSearchedValue}
        loading={loading}
      />
      {messageIsVisible && <Message sentence={message} hasError={hasError} />}
      <Results repos={repos} />
    </div>
  );
};

export default App;
