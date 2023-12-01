import React from 'react'

const Menu = ({ isMenuOpen }) => {
    const scrollToSection = (event,sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
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
              Inicio
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu