import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
const audio = new Audio('http://66.90.93.122/ost/pokemon-ten-years-of-pokemon/qivigmyg/1-Pokemon%20Theme%20%28Season%20Theme%29.mp3');


class PokemonCard extends Component {
  constructor(props){
    super(props)

    this.state = {
      active: false
      // audio: new Audio(require(`../cries/${this.props.pokemon.id}` + `.ogg`))
    }

  }

  handleHover = () => {
    this.setState({
      active: true
    })
    audio.play();
    audio.loop = true

    }

  handleExit = () => {
    this.setState({
      active: false
    })
    audio.pause()
    if (audio.ended) {
      audio.currentTime = 0
    }
  }

render() {
  return (
    <Card>
      <div>
        <div onMouseEnter={this.handleHover} onMouseLeave={this.handleExit} className="image">
          <img  alt="oh no!" src={this.state.active ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front}/>
        </div>
        <div className="content">
          <div className="header">{this.props.pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {this.state.active ? this.props.pokemon.abilities[1]: this.props.pokemon.stats.find(stat => stat.name === 'hp').value}
          </span>
        </div>
      </div>
    </Card>
  )
}
}

export default PokemonCard;
