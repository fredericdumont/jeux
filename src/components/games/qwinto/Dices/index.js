import colors from './colors';
import { Col, Container, Row } from "react-bootstrap";
import { Dice } from 'components/games/qwinto/Dice';
import { useState } from 'react';

import randomNumber from 'functions/randomNumber';
import { Button } from '@material-ui/core';

export const Dices = () => {
    const [selection, setSelection] = useState([true, true, true]);
    const [values, setValues] = useState([null, null, null]);

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

    const getTotal = () => {
        return values.reduce((previousValue = 0, currentValue) => currentValue ? previousValue += currentValue : previousValue)
    }

    return <Container>
        <Row
            className="justify-content-center"
            noGutters
        >
            {
                colors.map((color, index) => {
                    return <Col key={index} xs="auto">
                        <Dice
                            color={color}
                            selected={selection[index]}
                            handleChange={handleSelectionChange}
                            value={values[index]}
                            index={index}
                        />
                    </Col>
                })
            }
        </Row>

        {
            getTotal() > 0 && <Row
                className="justify-content-center mt-3"
                noGutters
            >
                <Col xs="auto">
                    <i>Total: <b>{getTotal()}</b></i>
                </Col>
            </Row>
        }

        <Row
            className="justify-content-center mt-3"
            noGutters
        >
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
    </Container>;
}

export default Dices;
