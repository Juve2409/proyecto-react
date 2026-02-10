const productos = [
{ nombre: "Laptop", precio: 1200000,
stock: 5 },
{ nombre: "Mouse", precio: 35000,
stock: 0 },
{ nombre: "Teclado", precio: 85000,
stock: 12 }
];
// Implementa estas funciones:
// 1. obtenerDisponibles(productos)
// 3 Productos con stock > 0
const obtenerDisponibles = (productos) =>{
    return productos.filter(p=> p.stock >0)
};
console.log('productos disponibles',obtenerDisponibles(productos));


// 2. calcularInventario(productos)
// 3 Valor total del inventario
const calcularInventario = (productos) =>{
const total = productos.reduce((sum, p) => sum + p.precio, 0)
return total;
};
console.log('total de inventario',calcularInventario(productos));
// 3. aplicarDescuento(productos,porcentaje)
// 3 Reduce precios X%
const aplicarDescuento = (productos,porcentaje) =>{
return productos.map(p => ({p, precio: p.precio * (1 - porcentaje / 100)}));
} 
console.log ("Precio: %",aplicarDescuento(productos, 10));
// 4. ordenarPorPrecio(productos)
// 3 Array ordenado menor a mayor
const ordenarPorPrecio = (productos) =>{
return productos.sort((a,b) => a.precio - b.precio);
};
console.log('ordenar por precio',ordenarPorPrecio(productos));