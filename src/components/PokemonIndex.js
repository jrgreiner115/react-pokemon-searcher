import React from 'react';
import PokemonCollection from './PokemonCollection';
// import PokemonForm from './PokemonForm';
import Loading from './Loading';
import { Search } from 'semantic-ui-react';
const URL = 'http://localhost:3000/pokemon'


class PokemonIndex extends React.Component {
  state = {
    pokes: []
  }

  componentDidMount(){
    fetch(URL)
      .then(resp => resp.json())
      .then(json => this.setState({
        pokes: json
      }))

  }
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={null} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokes}/>
        <br />
        {/*<PokemonForm />*/}
      </div>
    )
  }
}

export default PokemonIndex;
