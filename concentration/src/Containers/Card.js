import { render } from '@testing-library/react'
import React, {Component} from 'react'
import CardBack from "../Components/CardBack"
import CardFront from "../Components/CardFront"

export default class Card extends Component {
   
  state = {
    displayFront: false,
  }
  
  componentDidUpdate(previousProps, previousState) {
    // check previous props of matched array in app level state
    // previousProps.matchCards.length !== this.props.matchCards.length
    // previousProps.isMatch !== this.props.isMatch

    if(!this.props.card1 && previousProps.card1){ // checks to see if the turn is over
      this.checkForMatch()
      console.log("card 1 exists")
    }
    
    // if(previousState.displayFront !== this.state.displayFront){
    //   this.checkForMatch()
    // }
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

  checkForMatch = () => {
    const isMatched = this.props.matchCards.find(code => code === this.props.card.code)
    if(!isMatched) {
      console.log("is not matched")
      this.setState({displayFront: false})
    }
  }

  // Invokes when a card back is clicked
  cardBackClick = () => {
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
