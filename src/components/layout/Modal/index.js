import React from 'react';
import Dialog from '@material-ui/core/Dialog';

const Modal = ({ children, open, setOpen }) => {
    return <Dialog
        onClose={() => setOpen(false)}
        open={open}
    >
        <div
            className="p-4"
            style={{
                backgroundColor: '#DFF3FA'
            }}
        >
            {children}
        </div>
    </Dialog>;
}

export default Modal