

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

const saladio = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    },

]

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e) => e.id == id)

    if( empleado){
        callback(null, empleado)
    }else{
        callback (`Empleado con id ${id} No Exisite`)
    }

    return empleado

}

getEmpleado(1, (err, empleado) => {

    if(err){
        console.log('ERR');
        return console.log(err);
    }

    console.log('Empleado Existe!!');
    console.log(empleado);
})
