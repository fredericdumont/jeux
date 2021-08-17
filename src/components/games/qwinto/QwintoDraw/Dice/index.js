import React from 'react';
import './QwintoDraw.css';

export const Dice = ({
    color = 'blue',
    value,
    setValue = (index) => console.log(`Default function Dice ${index}`),
    selected = true,
    index
}) => {
    return <div
        className="p-1 m-0 mt-2 rounded pointer"
        style={selected ? {
            backgroundColor: '#DFF3FA'
        } : {}}
        onClick={() => setValue(index)}
    >
        <div
            className="Dice-value rounded h2 text-white text-center"
            style={{ backgroundColor: color.primary }}
        >
            {selected && value && <span className="align-middle">{value}</span>}
        </div>
    </div>
}
