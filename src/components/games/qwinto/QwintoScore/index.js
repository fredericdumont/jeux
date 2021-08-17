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
    size = '35px'
}) => {
    const getClasses = () => {
        let basesClases = 'border text-center align-top p-0'

        if (rounded) {
            basesClases += ' rounded-circle';
        }

        return basesClases;
    }

    return <Form
        onClick={formClick}
        className="QwintoScore"
    >
        <Form.Control
            type="number"
            className={getClasses()}
            style={{
                backgroundColor,
                width: `${size}`,
                height: `${size}`,
                color,
                ...(borderColor ? { borderColor } : {})
            }}
            value={value}
            onChange={inputChange}
            disabled={disabled}
        />
    </Form>
}

export default QwintoScore;
