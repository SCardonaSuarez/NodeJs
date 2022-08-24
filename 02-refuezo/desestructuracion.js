const deadpool = {
    nombre: 'Wede',
    apellido:'Wiston',
    poder: 'Regeneracion',
    edad: 50,
    getNombre (){
        return `${this.nombre} ${this.apellido}`
    }
}



function imprimeHeroe({nombre, apellido, poder, edad}){
    // const {nombre, apellido, poder, edad= 30} = deadpool
    console.log(nombre, apellido, poder, edad);

}

// imprimeHeroe(deadpool)

const heroes = ["Deadpool", 'Superman', 'Batman']

const[h1, , h3] = heroes

console.log(h1, h3);
console.log(h3);