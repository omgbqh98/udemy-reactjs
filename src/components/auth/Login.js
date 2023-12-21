import { useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../service/apiServices';
import { toast } from 'react-toastify';
import { validateEmail } from '../../ultils/validate.js';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction.js';
import { ImSpinner } from "react-icons/im";
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDelay, setIsDelay] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleLogin = async () => {
        //validate
        if (!validateEmail(email)) {
            toast.error("Invalid email")
            return;
        }

        if (!password) {
            toast.error("please input email")
            return;
        }
        setIsDelay(true);
        let data = await postLogin(email, password);


        if (data && data.EC === 0) {
            dispatch(doLogin(data));
            toast.success(data.EM);
            setIsDelay(false);
            navigate('/')
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
            setIsDelay(false);
        }

        console.log(data)
    }

    return (
        <div className="login-container">
            <div className="header">
                <span>Don't have an account yet?</span>
                <button onClick={() => { navigate('/register') }}>Sign up</button>
            </div>
            <div className="title col-4 mx-auto">
                Huynh holtel
            </div>
            <div className="welcome col-4 mx-auto">
                Hello, who’s this?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="form-control" />

                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="form-control" />
                </div>
                <span className='forgot-password'>Forgot password?</span>
                <div>
                    <button onClick={() => handleLogin()} className='btn-submit' disabled={isDelay}>
                        {isDelay && <ImSpinner className='loaderIcon'></ImSpinner>}
                        <span>Login</span>
                    </button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => { navigate('/') }}> &#60;&#60; Go back home</span>
                </div>

            </div>
        </div>
    )
}

export default Login;