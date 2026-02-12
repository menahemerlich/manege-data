import React, { useState } from 'react'
import data from '../data/data.json'
import TerroristCard from './TerroristCard';
import SearchByName from './SearchByName';
import Reset from './Reset';

function ShowTerrorists() {
    const [terrorists, setData] = useState(data)
    return (
        <div>
            <SearchByName data={data} setData={setData} />
            {/* <Reset data={data} setData={setData} /> */}
            {terrorists.map((item, index) =>
                <div key={index} id='card'>
                    <TerroristCard details={item} />
                </div>
            )}

        </div>
    )
}

export default ShowTerrorists
