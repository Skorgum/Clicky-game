import React, { Component }from 'react';
import Jumbotron from "./components/Jumbotron/Jumbotron.js"
import Card from "./components/Card/Card.js"
import cards from "./cards.json"
import './App.css';

class App extends Component {

  state = {
    cards: cards,
    score: 0,
    highScore: 0,
    clickedCards: [],
  }

  render() {
    return (
      <div>
        <Jumbotron score={this.state.score} highScore={this.state.highScore} />
      </div>
    )
  }
}
export default App;
