import { useEffect } from 'react';

import { Col } from 'react-bootstrap';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { saveDraw, saveSelection } from 'firestore/qwinto';

import { Dice } from 'components/games/qwinto/QwintoDraw/Dice';

import colors from './colors';

import { Button } from '@material-ui/core';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';


import randomNumber from 'functions/randomNumber';
import sumOfArray from 'functions/sumOfArray';
import generateArray from 'functions/generateArray';

const initialSelectionState = generateArray(3, true);

export const QwintoDraw = ({ total, values, setCanApplyDraw, selection }) => {

    useEffect(() => {
        if (selection.length !== 3) {
            saveSelection(initialSelectionState);
        }
    }, [selection]);

    const handleSelectionChange = (index) => {
        saveSelection(selection.map((s, i) => index === i ? !s : s));
    }

    const handleClick = () => {
        setCanApplyDraw(true);

        saveDraw([
            selection[0] ? randomNumber() : null,
            selection[1] ? randomNumber() : null,
            selection[2] ? randomNumber() : null
        ])
    }

    useEffect(() => {
        setCanApplyDraw(true);
    }, [values, setCanApplyDraw])

    return <>
        {
            colors.map((color, index) => {
                return <Col
                    key={index}
                    className="m-1"
                    xs={"auto"}
                >
                    <Dice
                        color={color}
                        selected={selection[index]}
                        value={values[index]}
                        setValue={handleSelectionChange}
                        index={index}
                    />
                </Col>
            })
        }

        {
            (total > 0) && <>
                <Col
                    xs={1}
                    className="p-0 m-0 text-center"
                >
                    <DoubleArrowIcon />
                </Col>

                <Col
                    xs={1}
                    className="text-center"
                >
                    <b className="h2">{total}</b>
                </Col>
            </>
        }

        <Col
            className="mx-3"
            xs={"auto"}
        >
            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
                className="text-capitalize"
            >
                Tirage
            </Button>
        </Col>
    </>
}

const mapStateToProps = ({ firestore }) => {
    return {
        total: sumOfArray(firestore.data?.qwinto?.draw?.values) ?? null,
        values: firestore.data?.qwinto?.draw?.values ?? [],
        selection: firestore.data?.qwinto?.selection?.values ?? []
    };
}

export default compose(
    firestoreConnect(() => ['qwinto']),
    connect(mapStateToProps)
)(QwintoDraw);
