import { useState } from 'react';
import './Register.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import { postRegister } from '../../service/apiServices';
const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleToggle = () => {


        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    const handleRegister = async () => {
        if (!validateEmail(email)) {
            toast.error("Invalid email")
            return;
        }

        if (!password) {
            toast.error("please input email")
            return;
        }

        let data = await postRegister(username, email, password);

        //validate
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/login')
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }

        console.log(data)
    }

    return (
        <div className="register-container">
            <div className="header">
                <span>Do you have an account?</span>
                <button onClick={() => { navigate('/login') }}>Login</button>
            </div>
            <div className="title col-4 mx-auto">
                Huynh holtel
            </div>
            <div className="welcome col-4 mx-auto">
                Register
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Username</label>
                    <input
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className="form-control" />

                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="form-control" />

                </div>
                <div className="password">
                    <label>Password</label>
                    <div className="input-container">
                        <input
                            type={type}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="form-control" />
                        <span className="toggle-icon" onClick={handleToggle}>
                            <Icon class="absolute mr-10" icon={icon} size={25} />
                        </span>
                    </div>
                </div>
                <span className='forgot-password'>Forgot password?</span>
                <div>
                    <button onClick={() => handleRegister()} className='btn-submit'>Register</button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => { navigate('/') }}> &#60;&#60; Go back home</span>
                </div>

            </div>
        </div>
    )
}

export default Register;