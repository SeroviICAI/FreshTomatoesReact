import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../helpers/fetchLogin";
import "./login.css";

const Login = ({ register, onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(username, password);
            onLogin(data);
            navigate("/");
        } catch (error) {
            console.error("Error logging in", error);
        }
    };
    
    return (
        <div className="container">
            <h3 className="h3 left-div-heading">
                Welcome Back
            </h3>
            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Login</button>
                    <a href="#" onClick={register}>Don't have an account? Register</a>
                </form>
            </div>
        </div>
    );
};

export default Login;
