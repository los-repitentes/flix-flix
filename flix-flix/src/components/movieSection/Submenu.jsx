import {useState} from 'react'
import Movies from './Movies';
import './submenu.css';
import Recommended from './Recommended';

const Submenu = () => {

    const [selectedItem, setSelectedItem] = useState('General');
    const handleItemClick = (item) => {
      setSelectedItem(item);
    };

  return (
    <>
    <div className="menu">
      <div className='menu2'>
      <ul className="list">
        <li className="menu-item" onClick={() => handleItemClick('General')}>Todas las peliculas</li>
        {/* <li className="menu-item" onClick={() => handleItemClick('ComponenteB')}>Componente B</li> */}
        <li className="menu-item" onClick={() => handleItemClick('Recomendados')}>Recomendadas</li>
        {/* <li className="menu-item" onClick={() => handleItemClick('ComponenteC')}>Favoritos</li> */}
        {/* <li className="menu-item" onClick={() => handleItemClick('ComponenteC')}>Estrenos</li> */}
      </ul>
</div>
      {selectedItem === 'General' && <Movies />}
      {/* {selectedItem === 'ComponenteB' && <ComponenteB />} */}
      {selectedItem === 'Recomendados' && <Recommended />}
      {/* {selectedItem === 'Favoritos' && <Favoritos />} */}
      {/* {selectedItem === 'Estrenos' && <Estrenos />} */}

    </div>
  
    </>
  )
}

const ComponenteB = () => <div className="content">Contenido del Componente B</div>;
const ComponenteC = () => <div className="content">Contenido del Componente C</div>;

export default Submenu