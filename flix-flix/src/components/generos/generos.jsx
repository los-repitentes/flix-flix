import { useState } from "react";
import './generos.css';

const generosPrincipales = [
  "Acción",
  "Aventura",
  "Animación",
  "Comedia",
  "Crimen",
  "Drama",
  "Fantasía",
  "Terror",
  "Ciencia ficción",
  "Romance",
  "Misterio",
  "Suspense",
  "Documental",
  "Familia",
];

function Generos() {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((selectedGenre) => selectedGenre !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <div className="genero">
      <h1>Selecciona tus géneros de películas favoritos</h1>
      <form>
        {generosPrincipales.map((genre) => (
          <div key={genre}>
            <label>
              <input
                type="checkbox"
                value={genre}
                checked={selectedGenres.includes(genre)}
                onChange={handleGenreChange}
              />
              {genre}
            </label>
            <br />
          </div>
        ))}
      </form>
      <h2>Géneros seleccionados:</h2>
      <ul>
        {selectedGenres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Generos;

