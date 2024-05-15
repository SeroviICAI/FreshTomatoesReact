import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieByid } from "../helpers/fetchMovies";

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
            {item ? <pre>{JSON.stringify(item, null, 2)}</pre> : 'Loading...'}
        </div>
    );
}

export default Detail;
