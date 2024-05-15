import React, { useState } from "react";
import { register } from "../../helpers/fetchLogin";
import './login.css';

const Register = ({ login }) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await register(name, username, tel, email, password);
            login();
        } catch (error) {
            console.error("Error registering", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="row default">
            <h3 className="h3 left-div-heading">
                Register
            </h3>
            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="tel" placeholder="Telephone" value={tel} onChange={(e) => setTel(e.target.value)} required />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit" disabled={isSubmitting}>Register</button>
                    <a href="#" onClick={login}>Already have an account? Login</a>
                </form>
            </div>
        </div>
    );
};

export default Register;
