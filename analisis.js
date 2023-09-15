//Analisis salarial
function encontrarPersona (persona){
    return salarios.find((user) => user.name == persona);
}

function medianaPorPersona (nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos; //trae un array de los trabajos de la persona
    const salariosPersona = trabajos.map((item) => item.salario);//crea un array de salarios
    const medianaSalario = EstadisticaPelosos.calcularMediana(salariosPersona);
    //console.log(medianaSalario);
    return medianaSalario;
}

function proyeccionPorPersona (nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos; 

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i-1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
    const medianaPorcentajeCrecimiento = EstadisticaPelosos.calcularMediana(porcentajesCrecimiento);


    const ultimoSalario = trabajos[trabajos.length-1].salario;
    const proyeccion = (ultimoSalario * medianaPorcentajeCrecimiento) + ultimoSalario;
    return proyeccion;
}

//Analisis empresarial
const empresas = {}

//recorremos el array SALARIOS por cada una de las personas 
for(persona of salarios){
    //por cada persona recorremos el array TRABAJOS que tuvo esa persona
    for(trabajo of persona.trabajos){
        //si industrias Mokepon no existia
        if(!empresas[trabajo.empresa]){
            //creamos la propiedad industrias mokepon que sera un nuevo objeto
            empresas[trabajo.empresa] = {};
        }
        //si dentro de industrias mokepon alguien mas trabajo en ese mismo año... si no existe
        ////////////////////////
        //si no existia la propiedad 2018 dentro de industrias mokepon
        if(!empresas[trabajo.empresa][trabajo.year]){
            //creamos una propiedad con cada año de trabajo de la empresa y lo guardamos en su respectivo objeto EMPRESA, cuyos valores estaran dentro de un array
            ////////////////////////////
            //creamos la propiedad 2018 y le decimos q sea un array
            empresas[trabajo.empresa][trabajo.year]=[];
        }

        //Agregamos los salarios de cada año respectivos a cada empresa
        /////////////////////////////
        //por cada persona que estuvo en industrias Mokepon en el año 2018 insertamos los salarios
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}
console.log(empresas);

//funcion medianaPorAnio(nombreEmpresa, año)
function medianaEmpresaYear (nombreEmpresa, anio){
    //Recuerda ctm!! puedes verificar si existe propiedad de un objeto con [] monios..!!
    if(!empresas[nombreEmpresa]){
        console.warn('La empresa no existe');
    }else if(!empresas[nombreEmpresa][anio]){
        console.warn('Ese año no esta estipulado dento de la empresa');
    }else{
        const salariosEmpresa = empresas[nombreEmpresa][anio]
        const medianaSalarioEmpresa = EstadisticaPelosos.calcularMediana(salariosEmpresa);
        return medianaSalarioEmpresa;
    }
}

function proyeccionSalariosEmpresa (nombreEmpresa){
    if(!empresas[nombreEmpresa]){
        console.warn('La empresa no existe');
    }else{
        const empresasAnio = Object.keys(empresas[nombreEmpresa]);
        const listaEmpresasAnio = empresasAnio.map((anio) => {
            return medianaEmpresaYear(nombreEmpresa,anio)
        })
        
        console.log(listaEmpresasAnio);

        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaEmpresasAnio.length; i++) {
            const medianaActual = listaEmpresasAnio[i];
            const medianaPasada = listaEmpresasAnio[i-1];
            const crecimiento = medianaActual - medianaPasada;
            const porcentajeCrecimiento = crecimiento / medianaPasada;
            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }
        const medianaPorcentajeCrecimiento = EstadisticaPelosos.calcularMediana(porcentajesCrecimiento);

        const ultimaMediana = listaEmpresasAnio[listaEmpresasAnio.length-1];
        const proyeccion = (ultimaMediana * medianaPorcentajeCrecimiento) + ultimaMediana;
        return proyeccion;
    }
}

//Analisis general
function medianaGeneral (){
    const listaMedianas = salarios.map((persona) => medianaPorPersona(persona.name));
    const mediana = EstadisticaPelosos.calcularMediana(listaMedianas);

    return mediana;
}

function medianaTop10 (){
    const listaMedianas = salarios.map((persona) => medianaPorPersona(persona.name));

    const medianasOrdenadas = EstadisticaPelosos.ordenarArray(listaMedianas);

    const cantidad = medianasOrdenadas.length / 10;
    const limite = medianasOrdenadas.length-cantidad;

    //mi solucion xD
    // for (let i = medianasOrdenadas.length; i > (limite-1); i--) {
    //     console.log(medianasOrdenadas[i]);
    // }

    //metodo slice
    //slice(18,20)
    //No cambia el tamaño del array
    const top10Slice = medianasOrdenadas.slice(limite, medianasOrdenadas.length);
    console.log({medianasOrdenadas,top10Slice});

    //metodo splice
    //Cambia el tamaño del array 
    // const top10Splice = medianasOrdenadas.splice(limite, medianasOrdenadas.length);
    // console.log({medianasOrdenadas,top10Splice});

    const medianaTop10Slice = EstadisticaPelosos.calcularMediana(top10Slice);
    return medianaTop10Slice;
}