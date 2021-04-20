import React from 'react'
import Card from './Card'

export default function CardContainer(props) {

    const displayCard = () => {
        return props.cards.map(card => {
            return (<Card card={card} key={card.id}/>)
        })
    }

    return (
        <div className="card-container">
            {displayCard()}
        </div>
    )
}
