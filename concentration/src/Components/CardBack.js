import React from 'react'

const cardBackImage="https://media.gettyimages.com/vectors/playing-card-design-vector-id180001639?s=2048x2048"

export default function CardBack(props) {

    // When a card is clicked, it should flip face-up
    // When a second card is clicked, we compare the code (value)
    // If there is a match, both cards remain face up, and handleClick is disabled
    // If it is not a match, both cards flip face-down
    

  // when first card is clicked, set displayFront=true, put that card in card1
  // when second card is clicked, set displayFront=true, put that card in card2
  // if card1 and card2 have matching code, then set match=true and display blanks
  // if card1 and card2 do not have matching codes, then wait 1 second and set displayFront=false, clear card1 and card2


  //WE NEED TO PICK UP HERE
  //card2 state is not being set for some weird reason
  
    // const handleClick = () => {
    //   if(props.card1) { // if a card1 has been clicked
    //     props.displayCardFront(props.card) // display the front of the card2
    //     props.card2Clicked(props.card) // set card2 state to the card2
    //   }
    //   else { // if this is the first clicked card
    //     props.displayCardFront(props.card) // display the front of card1
    //     props.card1Clicked(props.card) // set card1 state to card1
    //   }
    // }

    return (
        <div>
            <img
                className="card-back-image"
                // onClick={handleClick}
                src={cardBackImage}
            />
        </div>
    )
}
