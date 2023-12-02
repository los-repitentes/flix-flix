import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="footer">
            <div className="container">
                <div className="left">
                <p>&copy; 2023 Los Repitentes. Todos los derechos reservados.</p>
                </div>
                <div className="right">
                <p>Síguenos en:</p>
                <ul className="social-list">
                    <li className="social-item"><a href="https://twitter.com/test" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li className="social-item"><a href="https://facebook.com/test" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li className="social-item"><a href="https://linkedin.com/company/test" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
                </div>
            </div>
            <p className="additional">¡Gracias por visitarnos!</p>
            </footer>
    </>
  )
}

export default Footer