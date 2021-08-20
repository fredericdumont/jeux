import React from 'react'
import { Col } from 'components/layout/Grid'

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import qwintoBoardConfig from '../QwintoBoardRow/qwintoBoardConfig'

import sumOfArray from 'functions/sumOfArray';

import QwintoScore from '../../QwintoScore';
import checkQwintoPlacement from '../../functions/checkQwintoPlacement';

import { MdClose } from 'react-icons/md';

const itemSize = '40px';

const QwintoBoardItem = ({
    row,
    col,
    color,
    value,
    board,
    setBoard,
    total,
    disabled = true,
    canApplyDraw
}) => {
    const rowConfig = qwintoBoardConfig[row];
    const isDisabledItem = rowConfig.disabled === col;
    const isScoreItem = rowConfig.score.some(element => element === col);

    const applyValue = (newValue) => {
        if (((newValue === 0) || (newValue > 18))) {
            return;
        }

        setBoard(row, col, newValue);
    }

    const handleChange = newValue => {
        const newValueParsed = newValue === '' ? '' : JSON.parse(newValue);

        if (!disabled) {
            applyValue(newValueParsed);
        }

        return;
    }

    const handleClick = () => {
        if (total && disabled && canApplyDraw && !value) {
            applyValue(total);
        }
    }

    const isValidPlacement = () => {
        return checkQwintoPlacement(board, total, row, col)
    }

    return <Col
        container
        justifyContent="center"
        alignItems="center"
        xs
    >
        {
            isDisabledItem && <div className="QwintoBoardItem-input"></div>
        }

        {
            !isDisabledItem && <>
                {
                    !isValidPlacement() && !value && canApplyDraw && <div
                        style={{ position: 'absolute' }}
                    >
                        <MdClose style={{
                            fontSize: itemSize
                        }} />
                    </div>
                }

                <QwintoScore
                    className="p-1"
                    formClick={handleClick}
                    inputChange={(event) => handleChange(event.target.value)}
                    disabled={disabled}
                    backgroundColor={color.secondary}
                    borderColor={'grey'}
                    rounded={isScoreItem}
                    value={value}
                    size={itemSize}
                    pointer={disabled}
                    bold
                />
            </>
        }

    </Col>
}

const mapStateToProps = ({ firestore }) => {
    return {
        total: sumOfArray(firestore.data?.qwinto?.draw?.values) ?? null
    };
}
export default compose(
    firestoreConnect(() => ['qwinto']),
    connect(mapStateToProps)
)(QwintoBoardItem);
