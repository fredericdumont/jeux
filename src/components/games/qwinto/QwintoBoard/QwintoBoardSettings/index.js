import React, { useState } from 'react'

import { Col, Row } from 'components/layout/Grid';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ListIcon from '@material-ui/icons/List';
import CheckIcon from '@material-ui/icons/Check';
import { IconButton } from '@material-ui/core';

import ConfirmModal from 'components/layout/ConfirmModal';
import QwintoResults from '../QwintoResults';

const QwintoBoardSettings = ({
    disabled,
    setDisabled,
    resetBoard,
    results
}) => {
    const [show, setShow] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const handleClear = () => {
        resetBoard();
    }

    return <Row>
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
            xs="auto"
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
            open={show}
            setOpen={setShow}
            onValidate={handleClear}
            title="Vider la grille ?"
        />

        {
            showResults && results && <QwintoResults
                show={showResults}
                setShow={setShowResults}
                results={results}
            />
        }
    </Row>
}

export default QwintoBoardSettings;
