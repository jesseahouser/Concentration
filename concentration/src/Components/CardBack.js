import React from 'react'
import cardBackImage from './playing-card-back-vector-final.jpg'

// const cardBackImage="/home/boneb/flatIron/m2project/Concentration/concentration/src/Components/playing-card-back-vector-final.jpg"

// http://getdrawings.com/vectors/playing-card-back-vector-13.jpg
// "https://media.gettyimages.com/vectors/playing-card-design-vector-id180001639?s=2048x2048"

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
