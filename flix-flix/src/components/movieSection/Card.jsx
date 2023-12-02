import React from "react";

const Card = ({
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
}) => {
  return (
    <>
      <div className="card-item">
        <img src={imagen} alt="Imagen o Cover de la pelicula" />
        <div className="card-body">
          <h4>{titulo}</h4>
          <p>{descripcion}</p>
          <span>Año: {año}</span>
         <div className="btn-organization">
         <div className="button-container">
            <button className="button">
              <span role="img" aria-label="Detalles">
                ℹ️
              </span>{" "}
              Detalles
            </button>
          </div>
          <div className="button-container">
            <button className="button replay-button">
              <span role="img" aria-label="Reproducir">
                ▶️
              </span>
            </button>
          </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default Card;
