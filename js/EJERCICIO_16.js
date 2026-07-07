
const sumar = (a, b) => a + b;


const restar = (a, b) => a - b;


const multiplicar = (a, b) => a * b;


const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';


const calcularOperacion = (operacion) => {


    const inputNumero1 = document.getElementById('numero1');
    const inputNumero2 = document.getElementById('numero2');
    const inputResultado = document.getElementById('resultado');

    
    const numero1 = parseFloat(inputNumero1.value);
    const numero2 = parseFloat(inputNumero2.value);

   
    if (isNaN(numero1) || isNaN(numero2)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor ingresa valores numéricos válidos en ambos campos.'
        });
        return; 
    }

    
    let resultado;

    
    if (operacion === 'suma') {
        resultado = sumar(numero1, numero2);
    } else if (operacion === 'resta') {
        resultado = restar(numero1, numero2);
    } else if (operacion === 'multiplicacion') {
        resultado = multiplicar(numero1, numero2);
    } else if (operacion === 'division') {
        resultado = dividir(numero1, numero2);
    }

    
    inputResultado.value = resultado;
};