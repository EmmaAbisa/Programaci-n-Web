// Esperar a que el usuario haga clic en el botón "Convertir"
document.getElementById('btn-convertir').addEventListener('click', function() {
    
    // Captura de los elementos del DOM necesarios
    const inputcadena = document.getElementById('CADENA');
    const inputcalcula1 = document.getElementById('CALCULA1');
    const inputcalcula2 = document.getElementById('CALCULA2');
    const inputcalcula3 = document.getElementById('CALCULA3');
    const errorMensaje = document.getElementById('error-CADENA');

    // Obtener el valor ingresado quitando espacios en blanco extras
    const valorIngresado = inputcadena.value.trim();

    // VALIDACIÓN: Verificar si está vacío o si el valor NO es un número (isNaN)
    if (valorIngresado === "" ) {

        errorMensaje.style.display = "block";                          // Muestra el texto de error
        inputcadena.style.borderColor = "var(--color-error)";         // Cambia el borde a rojo
        inputcalcula1.value = "";
        inputcalcula2.value = "";
        inputcalcula3.value = "";
                                         // Limpia el resultado previo
        return;                                                        // Detiene la ejecución
    }

    // Si la validación es exitosa, se ocultan los errores previos
    errorMensaje.style.display = "none";
    inputcadena.style.borderColor = "var(--color-borde)";

    let arreglo = valorIngresado.split(',');


let numeros = arreglo.map(Number);

if ( numeros.length === 0) {
    errorMensaje.style.display = "block";
    inputcadena.style.borderColor = "var(--color-error)";
    inputcalcula1.value = "";
    inputcalcula2.value = "";
    inputcalcula3.value = "";
    return; // Detiene todo si falta el texto O si no hay números válidos
}

// Si pasa este único IF, todo está perfecto
errorMensaje.style.display = "none";
inputcadena.style.borderColor = "var(--color-borde)";


    // Conversión del texto a número decimal
    
let maximo = Math.max(...numeros);
let minimo = Math.min(...numeros);

let suma = numeros.reduce((acc, valor ) => acc + valor,0 );
let promedio = suma / numeros.length;


    // Mostrar el resultado final en la caja de texto bloqueada con el formato pedido
    inputcalcula1.value = `${Number(maximo.toFixed(2))}`;
    inputcalcula2.value = `${Number(minimo.toFixed(2))}`;
    inputcalcula3.value = `${Number(promedio.toFixed(2))}`;

});
