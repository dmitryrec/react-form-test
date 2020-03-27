import React from 'react';

export default function TextInput({text}) {
    return (
        <input
            className="text-input"
            type="text" 
            value={text} 
            placeholder="Text field" 
        />
    )
}
