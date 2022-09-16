import React from 'react';
import { Link } from 'react-router-dom';
import Add from '../img/addAvatar.png';

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Gogi9 Chat</span>
                <span className="title">Register</span>
                <form>
                    <input type="email" placeholder="Email address" />
                    <input type="password" placeholder="Password" />
                    <button>Sign in</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>
    );
}

export default Login;
