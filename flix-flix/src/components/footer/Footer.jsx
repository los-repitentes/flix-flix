
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="section footer-minimal context-dark">
      <div className="container wow-outer">
        <div className="wow fadeIn">
          <div className="row row-50 row-lg-60">

            {/* Logo Section */}
            <div className="col-12">
              <a href="home">
                <img src="src\assets\logo.svg" alt="" width="207" height="51"/>
              </a>
            </div>

            {/* Navigation Links Section */}
            <div className="col-12">
              <ul className="footer-minimal-nav">
                <li><a href="home">Inicio</a></li>
                <li><a href="#">Mas vistos</a></li>
                <li><a href="#">Favoritos</a></li>
              </ul>
            </div>

            {/* Social Media Links Section */}
            <div className="col-12">
              <ul className="social-list">
                <li><a className="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-facebook" href=""></a></li>
                <li><a className="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-instagram" href="#"></a></li>
                <li><a className="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-twitter" href="#"></a></li>
              </ul>
            </div>

          </div>

          {/* Copyright Information Section */}
          <p className="rights">
            <span>&copy;&nbsp;</span>
            <span className="copyright-year"></span>
            <span>&nbsp;</span>
            <span>Todos</span>
            <span>.&nbsp;</span>
            <span>Los derechos reservados.</span>
            <span>&nbsp;</span>
            Desarrollado&nbsp;por&nbsp;<a href="home">Los Repitentes</a>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
