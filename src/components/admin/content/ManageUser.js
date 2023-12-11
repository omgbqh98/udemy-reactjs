import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalCreateUser from './ModalCreateUser';
import './ManageUsers.scss';

const ManageUser = (props) => {
    const [show, setShow] = useState(false);

    return (
        <div className="manage-users-container">
            <div className="title">
                users manager
            </div>
            <div className="users-content">
                <div className='btn-add-new'>
                    <button className='btn btn-primary' onClick={() => setShow(true)}>Add new users</button>
                </div>
                <div className='table-users-container'>
                    table
                </div>
                <ModalCreateUser
                    show={show}
                    setShow={setShow}
                >
                </ModalCreateUser>
            </div>
        </div>
    )
}

export default ManageUser;