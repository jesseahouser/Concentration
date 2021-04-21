import React from 'react'
import Card from './Card'

export default function CardContainer(props) {

    const displayCard = () => {
        return props.cards.map((card, index) => {
            return (<Card
                key={card.code + index}
                card={card}
                card1={props.card1}
                card2={props.card2}
                card1Clicked={props.card1Clicked}
                card2Clicked={props.card2Clicked}
            />)
        })
    }

    return (
        <div className="card-container">
            {displayCard()}
        </div>
    )
}
