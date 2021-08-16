import React from 'react'
import { Col, Form } from 'react-bootstrap'
import qwintoBoardConfig from '../QwintoBoardRow/qwintoBoardConfig'

import './qwintoBoardItem.css';

const QwintoBoardItem = ({ rowIndex, colIndex, colors, value, setValue }) => {
    const rowConfig = qwintoBoardConfig[rowIndex];
    const isDisabledItem = rowConfig.disabled === colIndex;
    const isScoreItem = rowConfig.score.some(element => element === colIndex);

    const getClasses = () => {
        let basesClases = 'QwintoBoardItem-input border'

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
            !isDisabledItem && <Form>
                <Form.Control
                    type="number"
                    className={getClasses()}
                    style={{
                        backgroundColor: colors.secondary
                    }}
                    value={value}
                    onChange={(event) => setValue(rowIndex, colIndex, event.target.value)}
                />
            </Form>
        }
    </Col>
}

export default QwintoBoardItem;
