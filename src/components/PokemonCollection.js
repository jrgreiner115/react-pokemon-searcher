import React from 'react';
import PokemonCard from './PokemonCard';
import { Card } from 'semantic-ui-react';

class PokemonCollection extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props);

    return (
      <Card.Group itemsPerRow={6}>
        <Card>
          <h1>Hello From Pokemon Collection</h1>
        </Card>
      </Card.Group>
    )
  }
}

export default PokemonCollection;
