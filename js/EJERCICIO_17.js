


const manejarTareas = (function () {

    let tareas = [];

   
    function guardarEnLocalStorage() {
        
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }

    
    function agregar(textoTarea) {
        
        const nuevaTarea = {
            id: Date.now(),
            texto: textoTarea
        };

        
        tareas.push(nuevaTarea);

        guardarEnLocalStorage();
    }

    function eliminar(id) {
        
        tareas = tareas.filter(tarea => tarea.id !== id);

        guardarEnLocalStorage();
    }

    
    function cargar() {
        
        const datosGuardados = localStorage.getItem('tareas');

        tareas = datosGuardados ? JSON.parse(datosGuardados) : [];
    }

    
    function obtener() {
        return tareas;
    }

    return {
        agregar: agregar,
        eliminar: eliminar,
        cargar: cargar,
        obtener: obtener
    };

})(); 


function obtenerTareas() {
    return manejarTareas.obtener();
}



function renderizarTareas() {

    const listaTareas = document.getElementById('listaTareas');

    listaTareas.innerHTML = '';

    const tareas = obtenerTareas();

   
    tareas.forEach(tarea => {
  
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = tarea.texto;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';

        
        btnEliminar.onclick = () => eliminarTarea(tarea.id);

        li.appendChild(span);
        li.appendChild(btnEliminar);

       
        listaTareas.appendChild(li);
    });
}


function agregarTarea() {

    const input = document.getElementById('inputTarea');

    const texto = input.value.trim();

    
    if (texto === '') {
        return;
    }

    manejarTareas.agregar(texto);

    input.value = '';

    renderizarTareas();
}



function eliminarTarea(id) {

    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta tarea se eliminará permanentemente.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((resultado) => {

        
        if (resultado.isConfirmed) {

            
            manejarTareas.eliminar(id);

            
            renderizarTareas();

            
            Swal.fire(
                'Eliminada',
                'La tarea ha sido eliminada.',
                'success'
            );
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    manejarTareas.cargar();      
    renderizarTareas();          
});