import React from "react";
import MovieList from "../components/movies/movieList/MovieList";
import "../styles/home.css"

const Home = ({ onClear }) => {
    return (
        <div>
            <h3>What to Watch</h3>
            <div className="left-border">
                <h5 className="sub-heading">Fan Favorites</h5>
            </div>
            <p className="sub-script">The top rated movies in our website</p>
            <MovieList onClear={onClear} ordering={"-userRating"}/>
            <h3 className="margin-bottom-10">Popular Movies</h3>
            <MovieList onClear={onClear}/>
        </div>
    );
}

export default Home;
