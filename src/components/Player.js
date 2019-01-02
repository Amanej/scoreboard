import React, {PureComponent} from 'react'
import Counter from './Counter.js';

class Player extends PureComponent  {
  render() {
      console.log('Player name rendered '+this.props.name);
      return (
        <div className="player">
          <span className="player-name">
            <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
            { this.props.name }
          </span>
          <Counter score={this.props.score} changeScore={this.props.changeScore} index={this.props.index} />
        </div>
      );
  }
}

export default Player