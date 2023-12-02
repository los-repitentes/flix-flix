import {useEffect, useState} from "react";
import Card from "./Card";

const Recommended = () => {

    const [moviesData, setMoviesData] = useState([]);
    const [favoriteGenres, setFavoriteGenres] = useState([]);
    const apiKey = '7cd7232c';
    const imdbIDs = ['tt3896198', 'tt0848228', 'tt0848228', 'tt1083456', 'tt0096895', 'tt0106062', 'tt0973836', 'tt0499549','tt0280249', 'tt1517268', ];
  
    useEffect(() => {
        const storedGenres = localStorage.getItem('selectedGenres');
        if (storedGenres) {
          setFavoriteGenres(JSON.parse(storedGenres));
        }
        const fetchMoviesData = async () => {
          try {
            const promises = imdbIDs.map(async (imdbID) => {
              const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
              const data = await response.json();
              console.log(data)
              if (data.Response === 'True') {
                return data;
              } else {
                console.error(`Error fetching movie data for ${imdbID}: ${data.Error}`);
                return null;
              }
            });
    
            const moviesData = await Promise.all(promises);
            setMoviesData(moviesData.filter(Boolean)); // Filtrar películas válidas (no nulas)
          } catch (error) {
            console.error('Error fetching movies data:', error.message);
          }
        };
    
        fetchMoviesData();
      }, []);

      const filteredMovies = moviesData.filter((movie) => {
        const movieGenres = movie.Genre.split(',').map((genre) => genre.trim());
        return favoriteGenres.some((favGenre) => movieGenres.includes(favGenre));
      });

  return (
    <>
        <div className="content">
            <div className="card-container">
            {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
                <Card key={index} titulo={movie.Title} imagen={movie.Poster}
                año={movie.Year} generos={movie.Genre}
                descripcion = {movie.Plot}
                director = {movie.Director}
                reparto = {movie.Actors}
                calificacion = {movie.imdbRating}
                lanzamiento = {movie.Released}
                idioma = {movie.Language}
                results
                />
            ))
        ) : (
            <p>Cargando...</p>
        )}
            </div>
        </div>
    </>
  )
}

export default Recommended