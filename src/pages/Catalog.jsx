import React from "react";
import MovieGrid from "../components/movies/movieGrid/MovieGrid";

const Catalog = ({search}) => {
    return (
        <div>
            <MovieGrid search={search}/>
        </div>
    );
}

export default Catalog;
