import React from 'react'
import { Col, Form } from 'react-bootstrap'
import { connect } from 'react-redux';
import qwintoBoardConfig from '../QwintoBoardRow/qwintoBoardConfig'

import './qwintoBoardItem.css';

const QwintoBoardItem = ({ rowIndex, colIndex, colors, value, setValue, draw, disabled = true, canApplyDraw, setCanApplyDraw }) => {
    const rowConfig = qwintoBoardConfig[rowIndex];
    const isDisabledItem = rowConfig.disabled === colIndex;
    const isScoreItem = rowConfig.score.some(element => element === colIndex);

    const updateValue = newValue => {
        if (!canApplyDraw) {
            return;
        }

        if (!disabled) {
            return;
        }

        if (value) {
            return;
        }

        if (newValue === '') {
            return;
        }

        if ((newValue === 0) && (newValue > 18)) {
            return;
        }

        setCanApplyDraw(false);
        setValue(rowIndex, colIndex, newValue);
    }

    const handleClick = () => {
        if (draw) {
            updateValue(draw);
        }
    }

    const getClasses = () => {
        let basesClases = 'QwintoBoardItem-input border text-center'

        if (isScoreItem) {
            basesClases += ' rounded-circle';
        }

        return basesClases;
    }

    return <Col className="QwintoBoardItem p-1">
        {
            isDisabledItem && <div className="QwintoBoardItem-input"></div>
        }
        {
            !isDisabledItem && <Form
                onClick={handleClick}
            >
                <Form.Control
                    type="number"
                    className={getClasses()}
                    style={{
                        backgroundColor: colors.secondary
                    }}
                    value={value}
                    onChange={(event) => updateValue(event.target.value)}
                    disabled={disabled}
                />
            </Form>
        }
    </Col>
}

const mapStateToProps = ({ draw }) => ({ draw });

export default connect(mapStateToProps)(QwintoBoardItem);
