const API_URL = "https://freshtomatoesapi.onrender.com/users";

export const register = async (name, username, tel, email, password) => {
    const response = await fetch(`${API_URL}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, tel, email, password })
    });
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Error registering");
    }
};

export const login = async (username, password) => {
    const response = await fetch("https://freshtomatoesapi.onrender.com/users/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials:"include"
    });

    if (response.ok) {
        const response = await fetch("https://freshtomatoesapi.onrender.com/users/me", {
            method: 'GET',
            credentials:"include"
        });
        return await response.json();
    } else {
        throw new Error("Error logging in");
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
        throw new Error("Error logging out");
    }
};
