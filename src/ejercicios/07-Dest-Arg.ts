export interface Producto{
    desc: string;
    precio: number;
}

const telefono:Producto = {
    desc: 'iPhone 13',
    precio: 1000
}

const tableta:Producto = {
    desc: 'Huawei Tab',
    precio: 500
}

function calcularIVA(productos: Producto[]):number{
    let total = 0;
    productos.forEach((producto:Producto) => {
        total += producto.precio;
    });

    return total * 0.16;
}

export function calcIVA(productos:Producto[]):[number, number]{
    let total = 0;

    productos.forEach(({precio}) => {
        total += precio;
    });

    return [total, total * 0.16];
}

const articulos = [telefono, tableta];

const iva = calcularIVA(articulos);

console.log(iva);

const [total, IVA] = calcIVA(articulos);
console.log('IVA: ', IVA);
console.log('Total: ', total);