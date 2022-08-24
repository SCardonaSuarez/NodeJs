

const empleados = [
    {
        id: 1,
        nombre: 'Santiago'
    },
    {
        id: 2,
        nombre: 'Carolina'
    },
    {
        id: 3,
        nombre: 'Yamile'
    }
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    },

]


const getEmpleado =(id, callback) =>{


    const empleado = empleados.find(e=> e.id == id)?.nombre

    // if(empleado){
    //     callback(null, empleado)
    
    // }else{
    //      callback(`Empleado con id ${id} no existe`)
    // }

    return new Promise((resolve, reject)=> {

        (empleado)
            ? resolve(empleado)
            : reject(`No exisite empleado con id ${id}`)

    })

}

const getSalario = (id, callback)=> {

    const salario = salarios.find(s => s.id === id)?.salario

    return new Promise((resolve, reject)=> {

        (salario)
            ? resolve(salario)
            : reject(`No existe salario con id${id}`)

    })
}



const id = 2;

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err))

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err))


// getEmpleado(id)
//     .then(empleado => {

//         getSalario(id)
//             .then(salario => {
//                 console.log(`El empleado ${empleado} tiene un salario de ${salario}`);
//             })
//             .catch(err => console.log(err))
//     })

//promesas en cadena

let nombre

getEmpleado(id)
    .then(empleado =>{
        nombre = empleado
        return getSalario(id)
    })
    .then( salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))
    .catch(err => console.log(err))