import React from 'react';
import { Segment, Input, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Search = ({ doSearch, searchedValue, setSearchedValue }) => (
  <Segment>
    <Form onSubmit={doSearch}>
      <Input
        placeholder="Veuillez saisir une recherche"
        icon="search"
        iconPosition="left"
        fluid
        value={searchedValue}
        onChange={(event) => {
          setSearchedValue(event.target.value);
        }}
      />
    </Form>
  </Segment>
);

Search.propTypes = {
  doSearch: PropTypes.func.isRequired,
  searchedValue: PropTypes.string.isRequired,
  setSearchedValue: PropTypes.func.isRequired,

};
export default Search;
