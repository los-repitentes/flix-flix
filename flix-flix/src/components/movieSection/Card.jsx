import React, {useState} from "react";
import Modal from "./Modal";

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
  results
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card-item" onClick={openModal}>
        <img src={imagen} alt="Imagen o Cover de la pelicula" />
        <div className="card-body">
          <h4>{titulo}</h4>
          <p>Generos{generos}</p>
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

      {isModalOpen && (
        <Modal
          titulo={titulo}
          imagen={imagen}
          año={año}
          descripcion={descripcion}
          director={director}
          reparto={reparto}
          calificacion={calificacion}
          generos={generos}
          lanzamiento={lanzamiento}
          idioma={idioma}
          results={results}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Card;
