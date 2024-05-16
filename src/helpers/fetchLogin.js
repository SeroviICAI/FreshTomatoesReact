import ErrorWithCode from './customErrors.js'


const API_URL = "https://freshtomatoesapi.onrender.com/users";

export const register = async (name, username, tel, email, password) => {
    const response = await fetch(`${API_URL}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, tel, email, password }),
        credentials:"include"
    });
    if (response.ok) {
        return await response.json();
    } else {
        throw new ErrorWithCode("Error registering", response.status);
    }
};

export const putUserData = async (name, username, tel, email, password) => {
    const body = JSON.stringify({ name, username, tel, email, password })
    console.log(body)
    const response = await fetch(`${API_URL}/me`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body, credentials:"include"});
    if (response.ok){
        return await response.json();
    }
    else {
        throw new ErrorWithCode("Error updating", response.status);
    }
};

export const getUserData = async () => {
    const response = await fetch(`${API_URL}/me`, {credentials:"include"});
    if (response.ok){
        return await response.json();
    }
};

export const login = async (username, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials:"include"
    });

    if (response.ok) {
        return;
    } else {
        throw new ErrorWithCode("Error logging in", response.status);
    }
};

export const logout = async () => {
    const response = await fetch(`${API_URL}/logout`, {
        method: 'DELETE',
        credentials: "include"
    });
    if (response.ok) {
        return;
    } else {
        throw new ErrorWithCode("Error loggin out", response.status);
    }
};

export const deleteUser = async () => {
    const response = await fetch(`${API_URL}/me`, {
        method: 'DELETE',
        credentials: "include"
    });
    if (response.ok) {
        return;
    } else {
        throw new ErrorWithCode("Error deleting user", response.status);
    }
};