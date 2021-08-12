import { Container, Row } from "react-bootstrap"

import './dices.css'

export const Dice = ({
    color = 'blue',
    value,
    selected = true,
    handleChange = (index) => console.log(`Default function Dice ${index}`),
    index
}) => {
    return <Container
        className="p-1 mt-2 rounded pointer"
        style={selected ? {
            backgroundColor: '#DFF3FA'
        } : {}}
        onClick={() => handleChange(index)}
    >
        <Row
            className="m-0 p-2"
            noGutters
        >
            <div
                className="Dice-value rounded h1 text-white text-center"
                style={{ backgroundColor: color }}
            >
                {selected && <span className="align-middle">{value}</span>}
            </div>
        </Row>
    </Container>
}