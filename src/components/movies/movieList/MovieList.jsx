import React, { useState, useEffect } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { getMoviesList } from '../../../helpers/fetchMovies';
import MovieCard from '../movieCard/MovieCard';
import 'swiper/css';
import './movieList.css';

const MovieList = ({ onClear, ordering }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            let params = {};
            if (ordering) {
                params["ordering"] = ordering
            };
            response = await getMoviesList(params);
            setItems(response.results);
        }
        getList();
    }, []);

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item} onClear={onClear}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default MovieList;
