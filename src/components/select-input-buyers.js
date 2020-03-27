import React from 'react';

export default function SelectInputBuyers({ buyers }) {
    return (
        <select className="select-input">
            {buyers.map(buyer => <option key={buyer}>{buyer}</option>)}
        </select>
    )
}
