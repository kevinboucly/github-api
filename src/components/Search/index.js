import React from 'react';
import { Segment, Input, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Search = ({ doSearch }) => (
  <Segment>
    <Form onSubmit={doSearch}>
      <Input
        placeholder="Veuillez saisir une recherche"
        icon="search"
        iconPosition="left"
        fluid
      />
    </Form>
  </Segment>
);

Search.propTypes = {
  doSearch: PropTypes.func.isRequired,
};
export default Search;
