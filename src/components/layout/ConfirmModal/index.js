import React from 'react';

import { Modal } from 'react-bootstrap';
import { Button } from '@material-ui/core';

const ConfirmModal = ({ show, setShow, title, validateLabel = 'Oui', cancelLabel = 'Non', onValidate }) => {
    const handleValidate = () => {
        onValidate();
        setShow(false);
    }

    return <Modal
        show={show}
        onHide={() => setShow(false)}
    >
        <Modal.Header className="justify-content-center">
            <Modal.Title>
                {title}
            </Modal.Title>
        </Modal.Header>

        <Modal.Footer className="justify-content-center">
            <div className="mr-4">
                <Button
                    variant="outlined"
                    color="primary"
                    className="text-capitalize"
                    onClick={() => setShow(false)}
                >
                    {cancelLabel}
                </Button>
            </div>

            <Button
                variant="contained"
                color="primary"
                className="text-capitalize"
                onClick={handleValidate}
            >
                {validateLabel}
            </Button>
        </Modal.Footer>
    </Modal>
}

export default ConfirmModal;
