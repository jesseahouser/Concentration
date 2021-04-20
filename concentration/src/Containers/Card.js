import { render } from '@testing-library/react'
import React from 'react'
import CardBack from "../Components/CardBack"
import CardFront from "../Components/CardFront"

export default function Card (props) {

   


    // When a card is clicked, it should flip face-up
    // When a second card is clicked, we compare the code (value)
    // If there is a match, both cards remain face up, and handleClick is disabled
    // If it is not a match, both cards flip face-down
    
    const displayCard = () => {
      if(props.displayFront) {
        return (
            <CardFront card={props.card} />
        )
      }
      else {
        return (
          <CardBack card={props.card} displayCardFront={props.displayCardFront} />
        )
      }
    }
    
    
    

    // Display logic
    // First render CardBack
    // If clicked, render CardFront
    return (
        <div>
            {displayCard()}
           
        </div>
    )
  }
