import React from 'react'
import '../css/TerroristCard.css'

function TerroristCard(props) {
    let image = null
    function checkImage() {

        if (props.details.imageUrl === null) {
            image = '/man.png'
        } else {
            image = props.details.imageUrl
        }
    }
    checkImage()
    return (
        <div id='card'>
            <img src={image} alt="" />
            <h1>{props.details.name}</h1>
            <h2>{props.details.organization}</h2>
            <h3>{props.details.attacksCount}</h3>
            <p id='status'>{props.details.status}</p>
            <p>{props.details.relationToIsraelSummary}</p>
        </div>
    )
}

export default TerroristCard
