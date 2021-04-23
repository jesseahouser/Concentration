import { render } from '@testing-library/react'
import React, {Component} from 'react'
import CardBack from "../Components/CardBack"
import CardFront from "../Components/CardFront"

export default class Card extends Component {
   
  state = {
    displayFront: false,
  }
  
  // Runs when props or state changes
  componentDidUpdate(previousProps, previousState) {
    if(!this.props.card1 && previousProps.card1){ // checks to see if the turn is over (card1 is currently empty and previously card1 had a code)
      this.checkForMatch() // check to see if the card is in the match array
    }
  }  

  // Display either the front or the back of the card
  displayCard = () => {
    if(this.state.displayFront) { // check to see if we need to display the card front
      return (
        <CardFront
          card={this.props.card}
        />
      )
    }
    else { // if we don't need to display the card front, display the card back
      return (
        <CardBack
          cardBackClick={this.cardBackClick}
        />
      )
    }
  }
  
  // Change the state of displayFront to true
  displayCardFront = () => {
    this.setState({displayFront: true})
  }
  
  // Check to see if the cards are in the match array
  checkForMatch = () => {
    const isMatched = this.props.matchCards.find(code => code === this.props.card.code) // search through the matched cards to see if the card matches any of them
    if(!isMatched) {
      setTimeout(() => {this.setState({displayFront: false})}, 1000) // if it is not in the matched cards array, don't display the front of the card
    }
  }

  // Invokes when a card back is clicked
  cardBackClick = () => {
    this.props.incrementClickCounter()
    if(this.props.card1 === null) { // if a card1 has not been clicked
        this.displayCardFront(this.props.card) // display the front of card1
        this.props.card1Clicked(this.props.card.code) // set card1 state to card1 code
    } 
     else { // if this is the second card clicked
        this.displayCardFront(this.props.card) // display the front of the card2
        this.props.card2Clicked(this.props.card.code) // set card2 state to the card2 MIGHT NOT NEED
        this.props.checkForMatch(this.props.card.code) // checks for a match with card1
    }
  }

  render(){
    return (
        <div>
            {this.displayCard()}
        </div>
    )
  }
}
