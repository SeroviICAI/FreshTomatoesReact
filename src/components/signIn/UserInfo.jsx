import React, { useState, useEffect } from "react";
import { deleteUser, getUserData, putUserData } from "../../helpers/fetchLogin";
import './login.css';

const UserInfo = ({onLogin}) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleDelete = (e) => {
        if (window.confirm('Esto borrará tu usuario, ¿estás seguro?')) {
            deleteUser();
            onLogin()
        }
    }
    const updateUserData = (userData) => {
        setName(userData.name);
        setUsername(userData.username);
        setTel(userData.tel);
        setEmail(userData.email);
        setPassword('');
    };
    useEffect(() => {
        const fetchUserData = async () => {
            const userData = await getUserData();
            updateUserData(userData)
        };
        fetchUserData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const data = await putUserData(name, username, tel, email, password);
            updateUserData(data)
        } catch (error) {
            console.error("Error updating data", error);
            window.alert('Error updating data.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="row default">
            <h3 className="h3 left-div-heading">
                User Info
            </h3>
            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="tel" placeholder="Telephone" value={tel} onChange={(e) => setTel(e.target.value)} required />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit" disabled={isSubmitting}>Update data</button>
                </form>
                <hr/>
                <form onSubmit={handleDelete} className="login-form">
                    <button type="submit">Delete user</button>
                </form>
            </div>
        </div>
    );
};

export default UserInfo;
