import React from 'react';
import { NavLink } from 'react-router-dom';
import './movieCard.css';

const MovieCard = ({ item, onClear }) => {
    const link = '/movies/' + item.id;
    const bg = item.poster;

    return (
        <NavLink className="movie-link" to={link} onClick={onClear}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                <button className="play-button">
                    <i className="bx bx-play"></i>
                </button>
            </div>
            <h4>{item.title}</h4>
        </NavLink>
    );
}

export default MovieCard;
