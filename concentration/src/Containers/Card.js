import { render } from '@testing-library/react'
import React, {Component} from 'react'
import CardBack from "../Components/CardBack"
import CardFront from "../Components/CardFront"

export default class Card extends Component {
   
  state = {
    displayFront: false,
    match: false
  }

  // When a first card is clicked, it should flip face-up
  // When a second card is clicked, we compare the code (value)
  // If there is a match, both cards remain face up, and handleClick is disabled
  // If it is not a match, both cards flip face-down
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
          clickCardBack={this.cardBackClick}
        />
      )
    }
  }
  
  // Change the state of displayFront to true
  displayCardFront = () => {
    this.setState({displayFront: true})
  }

  // MATCH LOGIC
  // IF cards match 
  // THEN disable click funtionality from the two cards,
  //    change card1 and card2 state back to empty arrays,
  //    BONUS remove/hide card1 and card2 div (hide functionality)
  // ELSE cards do not match
  // 2sec delay before display CardBack
  // Change card1 anbd card2 state back to empty arrays


  // Once the cards match, both card1 and card2 unique values are pushed to an empty array in App.js state
  // When that array's length is equal to the number of cards on the table, the game is complete

  matchCheck = (card2Code) => {
    if(this.props.card1 === card2Code) {
      console.log("is a match, card1:", this.props.card1, ", card2:", card2Code)
      // we need to set the match state of card1 AND card 2 to true...how dow we do that?
      this.setState({match: true})
    }
    else {
      console.log("not a match, card1:", this.props.card1, ", card2:", card2Code)
    }
  }

  cardBackClick = () => {
    // Check to see if card has already been matched
    if(this.props.card1 === null) { // if a card1 has not been clicked
        this.displayCardFront(this.props.card) // display the front of card1
        this.props.card1Clicked(this.props.card.code) // set card1 state to card1 code
    } 
     else { // if this is the second card clicked
        this.displayCardFront(this.props.card) // display the front of the card2
        this.props.card2Clicked(this.props.card.code) // set card2 state to the card2
        this.matchCheck(this.props.card.code)
        // setTimeout(console.log(this.props.card2), 2000)
        // console.log(this.props.card1)
        // console.log(this.props.card2)
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
