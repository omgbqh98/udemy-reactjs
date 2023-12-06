import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalCreateUser from './ModalCreateUser';
import './ManageUsers.scss';

const ManageUser = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="manage-users-container">
            <div className="title">
                users manager
            </div>
            <div className="users-content">
                <div>

                </div>
                <div>
                    table
                </div>
                <ModalCreateUser></ModalCreateUser>
            </div>
        </div>
    )
}

export default ManageUser;