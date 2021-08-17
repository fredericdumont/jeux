import React, { useCallback, useEffect, useState } from 'react'

import generateArray from 'functions/generateArray';
import { getFromStorage, saveToStorage } from 'functions/storage';

import { Col, Row } from 'react-bootstrap';
import { Divider } from '@material-ui/core';

import colors from '../QwintoDraw/colors';

import QwintoBoardErrors from './QwintoBoardErrors';
import QwintoBoardRow from './QwintoBoardRow';
import QwintoDraw from 'components/games/qwinto/QwintoDraw';
import QwintoBoardSettings from './QwintoBoardSettings';

const storageKey = 'qwinto';
const initGameState = {
    rows: generateArray(3, generateArray(10, '')),
    errors: generateArray(4, false)
};

const QwintoBoard = () => {
    const [value, setValue] = useState(getFromStorage('qwinto') ?? initGameState);
    const [disabled, setDisabled] = useState(true);
    const [canApplyDraw, setCanApplyDraw] = useState(true);

    const handleChangeErrors = useCallback(index => {
        setValue(vs => ({
            ...vs,
            errors: vs.errors.map((error, i) => index === i ? !error : error)
        }));
    }, [setValue]);

    const handleChangeValue = useCallback((rowIndex, colIndex, value) => {
        setValue(vs => ({
            ...vs,
            rows: vs.rows.map((row, ri) => rowIndex === ri ? row.map((v, ci) => colIndex === ci ? value : v) : row)
        }));
    }, [setValue]);

    useEffect(() => {
        saveToStorage(storageKey, value);
    }, [value]);

    const resetValue = () => {
        setValue(initGameState);
    }

    return <div>
        {
            value.rows.map((row, index) => <Row
                className="mt-1"
                key={index}
                noGutters
            >
                <Col
                    xs={{
                        span: 10,
                        offset: 2 - index
                    }}
                >
                    <QwintoBoardRow
                        rowIndex={index}
                        colors={colors[index]}
                        value={value.rows[index]}
                        setValue={handleChangeValue}
                        disabled={disabled}
                        canApplyDraw={canApplyDraw}
                        setCanApplyDraw={setCanApplyDraw}
                    />
                </Col>
            </Row>
            )
        }

        <Divider className="mt-2" />

        <Row
            className="mt-2 justify-content-between"
            noGutters
        >
            <Col xs={"auto"}>
                <QwintoBoardErrors
                    value={value.errors}
                    setValue={handleChangeErrors}
                />
            </Col>

            <Col xs={"auto"}>
                <QwintoBoardSettings
                    disabled={disabled}
                    setDisabled={setDisabled}
                    resetValue={resetValue}
                />
            </Col>
        </Row>

        <Divider className="mt-2" />

        <QwintoDraw setCanApplyDraw={setCanApplyDraw} />
    </div>
}


export default QwintoBoard;
