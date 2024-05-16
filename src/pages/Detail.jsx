import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieByid, getReviewsByMovie } from "../helpers/fetchMovies";
import MovieDetail from "../components/movies/movieDetail/MovieDetail";
import MovieReviews from "../components/reviews/movieReviews/MovieReviews";
import ReviewForm from "../components/reviews/reviewForm/ReviewForm";

const Detail = () => {
    const { id } = useParams();

    const [item, setItem] = useState(null);
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await getMovieByid(id);
            setItem(response);
            window.scrollTo(0,0);
        }
        const getReviews = async () => {
            const response = await getReviewsByMovie(id);
            setReviews(response.results);
            window.scrollTo(0,0);
        }
        getDetail();
        getReviews();
    }, [id]);

    return (
        <div>
            {item ? <MovieDetail movie={item} /> : 'Loading...'}
            {reviews ? <MovieReviews reviews={reviews} /> : 'Loading reviews...'}
            {item ? <ReviewForm movieID={item.id}/>: ''}
        </div>
    );
}

export default Detail;
