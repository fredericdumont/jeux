import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import colors from './colors';
import { Col, Row } from 'react-bootstrap';
import { Dice } from 'components/games/qwinto/QwintoDraw/Dice';

import randomNumber from 'functions/randomNumber';
import { Button } from '@material-ui/core';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { saveDraw } from 'firestore/saveDraw';
import { firestoreConnect } from 'react-redux-firebase';
import totalOfArray from 'functions/totalOfArray';
import generateArray from 'functions/generateArray';

const initialSelectionState = generateArray(3, true);

export const QwintoDraw = ({ total, values, setCanApplyDraw }) => {
    const [selection, setSelection] = useState(initialSelectionState);

    const handleSelectionChange = (index) => {
        setSelection(previousSelection => previousSelection.map((currentSelection, selectionIndex) => {
            return selectionIndex === index ? !currentSelection : currentSelection;
        }))
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

    return <Row
        className="justify-content-center align-items-center"
        noGutters
    >
        {
            colors.map((color, index) => {
                return <Col key={index} xs="auto">
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


        <Col xs="auto">
            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
                className="text-capitalize"
            >
                Tirage
            </Button>
        </Col>

        {
            (total > 0) && <>
                <Col
                    xs="auto"
                    className="p-0 m-0"
                >
                    <DoubleArrowIcon />
                </Col>

                <Col xs="auto">
                    <b className="h2">{total}</b>
                </Col>
            </>
        }
    </Row>
}

const mapStateToProps = ({ firestore }) => {
    return {
        total: totalOfArray(firestore.data?.qwinto?.draw?.values) ?? null,
        values: firestore.data?.qwinto?.draw?.values ?? initialSelectionState
    };
}

export default compose(
    firestoreConnect(() => ['qwinto']),
    connect(mapStateToProps)
)(QwintoDraw);
