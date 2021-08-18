import React from 'react'
import { Row } from 'react-bootstrap'
import QwintoBoardItem from '../QwintoBoardItem'

const QwintoBoardRow = ({
    row,
    board,
    setBoard,
    disabled,
    canApplyDraw,
    color
}) => {
    return <Row
        noGutters
        style={{
            backgroundColor: color.primary
        }}
        className="border rounded"
    >
        {
            board.rows[row].map((col, index) => {
                return <QwintoBoardItem
                    key={index}
                    board={board}
                    col={index}
                    row={row}
                    color={color}
                    value={col}
                    setBoard={setBoard}
                    disabled={disabled}
                    canApplyDraw={canApplyDraw}
                />
            })
        }
    </Row>
}

export default QwintoBoardRow
