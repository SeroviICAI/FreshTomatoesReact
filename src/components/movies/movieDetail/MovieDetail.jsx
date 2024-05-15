import React from 'react';
import './movieDetail.css';

const MovieDetail = ({ movie }) => {
    return (
        <div className="item-details">
            <img src={movie.poster} alt={movie.title} />
            <div className="info">
                <h2>{movie.title}</h2>
                <p>
                    <strong>Year: </strong><span>{movie.year}</span>
                </p>
                <p>
                    <strong>Runtime: </strong><span>{movie.runtime}</span>
                </p>
                <p>
                    <strong>User Rating: </strong><span>{movie.userRating}</span>
                </p>
                <p>
                    <strong>Votes: </strong> <span>{movie.votes}</span>
                </p>
                <p>
                    <strong>Directors: </strong>
                    {movie.directors.map((director, index) => {
                        if (index === movie.directors.length - 1) {
                            return <span key={director.id}>{director.name}.</span>
                        } else {
                            return <span key={director.id}>{director.name}, </span>
                        }
                    }
                )}
                </p>
                <p>
                    <strong>Cast: </strong>
                    {movie.cast.map((actor, index) => {
                        if (index === movie.cast.length - 1) {
                            return <span key={actor.id}>{actor.name}.</span>
                        } else {
                            return <span key={actor.id}>{actor.name}, </span>
                        }
                    }
                )}
                </p>
                <p>
                    <strong>Genres: </strong>
                    {movie.genres.map((genre, index) => {
                        if (index === movie.genres.length - 1) {
                            return <span key={genre.id}>{genre.genre}.</span>
                        } else {
                            return <span key={genre.id}>{genre.genre}, </span>
                        }
                    }
                )}
                </p>
                <p>
                    <strong>Rating: </strong><span>{movie.rating.rating}</span>
                </p>
            </div>
        </div>
    )
}

export default MovieDetail;
