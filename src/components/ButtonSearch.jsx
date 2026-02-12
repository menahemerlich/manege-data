import React from 'react'

function ButtonSearch(props) {
    function checkStatus(status, data) {        
        if (status === 'all') {
            return data
        }
        return data.filter((person) => {
            if (person.status === status) {
                return person
            }
        })
    }
    return (
        <button
            onClick={() => {
                props.setData(
                    checkStatus(props.status, props.data)
                )
            }}
        >
            {props.status}
        </button>
    )
}

export default ButtonSearch
