import { useState, useEffect } from 'react';
import ModalCreateUser from './ModalCreateUser';
import './ManageUsers.scss';
import TableUser from './TableUser';
import { getListUser } from '../../../service/apiServices';
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';
import ModalConfirmDeleteUser from './ModalConfirmDeleteUser';

const ManageUser = (props) => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        fetchListUsers();
    }, [])

    const fetchListUsers = async () => {
        let data = await getListUser()
        setListUser(data.DT)
    }

    const handleClickBtnUpdate = (user) => {
        setShowUpdateModal(true);
        setDataUpdate(user)
    }

    const handleClickBtnDetail = (user) => {
        setShowViewModal(true);
        setDataUpdate(user)
    }

    const handleClickBtnDelete = (user) => {
        setShowDeleteModal(true);
        setDataUpdate(user)
    }

    return (
        <div className="manage-users-container">
            <div className="title">
                users manager
            </div>
            <div className="users-content">
                <div className='btn-add-new'>
                    <button className='btn btn-primary' onClick={() => setShowCreateModal(true)}>Add new users</button>
                </div>
                <div className='table-users-container'>
                    <TableUser
                        listUser={listUser}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDetail={handleClickBtnDetail}
                        handleClickBtnDelete={handleClickBtnDelete}
                    ></TableUser>
                </div>
                <ModalCreateUser
                    showCreateModal={showCreateModal}
                    setShowCreateModal={setShowCreateModal}
                    fetchListUsers={fetchListUsers}
                >
                </ModalCreateUser>

                <ModalUpdateUser
                    showUpdateModal={showUpdateModal}
                    setShowUpdateModal={setShowUpdateModal}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                >
                </ModalUpdateUser>

                <ModalViewUser
                    showViewModal={showViewModal}
                    setShowViewModal={setShowViewModal}
                    dataUpdate={dataUpdate}
                >
                </ModalViewUser>

                <ModalConfirmDeleteUser
                    showDeleteModal={showDeleteModal}
                    setShowDeleteModal={setShowDeleteModal}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                >
                </ModalConfirmDeleteUser>
            </div>
        </div>
    )
}

export default ManageUser;