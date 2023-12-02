<?php
include("conexion.php");
header("Access-Control-Allow-Origin: *");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $conexion = conectar();

        // Recibe datos del front-end
        $data = json_decode(file_get_contents("php://input"), true);

        if (isset($data['username']) && isset($data['password'])) {
            $username = $data['username'];
            $password = $data['password'];

            // Realiza la consulta en la base de datos
            $query = "SELECT * FROM uflixflix WHERE nombre = :username";
            $statement = $conexion->prepare($query);
            $statement->execute(array(':username' => $username));

            $user = $statement->fetch(PDO::FETCH_ASSOC);

            if ($user && password_verify($password, $user['contraseña'])) {
                // Credenciales válidas
                $response = array('success' => true);
                echo json_encode($response);
            } else {
                // Credenciales incorrectas
                $response = array('success' => false, 'error' => 'Credenciales incorrectas');
                echo json_encode($response);
            }
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
    <title>Login</title>
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form id="login-form">
            <label for="username">Usuario:</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>

            <button type="button" onclick="login()">Iniciar sesión</button>

            <p class="disclaimer">Las imágenes son de un tercero.</p>
            
            <div class="register-link">
                <p class ="disclaimer">¿No tienes cuenta? <a href="registro.php">Regístrate</a></p>
            </div>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>
