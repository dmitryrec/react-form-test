import React from 'react';

export default function SelectInputUsers({ users }) {
    return (
        <select className="select-input">
            {users.map(user => <option key={Math.random()}>{user.name}</option>)}
        </select>
    )
}
