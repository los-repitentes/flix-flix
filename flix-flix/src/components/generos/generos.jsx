import { useState, useEffect } from "react";
import './generos.css';
import { useNavigate } from 'react-router-dom';

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
  // ... (otros géneros)
];

function Generos() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const navigate = useNavigate(); // Mueve useNavigate aquí

  // Cargar datos desde localStorage al montar el componente
  useEffect(() => {
    const storedGenres = JSON.parse(localStorage.getItem("selectedGenres")) || [];
    setSelectedGenres(storedGenres);
  }, []);

  // Función para manejar el cambio en los géneros seleccionados
  const handleGenreChange = (event) => {
    const genre = event.target.value;
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((selectedGenre) => selectedGenre !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  // Función para manejar el clic en el botón de guardar
  const handleSaveButtonClick = () => {
    localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres));
    // Redirige a la página deseada
    navigate('/Home');
  };

  return (
    <div className="genero">
      <div className="logo-container">
        <img src="../src/assets/logo.svg" alt="Logo" className="logo" />
        <h1>Selecciona tus géneros de películas favoritos</h1>
      </div>

      <form className="genre-form">
        {generosPrincipales.map((genre) => (
          <div key={genre} className="checkbox-container">
            <label>
              <input
                type="checkbox"
                value={genre}
                checked={selectedGenres.includes(genre)}
                onChange={handleGenreChange}
              />
              {genre}
            </label>
          </div>
        ))}
      </form>

      <div className="selected-genres">
        <h2>Géneros seleccionados:</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
          {selectedGenres.map((genre) => (
            <li key={genre} style={{ marginBottom: '8px', fontSize: '16px', textAlign: 'center' }}>{genre}</li>
          ))}
        </ul>
      </div>

      {/* Botón para guardar en localStorage */}
      <button
        type="button"
        className="bg-red-600 py-2 px-4 text-white rounded-md mt-10 ml-auto hover:bg-red-700 transition"
        onClick={handleSaveButtonClick}
      >
        Continuar
      </button>
    </div>
  );
}

export default Generos;
