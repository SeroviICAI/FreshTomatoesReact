import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieByid } from "../helpers/fetchMovies";
import MovieDetail from "../components/movies/movieDetail/MovieDetail";

const Detail = () => {
    const { id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await getMovieByid(id);
            setItem(response);
            window.scrollTo(0,0);
        }
        getDetail();
    }, [id]);

    return (
        <div>
            {item ? <MovieDetail movie={item} /> : 'Loading...'}
        </div>
    );
}

export default Detail;
