import React from 'react'
import { Col, Row } from 'components/layout/Grid'
import QwintoBoardItem from '../QwintoBoardItem'

const QwintoBoardRow = ({
    row,
    board,
    setBoard,
    disabled,
    canApplyDraw,
    color
}) => {
    return <Row>
        <Col
            offset={2 - row}
            xs={10}
            container
            style={{
                backgroundColor: color.primary
            }}
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
        </Col>
    </Row>
}

export default QwintoBoardRow
