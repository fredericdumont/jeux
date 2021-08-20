import React from 'react';
import {
    BiDice1,
    BiDice2,
    BiDice3,
    BiDice4,
    BiDice5,
    BiDice6,
    BiSquare
} from 'react-icons/bi';

import './QwintoDraw.css';

const iconSize = '50px';

export const Dice = ({
    color = 'blue',
    value,
    setValue = (index) => { },
    selected = true,
    index
}) => {
    const getIcon = () => {       
        if (!value) {
            return getIconWithStyle(BiSquare);
        }

        const icons = [
            BiDice1,
            BiDice2,
            BiDice3,
            BiDice4,
            BiDice5,
            BiDice6
        ];

        return getIconWithStyle(icons[value - 1]);
    }

    const getIconWithStyle = (Icon) => {
        return <Icon
            style={{
                color: selected ? color.primary : 'grey',
                fontSize: iconSize
            }}
        />
    }

    return <div
        className="m-0 rounded pointer"
        style={selected ? {
            backgroundColor: '#DFF3FA',
            width: iconSize,
            height: iconSize
        } : {}}
        onClick={() => setValue(index)}
    >
        {selected ? getIcon() : getIcon(BiSquare)}
    </div>
}
