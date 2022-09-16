import React from 'react';
import { Link } from 'react-router-dom';
import Add from '../img/addAvatar.png';

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Gogi9 Chat</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email address" />
                    <input type="password" placeholder="Password" />
                    <input type="file" id="file" style={{ display: "none" }} />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>You have an account? Login</p>
            </div>
        </div>
    );
}

export default Register;
