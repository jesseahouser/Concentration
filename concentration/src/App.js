import './App.css';
import React, { Component } from 'react'
import CardContainer from './Components/CardContainer'

const cardsURL = 'https://deckofcardsapi.com/api/deck/new/draw/' // backend API URL
const drawNumber = 4 // set the number of cards to draw from the deck


// class component with state
export default class App extends Component {

  state = {
    cards: [] // array with two copies of each card drawn
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
      .then(drawCards => this.setState({ // set state
        cards: drawCards.cards.concat(drawCards.cards) // joins two arrays of cards that are drawn
        })
      )
  }

  render() {
    return (
      <div>
        <CardContainer
          cards={this.state.cards}
        />
      </div>
    )
  }
}
