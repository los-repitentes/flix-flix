import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Menu = ({ isMenuOpen }) => {
  const [isLogoutMenuOpen, setLogoutMenuOpen] = useState(false);
  const navigate = useNavigate();
    const scrollToSection = (event,sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
      const user = JSON.parse(localStorage.getItem("User"));
      useEffect(() =>{

        if (!localStorage.getItem("User")){
          navigate('/');
        }

      },[]);

      const handleUserClick = () => {
        setLogoutMenuOpen(!isLogoutMenuOpen);
        if (isLogoutMenuOpen){
          localStorage.removeItem("User");
          navigate('/');
        }
      };

    return (
    <>
    <nav className={`main-nav ${isMenuOpen ? "show" : ""}`} id="main-nav">
        <ul className="main-menu">
          <li className="main-menu__item">
            <a
              className="main-menu__link"
              href="#ini"
              onClick={(event) => scrollToSection(event, "ini")}
            >
            {user?.nombre}
            </a>
          </li>

          <li className="main-menu__item">
          <button onClick={handleUserClick}>Cerrar Sesión</button>
        </li>

        </ul>
      </nav>
    </>
  )
}

export default Menu