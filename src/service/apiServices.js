import axios from '../ultils/axiosCustomize'
const postCreateUser = (email, password, username, role, image) => {
    //submit data
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data);
}

const getListUser = () => {
    return axios.get('api/v1/participant/all');
}

const putUpdateUser = (id, username, role, image) => {
    //submit data
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('api/v1/participant', data);
}

const deleteUser = (userId) => {
    let data = { data: { id: userId } };
    return axios.delete('api/v1/participant', data);
}

const getListUserPage = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
}

const postLogin = (email, password) => {
    return axios.post(`/api/v1/login`, { email, password, delay: 5000 });
}

const postRegister = (username, email, password) => {
    return axios.post(`/api/v1/register`, { username, email, password });
}

export { postCreateUser, getListUser, putUpdateUser, deleteUser, getListUserPage, postLogin, postRegister }