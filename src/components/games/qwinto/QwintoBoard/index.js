import React, { useCallback, useEffect, useState } from 'react'

import generateArray from 'functions/generateArray';
import { getFromStorage, saveToStorage } from 'functions/storage';

import { Col, Row } from 'react-bootstrap';
import { Divider } from '@material-ui/core';

import colors from '../Dices/colors';

import QwintoBoardErrors from './QwintoBoardErrors';
import QwintoBoardRow from './QwintoBoardRow';
import Dices from '../Dices';

const QwintoBoard = () => {
    const [value, setValue] = useState(getFromStorage('qwinto') ?? {
        rows: generateArray(3, generateArray(10, '')),
        errors: generateArray(4, false)
    });

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
        saveToStorage('qwinto', value);
    }, [value]);

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
                    />
                </Col>
            </Row>
            )
        }

        <Divider className="mt-2" />

        <Row
            className="mt-2 justify-content-center"
            noGutters
        >
            <Col xs={"auto"}>
                <QwintoBoardErrors
                    value={value.errors}
                    setValue={handleChangeErrors}
                />
            </Col>
        </Row>

        <Divider className="mt-2" />

        <Dices />
    </div>
}


export default QwintoBoard;
