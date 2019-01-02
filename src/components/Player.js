import React, {PureComponent} from 'react'
import Counter from './Counter.js';

class Player extends PureComponent  {
  render() {
      const {
        name, 
        score,
        id, 
        index,
        removePlayer, 
        changeScore
      } = this.props;
      return (
        <div className="player">
          <span className="player-name">
            <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
            { name }
          </span>
          <Counter score={score} changeScore={changeScore} index={index} />
        </div>
      );
  }
}

export default Player