import {  useState, useEffect } from 'react';
import Menu from './menu';
import LogoBusqueda from '../assets/busqueda.svg';
import Logo from '../assets/logo.svg';
import SearchResultList from './search/SearchResultList'
import Modal from './movieSection/Modal';
const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        }, []);
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
    const handleMenuToggle = () => {
      setMenuOpen(!isMenuOpen);
    };

      useEffect(() => {
        // Realizar la búsqueda solo si searchTerm tiene al menos 3 caracteres
        if (searchTerm.length >= 3) {
          // Realizar la petición a la API usando la librería Fetch o Axios
          const apiUrl = `https://www.omdbapi.com/?apikey=dfd2f925&t=${searchTerm}`;
          try {
            const fetchData = async () => {
              const response = await fetch(apiUrl);
              const data = await response.json();
              console.log(data);
              setSearchResults(data);
            };
    
            fetchData();
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          // Limpiar los resultados si searchTerm es menor a 3 caracteres
          setSearchResults([]);
        }
      }, [searchTerm]);
  
    return (
      <>
        <header className={`main-header ${scrollPosition > 0 ? 'backgroud-change' : ''}`}>
          <div className="main-logo">
            <a href="/">
              <img src={Logo} alt="Logo de Idiomas en Señas" style={{width: '8rem'}} />
            </a>
          </div>
  
          <div className="search-container">
        <input
          className='search-input'
          type="search"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <img src={LogoBusqueda} alt="Logo de busqueda de peliculas" />
          </div>
          {/* Menu Hamburguesa */}
          <div
            className={`main-menu-toggle ${isMenuOpen ? 'show' : ''}`}
            onClick={handleMenuToggle}
          ></div>
          {/* Componente del menu */}
          <Menu isMenuOpen={isMenuOpen} />
        </header>
        { searchTerm.length>=3 && <SearchResultList 
        results={searchResults} 
        titulo={searchResults.Title} 
        imagen={searchResults.Poster}
              año={searchResults.Year} 
              generos={searchResults.Genre}
              descripcion = {searchResults.Plot}
              director = {searchResults.Director}
              reparto = {searchResults.Actors}
              calificacion = {searchResults.imdbRating}
              lanzamiento = {searchResults.Released}
              idioma = {searchResults.Language}
        onClick={openModal} />}
        {/* {isModalOpen && (
        <Modal
          titulo={titulo}
          imagen={imagen}
          año={año}
          descripcion={descripcion}
          director={director}
          reparto={reparto}
          calificacion={calificacion}
          generos={generos}
          lanzamiento={lanzamiento}
          idioma={idioma}
          results={results}
          onClose={closeModal}
        />
      )} */}
      </>
  )
}
 
export default Header