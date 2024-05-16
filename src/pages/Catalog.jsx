import React from "react";
import MovieGrid from "../components/movies/movieGrid/MovieGrid";

const Catalog = ({ search, onClear }) => {
    return (
        <div>
            <h3>Browse Results</h3>
            <MovieGrid search={search} onClear={onClear}/>
        </div>
    );
}

export default Catalog;
