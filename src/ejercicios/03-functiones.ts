function suma(a:number, b:number):number {
    return a + b;
}

console.log(suma(2, 5));

const sumaFlecha = (a:number, b:number):number => {
    return a + b;
}

function conversion(numero:number, otro_numero?:number, base:number = 2):number{
    return numero * otro_numero * base;
}

console.log(conversion(10, 10));

interface Pokemon{
    nombre: string,
    pv: number,
    mostrarPv:() => void;
}

function curar(pokemon:Pokemon, curarP):void {
    pokemon.pv += curarP;
}

const nuevoPokemon:Pokemon= {
    nombre: 'Pikachu',
    pv: 1000,
    mostrarPv(){
        console.log('PV ', this.pv);
    }
}

curar(nuevoPokemon, 10000);
nuevoPokemon.mostrarPv();