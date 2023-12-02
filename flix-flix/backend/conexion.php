<?php
    function conectar(){
        $host = '127.0.0.1';
        $usuario = 'root';
        $contrasena = '';
        $base_de_datos = 'login';

        $conexion = new PDO("mysql:host=$host;dbname=$base_de_datos", $usuario, $contrasena);
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $conexion;
    }
?>