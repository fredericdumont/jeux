import { useCallback, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import colors from './colors';
import { Col, Row } from 'react-bootstrap';
import { Dice } from 'components/games/qwinto/Dices/Dice';

import randomNumber from 'functions/randomNumber';
import { Button } from '@material-ui/core';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

export const Dices = ({ total }) => {
    const [selection, setSelection] = useState([true, true, true]);
    const [values, setValues] = useState([null, null, null]);

    const dispatch = useDispatch();

    const handleSelectionChange = (index) => {
        setSelection(previousSelection => previousSelection.map((currentSelection, selectionIndex) => {
            return selectionIndex === index ? !currentSelection : currentSelection;
        }))
    }

    const handleClick = () => {
        setValues([
            selection[0] ? randomNumber() : null,
            selection[1] ? randomNumber() : null,
            selection[2] ? randomNumber() : null
        ])
    }

    const getTotal = useCallback(() => {
        return values.reduce((previousValue = 0, currentValue) => currentValue ? previousValue += currentValue : previousValue)
    }, [values])

    useEffect(() => {
        dispatch({
            type: 'UPDATE_DRAW',
            value: getTotal()
        });
    }, [selection, dispatch, getTotal])

    return <Row
        className="justify-content-end align-items-center"
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

        {
            total && <Col
                xs="auto"
                className="p-0 m-0"
            >
                <DoubleArrowIcon />
            </Col>
        }

        {
            total && <Col xs="auto">
                <b className="h2">{total}</b>
            </Col>
        }

        <Col xs="auto">
            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
                className="text-capitalize"
            >
                Nouveau tirage
            </Button>
        </Col>
    </Row>
}

const mapStateToProps = ({ draw }) => ({
    total: draw
});

export default connect(mapStateToProps)(Dices);
