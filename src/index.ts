// Clases

class Pokemon {
    static algo: string;

    constructor(
        public nombre:string,
        public habilidad:string,
        public pAtaque:number,
        public pDefensa:number,
    ){

    }
}

/* Diseñar una functión que permita luchar a 2 o n pokemons y nos diga cual es el ganador
   despues de una resta al ser afectado por los otros puntos de ataque */

function luchar(pokemons: Pokemon[]):[Pokemon, number]{
    let defRestante:number[] = [];

    let fTotal = 0;
    pokemons.forEach(({pAtaque}) => {
        fTotal += pAtaque;
    });

    for(let i = 0; i < pokemons.length; i++){
        let defFinal = pokemons[i].pDefensa + pokemons[i].pAtaque - fTotal;
        defRestante.push(defFinal);
    }

    let strongest = 0;
    for(let i = 0; i < defRestante.length; i++){
        if(defRestante[i] > defRestante[strongest]){
            strongest = i;
        }
    }

    return [pokemons[strongest], defRestante[strongest]];
}

const pikachu = new Pokemon('Pikachu', 'ImpacTrueno', 40, 130);

const charmander = new Pokemon('Charmander', 'FlameThrower', 50, 50);

const squirtle = new Pokemon('Squirtle', 'Surf', 70, 120)

console.log(luchar([pikachu, charmander, squirtle]));