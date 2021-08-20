import React, { useCallback, useEffect, useState } from 'react'

import generateArray from 'functions/generateArray';
import { getFromStorage, saveToStorage } from 'functions/storage';

import { Col, Row } from 'components/layout/Grid';
import { Divider } from '@material-ui/core';

import colors from '../QwintoDraw/colors';

import QwintoBoardErrors from './QwintoBoardErrors';
import QwintoBoardRow from './QwintoBoardRow';
import QwintoDraw from 'components/games/qwinto/QwintoDraw';
import QwintoBoardSettings from './QwintoBoardSettings';
import checkQwintoPlacement from '../functions/checkQwintoPlacement';
import getQwintoResults from '../functions/getQwintoResults';

const storageKey = 'qwinto';
const initGameState = {
    rows: generateArray(3, generateArray(10, '')),
    errors: generateArray(4, false)
};

const QwintoBoard = () => {
    const [board, setBoard] = useState(getFromStorage('qwinto') ?? initGameState);
    const [disabled, setDisabled] = useState(true);
    const [canApplyDraw, setCanApplyDraw] = useState(true);
    const [results, setResults] = useState(null);

    const handleChangeErrors = useCallback(index => {
        setBoard(vs => ({
            ...vs,
            errors: vs.errors.map((error, i) => index === i ? !error : error)
        }));
    }, [setBoard]);

    const handleChangeBoard = useCallback((row, col, newValue) => {
        if (checkQwintoPlacement(board, newValue, row, col) || !disabled) {
            setCanApplyDraw(false);
            
            setBoard(vs => ({
                ...vs,
                rows: vs.rows.map((r, ri) => row === ri ? r.map((c, ci) => col === ci ? newValue : c) : r)
            }));
        }
    }, [setBoard, board, setCanApplyDraw, disabled]);

    useEffect(() => {
        saveToStorage(storageKey, board);
        setResults(getQwintoResults(board));
    }, [board]);

    const resetBoard = () => {
        setBoard(initGameState);
    }

    return <div>
        {
            board.rows.map((row, index) => <QwintoBoardRow
                row={index}
                color={colors[index]}
                board={board}
                setBoard={handleChangeBoard}
                disabled={disabled}
                canApplyDraw={canApplyDraw}
                key={index}
            />
            )
        }

        <Divider className="mt-1" />

        <Row
            className="mt-1"
            justifyContent="space-between"
            alignContent="center"
        >
            <Col xs={6}>
                <QwintoBoardErrors
                    errors={board.errors}
                    setBoard={handleChangeErrors}
                />
            </Col>

            <Col xs={"auto"}>
                <QwintoBoardSettings
                    disabled={disabled}
                    setDisabled={setDisabled}
                    resetBoard={resetBoard}
                    results={results}
                />
            </Col>

        </Row>

        <Divider className="mt-1 mb-1" />

        <Row
            justifyContent="center"
            alignItems="center"
        >
            <QwintoDraw setCanApplyDraw={setCanApplyDraw} />
        </Row>
    </div>
}


export default QwintoBoard;
