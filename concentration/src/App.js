import './App.css';
import React, { Component } from 'react'
import CardContainer from './Components/CardContainer'


const cardsURL = 'https://deckofcardsapi.com/api/deck/new/draw/'

export default class App extends Component {

  state = {
    cards : [],
    dupeCards: [],
    allCards: []
  }


  componentDidMount() {
    fetch(cardsURL +  "?count=2")
    .then(response => response.json())
    .then(cards => this.setState({
      cards : cards.cards,
      dupeCards : cards.cards,
      allCards : cards.cards.concat(cards.cards)
    }))
  }

 



  render() {
    return (
      <div>
        <CardContainer  cards={this.state.allCards}/>
      </div>
    )
  }
}

