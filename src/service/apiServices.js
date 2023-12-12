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
    //submit data
    return axios.get('api/v1/participant/all');
}

export { postCreateUser, getListUser }