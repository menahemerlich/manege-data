import React, { useState } from 'react'

function SearchByNumber(props) {
    const [number, setNumber] = useState();
    function checkNumber(number, data) {
        if (number === '') {
            return data
        }
        return data.filter((person) => {
            if (person.attacksCount === Number(number)) {
                return person
            }
        })
    }
    return (
        <>
            <form>
                <input
                    type="number"
                    value={number}
                    placeholder='Search by number...'
                    onChange={(e) => {
                        const newNumber = e.target.value;
                        setNumber(newNumber);
                        props.setData(
                            checkNumber(newNumber, props.data)
                        );
                    }}
                />
            </form>
        </>
    )
}

export default SearchByNumber


