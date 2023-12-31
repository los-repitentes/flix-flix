import React from 'react'
import Video from "../../assets/nowuseeme.mp4"
const Modal = (
    {
        titulo,
        imagen,
        año,
        descripcion,
        director,
        reparto,
        calificacion,
        generos,
        lanzamiento,
        idioma,
        results,
        onClose
      }
) => {

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
          autoplay: 1
        }
    }

  return (
    <>
 {/* <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{titulo}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <img src={imagen} alt={titulo} className="modal-image" />
          <div className="movie-details">
            <p>
              <strong>Año:</strong> {año}
            </p>
            <p>
              <strong>Descripción:</strong> {descripcion}
            </p>
            <p>
              <strong>Director:</strong> {director}
            </p>
            <p>
              <strong>Reparto:</strong> {reparto}
            </p>
            <p>
              <strong>Calificación:</strong> {calificacion}
            </p>
            <p>
              <strong>Generos:</strong> {generos}
            </p>
            <p>
              <strong>Lanzamiento:</strong> {lanzamiento}
            </p>
            <p>
              <strong>Idioma:</strong> {idioma}
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href={trailerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="trailer-link"
          >
            Ver Trailer
          </a>
          <button className="close-button" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div> */}

    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{titulo}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
        <video src={Video} poster={imagen}
        className="w-full sm:h-[20vw] object-cover brightness-[60%] transition duration-500" autoPlay muted loop controls></video>
          <div className="movie-detail">
            <p>
              <strong>Año:</strong> {año}
            </p>
            <p>
              <strong>Descripción:</strong> {descripcion}
            </p>
            <p>
              <strong>Director:</strong> {director}
            </p>
            <p>
              <strong>Reparto:</strong> {reparto}
            </p>
            <p>
              <strong>Calificación:</strong> {calificacion}
            </p>
            <p>
              <strong>Generos:</strong> {generos}
            </p>
            <p>
              <strong>Lanzamiento:</strong> {lanzamiento}
            </p>
            <p>
              <strong>Idioma:</strong> {idioma}
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

export default Modal