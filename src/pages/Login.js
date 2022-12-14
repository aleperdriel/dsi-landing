import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInEmail } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    
    if(user) navigate('/admin/create')
    return(
        <>
        <Header />
        <div className="login">
            <div className="login-container">
                <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
                />
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                />
                <button
                className="btn"
                onClick={() => logInEmail(email, password)}
                >
                Login
                </button>
            </div>
        </div>
        <Footer></Footer>
    </>
    )
};

export default Login;