import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import User from './components/user/User';
import Admin from './components/admin/Admin';
import Home from './components/home/Home';
import ManageUser from './components/admin/content/ManageUser';
import Dashboard from './components/admin/content/DashBoard';
import Login from './components/auth/Login';
import { ToastContainer, toast } from 'react-toastify';


const Layout = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />}></Route>  //index để khi outlet ko trùng với link nào thì sẽ vào index
                    <Route path='/users' element={<User />}></Route>
                </Route>
                <Route path='/admin' element={<Admin />}>
                    <Route index element={<Dashboard />}></Route>
                    <Route path='manage-users' element={<ManageUser />}></Route>
                </Route>
                <Route path='/login' element={<Login />}>
                </Route>
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Layout;
