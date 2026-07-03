// Esperar a que el usuario haga clic en el botón "Convertir"
document.getElementById('btn-convertir').addEventListener('click', function() {
    
    // Captura de los elementos del DOM necesarios
    const inputCelsius = document.getElementById('celsius');
    const inputFahrenheit = document.getElementById('fahrenheit');
    const errorMensaje = document.getElementById('error-celsius');

    // Obtener el valor ingresado quitando espacios en blanco extras
    const valorIngresado = inputCelsius.value.trim();

    // VALIDACIÓN: Verificar si está vacío o si el valor NO es un número (isNaN)
    if (valorIngresado === "" || isNaN(valorIngresado)) {
        errorMensaje.style.display = "block";                          // Muestra el texto de error
        inputCelsius.style.borderColor = "var(--color-error)";         // Cambia el borde a rojo
        inputFahrenheit.value = "";                                    // Limpia el resultado previo
        return;                                                        // Detiene la ejecución
    }

    // Si la validación es exitosa, se ocultan los errores previos
    errorMensaje.style.display = "none";
    inputCelsius.style.borderColor = "var(--color-borde)";

    // Conversión del texto a número decimal
    const celsius = parseFloat(valorIngresado);

    // Aplicación estricta de la fórmula matemática: F = (C * 9/5) + 32
    const fahrenheit = (celsius * 9 / 5) + 32;

    // Mostrar el resultado final en la caja de texto bloqueada con el formato pedido
    inputFahrenheit.value = `${Number(fahrenheit.toFixed(2))}°F`;
});
