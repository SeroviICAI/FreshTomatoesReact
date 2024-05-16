import ErrorWithCode from './customErrors.js'

const API_URL = "https://freshtomatoesapi.onrender.com";

export const getMoviesList = async ({ search, ordering, url = `${API_URL}/movies` }) => {
    if (search){
        url = `${url}?search=${encodeURIComponent(search)}`
    }
    if (ordering){
        url = `${url}?ordering=${ordering}`
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

export const postReview = async (movie, userRating, comment ) => {
    console.log(movie, userRating, comment)
    const response = await fetch(`${API_URL}/reviews/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ movie, userRating, comment }),
        credentials:"include"
    });
    console.log(response)
    if (response.ok) {
        return await response.json();
    } else {
        throw new ErrorWithCode("Error adding review", response.status);
    }
};