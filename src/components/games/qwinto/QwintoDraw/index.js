import { useEffect } from 'react';

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

export const QwintoDraw = ({ total, draws, random, setCanApplyDraw, selection }) => {

    useEffect(() => {
        if (selection.length !== 3) {
            saveSelection(initialSelectionState);
        }
    }, [selection]);

    const handleSelectionChange = (index) => {
        saveSelection(selection.map((s, i) => index === i ? !s : s));
    }

    const handleClick = () => {
        saveDraw({
            random: randomNumber(0, 100000),
            values: [
                selection[0] ? randomNumber() : null,
                selection[1] ? randomNumber() : null,
                selection[2] ? randomNumber() : null
            ]
        });
    }

    useEffect(() => {
        setCanApplyDraw(true);
    }, [draws, setCanApplyDraw, random])

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
                        value={draws[index]}
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
        draws: firestore.data?.qwinto?.draw?.values ?? [],
        random: firestore.data?.qwinto?.draw?.random,
        selection: firestore.data?.qwinto?.selection?.values ?? []
    };
}

export default compose(
    firestoreConnect(() => ['qwinto']),
    connect(mapStateToProps)
)(QwintoDraw);
