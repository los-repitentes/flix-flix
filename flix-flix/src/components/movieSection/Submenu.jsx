import {useState} from 'react'
import Movies from './Movies';
const Submenu = () => {

    const [selectedItem, setSelectedItem] = useState('General');
    const handleItemClick = (item) => {
      setSelectedItem(item);
    };

  return (
    <>
    
    <div className="menu">
      <ul className="list">
        <li className="menu-item" onClick={() => handleItemClick('General')}>Todas las peliculas</li>
        <li className="menu-item" onClick={() => handleItemClick('ComponenteB')}>Componente B</li>
        <li className="menu-item" onClick={() => handleItemClick('ComponenteC')}>Recomendadas</li>
        <li className="menu-item" onClick={() => handleItemClick('ComponenteC')}>Favoritos</li>
        <li className="menu-item" onClick={() => handleItemClick('ComponenteC')}>Estrenos</li>

      </ul>

      {selectedItem === 'General' && <Movies />}
      {selectedItem === 'ComponenteB' && <ComponenteB />}
      {selectedItem === 'ComponenteC' && <ComponenteC />}
      {selectedItem === 'Favoritos' && <Favoritos />}
      {selectedItem === 'Estrenos' && <Estrenos />}

    </div>
    </>
  )
}

const ComponenteB = () => <div className="content">Contenido del Componente B</div>;
const ComponenteC = () => <div className="content">Contenido del Componente C</div>;

export default Submenu