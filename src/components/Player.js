import React, {PureComponent} from 'react'
import Counter from './Counter.js';
import HighScoreIcon from './HighScoreIcon.js'
import PropTypes from 'prop-types'

class Player extends PureComponent  {
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  }

  
  render() {
      const {
        name, 
        score,
        id, 
        index,
        removePlayer, 
        changeScore,
        hasHighScore
      } = this.props;
      return (
        <div className="player">
          <span className="player-name">
            <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
            <HighScoreIcon highScore={hasHighScore} />
            { name }
          </span>
          <Counter score={score} changeScore={changeScore} index={index} />
        </div>
      );
  }
}

export default Player