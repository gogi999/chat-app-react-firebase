import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, storage, db } from '../firebase';
import Add from '../img/addAvatar.png';

const Register = () => {
    const [err, setErr] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (error) => {
                    setErr(true);
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            name,
                            photoURL: downloadURL
                        });
                        await setDoc(doc(db, 'users', res.user.uid), {
                            uid: ref.user.uid,
                            name,
                            email,
                            photoURL: downloadURL
                        });
                    });
                }
            );
        } catch (err) {
            setErr(true);
        }
    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Gogi9 Chat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email address" />
                    <input type="password" placeholder="Password" />
                    <input type="file" id="file" style={{ display: "none" }} />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                    {err && <span>Something went wrong!!!</span>}
                </form>
                <p>You have an account? Login</p>
            </div>
        </div>
    );
}

export default Register;
