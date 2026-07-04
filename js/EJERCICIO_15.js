// Acá guardamos a todos los alumnos que vayamos metiendo
let estudiantes = [];

// --- Bboton oa agregar ---
document.getElementById('btn-agregar').addEventListener('click', function() {
    // Agarramos lo que el usuario escribió en la pantalla
    const inputNombre = document.getElementById('NOMBRE');
    const inputCalificacion = document.getElementById('CALIFICACION');
    
    const nombre = inputNombre.value.trim();
    const calificacion = parseFloat(inputCalificacion.value);

    // Validamos rápido que no dejen campos vacíos o cosas raras
    if (nombre === "" || isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
        alert("Oye, llena bien los campos con un nombre y nota válida (0-100)");
        return; // Frenamos todo si está mal
    }

    // Si todo está bien, armamos el objeto y lo metemos al arreglo global que hiicsmos
    estudiantes.push({
        nombre: nombre,
        calificacion: calificacion
    });

    alert("Estudiante guardado con éxito");

    // Limpiamos los cuadritos para poder escribir el siguiente
    inputNombre.value = "";
    inputCalificacion.value = "";
});


// --- bont pa calular y que no s eolvidenn ---
document.getElementById('btn-convertir').addEventListener('click', function() {
    // Jalamos los campos de solo lectura donde van los resultados
    const inputCalcula1 = document.getElementById('CALCULA1');
    const inputCalcula2 = document.getElementById('CALCULA2');
    const inputCalcula3 = document.getElementById('CALCULA3');

    // Si le dan clic sin haber metido a nadie, los mandamos a volar
    if (estudiantes.length === 0) {
        alert("Primero agrega a algunos estudiantes, no hay nada que calcular");
        return;
    }

    // Buscamos cuál es la nota más alta y la más baja usando Math
    let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    // Ahora buscamos qué estudiante tiene esa nota máxima y mínima para sacar su nombre
    let estudianteMasAlto = estudiantes.find(e => e.calificacion === calificacionMaxima);
    let estudianteMasBajo = estudiantes.find(e => e.calificacion === calificacionMinima);

    // Sumamos todas las notas con el reduce y lo dividimos entre el total de alumnos
    let promedio = estudiantes.reduce((total, e) => total + e.calificacion, 0) / estudiantes.length;

    // Pintamos los resultados en la pantalla como pide la hoja (con 2 decimales el promedio)
    inputCalcula1.value = estudianteMasAlto.nombre;
    inputCalcula2.value = estudianteMasBajo.nombre;
    inputCalcula3.value = promedio.toFixed(2);
});
