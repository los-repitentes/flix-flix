const SearchResultList = ({ results }) => {

  return (
    results? (
      <ul className="search-result z-10">
      <li key={results.Title} className="search-result-item">
        <img src={results.Poster} className="result-thumbnail" alt="Imagen o Cover de la pelicula" />
        <div className="result-details">
          <h4 className="result-title">{results.Title}</h4>
          <p className="result-description">Generos{results.Genre}</p>
          <span>Año: {results.Year}</span>
        </div>
      </li>
  </ul>
  )
  :
  (<p>No se encontraron resultados</p>)
  )
}

export default SearchResultList