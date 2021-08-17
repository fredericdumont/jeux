import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ConfirmModal from 'components/layout/ConfirmModal';

const QwintoBoardSettings = ({ disabled, setDisabled, resetValue }) => {
    const [show, setShow] = useState(false);

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
                onClick={() => setShow(true)}
                disabled={!disabled}
            >
                <DeleteIcon />
            </IconButton>
        </Col>

        <ConfirmModal
            show={show}
            setShow={setShow}
            onValidate={handleClear}
            title="Vider la grille ?"
        />
    </Row>
}

export default QwintoBoardSettings;
