function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Aquí deberías realizar la lógica de autenticación
    // Por ejemplo, enviar una solicitud AJAX al servidor para verificar las credenciales

    // Simplemente mostrar un mensaje por ahora
    alert('Usuario: ' + username + '\nContraseña: ' + password);
}

function register() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Crear un objeto con los datos del formulario
    var formData = {
        username: username,
        email: email,
        password: password,
        confirm_password: confirmPassword
    };

    // Realizar una solicitud AJAX para enviar los datos al servidor PHP
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "registro.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Mostrar la respuesta del servidor en la consola del navegador
            console.log(xhr.responseText);
        }
    };

    // Enviar los datos del formulario al servidor
    xhr.send(JSON.stringify(formData));
}

function togglePassword() {
    var passwordInput = document.getElementById('password');
    var passwordToggle = document.querySelector('.password-toggle');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.textContent = '👁️ Ocultar';
    } else {
        passwordInput.type = 'password';
        passwordToggle.textContent = '👁️ Mostrar';
    }
}
