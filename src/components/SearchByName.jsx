import React, { useState } from 'react'

function SearchByName(props) {
    const [name, setName] = useState("");
    function checkName(name, data) {
        if (name === '') {
            return data
        }
        return data.filter((person) => {
            if (person.name === name) {
                return person
            }
        })
    }
    return (
        <>
            <form>
                <input
                    type="text"
                    value={name}
                    placeholder='Search by name...'
                    onChange={(e) => {
                        const newName = e.target.value;
                        setName(newName);
                        props.setData(
                            checkName(newName, props.data)
                        );
                    }}
                />
            </form>
        </>
    )
}

export default SearchByName


