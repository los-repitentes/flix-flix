import React, { useState } from "react";
import './generos.css';

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
        <label>
          <input
            type="checkbox"
            value="Accion"
            checked={selectedGenres.includes('Accion')}
            onChange={handleGenreChange}
          />
          Acción
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Comedia"
            checked={selectedGenres.includes('Comedia')}
            onChange={handleGenreChange}
          />
          Comedia
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Drama"
            checked={selectedGenres.includes('Drama')}
            onChange={handleGenreChange}
          />
          Drama
        </label>
        <br />
        {}
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
