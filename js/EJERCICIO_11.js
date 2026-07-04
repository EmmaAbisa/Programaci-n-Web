// Esperar a que el usuario haga clic en el botón "Convertir"
document.getElementById('btn-convertir').addEventListener('click', function() {
    
    // Captura de los elementos del DOM necesarios
    const inputKM = document.getElementById('KM');
    const inputMillas = document.getElementById('Millas');
    const errorMensaje = document.getElementById('error-Km');

    // Obtener el valor ingresado quitando espacios en blanco extras
    const valorIngresado = inputKM.value.trim();

    // VALIDACIÓN: Verificar si está vacío o si el valor NO es un número (isNaN)
    if (valorIngresado === "" || isNaN(valorIngresado|| parseFloat(valorIngresado) < 0)) {
        errorMensaje.style.display = "block";                          // Muestra el texto de error
        inputKM.style.borderColor = "var(--color-error)";         // Cambia el borde a rojo
        inputMillas.value = "";                                    // Limpia el resultado previo
        return;                                                        // Detiene la ejecución
    }

    // Si la validación es exitosa, se ocultan los errores previos
    errorMensaje.style.display = "none";
    inputKM.style.borderColor = "var(--color-borde)";

    // Conversión del texto a número decimal
    const km = parseFloat(valorIngresado);

    // Aplicación estricta de la fórmula matemática: F = (C * 9/5) + 32
    const Millas = (km * 0.621371);

    // Mostrar el resultado final en la caja de texto bloqueada con el formato pedido
    inputMillas.value = `${Number(Millas.toFixed(2))}`;
});
