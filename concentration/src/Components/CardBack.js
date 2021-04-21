import React from 'react'

const cardBackImage="https://media.gettyimages.com/vectors/playing-card-design-vector-id180001639?s=2048x2048"

export default function CardBack(props) {

    return (
        <div>
            <img
                className="card-back-image"
                src={cardBackImage}
                onClick={props.cardBackClick}
            />
        </div>
    )
}
