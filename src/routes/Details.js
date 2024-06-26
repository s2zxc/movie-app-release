import { useEffect } from "react";
import { json, useParams } from "react-router-dom";

function Details() {
    const {id} = useParams();
    const getMovie = async()=>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();    
        console.log(json)
    };

    useEffect(()=>{
        getMovie();
    },[])
    
    return (<div>Detail!!</div>);
}

export default Details;