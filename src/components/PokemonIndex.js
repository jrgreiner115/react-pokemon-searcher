import React from 'react';
import PokemonCollection from './PokemonCollection';
import Loading from './Loading';
import { Search } from 'semantic-ui-react';
import PokemonForm from './PokemonForm'
const URL = 'http://localhost:3000/pokemon';
const spritefront = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
const spriteback = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png';

class PokemonIndex extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(json => this.setState({
        pokemons: json
      }))
  }

  handleSearch = (e) => {
    console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    })
  }

  filterPokemon = () => {
    return this.state.pokemons.filter(p => p.name.includes(this.state.searchTerm.toLowerCase()))
  }

  addPokemon = (state) => {
    console.log(state.hp);
    let newPokemon = {
      id: 1,
      name: state.name,
      stats: [0,1,2,3,4, {
        value: parseInt(state.hp),
        name: "hp"}],
      sprites: {
        front: state.frontUrl,
        back: state.backUrl
      }
    };
    let updatedPokes = [newPokemon, ...this.state.pokemons];
    this.setState({
        pokemons: updatedPokes
    });
  }

  render() {
    console.log(this.state.pokemons);
    let filteredPokemon = this.filterPokemon();
    return (
      <div>

        <br />
        <PokemonForm handleAdd={this.addPokemon}/><br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} />
        <br />
        {this.state.pokemons.length > 0 ? <PokemonCollection pokemons={filteredPokemon} /> : <Loading /> }
        <br />
      </div>
    )
  }
}

export default PokemonIndex;
