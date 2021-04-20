import { render } from '@testing-library/react'
import React, {Component} from 'react'
import CardBack from "../Components/CardBack"
import CardFront from "../Components/CardFront"

export default class Card extends Component {
   
  state = {
    displayFront: false,
    match: false,
    card1: [],
    card2: []
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
          card1={this.card1}
          card2={this.card2}
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
          card1={this.card1}
          card2={this.card2}
        />
      )
    }
  }
  
  // When a card is clicked, change the state of displayFront to true
  displayCardFront = () => {
    this.setState({displayFront: true})
  }

  card1Clicked = (clickedCard) => {
    this.setState({card1: clickedCard})
  }

  card2Clicked = (clickedCard) => {
    this.setState({card2: clickedCard})
  }

    // Display logic
    // First render CardBack
    // If clicked, render CardFront
    render(){
      return (
          <div>
              {this.displayCard()}
             
          </div>
      )
    }
  }
