const API_URL = "https://freshtomatoesapi.onrender.com";
 
export const getMoviesList = async () => {
    const response = await fetch(`${API_URL}/movies`);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Error getting movies list");
    }
};
 
export const getMovieByid = async (id) => {
    const response = await fetch(`${API_URL}/movies/${id}`);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Error getting movies list");
    }
};

export const getReviewsByMovie = async (id) => {
    const response = await fetch(`${API_URL}/reviews/?movie_id=${id}`);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Error getting movies list");
    }
};