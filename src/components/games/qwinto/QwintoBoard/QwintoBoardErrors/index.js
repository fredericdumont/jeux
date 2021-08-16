import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import ErrorIcon from '@material-ui/icons/Error';

import './qwintoBoardErrors.css';

const errorsCount = 4;

const QwintoBoardErrors = ({ value, setValue }) => {
    const handleClick = index => {
        if (value[index]) {
            if (index === (errorsCount - 1)) {
                if (value[index - 1] === true) {
                    setValue(errorsCount - 1);
                }
            } else {
                if (value[index + 1] === false) {
                    setValue(index);
                }
            }
        } else {
            if (index === 0) {
                if (value[index + 1] === false) {
                    setValue(0);
                }
            } else {
                if (value[index - 1] === true) {
                    setValue(index);
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
            className="rounded"
            xs="auto"
        >
            <Row
                className="justify-content-center align-items-center"
                noGutters
            >
                <Col>
                    <ErrorIcon />
                </Col>
                {
                    value && value.map((element, index) => <Col
                        key={index}
                        className="p-0 m-2"
                        xs="auto"
                    >
                        <Form>
                            <Form.Check
                                checked={element}
                                onChange={() => handleClick(index)}
                                type="checkbox"
                                className="p-0 m-0"
                            />
                        </Form>
                    </Col>)
                }
            </Row>
        </Col>
    </Row>
}

export default QwintoBoardErrors;
