import React, { useState } from 'react'

function SearchByName(props) {
    const [name, setName] = useState("");
    function checkName(name, data){
        // console.log(data);
        console.log(name);
        
        if (name === ''){
            console.log('empty');
            
            return data
        }
        return data.filter((person) => {
                                if (person.name === name) {
                                    return person
                                }
                            })
        
    }
    // console.log(checkName(name, props.data));
    return (
        <>
            <form>
                <input
                    type="text"
                    value={name}
                    placeholder='Search by name...'
                    onChange={(e) => {
                        setName(e.target.value)
                        props.setData(
                            checkName(name, props.data)
                        )
                    }}
                />
            </form>
        </>
    )
}

export default SearchByName

