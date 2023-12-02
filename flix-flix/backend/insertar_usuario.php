<?php
include("conexion.php");
header("Access-Control-Allow-Origin: *");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    try {
        $conexion = conectar();
        
        // Recibe datos del front-end
        $data = json_decode(file_get_contents("php://input"), true);
    
        if (isset($data['nombre']) && isset($data['correo'])) {
            $nombre = $data['nombre'];
            $correo = $data['correo'];
        
            // Realiza la inserción en la base de datos
            $query = "INSERT INTO usuarios (nombre, correo) VALUES (:nombre, :correo)";
            $statement = $conexion->prepare($query);
            $statement->execute(array(':nombre' => $nombre, ':correo' => $correo));
            
            // Devuelve una respuesta JSON
            $response = array('message' => 'Usuario guardado con éxito');
            echo json_encode($response);
        }

        else{
            // Devuelve una respuesta JSON de error si faltan datos
            $response = array('error' => 'Faltan datos obligatorios');
            echo json_encode($response);
        }
    
    } catch (PDOException $e) {
        echo 'Error de conexión: ' . $e->getMessage();
    }
};
?>
