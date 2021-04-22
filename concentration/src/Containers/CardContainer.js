import React from 'react'
import Card from './Card'

export default function CardContainer(props) {



    const displayCard = () => {
        return props.cards.map((card, index) => {
            return (<Card
                key={card.code + index}
                card={card}
                card1={props.card1}
                matchCards={props.matchCards}
                card1Clicked={props.card1Clicked}
                card2Clicked={props.card2Clicked}
                isMatch={props.isMatch}
                checkForMatch={props.checkForMatch}
            />)
        })
    }

    return (
        <div className="card-container">
            {displayCard()}
        </div>
    )
}
