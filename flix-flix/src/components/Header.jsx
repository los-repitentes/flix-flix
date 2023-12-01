import { useState } from 'react';
import Menu from './menu';
import LogoBusqueda from '../assets/busqueda.svg';
const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    return (
      <>
        <header className="main-header">
          <div className="main-logo">
            <a href="/">
              {/* <img src="" alt="Logo de Idiomas en Señas" /> */}
              <h2 className='loguito'>Flix flix</h2>
            </a>
          </div>
  
          <div className="search-container">
            <img src={LogoBusqueda} alt="Logo de busqueda de peliculas" />
            <input className='search-input' type="search" name="" placeholder="Buscar" id="" />
          </div>
          {/* Menu Hamburguesa */}
          <div
            className={`main-menu-toggle ${isMenuOpen ? 'show' : ''}`}
            onClick={handleMenuToggle}
          ></div>
          {/* Componente del menu */}
          <Menu isMenuOpen={isMenuOpen} />
        </header>
      </>
  )
}

export default Header