<?php
include("conexion.php");
header("Access-Control-Allow-Origin: *");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $conexion = conectar();

        // Recibe datos del front-end
        $data = json_decode(file_get_contents("php://input"), true);

        if (isset($data['username']) && isset($data['email']) && isset($data['password']) && isset($data['confirm_password'])) {
            $username = $data['username'];
            $email = $data['email'];
            $password = $data['password'];
            $confirmPassword = $data['confirm_password'];

            // Verifica que las contraseñas coincidan
            if ($password !== $confirmPassword) {
                $response = array('success' => false, 'error' => 'Las contraseñas no coinciden');
                echo json_encode($response);
                exit();
            }

            // Verifica si el usuario ya existe
            $queryCheckUser = "SELECT * FROM uflixflix WHERE nombre = :username";
            $statementCheckUser = $conexion->prepare($queryCheckUser);
            $statementCheckUser->execute(array(':username' => $username));

            if ($statementCheckUser->rowCount() > 0) {
                $response = array('success' => false, 'error' => 'El nombre de usuario ya está en uso');
                echo json_encode($response);
                exit();
            }

            // Realiza la inserción en la base de datos
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            $queryInsertUser = "INSERT INTO uflixflix (nombre, contraseña, correo) VALUES (:username, :password, :email)";
            $statementInsertUser = $conexion->prepare($queryInsertUser);
            $statementInsertUser->execute(array(':username' => $username, ':password' => $hashedPassword, ':email' => $email));

            // Devuelve una respuesta JSON
            $response = array('success' => true);
            echo json_encode($response);

        } else {
            // Faltan datos obligatorios
            $response = array('success' => false, 'error' => 'Faltan datos obligatorios');
            echo json_encode($response);
        }

    } catch (PDOException $e) {
        echo 'Error de conexión: ' . $e->getMessage();
    }

    // Detenemos la ejecución del resto del código si se ha realizado una solicitud POST
    exit();
}
?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Registro</title>
</head>
<body>
    <div class="login-container">
        <h2>Registro</h2>
        <form id="register-form">
            <label for="username">Usuario:</label>
            <input type="text" id="username" name="username" required>

            <label for="email">Correo:</label>
            <input type="email" id="email" name="email" required>

            <label for="password">Contraseña:</label>
            <div class="password-container">
                <input type="password" id="password" name="password" required>
                <span class="password-toggle" onclick="togglePassword()"></span>
            </div>

            <label for="confirm-password">Confirmar Contraseña:</label>
            <input type="password" id="confirm-password" name="confirm-password" required>

            <button type="button" onclick="register()">Registrarse</button>

            <p class="disclaimer">Las imágenes son de un tercero.</p>

            <div class="login-link">
                <p>¿Ya tienes cuenta? <a href="login.php">Iniciar sesión</a></p>
            </div>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>
