import { render } from '@testing-library/react'
import React, {Component} from 'react'
import CardBack from "../Components/CardBack"
import CardFront from "../Components/CardFront"

export default class Card extends Component {
   
  state = {
    displayFront: false,
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
  
  // NOT BEING USED YET
  isMatched = () => {
    if(this.props.match.filter(code => code === this.props.card.code)) {
      return(null)// this.setState({displayFront: true})
    }
    else {
      this.setState({displayFront: false})
    }

  }

  // Change the state of displayFront to true
  displayCardFront = () => {
    this.setState({displayFront: true})
  }

  // Invokes when a card back is clicked
  cardBackClick = () => {
    // Check to see if card has already been matched
    if(this.props.card1 === null) { // if a card1 has not been clicked
        this.displayCardFront(this.props.card) // display the front of card1
        this.props.card1Clicked(this.props.card.code) // set card1 state to card1 code
    } 
     else { // if this is the second card clicked
        this.displayCardFront(this.props.card) // display the front of the card2
        this.props.card2Clicked(this.props.card.code) // set card2 state to the card2 MIGHT NOT NEED
        this.props.matchCheck(this.props.card.code) // checks for a match with card1
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
