import { ScriptElementKindModifier } from "typescript";

interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalles
}

interface Detalles{
    autor:string,
    anio:number
}

const reproductor:Reproductor= {
    volumen: 60,
    segundo: 36,
    cancion: 'La Chona',
    detalles: {
        autor: 'Los tucanes de Tijuana',
        anio: 1995
    }
}

const {volumen, segundo, cancion, detalles} = reproductor
const {autor} = detalles;

console.log('Volumen: ', volumen);
console.log(segundo);
console.log(cancion);
console.log(autor);