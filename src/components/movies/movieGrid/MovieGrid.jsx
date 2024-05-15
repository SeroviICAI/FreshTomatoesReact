import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getMoviesList } from '../../../helpers/fetchMovies';
import MovieCard from '../movieCard/MovieCard';
import './movieGrid.css';

const MovieGrid = ({ search, onClear }) => {
    const [items, setItems] = useState([]);
    const [nextPage, setNextPage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const observer = useRef();

    const lastMovieElementRef = useCallback(node => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && nextPage) {
                loadMore();
            }
        });
        if (node) observer.current.observe(node);
    }, [nextPage]);

    const loadMore = async () => {
        setIsLoading(true);
        let params = {"url": nextPage}
        const response = await getMoviesList(params);
        setItems(prevItems => [...prevItems, ...response.results]);
        setNextPage(response.next);
        setIsLoading(false);
    }

    useEffect(() => {
        const getList = async () => {
            setIsLoading(true);
            let params = {};
            if (search) {
                params["search"] = search;
            }
            const response = await getMoviesList(params);
            setItems(response.results);
            setNextPage(response.next)
            window.scrollTo(0,0);
            setIsLoading(false);
        }
        getList();
    }, [search]);

    return (
        <div className="movie-grid">
            {
                items.map((item, i) => (
                    <div ref={i === items.length - 1 ? lastMovieElementRef : null} key={i} className="movie-grid__item">
                        <MovieCard item={item} onClear={onClear}/>
                    </div>
                ))
            }
            {isLoading && <div className='movie-grid_item'>Searching...</div>}
            {!isLoading && !items.length && <div className='movie-grid_item'>No movies found</div>}
        </div>
    );
}

export default MovieGrid;
