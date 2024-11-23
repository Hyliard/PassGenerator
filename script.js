document.getElementById('generate-btn').addEventListener('click', generatePassword);

function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSpecial = document.getElementById('include-special').checked;
    
    if (length < 6 || length > 32) {
        document.getElementById('error-msg').textContent = 'La longitud de la contraseña debe estar entre 6 y 32 caracteres.';
        return;
    } else {
        document.getElementById('error-msg').textContent = '';
    }

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    
    let characterSet = '';
    if (includeLowercase) characterSet += lowercaseChars;
    if (includeUppercase) characterSet += uppercaseChars;
    if (includeNumbers) characterSet += numberChars;
    if (includeSpecial) characterSet += specialChars;
    
    if (characterSet === '') {
        document.getElementById('error-msg').textContent = 'Debe seleccionar al menos una opción de caracteres.';
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    document.getElementById('password').value = password;
}











// Obtener elementos del DOM
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

// Función para alternar el tema
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');

    // Cambiar icono y texto
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.src = 'assets/icons/sun.svg'; // Icono de sol
        themeText.textContent = 'Modo Claro';
    } else {
        themeIcon.src = 'assets/icons/moon.svg'; // Icono de luna
        themeText.textContent = 'Modo Oscuro';
    }

    // Guardar la preferencia del usuario en localStorage
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Verificar si hay preferencia guardada
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        themeIcon.src = 'assets/icons/sun.svg'; // Icono de sol
        themeText.textContent = 'Modo Claro';
    }
});

// Agregar el evento de clic para cambiar de tema
themeToggle.addEventListener('click', toggleTheme);
