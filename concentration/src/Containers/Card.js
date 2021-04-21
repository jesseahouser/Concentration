import { render } from '@testing-library/react'
import React, {Component} from 'react'
import CardBack from "../Components/CardBack"
import CardFront from "../Components/CardFront"

export default class Card extends Component {
   
  state = {
    displayFront: false,
    match: []
  }

  // When a card is clicked, it should flip face-up
  // When a second card is clicked, we compare the code (value)
  // If there is a match, both cards remain face up, and handleClick is disabled
  // If it is not a match, both cards flip face-down




  displayCard = () => {
    if(this.state.displayFront) {
      return (
        <CardFront
          card={this.props.card}
          match={this.match}
          card1={this.props.card1}
          card2={this.props.card2}
        />
      )
    }
    else {
      return (
        <CardBack
          card={this.props.card}
          displayCardFront={this.displayCardFront}
          card1Clicked={this.card1Clicked}
          card2Clicked={this.card2Clicked}
          match={this.match}
          card1={this.props.card1}
          card2={this.props.card2}
        />
      )
    }
  }
  
  // When a card is clicked, change the state of displayFront to true
  displayCardFront = () => {
    this.setState({displayFront: true})
  }

  // card1Clicked = (clickedCard) => {
  //   this.setState({card1: clickedCard})
  // }

  // card2Clicked = (clickedCard) => {
  //   this.setState({card2: clickedCard})
  // }

  handleClick = () => {
    if(this.props.card1.length === 0) { // if a card1 has been clicked 
        this.displayCardFront(this.props.card) // display the front of card1
        this.props.card1Clicked(this.props.card.code) // set card1 state to card1
    } 
     else { // if this is the first clicked card
        this.displayCardFront(this.props.card) // display the front of the card2
        this.props.card2Clicked(this.props.card.code) // set card2 state to the card2
      // MATCH: card1 === card2 
      // remove Click feature from card1 and card2
      //// remove card1 / card2 div (hide functionality) BONUS
      // this.state.card1/2 === []

      // NO MATCH: card1 !== card2 -> this.state.card1 this.state.card2 === []
      // 2sec delay before displayBack

    }
  }
    // Display logic
    // First render CardBack
    // If clicked, render CardFront
    render(){
      return (
          <div onClick={this.handleClick}>
             
              {this.displayCard()}
             
          </div>
      )
    }
  }
