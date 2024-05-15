const API_URL = "https://freshtomatoesapi.onrender.com/movies";
 
export const getMoviesList = async () => {
    const response = await fetch(`${API_URL}`);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Error getting movies list");
    }
};
 
export const getMovieByid = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Error getting movies list");
    }
};
