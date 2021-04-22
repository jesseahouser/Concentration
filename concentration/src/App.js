import './App.css';
import React, { Component } from 'react'
import CardContainer from './Containers/CardContainer'
import Score from './Components/Score'

const cardsURL = 'https://deckofcardsapi.com/api/deck/new/draw/' // backend API URL
const drawNumber = 4 // set the number of cards to draw from the deck


// class component with state
export default class App extends Component {

  state = {
    cards: [], // array with two copies of each card drawn
    card1: null,
    matchCards: [],
    isMatch: false,
    clickCounter: 0
  }

  // To-do: randomize/shuffle cards array
  // function shuffleCards(cards){ // takes an array of cards as an argument
  //   let array = []
  //   let newArray = []
  //   for(i=0; i < 104; i++){ // creates an array with 104 values from 0 to 103
  //       newArray.push(i)
  //   }
  //   while(newArray.length > 0){ // iterate 102 times
  //     let index = Math.floor(Math.random() * newArray.length) // multiplying array length by a random number between 0 and 9
  //     array.push(newArray[index]) // push that value into the array, probably need to use the cards array coming in as argument
  //     newArray = newArray.slice(0, index).concat(newArray.slice(index+1)) //
  //   }
  //   console.log(array)
  // }

  componentDidMount() {
    fetch(cardsURL +  "?count=" + drawNumber) // draw cards (GET) from the backend
      .then(response => response.json()) // parse data into json format
      .then(drawCards => {
        // console.log(drawCards.cards)
        // drawCards.cards.map(card => {
        //   card.isMatched=false
        // })
        this.setState({ // set state
            cards: drawCards.cards.concat(drawCards.cards) // joins two arrays of cards that are drawn
        })
      } 
    )
  }

  card1Clicked = (clickedCard) => {
    this.setState({card1: clickedCard})
  }

  card2Clicked = (clickedCard) => {
    //this.setState({card2: clickedCard})
  }

  checkForMatch = (card2Clicked) => {
    if(this.state.card1 === card2Clicked) {
      this.setState({
        matchCards: [...this.state.matchCards, this.state.card1, card2Clicked],
        card1: null,
        isMatch: true
      })
      console.log(this.state.matchCards.length)
      if(this.state.cards.length === this.state.matchCards.length + 2) {
        alert("GAME OVER")
      }
    }
    else {
      this.setState({card1: null, isMatch: false})
    }
  }

  incrementClickCounter = (click) => {
    this.setState({ clickCounter: this.state.clickCounter + 1})
  }

  checkForGameOver = () => {
    if(this.state.cards.length === this.state.matchCards.length) {
      console.log("GAME OVER")
    }
  }

  render() {
    return (
      <div>
        <Score clickCounter={this.state.clickCounter} />
        <CardContainer
          cards={this.state.cards}
          card1={this.state.card1}
          card2={this.state.card2}
          isMatch={this.state.isMatch}
          matchCards={this.state.matchCards}
          incrementClickCounter={this.incrementClickCounter}
          card1Clicked={this.card1Clicked}
          card2Clicked={this.card2Clicked}
          checkForMatch={this.checkForMatch}
          />
      </div>
    )
  }
}
