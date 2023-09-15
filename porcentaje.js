const inputPrice = document.querySelector('#price');

const sectionContainer = document.querySelector('.section-container');
const cerrarAsideIcon = document.querySelector('.close-icon-cuadrado');

const detalleProductoAside = document.querySelector('#aside-container');
const productoAside = document.querySelector('.producto-aside');
let nombreProduc;

cerrarAsideIcon.addEventListener('click', cerrarAside);
//obtiene el alt de una imagen
sectionContainer.addEventListener('click', (e) => {nombreProduc = e.target.alt;});
sectionContainer.addEventListener('click', abrirAside);


function cerrarAside(){
    detalleProductoAside.classList.add('inactive');
}

function abrirAside(){
    detalleProductoAside.classList.remove('inactive');
    productoAside.innerHTML = '';

    //encuentra el nombre del producto con el alt de la imagen
    let objetoAside = listaProductos.find((producto) => producto.nombre == nombreProduc);
    
    console.log(objetoAside);

    const divDetallesProducto = document.createElement('div');
    divDetallesProducto.classList.add('detalles-producto');

    const figureProducto = document.createElement('figure');
    figureProducto.classList.add('producto');
    const imgFigure = document.createElement('img');
    imgFigure.setAttribute('src', objetoAside.imagen);
    imgFigure.setAttribute('alt', objetoAside.nombre);
    
    figureProducto.appendChild(imgFigure);

    const detallesAside = document.createElement('div');
    detallesAside.classList.add('detalles');
    const nombreProductoAside = document.createElement('p');
    nombreProductoAside.innerText = objetoAside.nombre;
    const precioProductoAside = document.createElement('p');
    precioProductoAside.innerText = '$ ' + objetoAside.precioProduct;

    const divDiscount = document.createElement('div');
    divDiscount.classList.add('discount');
    const labelCode = document.createElement('label');
    labelCode.setAttribute('id', 'code');
    labelCode.setAttribute('for', 'code-input');
    labelCode.innerText = 'Ingresa el código de descuento';
    const inputCode = document.createElement('input');
    inputCode.setAttribute('id', 'code-input');
    inputCode.setAttribute('type', 'text');

    divDiscount.appendChild(labelCode);
    divDiscount.appendChild(inputCode);

    const botonCacular = document.createElement('button');
    botonCacular.classList.add('calcular-descuento');
    botonCacular.innerText = 'Calcular Descuento';
    botonCacular.addEventListener('click', calcularDescuento);

    const pResultado = document.createElement('p');
    pResultado.setAttribute('id', 'result');

    detallesAside.appendChild(nombreProductoAside);
    detallesAside.appendChild(precioProductoAside);

    divDetallesProducto.appendChild(figureProducto);
    divDetallesProducto.appendChild(detallesAside);
    divDetallesProducto.appendChild(divDiscount);
    divDetallesProducto.appendChild(botonCacular);
    divDetallesProducto.appendChild(pResultado);

    productoAside.appendChild(divDetallesProducto);
    
    detalleProductoAside.appendChild(productoAside);
}

const cuponesList = [];
cuponesList.push({
    nombre: 'pelosos',
    descuento: 50,
});
cuponesList.push({
    nombre: 'bebusillo',
    descuento: 40,
});
cuponesList.push({
    nombre: 'demon',
    descuento: 30,
});
cuponesList.push({
    nombre: 'tokito',
    descuento: 20,
});
cuponesList.push({
    nombre: 'platzi',
    descuento: 10,
});

const listaProductos = [];
listaProductos.push({
    nombre: 'Tablet',
    precioProduct: 600,
    imagen: './images/tablet.jpg',
});
listaProductos.push({
    nombre: 'Smart Watch',
    precioProduct: 200,
    imagen: './images/reloj.jpg',
});
listaProductos.push({
    nombre: 'Auriculares',
    precioProduct: 25,
    imagen: './images/auriculares.jpg',
});

function calcularDescuento(){
    const inputCodigoCupon = document.querySelector('#code-input');
    const resultado = document.querySelector('#result');
    let objetoAside = listaProductos.find((producto) => producto.nombre == nombreProduc);

    // (P * (100 - D))/ 100
    const precio = objetoAside.precioProduct;
    const cupon = inputCodigoCupon.value;
    let descuento;

    if(!cupon){
        window.alert('Moniooos 😒, debes llenar el formulario');
        return;
    }

    //metodo filter
    const cuponEncontradoFilter = cuponesList.filter((cuponElement) => cuponElement.nombre == cupon);

    if(cuponEncontradoFilter.length > 0){
        descuento = cuponEncontradoFilter[0].descuento;
    }else{
        resultado.innerText = 'Quejeso :v 😖 No hay ese cupon';
        return;
    }

    //metodo find
    //const cuponEncontradoFind = cuponesList.find((cuponElement) => cuponElement.nombre == cupon);

    //if con metodo find
    // if (cuponEncontradoFind){
    //     descuento = cuponEncontradoFind.descuento;
    // }else{
    //     resultado.innerText = 'Quejeso :v 😖 No hay ese cupon';
    //     return;
    // }


    //si dentro del objeto de cupones existe algun elemento que se llame igual al cupon que ingreso el usuario
    //usamos este if con el objeto cuponesOBJ
    // if (cuponesOBJ[cupon]) {
    //     descuento = cuponesOBJ[cupon];
    // }else{
    //     resultado.innerText = 'Quejesoo :v 😖';
    //     return;
    // }

    // if(descuento > 100 || descuento < 0){
    //     resultado.innerText = 'Moniooos 😒, ingresa bien el descuento';
    //     return;
    // }


    const nuevoDescuento = (precio * (100 - descuento))/100;
    resultado.innerText = 'El nuevo precio con descuento es: $' + nuevoDescuento;
    return;
}
