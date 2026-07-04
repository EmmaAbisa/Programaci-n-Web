// Esperar a que el usuario haga clic en el botón "Convertir"
document.getElementById('btn-convertir').addEventListener('click', function() {
    
    // Captura de los elementos del DOM necesarios
    const inputmxn = document.getElementById('MXN');
    const inputusd = document.getElementById('USD');
    const errorMensaje = document.getElementById('error-MXN');

    // Obtener el valor ingresado quitando espacios en blanco extras
    const valorIngresado = inputmxn.value.trim();

    // VALIDACIÓN: Verificar si está vacío o si el valor NO es un número (isNaN)
    if (valorIngresado === "" || isNaN(valorIngresado)|| parseFloat(valorIngresado) < 0) {
        errorMensaje.style.display = "block";                          // Muestra el texto de error
        inputmxn.style.borderColor = "var(--color-error)";         // Cambia el borde a rojo
        inputusd.value = "";                                    // Limpia el resultado previo
        return;                                                        // Detiene la ejecución
    }


    // Si la validación es exitosa, se ocultan los errores previos
    errorMensaje.style.display = "none";
    inputmxn.style.borderColor = "var(--color-borde)";

    // Conversión del texto a número decimal
    const Mxn = parseFloat(valorIngresado);

    // Aplicación estricta de la fórmula matemática: F = (C * 9/5) + 32
    const Usd = (Mxn / 17.48);

    // Mostrar el resultado final en la caja de texto bloqueada con el formato pedido
    inputusd.value = `${Number(Usd.toFixed(2))}`;
});
