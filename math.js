//Cuadrado
const mostrarModalCuadrado = document.querySelector('.modal-cuadrado');
const ocultarModalCuadrado = document.querySelector('.close-icon-cuadrado');
const cardCuadrado = document.querySelector('.card-cuadrado');
const inputLadoCuadrado = document.querySelector('#lado-cuadrado-input');
const resultadoAreaCuadrado = document.querySelector('.area-cuadrado');
const resultadoPerimetroCuadrado = document.querySelector('.perimetro-cuadrado');
const btnCalcularCuadrado = document.querySelector('.btnCalcularCuadrado');

//Triangulo
const mostrarModalTriangulo = document.querySelector('.modal-triangulo');
const ocultarModalTriangulo = document.querySelector('.close-icon-triangulo');
const cardTriangulo = document.querySelector('.card-triangulo');
const inputLado1Triangulo = document.querySelector('#lado1-triangulo-input');
const inputLado2Triangulo = document.querySelector('#lado2-triangulo-input');
const inputLado3Triangulo = document.querySelector('#lado3-triangulo-input');
const btnCalcularTriangulo = document.querySelector('.btnCalcularTriangulo');
const resultadoAreaTriangulo = document.querySelector('.area-triangulo');
const resultadoPerimetroTriangulo = document.querySelector('.perimetro-triangulo');

//Circunferencia
const mostrarModalCircunferencia = document.querySelector('.modal-circunferencia');
const ocultarModalCircunferencia = document.querySelector('.close-icon-cicunferencia');
const cardCircunferencia = document.querySelector('.card-circunferencia');
const inputRadioCircunferencia = document.querySelector('#radio-cicunferencia-input');
const btnCalcularCircunferencia = document.querySelector('.btnCalcularCircunferencia');
const resultadoAreaCircunferencia = document.querySelector('.area-circunferencia');
const resultadoPerimetroCircunferencia = document.querySelector('.perimetro-circunferencia');

cardCuadrado.addEventListener('click', () => {
    mostrarModalCuadrado.showModal();
});

cardTriangulo.addEventListener('click', () => {
    mostrarModalTriangulo.showModal();
});

cardCircunferencia.addEventListener('click', () => {
    mostrarModalCircunferencia.showModal();
})

ocultarModalCuadrado.addEventListener('click', () => {
    mostrarModalCuadrado.close();
    inputLadoCuadrado.value = '';
    resultadoAreaCuadrado.innerText = '';
    resultadoPerimetroCuadrado.innerText = '';
});

ocultarModalTriangulo.addEventListener('click', () => {
    mostrarModalTriangulo.close();
    inputLado1Triangulo.value = '';
    inputLado2Triangulo.value = '';
    inputLado3Triangulo.value = '';
    resultadoAreaTriangulo.innerText = '';
    resultadoPerimetroTriangulo.innerText = '';
});

ocultarModalCircunferencia.addEventListener('click', () => {
    mostrarModalCircunferencia.close();
    inputRadioCircunferencia.value = '';
    resultadoAreaCircunferencia.innerText = '';
    resultadoPerimetroCircunferencia.innerText = '';
});

btnCalcularCuadrado.addEventListener('click', calcularCuadrado);
btnCalcularTriangulo.addEventListener('click', calcularTriangulo);
btnCalcularCircunferencia.addEventListener('click', calcularCirculo);

//Cuadrado
function calcularCuadrado(){
    const ladoCuadrado = Number(inputLadoCuadrado.value);
    const perimetroCuadrado = ladoCuadrado * 4;
    const areaCuadrado = Math.pow(ladoCuadrado,2);

    if(!ladoCuadrado){
        window.alert('Por favor, ingresa el lado del cuadrado');
        return;
    }else{
        resultadoAreaCuadrado.innerText = 'El área es: ' + areaCuadrado;
        resultadoPerimetroCuadrado.innerText = 'El perímetro es: ' + perimetroCuadrado;
        return;
    }
}

//Triangulo
function calcularTriangulo(){
    const ladoTriangulo1 = Number(inputLado1Triangulo.value);
    const ladoTriangulo2 = Number(inputLado2Triangulo.value);
    const ladoTriangulo3 = Number(inputLado3Triangulo.value);
    const semiperimetro = (ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3) / 2;
    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
    let alturaTriangulo;
    let areaTriangulo;

    if(!ladoTriangulo1 || !ladoTriangulo2 || !ladoTriangulo3){
        window.alert('Por favor, ingresa todo los lados del triángulo');
        return;
    }else{
        resultadoPerimetroTriangulo.innerText = 'El perímetro es: ' + perimetroTriangulo;
    
        if(ladoTriangulo1 == ladoTriangulo2 && ladoTriangulo1 == ladoTriangulo3){
            alturaTriangulo = Math.sqrt((ladoTriangulo1 ** 2) - ( (ladoTriangulo3 ** 2) ) / 4);
            areaTriangulo = (ladoTriangulo3 * alturaTriangulo.toFixed(2)) / 2;
            resultadoAreaTriangulo.innerText = 'El área es: ' + areaTriangulo.toFixed(2);
            return;
        }
        
        if(ladoTriangulo1 == ladoTriangulo2){
            alturaTriangulo = Math.sqrt((ladoTriangulo1 ** 2) - ( (ladoTriangulo3 ** 2) ) / 4);
            areaTriangulo = (ladoTriangulo3 * alturaTriangulo.toFixed(2)) / 2;
            resultadoAreaTriangulo.innerText = 'El área es: ' + areaTriangulo.toFixed(2);
            return;
        }
        
        if(ladoTriangulo1 != ladoTriangulo2 && ladoTriangulo1 != ladoTriangulo3 && ladoTriangulo2 != ladoTriangulo3){
            alturaTriangulo = Math.round((2/ladoTriangulo1) * Math.sqrt(semiperimetro*(semiperimetro - ladoTriangulo1)*(semiperimetro - ladoTriangulo2)*(semiperimetro - ladoTriangulo3)));
            areaTriangulo = (ladoTriangulo3 * alturaTriangulo.toFixed(2)) / 2;
            resultadoAreaTriangulo.innerText = 'El área es: ' + areaTriangulo.toFixed(2);
            return;
        }
    }
}

//Circulo
function calcularCirculo(){
    const radio = Number(inputRadioCircunferencia.value);
    const pi = Math.PI;
    const areaCirculo = (radio ** 2) * pi;
    const perimetroCirculo = 2 * radio * pi;

    if(!radio){
        window.alert('Por favor, ingresa el radio');
        return;
    }else{
        resultadoAreaCircunferencia.innerText = 'El área es: ' + areaCirculo.toFixed(2);
        resultadoPerimetroCircunferencia.innerText = 'El perímetro es: ' + perimetroCirculo.toFixed(2);
        return;
    }
}