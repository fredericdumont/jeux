import { Row } from 'components/layout/Grid';
import React from 'react'

import './QwintoScore.css';

const QwintoScore = ({
    formClick = () => { },
    inputChange = () => { },
    disabled,
    color = 'black',
    backgroundColor,
    borderColor = null,
    rounded = false,
    value,
    size = '35px',
    className = '',
    bold = false,
    pointer = false
}) => {
    const getClasses = () => {
        let classes = `text-center rounded font-text-bold align-top`

        if (rounded) {
            classes += ' rounded-circle';
        }

        if (pointer) {
            classes += ' pointer';
        }

        return classes;
    }

    const getStyle = () => {
        const style = {
            width: size,
            height: size,
            backgroundColor,
            border: 'none',
            color
        };

        if(borderColor) {
            style.border = `solid 1px ${borderColor}`
        }

        if (bold) {
            style.fontWeight = 'bold';
        }

        return style;
    }

    return <Row
        justifyContent="center"
        className={`h-100 ${className}`}
        onClick={formClick}
    >
        <input
            value={value}
            onChange={inputChange}
            type="number"
            style={getStyle()}
            className={getClasses()}
            disabled={disabled}
        />
    </Row>
}

export default QwintoScore;
