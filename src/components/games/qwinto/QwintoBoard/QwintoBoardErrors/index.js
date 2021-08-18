import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ErrorIcon from '@material-ui/icons/Error';

import './qwintoBoardErrors.css';
import { Checkbox } from '@material-ui/core';

const errorsCount = 4;

const QwintoBoardErrors = ({ errors, setBoard }) => {
    const handleClick = index => {
        if (errors[index]) {
            if (index === (errorsCount - 1)) {
                if (errors[index - 1] === true) {
                    setBoard(errorsCount - 1);
                }
            } else {
                if (errors[index + 1] === false) {
                    setBoard(index);
                }
            }
        } else {
            if (index === 0) {
                if (errors[index + 1] === false) {
                    setBoard(0);
                }
            } else {
                if (errors[index - 1] === true) {
                    setBoard(index);
                }
            }
        }
    }

    return <Row
        className="justify-content-center"
        noGutters
    >
        <Col
            style={{
                backgroundColor: '#B8B8B8'
            }}
            className="rounded m-0 p-0"
            xs={7}
        >
            <Row
                className="justify-content-center align-items-center"
                noGutters
            >
                <Col
                    className="m-2 p-0"
                    xs={"auto"}
                >
                    <ErrorIcon />
                </Col>

                {
                    errors && errors.map((error, index) => <Col
                        key={index}
                        className="p-0 m-0"
                        xs="auto"
                    >
                        <Checkbox
                            checked={error}
                            onChange={() => handleClick(index)}
                            color="primary"
                            className="p-1"
                        />
                    </Col>)
                }
            </Row>
        </Col>
    </Row>
}

export default QwintoBoardErrors;
