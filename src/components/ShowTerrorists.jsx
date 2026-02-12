import React, { useState } from 'react'
import data from '../data/data.json'
import TerroristCard from './TerroristCard';
import SearchByName from './SearchByName';
import Reset from './Reset';
import SearchByNumber from './SearchByNumber';
import ButtonSearch from './ButtonSearch';
import ButtonSearch1 from './MostDangerous';

function ShowTerrorists() {
    const [terrorists, setData] = useState(data)
    const statusOptions = ['active', 'quiet', 'agent', 'dead', 'all']
    return (
        <div>
            <div id='searchInput'>
                <SearchByName data={data} setData={setData} />
                <SearchByNumber data={data} setData={setData} />
            </div>
            <ButtonSearch1 data={data} setData={setData} />
            <div className='buttonSearch'>
                {statusOptions.map((status, index) =>
                    <div key={index} >
                        <ButtonSearch data={data} setData={setData} status={status} />
                    </div>
                )}

            </div>
            {terrorists.map((item, index) =>
                <div key={index} >
                    <TerroristCard details={item} />
                </div>
            )}

        </div>
    )
}

export default ShowTerrorists
