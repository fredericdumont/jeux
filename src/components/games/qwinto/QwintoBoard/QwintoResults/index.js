import React from 'react'

import { Col, Modal, Row } from 'react-bootstrap';

import QwintoScore from '../../QwintoScore';
import colors from '../../QwintoDraw/colors';

import { Button } from '@material-ui/core';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import { BiPlusMedical } from 'react-icons/bi'

const QwintoResults = ({
    show,
    setShow,
    results
}) => {
    const handleClose = () => {
        setShow(false);
    }

    const getCols = (
        values = [],
        backgroundColor,
        color = null,
        borderColor = null,
        rounded = false
    ) => {
        return (colors = null) => values.map((value, index) => <Col
            key={index}
            xs={"auto"}
        >
            <QwintoScore
                color={backgroundColor}
                backgroundColor={color ?? colors[index].primary}
                borderColor={borderColor}
                value={value}
                rounded={rounded}
            />
        </Col>
        )
    }

    return <Modal
        show={show}
        onHide={handleClose}
    >
        <Modal.Header className="justify-content-center">
            <Modal.Title>
                Résultats
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Row
                className="ml-4 align-items-baseline justify-content-between"
                noGutters
            >
                {
                    getCols(results.rows, 'white')(colors)
                }

                <Col xs={"auto"}>
                    <BiPlusMedical />
                </Col>

                {
                    getCols(results.cols, 'grey', 'white', null, true)()
                }

                <Col xs={"auto"}>
                    <BiPlusMedical />
                </Col>

                {
                    getCols([results.errors], 'white', '#C4C4C4', 'black')()
                }

                <Col xs={"auto"}>
                    <DoubleArrowIcon />
                </Col>

                {
                    getCols([results.total], 'white', '#C4C4C4', 'black')()
                }
            </Row>
        </Modal.Body>

        <Modal.Footer className="justify-content-end">
            <Button
                variant="contained"
                color="primary"
                className="text-capitalize"
                onClick={handleClose}
            >
                Fermer
            </Button>
        </Modal.Footer>
    </Modal>
}

export default QwintoResults
