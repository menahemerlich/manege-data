import React from 'react'

function Reset(props) {
    return (
        <button onClick={props.setData(props.data)}>Reset</button>
    )
}

export default Reset
