import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);

    const getMovies = async () => {
        const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();
        setMovieList(json.data.movies);
        setLoading(false);

    }

    useEffect(() => {
        getMovies();

    }, [])
    console.log(movieList)
    return (
        <div>
            {loading == true ? (
                <h1>Loading..</h1>
            ) : (
                <div>
                    {movieList.map((e) =>
                        <Movie
                            id={e.id}
                            url={e.url}
                            key={e.id}
                            title={e.title}
                            medium_cover_image={e.medium_cover_image}
                            genres={e.genres}
                            summary={e.summary}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

export default Home