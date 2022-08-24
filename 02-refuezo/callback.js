

const getUsuaiorById =(id, callback) => {
    const user = {
        id,
        nombre: 'Santo',

    }


    setTimeout(() => {
        callback(user)
    }, 2000);
}


getUsuaiorById(10, ( papito)=> {
    console.log(papito.id);
    console.log(papito.nombre.toUpperCase());
})