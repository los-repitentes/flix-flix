<?php
include("conexion.php");

try {
    $conexion = conectar();

    // Realiza una consulta en la base de datos
    $query = "SELECT * FROM usuarios";
    $statement = $conexion->query($query);
    $resultados = $statement->fetchAll(PDO::FETCH_ASSOC);

    // Devuelve los resultados como respuesta JSON
    echo json_encode($resultados);
} catch (PDOException $e) {
    $response = array('error' => 'Ocurrió un error al consultar los datos: ' . $e->getMessage());
    echo json_encode($response);
}
?>
