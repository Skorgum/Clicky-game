import React, { Component } from 'react';
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

  // Function to update score
  updateScore = (id) => {

    // Reset the game if a previously selected card is clicked
    if (this.state.clickedCards.includes(id)) {
      alert("You lose!");
      this.setState({ score: 0, clickedCards: [] })
    }

    // Push to clickedCards array if not previously selected
    else {
      this.setState({ clickedCards: [...this.state.clickedCards, id] })
      this.setState({ score: this.state.score + 1 })
      // Determine high score and adjust accordingly
      if (this.state.score >= this.state.highScore) {
        this.setState({ highScore: this.state.score + 1 })
      }
      // Win condition
      if (this.state.score === 11) {
        this.setState({ score: 0, highScore: 12, clickedCards: [], cards: cards })
        alert("You win!");
      }
    }
  }

  // Randomize cards function
  randomCards = (array) => {
    let currentIndex = array.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.setState({ randomize: cards });
  }

  render() {
    return (
      <div>
        <Jumbotron score={this.state.score} highScore={this.state.highScore} />
        <div className="container">
          <div className="row">
            {this.state.cards.map(cardRender => (
              <div className="col-md-3" id={cardRender.id}>
                <Card
                  image={cardRender.image}
                  randomCards={() => { this.randomCards(this.state.cards) }}
                  updateScore={() => { this.updateScore(cardRender.id) }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default App;
