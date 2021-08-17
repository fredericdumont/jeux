import React from 'react'
import { Row } from 'react-bootstrap'
import QwintoBoardItem from '../QwintoBoardItem'

const QwintoBoardRow = ({ color, rowIndex, value, setValue, disabled, canApplyDraw, setCanApplyDraw }) => {
    return <Row
        noGutters
        style={{
            backgroundColor: color.primary
        }}
        className="border rounded"
    >
        {
            value.map((value, index) => {
                return <QwintoBoardItem
                    key={index}
                    colIndex={index}
                    rowIndex={rowIndex}
                    color={color}
                    value={value}
                    setValue={setValue}
                    disabled={disabled}
                    canApplyDraw={canApplyDraw}
                    setCanApplyDraw={setCanApplyDraw}
                />
            })
        }
    </Row>
}

export default QwintoBoardRow
