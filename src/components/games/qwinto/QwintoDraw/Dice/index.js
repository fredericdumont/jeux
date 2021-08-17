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
        let Icon = null;

        switch (value) {
            case 1:
                Icon = BiDice1;
                break;
            case 2:
                Icon = BiDice2;
                break;
            case 3:
                Icon = BiDice3;
                break;
            case 4:
                Icon = BiDice4;
                break;
            case 5:
                Icon = BiDice5;
                break;
            case 6:
                Icon = BiDice6;
                break;
            default:
                Icon = BiSquare;
                break;
        }

        return getIconWithStyle(Icon)
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
