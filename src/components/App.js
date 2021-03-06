import React from 'react';
import Header from './Header.js';
import Player from './Player.js'
import AddPlayerForm from './AddPlayerForm.js'

class App extends React.Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  // Player Id Generator
  prevPlayerId = 4;

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {name, score: 0, id: this.prevPlayerId += 1}
        ]
      }
    })
  }

  calcHighScore = () => {
    return Math.max.apply(Math, this.state.players.map(p => {return p.score}))
  }

  hasHighScore = () => {
    //return Math.max.apply(Math, player.map(p => {return p.score}))
    /*
    console.log('highestScore ',highestScore);
    if(highestScore && player.score === highestScore) {
      return true
    } else {
      return false
    }*/
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player,i) => {
            const hasHighScore = player.score ? (this.calcHighScore() === player.score) : false;
            return (
              <Player 
                name={player.name}
                score={player.score}
                id={player.id}
                key={player.id.toString()} 
                hasHighScore={hasHighScore}
                index={i}
                removePlayer={this.handleRemovePlayer}
                changeScore={this.handleScoreChange}
              />
            )
          }
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
