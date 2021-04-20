import React from 'react'

export default function CardBack(props) {

    // When a card is clicked, it should flip face-up
    // When a second card is clicked, we compare the code (value)
    // If there is a match, both cards remain face up, and handleClick is disabled
    // If it is not a match, both cards flip face-down
    
    const handleClick = () => {
        console.log(props.card.code)
        props.displayCardFront(props.card)
    }

    return (
        <div>
            <img
                className="card-back-image"
                onClick={handleClick}
                src="https://media.gettyimages.com/vectors/playing-card-design-vector-id180001639?s=2048x2048"
            />
        </div>
    )
}
