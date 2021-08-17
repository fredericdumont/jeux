import React, { useState } from 'react'

import { Col, Row } from 'react-bootstrap';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ListIcon from '@material-ui/icons/List';
import CheckIcon from '@material-ui/icons/Check';
import { IconButton } from '@material-ui/core';

import ConfirmModal from 'components/layout/ConfirmModal';
import QwintoResults from '../QwintoResults';
import getQwintoResults from '../../getQwintoResults';

const QwintoBoardSettings = ({ disabled, setDisabled, resetValue, value }) => {
    const [show, setShow] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const handleClear = () => {
        resetValue();
    }

    return <Row noGutters>
        <Col
            xs="auto"
            className="p-0"
        >
            <IconButton
                size="medium"
                onClick={() => setShow(true)}
                disabled={!disabled}
            >
                <DeleteIcon />
            </IconButton>
        </Col>

        <Col
            xs="auto"
            className="p-0"
        >
            <IconButton
                size="medium"
                onClick={() => setDisabled(d => !d)}
            >
                {disabled ? <EditIcon /> : <CheckIcon />}
            </IconButton>
        </Col>

        <Col
            xs={"auto"}
            className="p-0"
        >
            <IconButton
                size="medium"
                onClick={() => setShowResults(true)}
            >
                <ListIcon />
            </IconButton>
        </Col>

        <ConfirmModal
            show={show}
            setShow={setShow}
            onValidate={handleClear}
            title="Vider la grille ?"
        />

        {
            showResults && <QwintoResults
                show={showResults}
                setShow={setShowResults}
                results={getQwintoResults(value)}
            />
        }
    </Row>
}

export default QwintoBoardSettings;
