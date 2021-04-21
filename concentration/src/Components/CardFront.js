import React from 'react'

export default function CardFront(props) {

    return (
        <div>
            <img
                className="card-front-image"
                src={props.card.image}
            />
        </div>
    )
}
