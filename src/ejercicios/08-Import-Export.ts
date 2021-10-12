import { Producto, calcIVA } from './07-Dest-Arg';

const carritoCompras:Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 200
    }
];

const [total, iva] = calcIVA(carritoCompras);

console.log(total, iva);