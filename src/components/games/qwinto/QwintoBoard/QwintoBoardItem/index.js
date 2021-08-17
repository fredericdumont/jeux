import React from 'react'
import { Col } from 'react-bootstrap'

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import qwintoBoardConfig from '../QwintoBoardRow/qwintoBoardConfig'

import sumOfArray from 'functions/sumOfArray';

import QwintoScore from '../../QwintoScore';

const QwintoBoardItem = ({
    rowIndex,
    colIndex,
    color,
    value,
    setValue,
    total,
    disabled = true,
    canApplyDraw,
    setCanApplyDraw
}) => {
    const rowConfig = qwintoBoardConfig[rowIndex];
    const isDisabledItem = rowConfig.disabled === colIndex;
    const isScoreItem = rowConfig.score.some(element => element === colIndex);

    const applyValue = (newValue) => {
        if ((newValue === 0) || (newValue > 18)) {
            return;
        }

        setCanApplyDraw(false);
        setValue(rowIndex, colIndex, newValue);
    }

    const updateValue = newValue => {

        const newValueParsed = newValue === '' ? '' : JSON.parse(newValue);

        if (!disabled) {
            applyValue(newValueParsed);
        }

        return;
    }

    const handleClick = () => {
        if (total && disabled && canApplyDraw) {
            applyValue(total);
        }
    }

    return <Col className="p-1">
        {
            isDisabledItem && <div className="QwintoBoardItem-input"></div>
        }
        
        {
            !isDisabledItem && <QwintoScore
                formClick={handleClick}
                inputChange={(event) => updateValue(event.target.value)}
                disabled={disabled}
                backgroundColor={color.secondary}
                rounded={isScoreItem}
                value={value}
            />
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
