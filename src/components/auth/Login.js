import { useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../service/apiServices';
import { toast } from 'react-toastify';
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        let data = await postLogin(email, password);

        //validate
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/')
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }

        console.log(data)
    }

    return (
        <div className="login-container">
            <div className="header">
                <span>Don't have an account yet?</span>
                <button>Sign up</button>
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
                    <button onClick={() => handleLogin()} className='btn-submit'>Login</button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => { navigate('/') }}> &#60;&#60; Go back home</span>
                </div>

            </div>
        </div>
    )
}

export default Login;