import React from 'react';
import Repo from 'src/components/Repo';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Results = ({ repos }) => (
  <Card.Group itemsPerRow={3} stackable>
  {/* {console.log("repos",repos)} */}
    {repos.map((repo) => <Repo key={repo.id} {...repo} />)}
  </Card.Group>

);
Results.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Results;
