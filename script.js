// Obtener los elementos para cambiar el tema y el idioma
const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
const rootStyles = document.documentElement.style;
const textToChange = document.querySelectorAll("[data-section]");  // Selecciona todos los elementos con data-section

// Estado del tema, para facilitar la gestión del mismo
let isDarkMode = false;

// Cambia el tema (oscuro/ claro) al hacer clic
toggleTheme.addEventListener("click", () => {
    toggleThemeMode();
});

// Función para cambiar el tema
function toggleThemeMode() {
    document.body.classList.toggle("dark", !isDarkMode);
    toggleIcon.src = isDarkMode ? "assets/icon/moon.svg" : "assets/icon/sun.svg";
    toggleText.textContent = isDarkMode ? "" : "";
    isDarkMode = !isDarkMode;
}

// Generar contraseña
document.getElementById('generate-btn').addEventListener('click', generatePassword);

function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSpecial = document.getElementById('include-special').checked;
    const errorMsg = document.getElementById('error-msg');

    // Validaciones
    if (length < 6 || length > 32) {
        errorMsg.textContent = 'La longitud de la contraseña debe estar entre 6 y 32 caracteres.';
        return;
    } else if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
        errorMsg.textContent = 'Debe seleccionar al menos una opción de caracteres.';
        return;
    } else {
        errorMsg.textContent = '';
    }

    // Caracteres disponibles para la contraseña
    const characterSets = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        special: '!@#$%^&*()-_=+[]{}|;:,.<>?'
    };

    // Construir el conjunto de caracteres
    let characterSet = '';
    if (includeLowercase) characterSet += characterSets.lowercase;
    if (includeUppercase) characterSet += characterSets.uppercase;
    if (includeNumbers) characterSet += characterSets.numbers;
    if (includeSpecial) characterSet += characterSets.special;

    // Generación de la contraseña
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    document.getElementById('password').value = password;
}
