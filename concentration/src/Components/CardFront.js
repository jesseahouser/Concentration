import React from 'react'

export default function Card(props) {

    // When a card is clicked, it should flip face-up
    // When a second card is clicked, we compare the code (value)
    // If there is a match, both cards remain face up, and handleClick is disabled
    // If it is not a match, both cards flip face-down
    // const handleClick = () => {
    //     console.log(props.card.code)

    // }

    return (
        <div>
            <img
                src={props.card.image}
                // onClick={handleClick}
            />
        </div>
    )
}
