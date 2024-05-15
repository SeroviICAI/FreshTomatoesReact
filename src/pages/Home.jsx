import React from "react";
import MovieList from "../components/movies/movieList/MovieList";
import "../styles/home.css"

const Home = () => {
    return (
        <div>
            <h3>What to Watch</h3>
            <div className="left-border">
                <h5 className="sub-heading">Fan Favorites</h5>
            </div>
            <p className="sub-script">The top rated movies in our website</p>
            <MovieList/>
            <h3 className="margin-bottom-10">List of Movies</h3>
        </div>
    );
}

export default Home;
