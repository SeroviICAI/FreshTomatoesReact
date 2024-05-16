import React from 'react';
import './movieDetail.css';
import ReactStars from "react-rating-stars-component";

const MovieDetail = ({ movie }) => {
    return (
        <div className="movie-content">
            <div className="movie-content-poster">
                <img src={movie.poster} alt={movie.title} />
            </div>
            <div className="movie-content-info description-box">
                <h1 className="title">
                    {movie.title}
                </h1>
                <div className="genres">
                    {movie.genres.map((genre, index) => {
                        return <span key={index} className="genres__item">{genre.genre}</span>
                    })}
                </div>
                <p>
                    <strong>Directors: </strong>
                    {movie.directors.map((director, index) => {
                        return <span key={director.id}>{director.name}{index !== movie.directors.length - 1 && ", "}</span>
                    })}
                </p>
                <p>
                    <strong>Cast: </strong>
                    {movie.cast.map((actor, index) => {
                        return <span key={actor.id}>{actor.name}{index !== movie.cast.length - 1 && ", "}</span>
                    })}
                </p>
                <p>
                    <strong>Year: </strong>{movie.year} | 
                    <strong> Runtime: </strong>{movie.runtime} min
                </p>
                <div className="user-rating">
                    <strong>User Rating: </strong>
                    <ReactStars
                        count={10}
                        value={movie.userRating}
                        size={24}
                        activeColor="#0ea039"
                        isHalf={true}
                        edit={false}
                    />
                </div>
                <p>
                    <strong>Votes: </strong> <span>{movie.votes}</span>
                </p>
            </div>
        </div>
    )
}

export default MovieDetail;
