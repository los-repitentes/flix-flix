import {useEffect, useState} from "react";
import Card from "./Card";
// import useData, { useHttp } from "../hooks/useData";
const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
      const apiUrl = `https://www.omdbapi.com/?apikey=dfd2f925&t=matrix`;
      try {
        const fetchData = async () => {
          const response = await fetch(apiUrl);
          const data = await response.json();
          console.log(data);
          setSearchResults(data);
        };
        fetchData();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } , []);

  return (
    <>
      <div className="content">
        <div className="card-container">
            <Card results={searchResults}/>
            <Card results={searchResults}/>
            <Card results={searchResults}/>
            <Card results={searchResults}/>
            <Card results={searchResults}/>
            <Card results={searchResults}/>
            <Card results={searchResults}/>
            <Card results={searchResults}/>
            <Card results={searchResults}/>
            {/* <Card imagen="https://i.pinimg.com/564x/23/e4/e7/23e4e7aa8e7a9e2dbc75fece9d77fc99.jpg" 
            titulo="Prueba" año="2015" descripcion="soy una descripcion de prueba jeje"/>
            <Card imagen="https://i.pinimg.com/564x/23/e4/e7/23e4e7aa8e7a9e2dbc75fece9d77fc99.jpg" 
            titulo="Prueba" año="2015" descripcion="soy una descripcion de prueba jeje"/>
            <Card imagen="https://i.pinimg.com/564x/23/e4/e7/23e4e7aa8e7a9e2dbc75fece9d77fc99.jpg" 
            titulo="Prueba" año="2015" descripcion="soy una descripcion de prueba jeje"/>
            <Card imagen="https://i.pinimg.com/564x/23/e4/e7/23e4e7aa8e7a9e2dbc75fece9d77fc99.jpg" 
            titulo="Prueba" año="2015" descripcion="soy una descripcion de prueba jeje"/>
            <Card imagen="https://i.pinimg.com/564x/23/e4/e7/23e4e7aa8e7a9e2dbc75fece9d77fc99.jpg" 
            titulo="Prueba" año="2015" descripcion="soy una descripcion de prueba jeje"/> */}
        </div>
      </div>
    </>
  );
};

export default Movies;
