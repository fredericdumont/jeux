import React from 'react'

import { Col, Row } from 'components/layout/Grid';

import QwintoScore from '../../QwintoScore';
import colors from '../../QwintoDraw/colors';

import { Button, Typography } from '@material-ui/core';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import { BiPlusMedical } from 'react-icons/bi'
import Modal from 'components/layout/Modal';

const QwintoResults = ({
    show,
    setShow,
    results
}) => {
    const getCols = (
        values = [],
        backgroundColor,
        color = null,
        borderColor = null,
        rounded = false
    ) => {
        return (colors = null) => values.map((value, index) => <Col
            key={index}
            xs
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
        open={show}
        setOpen={setShow}
    >
        <Typography variant="h5">Résultats</Typography>

        <Row
            className="mt-3"
            alignItems="baseline"
            justifyContent="space-between"
            spacing={1}
        >
            {
                getCols(results.rows, 'white')(colors)
            }

            <Col>
                <BiPlusMedical />
            </Col>

            {
                getCols(results.cols, 'grey', 'white', null, true)()
            }

            <Col>
                <BiPlusMedical />
            </Col>

            {
                getCols([results.errors], 'white', '#C4C4C4', 'black')()
            }

            <Col>
                <DoubleArrowIcon />
            </Col>

            {
                getCols([results.total], 'white', '#C4C4C4', 'black')()
            }
        </Row>

        <Row
            justifyContent="flex-end"
            className="mt-3"
        >
            <Button
                variant="contained"
                color="primary"
                className="text-capitalize"
                onClick={() => setShow(false)}
            >
                Fermer
            </Button>
        </Row>
    </Modal >
}

export default QwintoResults
