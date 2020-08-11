import React, { useEffect, useRef } from 'react';
import { Segment, Input, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Search = ({
  doSearch, searchedValue, setSearchedValue, loading,
}) => {
  const inputElement = useRef(null);
  useEffect(() => {
    console.log('input', inputElement);
    inputElement.current.focus();
  }, []);
  return (
    <Segment>
      <Form onSubmit={doSearch}>
        <Input
          ref={inputElement}
          loading={loading}
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
};

Search.propTypes = {
  doSearch: PropTypes.func.isRequired,
  searchedValue: PropTypes.string.isRequired,
  setSearchedValue: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,

};
export default Search;
