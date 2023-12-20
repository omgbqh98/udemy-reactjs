import { useState, useEffect } from 'react';
import ModalCreateUser from './ModalCreateUser';
import './ManageUsers.scss';
import TableUser from './TableUser';
import { getListUser, getListUserPage } from '../../../service/apiServices';
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';
import ModalConfirmDeleteUser from './ModalConfirmDeleteUser';

const ManageUser = (props) => {
    const LIMIT_USER = 6;
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [pageCount, setPageCount] = useState({});
    const [currentPage, setCurrentPage] = useState(1);

    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        fetchListUsersWithPage(1);
    }, [])

    const fetchListUsersWithPage = async (page) => {
        let data = await getListUserPage(page, LIMIT_USER);
        if (data.EC === 0) {
            setListUser(data.DT.users);
            setPageCount(data.DT.totalPages)
        }
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
                        fetchListUsersWithPage={fetchListUsersWithPage}
                        pageCount={pageCount}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    ></TableUser>
                </div>
                <ModalCreateUser
                    showCreateModal={showCreateModal}
                    setShowCreateModal={setShowCreateModal}
                    fetchListUsersWithPage={fetchListUsersWithPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                >
                </ModalCreateUser>

                <ModalUpdateUser
                    showUpdateModal={showUpdateModal}
                    setShowUpdateModal={setShowUpdateModal}
                    dataUpdate={dataUpdate}
                    fetchListUsersWithPage={fetchListUsersWithPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
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
                    fetchListUsersWithPage={fetchListUsersWithPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                >
                </ModalConfirmDeleteUser>
            </div>
        </div>
    )
}

export default ManageUser;