import React from 'react';

export default function SelectInput({ buyers}) {
    return (
        <select>
            {buyers.map(buyer => <option key={buyer}>{buyer}</option>)}
        </select>
    )
}
