import React, { useState, useEffect } from 'react';
import { getMoviesList } from '../../../helpers/fetchMovies';
import MovieCard from '../movieCard/MovieCard';
import './movieGrid.css';

const MovieGrid = ({search}) => {
    const [items, setItems] = useState([]);
    const [nextPage, setNextPage] = useState('');

    const loadMore = async () => {
        let params = {"url": nextPage}
        const response = await getMoviesList(params);
        setItems([...items, ...response.results]);
        setNextPage(response.next);
    }
    useEffect(() => {
        const getList = async () => {
            let params = {};
            if (search) {
                params["search"] = search;
            }
            const response = await getMoviesList(params);
            setItems(response.results);
            setNextPage(response.next)
        }
        getList();
    }, [search]);

    return (
        <div className="movie-grid">
            {
                items.map((item, i) => (
                    <div key={i} className="movie-grid__item">
                        <MovieCard item={item}/>
                    </div>
                ))
            }
            {!items.length && <div className='movie-grid_item'>No movies found</div>}
            <div className="movie-grid__loadmore">
                {nextPage && <button onClick={loadMore}>Cargar más</button>}
            </div>
        </div>
    );
}

export default MovieGrid;
