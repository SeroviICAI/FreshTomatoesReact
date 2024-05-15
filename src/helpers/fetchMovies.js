const API_URL = "https://freshtomatoesapi.onrender.com/movies";

export const getMoviesList = async () => {
    const response = await fetch(`${API_URL}`);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Error getting movies list");
    }
};
