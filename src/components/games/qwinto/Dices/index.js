import colors from './colors';
import { Col, Container, Row, Button } from "react-bootstrap";
import { Dice } from '../Dice';
import { useState } from 'react';

import randomNumber from '../../../../functions/randomNumber';

export const Dices = () => {
    const [selection, setSelection] = useState([
        true,
        true,
        true
    ]);

    const [values, setValues] = useState([
        '',
        '',
        ''
    ]);

    const handleSelectionChange = (index) => {
        setSelection(previousSelection => previousSelection.map((currentSelection, selectionIndex) => {
            return selectionIndex === index ? !currentSelection : currentSelection;
        }))
    }

    const handleClick = () => {
        setValues([
            selection[0] ? randomNumber() : '',
            selection[1] ? randomNumber() : '',
            selection[2] ? randomNumber() : ''
        ])
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

        <Row
            className="mt-5"
            noGutters
        >
            <Button onClick={handleClick}>Tirage</Button>
        </Row>
    </Container>;
}

export default Dices;
