import React from 'react';
import { NavLink } from 'react-router-dom';
import './movieCard.css';

const MovieCard = props => {
    const item = props.item
    const link = '/movies/' + item.id;
    const bg = item.poster;

    return (
        <NavLink to={link} className="movie-link">
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
