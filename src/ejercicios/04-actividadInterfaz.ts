interface Direccion{
    calle:string,
    ciudad:string,
    pais:string
};

interface Heroe{
    nombre:string,
    edad:number,
    direccion:Direccion,
    mostrarDireccion:()=>string
}

const superHeroe:Heroe = {
    nombre: 'Spiderman',
    edad: 16,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.calle + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais
    }
};

