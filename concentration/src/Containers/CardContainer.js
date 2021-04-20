import React from 'react'
import Card from './Card'

export default function CardContainer(props) {

    const displayCard = () => {
        return props.cards.map((card, index) => {
            return (<Card
                key={card.code + index}
                card={card}
                displayFront={props.displayFront}
                displayCardFront={props.displayCardFront}
            />)
        })
    }

    return (
        <div className="card-container">
            {displayCard()}
        </div>
    )
}
