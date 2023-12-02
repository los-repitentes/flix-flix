import React from "react";
import Card from "./Card";
// import useData from "../hooks/useData";
const Movies = () => {
  return (
    <>
      <div className="content">
        <div className="card-container">
            <Card imagen="https://i.pinimg.com/564x/23/e4/e7/23e4e7aa8e7a9e2dbc75fece9d77fc99.jpg" 
            titulo="Prueba" año="2015" descripcion="soy una descripcion de prueba jeje"/>
            <Card imagen="https://i.pinimg.com/564x/23/e4/e7/23e4e7aa8e7a9e2dbc75fece9d77fc99.jpg" 
            titulo="Prueba" año="2015" descripcion="soy una descripcion de prueba jeje"/>
            <Card imagen="https://i.pinimg.com/564x/23/e4/e7/23e4e7aa8e7a9e2dbc75fece9d77fc99.jpg" 
            titulo="Prueba" año="2015" descripcion="soy una descripcion de prueba jeje"/>
            <Card imagen="https://i.pinimg.com/564x/23/e4/e7/23e4e7aa8e7a9e2dbc75fece9d77fc99.jpg" 
            titulo="Prueba" año="2015" descripcion="soy una descripcion de prueba jeje"/>
            <Card imagen="https://i.pinimg.com/564x/23/e4/e7/23e4e7aa8e7a9e2dbc75fece9d77fc99.jpg" 
            titulo="Prueba" año="2015" descripcion="soy una descripcion de prueba jeje"/>
        </div>
      </div>
    </>
  );
};

export default Movies;
