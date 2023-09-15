// class EstadisticaPelosos{
//     static esPar() {}
//     static calcularMediana() {}
// }

//Promedio
const cardPromedio = document.querySelector('.card-promedio');
const modalPromedio = document.querySelector('.modal-promedio');
const ocultarModalPromedio = document.querySelector('.close-icon-promedio');

const inputPromedio1 = document.querySelector('#promedio1-input');
const inputPromedio2 = document.querySelector('#promedio2-input');
const inputPromedio3 = document.querySelector('#promedio3-input');
const inputPromedio4 = document.querySelector('#promedio4-input');
const inputPromedio5 = document.querySelector('#promedio5-input');
const inputPromedio6 = document.querySelector('#promedio6-input');
const inputPromedio7 = document.querySelector('#promedio7-input');
const inputPromedio8 = document.querySelector('#promedio8-input');
const inputPromedio9 = document.querySelector('#promedio9-input');
const inputPromedio10 = document.querySelector('#promedio10-input');
const promedioRespuesta = document.querySelector('.promedio-respuesta');
const botonCalcularPromedio = document.querySelector('.btnCalcularPromedio');

//Mediana
const cardMediana = document.querySelector('.card-mediana');
const modalMediana = document.querySelector('.modal-mediana');
const ocultarModalMediana = document.querySelector('.close-icon-mediana');

const inputMediana1 = document.querySelector('#mediana1-input');
const inputMediana2 = document.querySelector('#mediana2-input');
const inputMediana3 = document.querySelector('#mediana3-input');
const inputMediana4 = document.querySelector('#mediana4-input');
const inputMediana5 = document.querySelector('#mediana5-input');
const inputMediana6 = document.querySelector('#mediana6-input');
const inputMediana7 = document.querySelector('#mediana7-input');
const inputMediana8 = document.querySelector('#mediana8-input');
const inputMediana9 = document.querySelector('#mediana9-input');
const inputMediana10 = document.querySelector('#mediana10-input');
const medianaRespuesta = document.querySelector('.mediana-respuesta');
const botonCalcularMediana = document.querySelector('.btnCalcularMediana');

//Moda
const cardModa = document.querySelector('.card-moda');
const modalModa = document.querySelector('.modal-moda');
const ocultarModalModa = document.querySelector('.close-icon-moda');

const inputModa1 = document.querySelector('#moda1-input');
const inputModa2 = document.querySelector('#moda2-input');
const inputModa3 = document.querySelector('#moda3-input');
const inputModa4 = document.querySelector('#moda4-input');
const inputModa5 = document.querySelector('#moda5-input');
const inputModa6 = document.querySelector('#moda6-input');
const inputModa7 = document.querySelector('#moda7-input');
const inputModa8 = document.querySelector('#moda8-input');
const inputModa9 = document.querySelector('#moda9-input');
const inputModa10 = document.querySelector('#moda10-input');
const modaRespuesta = document.querySelector('.moda-respuesta');
const botonCalcularModa = document.querySelector('.btnCalcularModa');


cardPromedio.addEventListener('click', () => {modalPromedio.showModal()});
ocultarModalPromedio.addEventListener('click', () => {
    modalPromedio.close();
    inputPromedio1.value = '';
    inputPromedio2.value = '';
    inputPromedio3.value = '';
    inputPromedio4.value = '';
    inputPromedio5.value = '';
    inputPromedio6.value = '';
    inputPromedio7.value = '';
    inputPromedio8.value = '';
    inputPromedio9.value = '';
    inputPromedio10.value = '';
    promedioRespuesta.innerText = '';
});
botonCalcularPromedio.addEventListener('click', promedioHTML);

cardMediana.addEventListener('click', () => {modalMediana.showModal()});
ocultarModalMediana.addEventListener('click', () => {
    modalMediana.close();
    inputMediana1.value = '';
    inputMediana2.value = '';
    inputMediana3.value = '';
    inputMediana4.value = '';
    inputMediana5.value = '';
    inputMediana6.value = '';
    inputMediana7.value = '';
    inputMediana8.value = '';
    inputMediana9.value = '';
    inputMediana10.value = '';
    medianaRespuesta.innerText = '';
});
botonCalcularMediana.addEventListener('click', medianaHTML);

cardModa.addEventListener('click', () => {modalModa.showModal()});
ocultarModalModa.addEventListener('click', () => {
    modalModa.close();
    inputModa1.value = '';
    inputModa2.value = '';
    inputModa3.value = '';
    inputModa4.value = '';
    inputModa5.value = '';
    inputModa6.value = '';
    inputModa7.value = '';
    inputModa8.value = '';
    inputModa9.value = '';
    inputModa10.value = '';
    modaRespuesta.innerText = '';
})
botonCalcularModa.addEventListener('click', modaHTML);

function promedioHTML(){
    let arrayPromedio = [];

    const valor1 = Number(inputPromedio1.value);
    const valor2 = Number(inputPromedio2.value);
    const valor3 = Number(inputPromedio3.value);
    const valor4 = Number(inputPromedio4.value);
    const valor5 = Number(inputPromedio5.value);
    const valor6 = Number(inputPromedio6.value);
    const valor7 = Number(inputPromedio7.value);
    const valor8 = Number(inputPromedio8.value);
    const valor9 = Number(inputPromedio9.value);
    const valor10 = Number(inputPromedio10.value);

    if(!valor1 || !valor2 || !valor3 || !valor4 || !valor5 || !valor6 || !valor7 || !valor8 || !valor9 || !valor10){
        window.alert('Debes ingresar todos los valores');
        return;
    }else{
        arrayPromedio.push(valor1);
        arrayPromedio.push(valor2);
        arrayPromedio.push(valor3);
        arrayPromedio.push(valor4);
        arrayPromedio.push(valor5);
        arrayPromedio.push(valor6);
        arrayPromedio.push(valor7);
        arrayPromedio.push(valor8);
        arrayPromedio.push(valor9);
        arrayPromedio.push(valor10);

        const respuestaPromedio = EstadisticaPelosos.calcularPromedio(arrayPromedio);
        promedioRespuesta.innerText = 'El promedio es ' + respuestaPromedio.toFixed(2);
        return;
    }
}

function medianaHTML(){
    let array = [];

    const valor1 = Number(inputMediana1.value);
    const valor2 = Number(inputMediana2.value);
    const valor3 = Number(inputMediana3.value);
    const valor4 = Number(inputMediana4.value);
    const valor5 = Number(inputMediana5.value);
    const valor6 = Number(inputMediana6.value);
    const valor7 = Number(inputMediana7.value);
    const valor8 = Number(inputMediana8.value);
    const valor9 = Number(inputMediana9.value);
    const valor10 = Number(inputMediana10.value);

    if(!valor1 || !valor2 || !valor3 || !valor4 || !valor5 || !valor6 || !valor7 || !valor8 || !valor9 || !valor10){
        window.alert('Debes ingresar todos los valores');
        return;
    }else{
        array.push(valor1);
        array.push(valor2);
        array.push(valor3);
        array.push(valor4);
        array.push(valor5);
        array.push(valor6);
        array.push(valor7);
        array.push(valor8);
        array.push(valor9);
        array.push(valor10);

        const respuestaMediana = EstadisticaPelosos.calcularMediana(array);
        medianaRespuesta.innerText = 'La Mediana es ' + respuestaMediana.toFixed(2);
        return;
    }
}

function modaHTML(){
    let array = [];

    const valor1 = Number(inputModa1.value);
    const valor2 = Number(inputModa2.value);
    const valor3 = Number(inputModa3.value);
    const valor4 = Number(inputModa4.value);
    const valor5 = Number(inputModa5.value);
    const valor6 = Number(inputModa6.value);
    const valor7 = Number(inputModa7.value);
    const valor8 = Number(inputModa8.value);
    const valor9 = Number(inputModa9.value);
    const valor10 = Number(inputModa10.value);

    if(!valor1 || !valor2 || !valor3 || !valor4 || !valor5 || !valor6 || !valor7 || !valor8 || !valor9 || !valor10){
        window.alert('Debes ingresar todos los valores');
        return;
    }else{
        array.push(valor1);
        array.push(valor2);
        array.push(valor3);
        array.push(valor4);
        array.push(valor5);
        array.push(valor6);
        array.push(valor7);
        array.push(valor8);
        array.push(valor9);
        array.push(valor10);

        const respuestaModa = EstadisticaPelosos.calcularModa(array);
        modaRespuesta.innerText = 'La Moda es ' + respuestaModa;
        return;
    }
}



const EstadisticaPelosos = {};

//Mi solucion
EstadisticaPelosos.esPar = function esPar(array){
    return (array.length % 2 == 0);
}

//Solución de JuanDC 
// function esPar (array){
//     //como retorna falso, al negar ! devuelve verdadero
//     return !(array.length % 2);
// }

// function esImpar(array){
//     //si retorna falso significa que es impar
//     return array.length % 2;
// }

EstadisticaPelosos.calcularMediana = function calcularMediana(arrayDesordenado){
    const array = EstadisticaPelosos.ordenarArray(arrayDesordenado);
    const arrayEsPar = EstadisticaPelosos.esPar(array);

    if(arrayEsPar){
        const mitad1ListaPar = array[(array.length/2)-1];
        const mitad2ListaPar = array[(array.length/2)];
        const listaMitades = [mitad1ListaPar, mitad2ListaPar];
        const medianaListaPar = EstadisticaPelosos.calcularPromedio(listaMitades);
        //console.log(medianaListaPar);
        return medianaListaPar
    }else{
        const indexMitadListaImpar = Math.floor(array.length/2);
        const medianaListaImpar = array[indexMitadListaImpar];
        //console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}

EstadisticaPelosos.calcularPromedio = function calcularPromedio(array){
    //mi solucion 🥰
    const sumaTotal = array.reduce((sum, item) => sum + item, 0);
    const promedio = sumaTotal/ (array.length);
    
    //solucion de JuanDC 😊
    // function sumarElementos (valorAcumulado, nuevoValor){
    //     return valorAcumulado + nuevoValor;
    // }

    // const sumaElementos = array.reduce(sumarElementos);
    // const promedio = sumaElementos/ (array.length);
    return promedio;
}

EstadisticaPelosos.ordenarArray = function ordenarArray (arrayDesordenado){
    //solucion de JuanDC
    // function ordenarArraySort(valorAcumulado,nuevoValor){
    //     // if(valorAcumulado > nuevoValor){
    //     //     return 1;
    //     // }else if(valorAcumulado == nuevoValor){
    //     //     return 0;
    //     // }else if(valorAcumulado < nuevoValor){
    //     //     return -1;
    //     // }
        
    //     return nuevoValor - valorAcumulado; //descendente
    //     return valorAcumulado - nuevoValor; //ascendente
    //     // return 5 - 10 -> -5; //negativo
    //     // return 5 - 5 -> 0; 
    //     // return 10 - 5 -> 5; //positivo
    // }
    // return arrayDesordenado.sort(ordenarArraySort);

    return arrayDesordenado.sort((a,b) => a-b); //Mi solucion
}

//[[0,1], [0,1], [0,1]]
EstadisticaPelosos.ordenarArrayBidimensional = function ordenarArrayBidimensional (arrayDesordenado,i){
    return arrayDesordenado.sort((a,b) => b[i]-a[i]); 
}

EstadisticaPelosos.calcularModa = function calcularModa(array){
    const repeticion = array.reduce((obj,elementos) => {
        if(!obj[elementos]){ //si no existe el elemento
            obj[elementos] = 1;
        }else{
            obj[elementos] += 1;
        }
        return obj;
    }, {})

    const listaArray = Object.entries(repeticion)
    const listaOrdenada = EstadisticaPelosos.ordenarArrayBidimensional(listaArray, 1);
    const arrayMasRepetido = listaOrdenada[0];
    console.log(arrayMasRepetido[0]);
    return arrayMasRepetido[0];
}


console.log(EstadisticaPelosos);
//calcularModa([10, 5, 8, 7, 9, 8, 9, 6, 9]);
