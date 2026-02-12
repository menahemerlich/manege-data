import React from 'react'

function MostDangerous(props) {
    const attacksCountArr = []
    for (const element of props.data) {
        attacksCountArr.push(element.attacksCount)
    }
    const maxAttacks = Math.max(...attacksCountArr)
    return (
        <button
            onClick={() => {
                props.setData(
                    props.data.filter((person) => {
                        if (person.status === "active" && person.imageUrl !== null && person.attacksCount === maxAttacks) {
                            return person
                        }
                    })
                )

            }}
        >
            Most Dangerous Terrorist
        </button>
    )
}

export default MostDangerous



