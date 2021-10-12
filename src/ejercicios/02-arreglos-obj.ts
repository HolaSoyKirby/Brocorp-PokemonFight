let tecnologias:string[] = ['JS', 'TS', 'C'];

interface Persona{
    nombre: string,
    tecnologias: string[],
    edad: number,
    origen?: string
}

const persona:Persona={
    nombre: 'Miguel',
    tecnologias: ['JS', 'TS', 'C'],
    edad: 15,
}

persona.origen = 'León';

console.table(persona);