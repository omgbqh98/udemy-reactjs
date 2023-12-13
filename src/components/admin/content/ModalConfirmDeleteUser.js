import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../service/apiServices';
import _ from 'lodash';
const ModalConfirmDeleteUser = (props) => {

    const { showDeleteModal, setShowDeleteModal, dataUpdate } = props;

    const handleClose = () => {
        setShowDeleteModal(false)
    };

    const handleDeleteUser = async () => {
        console.log("id", dataUpdate.id)
        let data = await deleteUser(dataUpdate.id);

        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            await props.fetchListUsers();
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    };

    return (
        <>
            <Modal show={showDeleteModal} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete <b>{dataUpdate.email}</b>?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleDeleteUser}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalConfirmDeleteUser;