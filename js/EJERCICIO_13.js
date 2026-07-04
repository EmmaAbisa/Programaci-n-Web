// Esperar a que el usuario haga clic en el botón "Convertir"
document.getElementById('btn-convertir').addEventListener('click', function() {
    
    // Captura de los elementos del DOM necesarios
    const inputedad = document.getElementById('EDAD');
    const inputmayor = document.getElementById('MAYOR');
    const errorMensaje = document.getElementById('error-EDAD');

    // Obtener el valor ingresado quitando espacios en blanco extras
    const valorIngresado = inputedad.value.trim();

    // VALIDACIÓN: Verificar si está vacío o si el valor NO es un número (isNaN)
    if (valorIngresado === "" || isNaN(valorIngresado)|| parseFloat(valorIngresado) < 18) {

        errorMensaje.style.display = "block";                          // Muestra el texto de error
        inputedad.style.borderColor = "var(--color-error)";         // Cambia el borde a rojo
        inputmayor.value = "No puedes votar";
                                         // Limpia el resultado previo
        return;                                                        // Detiene la ejecución
    }else{
        inputmayor.value = "Puedes Votar"
 
    }

    // Si la validación es exitosa, se ocultan los errores previos
    errorMensaje.style.display = "none";
    inputedad.style.borderColor = "var(--color-borde)";
});
