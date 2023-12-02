import React from 'react'

const ModalSearch = ({results}) => {

    const trailerUrl = "https://www.youtube.com/watch?v=d-ByOsX4Jis&ab_channel=NanoManiac";

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
          autoplay: 1
        }
    }

  return (
    <>

<div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{results.Title}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          {/* AQUI VA EL VIDEO */}
          {/* <YouTube videoId={trailerUrl} opts={opts} /> */}
          {/* <img src={imagen} alt={titulo} className="modal-image" /> */}
          <div className="movie-details">
            <p>
              <strong>Año:</strong> {results.Year}
            </p>
            <p>
              <strong>Descripción:</strong> {results.Plot}
            </p>
            <p>
              <strong>Director:</strong> {results.Director}
            </p>
            <p>
              <strong>Reparto:</strong> {reparto}
            </p>
            <p>
              <strong>Calificación:</strong> {calificacion}
            </p>
            <p>
              <strong>Generos:</strong> {results.Genre}
            </p>
            <p>
              <strong>Lanzamiento:</strong> {results.Released}
            </p>
            <p>
              <strong>Idioma:</strong> {results.Lenguage}
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <button className="close-button" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ModalSearch