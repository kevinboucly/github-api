import React from 'react';
import Repo from 'src/components/Repo';
import { Card } from 'semantic-ui-react';

const Results = () => (
  <Card.Group itemsPerRow={3} stackable>
    <Repo />
    <Repo />
    <Repo />
    <Repo />
  </Card.Group>

);

export default Results;
