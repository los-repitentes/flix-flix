// export const loadData = async () => {
//   const response = await fetch('http://localhost/idiomasBackend/consultar_usuario.php')
//   .then(response => response.json())
//   .then(response => {
//     console.log(response)
//   })
//   .catch(error => console.error(error))
//   .finally(()=> console.log("se terminó la peticion"))
// }


// export const sendData = () => {
    
//     const nuevoUsuario:any = {
//         'nombre': 'Ejemplo',
//         'correo': 'ejemplo@example.com',
//       };

//     const data = fetch('http://localhost/idiomasBackend/insertar_usuario.php',{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(nuevoUsuario),
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         console.error('Ha ocurrido un error:', error)
//     })
// }

import { useState, useEffect } from 'react';
export const [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10, setP1,setP2,setP3,setP4,setP5,setP6,setP7,setP8,setP9,setP10] = useState([]);

useEffect(() => {
    const apiUrl = `https://www.omdbapi.com/?apikey=dfd2f925&t=matrix`;
    try {
      const fetchData = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setP1(data);
        console.log(p1);
      };
      fetchData();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  } , []);

// useEffect(() => {
//     const apiUrl = `https://www.omdbapi.com/?apikey=dfd2f925&t=up!`;
//     try {
//       const fetchData = async () => {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         setP2(data);
//         console.log(data);
//       };
//       fetchData();
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   } , []);

// useEffect(() => {
//     const apiUrl = `https://www.omdbapi.com/?apikey=dfd2f925&t=avengers`;
//     try {
//       const fetchData = async () => {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         setP3(data);
//         console.log(data);
//       };
//       fetchData();
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   } , []);