import "./Movie.css";

const Movie = (props) => {
  return (
    <section className="movie-style">
      <h3>{props.superMovie.title}</h3>
      <p>{props.superMovie.year}</p>
      <p>{props.superMovie.director}</p>
      <p>{props.superMovie.duration}</p>
      <h4>{props.superMovie.rate}</h4>
      <p className="genre">{props.superMovie.genre[0]}</p>
      <p className="genre">{props.superMovie.genre[1]}</p>
      <p className="genre">{props.superMovie.genre[2]}</p>
    </section>
  );
};

export default Movie;
