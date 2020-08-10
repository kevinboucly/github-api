import React from 'react';
import { Segment, Input } from 'semantic-ui-react';

const Search = () => (
  <Segment>
    <Input
      placeholder="Veuillez saisir une recherche"
      icon="search"
      iconPosition="left"
      fluid
    />
  </Segment>
);

export default Search;
