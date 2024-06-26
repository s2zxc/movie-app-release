import PropTyoes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, medium_cover_image, title, summary, genres, url}) {
  return (
    <div >
      <img src={medium_cover_image} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>{
        genres.map((e1) => (
          <li key={e1}>{e1}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  id : PropTyoes.string.isRequired,
  medium_cover_image : PropTyoes.string.isRequired,
  title : PropTyoes.string.isRequired,
  summary : PropTyoes.string.isRequired,
  genres : PropTyoes.arrayOf(PropTyoes.string).isRequired,
  url : PropTyoes.string.isRequired
}

export default Movie