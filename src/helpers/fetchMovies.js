const API_URL = "https://freshtomatoesapi.onrender.com";

export const getMoviesList = async ({ search, url = `${API_URL}/movies` }) => {
    if (search){
        url = `${url}?search=${encodeURIComponent(search)}`
    }
    const response = await fetch(url, {credentials:"include"});
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Error getting movies list");
    }
};

export const getMovieByid = async (id) => {
    const response = await fetch(`${API_URL}/movies/${id}`, {credentials:"include"});
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Error getting movies list");
    }
};

export const getReviewsByMovie = async (id) => {
    const response = await fetch(`${API_URL}/reviews/?movie_id=${id}`, {credentials:"include"});
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Error getting movies list");
    }
};