import React from 'react';

import { Button, Divider, Typography } from '@material-ui/core';
import Modal from '../Modal';
import { Col, Row } from '../Grid';

const ConfirmModal = ({
    title,
    validateLabel = 'Oui',
    cancelLabel = 'Non',
    onValidate,
    open,
    setOpen
}) => {
    const handleValidate = () => {
        onValidate();
        setOpen(false);
    }

    return <Modal
        open={open}
        setOpen={setOpen}
    >
        <Typography variant="h5" gutterBottom>
            {title}
        </Typography>

        <Divider variant="middle" />

        <Row
            justifyContent="center"
            spacing={1}
        >
            <Col>
                <Button
                    variant="outlined"
                    color="primary"
                    className="text-capitalize"
                    onClick={() => setOpen(false)}
                >
                    {cancelLabel}
                </Button>
            </Col>

            <Col>
                <Button
                    variant="contained"
                    color="primary"
                    className="text-capitalize"
                    onClick={handleValidate}
                >
                    {validateLabel}
                </Button>
            </Col>
        </Row>
    </Modal>
}

export default ConfirmModal;
