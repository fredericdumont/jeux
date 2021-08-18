import React from 'react'

import { Form } from 'react-bootstrap';

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
    bold = false
}) => {
    const getClasses = () => {
        let basesClases = `border text-center align-top p-0 ${className}`

        if (rounded) {
            basesClases += ' rounded-circle';
        }

        return basesClases;
    }

    const getStyle = () => {
        const style = {
            backgroundColor,
            width: `${size}`,
            height: `${size}`,
            color
        };

        if (borderColor) {
            style.borderColor = borderColor;
        }

        if (bold) {
            style.fontWeight = 'bold';
        }

        return style;
    }

    return <Form
        className={`QwintoScore`}
        onClick={formClick}
    >
        <Form.Control
            type="number"
            className={getClasses()}
            style={getStyle()}
            value={value}
            onChange={inputChange}
            disabled={disabled}
        />
    </Form>
}

export default QwintoScore;
