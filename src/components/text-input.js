import React from 'react';

export default function TextInput(props) {
    return (
        <input
            className="text-input"
            type="text" 
            value={props.text} 
            onChange={(value)=>props.onChange(value, props.id)}
            placeholder="Text field" 
        />
    )
}